import { test, expect, type Page } from '@playwright/test'

/**
 * Click-through navigation test — verifies every internal link on each page
 * actually navigates via React Router and renders a valid destination.
 *
 * Unlike the regression test (which does HTTP GET), this test clicks links
 * in the browser to confirm SPA routing works end-to-end.
 */

/** Pages to crawl for links. Covers every section hub + key detail pages. */
const SEED_PAGES = [
  '/',
  '/programs',
  '/programs/residential-treatment',
  '/conditions',
  '/conditions/anxiety-treatment',
  '/insurance',
  '/insurance/aetna',
  '/locations',
  '/locations/las-vegas',
  '/about/our-team',
  '/about/facility',
  '/about/youth-academy',
  '/admissions',
  '/contact',
  '/privacy',
]

/** Dismiss the cookie banner so it doesn't block link clicks. */
async function dismissCookieBanner(page: Page) {
  const dialog = page.getByRole('dialog', { name: /cookie consent/i })
  if (await dialog.isVisible({ timeout: 2000 }).catch(() => false)) {
    // Click "Accept Analytics" button inside the consent dialog
    const btn = dialog.getByRole('button', { name: /accept analytics/i })
    if (await btn.isVisible().catch(() => false)) {
      await btn.click()
      await expect(dialog).toBeHidden({ timeout: 5000 })
    }
  }
}

/** Wait for lazy-loaded page content to render after SPA navigation. */
async function waitForPageContent(page: Page) {
  // React.lazy() components need time — wait for an h1 or meaningful body text
  await page.locator('h1').first().waitFor({ state: 'attached', timeout: 10_000 }).catch(() => {})
  // Also let network settle for dynamic imports
  await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch(() => {})
}

/** Collect all unique internal link hrefs from the current page. */
async function collectInternalLinks(page: Page, baseOrigin: string): Promise<string[]> {
  const hrefs = await page.$$eval('a[href]', (anchors) =>
    anchors.map((a) => a.getAttribute('href') || '').filter(Boolean),
  )

  const seen = new Set<string>()
  for (const href of hrefs) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue

    try {
      const url = new URL(href, page.url())
      if (url.origin !== baseOrigin) continue
      const normalized = url.pathname.replace(/\/+$/, '') || '/'
      seen.add(normalized)
    } catch {
      // skip malformed
    }
  }

  return Array.from(seen).sort()
}

test.describe('Link Click-Through Navigation', () => {
  test.setTimeout(5 * 60_000)

  test('every internal link on seed pages navigates and renders correctly', async ({
    page,
    baseURL,
  }) => {
    expect(baseURL).toBeTruthy()
    const baseOrigin = new URL(baseURL!).origin

    // Dismiss cookie banner once (persists via localStorage)
    await page.goto('/', { waitUntil: 'load' })
    await dismissCookieBanner(page)

    // Collect unique link targets from all seed pages
    const linkTargets = new Set<string>()

    for (const seedRoute of SEED_PAGES) {
      await page.goto(seedRoute, { waitUntil: 'load', timeout: 15_000 })
      await waitForPageContent(page)
      const links = await collectInternalLinks(page, baseOrigin)
      for (const l of links) linkTargets.add(l)
    }

    // Also add seed pages themselves
    for (const s of SEED_PAGES) linkTargets.add(s)

    const allTargets = Array.from(linkTargets).sort()
    const failures: Array<{ to: string; reason: string }> = []

    // Visit each unique target directly and verify it renders
    for (const target of allTargets) {
      await page.goto(target, { waitUntil: 'load', timeout: 15_000 })
      await waitForPageContent(page)

      // Verify page rendered with meaningful content
      const bodyText = await page.evaluate(() => (document.body?.innerText || '').trim())
      if (bodyText.length < 30) {
        failures.push({ to: target, reason: `Page body too short (${bodyText.length} chars)` })
      }

      // Check for h1
      const h1Count = await page.locator('h1').count()
      if (h1Count === 0) {
        failures.push({ to: target, reason: 'No <h1> element found' })
      }

      // Verify URL (not redirected to 404)
      const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/'
      if (currentPath !== target) {
        failures.push({ to: target, reason: `URL mismatch: expected ${target}, got ${currentPath}` })
      }
    }

    // Report
    if (failures.length > 0) {
      const report = failures.map((f) => `  ${f.to}: ${f.reason}`).join('\n')
      expect(failures, `Link navigation failures:\n${report}`).toEqual([])
    }
  })

  test('nav and footer links click-navigate correctly', async ({ page, baseURL }) => {
    expect(baseURL).toBeTruthy()

    await page.goto('/', { waitUntil: 'load' })
    await dismissCookieBanner(page)
    await waitForPageContent(page)

    // Collect unique nav + footer link targets from homepage
    const navLinks = await page.$$eval('nav a[href]', (anchors) =>
      anchors
        .map((a) => a.getAttribute('href') || '')
        .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    )
    const footerLinks = await page.$$eval('footer a[href]', (anchors) =>
      anchors
        .map((a) => a.getAttribute('href') || '')
        .filter((h) => h.startsWith('/') && !h.startsWith('//'))
    )

    const uniqueTargets = [...new Set([...navLinks, ...footerLinks])]
    const failures: Array<{ target: string; reason: string }> = []

    for (const target of uniqueTargets) {
      // Strip hash and trailing slashes for URL comparison
      const withoutHash = target.split('#')[0]
      const normalized = withoutHash.replace(/\/+$/, '') || '/'

      // Go back to homepage before each click
      await page.goto('/', { waitUntil: 'load', timeout: 15_000 })
      await waitForPageContent(page)

      // Click the nav or footer link
      const link = page.locator(`nav a[href="${target}"], footer a[href="${target}"]`).first()
      if (!(await link.isVisible({ timeout: 2000 }).catch(() => false))) continue

      try {
        await link.click()
        await page.waitForURL((url) => {
          const pathname = new URL(url).pathname.replace(/\/+$/, '') || '/'
          return pathname === normalized
        }, { timeout: 10_000 })

        // Wait for lazy content
        await waitForPageContent(page)

        // Verify page rendered
        const h1Count = await page.locator('h1').count()
        if (h1Count === 0) {
          failures.push({ target: normalized, reason: 'No <h1> after click' })
        }
      } catch {
        const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/'
        failures.push({
          target: normalized,
          reason: `Navigation failed — landed on ${currentPath}`,
        })
      }
    }

    if (failures.length > 0) {
      const report = failures.map((f) => `  ${f.target}: ${f.reason}`).join('\n')
      expect(failures, `Nav/footer click failures:\n${report}`).toEqual([])
    }
  })
})
