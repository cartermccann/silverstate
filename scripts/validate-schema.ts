/**
 * Validate JSON-LD output from src/utils/schema.ts generators.
 * Exits with code 1 on failure — breaks the build.
 * Runs as: tsx scripts/validate-schema.ts
 */

import {
  generateMedicalOrganization,
  generateLocalBusiness,
  generateMedicalCondition,
  generateMedicalTherapy,
  generatePhysician,
  generateFAQPage,
  generateBreadcrumbList,
} from '../src/utils/schema'

interface SchemaError {
  schemaType: string
  field: string
  message: string
}

const errors: SchemaError[] = []

function validateRequired(schemaType: string, obj: Record<string, unknown>, field: string): void {
  if (obj[field] === undefined || obj[field] === null || obj[field] === '') {
    errors.push({ schemaType, field, message: 'Required field is missing or empty' })
  }
}

function validateContext(schemaType: string, obj: Record<string, unknown>): void {
  if (obj['@context'] !== 'https://schema.org') {
    errors.push({
      schemaType,
      field: '@context',
      message: `Expected "https://schema.org", got "${obj['@context']}"`,
    })
  }
}

function validateType(
  schemaType: string,
  obj: Record<string, unknown>,
  expectedType: string,
): void {
  if (obj['@type'] !== expectedType) {
    errors.push({
      schemaType,
      field: '@type',
      message: `Expected "${expectedType}", got "${obj['@type']}"`,
    })
  }
}

function validateAddress(schemaType: string, address: unknown): void {
  if (!address || typeof address !== 'object') {
    errors.push({ schemaType, field: 'address', message: 'Address object is missing' })
    return
  }
  const addr = address as Record<string, unknown>
  validateRequired(schemaType, addr, 'streetAddress')
  validateRequired(schemaType, addr, 'addressLocality')
  validateRequired(schemaType, addr, 'addressRegion')
  validateRequired(schemaType, addr, 'postalCode')
}

// ─── MedicalOrganization ────────────────────────────────────
const medOrg = generateMedicalOrganization()
validateContext('MedicalOrganization', medOrg)
validateType('MedicalOrganization', medOrg, 'MedicalOrganization')
validateRequired('MedicalOrganization', medOrg, 'name')
validateRequired('MedicalOrganization', medOrg, 'url')
validateRequired('MedicalOrganization', medOrg, 'telephone')
validateAddress('MedicalOrganization', medOrg.address)

// ─── LocalBusiness ──────────────────────────────────────────
const localBiz = generateLocalBusiness()
validateContext('LocalBusiness', localBiz)
validateType('LocalBusiness', localBiz, 'LocalBusiness')
validateRequired('LocalBusiness', localBiz, 'name')
validateRequired('LocalBusiness', localBiz, 'url')
validateRequired('LocalBusiness', localBiz, 'telephone')
validateAddress('LocalBusiness', localBiz.address)
if (!localBiz.geo || typeof localBiz.geo !== 'object') {
  errors.push({ schemaType: 'LocalBusiness', field: 'geo', message: 'Geo object is missing' })
} else {
  const geo = localBiz.geo as Record<string, unknown>
  validateRequired('LocalBusiness', geo, 'latitude')
  validateRequired('LocalBusiness', geo, 'longitude')
}

// ─── MedicalCondition ───────────────────────────────────────
const medCondition = generateMedicalCondition({
  name: 'Anxiety',
  description: 'Adolescent anxiety disorder treatment',
  slug: 'anxiety-treatment',
  possibleTreatments: ['CBT', 'DBT'],
  symptoms: ['Excessive worry', 'Restlessness'],
})
validateContext('MedicalCondition', medCondition)
validateType('MedicalCondition', medCondition, 'MedicalCondition')
validateRequired('MedicalCondition', medCondition, 'name')
validateRequired('MedicalCondition', medCondition, 'description')
if (!Array.isArray(medCondition.possibleTreatment) || medCondition.possibleTreatment.length === 0) {
  errors.push({
    schemaType: 'MedicalCondition',
    field: 'possibleTreatment',
    message: 'Expected array with 1+ treatment items',
  })
}

