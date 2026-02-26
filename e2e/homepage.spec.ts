import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads successfully and displays the hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/silver state/i)
    await expect(page.locator('main#main-content').first()).toBeVisible()
  })

  test('phone CTA is visible and has correct tel: link', async ({ page }) => {
    await page.goto('/')
    const phoneCta = page.locator('a[href^="tel:"]').first()
    await expect(phoneCta).toBeVisible()
    await expect(phoneCta).toHaveAttribute('href', /^tel:/)
  })

  test('header is present with logo', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header').first()
    await expect(header).toBeVisible()
    await expect(header.locator('img').first()).toBeVisible()
  })
})
