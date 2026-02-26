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

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PHP, { meta as phpMeta } from './PHP'
import IOP, { meta as iopMeta } from './IOP'
import { phpProgram, iopProgram } from '../../data/programs'

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

function renderPHP() {
  return render(
    <MemoryRouter initialEntries={['/programs/php']}>
      <PHP />
    </MemoryRouter>,
  )
}

function renderIOP() {
  return render(
    <MemoryRouter initialEntries={['/programs/iop']}>
      <IOP />
    </MemoryRouter>,
  )
}

describe('PHP/IOP metadata (Story 3.3)', () => {
  it('exports unique titles, canonicals, and program-specific OG images', () => {
    const phpTitle = phpMeta.find((tag) => tag.title)?.title
    const iopTitle = iopMeta.find((tag) => tag.title)?.title
    const phpCanonical = phpMeta.find(
      (tag) => tag.tagName === 'link' && tag.rel === 'canonical',
    )?.href
    const iopCanonical = iopMeta.find(
      (tag) => tag.tagName === 'link' && tag.rel === 'canonical',
    )?.href
    const phpOgImage = phpMeta.find((tag) => tag.property === 'og:image')?.content
    const iopOgImage = iopMeta.find((tag) => tag.property === 'og:image')?.content

    expect(phpTitle).toBeTruthy()
    expect(iopTitle).toBeTruthy()
    expect(phpTitle).not.toBe(iopTitle)
    expect(phpCanonical).toMatch(/\/programs\/php$/)
    expect(iopCanonical).toMatch(/\/programs\/iop$/)
    expect(phpOgImage).toContain(phpProgram.heroImage)
    expect(iopOgImage).toContain(iopProgram.heroImage)
    expect(phpOgImage).not.toBe(iopOgImage)
  })
})

describe('PHP program page rendering', () => {
  it('renders PHP-specific content and related program links', () => {
    const { container } = renderPHP()

    expect(container.textContent).toContain(phpProgram.title)
    expect(container.textContent).toContain(phpProgram.overview)
    expect(container.querySelector('a[href="/programs/residential-treatment"]')).toBeTruthy()
    expect(container.querySelector('a[href="/programs/iop"]')).toBeTruthy()
    expect(container.querySelector('a[href="/admissions"]')).toBeTruthy()
  })

  it('renders program-specific FAQPage and MedicalTherapy schemas', () => {
    const { container } = renderPHP()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(2)

    const schemas = Array.from(scripts).map((script) => JSON.parse(script.textContent || '{}'))
    const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage')
    const therapySchema = schemas.find((schema) => schema['@type'] === 'MedicalTherapy')

    expect(faqSchema).toBeDefined()
    expect(therapySchema).toBeDefined()
    expect(faqSchema.mainEntity[0].name).toBe(phpProgram.faqs[0].q)
    expect(therapySchema.name).toBe(phpProgram.label)
  })
})

describe('IOP program page rendering', () => {
  it('renders IOP-specific content and related program links', () => {
    const { container } = renderIOP()

    expect(container.textContent).toContain(iopProgram.title)
    expect(container.textContent).toContain(iopProgram.overview)
    expect(container.querySelector('a[href="/programs/residential-treatment"]')).toBeTruthy()
    expect(container.querySelector('a[href="/programs/php"]')).toBeTruthy()
    expect(container.querySelector('a[href="/admissions"]')).toBeTruthy()
  })

  it('renders program-specific FAQPage and MedicalTherapy schemas', () => {
    const { container } = renderIOP()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBe(2)

    const schemas = Array.from(scripts).map((script) => JSON.parse(script.textContent || '{}'))
    const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage')
    const therapySchema = schemas.find((schema) => schema['@type'] === 'MedicalTherapy')

    expect(faqSchema).toBeDefined()
    expect(therapySchema).toBeDefined()
    expect(faqSchema.mainEntity[0].name).toBe(iopProgram.faqs[0].q)
    expect(therapySchema.name).toBe(iopProgram.label)
  })
})
