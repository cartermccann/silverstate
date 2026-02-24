/**
 * Generate sitemap.xml from the route manifest.
 * Runs as a build step: tsx scripts/generate-sitemap.ts
 *
 * Writes to public/sitemap.xml so Vite copies it into dist/ during build.
 */

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { routePaths } from '../src/routes'

const SITE_URL = process.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'

function getPriority(path: string): string {
  if (path === '/') return '1.0'
  const depth = path.split('/').filter(Boolean).length
  if (depth === 1) return '0.8'
  return '0.6'
}

function getChangeFreq(path: string): string {
  if (path === '/') return 'weekly'
  return 'monthly'
}

function generateSitemap(routes: string[]): string {
  const today = new Date().toISOString().split('T')[0]

  const urls = routes
    .map((route) => {
      const loc = `${SITE_URL}${route === '/' ? '' : route}`
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

const xml = generateSitemap(routePaths)
const outputPath = resolve('public/sitemap.xml')
writeFileSync(outputPath, xml, 'utf-8')
console.log(`Sitemap generated: ${routePaths.length} URLs -> ${outputPath}`)
