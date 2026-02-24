# Story 5.1: Insurance Content Data & Hub Page

Status: ready-for-dev

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

- [ ] **Task 1: Replace the placeholder `src/data/insurance.ts` with full insurance data** (AC: #1)
  - [ ] 1.1: Remove the placeholder content from `data/insurance.ts` created by Story 1.2
  - [ ] 1.2: Import `InsurancePageData`, `InsuranceEntry`, `FaqEntry` types from `../types`
  - [ ] 1.3: Preserve the legacy `insurance` export typed as `InsuranceEntry[]` if Story 1.2 set one up (the mockup homepage may reference it). Add the new full data alongside it
  - [ ] 1.4: Export `insuranceProviders` constant typed as `InsurancePageData[]` containing all 9 provider objects
  - [ ] 1.5: Export a `getInsuranceBySlug` helper function: `export function getInsuranceBySlug(slug: string): InsurancePageData | undefined`

- [ ] **Task 2: Create insurance data for all 9 providers** (AC: #1)
  - [ ] 2.1: **Aetna** -- slug: `aetna`, name: `Aetna`
  - [ ] 2.2: **Cigna** -- slug: `cigna`, name: `Cigna`
  - [ ] 2.3: **BCBS** -- slug: `bcbs`, name: `Blue Cross Blue Shield`
  - [ ] 2.4: **Ambetter** -- slug: `ambetter`, name: `Ambetter`
  - [ ] 2.5: **Humana** -- slug: `humana`, name: `Humana`
  - [ ] 2.6: **UHC** -- slug: `uhc`, name: `United Healthcare`
  - [ ] 2.7: **TRICARE** -- slug: `tricare`, name: `TRICARE`
  - [ ] 2.8: **Medicaid** -- slug: `medicaid`, name: `Medicaid`
  - [ ] 2.9: **Anthem** -- slug: `anthem`, name: `Anthem`

- [ ] **Task 3: Populate each provider entry with required fields** (AC: #1)
  - [ ] 3.1: `slug` -- URL-safe slug used for the route path `/insurance/{slug}`
  - [ ] 3.2: `name` -- Display name of the insurance provider
  - [ ] 3.3: `logo` -- Path to provider logo image (`/assets/insurance/{slug}.webp`) or `null` if no logo available. Set all to `null` initially -- logos can be added later when image assets are prepared
  - [ ] 3.4: `coverageDescription` -- 2-3 paragraphs describing what this provider typically covers for adolescent residential, PHP, and IOP treatment. Write in plain language, not insurance jargon. Include mentions of mental health parity laws where relevant. Each provider description should be unique and specific to how that insurer typically handles adolescent behavioral health claims
  - [ ] 3.5: `preAuthorization` -- 1-2 paragraphs describing the typical pre-authorization process for this provider. Mention that Silver State handles the verification process and that families should call to start
  - [ ] 3.6: `faqs` -- Array of 3-5 `FaqEntry` objects with provider-specific Q&As. Questions should match real search intent (e.g., "Does Aetna cover residential treatment for teens?", "How much does Cigna cover for adolescent PHP?", "Do I need pre-authorization for TRICARE adolescent treatment?")
  - [ ] 3.7: `metaDescription` -- 150-160 character SEO meta description. Must include the provider name, "adolescent treatment," "coverage," and "Silver State" or "Las Vegas"

- [ ] **Task 4: Create the Insurance hub page** (AC: #2, #3, #4, #5)
  - [ ] 4.1: Create `src/pages/insurance/Index.tsx`. Export as `export default function InsuranceHub()`
  - [ ] 4.2: Import `insuranceProviders` from `../../data/insurance`
  - [ ] 4.3: Import `site` from `../../data/common` for phone number references
  - [ ] 4.4: Import `Link` from React Router for internal navigation

- [ ] **Task 5: Implement Insurance hub page sections** (AC: #2, #3, #5)
  - [ ] 5.1: **Hero Section** -- `<h1>` heading: "Insurance Coverage for Adolescent Treatment". Introductory paragraph explaining that Silver State accepts most major insurance plans and that families can call to verify coverage in under 10 minutes
  - [ ] 5.2: **Insurance Provider Grid** -- Render all 9 providers in a responsive grid or list. Each provider card/item displays:
    - Provider name (prominently)
    - Provider logo (if available, with `alt={provider.name + ' logo'}`)
    - Brief excerpt from `coverageDescription` (first sentence or a summary)
    - `<Link to={'/insurance/' + provider.slug}>` with text like "View {provider.name} Coverage Details"
  - [ ] 5.3: **Phone CTA Section** -- Prominently positioned section with urgency messaging. Text: "Want answers now? We verify insurance in under 10 minutes." Phone link: `<a href={site.phoneTel} aria-label="Call Silver State at {site.phone}">{site.phone}</a>` styled as a large button with `.btn` class, `background: var(--blue)`, `color: var(--white)`
  - [ ] 5.4: **Additional Info Section** -- Brief section addressing common concerns: "What if my insurance isn't listed?", explaining that Silver State works with additional providers and that calling is the fastest way to confirm. Include a note about payment options beyond insurance
  - [ ] 5.5: **Internal Links** -- Links to `/admissions` ("Start the Admissions Process") and general condition/program links for cross-navigation (FR5)

- [ ] **Task 6: Implement hub page SEO and JSON-LD** (AC: #4)
  - [ ] 6.1: Export a `meta` function using `generateMeta` from `../../utils/meta`:
    - Title: "Insurance Coverage for Teen Treatment | Silver State Treatment Center"
    - Description: "Silver State accepts Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, and Anthem for adolescent residential, PHP, and IOP treatment. Call to verify coverage."
    - URL: `/insurance`
  - [ ] 6.2: Generate JSON-LD for the hub page. Use `MedicalOrganization` schema with `insuranceAccepted` property listing all provider names. Inject via `<script type="application/ld+json">`

- [ ] **Task 7: Responsive styling for the hub page** (AC: #5)
  - [ ] 7.1: Use inline styles + CSS tokens. All colors reference CSS custom properties
  - [ ] 7.2: Layout uses `.wrap` container for max-width centering (1200px)
  - [ ] 7.3: Provider grid: on desktop (>= 900px), display as a 3-column grid. On mobile (< 900px), stack vertically as single-column cards
  - [ ] 7.4: Phone CTA button meets 44x44px minimum touch target on mobile
  - [ ] 7.5: Provider cards/links meet 44x44px minimum touch target on mobile
  - [ ] 7.6: All touch targets have adequate spacing to prevent mis-taps
  - [ ] 7.7: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings, never skip levels
  - [ ] 7.8: Semantic HTML: `<section>` elements with appropriate headings, `<ul>` for provider list if not using a grid of cards

- [ ] **Task 8: Accessibility** (AC: #5)
  - [ ] 8.1: All provider links are keyboard accessible
  - [ ] 8.2: Phone CTA has `aria-label` with full context
  - [ ] 8.3: Provider logos (when added) have descriptive `alt` text
  - [ ] 8.4: Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
  - [ ] 8.5: Focus indicators visible on all interactive elements (via global `:focus-visible` styles)

- [ ] **Task 9: Register route in routes.ts** (AC: #4)
  - [ ] 9.1: Add route entry for the insurance hub page: `/insurance` -> `pages/insurance/Index`
  - [ ] 9.2: Route uses lazy loading for code splitting

- [ ] **Task 10: Update data/index.ts barrel exports** (AC: #1)
  - [ ] 10.1: Ensure `data/index.ts` re-exports the new named exports from `insurance.ts`: `insuranceProviders`, `getInsuranceBySlug`
  - [ ] 10.2: Preserve any existing re-exports (e.g., legacy `insurance` array)

- [ ] **Task 11: Verify compilation and rendering** (AC: all)
  - [ ] 11.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 11.2: Run `npm run dev` -- insurance hub page renders correctly at `/insurance`
  - [ ] 11.3: Verify hub page at 320px, 768px, and 1024px viewports
  - [ ] 11.4: Verify all 9 provider links navigate correctly to `/insurance/{slug}` (pages may not exist yet -- that is Story 5.2)
  - [ ] 11.5: Verify phone CTA renders with correct phone number from `site.phone`
  - [ ] 11.6: Verify JSON-LD appears in page source
  - [ ] 11.7: Verify all 9 providers appear in the provider grid
  - [ ] 11.8: Verify keyboard navigation works through all provider links

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

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
