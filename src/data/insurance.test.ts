import { insuranceProviders, insurance, getInsuranceBySlug } from './insurance'

describe('insurance data (Story 5.1)', () => {
  it('exports all 9 providers and preserves legacy insurance entries', () => {
    expect(insuranceProviders).toHaveLength(9)
    expect(insurance).toHaveLength(9)

    const providerNames = insuranceProviders.map((provider) => provider.name)
    const legacyNames = insurance.map((entry) => entry.name)

    expect(legacyNames).toEqual(providerNames)
  })

  it('keeps provider slugs unique and resolves lookups', () => {
    const slugs = insuranceProviders.map((provider) => provider.slug)
    expect(new Set(slugs).size).toBe(slugs.length)

    expect(getInsuranceBySlug('aetna')?.name).toBe('Aetna')
    expect(getInsuranceBySlug('does-not-exist')).toBeUndefined()
  })

  it('keeps required provider fields populated', () => {
    for (const provider of insuranceProviders) {
      expect(provider.name.trim().length).toBeGreaterThan(0)
      expect(provider.coverageDescription.trim().length).toBeGreaterThan(0)
      expect(provider.preAuthorization.trim().length).toBeGreaterThan(0)
      expect(provider.faqs.length).toBeGreaterThanOrEqual(3)
      expect(provider.metaDescription.trim().length).toBeGreaterThan(0)
    }
  })

  it('keeps meta descriptions within 150-160 characters', () => {
    for (const provider of insuranceProviders) {
      expect(provider.metaDescription.length).toBeGreaterThanOrEqual(150)
      expect(provider.metaDescription.length).toBeLessThanOrEqual(160)
    }
  })

  it('keeps coverage copy parity-aware and non-guaranteed', () => {
    for (const provider of insuranceProviders) {
      const copy = provider.coverageDescription.toLowerCase()
      expect(copy).toMatch(/parity/)
      expect(copy).toMatch(/typically|generally|vary|medically necessary/)
    }
  })
})
