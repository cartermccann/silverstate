import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home, { meta } from './Home'
import { site } from '../data/common'
import {
  finalCtaData,
  heroData,
  introData,
  whoThisIsForData,
  programHighlightsData,
  statsData,
  teamOverviewData,
} from '../data/homepage'

const normalizedPhone = site.phoneTel.replace(/^tel:/, '').replace(/[^\d]/g, '')
const e164Phone = normalizedPhone.startsWith('1') ? `+${normalizedPhone}` : `+1${normalizedPhone}`

function renderHome() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Home />
    </MemoryRouter>,
  )
}

describe('Home — SEO meta export', () => {
  it('exports a meta array', () => {
    expect(Array.isArray(meta)).toBe(true)
    expect(meta.length).toBeGreaterThan(0)
  })

  it('includes a title tag', () => {
    const titleTag = meta.find((t) => t.title)
    expect(titleTag).toBeDefined()
    expect(titleTag!.title).toContain('Silver State')
  })

  it('includes a meta description under 160 chars', () => {
    const descTag = meta.find((t) => t.name === 'description')
    expect(descTag).toBeDefined()
    expect(descTag!.content!.length).toBeLessThanOrEqual(160)
    expect(descTag!.content).toContain(site.phone)
  })

  it('includes canonical URL for homepage', () => {
    const canonical = meta.find((t) => t.tagName === 'link' && t.rel === 'canonical')
    expect(canonical).toBeDefined()
    expect(canonical!.href).toMatch(/\/$/)
  })

  it('includes Open Graph tags', () => {
    const ogTitle = meta.find((t) => t.property === 'og:title')
    const ogDesc = meta.find((t) => t.property === 'og:description')
    const ogUrl = meta.find((t) => t.property === 'og:url')
    const ogImage = meta.find((t) => t.property === 'og:image')
    expect(ogTitle).toBeDefined()
    expect(ogDesc).toBeDefined()
    expect(ogUrl).toBeDefined()
    expect(ogImage).toBeDefined()
  })

  it('includes JSON-LD schemas in meta array', () => {
    const jsonLdEntries = meta.filter((t) => t['script:ld+json'])
    expect(jsonLdEntries.length).toBe(2)

    const types = jsonLdEntries.map(
      (e) => (e['script:ld+json'] as Record<string, unknown>)['@type'],
    )
    expect(types).toContain('MedicalOrganization')
    expect(types).toContain('LocalBusiness')
  })
})

describe('Home — JSON-LD script tags', () => {
  it('injects MedicalOrganization and LocalBusiness script tags into document head', () => {
    renderHome()
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(2)

    const contents = Array.from(scripts).map((s) => JSON.parse(s.textContent || '{}'))
    const types = contents.map((c) => c['@type'])
    expect(types).toContain('MedicalOrganization')
    expect(types).toContain('LocalBusiness')
  })

  it('MedicalOrganization schema contains site name and phone', () => {
    renderHome()
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]')
    const medOrg = Array.from(scripts)
      .map((s) => JSON.parse(s.textContent || '{}'))
      .find((c) => c['@type'] === 'MedicalOrganization')

    expect(medOrg.name).toBe(site.name)
    expect(medOrg.telephone).toBe(e164Phone)
    expect(medOrg.hasCredential).toBeDefined()
    expect(medOrg.hasCredential.length).toBeGreaterThan(0)
  })

  it('LocalBusiness schema contains address and opening hours', () => {
    renderHome()
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]')
    const localBiz = Array.from(scripts)
      .map((s) => JSON.parse(s.textContent || '{}'))
      .find((c) => c['@type'] === 'LocalBusiness')

    expect(localBiz.address).toBeDefined()
    expect(localBiz.address.streetAddress).toBe('8225 W Robindale Rd')
    expect(localBiz.geo).toBeDefined()
    expect(localBiz.openingHoursSpecification).toBeDefined()
    expect(localBiz.aggregateRating).toBeDefined()
    expect(localBiz.aggregateRating.ratingValue).toBe(site.rating)
    expect(localBiz.aggregateRating.reviewCount).toBe(site.reviewCount)
  })
})

