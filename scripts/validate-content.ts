/**
 * Validate all data files have required fields.
 * Exits with code 1 on failure — breaks the build.
 * Runs as: tsx scripts/validate-content.ts
 */

import { navLinks, site } from '../src/data/common'

interface ValidationError {
  file: string
  entry: string
  field: string
  message: string
}

interface ProgramSummaryLike {
  label: string
  title: string
  body: string
  features: string[]
}

interface ProgramPageLike {
  slug: string
  label: string
  title: string
  metaTitle: string
  metaDescription: string
  overview: string
  approach: string
  targetAudience: string
  dailySchedule: Array<{ time: string; activity: string; desc: string }>
  features: string[]
  duration: string
  therapyModalities: string[]
  relatedConditions: string[]
  relatedPrograms: string[]
  faqs: Array<{ q: string; a: string }>
  reviewedBy?: string
  reviewDate?: string
}

interface ConditionPageLike {
  slug: string
  name: string
  headline: string
  description: string
  symptoms: string[]
  therapies: string[]
  approach: string
  relatedPrograms: string[]
  relatedConditions: string[]
  metaTitle: string
  metaDescription: string
  faqs: Array<{ q: string; a: string }>
  reviewedBy?: string
  reviewDate?: string
  sources: Array<{ label: string; url: string }>
}

interface InsuranceEntryLike {
  name: string
}

interface InsuranceProviderLike {
  slug: string
  name: string
  coverageDescription: string
  preAuthorization: string
  metaDescription: string
  faqs: Array<{ q: string; a: string }>
}

interface LocationLike {
  slug: string
  name: string
  description: string
}

interface LeadershipLike {
  name: string
  title: string
  bio: string
}

interface AdmissionStepLike {
  step: number
  title: string
  desc: string
}

interface TherapyModalityLike {
  slug: string
  name: string
  shortName: string
  description: string
  howItHelps: string
  usedFor: string[]
}

interface ComparisonItemLike {
  name: string
  slug: string
  description: string
  bestFor: string
  keyFeatures: string[]
}

interface ComparisonPageLike {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  introduction: string
  itemA: ComparisonItemLike
  itemB: ComparisonItemLike
  keyDifferences: Array<{ aspect: string; itemA: string; itemB: string }>
  whenToChoose: string
  faqs: Array<{ q: string; a: string }>
  sources: Array<{ label: string; url: string }>
  seoKeywords: string[]
}

const errors: ValidationError[] = []

function requireString(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push({ file, entry, field, message: 'Required string is missing or empty' })
  }
}

function requireNumber(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    errors.push({ file, entry, field, message: 'Required number is missing' })
  }
}

function requireArray(
  file: string,
  entry: string,
  field: string,
  value: unknown,
  minLength = 1,
): void {
  if (!Array.isArray(value) || value.length < minLength) {
    errors.push({
      file,
      entry,
      field,
      message: `Required array is missing or has fewer than ${minLength} items`,
    })
  }
}

function requireSlug(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    errors.push({
      file,
      entry,
      field,
      message: 'Must be a valid kebab-case slug (lowercase letters, numbers, hyphens)',
    })
  }
}

function requireIsoDate(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'string') {
    errors.push({
      file,
      entry,
      field,
      message: 'Must be an ISO date string',
    })
    return
  }

  const isoDatePattern = /^\d{4}-\d{2}-\d{2}(?:T[\d:.+-Z]+)?$/
  if (!isoDatePattern.test(value) || Number.isNaN(Date.parse(value))) {
    errors.push({
      file,
      entry,
      field,
      message: 'Must be a valid ISO date string',
    })
  }
}

function requireUrl(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'string') {
    errors.push({
      file,
      entry,
      field,
      message: 'Must be a valid https:// URL',
    })
    return
  }

  if (!/^https:\/\/[^\s]+$/i.test(value)) {
    errors.push({
      file,
      entry,
      field,
      message: 'Must be a valid https:// URL',
    })
  }
}

function requireMaxLength(
  file: string,
  entry: string,
  field: string,
  value: unknown,
  maxLength: number,
): void {
  if (typeof value !== 'string' || value.length > maxLength) {
    errors.push({
      file,
      entry,
      field,
      message: `Must be at most ${maxLength} characters`,
    })
  }
}

