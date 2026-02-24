import type { InsuranceEntry, InsurancePageData } from '../types'

export const insurance: InsuranceEntry[] = [
  { name: 'United Healthcare', logo: null },
  { name: 'Aetna', logo: '/assets/aetna.png' },
  { name: 'Cigna', logo: '/assets/cigna.png' },
  { name: 'BCBS', logo: '/assets/bcbs.png' },
  { name: 'HPN', logo: null },
]

// Full insurance page data — populated in Story 5.1
export const insurancePages: InsurancePageData[] = []
