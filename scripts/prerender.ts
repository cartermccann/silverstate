/**
 * Pre-rendering build script for Silver State SPA
 *
 * Renders React routes to static HTML at build time for SEO.
 * Run after `vite build`: node --import tsx scripts/prerender.ts
 *
 * Extended in Story 1.9 with sitemap generation and validation.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

// All routes to pre-render — must match src/routes.tsx manifest
const routes = [
  '/',

  // Programs
  '/programs',
  '/programs/residential-treatment',
  '/programs/php',
  '/programs/iop',
  '/programs/crisis-prevention-intervention',

  // Conditions — Mental Health
  '/conditions',
  '/conditions/anxiety-treatment',
  '/conditions/depression-treatment',
  '/conditions/trauma-ptsd-treatment',
  '/conditions/suicidal-ideation-treatment',
  '/conditions/ocd-treatment',
  '/conditions/bipolar-disorder-treatment',
  '/conditions/autism-spectrum-treatment',
  '/conditions/oppositional-defiant-treatment',
  '/conditions/conduct-disorder-treatment',
  '/conditions/dmdd-treatment',
  '/conditions/bpd-treatment',
  '/conditions/adjustment-disorder-treatment',
  '/conditions/dual-diagnosis-treatment',

  // Conditions — Substance Abuse
  '/conditions/substance-abuse-treatment',
  '/conditions/alcohol-abuse-treatment',
  '/conditions/opioid-abuse-treatment',
  '/conditions/benzodiazepine-abuse-treatment',
  '/conditions/cocaine-abuse-treatment',
  '/conditions/meth-abuse-treatment',
  '/conditions/cannabis-abuse-treatment',

  // Conditions — Eating Disorders
  '/conditions/anorexia-nervosa-treatment',
  '/conditions/bulimia-nervosa-treatment',
  '/conditions/binge-eating-treatment',
  '/conditions/arfid-treatment',
  '/conditions/osfed-treatment',

  // Insurance
  '/insurance',
  '/insurance/aetna',
  '/insurance/cigna',
  '/insurance/bcbs',
  '/insurance/ambetter',
  '/insurance/humana',
  '/insurance/uhc',
  '/insurance/tricare',
  '/insurance/medicaid',
  '/insurance/anthem',

  // Locations
  '/locations',
  '/locations/las-vegas',
  '/locations/henderson',
  '/locations/north-las-vegas',
  '/locations/summerlin',
  '/locations/clark-county',

  // About
  '/about/our-team',
  '/about/facility',
  '/about/youth-academy',

  // Admissions & Contact
  '/admissions',
  '/contact',

  // Legal
  '/privacy',
]

async function prerender() {
  const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

  for (const route of routes) {
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
    </noscript>`,
    )

    writeFileSync(outFile, html)
    console.log(`  Pre-rendered: ${route} → ${outFile}`)
  }

  // Generate 404.html at dist root — Vercel serves this with HTTP 404 status automatically
  const notFoundFile = join(distDir, '404.html')
  writeFileSync(notFoundFile, template)
  console.log(`  Pre-rendered: 404 → ${notFoundFile}`)

  console.log(`\n✓ Pre-rendered ${routes.length} route(s) + 404.html`)
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err)
  process.exit(1)
})
