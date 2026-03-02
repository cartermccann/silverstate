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

  it('keeps primary conversion CTAs at 44px touch-target minimum', () => {
    renderProgramPage()

    const insurance = screen.getByRole('link', { name: /verify your insurance coverage/i })
    const admissions = screen.getByRole('link', { name: /start the admissions process/i })
    const call = screen.getByRole('link', {
      name: new RegExp(`call\\s+${site.phone}`.replace(/[()]/g, '\\$&'), 'i'),
    })

    expect(insurance).toHaveStyle({ minHeight: '44px' })
    expect(admissions).toHaveStyle({ minHeight: '44px' })
    expect(call).toHaveStyle({ minHeight: '44px' })
  })
})

describe('Residential meta export', () => {
  it('does not duplicate JSON-LD entries in route meta', () => {
    const jsonLdEntries = residentialMeta.filter((tag) => tag['script:ld+json'])
    expect(jsonLdEntries).toHaveLength(0)
  })
})
