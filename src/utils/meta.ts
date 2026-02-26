import { site } from '../data/common'

const RAW_SITE_URL = import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com'
const SITE_URL = RAW_SITE_URL.replace(/\/+$/, '')
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-default.jpg`
const TITLE_SUFFIX = ' | Silver State'

function buildFullTitle(title: string): string {
  const normalizedTitle = title.trim()

  // Keep existing branded titles intact (e.g., "... | Silver State Treatment Center")
  if (/\|\s*silver state\b/i.test(normalizedTitle)) {
    return normalizedTitle
  }

  return `${normalizedTitle}${TITLE_SUFFIX}`
}

export interface PageMetaInput {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  jsonLd?: Record<string, unknown>[]
}

export interface MetaTag {
  title?: string
  name?: string
  property?: string
  content?: string
  tagName?: string
  rel?: string
  href?: string
  'script:ld+json'?: Record<string, unknown>
}

export function generateMeta(input: PageMetaInput): MetaTag[] {
  const normalizedPath = input.path.startsWith('/') ? input.path : `/${input.path}`
  const fullTitle = buildFullTitle(input.title)
  const canonicalUrl = `${SITE_URL}${normalizedPath}`
  const rawOgImage = input.ogImage ?? DEFAULT_OG_IMAGE
  const ogImage = rawOgImage.startsWith('http')
    ? rawOgImage
    : `${SITE_URL}${rawOgImage.startsWith('/') ? rawOgImage : `/${rawOgImage}`}`

  const tags: MetaTag[] = [
    { title: fullTitle },
    { name: 'description', content: input.description },
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },
    { name: 'robots', content: input.noIndex ? 'noindex, nofollow' : 'index, follow' },
    // Open Graph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: input.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: input.ogType ?? 'website' },
    { property: 'og:site_name', content: site.name },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: input.description },
    { name: 'twitter:image', content: ogImage },
  ]

  // JSON-LD injection
  if (input.jsonLd?.length) {
    for (const schema of input.jsonLd) {
      tags.push({ 'script:ld+json': schema })
    }
  }

  return tags
}