function requireLengthRange(
  file: string,
  entry: string,
  field: string,
  value: unknown,
  minLength: number,
  maxLength: number,
): void {
  if (typeof value !== 'string' || value.length < minLength || value.length > maxLength) {
    errors.push({
      file,
      entry,
      field,
      message: `Must be between ${minLength} and ${maxLength} characters`,
    })
  }
}

function isMissingModuleError(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false
  }

  const code = 'code' in error ? String(error.code) : ''
  const message = 'message' in error ? String(error.message) : ''
  return code === 'ERR_MODULE_NOT_FOUND' || message.includes('Cannot find module')
}

async function importOptionalModule<T>(
  modulePath: string,
  file: string,
  epic: string,
): Promise<T | null> {
  try {
    return (await import(modulePath)) as T
  } catch (error) {
    if (isMissingModuleError(error)) {
      console.log(`  Skipping ${file} — file not found (will be created in ${epic})`)
      return null
    }

    throw error
  }
}

function validateCommon(): void {
  requireString('common.ts', 'site', 'name', site.name)
  requireString('common.ts', 'site', 'phone', site.phone)
  requireString('common.ts', 'site', 'phoneTel', site.phoneTel)
  requireString('common.ts', 'site', 'address', site.address)

  requireArray('common.ts', 'navLinks', 'navLinks', navLinks)
  for (const link of navLinks) {
    requireString('common.ts', `navLinks[${link.label}]`, 'label', link.label)
    requireString('common.ts', `navLinks[${link.label}]`, 'href', link.href)
  }
}

function printResults(): never | void {
  if (errors.length > 0) {
    console.error('\n=== CONTENT VALIDATION FAILED ===\n')
    for (const err of errors) {
      console.error(`  [${err.file}] ${err.entry}.${err.field}: ${err.message}`)
    }
    console.error(`\n${errors.length} error(s) found. Build aborted.\n`)
    process.exit(1)
  }

  console.log('\n=== Content validation passed ===')
  console.log(
    '  Validated: common, programs, conditions, insurance, locations, about, admissions, therapies, comparisons',
  )
  console.log('  All required fields present and non-empty.\n')
}

