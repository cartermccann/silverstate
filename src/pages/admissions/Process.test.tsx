import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Process, { meta } from './Process'
import { admissionsFaqs, admissionsSteps } from '../../data/admissions'
import { site } from '../../data/common'

function renderAdmissionsPage() {
  return render(
    <MemoryRouter initialEntries={['/admissions']}>
      <Process />
    </MemoryRouter>,
  )
}

describe('Admissions data - Story 8.1', () => {
  it('exports four ordered admissions steps with required titles', () => {
    expect(admissionsSteps).toHaveLength(4)
    expect(admissionsSteps.map((s) => s.title)).toEqual([
      'Initial Call',
      'Insurance Verification',
      'Clinical Assessment',
      'Admission',
    ])
  })

  it('exports admissions FAQs for FAQPage schema generation', () => {
    expect(admissionsFaqs.length).toBeGreaterThanOrEqual(6)
    expect(admissionsFaqs[0]?.q).toBeTruthy()
    expect(admissionsFaqs[0]?.a).toBeTruthy()
  })
})

describe('Admissions route metadata - Story 8.1', () => {
  it('uses canonical/og metadata without route-level FAQ schema duplication', () => {
    const jsonLd = meta.filter((tag) => tag['script:ld+json'])
    expect(jsonLd).toHaveLength(0)

    const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')
    const ogUrl = meta.find((tag) => tag.property === 'og:url')
    const ogImage = meta.find((tag) => tag.property === 'og:image')

    expect(canonical?.href).toContain('/admissions')
    expect(ogUrl?.content).toContain('/admissions')
    expect(ogImage?.content).toContain('/facility/')
  })
})

describe('Admissions page rendering - Story 8.1', () => {
  it('renders heading, all step titles, and conversion CTA', () => {
    const { container } = renderAdmissionsPage()

    const h1 = container.querySelector('h1')
    expect(h1?.textContent?.replace(/\s+/g, ' ').trim()).toBe('How to Get Started')

    for (const step of admissionsSteps) {
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
    }

    const callLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+silver state\\s+at\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(callLinks.length).toBeGreaterThan(0)
    for (const callLink of callLinks) {
      expect(callLink).toHaveAttribute('href', site.phoneTel)
    }
  })

  it('renders required internal links and in-page FAQ schema script', () => {
    const { container } = renderAdmissionsPage()

    expect(screen.getByRole('link', { name: /verify insurance/i }).getAttribute('href')).toBe(
      '/insurance',
    )
    expect(screen.getByRole('link', { name: /view programs/i }).getAttribute('href')).toBe(
      '/programs/residential-treatment',
    )
    expect(screen.getByRole('link', { name: /send a message/i }).getAttribute('href')).toBe(
      '/contact',
    )

    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    expect(scripts.length).toBeGreaterThanOrEqual(1)

    const schema = JSON.parse(scripts[0].textContent || '{}')
    expect(schema['@type']).toBe('FAQPage')
    expect(Array.isArray(schema.mainEntity)).toBe(true)
    expect(schema.mainEntity.length).toBe(admissionsFaqs.length)
  })
})
