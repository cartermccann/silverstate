import { site } from '../data/common'

const SITE_URL = import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com'

// --- Structured address (common.ts has flat string; schema needs components) ---
const ADDRESS = {
  streetAddress: '8225 W Robindale Rd',
  addressLocality: 'Las Vegas',
  addressRegion: 'NV',
  postalCode: '89113',
  addressCountry: 'US',
}

const GEO = {
  latitude: 36.1497,
  longitude: -115.1467,
}

// --- Input Interfaces ---

export interface MedicalOrganizationInput {
  url?: string
}

export interface LocalBusinessInput {
  name?: string
  url?: string
  areaServed?: string[]
}

export interface MedicalConditionInput {
  name: string
  description: string
  slug: string
  possibleTreatments?: string[]
  symptoms?: string[]
}

export interface MedicalTherapyInput {
  name: string
  description: string
  slug: string
  therapyType?: string
  conditions?: string[]
}

export interface PhysicianInput {
  name: string
  credentials: string
  title: string
  description?: string
  image?: string
}

export interface FAQPageInput {
  questions: Array<{
    question: string
    answer: string
  }>
}

export interface BreadcrumbInput {
  items: Array<{
    name: string
    url: string
  }>
}

export interface WebPageInput {
  title: string
  description: string
  url: string
  dateModified?: string
}

// --- Generator Functions ---

export function generateMedicalOrganization(
  input?: MedicalOrganizationInput,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: site.name,
    url: input?.url ?? SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    medicalSpecialty: 'Psychiatric',
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Residential Treatment',
        description: '24/7 residential treatment for adolescents ages 11-17',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Partial Hospitalization Program (PHP)',
        description: 'Day treatment program for adolescents transitioning from residential care',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Intensive Outpatient Program (IOP)',
        description: 'Flexible outpatient treatment for adolescents',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Accreditation',
        name: 'Joint Commission Gold Seal of Approval',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certification',
        name: 'LegitScript Certified',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Membership',
        name: 'NAATP Member',
      },
    ],
  }
}

export function generateLocalBusiness(input?: LocalBusinessInput): Record<string, unknown> {
  const areaServed = (
    input?.areaServed ?? ['Las Vegas', 'Henderson', 'North Las Vegas', 'Summerlin', 'Clark County']
  ).map((name) => ({
    '@type': name === 'Clark County' ? 'AdministrativeArea' : 'City',
    name,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: input?.name ?? site.name,
    url: input?.url ?? SITE_URL,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      ...ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...GEO,
    },
    areaServed,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$$$',
  }
}

export function generateMedicalCondition(input: MedicalConditionInput): Record<string, unknown> {
  const result: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/conditions/${input.slug}`,
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Psychiatric',
    },
  }

  if (input.possibleTreatments?.length) {
    result.possibleTreatment = input.possibleTreatments.map((name) => ({
      '@type': 'MedicalTherapy',
      name,
    }))
  }

  if (input.symptoms?.length) {
    result.signOrSymptom = input.symptoms.map((name) => ({
      '@type': 'MedicalSignOrSymptom',
      name,
    }))
  }

  return result
}

export function generateMedicalTherapy(input: MedicalTherapyInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/programs/${input.slug}`,
    medicineSystem: {
      '@type': 'MedicineSystem',
      name: 'EvidenceBased',
    },
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Psychiatric',
    },
    recognizingAuthority: {
      '@type': 'Organization',
      name: 'The Joint Commission',
    },
  }
}

export function generatePhysician(input: PhysicianInput): Record<string, unknown> {
  const result: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: input.name,
    jobTitle: input.title,
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Psychiatric',
    },
    affiliation: {
      '@type': 'MedicalOrganization',
      name: site.name,
      url: SITE_URL,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: input.credentials,
    },
  }

  if (input.description) {
    result.description = input.description
  }

  if (input.image) {
    result.image = input.image.startsWith('http') ? input.image : `${SITE_URL}${input.image}`
  }

  return result
}

export function generateFAQPage(input: FAQPageInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: input.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

export function generateBreadcrumbList(input: BreadcrumbInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: input.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateWebPage(input: WebPageInput): Record<string, unknown> {
  const result: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.title,
    description: input.description,
    url: input.url,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: SITE_URL,
    },
  }

  if (input.dateModified) {
    result.dateModified = input.dateModified
  }

  return result
}

export function toJsonLdScript(schema: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}
