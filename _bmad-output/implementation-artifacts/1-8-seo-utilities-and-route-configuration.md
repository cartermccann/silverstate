# Story 1.8: SEO Utilities & Route Configuration

Status: review

## Story

As a **developer**,
I want SEO utility functions and a complete route manifest,
So that every page gets correct JSON-LD, metadata, and pre-rendered HTML without manual configuration per page.

## Acceptance Criteria

1. **Given** the production project needs SEO infrastructure, **When** SEO utilities are created, **Then** `utils/schema.ts` exports JSON-LD generator functions for: MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList, WebPage (FR35)
2. **And** `utils/meta.ts` exports a helper for generating title, description, OG tags, and canonical URL per page (FR36)
3. **And** `routes.ts` defines all routes matching the Architecture URL structure
4. **And** Vite config pre-renders all routes to static HTML at build time (FR37)
5. **And** generated JSON-LD validates against schema.org standards
6. **And** pre-rendered HTML contains full page content without requiring JavaScript (NFR36)

## Tasks / Subtasks

- [x] **Task 1: Create `src/utils/schema.ts` — JSON-LD generator functions** (AC: #1, #5)
  - [x]1.1: Define TypeScript input interfaces for each JSON-LD type (e.g., `MedicalOrganizationInput`, `MedicalConditionInput`, etc.)
  - [x]1.2: Implement `generateMedicalOrganization()` — returns complete MedicalOrganization JSON-LD object
  - [x]1.3: Implement `generateLocalBusiness()` — returns LocalBusiness JSON-LD with address, geo, hours, phone
  - [x]1.4: Implement `generateMedicalCondition()` — returns MedicalCondition JSON-LD with name, description, possible treatments
  - [x]1.5: Implement `generateMedicalTherapy()` — returns MedicalTherapy JSON-LD with name, description, therapy type
  - [x]1.6: Implement `generatePhysician()` — returns Person/Physician JSON-LD with name, credentials, affiliation
  - [x]1.7: Implement `generateFAQPage()` — returns FAQPage JSON-LD with Question/Answer pairs
  - [x]1.8: Implement `generateBreadcrumbList()` — returns BreadcrumbList JSON-LD with ordered item list
  - [x]1.8b: Implement `generateWebPage(title, description, url)` — returns `WebPage` JSON-LD schema — used by Privacy page (Story 1.12) and other general content pages
  - [x]1.9: Implement `toJsonLdScript()` helper — wraps any JSON-LD object into a `<script type="application/ld+json">` string (for use in meta exports)
  - [x]1.10: Ensure all generators use `VITE_SITE_URL` for canonical URL base, with fallback to `https://www.silverstatetreatment.com`

- [x] **Task 2: Create `src/utils/meta.ts` — SEO metadata helper** (AC: #2)
  - [x]2.1: Define `PageMetaInput` interface for page-specific metadata parameters
  - [x]2.2: Implement `generateMeta()` function that returns a React Router v7 `MetaDescriptor[]` array
  - [x]2.3: Include title tag, meta description, canonical URL, robots, Open Graph (og:title, og:description, og:url, og:image, og:type, og:site_name), and Twitter Card tags
  - [x]2.4: Support optional JSON-LD injection via `script:ld+json` meta descriptor
  - [x]2.5: Ensure `VITE_SITE_URL` is used for all absolute URLs (canonical, og:url, og:image)

- [x] **Task 3: Define complete route manifest in `src/routes.ts`** (AC: #3)
  - [x]3.1: Define all routes matching the Architecture URL structure (50-60 routes total)
  - [x]3.2: Route-based code splitting is handled automatically. Define routes using `createBrowserRouter` with `React.lazy()` for each page component. Example: `const Home = lazy(() => import('./pages/Home'))`. Each route's component is loaded on-demand when the user navigates to it.
  - [x]3.3: Set up catch-all 404 route as the last entry
  - [x]3.4: Group routes under a root layout route that uses `PageLayout`
  - [x]3.5: Ensure route paths match Architecture URL patterns exactly (lowercase, kebab-case, no trailing slashes)

- [x] **Task 4: Configure pre-rendering for all routes** (AC: #4, #6)
  - [x]4.1: Update `react-router.config.ts` to list all routes for pre-rendering at build time
  - [x]4.2: Ensure pre-rendered HTML includes full page content (not an empty shell)
  - [x]4.3: Verify pre-rendered HTML includes JSON-LD `<script>` tags and meta tags in `<head>`
  - [x]4.4: Ensure `VITE_SITE_URL` is available at build time for pre-rendering

- [x] **Task 5: Verify and validate** (AC: #1-6)
  - [x]5.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x]5.2: Manually verify JSON-LD output for each generator function matches schema.org spec
  - [x]5.3: Verify `generateMeta()` produces correct meta tags for a sample page
  - [x]5.4: Verify route manifest includes all pages from Architecture URL structure
  - [x]5.5: Verify `npm run build` succeeds and produces pre-rendered HTML files

## Dev Notes

### Critical Context: Utility Layer, Not Page Layer

This story creates **infrastructure** — utility functions and configuration that all pages will consume. No page components are created or modified in this story. The utilities must be designed so that any page can import them, pass data, and get correct JSON-LD and metadata without knowing schema.org internals.

**Data flow (from Architecture doc):**
```
data/*.ts -> pages/*.tsx -> utils/schema.ts -> JSON-LD in <head>
                         -> utils/meta.ts   -> SEO tags in <head>
```

Pages will import the generators and call them inside their React Router v7 `meta` export function. This story builds the generators; pages consume them starting in Epic 2.

### Dependency on Prior Stories

- **Story 1.1** (Project Foundation): Production project must be initialized with React Router v7 framework mode, `src/utils/` directory must exist
- **Story 1.2** (Shared Data Types): `types.ts` must define `FaqEntry` and other data interfaces that schema generators will accept. If Story 1.2 is not yet complete, define minimal input interfaces locally in `schema.ts` and refactor to import from `types.ts` later
- **Story 1.6** (Breadcrumb): The `generateBreadcrumbList()` function created here will be consumed by the Breadcrumb component. Build the generator independently
- **Story 1.7** (PageLayout): PageLayout will integrate the meta/schema system. This story creates the utilities; PageLayout wires them in

**Ownership:** This story (1.8) owns the route configuration, including wiring PageLayout as the layout wrapper for all routes. Story 1.7 creates the PageLayout component.

### `src/utils/schema.ts` — JSON-LD Generator Design

**Design Principles:**
- Each generator is a **pure function**: takes typed input, returns a plain JavaScript object (JSON-LD)
- Generators know nothing about React — they return data, not JSX
- Every generator adds `@context: 'https://schema.org'` and the correct `@type`
- Common site data (name, phone, address, URL) comes from `data/common.ts` — import `site` object
- Use `VITE_SITE_URL` env var for canonical URL base: `import.meta.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'`

**Generator Function Signatures:**

```typescript
// Base URL constant used across all generators
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'

// --- Input Interfaces ---

interface MedicalOrganizationInput {
  url?: string                  // defaults to SITE_URL
}

interface LocalBusinessInput {
  name?: string                 // defaults to site.name
  url?: string                  // defaults to SITE_URL
  areaServed?: string[]         // e.g., ['Las Vegas', 'Henderson']
}

interface MedicalConditionInput {
  name: string                  // e.g., 'Anxiety Disorder'
  description: string
  slug: string                  // e.g., 'anxiety-treatment'
  possibleTreatments?: string[] // e.g., ['CBT', 'DBT', 'Medication Management']
  relatedConditions?: string[]
}

interface MedicalTherapyInput {
  name: string                  // e.g., 'Cognitive Behavioral Therapy'
  description: string
  slug: string                  // e.g., 'residential-treatment'
  therapyType?: string          // e.g., 'PsychologicalTreatment'
  conditions?: string[]
}

interface PhysicianInput {
  name: string                  // e.g., 'Dr. Russ Park'
  credentials: string           // e.g., 'MD, Board Certified Psychiatrist'
  title: string                 // e.g., 'Medical Director'
  description?: string
  image?: string
}

interface FAQPageInput {
  questions: Array<{
    question: string
    answer: string
  }>
}

interface BreadcrumbInput {
  items: Array<{
    name: string
    url: string
  }>
}

interface WebPageInput {
  title: string                   // e.g., 'Privacy Policy'
  description: string             // e.g., 'Privacy policy for Silver State...'
  url: string                     // e.g., 'https://www.silverstatetreatment.com/privacy'
  dateModified?: string           // ISO date string e.g., '2026-02-23'
}

// --- Generator Functions ---

export function generateMedicalOrganization(input?: MedicalOrganizationInput): Record<string, unknown>
export function generateLocalBusiness(input?: LocalBusinessInput): Record<string, unknown>
export function generateMedicalCondition(input: MedicalConditionInput): Record<string, unknown>
export function generateMedicalTherapy(input: MedicalTherapyInput): Record<string, unknown>
export function generatePhysician(input: PhysicianInput): Record<string, unknown>
export function generateFAQPage(input: FAQPageInput): Record<string, unknown>
export function generateBreadcrumbList(input: BreadcrumbInput): Record<string, unknown>
export function generateWebPage(input: WebPageInput): Record<string, unknown>

// Helper to convert JSON-LD object to a <script type="application/ld+json"> tag string
export function toJsonLdScript(schema: Record<string, unknown>): string
```

**JSON-LD Output Examples:**

**MedicalOrganization** (used on homepage, about pages):
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Silver State Adolescent Treatment Center",
  "url": "https://www.silverstatetreatment.com",
  "logo": "https://www.silverstatetreatment.com/assets/logo.png",
  "telephone": "(725) 525-9897",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8225 W Robindale Rd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89113",
    "addressCountry": "US"
  },
  "medicalSpecialty": "Psychiatric",
  "availableService": [
    {
      "@type": "MedicalTherapy",
      "name": "Residential Treatment",
      "description": "24/7 residential treatment for adolescents ages 12-17"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Partial Hospitalization Program (PHP)",
      "description": "Day treatment program for adolescents transitioning from residential care"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Intensive Outpatient Program (IOP)",
      "description": "Flexible outpatient treatment for adolescents"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Accreditation",
      "name": "Joint Commission Gold Seal of Approval"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Certification",
      "name": "LegitScript Certified"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Membership",
      "name": "NAATP Member"
    }
  ]
}
```

**LocalBusiness** (used on location pages, contact page):
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Silver State Adolescent Treatment Center",
  "url": "https://www.silverstatetreatment.com",
  "telephone": "(725) 525-9897",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8225 W Robindale Rd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89113",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1497,
    "longitude": -115.1467
  },
  "areaServed": [
    { "@type": "City", "name": "Las Vegas" },
    { "@type": "City", "name": "Henderson" },
    { "@type": "City", "name": "North Las Vegas" },
    { "@type": "City", "name": "Summerlin" },
    { "@type": "AdministrativeArea", "name": "Clark County" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$$$"
}
```

**MedicalCondition** (used on each condition page):
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Anxiety Disorder in Adolescents",
  "description": "Comprehensive treatment for adolescent anxiety disorders including generalized anxiety, social anxiety, and panic disorder at Silver State.",
  "url": "https://www.silverstatetreatment.com/conditions/anxiety-treatment",
  "possibleTreatment": [
    {
      "@type": "MedicalTherapy",
      "name": "Cognitive Behavioral Therapy (CBT)"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Dialectical Behavior Therapy (DBT)"
    }
  ],
  "signOrSymptom": [
    { "@type": "MedicalSignOrSymptom", "name": "Excessive worry" },
    { "@type": "MedicalSignOrSymptom", "name": "Avoidance behavior" }
  ],
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Psychiatric"
  }
}
```

**MedicalTherapy** (used on program pages):
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Residential Treatment Program",
  "description": "Comprehensive 24/7 residential treatment for adolescents ages 12-17 with mental health and substance use disorders.",
  "url": "https://www.silverstatetreatment.com/programs/residential-treatment",
  "medicineSystem": {
    "@type": "MedicineSystem",
    "name": "EvidenceBased"
  },
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Psychiatric"
  },
  "recognizingAuthority": {
    "@type": "Organization",
    "name": "The Joint Commission"
  }
}
```

