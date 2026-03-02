import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import InsuranceHub, { meta as insuranceHubMeta } from './Index'
import { insuranceProviders } from '../../data/insurance'
import { site } from '../../data/common'

function renderInsuranceHub() {
  return render(
    <MemoryRouter initialEntries={['/insurance']}>
      <InsuranceHub />
    </MemoryRouter>,
  )
}

describe('Insurance hub page - Story 5.1', () => {
  it('renders the hub heading and all provider links', () => {
    renderInsuranceHub()

    const h1 = screen.getByRole('heading', { level: 1 })
    const normalizedH1 = h1.textContent?.replace(/\s+/g, ' ').toLowerCase() ?? ''
    expect(normalizedH1).toContain('insurance coverage for adolescent treatment')

    for (const provider of insuranceProviders) {
      const providerLink = screen.getByRole('link', {
        name: new RegExp(`view ${provider.name} coverage details`, 'i'),
      })
      expect(providerLink.getAttribute('href')).toBe(`/insurance/${provider.slug}`)
    }
  })

  it('renders urgency CTA messaging and required cross-navigation links', () => {
    renderInsuranceHub()

    const urgencyParagraph = screen.getByText(/we verify insurance in under 10 minutes/i)
    expect(urgencyParagraph).toHaveTextContent(`Want answers now? Call ${site.phone}`)

    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const programs = screen.getByRole('link', { name: /view programs/i })
    const conditions = screen.getByRole('link', { name: /view conditions/i })

    expect(admissions.getAttribute('href')).toBe('/admissions')
    expect(programs.getAttribute('href')).toBe('/programs/residential-treatment')
    expect(conditions.getAttribute('href')).toBe('/conditions')
  })

  it('renders one MedicalOrganization and one FAQPage JSON-LD script', () => {
    const { container } = renderInsuranceHub()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')

    expect(scripts).toHaveLength(2)

    const schemas = Array.from(scripts).map((script) => JSON.parse(script.textContent || '{}'))
    const schemaTypes = schemas.map((schema) => schema['@type'])

    expect(schemaTypes.filter((type) => type === 'MedicalOrganization')).toHaveLength(1)
    expect(schemaTypes.filter((type) => type === 'FAQPage')).toHaveLength(1)

    const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage')
    expect(Array.isArray(faqSchema?.mainEntity)).toBe(true)
    expect(faqSchema.mainEntity.length).toBe(4)
  })

  it('keeps conversion CTA links at 44px touch-target minimum', () => {
    renderInsuranceHub()

    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const phoneLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+silver state\\s+at\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(Number.parseInt(admissions.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    expect(phoneLinks.length).toBeGreaterThan(0)

    for (const phoneLink of phoneLinks) {
      expect(Number.parseInt(phoneLink.style.minHeight || '0', 10)).toBeGreaterThanOrEqual(44)
    }
  })
})

describe('Insurance hub metadata', () => {
  it('keeps route meta free of duplicate JSON-LD entries', () => {
    const jsonLdEntries = insuranceHubMeta.filter((tag) => tag['script:ld+json'])
    expect(jsonLdEntries).toHaveLength(0)
  })

  it('includes canonical and Open Graph URL tags for /insurance', () => {
    const canonical = insuranceHubMeta.find(
      (tag) => tag.tagName === 'link' && tag.rel === 'canonical',
    )
    const ogUrl = insuranceHubMeta.find((tag) => tag.property === 'og:url')

    expect(canonical?.href).toContain('/insurance')
    expect(ogUrl?.content).toContain('/insurance')
  })
})
