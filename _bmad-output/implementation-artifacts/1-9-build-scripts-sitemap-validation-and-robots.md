# Story 1.9: Build Scripts — Sitemap, Validation & Robots

Status: review

## Story

As a **search engine crawler**,
I want a valid sitemap.xml, robots.txt, and validated structured data,
So that all Silver State pages are discoverable and indexable.

## Acceptance Criteria

1. **Given** a production build runs, **When** build scripts execute, **Then** `scripts/generate-sitemap.ts` produces a valid `sitemap.xml` with all page URLs (FR38)
2. **And** `public/robots.txt` allows full crawling of all public pages (NFR35)
3. **And** `scripts/validate-content.ts` validates all data files have required fields — build fails on missing/empty required fields (FR45)
4. **And** `scripts/validate-schema.ts` validates JSON-LD output is error-free (FR47, NFR24)
5. **And** sitemap.xml regenerates automatically on each build (NFR25)

## FRs Covered

| FR/NFR | Requirement | How This Story Addresses It |
|--------|-------------|----------------------------|
| FR38 | Site generates and maintains an up-to-date sitemap.xml with all page URLs | `scripts/generate-sitemap.ts` reads route manifest, produces XML sitemap |
| FR45 | Each page type follows a consistent content schema ensuring structural uniformity | `scripts/validate-content.ts` validates all data files against type interfaces |
| FR47 | Structured data markup is validated before deployment | `scripts/validate-schema.ts` validates JSON-LD output |
| NFR24 | JSON-LD structured data validates error-free via Google Rich Results Test | Schema validation catches errors pre-deploy |
| NFR25 | sitemap.xml regenerated automatically on each production build | Sitemap generation integrated into `npm run build` |
| NFR35 | robots.txt allows full crawling of all public pages | Static `public/robots.txt` with permissive rules |

## Dependencies

| Dependency | Story | What's Needed |
|------------|-------|---------------|
| Production project structure | Story 1.1 | `scripts/` directory exists, `package.json` with build scripts |
| Shared data types | Story 1.2 | `src/types.ts` with all content interfaces (required field definitions) |
| Data files | Story 1.2 | `src/data/*.ts` files with typed exports to validate against |
| Route configuration | Story 1.1 / 1.8 | Route manifest (or equivalent route list) for sitemap URL generation |
| SEO utilities | Story 1.8 | `src/utils/schema.ts` with JSON-LD generators for schema validation |

## Tasks / Subtasks