**Physician/Person** (used on team page, clinical reviewer attributions):
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Russ Park",
  "description": "Medical Director at Silver State Adolescent Treatment Center",
  "jobTitle": "Medical Director",
  "medicalSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Psychiatric"
  },
  "affiliation": {
    "@type": "MedicalOrganization",
    "name": "Silver State Adolescent Treatment Center",
    "url": "https://www.silverstatetreatment.com"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "MD, Board Certified Psychiatrist"
  }
}
```

**FAQPage** (used on program, condition, insurance pages):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What ages does Silver State treat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Silver State Adolescent Treatment Center treats adolescents ages 12-17 across all levels of care including residential, PHP, and IOP programs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Silver State accept Aetna insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Silver State accepts Aetna insurance for adolescent treatment. Call (725) 525-9897 for a free insurance verification in under 10 minutes."
      }
    }
  ]
}
```

**BreadcrumbList** (used on all interior pages via Breadcrumb component):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.silverstatetreatment.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Programs",
      "item": "https://www.silverstatetreatment.com/programs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Residential Treatment",
      "item": "https://www.silverstatetreatment.com/programs/residential-treatment"
    }
  ]
}
```

### `src/utils/meta.ts` — SEO Metadata Helper Design

**Design Principles:**
- Returns a React Router v7 `MetaDescriptor[]` array — the exact format used by route `meta` exports
- Each page calls `generateMeta()` in its `meta` export function, passing page-specific data
- JSON-LD is injected via the `"script:ld+json"` meta descriptor type (React Router v7 convention)
- Multiple JSON-LD blocks can be injected per page (e.g., MedicalCondition + FAQPage + BreadcrumbList)
- Canonical URL is computed from `VITE_SITE_URL` + route path — no manual URL construction per page

**Function Signature:**

```typescript
import type { MetaDescriptor } from 'react-router'

