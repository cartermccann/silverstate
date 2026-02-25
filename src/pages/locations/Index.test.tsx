// Mock GSAP before any imports
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
import LocationsHub, { meta } from './Index'
import { locations, locationHubContent, locationsBySlug } from '../../data/locations'
import { site } from '../../data/common'

beforeAll(() => {
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

function renderLocationsHub() {
  return render(
    <MemoryRouter initialEntries={['/locations']}>
      <LocationsHub />
    </MemoryRouter>,
  )
}

describe('locations data', () => {
  it('exports exactly 5 locations', () => {
    expect(locations).toHaveLength(5)
  })

  it('each location has all required fields', () => {
    for (const loc of locations) {
      expect(loc.name).toBeTruthy()
      expect(loc.slug).toBeTruthy()
      expect(loc.description).toBeTruthy()
      expect(loc.distanceFromFacility).toBeTruthy()
      expect(loc.directions).toBeTruthy()
      expect(loc.localContext).toBeTruthy()
      expect(loc.serviceAreaDescription).toBeTruthy()
      expect(loc.relatedPrograms.length).toBeGreaterThan(0)
      expect(loc.relatedConditions.length).toBeGreaterThan(0)
      expect(loc.metaTitle).toBeTruthy()
      expect(loc.metaDescription).toBeTruthy()
    }
  })

  it('includes correct slugs', () => {
    const slugs = locations.map((l) => l.slug)
    expect(slugs).toEqual([
      'las-vegas',
      'henderson',
      'north-las-vegas',
      'summerlin',
      'clark-county',
    ])
  })

  it('all locations reference valid program slugs', () => {
    const validPrograms = ['residential', 'php', 'iop']
    for (const loc of locations) {
      for (const prog of loc.relatedPrograms) {
        expect(validPrograms).toContain(prog)
      }
    }
  })

  it('locationsBySlug has entries for all locations', () => {
    expect(Object.keys(locationsBySlug)).toHaveLength(5)
    expect(locationsBySlug['las-vegas']).toBeDefined()
    expect(locationsBySlug['henderson']).toBeDefined()
    expect(locationsBySlug['north-las-vegas']).toBeDefined()
    expect(locationsBySlug['summerlin']).toBeDefined()
    expect(locationsBySlug['clark-county']).toBeDefined()
  })

  it('locationHubContent has required fields', () => {
    expect(locationHubContent.title).toBeTruthy()
    expect(locationHubContent.description).toBeTruthy()
    expect(locationHubContent.metaTitle).toBeTruthy()
    expect(locationHubContent.metaDescription).toBeTruthy()
  })
})

describe('LocationsHub — SEO meta export', () => {
  it('exports a meta array', () => {
    expect(Array.isArray(meta)).toBe(true)
    expect(meta.length).toBeGreaterThan(0)
  })

  it('includes a title tag', () => {
    const titleTag = meta.find((t) => t.title)
    expect(titleTag).toBeDefined()
    expect(titleTag!.title).toContain('Silver State')
  })

  it('includes a meta description', () => {
    const descTag = meta.find((t) => t.name === 'description')
    expect(descTag).toBeDefined()
    expect(descTag!.content).toBeTruthy()
  })

  it('includes canonical URL for /locations', () => {
    const canonical = meta.find((t) => t.tagName === 'link' && t.rel === 'canonical')
    expect(canonical).toBeDefined()
    expect(canonical!.href).toContain('/locations')
  })

  it('includes Open Graph tags', () => {
    const ogTitle = meta.find((t) => t.property === 'og:title')
    const ogDesc = meta.find((t) => t.property === 'og:description')
    expect(ogTitle).toBeDefined()
    expect(ogDesc).toBeDefined()
  })

  it('includes JSON-LD structured data', () => {
    const jsonLd = meta.find((t) => t['script:ld+json'])
    expect(jsonLd).toBeDefined()
    const schema = jsonLd!['script:ld+json']!
    expect(schema['@type']).toBe('LocalBusiness')
    expect(schema['areaServed']).toBeDefined()
  })
})

describe('LocationsHub — rendering', () => {
  it('renders the page heading', () => {
    const { container } = renderLocationsHub()
    // CharReveal splits text into individual character spans
    const h1 = container.querySelector('h1')
    expect(h1?.textContent?.replace(/\s+/g, ' ').trim()).toBe(locationHubContent.title)
  })

  it('renders all 5 service area names', () => {
    renderLocationsHub()
    for (const loc of locations) {
      expect(screen.getByText(loc.name)).toBeInTheDocument()
    }
  })

  it('renders facility address from site data', () => {
    renderLocationsHub()
    expect(screen.getByText(site.address)).toBeInTheDocument()
  })

  it('renders phone number from site data', () => {
    renderLocationsHub()
    const phoneLinks = screen.getAllByText(site.phone)
    expect(phoneLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders links to individual location pages', () => {
    renderLocationsHub()
    for (const loc of locations) {
      const link = screen.getByText(`Learn More About ${loc.name}`)
      expect(link.closest('a')).toHaveAttribute('href', `/locations/${loc.slug}`)
    }
  })

  it('renders phone CTA with correct tel: link', () => {
    renderLocationsHub()
    const phoneAnchors = document.querySelectorAll(`a[href="${site.phoneTel}"]`)
    expect(phoneAnchors.length).toBeGreaterThanOrEqual(1)
  })

  it('renders JSON-LD script tag', () => {
    renderLocationsHub()
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBeGreaterThanOrEqual(1)
    const parsed = JSON.parse(scripts[0].textContent!)
    expect(parsed['@type']).toBe('LocalBusiness')
  })

  it('renders the address element', () => {
    renderLocationsHub()
    const addressEl = document.querySelector('address')
    expect(addressEl).toBeInTheDocument()
  })

  it('renders cross-navigation links', () => {
    renderLocationsHub()
    expect(screen.getByText('View Programs →')).toBeInTheDocument()
    expect(screen.getByText('Verify Insurance →')).toBeInTheDocument()
    expect(screen.getByText('Start the Admissions Process')).toBeInTheDocument()
  })
})
