import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders nothing on the homepage', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    expect(container.querySelector('nav')).toBeNull()
  })

  it('renders Home > Programs > Residential Treatment for /programs/residential-treatment', () => {
    render(
      <MemoryRouter initialEntries={['/programs/residential-treatment']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Residential Treatment')).toBeInTheDocument()
  })

  it('renders the last crumb with aria-current="page"', () => {
    render(
      <MemoryRouter initialEntries={['/insurance/cigna']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    const current = screen.getByText('Cigna')
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  it('renders a nav element with aria-label="Breadcrumb"', () => {
    render(
      <MemoryRouter initialEntries={['/admissions']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
  })

  it('generates valid BreadcrumbList JSON-LD', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/programs/php']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    const jsonLd = JSON.parse(script!.textContent || '')
    expect(jsonLd['@type']).toBe('BreadcrumbList')
    expect(jsonLd.itemListElement).toHaveLength(3)
    expect(jsonLd.itemListElement[0].name).toBe('Home')
    expect(jsonLd.itemListElement[1].name).toBe('Programs')
    expect(jsonLd.itemListElement[2].name).toBe('PHP')
  })

  it('does not render the last crumb as a link', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    const contact = screen.getByText('Contact')
    expect(contact.tagName).not.toBe('A')
  })

  it('renders Home as a link', () => {
    render(
      <MemoryRouter initialEntries={['/about/our-team']}>
        <Breadcrumb />
      </MemoryRouter>,
    )
    const homeLink = screen.getByText('Home')
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