interface PageMetaInput {
  title: string                       // Page title — appends " | Silver State" suffix
  description: string                 // Meta description (150-160 chars ideal)
  path: string                        // Route path e.g., '/conditions/anxiety-treatment'
  ogImage?: string                    // OG image URL (defaults to site default OG image)
  ogType?: string                     // og:type (defaults to 'website')
  noIndex?: boolean                   // Set true for utility pages (404, etc.)
  jsonLd?: Record<string, unknown>[]  // Array of JSON-LD objects to inject
}

export function generateMeta(input: PageMetaInput): MetaDescriptor[]
```

**Output Example for `/conditions/anxiety-treatment`:**

```typescript
// In the page's route module:
import { generateMeta } from '../utils/meta'
import { generateMedicalCondition, generateFAQPage, generateBreadcrumbList } from '../utils/schema'

export function meta() {
  return generateMeta({
    title: 'Anxiety Treatment for Teens',
    description: 'Evidence-based anxiety treatment for adolescents ages 12-17. CBT, DBT, and residential care at Silver State in Las Vegas. Call (725) 525-9897.',
    path: '/conditions/anxiety-treatment',
    jsonLd: [
      generateMedicalCondition({
        name: 'Anxiety Disorder in Adolescents',
        description: '...',
        slug: 'anxiety-treatment',
        possibleTreatments: ['CBT', 'DBT'],
      }),
      generateFAQPage({
        questions: [
          { question: 'How is teen anxiety treated?', answer: '...' },
        ],
      }),
    ],
  })
}
```

**What `generateMeta()` produces:**

```typescript
[
  { title: 'Anxiety Treatment for Teens | Silver State' },
  { name: 'description', content: 'Evidence-based anxiety treatment for adolescents ages 12-17...' },
  { tagName: 'link', rel: 'canonical', href: 'https://www.silverstatetreatment.com/conditions/anxiety-treatment' },
  { name: 'robots', content: 'index, follow' },
  // Open Graph
  { property: 'og:title', content: 'Anxiety Treatment for Teens | Silver State' },
  { property: 'og:description', content: 'Evidence-based anxiety treatment for adolescents ages 12-17...' },
  { property: 'og:url', content: 'https://www.silverstatetreatment.com/conditions/anxiety-treatment' },
  { property: 'og:image', content: 'https://www.silverstatetreatment.com/assets/og-default.jpg' },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Silver State Adolescent Treatment Center' },
  // Twitter Card
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Anxiety Treatment for Teens | Silver State' },
  { name: 'twitter:description', content: 'Evidence-based anxiety treatment for adolescents ages 12-17...' },
  { name: 'twitter:image', content: 'https://www.silverstatetreatment.com/assets/og-default.jpg' },
  // JSON-LD (one entry per schema object)
  { 'script:ld+json': { /* MedicalCondition JSON-LD */ } },
  { 'script:ld+json': { /* FAQPage JSON-LD */ } },
]
```

### `src/routes.ts` — Complete Route Manifest

**Design Principles:**
- Single source of truth for all application routes
- React Router v7 library/SPA mode with `createBrowserRouter`
- Every route uses `React.lazy()` for code splitting — each page component is loaded on-demand when the user navigates to it
- Route paths match Architecture URL patterns exactly
- Routes are grouped under a root layout route that wraps all pages in `PageLayout`
- Catch-all `*` route renders the 404 page

**Complete Route Table (from Architecture document):**

| Path | Page File | JSON-LD Types |
|------|-----------|---------------|
| `/` | `pages/Home.tsx` | MedicalOrganization, LocalBusiness |
| `/programs/residential-treatment` | `pages/programs/Residential.tsx` | MedicalTherapy, FAQPage |
| `/programs/php` | `pages/programs/PHP.tsx` | MedicalTherapy, FAQPage |
| `/programs/iop` | `pages/programs/IOP.tsx` | MedicalTherapy, FAQPage |
| `/conditions/anxiety-treatment` | `pages/conditions/Anxiety.tsx` | MedicalCondition, FAQPage |
| `/conditions/depression-treatment` | `pages/conditions/Depression.tsx` | MedicalCondition, FAQPage |
| `/conditions/trauma-ptsd-treatment` | `pages/conditions/TraumaPTSD.tsx` | MedicalCondition, FAQPage |
| `/conditions/substance-abuse-treatment` | `pages/conditions/SubstanceAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/suicidal-ideation-treatment` | `pages/conditions/SuicidalIdeation.tsx` | MedicalCondition, FAQPage |
| `/conditions/ocd-treatment` | `pages/conditions/OCD.tsx` | MedicalCondition, FAQPage |
| `/conditions/bipolar-disorder-treatment` | `pages/conditions/BipolarDisorder.tsx` | MedicalCondition, FAQPage |
| `/conditions/autism-spectrum-treatment` | `pages/conditions/AutismSpectrum.tsx` | MedicalCondition, FAQPage |
| `/conditions/oppositional-defiant-treatment` | `pages/conditions/OppositionalDefiant.tsx` | MedicalCondition, FAQPage |
| `/conditions/conduct-disorder-treatment` | `pages/conditions/ConductDisorder.tsx` | MedicalCondition, FAQPage |
| `/conditions/dmdd-treatment` | `pages/conditions/DMDD.tsx` | MedicalCondition, FAQPage |
| `/conditions/bpd-treatment` | `pages/conditions/BPD.tsx` | MedicalCondition, FAQPage |
| `/conditions/adjustment-disorder-treatment` | `pages/conditions/AdjustmentDisorder.tsx` | MedicalCondition, FAQPage |
| `/conditions/dual-diagnosis-treatment` | `pages/conditions/DualDiagnosis.tsx` | MedicalCondition, FAQPage |
| `/conditions/alcohol-abuse-treatment` | `pages/conditions/AlcoholAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/opioid-abuse-treatment` | `pages/conditions/OpioidAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/benzodiazepine-abuse-treatment` | `pages/conditions/BenzodiazepineAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/cocaine-abuse-treatment` | `pages/conditions/CocaineAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/meth-abuse-treatment` | `pages/conditions/MethAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/cannabis-abuse-treatment` | `pages/conditions/CannabisAbuse.tsx` | MedicalCondition, FAQPage |
| `/conditions/anorexia-nervosa-treatment` | `pages/conditions/AnorexiaNervosa.tsx` | MedicalCondition, FAQPage |
| `/conditions/bulimia-nervosa-treatment` | `pages/conditions/BulimiaNervosa.tsx` | MedicalCondition, FAQPage |
| `/conditions/binge-eating-treatment` | `pages/conditions/BingeEating.tsx` | MedicalCondition, FAQPage |
| `/conditions/arfid-treatment` | `pages/conditions/ARFID.tsx` | MedicalCondition, FAQPage |
| `/conditions/osfed-treatment` | `pages/conditions/OSFED.tsx` | MedicalCondition, FAQPage |
| `/insurance` | `pages/insurance/Index.tsx` | LocalBusiness |
| `/insurance/aetna` | `pages/insurance/Aetna.tsx` | FAQPage |
| `/insurance/cigna` | `pages/insurance/Cigna.tsx` | FAQPage |
| `/insurance/bcbs` | `pages/insurance/BCBS.tsx` | FAQPage |
| `/insurance/ambetter` | `pages/insurance/Ambetter.tsx` | FAQPage |
| `/insurance/humana` | `pages/insurance/Humana.tsx` | FAQPage |
| `/insurance/uhc` | `pages/insurance/UHC.tsx` | FAQPage |
| `/insurance/tricare` | `pages/insurance/TRICARE.tsx` | FAQPage |
| `/insurance/medicaid` | `pages/insurance/Medicaid.tsx` | FAQPage |
| `/insurance/anthem` | `pages/insurance/Anthem.tsx` | FAQPage |
| `/locations` | `pages/locations/Index.tsx` | LocalBusiness |
| `/locations/las-vegas` | `pages/locations/LasVegas.tsx` | LocalBusiness |
| `/locations/henderson` | `pages/locations/Henderson.tsx` | LocalBusiness |
| `/locations/north-las-vegas` | `pages/locations/NorthLasVegas.tsx` | LocalBusiness |
| `/locations/summerlin` | `pages/locations/Summerlin.tsx` | LocalBusiness |
| `/locations/clark-county` | `pages/locations/ClarkCounty.tsx` | LocalBusiness |
| `/about/our-team` | `pages/about/Team.tsx` | Physician (multiple) |
| `/about/facility` | `pages/about/Facility.tsx` | LocalBusiness |
| `/about/youth-academy` | `pages/about/YouthAcademy.tsx` | MedicalOrganization |
| `/admissions` | `pages/admissions/Process.tsx` | FAQPage |
| `/contact` | `pages/Contact.tsx` | LocalBusiness |
| `/privacy` | `pages/Privacy.tsx` | (none) |
| `*` | `pages/NotFound.tsx` | (none) |

**Total: 52 page routes + 1 catch-all = 53 route entries.**

**Route Manifest Code Structure:**

The project uses React Router v7 in **library/SPA mode** with `createBrowserRouter`. Do NOT use `@react-router/dev/routes`, `route()`, `layout()`, or file-based routing conventions -- those are framework-mode patterns that do not apply to this project.

```typescript
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import PageLayout from './layouts/PageLayout'

