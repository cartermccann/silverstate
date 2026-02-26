// Mock GSAP before imports that register ScrollTrigger at module scope.
vi.mock('gsap', () => {
  const tl = {
    to: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    add: vi.fn().mockReturnThis(),
    kill: vi.fn(),
  }

  const gsapMock = {
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

  return { default: gsapMock, gsap: gsapMock }
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
import Facility, { meta as facilityMeta } from './Facility'
import YouthAcademy, { meta as youthMeta } from './YouthAcademy'
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

  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver

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

function renderFacilityPage() {
  return render(
    <MemoryRouter initialEntries={['/about/facility']}>
      <Facility />
    </MemoryRouter>,
  )
}

function renderYouthPage() {
  return render(
    <MemoryRouter initialEntries={['/about/youth-academy']}>
      <YouthAcademy />
    </MemoryRouter>,
  )
}

describe('Facility page - Story 6.2', () => {
  it('renders required schema scripts and internal links', () => {
    const { container } = renderFacilityPage()

    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts).toHaveLength(2)

    const types = Array.from(scripts).map(
      (script) => JSON.parse(script.textContent || '{}')['@type'],
    )
    expect(types).toEqual(expect.arrayContaining(['MedicalOrganization', 'LocalBusiness']))

    expect(screen.getByRole('link', { name: /meet our team/i }).getAttribute('href')).toBe(
      '/about/our-team',
    )
    expect(screen.getByRole('link', { name: /view academy/i }).getAttribute('href')).toBe(
      '/about/youth-academy',
    )
    expect(screen.getByRole('link', { name: /explore our programs/i }).getAttribute('href')).toBe(
      '/programs/residential-treatment',
    )
    expect(
      screen.getByRole('link', { name: /start the admissions process/i }).getAttribute('href'),
    ).toBe('/admissions')
  })

  it('keeps feature list semantic and conversion touch targets at 44px minimum', () => {
    const { container } = renderFacilityPage()
    expect(container.querySelectorAll('ul').length).toBeGreaterThan(0)

    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const callLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+silver state\\s+at\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(Number.parseInt(admissions.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    expect(callLinks.length).toBeGreaterThan(0)
    for (const callLink of callLinks) {
      expect(Number.parseInt(callLink.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    }
  })
})

describe('Youth Academy page - Story 6.2', () => {
  it('renders educational schema and required internal links', () => {
    const { container } = renderYouthPage()

    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts).toHaveLength(1)
    const schema = JSON.parse(scripts[0].textContent || '{}')
    expect(schema['@type']).toBe('EducationalOrganization')

    expect(screen.getByRole('link', { name: /meet our team/i }).getAttribute('href')).toBe(
      '/about/our-team',
    )
    expect(screen.getByRole('link', { name: /view facility/i }).getAttribute('href')).toBe(
      '/about/facility',
    )
    expect(screen.getByRole('link', { name: /explore our programs/i }).getAttribute('href')).toBe(
      '/programs/residential-treatment',
    )
    expect(
      screen.getByRole('link', { name: /start the admissions process/i }).getAttribute('href'),
    ).toBe('/admissions')
  })

  it('keeps feature list semantic and conversion touch targets at 44px minimum', () => {
    const { container } = renderYouthPage()
    expect(container.querySelectorAll('ul').length).toBeGreaterThan(0)

    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const callLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+silver state\\s+at\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(Number.parseInt(admissions.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    expect(callLinks.length).toBeGreaterThan(0)
    for (const callLink of callLinks) {
      expect(Number.parseInt(callLink.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    }
  })
})

describe('About route metadata - Story 6.2', () => {
  it('keeps schema output in-page and canonical/og paths and images per route', () => {
    const facilityJsonLd = facilityMeta.filter((tag) => tag['script:ld+json'])
    const youthJsonLd = youthMeta.filter((tag) => tag['script:ld+json'])
    expect(facilityJsonLd).toHaveLength(0)
    expect(youthJsonLd).toHaveLength(0)

    const facilityCanonical = facilityMeta.find(
      (tag) => tag.tagName === 'link' && tag.rel === 'canonical',
    )
    const facilityOgUrl = facilityMeta.find((tag) => tag.property === 'og:url')
    const facilityOgImage = facilityMeta.find((tag) => tag.property === 'og:image')
    expect(facilityCanonical?.href).toContain('/about/facility')
    expect(facilityOgUrl?.content).toContain('/about/facility')
    expect(facilityOgImage?.content).toContain('/facility/')

    const youthCanonical = youthMeta.find(
      (tag) => tag.tagName === 'link' && tag.rel === 'canonical',
    )
    const youthOgUrl = youthMeta.find((tag) => tag.property === 'og:url')
    const youthOgImage = youthMeta.find((tag) => tag.property === 'og:image')
    expect(youthCanonical?.href).toContain('/about/youth-academy')
    expect(youthOgUrl?.content).toContain('/about/youth-academy')
    expect(youthOgImage?.content).toContain('/academy/')
  })
})