- [x] **Task 1: Create `public/robots.txt`** (AC: #2)
  - [x] 1.1: Create the robots.txt file in `public/` with full-crawl permissive rules
  - [x] 1.2: Include `Sitemap:` directive pointing to the sitemap.xml URL
  - [x] 1.3: Verify robots.txt is served correctly during `npm run dev`

- [x] **Task 2: Create `scripts/generate-sitemap.ts`** (AC: #1, #5)
  - [x] 2.1: Create the script file importing the route list
  - [x] 2.2: Implement XML sitemap generation with proper XML declaration, urlset namespace, and per-URL entries
  - [x] 2.3: Read `VITE_SITE_URL` from environment (`.env` or fallback) for absolute URL generation
  - [x] 2.4: Assign `<priority>` values based on page depth (homepage 1.0, top-level 0.8, detail pages 0.6)
  - [x] 2.5: Assign `<changefreq>` values (homepage weekly, content pages monthly)
  - [x] 2.6: Write output to `public/sitemap.xml` (so Vite copies it to `dist/` during build)
  - [x] 2.7: Include a `<lastmod>` date (build date in ISO 8601 format)
  - [x] 2.8: Validate output is well-formed XML
  - [x] 2.9: Print summary to stdout: number of URLs generated

- [x] **Task 3: Create `scripts/validate-content.ts`** (AC: #3)
  **IMPORTANT: Graceful handling of missing data files.** Not all data files exist during Epic 1 — files like `programs.ts`, `conditions.ts`, `insurance.ts`, etc., are created in Epics 3-8. The validation scripts MUST: (a) Use dynamic imports or try/catch to gracefully skip data files that don't exist yet, (b) Log a warning like 'Skipping programs.ts — file not found (will be created in Epic 3)', (c) Only fail the build for files that DO exist but have validation errors. Do NOT import all data files at the top level — this would cause compile errors when files are missing.
  - [x] 3.1: Create the script file importing all data files from `src/data/`
  - [x] 3.2: Define validation rules per content type (required fields, non-empty strings, valid slugs)
  - [x] 3.3: Validate `common.ts` exports (site info fields, nav links, footer content)
  - [x] 3.4: Validate `programs.ts` exports against `ProgramData` required fields
  - [x] 3.5: Validate `conditions.ts` exports against `ConditionData` required fields
  - [x] 3.6: Validate `insurance.ts` exports against `InsuranceEntry` required fields
  - [x] 3.7: Validate `locations.ts` exports against `LocationData` required fields
  - [x] 3.8: Validate `about.ts` exports against `TeamMember` required fields
  - [x] 3.9: Validate `admissions.ts` exports against `AdmissionsStep` required fields
  - [x] 3.10: Validate `therapies.ts` exports against `TherapyModality` required fields
  - [x] 3.11: Exit with code 1 on any validation failure (fails the build)
  - [x] 3.12: Print clear error messages identifying which data file, which entry, and which field failed
  - [x] 3.13: Print success summary when all validations pass

- [x] **Task 4: Create `scripts/validate-schema.ts`** (AC: #4)
  **IMPORTANT: Graceful handling of missing data files.** Not all data files exist during Epic 1 — files like `programs.ts`, `conditions.ts`, `insurance.ts`, etc., are created in Epics 3-8. The validation scripts MUST: (a) Use dynamic imports or try/catch to gracefully skip data files that don't exist yet, (b) Log a warning like 'Skipping programs.ts — file not found (will be created in Epic 3)', (c) Only fail the build for files that DO exist but have validation errors. Do NOT import all data files at the top level — this would cause compile errors when files are missing.
  - [x] 4.1: Create the script file importing JSON-LD generator functions from `src/utils/schema.ts`
  - [x] 4.2: Generate sample JSON-LD for each schema type using representative data from data files
  - [x] 4.3: Validate JSON-LD structure: `@context` is `https://schema.org`, `@type` is valid, required properties present
  - [x] 4.4: Validate MedicalOrganization schema fields
  - [x] 4.5: Validate LocalBusiness schema fields
  - [x] 4.6: Validate MedicalCondition schema fields
  - [x] 4.7: Validate MedicalTherapy schema fields
  - [x] 4.8: Validate Physician schema fields
  - [x] 4.9: Validate FAQPage schema fields (Question/Answer pairs)
  - [x] 4.10: Validate BreadcrumbList schema fields
  - [x] 4.11: Exit with code 1 on any validation failure
  - [x] 4.12: Print clear error messages identifying which schema type failed and why
  - [x] 4.13: Print success summary when all validations pass

- [x] **Task 5: Integrate scripts into build process** (AC: #5)
  - [x] 5.1: Install `tsx` as a devDependency for running TypeScript scripts directly
  - [x] 5.2: Add `"validate:content"` script to package.json: `tsx scripts/validate-content.ts`
  - [x] 5.3: Add `"validate:schema"` script to package.json: `tsx scripts/validate-schema.ts`
  - [x] 5.4: Add `"generate:sitemap"` script to package.json: `tsx scripts/generate-sitemap.ts`
  - [x] 5.5: Update `"build"` script to chain: `npm run validate:content && npm run validate:schema && npm run generate:sitemap && tsc --noEmit && vite build`
  - [x] 5.6: Add `"validate"` convenience script: `npm run validate:content && npm run validate:schema`
  - [x] 5.7: Verify `npm run build` runs all steps in sequence and fails fast on any error

- [x] **Task 6: Verify end-to-end build** (AC: #1-5)
  - [x] 6.1: Run `npm run build` — all validation scripts pass, sitemap generated, build succeeds
  - [x] 6.2: Verify `dist/sitemap.xml` (or `dist/client/sitemap.xml`) exists and contains all URLs
  - [x] 6.3: Verify `dist/robots.txt` (or `dist/client/robots.txt`) exists with correct content
  - [x] 6.4: Intentionally break a data file (remove a required field) and verify build fails with clear error
  - [x] 6.5: Restore the data file and verify build passes again

## Dev Notes

### Critical Context: These Are Build-Time Scripts, NOT Runtime Code

These scripts execute during `npm run build` via `tsx` (TypeScript execution). They import from `src/data/` and `src/utils/` directly. They are NOT bundled into the client-side JavaScript. They run in Node.js, not in the browser.

The scripts directory was created (empty) in Story 1.1. This story populates it with three TypeScript files.

### Script Runner: tsx

Use `tsx` (not `ts-node`) for running TypeScript scripts. It is faster, requires zero configuration, and handles ESM/CJS interop automatically.

```bash
npm install -D tsx
```

Scripts are invoked via package.json:
```json
{
  "scripts": {
    "validate:content": "tsx scripts/validate-content.ts",
    "validate:schema": "tsx scripts/validate-schema.ts",
    "generate:sitemap": "tsx scripts/generate-sitemap.ts",
    "validate": "npm run validate:content && npm run validate:schema",
    "build": "npm run validate:content && npm run validate:schema && npm run generate:sitemap && tsc --noEmit && vite build"
  }
}
```

**Why sitemap generation runs AFTER `vite build`:** The sitemap reads the route list and writes to `public/sitemap.xml`. Running it after `vite build` means the next build will pick it up, OR the script can write directly to `dist/` (or `dist/client/` in React Router v7 framework mode). The recommended approach is to write to **both** `public/sitemap.xml` (for dev server access) and `dist/client/sitemap.xml` (for the current build output), since Vite copies `public/` during build but the sitemap script runs after.

**Alternative:** Run sitemap generation BEFORE `vite build` so it writes to `public/sitemap.xml` and Vite copies it into `dist/` automatically. This is simpler. Choose this approach:

```json
{
  "build": "npm run validate:content && npm run validate:schema && npm run generate:sitemap && tsc --noEmit && vite build"
}
```

### robots.txt — Exact Content

```
# robots.txt for Silver State Adolescent Treatment Center
# https://www.silverstatetreatment.com

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.silverstatetreatment.com/sitemap.xml
```

This is a static file in `public/robots.txt`. Vite copies `public/` contents to the build output root.

**Key rules (NFR35):**
- `User-agent: *` — applies to all crawlers
- `Allow: /` — full crawling of all public pages
- No `Disallow` directives on any content pages
- `Sitemap:` directive uses the production URL (crawlers use this to discover the sitemap)
- No `noindex` or `nofollow` meta tags on any content page (enforced at the page level, not in robots.txt)

### generate-sitemap.ts — Script Design

```typescript
// scripts/generate-sitemap.ts
//
// Generates sitemap.xml from the route manifest.
// Runs as a build step: tsx scripts/generate-sitemap.ts

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// -----------------------------------------------------------
// ROUTE LIST
// -----------------------------------------------------------
// Import the canonical route list. This should be a simple
// array of path strings that mirrors src/routes.ts.
// If routes.ts uses React Router framework mode conventions
// and cannot be imported in a Node context, maintain a shared
// route list in a plain .ts file (no React/JSX imports).
//
// Option A: Import from a shared routes array
// import { ALL_ROUTES } from '../src/routes'
//
// Option B: Define inline (keep in sync manually — less ideal)
// const ALL_ROUTES: string[] = [ '/', '/programs/residential-treatment', ... ]
//
// Option C: Read from the build output (post-build approach)
// Parse the dist/ directory for .html files
//
// RECOMMENDED: Option A — export a plain string array from a
// file that both the route config and this script can import.
// -----------------------------------------------------------

const SITE_URL = process.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'

// Route priority tiers
function getPriority(path: string): string {
  if (path === '/') return '1.0'
  const depth = path.split('/').filter(Boolean).length
  if (depth === 1) return '0.8'  // /insurance, /admissions, /contact, /privacy
  return '0.6'                    // /programs/residential-treatment, /conditions/anxiety-treatment, etc.
}

function getChangeFreq(path: string): string {
  if (path === '/') return 'weekly'
  return 'monthly'
}

function generateSitemap(routes: string[]): string {
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  const urls = routes
    .map(route => {
      const loc = `${SITE_URL}${route === '/' ? '' : route}`
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

// -----------------------------------------------------------
// EXECUTION
// -----------------------------------------------------------
// const xml = generateSitemap(ALL_ROUTES)
// const outputPath = resolve('public/sitemap.xml')
// writeFileSync(outputPath, xml, 'utf-8')
// console.log(`Sitemap generated: ${ALL_ROUTES.length} URLs -> ${outputPath}`)
```

**Key design decisions:**

1. **SITE_URL from environment:** Uses `VITE_SITE_URL` env var (same variable the client uses) with a hardcoded fallback to the production domain. This ensures local dev builds still produce valid sitemaps.

2. **Priority tiers:** Homepage gets 1.0, top-level pages (single segment like `/insurance`, `/admissions`) get 0.8, detail pages (two segments like `/conditions/anxiety-treatment`) get 0.6. This is standard SEO practice.

3. **changefreq:** Homepage is `weekly` (it may get updated frequently), content pages are `monthly` (clinical content updates less often). Google ignores this signal but other crawlers may use it.

4. **lastmod:** Uses the current build date. This is accurate since every build regenerates the sitemap (NFR25). If content hasn't actually changed, this is a slight overstatement, but it is standard practice for static site generators.

5. **Output location:** Writes to `public/sitemap.xml` so it is available during dev and gets copied to build output by Vite.

### Complete Route List for Sitemap

All routes from the Architecture document. The script should produce URLs for every one of these:

```typescript
const ALL_ROUTES: string[] = [
  // Homepage
  '/',

  // Programs
  '/programs/residential-treatment',
  '/programs/php',
  '/programs/iop',

  // Conditions — Mental Health (~12)
  '/conditions/anxiety-treatment',
  '/conditions/depression-treatment',
  '/conditions/trauma-ptsd-treatment',
  '/conditions/suicidal-ideation-treatment',
  '/conditions/ocd-treatment',
  '/conditions/bipolar-disorder-treatment',
  '/conditions/autism-spectrum-treatment',
  '/conditions/oppositional-defiant-treatment',
  '/conditions/conduct-disorder-treatment',
  '/conditions/dmdd-treatment',
  '/conditions/bpd-treatment',
  '/conditions/adjustment-disorder-treatment',

  // Conditions — Substance Abuse (~8)
  '/conditions/dual-diagnosis-treatment',
  '/conditions/substance-abuse-treatment',
  '/conditions/alcohol-abuse-treatment',
  '/conditions/opioid-abuse-treatment',
  '/conditions/benzodiazepine-abuse-treatment',
  '/conditions/cocaine-abuse-treatment',
  '/conditions/meth-abuse-treatment',
  '/conditions/cannabis-abuse-treatment',

  // Conditions — Eating Disorders (~5)
  '/conditions/anorexia-nervosa-treatment',
  '/conditions/bulimia-nervosa-treatment',
  '/conditions/binge-eating-treatment',
  '/conditions/arfid-treatment',
  '/conditions/osfed-treatment',

  // Insurance
  '/insurance',
  '/insurance/aetna',
  '/insurance/cigna',
  '/insurance/bcbs',
  '/insurance/ambetter',
  '/insurance/humana',
  '/insurance/uhc',
  '/insurance/tricare',
  '/insurance/medicaid',
  '/insurance/anthem',

  // Locations
  '/locations',
  '/locations/las-vegas',
  '/locations/henderson',
  '/locations/north-las-vegas',
  '/locations/summerlin',
  '/locations/clark-county',

  // About
  '/about/our-team',
  '/about/facility',
  '/about/youth-academy',

  // Admissions & Contact
  '/admissions',
  '/contact',

  // Legal
  '/privacy',
]
```

**Total: ~55 URLs.** This matches the Architecture estimate of "50-60 pages."

### validate-content.ts — Script Design

```typescript
// scripts/validate-content.ts
//
// Validates all data files have required fields.
// Exits with code 1 on failure — breaks the build.
// Runs as: tsx scripts/validate-content.ts

// Import all data exports
// import { site, navLinks, footerContent } from '../src/data/common'
// import { programs } from '../src/data/programs'
// import { conditions } from '../src/data/conditions'
// import { insuranceProviders } from '../src/data/insurance'
// import { locations } from '../src/data/locations'
// import { teamMembers } from '../src/data/about'
// import { admissionsSteps } from '../src/data/admissions'
// import { therapies } from '../src/data/therapies'

interface ValidationError {
  file: string
  entry: string
  field: string
  message: string
}

const errors: ValidationError[] = []

function requireString(
  file: string, entry: string, field: string, value: unknown
): void {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push({ file, entry, field, message: 'Required string is missing or empty' })
  }
}

function requireArray(
  file: string, entry: string, field: string, value: unknown, minLength = 1
): void {
  if (!Array.isArray(value) || value.length < minLength) {
    errors.push({
      file, entry, field,
      message: `Required array is missing or has fewer than ${minLength} items`,
    })
  }
}

function requireSlug(
  file: string, entry: string, field: string, value: unknown
): void {
  if (typeof value !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    errors.push({
      file, entry, field,
      message: 'Must be a valid kebab-case slug (lowercase letters, numbers, hyphens)',
    })
  }
}
```

**Validation rules per content type:**

| Data File | Export | Required Fields |
|-----------|--------|----------------|
| `common.ts` | `site` | `name`, `phone`, `phoneTel`, `email`, `address` (all non-empty strings) |
| `common.ts` | `navLinks` | Array with 1+ items, each with `label` and `path` |
| `programs.ts` | each program | `slug`, `label`, `title`, `body`, `features` (1+ items), `duration`, `therapies` (1+ slugs) |
| `conditions.ts` | each condition | `slug`, `title`, `description`, `symptoms` (1+ items), `therapies` (1+ slugs), `relatedPrograms` (1+ slugs), `faq` (1+ entries with `q` and `a`) |
| `insurance.ts` | each provider | `slug`, `name`, `description`, `faq` (1+ entries) |
| `locations.ts` | each location | `slug`, `name`, `description` |
| `about.ts` | each team member | `name`, `title`, `credentials`, `bio` |
| `admissions.ts` | each step | `step` (number), `title`, `description` |
| `therapies.ts` | each therapy | `slug`, `name`, `description` |

**Clinical content extra validation:**
- Conditions with `reviewedBy` field: if present, it must be a non-empty string
- Conditions with `reviewDate` field: if present, it must be a valid ISO date string
- Conditions with `sources` field: if present, each source must have `name` and `url`

**Exit behavior:**
```typescript
if (errors.length > 0) {
  console.error('\n=== CONTENT VALIDATION FAILED ===\n')
  for (const err of errors) {
    console.error(`  [${err.file}] ${err.entry}.${err.field}: ${err.message}`)
  }
  console.error(`\n${errors.length} error(s) found. Build aborted.\n`)
  process.exit(1)
} else {
  console.log('\n=== Content validation passed ===')
  console.log(`  Validated: common, programs, conditions, insurance, locations, about, admissions, therapies`)
  console.log('  All required fields present and non-empty.\n')
}
```

### validate-schema.ts — Script Design

```typescript
// scripts/validate-schema.ts
//
// Validates JSON-LD output from src/utils/schema.ts generators.
// Exits with code 1 on failure — breaks the build.
// Runs as: tsx scripts/validate-schema.ts

// Import JSON-LD generator functions
// import {
//   generateMedicalOrganization,
//   generateLocalBusiness,
//   generateMedicalCondition,
//   generateMedicalTherapy,
//   generatePhysician,
//   generateFAQPage,
//   generateBreadcrumbList,
// } from '../src/utils/schema'

// Import sample data for generating test schemas
// import { site } from '../src/data/common'
// import { programs } from '../src/data/programs'
// import { conditions } from '../src/data/conditions'
// import { teamMembers } from '../src/data/about'

interface SchemaError {
  schemaType: string
  field: string
  message: string
}

const errors: SchemaError[] = []

function validateRequired(
  schemaType: string, obj: Record<string, unknown>, field: string
): void {
  if (obj[field] === undefined || obj[field] === null || obj[field] === '') {
    errors.push({ schemaType, field, message: 'Required field is missing or empty' })
  }
}

function validateContext(schemaType: string, obj: Record<string, unknown>): void {
  if (obj['@context'] !== 'https://schema.org') {
    errors.push({
      schemaType, field: '@context',
      message: `Expected "https://schema.org", got "${obj['@context']}"`,
    })
  }
}

function validateType(schemaType: string, obj: Record<string, unknown>, expectedType: string): void {
  if (obj['@type'] !== expectedType) {
    errors.push({
      schemaType, field: '@type',
      message: `Expected "${expectedType}", got "${obj['@type']}"`,
    })
  }
}
```

**Validation rules per schema type:**

| Schema Type | Required `@type` | Required Properties |
|-------------|-----------------|---------------------|
| MedicalOrganization | `MedicalOrganization` | `@context`, `@type`, `name`, `url`, `telephone`, `address` (with `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`) |
| LocalBusiness | `LocalBusiness` | `@context`, `@type`, `name`, `url`, `telephone`, `address`, `geo` (with `latitude`, `longitude`) |
| MedicalCondition | `MedicalCondition` | `@context`, `@type`, `name`, `description`, `possibleTreatment` (array with 1+ items) |
| MedicalTherapy | `MedicalTherapy` | `@context`, `@type`, `name`, `description` |
| Physician | `Physician` | `@context`, `@type`, `name`, `description`, `medicalSpecialty` |
| FAQPage | `FAQPage` | `@context`, `@type`, `mainEntity` (array of Question items, each with `name` and `acceptedAnswer.text`) |
| BreadcrumbList | `BreadcrumbList` | `@context`, `@type`, `itemListElement` (array of ListItem, each with `position`, `name`, `item`) |

**Validation approach:**

1. Call each generator function with real data from `src/data/`
2. Parse the returned JSON-LD object
3. Validate `@context` and `@type` are correct
4. Validate all required properties are present and non-empty
5. For nested objects (e.g., `address`, `mainEntity`), validate nested required fields
6. For arrays (e.g., FAQPage `mainEntity`, BreadcrumbList `itemListElement`), validate at least one item exists and each item has required fields

**JSON-LD validation does NOT:**
- Make HTTP requests to Google's Rich Results Test (that is manual QA)
- Validate against the full schema.org vocabulary (too complex for a build script)
- Validate optional/recommended properties (only required ones)

The script validates **structural correctness** — that the generators produce valid, well-formed JSON-LD with all required fields. Manual testing with Google's Rich Results Test validates **semantic correctness** and is done during QA.

### Sitemap XML Format — Expected Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.silverstatetreatment.com</loc>
    <lastmod>2026-02-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.silverstatetreatment.com/programs/residential-treatment</loc>
    <lastmod>2026-02-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.silverstatetreatment.com/conditions/anxiety-treatment</loc>
    <lastmod>2026-02-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.silverstatetreatment.com/insurance</loc>
    <lastmod>2026-02-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... all ~55 URLs ... -->
</urlset>
```

**XML requirements:**
- UTF-8 encoding declaration
- `urlset` with `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` namespace
- Each `<url>` contains `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- `<loc>` uses absolute URLs with the production domain
- No trailing slashes on URLs (matches Architecture route convention)
- Homepage `<loc>` is just the domain with no trailing slash: `https://www.silverstatetreatment.com`

### Build Integration — Package.json Scripts

The `build` script in `package.json` must chain the validation and generation steps. The recommended order:

```
validate:content -> validate:schema -> generate:sitemap -> tsc --noEmit -> vite build
```

**Rationale for this order:**
1. **Content validation first** — catches data errors before anything else runs. Fast, no compilation needed.
2. **Schema validation second** — validates JSON-LD generators produce correct output. Depends on data being valid.
3. **Sitemap generation third** — writes `public/sitemap.xml` BEFORE `vite build` so Vite copies it into `dist/` automatically.
4. **TypeScript check fourth** — full type checking catches compile errors.
5. **Vite build last** — produces the final output including the sitemap in `public/`.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run validate:content && npm run validate:schema && npm run generate:sitemap && tsc --noEmit && vite build",
    "validate": "npm run validate:content && npm run validate:schema",
    "validate:content": "tsx scripts/validate-content.ts",
    "validate:schema": "tsx scripts/validate-schema.ts",
    "generate:sitemap": "tsx scripts/generate-sitemap.ts"
  }
}
```

**The `&&` operator ensures fail-fast:** if content validation fails, nothing else runs. The build exits with a non-zero code, which CI will catch.

### Shared Route List Strategy

The sitemap script and the React Router route configuration both need the same list of URLs. To avoid duplication and drift:

**Recommended: Create a shared route list file**

```typescript
// src/routeList.ts
// Plain TypeScript — no React imports. Safe to import in both
// React Router config and Node.js build scripts.

export const ALL_ROUTES: string[] = [
  '/',
  '/programs/residential-treatment',
  '/programs/php',
  '/programs/iop',
  // ... all routes
]
```

Both `src/routes.ts` (React Router config) and `scripts/generate-sitemap.ts` import from this file. This guarantees the sitemap always matches the actual route configuration.

**Alternative: Generate routes from data files**

If condition/insurance/location slugs are defined in data files, the route list can be generated dynamically:

```typescript
import { conditions } from '../src/data/conditions'
import { insuranceProviders } from '../src/data/insurance'
import { locations } from '../src/data/locations'

const conditionRoutes = Object.keys(conditions).map(slug => `/conditions/${slug}-treatment`)
const insuranceRoutes = Object.keys(insuranceProviders).map(slug => `/insurance/${slug}`)
const locationRoutes = Object.keys(locations).map(slug => `/locations/${slug}`)
```

This approach means adding a new condition to `conditions.ts` automatically adds it to the sitemap and route config. However, it requires data files to be importable in a Node context (no browser APIs).

### tsconfig.node.json — Script Compilation

The build scripts need TypeScript compilation settings that work in Node.js. If `tsconfig.node.json` already exists (from Story 1.1), ensure it covers the `scripts/` directory:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2022",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "include": ["vite.config.ts", "scripts/**/*.ts"]
}
```

**Note:** `tsx` does not read `tsconfig.json` for compilation — it uses its own fast transpiler. However, having `scripts/` in `tsconfig.node.json` ensures the TypeScript language server provides type checking in the editor.

### Environment Variable Access in Scripts

Build scripts run in Node.js, not in Vite's browser context. They cannot use `import.meta.env.VITE_*`. Instead:

```typescript
// In scripts/*.ts — Node.js context
const SITE_URL = process.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'
```

The `VITE_` prefix is a Vite convention for browser exposure. In Node.js, all environment variables are accessible via `process.env` regardless of prefix. The `.env` file is NOT automatically loaded in Node.js scripts (unlike Vite dev server). Options:

1. **Hardcode the production URL as fallback** (recommended for sitemap) — the fallback is always the production URL, which is what we want in the build output
2. **Use `dotenv`** — `import 'dotenv/config'` at the top of the script to load `.env`
3. **Set env vars in CI** — Vercel automatically sets environment variables during build

Recommendation: Use the hardcoded fallback. The sitemap should always use the production URL. Local dev builds producing a sitemap with `localhost` URLs would be incorrect.

### Architecture Compliance

| Pattern | This Story |
|---------|-----------|
| File naming | `kebab-case.ts` for config/script files: `generate-sitemap.ts`, `validate-content.ts`, `validate-schema.ts` |
| TypeScript strict mode | All scripts written in strict TypeScript |
| No barrel files | Scripts import directly from source files, no barrel imports |
| Environment variables | `process.env.VITE_SITE_URL` in Node context with fallback |
| Build-time validation | Content + schema validation runs before build, fails on errors |
| Exit codes | Scripts exit 0 on success, 1 on failure — standard UNIX convention |

### Anti-Patterns to AVOID

1. **DO NOT** use `ts-node` — use `tsx` instead (faster, zero config, better ESM support)
2. **DO NOT** make HTTP requests to Google's Rich Results Test API in the schema validation script — validate structure locally, manual Rich Results testing is QA
3. **DO NOT** hardcode individual URLs in the sitemap script if they can be derived from data files or a shared route list — single source of truth
4. **DO NOT** write the sitemap to `dist/` directly — write to `public/sitemap.xml` so Vite handles the copy
5. **DO NOT** add `Disallow` rules to robots.txt for any content page — NFR35 requires full crawling
6. **DO NOT** use `noindex` or `nofollow` meta tags on any content page
7. **DO NOT** skip the sitemap `Sitemap:` directive in robots.txt — crawlers use this for discovery
8. **DO NOT** make validation scripts "warn and continue" — they must fail the build (exit code 1) on any error
9. **DO NOT** validate optional fields as required — only validate fields that are architecturally required per the type interface
10. **DO NOT** import React or JSX in build scripts — these are pure Node.js TypeScript files
11. **DO NOT** generate the sitemap at runtime (e.g., via a serverless function) — it is a static file generated at build time
12. **DO NOT** use `console.log` for errors — use `console.error` for error output (goes to stderr)

### Testing This Story

This story does NOT require unit tests (testing infrastructure is Story 1.10). However, the following manual verification is required:

1. `npm run validate:content` — passes with current data files, prints success summary
2. `npm run validate:schema` — passes with current schema generators, prints success summary
3. `npm run generate:sitemap` — generates `public/sitemap.xml` with ~55 URLs
4. `npm run build` — full build succeeds with all validation and generation steps
5. Break a required field in a data file (e.g., delete `site.phone`) → `npm run validate:content` exits with code 1 and clear error message
6. Fix the field → validation passes again
7. Verify `public/robots.txt` contains correct content with `Sitemap:` directive
8. Verify generated `sitemap.xml` is valid XML (open in browser or xmllint)

### Files Created / Modified by This Story

| File | Action | Purpose |
|------|--------|---------|
| `public/robots.txt` | CREATE | Crawl permissions + sitemap directive |
| `scripts/generate-sitemap.ts` | CREATE | Build-time sitemap XML generation |
| `scripts/validate-content.ts` | CREATE | Build-time content data validation |
| `scripts/validate-schema.ts` | CREATE | Build-time JSON-LD structure validation |
| `public/sitemap.xml` | GENERATED | Output of generate-sitemap.ts (regenerated each build) |
| `package.json` | MODIFY | Add scripts: `validate:content`, `validate:schema`, `generate:sitemap`, `validate`, update `build` |
| `src/routeList.ts` | CREATE (optional) | Shared route path array for sitemap + route config |

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Development-Workflow-Integration] — Build process definition: content validation, schema validation, sitemap generation
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] — `scripts/` directory with three script files defined
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — Complete URL structure for sitemap
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] — `VITE_SITE_URL` for sitemap domain
- [Source: _bmad-output/planning-artifacts/architecture.md#Testing-Patterns] — Content data validation as testing priority #1
- [Source: _bmad-output/planning-artifacts/architecture.md#Process-Patterns] — Build-time validation: missing content fails the build
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.9] — Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR38] — sitemap.xml with all page URLs
- [Source: _bmad-output/planning-artifacts/prd.md#FR45] — Consistent content schema per page type
- [Source: _bmad-output/planning-artifacts/prd.md#FR47] — Structured data validated before deployment
- [Source: _bmad-output/planning-artifacts/prd.md#NFR24] — JSON-LD validates error-free
- [Source: _bmad-output/planning-artifacts/prd.md#NFR25] — sitemap.xml regenerated on each build
- [Source: _bmad-output/planning-artifacts/prd.md#NFR35] — robots.txt allows full crawling

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Build initially failed at `tsc --noEmit` due to pre-existing `.test.tsx` files from Story 1.6 referencing uninstalled testing libraries (Story 1.10). Fixed by adding `exclude` for test files in `tsconfig.json`.
- `src/utils/schema.ts` uses `import.meta.env.VITE_SITE_URL` which crashes in Node.js (via tsx). Fixed by adding optional chaining: `import.meta.env?.VITE_SITE_URL`.

### Completion Notes List

- Created `public/robots.txt` with permissive crawl rules and `Sitemap:` directive per NFR35
- Created `scripts/generate-sitemap.ts` importing `routePaths` from `src/routes.tsx` — single source of truth, no duplication. Generates 54 URLs with priority tiers (1.0/0.8/0.6) and changefreq (weekly/monthly)
- Created `scripts/validate-content.ts` with graceful handling of empty arrays (programPages, conditionPages, insurancePages, locations, therapyModalities all skip with log messages since they're populated in later epics). Validates all present data: common.ts site/navLinks, programs object, insurance entries, leadership, admissionsProcess
- Created `scripts/validate-schema.ts` validating all 7 JSON-LD generator functions with representative test data: MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList
- Updated `package.json` build chain: validate:content → validate:schema → generate:sitemap → tsc --noEmit → vite build → prerender
- Updated `tsconfig.node.json` to include `scripts/**/*.ts` for editor type checking
- Added `exclude` for test files in `tsconfig.json` to unblock build (pre-existing issue from Story 1.6)
- Added optional chaining to `schema.ts` for `import.meta.env` Node.js compatibility
- All ACs verified: sitemap regenerates each build (AC#5), robots.txt allows full crawling (AC#2), content validation fails build on errors (AC#3), schema validation catches JSON-LD errors (AC#4), full build succeeds end-to-end (AC#1)

### Change Log

- 2026-02-24: Story 1.9 implemented — build scripts for sitemap, content validation, schema validation, and robots.txt

### File List

| File | Action |
|------|--------|
| `public/robots.txt` | CREATE |
| `scripts/generate-sitemap.ts` | CREATE |
| `scripts/validate-content.ts` | CREATE |
| `scripts/validate-schema.ts` | CREATE |
| `public/sitemap.xml` | GENERATED (output of generate-sitemap.ts) |
| `package.json` | MODIFY (added validate/generate scripts, updated build chain) |
| `tsconfig.json` | MODIFY (added exclude for test files) |
| `tsconfig.node.json` | MODIFY (added scripts/**/*.ts to include) |
| `src/utils/schema.ts` | MODIFY (optional chaining for import.meta.env) |