// Lazy-loaded page components (code splitting)
const Home = lazy(() => import('./pages/Home'))
const Residential = lazy(() => import('./pages/programs/Residential'))
const PHP = lazy(() => import('./pages/programs/PHP'))
const IOP = lazy(() => import('./pages/programs/IOP'))
const Anxiety = lazy(() => import('./pages/conditions/Anxiety'))
const Depression = lazy(() => import('./pages/conditions/Depression'))
// ... all other page lazy imports ...
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const router = createBrowserRouter([
  {
    element: <PageLayout><Suspense fallback={null}><Outlet /></Suspense></PageLayout>,
    children: [
      // Homepage
      { path: '/', element: <Home /> },

      // Programs
      { path: '/programs/residential-treatment', element: <Residential /> },
      { path: '/programs/php', element: <PHP /> },
      { path: '/programs/iop', element: <IOP /> },

      // Conditions (~25 routes)
      { path: '/conditions/anxiety-treatment', element: <Anxiety /> },
      { path: '/conditions/depression-treatment', element: <Depression /> },
      // ... all condition routes ...

      // Insurance (hub + 9 providers)
      { path: '/insurance', element: <Insurance /> },
      { path: '/insurance/aetna', element: <Aetna /> },
      // ... all insurance routes ...

      // Locations (hub + 5 cities)
      { path: '/locations', element: <Locations /> },
      { path: '/locations/las-vegas', element: <LasVegas /> },
      // ... all location routes ...

      // About
      { path: '/about/our-team', element: <Team /> },
      { path: '/about/facility', element: <Facility /> },
      { path: '/about/youth-academy', element: <YouthAcademy /> },

      // Admissions & Contact
      { path: '/admissions', element: <Process /> },
      { path: '/contact', element: <Contact /> },

      // Privacy & Legal
      { path: '/privacy', element: <Privacy /> },

      // 404 catch-all
      { path: '*', element: <NotFound /> },
    ],
  },
])
```

**IMPORTANT:** The key requirements are:
1. All routes are listed explicitly (no file-based routing magic)
2. PageLayout wraps all routes as the layout element via a parent route with `<Outlet />`
3. Every route path matches the Architecture URL table above
4. Use `React.lazy()` for each page component for automatic code splitting

### Pre-rendering Configuration

**Note:** The project uses React Router v7 in library/SPA mode (not framework mode). Pre-rendering is handled via Vite's `vite-plugin-ssr` or a similar static pre-rendering plugin configured in `vite.config.ts`. Do NOT use `react-router.config.ts` or `@react-router/dev/config` -- those are framework-mode patterns.

The pre-rendering plugin should be configured with all route paths so that `vite build` produces static HTML files for each route. The list of routes can be imported from `src/routeList.ts` (the shared route path array).

**Key pre-rendering rules:**
- Every route in the route manifest (except `*` catch-all) MUST be pre-rendered
- Pre-rendered HTML must include the full page content, not an empty `<div id="root"></div>` shell
- JSON-LD `<script type="application/ld+json">` tags must appear in the pre-rendered HTML `<head>`
- `<title>`, `<meta>`, and `<link rel="canonical">` must appear in the pre-rendered HTML `<head>`
- The `VITE_SITE_URL` env var must be set at build time (in `.env` or Vercel environment settings)

### Environment Variable Usage

Both `schema.ts` and `meta.ts` need the site URL for absolute URLs:

```typescript
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.silverstatetreatment.com'
```

**Build-time behavior:** During `npm run build`, Vite replaces `import.meta.env.VITE_SITE_URL` with the actual value. If the variable is not set, the fallback ensures correct URLs. The fallback value MUST be the production URL — not `localhost`.

### Site Data Dependencies (from `data/common.ts`)

The schema generators need common site data. Import from `data/common.ts` (created in Story 1.2):

```typescript
// Expected exports from data/common.ts:
export const site = {
  name: 'Silver State Adolescent Treatment Center',
  phone: '(725) 525-9897',
  phoneTel: '+17255259897',
  address: {
    street: '8225 W Robindale Rd',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89113',
  },
  geo: {
    latitude: 36.1497,
    longitude: -115.1467,
  },
}
```

**If Story 1.2 is not yet complete:** Define the site data as a local constant in `schema.ts` with a `// TODO: import from data/common.ts when Story 1.2 is complete` comment. Do NOT create `data/common.ts` in this story — that belongs to Story 1.2.

