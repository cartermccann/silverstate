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
import ConditionPage from './ConditionPage'
import { getConditionBySlug } from '../../data/conditions'
import { site } from '../../data/common'
import { meta as anxietyMeta } from './Anxiety'
import { meta as depressionMeta } from './Depression'
import { meta as traumaPstdMeta } from './TraumaPTSD'
import { meta as suicidalIdeationMeta } from './SuicidalIdeation'
import { meta as ocdMeta } from './OCD'
import { meta as bipolarMeta } from './BipolarDisorder'
import { meta as autismMeta } from './AutismSpectrum'
import { meta as oddMeta } from './OppositionalDefiant'
import { meta as conductMeta } from './ConductDisorder'
import { meta as dmddMeta } from './DMDD'
import { meta as bpdMeta } from './BPD'
import { meta as adjustmentMeta } from './AdjustmentDisorder'
import { meta as dualDiagnosisMeta } from './DualDiagnosis'
import { meta as substanceAbuseMeta } from './SubstanceAbuse'
import { meta as alcoholAbuseMeta } from './AlcoholAbuse'
import { meta as opioidAbuseMeta } from './OpioidAbuse'
import { meta as benzodiazepineAbuseMeta } from './BenzodiazepineAbuse'
import { meta as cocaineAbuseMeta } from './CocaineAbuse'
import { meta as methAbuseMeta } from './MethAbuse'
import { meta as cannabisAbuseMeta } from './CannabisAbuse'
import { meta as anorexiaMeta } from './AnorexiaNervosa'
import { meta as bulimiaMeta } from './BulimiaNervosa'
import { meta as bingeEatingMeta } from './BingeEating'
import { meta as arfidMeta } from './ARFID'
import { meta as osfedMeta } from './OSFED'
import { routePaths } from '../../routes'

const anxiety = getConditionBySlug('anxiety-treatment')!
const mentalHealthMetas = [
  anxietyMeta,
  depressionMeta,
  traumaPstdMeta,
  suicidalIdeationMeta,
  ocdMeta,
  bipolarMeta,
  autismMeta,
  oddMeta,
  conductMeta,
  dmddMeta,
  bpdMeta,
  adjustmentMeta,
]
const substanceAbuseMetas = [
  dualDiagnosisMeta,
  substanceAbuseMeta,
  alcoholAbuseMeta,
  opioidAbuseMeta,
  benzodiazepineAbuseMeta,
  cocaineAbuseMeta,
  methAbuseMeta,
  cannabisAbuseMeta,
]
const eatingDisorderMetas = [anorexiaMeta, bulimiaMeta, bingeEatingMeta, arfidMeta, osfedMeta]

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

function renderConditionPage() {
  return render(
    <MemoryRouter initialEntries={['/conditions/anxiety-treatment']}>
      <ConditionPage condition={anxiety} />
    </MemoryRouter>,
  )
}

describe('ConditionPage - Story 4.2', () => {
  it('renders one FAQPage and one MedicalCondition JSON-LD script', () => {
    const { container } = renderConditionPage()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')

    expect(scripts).toHaveLength(2)

    const schemaTypes = Array.from(scripts)
      .map((script) => JSON.parse(script.textContent || '{}'))
      .map((schema) => schema['@type'])

    expect(schemaTypes.filter((type) => type === 'FAQPage')).toHaveLength(1)
    expect(schemaTypes.filter((type) => type === 'MedicalCondition')).toHaveLength(1)
  })

  it('renders reviewer attribution, source citations, and key internal links', () => {
    renderConditionPage()

    expect(screen.getByText(/Clinically reviewed by/i)).toBeInTheDocument()

    const insurance = screen.getByRole('link', { name: /verify your insurance coverage/i })
    const admissions = screen.getByRole('link', { name: /start the admissions process/i })

    expect(insurance.getAttribute('href')).toBe('/insurance')
    expect(admissions.getAttribute('href')).toBe('/admissions')

    const sourceLink = screen.getByRole('link', { name: anxiety.sources[0].label })
    expect(sourceLink.getAttribute('target')).toBe('_blank')
    expect(sourceLink.getAttribute('rel')).toContain('noopener')
  })

  it('keeps primary conversion CTAs at 44px touch-target minimum', () => {
    renderConditionPage()

    const insurance = screen.getByRole('link', { name: /verify your insurance coverage/i })
    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const callLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+silver state\\s+at\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(insurance).toHaveStyle({ minHeight: '44px' })
    expect(admissions).toHaveStyle({ minHeight: '44px' })
    expect(callLinks.length).toBeGreaterThan(0)

    for (const callLink of callLinks) {
      expect(callLink).toHaveStyle({ minHeight: '44px' })
    }
  })
})

describe('Mental health route metadata - Story 4.2', () => {
  it('does not duplicate JSON-LD in route meta exports', () => {
    for (const meta of mentalHealthMetas) {
      const jsonLdEntries = meta.filter((tag) => tag['script:ld+json'])
      expect(jsonLdEntries).toHaveLength(0)
    }
  })

  it('keeps canonical and Open Graph URLs on /conditions paths', () => {
    for (const meta of mentalHealthMetas) {
      const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
      const ogUrl = meta.find((tag) => tag.property === 'og:url')

      expect(canonical?.href).toContain('/conditions/')
      expect(ogUrl?.content).toContain('/conditions/')
    }
  })
})

describe('Substance abuse route metadata - Story 4.3', () => {
  it('does not duplicate JSON-LD in route meta exports', () => {
    for (const meta of substanceAbuseMetas) {
      const jsonLdEntries = meta.filter((tag) => tag['script:ld+json'])
      expect(jsonLdEntries).toHaveLength(0)
    }
  })

  it('keeps canonical and Open Graph URLs on /conditions paths', () => {
    for (const meta of substanceAbuseMetas) {
      const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
      const ogUrl = meta.find((tag) => tag.property === 'og:url')

      expect(canonical?.href).toContain('/conditions/')
      expect(ogUrl?.content).toContain('/conditions/')
    }
  })

  it('keeps unique page titles across the 8 substance pages', () => {
    const titles = substanceAbuseMetas
      .map((meta) => meta.find((tag) => tag.title)?.title)
      .filter((title): title is string => Boolean(title))

    expect(titles.length).toBe(substanceAbuseMetas.length)
    expect(new Set(titles).size).toBe(titles.length)
  })
})

describe('Eating disorder route metadata - Story 4.4', () => {
  it('does not duplicate JSON-LD in route meta exports', () => {
    for (const meta of eatingDisorderMetas) {
      const jsonLdEntries = meta.filter((tag) => tag['script:ld+json'])
      expect(jsonLdEntries).toHaveLength(0)
    }
  })

  it('keeps canonical and Open Graph URLs on /conditions paths', () => {
    for (const meta of eatingDisorderMetas) {
      const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
      const ogUrl = meta.find((tag) => tag.property === 'og:url')

      expect(canonical?.href).toContain('/conditions/')
      expect(ogUrl?.content).toContain('/conditions/')
    }
  })

  it('keeps unique page titles across the 5 eating disorder pages', () => {
    const titles = eatingDisorderMetas
      .map((meta) => meta.find((tag) => tag.title)?.title)
      .filter((title): title is string => Boolean(title))

    expect(titles.length).toBe(eatingDisorderMetas.length)
    expect(new Set(titles).size).toBe(titles.length)
  })

  it('keeps all 25 condition routes available across stories 4.2-4.4', () => {
    const conditionRoutes = routePaths.filter(
      (path) => path.startsWith('/conditions/') && path !== '/conditions',
    )

    expect(conditionRoutes).toHaveLength(25)
  })
})