async function run(): Promise<void> {
  validateCommon()
  const knownProgramSlugs = new Set<string>()
  const knownConditionSlugs = new Set<string>()
  let programPages: ProgramPageLike[] = []
  let conditionPages: ConditionPageLike[] = []
  let therapyModalities: TherapyModalityLike[] = []

  const programsModule = await importOptionalModule<{
    programs?: Record<string, ProgramSummaryLike>
    programPages?: ProgramPageLike[]
  }>('../src/data/programs.ts', 'programs.ts', 'Epic 3')

  if (programsModule) {
    if (!programsModule.programs) {
      errors.push({
        file: 'programs.ts',
        entry: 'exports',
        field: 'programs',
        message: 'Expected exported programs object',
      })
    } else {
      for (const [key, prog] of Object.entries(programsModule.programs)) {
        requireString('programs.ts', key, 'label', prog.label)
        requireString('programs.ts', key, 'title', prog.title)
        requireString('programs.ts', key, 'body', prog.body)
        requireArray('programs.ts', key, 'features', prog.features)
      }
    }

    if (!programsModule.programPages) {
      errors.push({
        file: 'programs.ts',
        entry: 'exports',
        field: 'programPages',
        message: 'Expected exported programPages array',
      })
    } else if (programsModule.programPages.length > 0) {
      programPages = programsModule.programPages
      for (const p of programsModule.programPages) {
        requireSlug('programs.ts', p.slug ?? '(unknown)', 'slug', p.slug)
        knownProgramSlugs.add(p.slug)
        requireString('programs.ts', p.slug, 'label', p.label)
        requireString('programs.ts', p.slug, 'title', p.title)
        requireString('programs.ts', p.slug, 'metaTitle', p.metaTitle)
        requireString('programs.ts', p.slug, 'metaDescription', p.metaDescription)
        requireString('programs.ts', p.slug, 'overview', p.overview)
        requireString('programs.ts', p.slug, 'approach', p.approach)
        requireString('programs.ts', p.slug, 'targetAudience', p.targetAudience)
        requireArray('programs.ts', p.slug, 'dailySchedule', p.dailySchedule)
        for (const scheduleEntry of p.dailySchedule) {
          requireString('programs.ts', `${p.slug}.dailySchedule`, 'time', scheduleEntry.time)
          requireString(
            'programs.ts',
            `${p.slug}.dailySchedule`,
            'activity',
            scheduleEntry.activity,
          )
          requireString('programs.ts', `${p.slug}.dailySchedule`, 'desc', scheduleEntry.desc)
        }
        requireArray('programs.ts', p.slug, 'features', p.features)
        requireString('programs.ts', p.slug, 'duration', p.duration)
        requireArray('programs.ts', p.slug, 'therapyModalities', p.therapyModalities)
        for (const modalitySlug of p.therapyModalities) {
          requireSlug('programs.ts', p.slug, 'therapyModalities[]', modalitySlug)
        }
        requireArray('programs.ts', p.slug, 'relatedConditions', p.relatedConditions)
        for (const conditionSlug of p.relatedConditions) {
          requireSlug('programs.ts', p.slug, 'relatedConditions[]', conditionSlug)
        }
        requireArray('programs.ts', p.slug, 'relatedPrograms', p.relatedPrograms, 0)
        for (const programSlug of p.relatedPrograms) {
          requireSlug('programs.ts', p.slug, 'relatedPrograms[]', programSlug)
        }
        requireArray('programs.ts', p.slug, 'faqs', p.faqs)
        for (const faq of p.faqs) {
          requireString('programs.ts', `${p.slug}.faqs`, 'q', faq.q)
          requireString('programs.ts', `${p.slug}.faqs`, 'a', faq.a)
        }
        if (p.reviewedBy !== undefined) {
          requireString('programs.ts', p.slug, 'reviewedBy', p.reviewedBy)
        }
        if (p.reviewDate !== undefined) {
          requireIsoDate('programs.ts', p.slug, 'reviewDate', p.reviewDate)
        }
      }
    } else {
      console.log('  Skipping programPages — empty (will be populated in Epic 3)')
    }
  }

  const conditionsModule = await importOptionalModule<{
    conditionPages?: ConditionPageLike[]
  }>('../src/data/conditions.ts', 'conditions.ts', 'Epic 4')

  if (conditionsModule) {
    if (!conditionsModule.conditionPages) {
      errors.push({
        file: 'conditions.ts',
        entry: 'exports',
        field: 'conditionPages',
        message: 'Expected exported conditionPages array',
      })
    } else if (conditionsModule.conditionPages.length > 0) {
      conditionPages = conditionsModule.conditionPages
      const seenConditionSlugs = new Set<string>()

      for (const c of conditionsModule.conditionPages) {
        requireSlug('conditions.ts', c.slug ?? '(unknown)', 'slug', c.slug)
        if (seenConditionSlugs.has(c.slug)) {
          errors.push({
            file: 'conditions.ts',
            entry: c.slug,
            field: 'slug',
            message: `Duplicate condition slug: "${c.slug}"`,
          })
        }
        seenConditionSlugs.add(c.slug)
        knownConditionSlugs.add(c.slug)

        requireString('conditions.ts', c.slug, 'name', c.name)
        requireString('conditions.ts', c.slug, 'headline', c.headline)
        requireString('conditions.ts', c.slug, 'description', c.description)
        requireArray('conditions.ts', c.slug, 'symptoms', c.symptoms, 5)
        requireArray('conditions.ts', c.slug, 'therapies', c.therapies, 3)
        requireString('conditions.ts', c.slug, 'approach', c.approach)
        requireArray('conditions.ts', c.slug, 'relatedPrograms', c.relatedPrograms)
        for (const relatedProgram of c.relatedPrograms) {
          requireSlug('conditions.ts', c.slug, 'relatedPrograms[]', relatedProgram)
        }
        requireArray('conditions.ts', c.slug, 'relatedConditions', c.relatedConditions, 2)
        for (const relatedCondition of c.relatedConditions) {
          requireSlug('conditions.ts', c.slug, 'relatedConditions[]', relatedCondition)
        }
        requireString('conditions.ts', c.slug, 'metaTitle', c.metaTitle)
        requireMaxLength('conditions.ts', c.slug, 'metaTitle', c.metaTitle, 60)
        requireString('conditions.ts', c.slug, 'metaDescription', c.metaDescription)
        requireLengthRange('conditions.ts', c.slug, 'metaDescription', c.metaDescription, 150, 160)
        requireArray('conditions.ts', c.slug, 'faqs', c.faqs, 3)
        for (const faq of c.faqs) {
          requireString('conditions.ts', `${c.slug}.faqs`, 'q', faq.q)
          requireString('conditions.ts', `${c.slug}.faqs`, 'a', faq.a)
        }
        if (c.reviewedBy !== undefined) {
          requireString('conditions.ts', c.slug, 'reviewedBy', c.reviewedBy)
        }
        if (c.reviewDate !== undefined) {
          requireIsoDate('conditions.ts', c.slug, 'reviewDate', c.reviewDate)
        }
        requireArray('conditions.ts', c.slug, 'sources', c.sources, 2)
        for (const src of c.sources) {
          requireString('conditions.ts', `${c.slug}.sources`, 'label', src.label)
          requireUrl('conditions.ts', `${c.slug}.sources`, 'url', src.url)
        }
      }
    } else {
      console.log('  Skipping conditionPages — empty (will be populated in Epic 4)')
    }
  }

  const insuranceModule = await importOptionalModule<{
    insurance?: InsuranceEntryLike[]
    insuranceProviders?: InsuranceProviderLike[]
  }>('../src/data/insurance.ts', 'insurance.ts', 'Epic 5')

  if (insuranceModule) {
    if (!insuranceModule.insurance) {
      errors.push({
        file: 'insurance.ts',
        entry: 'exports',
        field: 'insurance',
        message: 'Expected exported insurance array',
      })
    } else {
      for (const ins of insuranceModule.insurance) {
        requireString('insurance.ts', ins.name ?? '(unknown)', 'name', ins.name)
      }
    }

    if (!insuranceModule.insuranceProviders) {
      errors.push({
        file: 'insurance.ts',
        entry: 'exports',
        field: 'insuranceProviders',
        message: 'Expected exported insuranceProviders array',
      })
    } else if (insuranceModule.insuranceProviders.length > 0) {
      for (const ins of insuranceModule.insuranceProviders) {
        requireSlug('insurance.ts', ins.slug ?? '(unknown)', 'slug', ins.slug)
        requireString('insurance.ts', ins.slug, 'name', ins.name)
        requireString('insurance.ts', ins.slug, 'coverageDescription', ins.coverageDescription)
        requireString('insurance.ts', ins.slug, 'preAuthorization', ins.preAuthorization)
        requireString('insurance.ts', ins.slug, 'metaDescription', ins.metaDescription)
        requireLengthRange(
          'insurance.ts',
          ins.slug,
          'metaDescription',
          ins.metaDescription,
          150,
          160,
        )
        requireArray('insurance.ts', ins.slug, 'faqs', ins.faqs)
        for (const faq of ins.faqs) {
          requireString('insurance.ts', `${ins.slug}.faqs`, 'q', faq.q)
          requireString('insurance.ts', `${ins.slug}.faqs`, 'a', faq.a)
        }
      }
    } else {
      console.log('  Skipping insuranceProviders — empty (will be populated in Epic 5)')
    }
  }

  const locationsModule = await importOptionalModule<{ locations?: LocationLike[] }>(
    '../src/data/locations.ts',
    'locations.ts',
    'Epic 7',
  )

  if (locationsModule) {
    if (!locationsModule.locations) {
      errors.push({
        file: 'locations.ts',
        entry: 'exports',
        field: 'locations',
        message: 'Expected exported locations array',
      })
    } else if (locationsModule.locations.length > 0) {
      for (const loc of locationsModule.locations) {
        requireSlug('locations.ts', loc.slug ?? '(unknown)', 'slug', loc.slug)
        requireString('locations.ts', loc.slug, 'name', loc.name)
        requireString('locations.ts', loc.slug, 'description', loc.description)
      }
    } else {
      console.log('  Skipping locations — empty (will be populated in Epic 7)')
    }
  }

  const aboutModule = await importOptionalModule<{ leadership?: LeadershipLike[] }>(
    '../src/data/about.ts',
    'about.ts',
    'Epic 6',
  )

  if (aboutModule) {
    if (!aboutModule.leadership) {
      errors.push({
        file: 'about.ts',
        entry: 'exports',
        field: 'leadership',
        message: 'Expected exported leadership array',
      })
    } else {
      for (const member of aboutModule.leadership) {
        requireString('about.ts', member.name ?? '(unknown)', 'name', member.name)
        requireString('about.ts', member.name, 'title', member.title)
        requireString('about.ts', member.name, 'bio', member.bio)
      }
    }
  }

  const admissionsModule = await importOptionalModule<{ admissionsProcess?: AdmissionStepLike[] }>(
    '../src/data/admissions.ts',
    'admissions.ts',
    'Epic 8',
  )

  if (admissionsModule) {
    if (!admissionsModule.admissionsProcess) {
      errors.push({
        file: 'admissions.ts',
        entry: 'exports',
        field: 'admissionsProcess',
        message: 'Expected exported admissionsProcess array',
      })
    } else {
      for (const step of admissionsModule.admissionsProcess) {
        requireNumber('admissions.ts', `step-${step.step}`, 'step', step.step)
        requireString('admissions.ts', `step-${step.step}`, 'title', step.title)
        requireString('admissions.ts', `step-${step.step}`, 'desc', step.desc)
      }
    }
  }

  const therapiesModule = await importOptionalModule<{ therapyModalities?: TherapyModalityLike[] }>(
    '../src/data/therapies.ts',
    'therapies.ts',
    'Epic 3',
  )

  if (therapiesModule) {
    if (!therapiesModule.therapyModalities) {
      errors.push({
        file: 'therapies.ts',
        entry: 'exports',
        field: 'therapyModalities',
        message: 'Expected exported therapyModalities array',
      })
    } else if (therapiesModule.therapyModalities.length > 0) {
      therapyModalities = therapiesModule.therapyModalities
      for (const t of therapiesModule.therapyModalities) {
        requireSlug('therapies.ts', t.slug ?? '(unknown)', 'slug', t.slug)
        requireString('therapies.ts', t.slug, 'name', t.name)
        requireString('therapies.ts', t.slug, 'shortName', t.shortName)
        requireString('therapies.ts', t.slug, 'description', t.description)
        requireString('therapies.ts', t.slug, 'howItHelps', t.howItHelps)
        requireArray('therapies.ts', t.slug, 'usedFor', t.usedFor)
        for (const conditionSlug of t.usedFor) {
          requireSlug('therapies.ts', t.slug, 'usedFor[]', conditionSlug)
        }
      }
    } else {
      console.log('  Skipping therapyModalities — empty (will be populated in Epic 3)')
    }
  }

  const comparisonsModule = await importOptionalModule<{
    comparisons?: ComparisonPageLike[]
  }>('../src/data/comparisons.ts', 'comparisons.ts', 'GEO')

  if (comparisonsModule) {
    if (!comparisonsModule.comparisons) {
      errors.push({
        file: 'comparisons.ts',
        entry: 'exports',
        field: 'comparisons',
        message: 'Expected exported comparisons array',
      })
    } else if (comparisonsModule.comparisons.length > 0) {
      const seenComparisonSlugs = new Set<string>()

      for (const comp of comparisonsModule.comparisons) {
        requireSlug('comparisons.ts', comp.slug ?? '(unknown)', 'slug', comp.slug)
        if (seenComparisonSlugs.has(comp.slug)) {
          errors.push({
            file: 'comparisons.ts',
            entry: comp.slug,
            field: 'slug',
            message: `Duplicate comparison slug: "${comp.slug}"`,
          })
        }
        seenComparisonSlugs.add(comp.slug)

        requireString('comparisons.ts', comp.slug, 'title', comp.title)
        requireString('comparisons.ts', comp.slug, 'metaTitle', comp.metaTitle)
        requireString('comparisons.ts', comp.slug, 'metaDescription', comp.metaDescription)
        requireLengthRange(
          'comparisons.ts',
          comp.slug,
          'metaDescription',
          comp.metaDescription,
          150,
          160,
        )
        requireString('comparisons.ts', comp.slug, 'introduction', comp.introduction)
        requireString('comparisons.ts', comp.slug, 'whenToChoose', comp.whenToChoose)

        // Validate items
        for (const side of ['itemA', 'itemB'] as const) {
          const item = comp[side]
          requireString('comparisons.ts', `${comp.slug}.${side}`, 'name', item.name)
          requireSlug('comparisons.ts', `${comp.slug}.${side}`, 'slug', item.slug)
          requireString('comparisons.ts', `${comp.slug}.${side}`, 'description', item.description)
          requireString('comparisons.ts', `${comp.slug}.${side}`, 'bestFor', item.bestFor)
          requireArray('comparisons.ts', `${comp.slug}.${side}`, 'keyFeatures', item.keyFeatures, 3)
        }

        requireArray('comparisons.ts', comp.slug, 'keyDifferences', comp.keyDifferences, 3)
        for (const diff of comp.keyDifferences) {
          requireString('comparisons.ts', `${comp.slug}.keyDifferences`, 'aspect', diff.aspect)
          requireString('comparisons.ts', `${comp.slug}.keyDifferences`, 'itemA', diff.itemA)
          requireString('comparisons.ts', `${comp.slug}.keyDifferences`, 'itemB', diff.itemB)
        }

        requireArray('comparisons.ts', comp.slug, 'faqs', comp.faqs, 2)
        for (const faq of comp.faqs) {
          requireString('comparisons.ts', `${comp.slug}.faqs`, 'q', faq.q)
          requireString('comparisons.ts', `${comp.slug}.faqs`, 'a', faq.a)
        }

        requireArray('comparisons.ts', comp.slug, 'sources', comp.sources, 2)
        for (const src of comp.sources) {
          requireString('comparisons.ts', `${comp.slug}.sources`, 'label', src.label)
          requireUrl('comparisons.ts', `${comp.slug}.sources`, 'url', src.url)
        }
      }
    }
  }

  if (programPages.length > 0) {
    for (const p of programPages) {
      for (const relatedProgram of p.relatedPrograms) {
        if (!knownProgramSlugs.has(relatedProgram)) {
          errors.push({
            file: 'programs.ts',
            entry: p.slug,
            field: 'relatedPrograms',
            message: `Unknown related program slug: "${relatedProgram}"`,
          })
        }
      }
    }
  }

  if (conditionPages.length > 0) {
    for (const c of conditionPages) {
      for (const relatedProgram of c.relatedPrograms) {
        if (!knownProgramSlugs.has(relatedProgram)) {
          errors.push({
            file: 'conditions.ts',
            entry: c.slug,
            field: 'relatedPrograms',
            message: `Unknown related program slug: "${relatedProgram}"`,
          })
        }
      }
    }
  }

  if (knownConditionSlugs.size > 0) {
    for (const p of programPages) {
      for (const relatedCondition of p.relatedConditions) {
        if (!knownConditionSlugs.has(relatedCondition)) {
          errors.push({
            file: 'programs.ts',
            entry: p.slug,
            field: 'relatedConditions',
            message: `Unknown related condition slug: "${relatedCondition}"`,
          })
        }
      }
    }

    for (const therapy of therapyModalities) {
      for (const conditionSlug of therapy.usedFor) {
        if (!knownConditionSlugs.has(conditionSlug)) {
          errors.push({
            file: 'therapies.ts',
            entry: therapy.slug,
            field: 'usedFor',
            message: `Unknown condition slug: "${conditionSlug}"`,
          })
        }
      }
    }

    for (const c of conditionPages) {
      for (const relatedCondition of c.relatedConditions) {
        if (!knownConditionSlugs.has(relatedCondition)) {
          errors.push({
            file: 'conditions.ts',
            entry: c.slug,
            field: 'relatedConditions',
            message: `Unknown related condition slug: "${relatedCondition}"`,
          })
        }
      }
    }
  }

  if (therapyModalities.length > 0) {
    const therapySlugs = new Set(therapyModalities.map((t) => t.slug))

    for (const p of programPages) {
      for (const modalitySlug of p.therapyModalities) {
        if (!therapySlugs.has(modalitySlug)) {
          errors.push({
            file: 'programs.ts',
            entry: p.slug,
            field: 'therapyModalities',
            message: `Unknown therapy modality slug: "${modalitySlug}"`,
          })
        }
      }
    }
  }

  printResults()
}

run().catch((error: unknown) => {
  console.error('\n=== CONTENT VALIDATION FAILED ===\n')
  console.error(error)
  process.exit(1)
})
