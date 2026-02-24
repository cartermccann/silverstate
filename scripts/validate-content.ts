/**
 * Validate all data files have required fields.
 * Exits with code 1 on failure — breaks the build.
 * Runs as: tsx scripts/validate-content.ts
 */

import { site, navLinks } from '../src/data/common'
import { programs, programPages } from '../src/data/programs'
import { conditionPages } from '../src/data/conditions'
import { insurance, insurancePages } from '../src/data/insurance'
import { locations } from '../src/data/locations'
import { leadership } from '../src/data/about'
import { admissionsProcess } from '../src/data/admissions'
import { therapyModalities } from '../src/data/therapies'

interface ValidationError {
  file: string
  entry: string
  field: string
  message: string
}

const errors: ValidationError[] = []

function requireString(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push({ file, entry, field, message: 'Required string is missing or empty' })
  }
}

function requireNumber(file: string, entry: string, field: string, value: unknown): void {
  if (typeof value !== 'number') {
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

// ─── common.ts ───────────────────────────────────────────────
requireString('common.ts', 'site', 'name', site.name)
requireString('common.ts', 'site', 'phone', site.phone)
requireString('common.ts', 'site', 'phoneTel', site.phoneTel)
requireString('common.ts', 'site', 'email', site.email)
requireString('common.ts', 'site', 'address', site.address)

requireArray('common.ts', 'navLinks', 'navLinks', navLinks)
for (const link of navLinks) {
  requireString('common.ts', `navLinks[${link.label}]`, 'label', link.label)
  requireString('common.ts', `navLinks[${link.label}]`, 'href', link.href)
}

// ─── programs.ts (legacy object — always present) ────────────
for (const [key, prog] of Object.entries(programs)) {
  requireString('programs.ts', key, 'label', prog.label)
  requireString('programs.ts', key, 'title', prog.title)
  requireString('programs.ts', key, 'body', prog.body)
  requireArray('programs.ts', key, 'features', prog.features)
}

// ─── programs.ts (full page data — populated in Epic 3) ─────
if (programPages.length > 0) {
  for (const p of programPages) {
    requireSlug('programs.ts', p.slug ?? '(unknown)', 'slug', p.slug)
    requireString('programs.ts', p.slug, 'label', p.label)
    requireString('programs.ts', p.slug, 'title', p.title)
    requireString('programs.ts', p.slug, 'body', p.body)
    requireArray('programs.ts', p.slug, 'features', p.features)
    requireString('programs.ts', p.slug, 'duration', p.duration)
    requireArray('programs.ts', p.slug, 'therapyModalities', p.therapyModalities)
  }
} else {
  console.log('  Skipping programPages — empty (will be populated in Epic 3)')
}

// ─── conditions.ts (full page data — populated in Epic 4) ───
if (conditionPages.length > 0) {
  for (const c of conditionPages) {
    requireSlug('conditions.ts', c.slug ?? '(unknown)', 'slug', c.slug)
    requireString('conditions.ts', c.slug, 'name', c.name)
    requireString('conditions.ts', c.slug, 'description', c.description)
    requireArray('conditions.ts', c.slug, 'symptoms', c.symptoms)
    requireArray('conditions.ts', c.slug, 'therapies', c.therapies)
    requireArray('conditions.ts', c.slug, 'relatedPrograms', c.relatedPrograms)
    requireArray('conditions.ts', c.slug, 'faqs', c.faqs)
    for (const faq of c.faqs) {
      requireString('conditions.ts', `${c.slug}.faqs`, 'q', faq.q)
      requireString('conditions.ts', `${c.slug}.faqs`, 'a', faq.a)
    }
    // Clinical content extra validation
    if (c.reviewedBy !== undefined) {
      requireString('conditions.ts', c.slug, 'reviewedBy', c.reviewedBy)
    }
    if (c.reviewDate !== undefined) {
      requireString('conditions.ts', c.slug, 'reviewDate', c.reviewDate)
    }
    for (const src of c.sources) {
      requireString('conditions.ts', `${c.slug}.sources`, 'label', src.label)
      requireString('conditions.ts', `${c.slug}.sources`, 'url', src.url)
    }
  }
} else {
  console.log('  Skipping conditionPages — empty (will be populated in Epic 4)')
}

// ─── insurance.ts (basic entries — always present) ───────────
for (const ins of insurance) {
  requireString('insurance.ts', ins.name ?? '(unknown)', 'name', ins.name)
}

// ─── insurance.ts (full page data — populated in Epic 5) ────
if (insurancePages.length > 0) {
  for (const ins of insurancePages) {
    requireSlug('insurance.ts', ins.slug ?? '(unknown)', 'slug', ins.slug)
    requireString('insurance.ts', ins.slug, 'name', ins.name)
    requireString('insurance.ts', ins.slug, 'coverageDescription', ins.coverageDescription)
    requireArray('insurance.ts', ins.slug, 'faqs', ins.faqs)
  }
} else {
  console.log('  Skipping insurancePages — empty (will be populated in Epic 5)')
}

// ─── locations.ts (populated in Epic 7) ─────────────────────
if (locations.length > 0) {
  for (const loc of locations) {
    requireSlug('locations.ts', loc.slug ?? '(unknown)', 'slug', loc.slug)
    requireString('locations.ts', loc.slug, 'city', loc.city)
    requireString('locations.ts', loc.slug, 'description', loc.description)
  }
} else {
  console.log('  Skipping locations — empty (will be populated in Epic 7)')
}

// ─── about.ts (leadership — always present) ─────────────────
for (const member of leadership) {
  requireString('about.ts', member.name ?? '(unknown)', 'name', member.name)
  requireString('about.ts', member.name, 'title', member.title)
  requireString('about.ts', member.name, 'bio', member.bio)
}

// ─── admissions.ts (always present) ─────────────────────────
for (const step of admissionsProcess) {
  requireNumber('admissions.ts', `step-${step.step}`, 'step', step.step)
  requireString('admissions.ts', `step-${step.step}`, 'title', step.title)
  requireString('admissions.ts', `step-${step.step}`, 'desc', step.desc)
}

// ─── therapies.ts (full modality data — populated in Epic 3) ─
if (therapyModalities.length > 0) {
  for (const t of therapyModalities) {
    requireSlug('therapies.ts', t.slug ?? '(unknown)', 'slug', t.slug)
    requireString('therapies.ts', t.slug, 'name', t.name)
    requireString('therapies.ts', t.slug, 'description', t.description)
  }
} else {
  console.log('  Skipping therapyModalities — empty (will be populated in Epic 3)')
}

// ─── Results ────────────────────────────────────────────────
if (errors.length > 0) {
  console.error('\n=== CONTENT VALIDATION FAILED ===\n')
  for (const err of errors) {
    console.error(`  [${err.file}] ${err.entry}.${err.field}: ${err.message}`)
  }
  console.error(`\n${errors.length} error(s) found. Build aborted.\n`)
  process.exit(1)
} else {
  console.log('\n=== Content validation passed ===')
  console.log(
    '  Validated: common, programs, conditions, insurance, locations, about, admissions, therapies',
  )
  console.log('  All required fields present and non-empty.\n')
}
