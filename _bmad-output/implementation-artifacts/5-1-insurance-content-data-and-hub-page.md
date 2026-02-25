# Story 5.1: Insurance Content Data & Hub Page

Status: review

## Story

As a **parent checking if their insurance is accepted**,
I want a hub page listing all insurance providers Silver State accepts,
So that I immediately know whether my insurance covers treatment here.

**Dependencies:** Story 1.2 (`InsurancePageData` interface in `types.ts`, placeholder `data/insurance.ts`), Story 1.7 (PageLayout), Story 1.8 (SEO utilities -- `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5, FR6, FR7, FR8, FR17, FR35, FR36, FR40, FR44, FR45

## Acceptance Criteria

1. **Given** the data architecture from Epic 1, **When** the insurance hub is built, **Then** `src/data/insurance.ts` exports typed `InsurancePageData` data for all 9 providers: Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem -- each including: provider name, slug, typical coverage description, pre-authorization info, FAQ entries (FR8)
2. **And** the Insurance hub page at `/insurance` lists all accepted providers with links to individual pages (FR7)
3. **And** the hub includes a phone CTA with urgency messaging: "Want answers now? Call (725) 525-9897" (FR17)
4. **And** the hub page has unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)
5. **And** the page is fully responsive and accessible

## Tasks / Subtasks

- [x] **Task 1: Replace the placeholder `src/data/insurance.ts` with full insurance data** (AC: #1)
  - [x] 1.1: Remove the placeholder content from `data/insurance.ts` created by Story 1.2
  - [x] 1.2: Import `InsurancePageData`, `InsuranceEntry` types from `../types` (FaqEntry not imported directly — used within InsurancePageData interface in types.ts, importing it caused TS6196 unused import error)
  - [x] 1.3: Preserve the legacy `insurance` export typed as `InsuranceEntry[]` — derived from `insuranceProviders` using Option A (preferred)
  - [x] 1.4: Export `insuranceProviders` constant typed as `InsurancePageData[]` containing all 9 provider objects
  - [x] 1.5: Export a `getInsuranceBySlug` helper function: `export function getInsuranceBySlug(slug: string): InsurancePageData | undefined`

- [x] **Task 2: Create insurance data for all 9 providers** (AC: #1)
  - [x] 2.1: **Aetna** -- slug: `aetna`, name: `Aetna`
  - [x] 2.2: **Cigna** -- slug: `cigna`, name: `Cigna`
  - [x] 2.3: **BCBS** -- slug: `bcbs`, name: `Blue Cross Blue Shield`
  - [x] 2.4: **Ambetter** -- slug: `ambetter`, name: `Ambetter`
  - [x] 2.5: **Humana** -- slug: `humana`, name: `Humana`
  - [x] 2.6: **UHC** -- slug: `uhc`, name: `United Healthcare`
  - [x] 2.7: **TRICARE** -- slug: `tricare`, name: `TRICARE`
  - [x] 2.8: **Medicaid** -- slug: `medicaid`, name: `Medicaid`
  - [x] 2.9: **Anthem** -- slug: `anthem`, name: `Anthem`

- [x] **Task 3: Populate each provider entry with required fields** (AC: #1)
  - [x] 3.1: `slug` -- URL-safe slug used for the route path `/insurance/{slug}`
  - [x] 3.2: `name` -- Display name of the insurance provider
  - [x] 3.3: `logo` -- All set to `null` initially — logos can be added later when image assets are prepared
  - [x] 3.4: `coverageDescription` -- 3 paragraphs per provider in plain language, mentioning Mental Health Parity Act, provider-specific details (e.g., Evernorth for Cigna, Optum for UHC, EPSDT for Medicaid, military processes for TRICARE), "typically covers" language throughout
  - [x] 3.5: `preAuthorization` -- 1-2 paragraphs per provider with Silver State handling verification, provider-specific notes
  - [x] 3.6: `faqs` -- 3-5 FaqEntry objects per provider matching real parent search intent
  - [x] 3.7: `metaDescription` -- 150-160 characters per provider with provider name, "adolescent treatment," "coverage," and "Silver State" or "Las Vegas"

- [x] **Task 4: Create the Insurance hub page** (AC: #2, #3, #4, #5)
  - [x] 4.1: Create `src/pages/insurance/Index.tsx`. Export as `export default function InsuranceHub()`
  - [x] 4.2: Import `insuranceProviders` from `../../data/insurance`
  - [x] 4.3: Import `site` from `../../data/common` for phone number references
  - [x] 4.4: Import `Link` from React Router for internal navigation

- [x] **Task 5: Implement Insurance hub page sections** (AC: #2, #3, #5)
  - [x] 5.1: **Hero Section** -- `<h1>` heading: "Insurance Coverage for Adolescent Treatment". Introductory paragraph explaining that Silver State accepts most major insurance plans and that families can call to verify coverage in under 10 minutes
  - [x] 5.2: **Insurance Provider Grid** -- Render all 9 providers in a responsive grid. Each provider card displays: provider name (h3), logo if available with alt text, brief excerpt from coverageDescription, Link to individual provider page
  - [x] 5.3: **Phone CTA Section** -- Prominently positioned section with `background: var(--blue)`, `color: var(--white)`. "Want Answers Now?" heading, urgency messaging, phone link using `site.phoneTel` with aria-label, `.btn` styled as large button
  - [x] 5.4: **Additional Info Section** -- "What If My Insurance Isn't Listed?" section addressing concerns, explaining Silver State works with additional providers, note about payment options
  - [x] 5.5: **Internal Links** -- Links to `/admissions` ("Start the Admissions Process"), `/programs/residential-treatment` ("View Programs"), `/conditions` ("View Conditions"), plus phone CTA for cross-navigation

- [x] **Task 6: Implement hub page SEO and JSON-LD** (AC: #4)
  - [x] 6.1: Exported `meta` const using `generateMeta` with specified title, description, and path
  - [x] 6.2: Generated JSON-LD with `MedicalOrganization` schema + `insuranceAccepted` property + `FAQPage` schema for combined provider FAQs. Injected via `<script type="application/ld+json" dangerouslySetInnerHTML>`

- [x] **Task 7: Responsive styling for the hub page** (AC: #5)
  - [x] 7.1: Use inline styles + CSS tokens. All colors reference CSS custom properties (`var(--blue)`, `var(--white)`, `var(--body)`, `var(--radius-lg)`, `var(--border)`)
  - [x] 7.2: Layout uses `.wrap` container for max-width centering
  - [x] 7.3: Provider grid: 3-column on desktop (>= 900px), single-column on mobile (< 900px) via `useIsMobile()` hook
  - [x] 7.4: Phone CTA button: `minHeight: 48`, `padding: '16px 32px'` — exceeds 44x44px touch target
  - [x] 7.5: Provider card links: `minHeight: 44`, `padding: '8px 0'` — meets 44x44px touch target
  - [x] 7.6: Grid gap: 20px between cards, adequate spacing prevents mis-taps
  - [x] 7.7: Heading hierarchy: `<h1>` page title, `<h2>` section headings, `<h3>` provider card names — no levels skipped
  - [x] 7.8: Semantic HTML: `<section>` elements with appropriate headings, grid of `.bento-card` divs for providers

- [x] **Task 8: Accessibility** (AC: #5)
  - [x] 8.1: All provider links are `<Link>` elements — keyboard accessible natively
  - [x] 8.2: Phone CTA has `aria-label` with full context: "Call Silver State at {site.phone} to verify insurance"
  - [x] 8.3: Provider logos (when added) have descriptive `alt={provider.name + ' logo'}` text
  - [x] 8.4: Color contrast: white text on `var(--blue)` background meets WCAG AA; body text uses `var(--body)` on white
  - [x] 8.5: Focus indicators visible via global `:focus-visible` styles (project-level CSS)

- [x] **Task 9: Register route in routes.ts** (AC: #4)
  - [x] 9.1: Route already exists: `/insurance` -> `pages/insurance/Index` (created in Story 1.8)
  - [x] 9.2: Route already uses lazy loading: `const InsuranceIndex = lazy(() => import('./pages/insurance/Index'))`

- [x] **Task 10: Update data/index.ts barrel exports** (AC: #1)
  - [x] 10.1: `data/index.ts` already has `export * from './insurance'` — re-exports `insuranceProviders`, `getInsuranceBySlug`, and `insurance`
  - [x] 10.2: Legacy `insurance` array preserved (derived from `insuranceProviders`)

- [x] **Task 11: Verify compilation and rendering** (AC: all)
  - [x] 11.1: `npx tsc --noEmit` — zero TypeScript errors
  - [x] 11.2: `npm run build` — full production build passes (validates content, schema, sitemap, TypeScript, Vite build, and pre-render)
  - [x] 11.3: Responsive layout verified via `useIsMobile()` hook (3-col desktop, 1-col mobile at 900px breakpoint)
  - [x] 11.4: All 9 provider links render as `<Link to="/insurance/{slug}">` — pages are Story 5.2 (stub placeholders exist)
  - [x] 11.5: Phone CTA uses `site.phone` from data/common — renders "(725) 525-9897"
  - [x] 11.6: JSON-LD injected via `<script type="application/ld+json" dangerouslySetInnerHTML>` — MedicalOrganization + FAQPage schemas
  - [x] 11.7: All 9 providers rendered in grid (confirmed via `insuranceProviders.map()`)
  - [x] 11.8: All interactive elements are native `<Link>` and `<a>` elements — keyboard accessible

## Dev Notes

### Critical Context

This story has two deliverables: (1) the full insurance data file with 9 providers, and (2) the Insurance hub page at `/insurance`. The hub page lists all providers with links to individual pages that will be created in Story 5.2.

The `InsurancePageData` interface is defined in `src/types.ts` by Story 1.2. The exact shape is:

```typescript
export interface InsurancePageData {
  slug: string
  name: string
  logo: string | null
  coverageDescription: string
  preAuthorization: string
  faqs: FaqEntry[]
  metaDescription: string
}

export interface InsuranceEntry {
  name: string
  logo: string | null
}

export interface FaqEntry {
  q: string
  a: string
}
```

Note: `InsuranceEntry` is the legacy mockup type (simple name + logo). `InsurancePageData` is the richer production type with full page content. Both should be exported from `insurance.ts` -- the legacy type for backward compatibility with any components that use it.

### Insurance Data Content Guidelines

**Coverage descriptions must:**
- Be written in plain, parent-friendly language -- not insurance industry jargon
- Describe what the provider typically covers for adolescent behavioral health treatment (Residential, PHP, IOP)
- Mention mental health parity laws (the Mental Health Parity and Addiction Equity Act requires most health plans to cover mental health and substance use disorder services similarly to medical/surgical benefits)
- Be specific to each provider where possible (e.g., TRICARE has military-specific processes, Medicaid varies by state -- Nevada Medicaid specifics)
- NOT make guarantees about specific coverage amounts -- always include language like "typically covers" and "coverage varies by plan"
- Direct families to call Silver State for specific verification

**Pre-authorization descriptions must:**
- Explain what pre-authorization is in simple terms
- Note that Silver State handles the verification process for families
- Include provider-specific notes where relevant (e.g., some providers require online portals, some are phone-based)
- Always end with a call to action to contact Silver State

**FAQ questions must match real parent search intent:**
- "Does {Provider} cover residential treatment for teens?"
- "How much will I pay out of pocket with {Provider}?"
- "Does {Provider} require pre-authorization for adolescent treatment?"
- "How long does insurance verification take with {Provider}?"
- "What if {Provider} denies coverage?"

### Legacy InsuranceEntry Compatibility

Story 1.2 may have created a simple `insurance` export typed as `InsuranceEntry[]` for the mockup homepage (which displays provider names/logos). This must be preserved alongside the new `insuranceProviders` export. Two options:

**Option A (preferred):** Derive the legacy array from the new data:
```typescript
export const insuranceProviders: InsurancePageData[] = [ ... ]

// Legacy export for homepage compatibility
export const insurance: InsuranceEntry[] = insuranceProviders.map(p => ({
  name: p.name,
  logo: p.logo,
}))
```

**Option B:** Keep both as separate constants if the legacy data has different values.

### Hub Page Design Considerations

The insurance hub page is a high-conversion page. Families arriving here have a specific question: "Does Silver State take my insurance?" The page design should:

1. **Answer the question immediately** -- provider names visible above the fold
2. **Make the phone CTA impossible to miss** -- the urgency messaging ("We verify in under 10 minutes") should create urgency without pressure
3. **Drive to individual provider pages** -- for families who want more detail before calling
4. **Address the "what if" scenario** -- "What if my insurance isn't listed?" with a reassuring answer

### Phone Number Handling

The phone number on this page must come from `site.phone` and `site.phoneTel` imported from `data/common`. Do NOT hardcode `(725) 525-9897` or `tel:7255259897` anywhere in the page component. The urgency messaging text can hardcode the marketing copy but the actual phone number in the `href` and display text must be data-driven.

### Architecture Compliance

- Hub page uses `export default function InsuranceHub` -- named function, not arrow
- All colors reference CSS tokens -- no hardcoded hex values
- Interactive elements: `<Link>` for internal navigation, `<a>` for phone CTA -- no `<div onClick>`
- Inline styles for component-specific styling, CSS tokens for design system values
- No CSS modules, no Tailwind, no styled-components
- No barrel file imports in components -- import directly from data files
- Data file uses named exports only, explicit type annotations
- All interfaces imported from `../types` -- not defined in data files
- Cross-references use slug strings
- Data file is pure TypeScript -- no React imports, no side effects
- Page rendered inside PageLayout via route config -- do NOT render Nav, Footer, TrustBadges, or CtaBand
- 900px mobile breakpoint via `useIsMobile()` if needed

### Dependencies

- **Requires:** Story 1.1 (project), Story 1.2 (types + placeholder insurance.ts), Story 1.7 (PageLayout), Story 1.8 (SEO utils)
- **Produces for:** Story 5.2 (individual insurance provider pages consume `insuranceProviders` data and `getInsuranceBySlug` function)
- **Also consumed by:** Nav insurance link, Footer insurance link, condition page cross-links to insurance

### Anti-Patterns to AVOID

1. **DO NOT** define interfaces in the data file -- import all types from `../types`
2. **DO NOT** use default exports on data files -- only named exports
3. **DO NOT** hardcode phone numbers in the hub page or in FAQ answers -- use `site.phone` / `site.phoneTel`
4. **DO NOT** make specific coverage guarantees in the data -- always use "typically covers" language
5. **DO NOT** include HIPAA-protected information in the data file -- this is general informational content
6. **DO NOT** remove legacy `InsuranceEntry[]` export that the homepage may depend on
7. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand in the hub page -- PageLayout handles the shell
8. **DO NOT** use `<a href>` for internal links to provider pages -- use React Router `<Link to>`
9. **DO NOT** skip heading levels in the hub page
10. **DO NOT** create barrel files in `src/pages/insurance/`
11. **DO NOT** install any new npm packages
12. **DO NOT** use arrow function exports -- use named function declarations
13. **DO NOT** forget to include a phone CTA with urgency messaging (AC #3)
14. **DO NOT** use `--muted` for essential text below 18px

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- Data file rules, named exports, type annotations
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- `/insurance` and `/insurance/{slug}` URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] -- pages/insurance/ directory, data/ directory
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] -- inline styles + CSS tokens
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] -- semantic HTML, keyboard nav, touch targets
- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.1] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR7] -- Insurance hub page listing all providers
- [Source: _bmad-output/planning-artifacts/prd.md#FR8] -- Individual insurance provider pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- Phone CTA on every page with urgency messaging
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] -- Open Graph for link previews
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] -- Content in data files separate from components
- [Source: _bmad-output/planning-artifacts/prd.md#FR45] -- Consistent content schema per page type
- [Source: _bmad-output/implementation-artifacts/1-2-shared-data-types-and-common-content-data.md] -- InsurancePageData interface, placeholder insurance.ts

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- TS6196 fix: Removed unused `FaqEntry` import from `data/insurance.ts` (type is used within `InsurancePageData` interface in types.ts, no direct usage needed)
- TS2532 fix: Added optional chaining on `coverageDescription.split('\n')[0]?.slice()` for strict null check
- Build script fix: Updated `scripts/validate-content.ts` to use `insuranceProviders` instead of removed `insurancePages` export, added validation for `preAuthorization` and `metaDescription` fields and FAQ content

### Completion Notes List

- Replaced placeholder `src/data/insurance.ts` with full production data for all 9 insurance providers (Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem)
- Each provider has unique, parent-friendly coverage descriptions mentioning Mental Health Parity Act and provider-specific details (Evernorth for Cigna, Optum for UHC, EPSDT for Medicaid, military processes for TRICARE, ACA compliance for Ambetter, regional variations for BCBS)
- Legacy `insurance: InsuranceEntry[]` export preserved via Option A (derived from `insuranceProviders`) for backward compatibility
- Added `getInsuranceBySlug()` helper function for Story 5.2 consumption
- Built full Insurance hub page at `/insurance` with: hero section, phone CTA with urgency messaging, 3-column responsive provider grid, "What if my insurance isn't listed?" section, hub-level FAQ accordion, cross-navigation links
- SEO: `meta` export via `generateMeta`, `MedicalOrganization` JSON-LD with `insuranceAccepted`, `FAQPage` JSON-LD for all provider FAQs
- No hardcoded phone numbers — all phone references use `site.phone`/`site.phoneTel` from data/common
- Route already registered (Story 1.8); barrel re-export already configured (Story 1.2)
- Full production build passes: content validation, schema validation, sitemap generation, TypeScript, Vite build, pre-render (54 routes + 404)

### File List

- `src/data/insurance.ts` — Replaced placeholder with full 9-provider insurance data, `insuranceProviders` export, legacy `insurance` export, `getInsuranceBySlug` helper
- `src/pages/insurance/Index.tsx` — Replaced placeholder stub with full InsuranceHub page component (hero, phone CTA, provider grid, FAQ, cross-nav)
- `scripts/validate-content.ts` — Updated import from `insurancePages` to `insuranceProviders`, added validation for new fields (preAuthorization, metaDescription, FAQ content)

### Change Log

- 2026-02-24: Story 5.1 implemented — full insurance data file (9 providers) and Insurance hub page at `/insurance` with SEO, JSON-LD, responsive grid, phone CTA, FAQ accordion, and cross-navigation
