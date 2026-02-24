// Mock GSAP before any imports — ScrollTrigger.register runs at import time
vi.mock('gsap', () => {
  const tl = {
    to: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    add: vi.fn().mockReturnThis(),
    kill: vi.fn(),
    progress: vi.fn().mockReturnThis(),
    pause: vi.fn().mockReturnThis(),
    play: vi.fn().mockReturnThis(),
    reverse: vi.fn().mockReturnThis(),
    restart: vi.fn().mockReturnThis(),
    clear: vi.fn().mockReturnThis(),
  }
  const mock = {
    registerPlugin: vi.fn(),
    set: vi.fn(),
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    timeline: vi.fn().mockReturnValue(tl),
    matchMedia: vi.fn().mockReturnValue({ add: vi.fn(), revert: vi.fn() }),
    context: vi.fn().mockReturnValue({ revert: vi.fn(), add: vi.fn() }),
    killTweensOf: vi.fn(),
    utils: { toArray: vi.fn((sel: unknown) => (Array.isArray(sel) ? sel : [])) },
  }
  return { default: mock, gsap: mock }
})

vi.mock('gsap/ScrollTrigger', () => ({
  default: {
    register: vi.fn(),
    create: vi.fn(),
    refresh: vi.fn(),
    getAll: vi.fn().mockReturnValue([]),
    enable: vi.fn(),
    disable: vi.fn(),
  },
  ScrollTrigger: {
    register: vi.fn(),
    create: vi.fn(),
    refresh: vi.fn(),
    getAll: vi.fn().mockReturnValue([]),
    enable: vi.fn(),
    disable: vi.fn(),
  },
}))

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home, { meta } from './Home'
import { site } from '../data/common'
import { finalCtaData } from '../data/homepage'

beforeAll(() => {
  // IntersectionObserver mock
  class MockIntersectionObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    root = null
    rootMargin = ''
    thresholds = [0]
    takeRecords = vi.fn().mockReturnValue([])
  }
  window.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver

  // matchMedia mock (needed by useIsMobile hook)
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
})

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
  it('renders MedicalOrganization and LocalBusiness script tags', () => {
    const { container } = renderHome()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(2)

    const contents = Array.from(scripts).map((s) => JSON.parse(s.textContent || '{}'))
    const types = contents.map((c) => c['@type'])
    expect(types).toContain('MedicalOrganization')
    expect(types).toContain('LocalBusiness')
  })

  it('MedicalOrganization schema contains site name and phone', () => {
    const { container } = renderHome()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    const medOrg = Array.from(scripts)
      .map((s) => JSON.parse(s.textContent || '{}'))
      .find((c) => c['@type'] === 'MedicalOrganization')

    expect(medOrg.name).toBe(site.name)
    expect(medOrg.telephone).toBe(site.phone)
    expect(medOrg.hasCredential).toBeDefined()
    expect(medOrg.hasCredential.length).toBeGreaterThan(0)
  })

  it('LocalBusiness schema contains address and opening hours', () => {
    const { container } = renderHome()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    const localBiz = Array.from(scripts)
      .map((s) => JSON.parse(s.textContent || '{}'))
      .find((c) => c['@type'] === 'LocalBusiness')

    expect(localBiz.address).toBeDefined()
    expect(localBiz.address.streetAddress).toBe('8225 W Robindale Rd')
    expect(localBiz.geo).toBeDefined()
    expect(localBiz.openingHoursSpecification).toBeDefined()
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
})
