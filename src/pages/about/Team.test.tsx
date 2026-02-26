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
import Team, { meta as teamMeta } from './Team'
import { site } from '../../data/common'
import { teamMembers } from '../../data/about'

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

function renderTeamPage() {
  return render(
    <MemoryRouter initialEntries={['/about/our-team']}>
      <Team />
    </MemoryRouter>,
  )
}

describe('Team page - Story 6.1', () => {
  it('renders page heading, differentiators, and reviewer attribution', () => {
    renderTeamPage()

    const h1 = screen.getByRole('heading', { level: 1 })
    const normalizedH1 = h1.textContent?.replace(/\s+/g, ' ').toLowerCase() ?? ''
    expect(normalizedH1).toContain('our clinical team')
    expect(screen.getByText(/4\.8\/5 rating/i)).toBeInTheDocument()
    expect(screen.getByText(/page reviewed by/i)).toBeInTheDocument()
  })

  it('renders one Person/Physician JSON-LD script per team member', () => {
    const { container } = renderTeamPage()

    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts).toHaveLength(teamMembers.length)

    const schemas = Array.from(scripts).map((script) => JSON.parse(script.textContent || '{}'))
    const types = schemas.map((schema) => schema['@type'])

    expect(types).toContain('Physician')
    expect(types).toContain('Person')
  })

  it('includes required internal links and conversion targets', () => {
    renderTeamPage()

    expect(screen.getByRole('link', { name: /view program/i }).getAttribute('href')).toBe(
      '/programs/residential-treatment',
    )
    expect(screen.getByRole('link', { name: /view facility/i }).getAttribute('href')).toBe(
      '/about/facility',
    )
    expect(
      screen.getByRole('link', { name: /start the admissions process/i }).getAttribute('href'),
    ).toBe('/admissions')
  })

  it('keeps key CTA touch targets at 44px minimum', () => {
    renderTeamPage()

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

describe('Team route metadata - Story 6.1', () => {
  it('keeps schema output in-page and avoids route-level script:ld+json duplicates', () => {
    const jsonLdEntries = teamMeta.filter((tag) => tag['script:ld+json'])
    expect(jsonLdEntries).toHaveLength(0)
  })

  it('keeps canonical and og:url metadata aligned to /about/our-team', () => {
    const canonical = teamMeta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
    const ogUrl = teamMeta.find((tag) => tag.property === 'og:url')
    const title = teamMeta.find((tag) => tag.title)?.title

    expect(canonical?.href).toContain('/about/our-team')
    expect(ogUrl?.content).toContain('/about/our-team')
    expect(title).toContain('Our Clinical Team | Silver State Adolescent Treatment Center')
  })
})