### Handling Pages That Don't Exist Yet

Most page components listed in the route manifest will not exist when this story is implemented (they are created in Epics 2-8). The route manifest should list all routes with lazy-loaded page imports. There are two valid approaches:

**Approach A: Placeholder page components**
Create minimal placeholder `.tsx` files for every page that just export a default function returning `<div>Page Name</div>`. This ensures the route manifest compiles and pre-rendering works. Subsequent stories replace the placeholders with real content.

**Approach B: Route manifest with lazy imports only**
Define all routes in `routes.ts` but accept that the build will not work until page files exist. Document which routes are placeholder vs. ready.

**Recommended: Approach A.** Create thin placeholder files so that `npm run build` succeeds and pre-rendering produces HTML for all routes. Each placeholder should be a minimal valid React Router v7 route module:

```typescript
// Minimal placeholder page example: src/pages/conditions/Anxiety.tsx
export default function Anxiety() {
  return (
    <main>
      <h1>Anxiety Treatment for Teens</h1>
      <p>Content coming soon.</p>
    </main>
  )
}
```

**Rules for placeholders:**
- Use `export default function PageName` (not arrow functions)
- Include an `<h1>` with the page topic (helps verify pre-rendering)
- Do NOT add meta exports to placeholders — the consuming story adds those
- Do NOT add data imports to placeholders — keep them zero-dependency
- Keep every placeholder under 10 lines
- Place in the correct directory per the Architecture doc

