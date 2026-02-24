/**
 * Pre-rendering build script for Silver State SPA
 *
 * Renders React routes to static HTML at build time for SEO.
 * Run after `vite build`: node --import tsx scripts/prerender.ts
 *
 * Extended in Story 1.9 with full route list and sitemap generation.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

// Routes to pre-render (extended in Story 1.9 with all routes)
const routes = ['/']

async function prerender() {
  const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

  for (const route of routes) {
    // For the SPA, inject a noscript fallback and route-specific meta into the HTML
    // Full SSR rendering requires browser APIs (GSAP/Lenis) - handled in Story 1.9
    const routePath = route === '/' ? '' : route
    const outDir = join(distDir, routePath)
    const outFile = join(outDir, 'index.html')

    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true })
    }

    // Add semantic content hints for crawlers
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root"></div>
    <noscript>
      <h1>Silver State Adolescent Treatment Center</h1>
      <p>Adolescent behavioral health treatment in Las Vegas, NV. Programs include residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) for teens ages 11-17.</p>
      <p>Call (725) 525-9897 for a free consultation.</p>
    </noscript>`
    )

    writeFileSync(outFile, html)
    console.log(`  Pre-rendered: ${route} → ${outFile}`)
  }

  console.log(`\n✓ Pre-rendered ${routes.length} route(s)`)
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err)
  process.exit(1)
})
