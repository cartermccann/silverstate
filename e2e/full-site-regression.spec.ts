import fs from 'node:fs'
import path from 'node:path'
import { test, expect } from '@playwright/test'

function loadSitemapRoutes(): string[] {
  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml')
  const xml = fs.readFileSync(sitemapPath, 'utf8')
  const locRegex = /<loc>(.*?)<\/loc>/g
  const routes = new Set<string>()
  let match: RegExpExecArray | null

  while ((match = locRegex.exec(xml)) !== null) {
    try {
      const url = new URL(match[1])
      const pathname = url.pathname.replace(/\/+$/, '') || '/'
      routes.add(pathname)
    } catch {
      // Ignore malformed URL entries
    }
  }

  return Array.from(routes).sort((a, b) => a.localeCompare(b))
}

function normalizeInternalHref(href: string, pageUrl: string, baseOrigin: string): string | null {
  if (!href) return null
  if (href.startsWith('#')) return null
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
    return null
  }

  try {
    const url = new URL(href, pageUrl)
    if (url.origin !== baseOrigin) return null
    const normalized = url.pathname.replace(/\/+$/, '') || '/'
    return normalized
  } catch {
    return null
  }
}

const sitemapRoutes = loadSitemapRoutes()
const ROUTE_TIMEOUT_MS = 30_000

test.describe('Full Site Regression', () => {
  test.setTimeout(10 * 60_000)

  test('all sitemap routes render without runtime or network failures', async ({
    context,
    baseURL,
  }) => {
    expect(baseURL).toBeTruthy()
    const baseOrigin = new URL(baseURL as string).origin
    const failures: Array<{ route: string; reason: string }> = []

    for (const route of sitemapRoutes) {
      const page = await context.newPage()
      const consoleErrors: string[] = []
      const pageErrors: string[] = []
      const requestFailures: string[] = []
      const httpErrors: string[] = []

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text())
        }
      })
      page.on('pageerror', (err) => {
        pageErrors.push(String(err.message || err))
      })
      page.on('requestfailed', (req) => {
        requestFailures.push(
          `${req.method()} ${req.url()} :: ${req.failure()?.errorText || 'unknown'}`,
        )
      })
      page.on('response', (res) => {
        const status = res.status()
        if (status >= 400) {
          const url = res.url()
          const pathname = new URL(url).pathname
          if (pathname !== '/favicon.ico') {
            httpErrors.push(`${status} ${url}`)
          }
        }
      })

      try {
        const response = await page.goto(route, { waitUntil: 'load', timeout: ROUTE_TIMEOUT_MS })
        if (!response || response.status() >= 400) {
          failures.push({
            route,
            reason: `Navigation status ${response?.status() ?? 'no-response'}`,
          })
        }

        if (consoleErrors.length > 0) {
          failures.push({
            route,
            reason: `Console errors: ${consoleErrors.slice(0, 3).join(' | ')}`,
          })
        }
        if (pageErrors.length > 0) {
          failures.push({ route, reason: `Page errors: ${pageErrors.slice(0, 3).join(' | ')}` })
        }
        if (requestFailures.length > 0) {
          failures.push({
            route,
            reason: `Request failures: ${requestFailures.slice(0, 3).join(' | ')}`,
          })
        }
        if (httpErrors.length > 0) {
          failures.push({
            route,
            reason: `HTTP >=400 resources: ${httpErrors.slice(0, 3).join(' | ')}`,
          })
        }

        // Basic mobile layout signal: no horizontal overflow
        const overflow = await page.evaluate(() => {
          const doc = document.documentElement
          return doc.scrollWidth > window.innerWidth + 1
        })
        if (overflow) {
          failures.push({ route, reason: 'Horizontal overflow detected' })
        }

        // Ensure page has meaningful body text
        const bodyTextLength = await page.evaluate(
          () => (document.body?.innerText || '').trim().length,
        )
        if (bodyTextLength < 30) {
          failures.push({ route, reason: `Body text too small (${bodyTextLength})` })
        }

        // Ensure page stays on the same origin when loaded
        expect(page.url().startsWith(baseOrigin)).toBeTruthy()
      } catch (err) {
        failures.push({
          route,
          reason: `Navigation exception: ${String((err as Error).message || err)}`,
        })
      } finally {
        await page.close()
      }
    }

    expect(
      failures,
      failures.map((f) => `${f.route}: ${f.reason}`).join('\n') || 'No failures',
    ).toEqual([])
  })

  test('all discovered internal links return non-error responses', async ({
    context,
    request,
    baseURL,
  }) => {
    expect(baseURL).toBeTruthy()
    const baseOrigin = new URL(baseURL as string).origin
    const discovered = new Set<string>(sitemapRoutes)
    const statusFailures: Array<{ path: string; status: number }> = []

    for (const route of sitemapRoutes) {
      const page = await context.newPage()
      await page.goto(route, { waitUntil: 'load', timeout: ROUTE_TIMEOUT_MS })

      const hrefs = await page.$$eval('a[href]', (anchors) =>
        anchors.map((a) => a.getAttribute('href') || '').filter(Boolean),
      )

      const currentUrl = page.url()
      for (const href of hrefs) {
        const normalized = normalizeInternalHref(href, currentUrl, baseOrigin)
        if (normalized) discovered.add(normalized)
      }

      await page.close()
    }

    for (const linkPath of Array.from(discovered).sort((a, b) => a.localeCompare(b))) {
      const response = await request.get(linkPath, {
        failOnStatusCode: false,
        timeout: ROUTE_TIMEOUT_MS,
      })
      const status = response.status()
      if (status >= 400) {
        statusFailures.push({ path: linkPath, status })
      }
    }

    expect(
      statusFailures,
      statusFailures.map((f) => `${f.status} ${f.path}`).join('\n') || 'No status failures',
    ).toEqual([])
  })

  test('cookie consent persists after accepting analytics', async ({ page }) => {
    await page.goto('/')

    const dialog = page.getByRole('dialog', { name: /cookie consent/i })
    await expect(dialog).toBeVisible()

    await page.getByRole('button', { name: /accept analytics/i }).click()
    await expect(dialog).toBeHidden()

    const consentState = await page.evaluate(() => window.localStorage.getItem('ss_consent'))
    expect(consentState).toBe('granted')

    await page.reload({ waitUntil: 'load' })
    await expect(page.getByRole('dialog', { name: /cookie consent/i })).toBeHidden()
  })

  test('contact form validates and submits successfully', async ({ page }) => {
    let capturedPayload: Record<string, unknown> | null = null

    await page.route('**/api/contact', async (route) => {
      capturedPayload = route.request().postDataJSON() as Record<string, unknown>
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      })
    })

    await page.goto('/contact')

    const submit = page.getByRole('button', { name: /send message/i })
    await submit.click()

    await expect(page.getByText('Name is required')).toBeVisible()
    await expect(page.getByText('Email is required')).toBeVisible()
    await expect(page.getByText('Message is required')).toBeVisible()

    await page.getByLabel('Name *').fill('QA Tester')
    await page.getByLabel('Email *').fill('qa@example.com')
    await page.getByLabel('Phone').fill('(555) 123-4567')
    await page.getByLabel('Message *').fill('This is a valid test message for contact form QA.')

    await submit.click()

    await expect(page.getByText(/thank you/i)).toBeVisible()
    expect(capturedPayload).toMatchObject({
      name: 'QA Tester',
      email: 'qa@example.com',
      phone: '(555) 123-4567',
      message: 'This is a valid test message for contact form QA.',
    })
  })
})