// ─── MedicalTherapy ─────────────────────────────────────────
const medTherapy = generateMedicalTherapy({
  name: 'Residential Treatment',
  description: '24/7 residential treatment for adolescents',
  slug: 'residential-treatment',
})
validateContext('MedicalTherapy', medTherapy)
validateType('MedicalTherapy', medTherapy, 'MedicalTherapy')
validateRequired('MedicalTherapy', medTherapy, 'name')
validateRequired('MedicalTherapy', medTherapy, 'description')

// ─── Physician ──────────────────────────────────────────────
const physician = generatePhysician({
  name: 'Dr. Russ Park',
  credentials: 'DNP, PMHNP-BC',
  title: 'Executive Director',
  description: 'Advanced Nurse Executive with psychiatric focus',
})
validateContext('Physician', physician)
validateType('Physician', physician, 'Physician')
validateRequired('Physician', physician, 'name')
validateRequired('Physician', physician, 'description')
validateRequired('Physician', physician, 'medicalSpecialty')

// ─── FAQPage ────────────────────────────────────────────────
const faqPage = generateFAQPage({
  questions: [
    { question: 'What ages do you treat?', answer: 'We treat adolescents ages 11-17.' },
    { question: 'Do you accept insurance?', answer: 'Yes, we accept most major insurance plans.' },
  ],
})
validateContext('FAQPage', faqPage)
validateType('FAQPage', faqPage, 'FAQPage')
if (!Array.isArray(faqPage.mainEntity) || faqPage.mainEntity.length === 0) {
  errors.push({
    schemaType: 'FAQPage',
    field: 'mainEntity',
    message: 'Expected array with 1+ Question items',
  })
} else {
  for (const item of faqPage.mainEntity as Record<string, unknown>[]) {
    if (item['@type'] !== 'Question') {
      errors.push({
        schemaType: 'FAQPage',
        field: 'mainEntity.@type',
        message: 'Expected "Question"',
      })
    }
    validateRequired('FAQPage', item, 'name')
    const answer = item.acceptedAnswer as Record<string, unknown> | undefined
    if (!answer) {
      errors.push({
        schemaType: 'FAQPage',
        field: 'mainEntity.acceptedAnswer',
        message: 'Missing acceptedAnswer',
      })
    } else {
      validateRequired('FAQPage', answer, 'text')
    }
  }
}

// ─── BreadcrumbList ─────────────────────────────────────────
const breadcrumbs = generateBreadcrumbList({
  items: [
    { name: 'Home', url: 'https://www.silverstatetreatment.com' },
    { name: 'Programs', url: 'https://www.silverstatetreatment.com/programs' },
    {
      name: 'Residential',
      url: 'https://www.silverstatetreatment.com/programs/residential-treatment',
    },
  ],
})
validateContext('BreadcrumbList', breadcrumbs)
validateType('BreadcrumbList', breadcrumbs, 'BreadcrumbList')
if (!Array.isArray(breadcrumbs.itemListElement) || breadcrumbs.itemListElement.length === 0) {
  errors.push({
    schemaType: 'BreadcrumbList',
    field: 'itemListElement',
    message: 'Expected array with 1+ ListItem entries',
  })
} else {
  for (const item of breadcrumbs.itemListElement as Record<string, unknown>[]) {
    validateRequired('BreadcrumbList', item, 'position')
    validateRequired('BreadcrumbList', item, 'name')
    validateRequired('BreadcrumbList', item, 'item')
  }
}

// ─── Results ────────────────────────────────────────────────
if (errors.length > 0) {
  console.error('\n=== SCHEMA VALIDATION FAILED ===\n')
  for (const err of errors) {
    console.error(`  [${err.schemaType}] ${err.field}: ${err.message}`)
  }
  console.error(`\n${errors.length} error(s) found. Build aborted.\n`)
  process.exit(1)
} else {
  console.log('\n=== Schema validation passed ===')
  console.log('  Validated: MedicalOrganization, LocalBusiness, MedicalCondition,')
  console.log('    MedicalTherapy, Physician, FAQPage, BreadcrumbList')
  console.log('  All JSON-LD structures are well-formed with required fields.\n')
}