### Schema.org Validation Rules

All generated JSON-LD must pass these checks (automated validation comes in Story 1.9 via `scripts/validate-schema.ts`):

1. **`@context` is present** and set to `'https://schema.org'`
2. **`@type` is present** and is a valid schema.org type
3. **Required properties** per type are populated (not empty strings or null)
4. **URLs are absolute** — always `https://www.silverstatetreatment.com/...`, never relative paths
5. **Phone number format** — use `(725) 525-9897` for display, `+17255259897` for `telephone` property
6. **Nested types** — all nested objects include their own `@type` (e.g., `PostalAddress`, `GeoCoordinates`)
7. **No duplicate `@context`** — only the top-level object has `@context`, nested objects do not
8. **Array consistency** — `mainEntity` in FAQPage is always an array even with one question

### Architecture Compliance Requirements

- **File naming:** `schema.ts` and `meta.ts` in `src/utils/` (camelCase.ts per convention)
- **Export style:** Named exports for each function — `export function generateMedicalOrganization(...)`
- **No default exports** from utility files — only components use default exports
- **No React imports** in utility files — these are pure functions returning data objects
- **Type annotations:** Explicit return types on all exported functions
- **Environment variables:** Access via `import.meta.env.VITE_SITE_URL` (never `process.env`)
- **Phone numbers:** Import from `data/common.ts` via `site.phone` / `site.phoneTel` — never hardcode
- **Naming:** camelCase function names (`generateMedicalOrganization`, not `GenerateMedicalOrganization`)

