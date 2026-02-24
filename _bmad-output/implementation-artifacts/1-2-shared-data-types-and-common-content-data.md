# Story 1.2: Shared Data Types & Common Content Data

Status: review

## Story

As a **developer**,
I want all shared TypeScript interfaces defined in `types.ts` and common site data in `data/common.ts`,
So that all future pages and components have type-safe, consistent data structures to build on.

## Acceptance Criteria

1. **Given** the production project from Story 1.1, **When** data types and common data are created, **Then** `src/types.ts` exports interfaces for all content areas: `BaseComponentProps`, `FaqEntry`, `ProgramData`, `ConditionData`, `InsuranceEntry`, `LocationData`, `TeamMember`, `AdmissionsStep`, `TherapyModality`, and page-type content schemas
2. **And** clinical content types include `reviewedBy?: string` and `reviewDate?: string` fields
3. **And** `src/data/common.ts` exports typed site info (`site.phone`, `site.phoneTel`, `site.name`, `site.address`), nav links, footer content, and accreditation data
4. **And** `src/data/index.ts` barrel re-exports from all data files
5. **And** all exports have explicit type annotations
6. **And** `npx tsc --noEmit` passes with zero errors

**FRs covered:** FR44, FR45

## Tasks / Subtasks

- [x] **Task 1: Extend `src/types.ts` with all content area interfaces** (AC: #1, #2, #5)
  - [x]1.1: Preserve all existing interfaces unchanged (see Dev Notes for full list)
  - [x]1.2: Rename `AdmissionStep` to `AdmissionsStep` (alias the old name for backward compatibility)
  - [x]1.3: Add `NavLinkItem` interface (named `NavLinkItem`, not `NavLink`, to avoid collision with React Router's `NavLink` component)
  - [x]1.4: Add `FooterLinkGroup` interface
  - [x]1.5: Add `SiteInfo` interface
  - [x]1.6: Add `ConditionData` interface with clinical review fields
  - [x]1.7: Add `LocationData` interface
  - [x]1.8: Add `TeamMember` interface
  - [x]1.9: Add `TherapyModality` interface
  - [x]1.10: Add page-type content schemas: `ProgramPageData`, `ConditionPageData`, `InsurancePageData`, `LocationPageData`
  - [x]1.11: Add `SourceCitation` interface
  - [x]1.12: Verify every interface is a named export with explicit type keyword

- [x] **Task 2: Create `src/data/common.ts`** (AC: #3, #5)
  - [x]2.1: Move `site` object from `content.ts` to `common.ts` with `SiteInfo` type annotation
  - [x]2.2: Create `navLinks` array with production route paths (not `#hash` links)
  - [x]2.3: Create `footerLinks` object with production route paths (not `#` placeholders)
  - [x]2.4: Move `accreditations` array from `content.ts` to `common.ts`
  - [x]2.5: Ensure all exports use explicit type annotations

- [x] **Task 3: Create placeholder data files for all content areas** (AC: #4, #5)
  - [x]3.1: Create `src/data/programs.ts` — re-export `programs` from `content.ts` with proper type, add empty placeholder for full `ProgramPageData` (populated in Story 3.1)
  - [x]3.2: Create `src/data/conditions.ts` — re-export `conditions` from `content.ts` with proper type (populated in Story 4.1)
  - [x]3.3: Create `src/data/insurance.ts` — re-export `insurance` from `content.ts` with proper type (populated in Story 5.1)
  - [x]3.4: Create `src/data/about.ts` — re-export `team`, `leadership`, `facility`, `youthAcademy` from `content.ts` (populated in Story 6.1)
  - [x]3.5: Create `src/data/admissions.ts` — re-export `admissionsProcess`, `faqs` from `content.ts` (populated in Story 8.1)
  - [x]3.6: Create `src/data/therapies.ts` — re-export `therapies` from `content.ts` with proper type (populated in Story 3.1)
  - [x]3.7: Create `src/data/locations.ts` — empty placeholder array typed as `LocationData[]` (populated in Story 7.1)
  - [x]3.8: Create `src/data/homepage.ts` — move `hero`, `stats`, `whoThisIsFor`, `testimonial`, `dailySchedule`, `whyChoose` from `content.ts` (consumed in Story 2.1)

- [x] **Task 4: Create `src/data/index.ts` barrel file** (AC: #4, #5)
  - [x]4.1: Re-export all named exports from `common.ts`
  - [x]4.2: Re-export all named exports from `programs.ts`
  - [x]4.3: Re-export all named exports from `conditions.ts`
  - [x]4.4: Re-export all named exports from `insurance.ts`
  - [x]4.5: Re-export all named exports from `about.ts`
  - [x]4.6: Re-export all named exports from `admissions.ts`
  - [x]4.7: Re-export all named exports from `therapies.ts`
  - [x]4.8: Re-export all named exports from `locations.ts`
  - [x]4.9: Re-export all named exports from `homepage.ts`

- [x] **Task 5: Update existing imports to use new data locations** (AC: #6)
  - [x]5.1: Update `src/pages/Home.tsx` (or wherever WarmImmersive was renamed) to import from `data/common` and `data/homepage` instead of `data/content`
  - [x]5.2: Update `src/components/Nav.tsx` to import `navLinks` and `site` from `data/common` (removing hardcoded navLinks and phone number)
  - [x]5.3: Update `src/components/Footer.tsx` to import `footerLinks` and `site` from `data/common` (removing hardcoded footerLinks, phone, email, address)
  - [x]5.4: Update any other component that imports from `data/content` to import from the specific data file
  - [x]5.5: Verify no remaining imports from `data/content` exist (the file can remain for reference but should not be imported)

- [x] **Task 6: Verify TypeScript compilation** (AC: #6)
  - [x]6.1: Run `npx tsc --noEmit` — zero errors
  - [x]6.2: Run `npm run dev` — dev server starts, homepage renders correctly
  - [x]6.3: Verify Nav shows correct nav links and phone number from `common.ts`
  - [x]6.4: Verify Footer shows correct links and contact info from `common.ts`

## Dev Notes

### What Exists in `src/types.ts` (PRESERVE ALL — DO NOT RENAME OR REMOVE)

The mockup `types.ts` contains these interfaces. All must remain exactly as-is because existing components depend on them:

```typescript
// Shared base props — used by many components
export interface BaseComponentProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

// Animation system — used by AnimateIn, GSAP components
export type AnimationVariant =
  | 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight'
  | 'scaleUp' | 'slideUp' | 'rotateIn' | 'blurUp'
  | 'springUp' | 'springDown' | 'clipUp'

export interface AnimationPreset {
  from: gsap.TweenVars
  to: gsap.TweenVars
  ease?: string
  duration?: number
}

// Data types — used by components and data files
export interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

export interface FaqEntry {
  q: string
  a: string
}

export interface AdmissionStep {
  step: number
  title: string
  desc: string
}

export interface LeadershipEntry {
  name: string
  title: string
  bio: string
}

export interface InsuranceEntry {
  name: string
  logo: string | null
}

export interface AccreditationEntry {
  name: string
  logo: string | null
}

export interface ProgramData {
  label: string
  title: string
  body: string
  features: string[]
  stat?: string
}

export interface YouthAcademyFeature {
  title: string
  desc: string
}

export interface DailyScheduleEntry {
  time: string
  activity: string
  desc: string
}

export interface WhyChooseEntry {
  title: string
  body: string
}

export interface ProfileEntry {
  label: string
  desc: string
}
```

### Backward Compatibility: `AdmissionStep` vs `AdmissionsStep`

The AC says `AdmissionsStep` (with an 's'). The existing type is `AdmissionStep` (no 's'). The existing type is used by `content.ts` and potentially by the Home page.

**Strategy:** Keep `AdmissionStep` as-is. Add a type alias:
```typescript
/** @alias Preferred name per architecture spec */
export type AdmissionsStep = AdmissionStep
```

This allows future code to use the preferred name `AdmissionsStep` while existing code using `AdmissionStep` continues to compile. Do NOT rename the original — that risks breaking imports in components copied from the mockup.

### NEW Interfaces to Add to `src/types.ts`

Each interface below must be added as a named export. Field definitions are derived from the Architecture doc, the PRD, and the epics that will consume them.

#### `NavLinkItem`

Used by Nav component and `common.ts`. The mockup already has this locally in `Nav.tsx` — promote it to the shared types file. Named `NavLinkItem` (not `NavLink`) to avoid collision with React Router's `NavLink` component.

```typescript
export interface NavLinkItem {
  label: string
  href: string
}
```

#### `FooterLinkGroup`

Used by Footer component and `common.ts`.

```typescript
export interface FooterLinkGroup {
  heading: string
  links: NavLinkItem[]
}
```

#### `SiteInfo`

Typed shape for the `site` export in `common.ts`. Captures all shared site-wide constants.

```typescript
export interface SiteInfo {
  name: string
  tagline: string
  phone: string
  phoneTel: string
  email: string
  address: string
  ages: string
  rating: number
  reviewCount: number
}
```

#### `SourceCitation`

Used by clinical content types. Per Epic 4 ACs: "source citations reference trusted authorities: CDC, SAMHSA, NIDA, peer-reviewed journals."

```typescript
export interface SourceCitation {
  label: string
  url: string
}
```

#### `ConditionData`

This is a NEW interface (does not exist in mockup). It defines the schema for individual condition pages (Anxiety, Depression, etc.). Per Epic 4 Story 4.1 ACs: each condition includes description, symptoms, evidence-based therapies, how Silver State treats it, FAQ entries, related programs, `reviewedBy`, `reviewDate`, and source citations.

```typescript
export interface ConditionData {
  /** URL slug: 'anxiety', 'depression', 'trauma-ptsd' */
  slug: string
  /** Display name: 'Anxiety', 'Depression', 'Trauma & PTSD' */
  name: string
  /** Page headline */
  headline: string
  /** Category for grouping: 'mental-health', 'substance-abuse', 'eating-disorders' */
  category: 'mental-health' | 'substance-abuse' | 'eating-disorders'
  /** Condition overview paragraph(s) */
  description: string
  /** How this condition manifests in adolescents */
  symptoms: string[]
  /** Evidence-based therapies used at Silver State for this condition */
  therapies: string[]
  /** How Silver State specifically treats this condition */
  approach: string
  /** Condition-specific FAQ entries */
  faqs: FaqEntry[]
  /** Slug references to related programs: ['residential', 'php', 'iop'] */
  relatedPrograms: string[]
  /** Slug references to related conditions */
  relatedConditions: string[]
  /** SEO meta title — added for SEO meta generation consistency with ProgramPageData */
  metaTitle: string
  /** SEO meta description */
  metaDescription: string
  /** Clinical review fields (FR46) */
  reviewedBy?: string
  reviewDate?: string
  /** Source citations for clinical claims (FR16) */
  sources: SourceCitation[]
}
```

#### `LocationData`

For service area pages. Per Epic 7 Story 7.1 ACs: city name, slug, description, distance/directions from Silver State, local context, related programs.

```typescript
export interface LocationData {
  /** URL slug: 'las-vegas', 'henderson', 'north-las-vegas' */
  slug: string
  /** Display name: 'Las Vegas', 'Henderson' */
  city: string
  /** Page headline */
  headline: string
  /** City/area description with local context */
  description: string
  /** Distance and directions from Silver State facility */
  distance: string
  /** Local context paragraph: community info, relevant demographics */
  localContext: string
  /** Slug references to related programs */
  relatedPrograms: string[]
  /** SEO meta description */
  metaDescription: string
}
```

#### `TeamMember`

For the team page. Per Epic 6 Story 6.1 ACs: name, photo URL, title, credentials, license numbers, specializations, and professional background.

Note: This is distinct from the existing `LeadershipEntry` which is a simpler type from the mockup. `LeadershipEntry` stays for backward compatibility; `TeamMember` is the richer production type.

```typescript
export interface TeamMember {
  /** Staff member's full name */
  name: string
  /** Professional title: 'Executive Director', 'Clinical Director' */
  title: string
  /** Photo URL (Cloudflare R2 in production, /assets/ in dev) */
  photo?: string
  /** Professional credentials: 'PhD', 'LMFT', 'RN' */
  credentials?: string
  /** License numbers for verification (FR13) */
  licenseNumbers?: string[]
  /** Areas of specialization */
  specializations?: string[]
  /** Professional background / bio paragraph */
  bio: string
}
```

#### `TherapyModality`

For the therapies data file. Per Epic 3 Story 3.1 ACs: typed TherapyModality for all evidence-based therapies.

Note: The existing `therapies` in content.ts is a simple `string[]`. The production type is richer.

```typescript
export interface TherapyModality {
  /** URL-safe slug: 'cbt', 'dbt', 'emdr' */
  slug: string
  /** Display name: 'Cognitive Behavioral Therapy (CBT)' */
  name: string
  /** Short name for lists: 'CBT', 'DBT' */
  abbreviation?: string
  /** Description of the therapy modality */
  description: string
  /** How Silver State applies this therapy with adolescents */
  approach?: string
  /** Which conditions this therapy is commonly used for (slug references) */
  relatedConditions?: string[]
  /** Which programs offer this therapy (slug references) */
  relatedPrograms?: string[]
}
```

#### Page-Type Content Schemas

These wrap the detail-level interfaces into full-page data shapes that page templates consume. They ensure FR45 compliance: every page of a given type follows the same structure.

**`ProgramPageData`** — extends the existing `ProgramData` for full page rendering (Epic 3):

```typescript
export interface ProgramPageData {
  /** URL slug: 'residential-treatment', 'php', 'iop' */
  slug: string
  /** Basic program info (compatible with existing ProgramData) */
  label: string
  title: string
  body: string
  features: string[]
  stat?: string
  /** Additional page-level fields */
  approach: string
  duration: string
  targetAudience: string
  dailySchedule: DailyScheduleEntry[]
  therapyModalities: string[]
  faqs: FaqEntry[]
  relatedConditions: string[]
  relatedPrograms: string[]
  metaDescription: string
  reviewedBy?: string
  reviewDate?: string
}
```

**`InsurancePageData`** — for individual insurance provider pages (Epic 5):

```typescript
export interface InsurancePageData {
  /** URL slug: 'aetna', 'cigna', 'bcbs' */
  slug: string
  /** Provider display name */
  name: string
  /** Provider logo URL */
  logo: string | null
  /** Description of typical coverage for adolescent treatment */
  coverageDescription: string
  /** Pre-authorization info */
  preAuthorization: string
  /** Provider-specific FAQ entries */
  faqs: FaqEntry[]
  /** SEO meta description */
  metaDescription: string
}
```

**`ConditionPageData`** is just `ConditionData` itself (defined above). No wrapper needed since `ConditionData` already includes all page-level fields.

**`LocationPageData`** is just `LocationData` itself (defined above). No wrapper needed since `LocationData` already includes all page-level fields.

### Data File Split Strategy

The mockup has a single monolithic `src/data/content.ts` with ALL site data. This story splits it into domain-specific files per the Architecture doc.

**Mapping from `content.ts` exports to new files:**

| `content.ts` export | Target file | Notes |
|---|---|---|
| `site` | `data/common.ts` | Core site info constant |
| `hero` | `data/homepage.ts` | Homepage-specific |
| `stats` | `data/homepage.ts` | Homepage-specific |
| `programs` | `data/programs.ts` | Existing ProgramData shape, placeholder for future ProgramPageData |
| `conditions` | `data/conditions.ts` | Currently just string lists; placeholder for ConditionData[] |
| `therapies` | `data/therapies.ts` | Currently string[]; placeholder for TherapyModality[] |
| `team` | `data/about.ts` | Team roles list |
| `whyChoose` | `data/homepage.ts` | Homepage-specific |
| `insurance` | `data/insurance.ts` | Current InsuranceEntry[] |
| `accreditations` | `data/common.ts` | Shown on every page via TrustBadges |
| `faqs` | `data/admissions.ts` | General admissions FAQs |
| `testimonial` | `data/homepage.ts` | Homepage-specific |
| `facility` | `data/about.ts` | Facility amenities |
| `whoThisIsFor` | `data/homepage.ts` | Homepage-specific |
| `youthAcademy` | `data/about.ts` | Academy data |
| `dailySchedule` | `data/homepage.ts` | Used on homepage; also in ProgramPageData later |
| `admissionsProcess` | `data/admissions.ts` | Admissions steps |
| `leadership` | `data/about.ts` | Leadership bios |

### What Goes in `common.ts` vs Other Data Files

**`common.ts` contains data that appears on EVERY page** (shared site shell):
- `site` (SiteInfo) — phone, name, address, email used by Nav, Footer, CtaBand, JSON-LD
- `navLinks` (NavLinkItem[]) — main navigation links used by Nav component
- `footerLinks` (FooterLinkGroup[]) — footer navigation used by Footer component
- `accreditations` (AccreditationEntry[]) — shown in TrustBadges on every page

**Everything else goes in content-area-specific files** because it is only consumed by specific pages.

### Exact `common.ts` Content

#### `site` export:

```typescript
export const site: SiteInfo = {
  name: 'Silver State Adolescent Treatment Center',
  tagline: 'Empowering Teens to Blossom',
  phone: '(725) 525-9897',
  phoneTel: 'tel:7255259897',
  email: 'info@silverstateatc.com',
  address: '8225 W Robindale Rd, Las Vegas, NV 89113',
  ages: '11-17',
  rating: 4.8,
  reviewCount: 34,
}
```

This is identical to the existing `site` in `content.ts` but with the `SiteInfo` type annotation.

#### `navLinks` export:

The mockup Nav has hardcoded anchor links (`#programs`, `#treatment`, etc.). The production site needs route paths. Build these from the Architecture doc's route structure:

```typescript
export const navLinks: NavLinkItem[] = [
  { label: 'Programs', href: '/programs/residential-treatment' },
  { label: 'Conditions', href: '/conditions/anxiety-treatment' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'About', href: '/about/our-team' },
]
```

Note: These are initial links. They may be refined when the Nav component story (Story 1.3) adds dropdowns. For now, provide the top-level route for each section.

#### `footerLinks` export:

Replace the mockup's `#` placeholder hrefs with production routes:

```typescript
export const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'Programs',
    links: [
      { label: 'Residential Treatment', href: '/programs/residential-treatment' },
      { label: 'Partial Hospitalization', href: '/programs/php' },
      { label: 'Intensive Outpatient', href: '/programs/iop' },
      { label: 'Mental Health', href: '/conditions/anxiety-treatment' },
      { label: 'Substance Abuse', href: '/conditions/substance-abuse-treatment' },
      { label: 'Eating Disorders', href: '/conditions/anorexia-nervosa-treatment' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'Verify Insurance', href: '/insurance' },
      { label: 'Admissions Process', href: '/admissions' },
      { label: 'FAQs', href: '/admissions#faqs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Approach', href: '/about/our-team' },
      { label: 'Treatment Team', href: '/about/our-team' },
      { label: 'Facility Tour', href: '/about/facility' },
      { label: 'Accreditation', href: '/about/our-team#accreditation' },
      { label: 'Youth Academy', href: '/about/youth-academy' },
    ],
  },
]
```

#### `accreditations` export:

**ACTION REQUIRED:** Verify actual accreditation badges with client. The mockup shows 'HIPAA Compliant' -- confirm whether NAATP Member, Joint Commission, or other badges should also be included.

```typescript
export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'HIPAA Compliant', logo: null },
]
```

### Updating Nav.tsx

The mockup Nav.tsx has a local `NavLink` interface and a local `navLinks` const. After this story:

1. Remove the local `interface NavLink` from Nav.tsx (it moves to `types.ts` as `NavLinkItem`)
2. Remove the local `const navLinks` from Nav.tsx (it moves to `data/common.ts`)
3. Add imports:
   ```typescript
   import type { NavLinkItem } from '../types'
   import { navLinks, site } from '../data/common'
   ```
4. Replace the hardcoded phone number `tel:7255259897` with `site.phoneTel`
5. Replace the hardcoded phone display `(725) 525-9897` with `site.phone`

**IMPORTANT:** Do NOT change any styling, layout, or behavior in Nav.tsx. Only change data sourcing.

### Updating Footer.tsx

The mockup Footer.tsx has a local `footerLinks` const with `#` placeholder hrefs and hardcoded contact info. After this story:

1. Remove the local `const footerLinks` from Footer.tsx
2. Add imports:
   ```typescript
   import { footerLinks, site } from '../data/common'
   ```
3. Replace hardcoded address text with `site.address`
4. Replace hardcoded phone `tel:7255259897` with `site.phoneTel`
5. Replace hardcoded phone display `(725) 525-9897` with `site.phone`
6. Replace hardcoded email `info@silverstateatc.com` with `site.email`
7. Update the Footer rendering to use the new `FooterLinkGroup[]` structure. The current code accesses `footerLinks.programs`, `footerLinks.admissions`, `footerLinks.about` as named properties. The new structure is an array of `FooterLinkGroup` objects. Update the rendering to iterate over the array:
   ```tsx
   {footerLinks.map((group) => (
     <div key={group.heading}>
       <h4 ...>{group.heading}</h4>
       <ul ...>
         {group.links.map((l) => (
           <li key={l.label} ...>
             <a href={l.href} ...>{l.label}</a>
           </li>
         ))}
       </ul>
     </div>
   ))}
   ```

**IMPORTANT:** Preserve all existing styles, layout, aria attributes, and responsive behavior. Only change data sourcing and the footer links iteration pattern.

### Handling the `content.ts` Legacy File

After the split, `content.ts` should have NO remaining imports from other files. Two approaches:

**Preferred approach:** Keep `content.ts` as a reference file but remove all exports. Add a comment at the top:
```typescript
// DEPRECATED: This file has been split into individual data files.
// See data/common.ts, data/programs.ts, data/conditions.ts, etc.
// This file is retained for reference only. Do not import from it.
```

**Alternative approach:** Delete `content.ts` entirely after all imports are migrated.

Choose the preferred approach (keep as reference) to reduce risk. If any import was missed, the TypeScript compiler will catch it.

### Placeholder Data Files

Several data files will be populated by later stories (3.1, 4.1, 5.1, 6.1, 7.1, 8.1). For this story, create them with:
- The existing data from `content.ts` where available (re-exported with proper types)
- Empty typed arrays/objects where no data exists yet
- A comment indicating which story will populate the full data

Example for `data/locations.ts`:
```typescript
import type { LocationData } from '../types'

// Populated in Story 7.1
export const locations: LocationData[] = []
```

Example for `data/therapies.ts`:
```typescript
import type { TherapyModality } from '../types'

// Legacy string array from mockup (used by homepage)
export const therapyNames: string[] = [
  'Cognitive Behavioral Therapy (CBT)',
  'Dialectical Behavior Therapy (DBT)',
  // ... rest of existing therapies list
]

// Full therapy modality data — populated in Story 3.1
export const therapyModalities: TherapyModality[] = []
```

This dual-export pattern (legacy simple data + future rich data) allows the homepage to continue using the string list immediately while the full typed data is built later.

### The `data/index.ts` Barrel File

This is the ONLY barrel file allowed in the entire project (per Architecture doc). It re-exports everything from all data files:

```typescript
export * from './common'
export * from './programs'
export * from './conditions'
export * from './insurance'
export * from './about'
export * from './admissions'
export * from './therapies'
export * from './locations'
export * from './homepage'
```

**Usage:** Components can import from the specific file (`import { site } from '../data/common'`) or from the barrel (`import { site } from '../data'`). Both are valid. Prefer the specific file for clarity.

### Naming Conventions (Enforced)

Per Architecture doc:

| Rule | Convention |
|------|-----------|
| Data files | `camelCase.ts` — `common.ts`, `programs.ts`, `conditions.ts` |
| Type files | `camelCase.ts` — `types.ts` |
| Data exports | Named exports, camelCase: `export const faqs`, `export const programs` |
| Type exports | Named exports, PascalCase: `export interface FaqEntry`, `export interface ProgramData` |
| Type annotations | Explicit on ALL data exports: `export const faqs: FaqEntry[] = [...]` |
| Interfaces | Use `interface` keyword (not `type` alias) for object shapes |
| Type aliases | Use `type` keyword for unions, aliases, and non-object types |
| Content fields | Full words, not abbreviations: `description` not `desc` (existing `desc` fields grandfathered) |
| Barrel files | ONLY in `data/index.ts` — nowhere else |

### Anti-Patterns to AVOID

1. **DO NOT** rename or remove any existing interface from `types.ts` — existing components depend on them
2. **DO NOT** change `FaqEntry.q`/`FaqEntry.a` to `question`/`answer` — the short names are grandfathered
3. **DO NOT** change `AdmissionStep.desc` to `description` — grandfathered abbreviation
4. **DO NOT** change `ProgramData.body` to `description` — grandfathered
5. **DO NOT** create barrel files (`index.ts`) anywhere except `data/`
6. **DO NOT** use default exports on data files — always named exports
7. **DO NOT** put interface definitions in data files — all interfaces go in `types.ts`
8. **DO NOT** hardcode phone numbers in any component — use `site.phone` / `site.phoneTel`
9. **DO NOT** hardcode the site address or email in any component — use `site.address` / `site.email`
10. **DO NOT** import from `data/content` in any component after migration — import from specific data files
11. **DO NOT** change any component styling, layout, or behavior — only change data sourcing
12. **DO NOT** populate full content data for later stories (conditions, locations, programs detail, etc.) — create typed placeholders only
13. **DO NOT** add React imports or side effects to data files — data files are pure TypeScript constants

### Architecture Compliance Requirements

- All interfaces in `types.ts` must use `export interface` (not `export type` for object shapes)
- All data exports must have explicit type annotations
- `homepage.ts` is added as a data file -- not in the original architecture doc but needed for homepage content (Stories 2.1-2.3)
- Cross-references between content areas must use slug strings (not numeric IDs, not object references)
- Clinical content types (`ConditionData`, `ProgramPageData`) MUST include optional `reviewedBy?: string` and `reviewDate?: string` fields
- The `site.phone` and `site.phoneTel` pattern is the single source of truth for the phone number site-wide
- Image paths use `/assets/` for local dev (production Cloudflare R2 URLs handled via env var in later stories)

### Project Structure Notes

After this story, the `src/data/` directory should contain:

```
src/data/
  index.ts           # Barrel re-export (ONLY barrel in project)
  common.ts          # site info, nav links, footer links, accreditations
  programs.ts        # Existing program data + placeholder for ProgramPageData
  conditions.ts      # Existing condition string lists + placeholder for ConditionData[]
  insurance.ts       # Existing InsuranceEntry[] + placeholder for InsurancePageData[]
  about.ts           # team, leadership, facility, youthAcademy from content.ts
  admissions.ts      # admissionsProcess, faqs from content.ts
  therapies.ts       # Existing string[] + placeholder for TherapyModality[]
  locations.ts       # Empty placeholder for LocationData[]
  homepage.ts        # hero, stats, whoThisIsFor, testimonial, dailySchedule, whyChoose (Added homepage.ts — not in original architecture doc but needed for homepage content, Stories 2.1-2.3)
  content.ts         # DEPRECATED — retained as reference only, no exports consumed
```

### Complete File Change Manifest

**Files MODIFIED:**
- `src/types.ts` — Add ~10 new interfaces, add AdmissionsStep alias
- `src/components/Nav.tsx` — Replace local navLinks/NavLink with imports from data/common
- `src/components/Footer.tsx` — Replace local footerLinks with imports from data/common
- `src/pages/Home.tsx` — Update imports from data/content to data/homepage + data/common
- `src/data/content.ts` — Deprecate (add comment header, optionally remove exports)

**Files CREATED:**
- `src/data/common.ts`
- `src/data/programs.ts`
- `src/data/conditions.ts`
- `src/data/insurance.ts`
- `src/data/about.ts`
- `src/data/admissions.ts`
- `src/data/therapies.ts`
- `src/data/locations.ts`
- `src/data/homepage.ts`
- `src/data/index.ts`

### Verifying No Missed Imports

After completing all file changes, run this check to ensure no file still imports from `data/content`:

```bash
grep -r "from.*data/content" src/ --include="*.ts" --include="*.tsx"
```

The only match should be within the deprecated `data/content.ts` itself (if it has internal imports), or zero matches if content.ts has been fully deprecated.

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — Data file rules, named exports, barrel file convention, type annotations
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming-Patterns] — File naming, code naming, data type interface naming
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] — Complete directory structure, data/ file listing
- [Source: _bmad-output/planning-artifacts/architecture.md#Cross-Cutting-Concerns] — `reviewedBy`/`reviewDate` fields on clinical content types
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] — Content structured in data files separate from presentation
- [Source: _bmad-output/planning-artifacts/prd.md#FR45] — Consistent content schema per page type
- [Source: _bmad-output/planning-artifacts/prd.md#FR46] — Clinical review sign-off (drives reviewedBy/reviewDate fields)
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.2] — Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.1] — ProgramPageData and TherapyModality field requirements
- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.1] — ConditionData field requirements
- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.1] — InsurancePageData field requirements
- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.1] — TeamMember field requirements
- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.1] — LocationData field requirements
- [Source: mockups/silverstate-react/src/types.ts] — Existing type definitions (preserve all)
- [Source: mockups/silverstate-react/src/data/content.ts] — Existing monolithic data file (split target)
- [Source: mockups/silverstate-react/src/components/Nav.tsx] — Existing hardcoded navLinks and phone number
- [Source: mockups/silverstate-react/src/components/Footer.tsx] — Existing hardcoded footerLinks and contact info
- [Source: _bmad-output/implementation-artifacts/1-1-initialize-production-project-from-mockup.md] — Story 1.1 context (prerequisite)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

None.

### Completion Notes List

- Added 10 new interfaces to types.ts: NavLinkItem, FooterLinkGroup, SiteInfo, SourceCitation, ConditionData, LocationData, TeamMember, TherapyModality, ProgramPageData, InsurancePageData
- Added AdmissionsStep type alias for backward compatibility
- Split monolithic content.ts into 9 domain-specific data files + barrel index.ts
- Updated Nav.tsx: removed local NavLink interface and navLinks const, imports from data/common, uses site.phoneTel/site.phone
- Updated Footer.tsx: removed local footerLinks const, imports from data/common, iterates FooterLinkGroup[] array, uses site.address/phone/email
- Updated Home.tsx: imports split across data/common, data/homepage, data/programs, data/conditions, data/therapies, data/about, data/insurance, data/admissions
- Deprecated content.ts with reference comment
- All verifications pass: tsc --noEmit (0 errors), npm run build (succeeds)

### Change Log

- 2026-02-24: Story 1.2 implementation complete — types extended, data split, imports migrated

### File List

**Modified:** src/types.ts, src/components/Nav.tsx, src/components/Footer.tsx, src/pages/Home.tsx, src/data/content.ts (deprecated)
**Created:** src/data/common.ts, src/data/homepage.ts, src/data/programs.ts, src/data/conditions.ts, src/data/insurance.ts, src/data/about.ts, src/data/admissions.ts, src/data/therapies.ts, src/data/locations.ts, src/data/index.ts
