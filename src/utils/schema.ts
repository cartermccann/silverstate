import { site } from '../data/common'

const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com').replace(
  /\/+$/,
  '',
)

function toAbsoluteUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) {
    return value
  }

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

function toSchemaTelephone(phone: string): string {
  const digits = phone.replace(/\D/g, '')

  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }

  if (digits.length === 10) {
    return `+1${digits}`
  }

  return phone
}

const SCHEMA_TELEPHONE = toSchemaTelephone(site.phoneTel)

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
  credentials?: string[]
}

export interface LocalBusinessInput {
  name?: string
  url?: string
  areaServed?: string[]
  ratingValue?: number
  reviewCount?: number
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
  const credentials = input?.credentials ?? [
    'Joint Commission Gold Seal of Approval',
    'LegitScript Certified',
    'NAATP Member',
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: site.name,
    url: input?.url ? toAbsoluteUrl(input.url) : SITE_URL,
    logo: toAbsoluteUrl('/assets/logo.png'),
    telephone: SCHEMA_TELEPHONE,
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
    ],
    hasCredential: credentials.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: /member/i.test(name)
        ? 'Membership'
        : /cert/i.test(name)
          ? 'Certification'
          : 'Accreditation',
      name,
    })),
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
    url: input?.url ? toAbsoluteUrl(input.url) : SITE_URL,
    telephone: SCHEMA_TELEPHONE,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: input?.ratingValue ?? site.rating,
      reviewCount: input?.reviewCount ?? site.reviewCount,
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
  const result: Record<string, unknown> = {
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

  if (input.therapyType) {
    result.additionalType = input.therapyType
  }

  if (input.conditions?.length) {
    result.indication = input.conditions.map((name) => ({
      '@type': 'MedicalCondition',
      name,
    }))
  }

  return result
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
    result.image = toAbsoluteUrl(input.image)
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
      item: toAbsoluteUrl(item.url),
    })),
  }
}

export function generateWebPage(input: WebPageInput): Record<string, unknown> {
  const result: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.title,
    description: input.description,
    url: toAbsoluteUrl(input.url),
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