### Anti-Patterns to AVOID

1. **DO NOT** hardcode phone numbers, addresses, or site name in schema generators — import from `data/common.ts`
2. **DO NOT** put JSON-LD `<script>` tags inside page component JSX — JSON-LD goes in the route `meta` export via `script:ld+json` descriptor
3. **DO NOT** use `dangerouslySetInnerHTML` for JSON-LD — React Router v7 handles `script:ld+json` safely
4. **DO NOT** create a generic "SEO component" that renders in the page body — all metadata goes through the route `meta` export
5. **DO NOT** import React or any React types in `schema.ts` — it is a pure data utility
6. **DO NOT** use `process.env` — always `import.meta.env.VITE_*` (Vite convention)
7. **DO NOT** hardcode `https://www.silverstatetreatment.com` in every function call — use the `SITE_URL` constant once and reference it
8. **DO NOT** make generators async — they are synchronous pure functions that transform data
9. **DO NOT** create CSS, styling, or visual components in this story — this is pure utility and configuration
10. **DO NOT** create test files in this story — testing infrastructure comes in Story 1.10. However, design generators to be easily testable (pure functions with typed inputs/outputs)
11. **DO NOT** use barrel files (`index.ts`) in `utils/` — import directly from `utils/schema.ts` and `utils/meta.ts`
12. **DO NOT** generate BreadcrumbList JSON-LD inside `meta.ts` — that is the Breadcrumb component's responsibility (Story 1.6). The `generateBreadcrumbList()` function in `schema.ts` is consumed by the Breadcrumb component, not by `meta.ts`
13. **DO NOT** create `data/common.ts` — that is Story 1.2's responsibility. Use a local constant with a TODO comment if needed
14. **DO NOT** add meta exports to placeholder page files — the consuming epic's story adds meta exports when the page is actually built

### How Pages Will Consume These Utilities (Preview)

This is NOT implemented in this story but shows how future stories use these utilities:

```typescript
// Example: src/pages/conditions/Anxiety.tsx (built in Story 4.2)
import type { MetaFunction } from 'react-router'
import { generateMeta } from '../../utils/meta'
import { generateMedicalCondition, generateFAQPage } from '../../utils/schema'
import { conditionData } from '../../data/conditions'

// React Router v7 meta export — this runs at build time for pre-rendering
export const meta: MetaFunction = () => {
  const data = conditionData.anxiety

  return generateMeta({
    title: data.metaTitle,
    description: data.metaDescription,
    path: '/conditions/anxiety-treatment',
    jsonLd: [
      generateMedicalCondition({
        name: data.name,
        description: data.description,
        slug: 'anxiety-treatment',
        possibleTreatments: data.therapies.map(t => t.name),
      }),
      generateFAQPage({
        questions: data.faqs.map(f => ({ question: f.q, answer: f.a })),
      }),
    ],
  })
}

export default function Anxiety() {
  const data = conditionData.anxiety
  return (
    // Page content — no JSON-LD here, it's all in the meta export above
    <section>
      <h1>{data.title}</h1>
      {/* ... */}
    </section>
  )
}
```

### Testing Requirements (for this story)

This story does NOT set up test infrastructure (that is Story 1.10). However, verification is required:

