import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import InsurancePage from './InsurancePage'
import { getInsuranceBySlug } from '../../data/insurance'
import { site } from '../../data/common'
import { meta as aetnaMeta } from './Aetna'
import { meta as cignaMeta } from './Cigna'
import { meta as ambetterMeta } from './Ambetter'
import { meta as uhcMeta } from './UHC'
import { meta as hpnMeta } from './HPN'
import { meta as medicaidFFSMeta } from './MedicaidFFS'
import { meta as gehaMeta } from './GEHA'
import { meta as umrMeta } from './UMR'

const aetna = getInsuranceBySlug('aetna')!
const insuranceRouteMetas = [
  aetnaMeta,
  cignaMeta,
  ambetterMeta,
  uhcMeta,
  hpnMeta,
  medicaidFFSMeta,
  gehaMeta,
  umrMeta,
]

function renderInsurancePage() {
  return render(
    <MemoryRouter initialEntries={['/insurance/aetna']}>
      <InsurancePage provider={aetna} />
    </MemoryRouter>,
  )
}

describe('InsurancePage template - Story 5.2', () => {
  it('renders provider-specific heading and primary urgency CTA', () => {
    renderInsurancePage()

    const h1 = screen.getByRole('heading', { level: 1 })
    const normalizedH1 = h1.textContent?.replace(/\s+/g, ' ').toLowerCase() ?? ''
    expect(normalizedH1).toContain('aetna coverage for adolescent treatment')

    expect(
      screen.getByRole('heading', { name: /we verify aetna coverage in under 10 minutes/i }),
    ).toBeInTheDocument()
  })

  it('renders one FAQPage JSON-LD script from provider FAQs', () => {
    const { container } = renderInsurancePage()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')

    expect(scripts).toHaveLength(1)

    const schema = JSON.parse(scripts[0].textContent || '{}')
    expect(schema['@type']).toBe('FAQPage')
    expect(Array.isArray(schema.mainEntity)).toBe(true)
    expect(schema.mainEntity).toHaveLength(aetna.faqs.length)
  })

  it('renders required internal links', () => {
    renderInsurancePage()

    expect(
      screen
        .getByRole('link', { name: /view all accepted insurance providers/i })
        .getAttribute('href'),
    ).toBe('/insurance')
    expect(
      screen.getByRole('link', { name: /learn about residential treatment/i }).getAttribute('href'),
    ).toBe('/programs/residential-treatment')
    expect(
      screen.getByRole('link', { name: /explore our therapy programs/i }).getAttribute('href'),
    ).toBe('/programs/therapy-programs')
    expect(
      screen.getByRole('link', { name: /start the admissions process/i }).getAttribute('href'),
    ).toBe('/admissions')
  })

  it('keeps primary conversion CTAs at 44px touch-target minimum', () => {
    renderInsurancePage()

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

describe('Insurance provider route metadata - Story 5.2', () => {
  it('does not duplicate JSON-LD in route meta exports', () => {
    for (const meta of insuranceRouteMetas) {
      const jsonLdEntries = meta.filter((tag) => tag['script:ld+json'])
      expect(jsonLdEntries).toHaveLength(0)
    }
  })

  it('keeps canonical and Open Graph URLs on /insurance paths', () => {
    for (const meta of insuranceRouteMetas) {
      const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
      const ogUrl = meta.find((tag) => tag.property === 'og:url')

      expect(canonical?.href).toContain('/insurance/')
      expect(ogUrl?.content).toContain('/insurance/')
    }
  })

  it('keeps unique page titles across all provider pages', () => {
    const titles = insuranceRouteMetas
      .map((meta) => meta.find((tag) => tag.title)?.title)
      .filter((title): title is string => Boolean(title))

    expect(titles.length).toBe(insuranceRouteMetas.length)
    expect(new Set(titles).size).toBe(titles.length)
  })
})
