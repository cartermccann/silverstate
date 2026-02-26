import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Privacy, { meta } from './Privacy'
import { privacyLastUpdated, privacySections } from '../data/privacy'

describe('Privacy page', () => {
  it('exports SEO metadata with canonical URL', () => {
    const title = meta.find((tag) => tag.title)
    const canonical = meta.find((tag) => tag.tagName === 'link' && tag.rel === 'canonical')

    expect(title?.title).toContain('Privacy Policy')
    expect(canonical?.href).toContain('/privacy')
  })

  it('exports WebPage JSON-LD schema metadata', () => {
    const jsonLd = meta.find((tag) => tag['script:ld+json'])?.['script:ld+json'] as
      | Record<string, unknown>
      | undefined

    expect(jsonLd).toBeDefined()
    expect(jsonLd?.['@type']).toBe('WebPage')
    expect(jsonLd?.url).toContain('/privacy')
  })

  it('renders page title and last updated date', () => {
    render(<Privacy />)

    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByText(`Last updated: ${privacyLastUpdated}`)).toBeInTheDocument()
  })

  it('renders every privacy section from data', () => {
    render(<Privacy />)

    for (const section of privacySections) {
      expect(screen.getByRole('heading', { level: 2, name: section.heading })).toBeInTheDocument()
    }
  })
})
