import { defineConfig, devices } from '@playwright/test'

const isCi = !!process.env.CI
const host = '127.0.0.1'
const port = isCi ? 4173 : 5173

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: isCi,
  retries: isCi ? 2 : 0,
  workers: isCi ? 1 : undefined,
  reporter: isCi
    ? [['github'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
    : 'html',
  use: {
    baseURL: `http://${host}:${port}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: isCi
      ? `npm run preview -- --host ${host} --port ${port}`
      : `npm run dev -- --host ${host} --port ${port}`,
    port,
    reuseExistingServer: !isCi,
    timeout: 120_000,
  },
})
