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
import CityPage from './CityPage'
import { locations, getLocationBySlug } from '../../data/locations'
import { site } from '../../data/common'
import { meta as lasVegasMeta } from './LasVegas'
import { meta as hendersonMeta } from './Henderson'
import { meta as northLasVegasMeta } from './NorthLasVegas'
import { meta as summerlinMeta } from './Summerlin'
import { meta as clarkCountyMeta } from './ClarkCounty'
import type { LocationData } from '../../types'

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

function renderCityPage(location: LocationData) {
  return render(
    <MemoryRouter initialEntries={[`/locations/${location.slug}`]}>
      <CityPage location={location} />
    </MemoryRouter>,
  )
}

describe('getLocationBySlug', () => {
  it('returns the correct location for each slug', () => {
    for (const loc of locations) {
      expect(getLocationBySlug(loc.slug)).toBe(loc)
    }
  })

  it('returns undefined for an unknown slug', () => {
    expect(getLocationBySlug('unknown-city')).toBeUndefined()
  })
})

describe('city page meta exports — unique SEO per page', () => {
  const allMetas = [
    { name: 'Las Vegas', meta: lasVegasMeta },
    { name: 'Henderson', meta: hendersonMeta },
    { name: 'North Las Vegas', meta: northLasVegasMeta },
    { name: 'Summerlin', meta: summerlinMeta },
    { name: 'Clark County', meta: clarkCountyMeta },
  ]

  it('each page exports a meta array', () => {
    for (const { meta } of allMetas) {
      expect(Array.isArray(meta)).toBe(true)
      expect(meta.length).toBeGreaterThan(0)
    }
  })

  it('all titles are unique', () => {
    const titles = allMetas.map(({ meta }) => meta.find((t) => t.title)?.title)
    const unique = new Set(titles)
    expect(unique.size).toBe(5)
  })

  it('all canonical URLs are unique', () => {
    const canonicals = allMetas.map(
      ({ meta }) => meta.find((t) => t.tagName === 'link' && t.rel === 'canonical')?.href,
    )
    const unique = new Set(canonicals)
    expect(unique.size).toBe(5)
  })

  it('each has JSON-LD with LocalBusiness type', () => {
    for (const { meta } of allMetas) {
      const jsonLd = meta.find((t) => t['script:ld+json'])
      expect(jsonLd).toBeDefined()
      expect(jsonLd!['script:ld+json']!['@type']).toBe('LocalBusiness')
    }
  })
})

describe('CityPage template — renders with Henderson data', () => {
  const henderson = locations.find((l) => l.slug === 'henderson')!

  it('renders the city-specific heading', () => {
    const { container } = renderCityPage(henderson)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent?.replace(/\s+/g, ' ').trim()).toContain('Henderson')
  })

  it('renders distance from facility', () => {
    renderCityPage(henderson)
    expect(screen.getByText(henderson.distanceFromFacility)).toBeInTheDocument()
  })

  it('renders directions', () => {
    renderCityPage(henderson)
    expect(screen.getByText(henderson.directions)).toBeInTheDocument()
  })

  it('renders local context', () => {
    renderCityPage(henderson)
    expect(screen.getByText(henderson.localContext)).toBeInTheDocument()
  })

  it('renders facility address from site data', () => {
    renderCityPage(henderson)
    expect(screen.getByText(site.address)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    renderCityPage(henderson)
    const phoneLinks = screen.getAllByText(site.phone)
    expect(phoneLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders phone CTA with correct tel: link', () => {
    renderCityPage(henderson)
    const phoneAnchors = document.querySelectorAll(`a[href="${site.phoneTel}"]`)
    expect(phoneAnchors.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the address element', () => {
    renderCityPage(henderson)
    const addressEl = document.querySelector('address')
    expect(addressEl).toBeInTheDocument()
  })

  it('renders program links', () => {
    renderCityPage(henderson)
    expect(screen.getByText('Residential Treatment')).toBeInTheDocument()
    expect(screen.getByText('Partial Hospitalization (PHP)')).toBeInTheDocument()
    expect(screen.getByText('Intensive Outpatient (IOP)')).toBeInTheDocument()
  })

  it('renders condition links', () => {
    renderCityPage(henderson)
    expect(screen.getByText('Anxiety Treatment')).toBeInTheDocument()
    expect(screen.getByText('Depression Treatment')).toBeInTheDocument()
  })

  it('renders cross-navigation links', () => {
    renderCityPage(henderson)
    expect(screen.getByText('Verify Insurance →')).toBeInTheDocument()
    expect(screen.getByText('Start Admissions →')).toBeInTheDocument()
    expect(screen.getByText('Meet the Team →')).toBeInTheDocument()
    expect(screen.getByText('View All Areas →')).toBeInTheDocument()
  })

  it('renders JSON-LD script tag', () => {
    renderCityPage(henderson)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBeGreaterThanOrEqual(1)
    const parsed = JSON.parse(scripts[0].textContent!)
    expect(parsed['@type']).toBe('LocalBusiness')
  })
})

describe('CityPage template — content differentiation', () => {
  it('Las Vegas and Henderson render different headings', () => {
    const lasVegas = locations.find((l) => l.slug === 'las-vegas')!
    const henderson = locations.find((l) => l.slug === 'henderson')!

    const { container: lvContainer } = renderCityPage(lasVegas)
    const lvH1 = lvContainer.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()

    const { container: hContainer } = renderCityPage(henderson)
    const hH1 = hContainer.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()

    expect(lvH1).not.toBe(hH1)
    expect(lvH1).toContain('Las Vegas')
    expect(hH1).toContain('Henderson')
  })
})
