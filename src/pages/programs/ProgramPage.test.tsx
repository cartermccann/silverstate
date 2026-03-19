import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import ProgramPage from './ProgramPage'
import { residentialProgram } from '../../data/programs'
import { site } from '../../data/common'
import { meta as residentialMeta } from './Residential'

function renderProgramPage() {
  return render(
    <MemoryRouter initialEntries={['/programs/residential-treatment']}>
      <ProgramPage program={residentialProgram} />
    </MemoryRouter>,
  )
}

describe('ProgramPage - Story 3.2', () => {
  it('renders therapy cards with condition links', () => {
    renderProgramPage()

    const therapyLinks = screen.getAllByRole('link', { name: /learn more about/i })
    expect(therapyLinks.length).toBeGreaterThan(0)

    for (const link of therapyLinks) {
      expect(link.getAttribute('href')).toMatch(/^\/conditions\//)
    }
  })

  it('renders FAQPage and MedicalTherapy JSON-LD scripts', () => {
    const { container } = renderProgramPage()
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')

    expect(scripts.length).toBe(2)

    const schemas = Array.from(scripts).map((script) => JSON.parse(script.textContent || '{}'))
    const schemaTypes = schemas.map((schema) => schema['@type'])

    expect(schemaTypes).toContain('FAQPage')
    expect(schemaTypes).toContain('MedicalTherapy')
  })

  it('renders primary conversion CTAs for insurance, admissions, and phone', () => {
    renderProgramPage()

    const insuranceLinks = screen.getAllByRole('link', { name: /verify your insurance coverage/i })
    const admissionsLinks = screen.getAllByRole('link', { name: /start the admissions process/i })
    const callLinks = screen.getAllByRole('link', {
      name: new RegExp(`call\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(insuranceLinks.length).toBeGreaterThan(0)
    expect(admissionsLinks.length).toBeGreaterThan(0)
    expect(callLinks.length).toBeGreaterThan(0)
  })
})

describe('Residential meta export', () => {
  it('does not duplicate JSON-LD entries in route meta', () => {
    const jsonLdEntries = residentialMeta.filter((tag) => tag['script:ld+json'])
    expect(jsonLdEntries).toHaveLength(0)
  })
})