describe('Home — Story 2.1 hero and data sourcing', () => {
  it('renders hero, intro, and who-this-is-for copy from homepage data', () => {
    const { container } = renderHome()
    const pageText = container.textContent ?? ''

    expect(pageText).toContain(heroData.headline)
    expect(pageText).toContain(heroData.body)
    expect(pageText).toContain(introData.paragraph)
    expect(pageText).toContain(whoThisIsForData.headline)
    expect(pageText).toContain(whoThisIsForData.body)
  })

  it('renders hero video with poster from backgroundImage', () => {
    const { container } = renderHome()
    const heroVideo = container.querySelector('video[poster]')
    expect(heroVideo).toBeTruthy()
    expect(heroVideo).toHaveAttribute('poster', heroData.backgroundImage.src)
  })

  it('renders hero CTAs with proper targets', () => {
    const { container } = renderHome()

    expect(screen.getAllByText(heroData.ctaPrimary.label).length).toBeGreaterThan(0)
    const phoneLinks = container.querySelectorAll(`a[href="${site.phoneTel}"]`)
    expect(phoneLinks.length).toBeGreaterThan(0)

    const learnMoreLink = screen.getByText(heroData.ctaSecondary.label).closest('a')
    expect(learnMoreLink).toBeTruthy()
    expect(learnMoreLink).toHaveAttribute('href', heroData.ctaSecondary.href)
  })
})

describe('Home — Story 2.2 content sections', () => {
  it('renders program highlight links from programHighlightsData', () => {
    const { container } = renderHome()

    for (const program of programHighlightsData) {
      const link = container.querySelector(`a[href="/programs/${program.slug}"]`)
      expect(link).toBeTruthy()
    }
  })

  it('renders stats strip content from statsData', () => {
    renderHome()

    for (const stat of statsData) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('shows named clinical staff trust signal in team section', () => {
    renderHome()
    expect(screen.getByText(teamOverviewData.clinical)).toBeInTheDocument()
  })

  it('uses lazy loading for below-fold program section image', () => {
    renderHome()
    const programImage = screen.getByAltText('Teen participating in a therapy session')
    expect(programImage).toHaveAttribute('loading', 'lazy')
  })
})

describe('Home — Section 11 Final CTA', () => {
  it('renders the final CTA headline text', () => {
    const { container } = renderHome()
    // CharReveal splits into individual character spans, so check for text content
    const headings = container.querySelectorAll('h2')
    const headingTexts = Array.from(headings).map((h) => h.textContent?.replace(/\s+/g, ' ').trim())
    expect(headingTexts).toContain(finalCtaData.headline)
  })

  it('renders the final CTA body text', () => {
    const { container } = renderHome()
    // TextReveal may split into spans, check textContent
    const found = container.textContent?.includes(finalCtaData.body)
    expect(found).toBe(true)
  })

  it('renders the primary phone CTA with tel: link', () => {
    const { container } = renderHome()
    const phoneLinks = container.querySelectorAll(`a[href="${site.phoneTel}"].btn-white.btn-pulse`)
    expect(phoneLinks.length).toBeGreaterThan(0)
  })

  it('renders the Verify Insurance CTA linking to /insurance', () => {
    renderHome()
    const verifyLinks = screen.getAllByText('Verify Insurance')
    const insuranceLink = verifyLinks.find((el) => {
      const anchor = el.closest('a')
      return anchor?.getAttribute('href') === '/insurance'
    })
    expect(insuranceLink).toBeDefined()
  })

  it('renders the address from site data', () => {
    renderHome()
    expect(screen.getByText(site.address)).toBeInTheDocument()
  })
})

describe('Home — Conversion CTA aria-labels', () => {
  it('all phone CTA links have aria-label with phone number', () => {
    const { container } = renderHome()
    const phoneCtas = container.querySelectorAll(`a[href="${site.phoneTel}"]`)
    expect(phoneCtas.length).toBeGreaterThan(0)
    for (const cta of phoneCtas) {
      expect(cta.getAttribute('aria-label')).toContain(site.phone)
    }
  })
})

describe('Home — Internal links', () => {
  it('renders program links using React Router Link', () => {
    renderHome()
    const residentialLinks = screen.getAllByText(/Residential Treatment/i)
    expect(residentialLinks.length).toBeGreaterThan(0)
  })

  it('renders insurance hub link', () => {
    renderHome()
    const insuranceLinks = screen.getAllByText(/Verify.*Insurance|Verify your coverage/i)
    expect(insuranceLinks.length).toBeGreaterThan(0)
  })

  it('renders condition links in the conditions section', () => {
    const { container } = renderHome()
    const anxietyLink = container.querySelector('a[href="/conditions/anxiety-treatment"]')
    expect(anxietyLink).toBeTruthy()
  })
})