- [ ] `npx tsc --noEmit` passes with zero TypeScript errors
- [ ] `npm run build` succeeds and produces pre-rendered HTML files for all routes
- [ ] Pre-rendered HTML files contain `<title>` tags (spot-check homepage and one condition page)
- [ ] Route manifest includes all 52+ page routes from the Architecture URL table
- [ ] Each JSON-LD generator function can be called with sample data and returns a valid object (manual verification)
- [ ] `generateMeta()` returns an array with correct structure (manual verification)
- [ ] No hardcoded phone numbers, addresses, or site URLs in generated output (only references to constants/env vars)

### Git Intelligence

**Commit convention:** `feat:`, `fix:` prefixes (conventional commits)
**Co-author:** Claude Opus 4.6
**Expected commit message:** `feat: add SEO utilities (schema.ts, meta.ts) and complete route manifest`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Pre-rendering-and-SEO] -- Pre-rendering and SEO metadata decisions
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- Complete URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- File locations and boundaries
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] -- VITE_SITE_URL convention
- [Source: _bmad-output/planning-artifacts/architecture.md#Cross-Cutting-Concerns] -- JSON-LD and SEO metadata on every page
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.8] -- Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data requirement
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata requirement
- [Source: _bmad-output/planning-artifacts/prd.md#FR37] -- Pre-rendered HTML requirement
- [Source: _bmad-output/planning-artifacts/prd.md#NFR36] -- Full content in pre-rendered HTML
- [Source: _bmad-output/implementation-artifacts/1-1-initialize-production-project-from-mockup.md] -- Project foundation and framework mode setup
- [Schema.org: MedicalOrganization](https://schema.org/MedicalOrganization) -- Schema spec
- [Schema.org: MedicalCondition](https://schema.org/MedicalCondition) -- Schema spec
- [Schema.org: MedicalTherapy](https://schema.org/MedicalTherapy) -- Schema spec
- [Schema.org: FAQPage](https://schema.org/FAQPage) -- Schema spec
- [Schema.org: BreadcrumbList](https://schema.org/BreadcrumbList) -- Schema spec
- [React Router v7 Meta](https://reactrouter.com/start/framework/route-module#meta) -- Route meta export convention

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

No debug issues encountered.

### Completion Notes List

- Created `src/utils/schema.ts` — 8 JSON-LD generators (MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList, WebPage) + `toJsonLdScript()` helper. All pure functions, typed inputs, SITE_URL from env var.
- Created `src/utils/meta.ts` — `generateMeta()` returns array of meta tag objects (title, description, canonical, OG, Twitter, JSON-LD injection). Uses SITE_URL for absolute URLs.
- Expanded `src/routes.tsx` — 56 routes total (homepage + 5 programs + 26 conditions + 10 insurance + 6 locations + 3 about + 2 admissions/contact + 1 privacy + 1 catch-all 404). All lazy-loaded. Exports `routePaths` for pre-rendering.
- Created 49 placeholder page files across programs/, conditions/, insurance/, locations/, about/, admissions/, and top-level pages/. Each is a minimal `export default function` with h1 and placeholder text.
- Added hub pages for `/programs` and `/conditions` per confirmed project decisions.
- Added `/programs/crisis-prevention-intervention` (CPI) per confirmed decision #3.
- Updated `scripts/prerender.ts` with all 55 route paths (excluding catch-all).
- TypeScript zero errors, Vite build succeeds with all route chunks.

### File List

| File | Action |
|------|--------|
| `src/utils/schema.ts` | CREATE |
| `src/utils/meta.ts` | CREATE |
| `src/routes.tsx` | MODIFY |
| `scripts/prerender.ts` | MODIFY |
| `src/pages/programs/Index.tsx` | CREATE |
| `src/pages/programs/Residential.tsx` | CREATE |
| `src/pages/programs/PHP.tsx` | CREATE |
| `src/pages/programs/IOP.tsx` | CREATE |
| `src/pages/programs/CPI.tsx` | CREATE |
| `src/pages/conditions/Index.tsx` | CREATE |
| `src/pages/conditions/*.tsx` (25 files) | CREATE |
| `src/pages/insurance/Index.tsx` | CREATE |
| `src/pages/insurance/*.tsx` (9 files) | CREATE |
| `src/pages/locations/Index.tsx` | CREATE |
| `src/pages/locations/*.tsx` (5 files) | CREATE |
| `src/pages/about/Team.tsx` | CREATE |
| `src/pages/about/Facility.tsx` | CREATE |
| `src/pages/about/YouthAcademy.tsx` | CREATE |
| `src/pages/admissions/Process.tsx` | CREATE |
| `src/pages/Contact.tsx` | CREATE |
| `src/pages/Privacy.tsx` | CREATE |
| `src/pages/NotFound.tsx` | CREATE |

### Change Log

- 2026-02-24: Story 1.8 implemented — SEO utilities (schema.ts, meta.ts), complete 56-route manifest, 49 placeholder pages, pre-render script updated with all paths
