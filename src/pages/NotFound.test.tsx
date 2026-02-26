import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import NotFound, { meta } from './NotFound'
import { notFoundContent } from '../data/privacy'
import { site } from '../data/common'
import Breadcrumb from '../components/Breadcrumb'

function renderNotFound() {
  return render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  )
}

describe('NotFound page', () => {
  it('exports noindex metadata', () => {
    const title = meta.find((tag) => tag.title)
    const robots = meta.find((tag) => tag.name === 'robots')

    expect(title?.title).toBe('Page Not Found | Silver State Treatment Center')
    expect(robots?.content).toBe('noindex, nofollow')
  })

  it('renders the headline and helper message', () => {
    renderNotFound()

    expect(
      screen.getByRole('heading', { level: 1, name: notFoundContent.headline }),
    ).toBeInTheDocument()
    expect(screen.getByText(notFoundContent.message)).toBeInTheDocument()
  })

  it('renders all suggestion links', () => {
    renderNotFound()

    for (const suggestion of notFoundContent.suggestions) {
      const link = screen.getByRole('link', { name: suggestion.label })
      expect(link).toHaveAttribute('href', suggestion.href)
      expect(link).toHaveStyle('min-height: 44px')
      expect(link).toHaveStyle('min-width: 44px')
    }
  })

  it('renders the phone CTA with tel link', () => {
    renderNotFound()

    const phoneCta = screen.getByRole('link', { name: `Call ${site.phone}` })
    expect(phoneCta).toHaveAttribute('href', site.phoneTel)
  })

  it('omits breadcrumb on wildcard 404 routes', () => {
    render(
      <MemoryRouter initialEntries={['/missing-page']}>
        <Breadcrumb />
      </MemoryRouter>,
    )

    expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument()
  })
})
