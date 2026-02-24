# Story 5.2: Individual Insurance Provider Pages

Status: ready-for-dev

## Story

As a **parent with Cigna (or any accepted insurer)**,
I want a dedicated page explaining what my insurance typically covers for adolescent treatment,
So that I understand my financial situation before I call.

**Dependencies:** Story 5.1 (insurance content data with all 9 providers + hub page), Story 1.7 (PageLayout), Story 1.8 (SEO utilities)

**FRs covered:** FR5, FR6, FR8, FR17, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** insurance data from Story 5.1, **When** a user navigates to any insurance provider page (e.g., `/insurance/cigna`), **Then** the page explains what that provider typically covers for adolescent residential, PHP, and IOP treatment (FR8)
2. **And** coverage details include deductibles, copays, pre-authorization process -- in plain language, not legalese
3. **And** an FAQ section answers provider-specific insurance questions with FAQPage JSON-LD (FR6, FR35)
4. **And** a prominent phone CTA says "We verify insurance in under 10 minutes" (FR17)
5. **And** internal links connect to programs, admissions, and the insurance hub (FR5)
6. **And** all 9 provider pages have unique SEO metadata and OG tags (FR36, FR40)
7. **And** the template is reusable -- all 9 pages use the same component with different data

## Tasks / Subtasks

- [ ] **Task 1: Create the reusable InsurancePage template component** (AC: #1, #2, #3, #4, #5, #7)
  - [ ] 1.1: Create `src/pages/insurance/InsurancePage.tsx` as a shared template component. This is NOT a route page -- it is a presentational component that receives `InsurancePageData` as a prop and renders the full insurance provider page layout. Export as `export default function InsurancePage({ provider }: InsurancePageProps)`
  - [ ] 1.2: Define `InsurancePageProps` interface: `{ provider: InsurancePageData }`
  - [ ] 1.3: Import `InsurancePageData`, `FaqEntry` types from `../../types`
  - [ ] 1.4: Import `site` from `../../data/common` for phone CTA references
  - [ ] 1.5: Import `Link` from React Router for internal navigation
  - [ ] 1.6: Import relevant icon components from `../../components/Icons` (e.g., `IconPhone`)

- [ ] **Task 2: Implement the insurance page sections** (AC: #1, #2, #4)
  - [ ] 2.1: **Hero/Header Section** -- Display provider name as the `<h1>`: "{provider.name} Coverage for Adolescent Treatment". Show provider logo if available (with `alt={provider.name + ' logo'}`). Include a brief introductory line: "Silver State accepts {provider.name} for residential, PHP, and IOP treatment for teens ages 11-17"
  - [ ] 2.2: **Coverage Description Section** -- Render `provider.coverageDescription` under an `<h2>` heading like "What {provider.name} Typically Covers". Display the content in paragraphs. This section explains typical coverage for adolescent residential treatment, PHP, and IOP
  - [ ] 2.3: **Pre-Authorization Section** -- Render `provider.preAuthorization` under an `<h2>` heading like "Pre-Authorization Process for {provider.name}". Explain the typical pre-auth process and emphasize that Silver State handles verification for families
  - [ ] 2.4: **Phone CTA Section** -- Prominently positioned section between coverage content and FAQ. Heading: "We Verify {provider.name} Coverage in Under 10 Minutes". Large phone CTA button: `<a href={site.phoneTel} aria-label="Call Silver State at {site.phone}">{site.phone}</a>` with `.btn` class, `background: var(--blue)`, `color: var(--white)`. Supporting text: "Our admissions team will verify your {provider.name} benefits, explain your coverage, and walk you through the process -- all in one call"
  - [ ] 2.5: **Coverage Details Callout** -- A styled callout box mentioning common coverage topics: "Typical coverage areas include:" followed by a brief list: Residential Treatment, Partial Hospitalization (PHP), Intensive Outpatient (IOP), Clinical Assessments, Family Therapy. Note: "Coverage varies by plan. Call us to verify your specific benefits."

- [ ] **Task 3: Implement the FAQ section with JSON-LD** (AC: #3)
  - [ ] 3.1: Render `provider.faqs` under an `<h2>` heading "Frequently Asked Questions About {provider.name} Coverage". Use the `FaqItem` component from `../../components/FaqItem` for all FAQ rendering. The FaqItem component exists in the mockup and will be migrated in Story 1.1. Do NOT use `<details>`/`<summary>` as an alternative — FaqItem is the standard FAQ pattern across all pages
  - [ ] 3.2: Each FAQ renders with `faq.q` as the question and `faq.a` as the answer
  - [ ] 3.3: Import `generateFaqPageSchema` from `../../utils/schema` and generate FAQPage JSON-LD from `provider.faqs`. Inject into the page head via a `<script type="application/ld+json">` block

- [ ] **Task 4: Implement internal links section** (AC: #5)
  - [ ] 4.1: **Back to Insurance Hub** -- Link back to `/insurance` with text like "View All Accepted Insurance Providers"
  - [ ] 4.2: **Related Programs** -- Links to program pages: `/programs/residential-treatment` ("Learn About Residential Treatment"), `/programs/php` ("Learn About PHP"), `/programs/iop` ("Learn About IOP")
  - [ ] 4.3: **Admissions Link** -- Link to `/admissions` with text like "Start the Admissions Process"
  - [ ] 4.4: All internal links use React Router `<Link>` component -- not `<a href>`

- [ ] **Task 5: Create individual insurance provider route pages (9)** (AC: #6, #7)
  - [ ] 5.1: Create `src/pages/insurance/Aetna.tsx` -- imports `getInsuranceBySlug` from `../../data/insurance`, finds the Aetna entry, renders `<InsurancePage provider={aetnaData} />`, exports route `meta` function
  - [ ] 5.2: Create `src/pages/insurance/Cigna.tsx` -- same thin-wrapper pattern
  - [ ] 5.3: Create `src/pages/insurance/BCBS.tsx` -- same pattern
  - [ ] 5.4: Create `src/pages/insurance/Ambetter.tsx` -- same pattern
  - [ ] 5.5: Create `src/pages/insurance/Humana.tsx` -- same pattern
  - [ ] 5.6: Create `src/pages/insurance/UHC.tsx` -- same pattern
  - [ ] 5.7: Create `src/pages/insurance/TRICARE.tsx` -- same pattern
  - [ ] 5.8: Create `src/pages/insurance/Medicaid.tsx` -- same pattern
  - [ ] 5.9: Create `src/pages/insurance/Anthem.tsx` -- same pattern

- [ ] **Task 6: Follow the exact route page pattern** (AC: #6, #7)
  - [ ] 6.1: Each route page file follows this exact pattern:
    ```typescript
    import { getInsuranceBySlug } from '../../data/insurance'
    import { generateMeta } from '../../utils/meta'
    import InsurancePage from './InsurancePage'

    const provider = getInsuranceBySlug('aetna')!

    export const meta = () => generateMeta({
      title: `${provider.name} Coverage for Teen Treatment | Silver State`,
      description: provider.metaDescription,
      url: `/insurance/${provider.slug}`,
    })

    export default function Aetna() {
      return <InsurancePage provider={provider} />
    }
    ```
  - [ ] 6.2: Each file uses `export default function PageName` -- named function, not arrow
  - [ ] 6.3: Each file is thin -- ONLY data lookup, meta export, and InsurancePage render
  - [ ] 6.4: The function name matches the PascalCase file name (e.g., `BCBS` in `BCBS.tsx`, `TRICARE` in `TRICARE.tsx`)

- [ ] **Task 7: Register routes in routes.ts** (AC: #6)
  - [ ] 7.1: Add route entries for all 9 insurance provider pages in `src/routes.ts`:
    - `/insurance/aetna` -> `pages/insurance/Aetna`
    - `/insurance/cigna` -> `pages/insurance/Cigna`
    - `/insurance/bcbs` -> `pages/insurance/BCBS`
    - `/insurance/ambetter` -> `pages/insurance/Ambetter`
    - `/insurance/humana` -> `pages/insurance/Humana`
    - `/insurance/uhc` -> `pages/insurance/UHC`
    - `/insurance/tricare` -> `pages/insurance/TRICARE`
    - `/insurance/medicaid` -> `pages/insurance/Medicaid`
    - `/insurance/anthem` -> `pages/insurance/Anthem`
  - [ ] 7.2: All routes use lazy loading for code splitting

- [ ] **Task 8: Responsive styling for the template** (AC: #1)
  - [ ] 8.1: InsurancePage uses inline styles + CSS tokens. All colors reference CSS custom properties
  - [ ] 8.2: Layout uses `.wrap` container for max-width centering (1200px)
  - [ ] 8.3: At mobile (< 900px), all sections stack vertically with appropriate spacing
  - [ ] 8.4: At desktop (>= 900px), consider a sidebar layout with the phone CTA pinned on the right, or maintain single-column with wide content
  - [ ] 8.5: Phone CTA button meets 44x44px minimum touch target on mobile
  - [ ] 8.6: All touch targets (links, CTAs) meet 44x44px minimum on mobile
  - [ ] 8.7: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings -- never skip levels
  - [ ] 8.8: Provider logo (if present) responsive: max-width 200px on mobile, larger on desktop

- [ ] **Task 9: Accessibility** (AC: #1)
  - [ ] 9.1: All links keyboard accessible with visible focus indicators
  - [ ] 9.2: Phone CTA has `aria-label` with full context
  - [ ] 9.3: Provider logo (when present) has descriptive `alt` text
  - [ ] 9.4: FAQ section keyboard accessible (details/summary elements are natively keyboard operable)
  - [ ] 9.5: Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
  - [ ] 9.6: No `--muted` used for essential text below 18px

- [ ] **Task 10: Verify compilation and rendering** (AC: all)
  - [ ] 10.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 10.2: Run `npm run dev` -- all 9 insurance provider pages render correctly
  - [ ] 10.3: Verify at least one insurance page at 320px, 768px, and 1024px viewports
  - [ ] 10.4: Verify JSON-LD (FAQPage) appears in page source for each page
  - [ ] 10.5: Verify phone CTA renders with correct phone number and urgency messaging
  - [ ] 10.6: Verify internal links navigate correctly (insurance hub, programs, admissions)
  - [ ] 10.7: Verify each page has unique `<title>` and `<meta description>`
  - [ ] 10.8: Verify navigating from the insurance hub page to each provider page works correctly
  - [ ] 10.9: Verify keyboard navigation works through all page elements

## Dev Notes

### Critical Context

This story follows the same pattern as the condition page stories (4.2-4.4): a shared template component (`InsurancePage.tsx`) plus thin route page wrappers for each provider. The template receives `InsurancePageData` as a prop and renders the complete page.

The key difference from condition pages is the conversion emphasis. Insurance pages are among the highest-converting pages on the site because visitors have a specific, actionable question ("Does my insurance cover this?"). The phone CTA must be impossible to miss -- it should appear at least twice on the page (mid-page + bottom, beyond what PageLayout's CtaBand provides).

### InsurancePage.tsx Template Section Order

Recommended section order for the insurance provider page template, top to bottom:

1. **Page Hero** -- `<h1>` with provider name + logo + introductory line
2. **Coverage Description** -- What the provider typically covers
3. **Phone CTA (Primary)** -- "We verify in under 10 minutes" with large phone button
4. **Pre-Authorization Info** -- How the pre-auth process works
5. **Coverage Details Callout** -- Bullet list of typical coverage areas
6. **FAQ Section** -- Provider-specific questions with accordion
7. **Internal Links** -- Back to hub, programs, admissions
8. **Phone CTA (Secondary)** -- Repeat CTA at page bottom before PageLayout's CtaBand

### JSON-LD for Insurance Pages

Insurance provider pages use FAQPage JSON-LD only (no MedicalCondition schema). The JSON-LD is generated from `provider.faqs` using the same `generateFaqPageSchema` utility used by condition pages.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Aetna cover residential treatment for teens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aetna typically covers..."
      }
    }
  ]
}
```

### SEO Meta Pattern

Each route page exports a `meta` function. Example for Cigna:
- Title: "Cigna Coverage for Teen Treatment | Silver State Treatment Center"
- Description: from `provider.metaDescription` (150-160 chars, unique per provider)
- Canonical URL: `https://www.silverstatetreatment.com/insurance/cigna`
- OG tags: title, description, url, type

### Provider-Specific Content Notes

While all pages use the same template, the DATA for each provider should reflect real differences:

| Provider | Special Notes |
|----------|--------------|
| **TRICARE** | Military families; different authorization process; TRICARE Prime vs. Select |
| **Medicaid** | Nevada Medicaid (Silver State is in NV); coverage varies by managed care plan; may require specific referrals |
| **BCBS** | Multiple state plans; coverage depends on specific Blue plan |
| **Aetna** | Often covers residential; EAP benefits may apply |
| **Cigna** | Commonly covers behavioral health; Evernorth behavioral health network |
| **UHC** | Optum behavioral health network; tiered benefits common |
| **Humana** | Behavioral health coverage varies by plan type |
| **Ambetter** | Managed Medicaid/Marketplace plan; state-specific coverage |
| **Anthem** | Related to BCBS in some states; separate entity in others |

These distinctions should already be captured in the Story 5.1 data. If they are not, do not add them in this story -- flag it as a data quality issue.

### Architecture Compliance

- InsurancePage template uses `export default function InsurancePage` -- named function, not arrow
- All colors reference CSS tokens -- no hardcoded hex values
- Interactive elements: `<Link>` for internal navigation, `<a>` for phone CTA -- no `<div onClick>`
- Inline styles for component-specific styling, CSS tokens for design system values
- No CSS modules, no Tailwind, no styled-components
- No barrel file imports -- import directly from data and component files
- Content data imported from `data/insurance` -- no hardcoded content in the template
- Page rendered inside PageLayout via route config -- do NOT render Nav, Footer, TrustBadges, or CtaBand in the insurance page
- 900px single mobile breakpoint
- Phone number from `site.phoneTel` / `site.phone` -- never hardcoded

### Dependencies

- **Requires:** Story 5.1 (insurance data + hub page + `getInsuranceBySlug` function), Story 1.7 (PageLayout), Story 1.8 (SEO utils)
- **Produces for:** No downstream stories depend on this -- insurance provider pages are leaf content
- **Epic 5 completion:** This story completes Epic 5. The insurance hub page (Story 5.1) + 9 individual provider pages (this story) = full insurance section

### Anti-Patterns to AVOID

1. **DO NOT** create separate templates per insurance provider -- one `InsurancePage.tsx` serves all 9 providers
2. **DO NOT** hardcode insurance content in the template -- all content comes from the `provider` prop
3. **DO NOT** hardcode the phone number -- use `site.phoneTel` and `site.phone` from `data/common`
4. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand in insurance pages -- PageLayout handles the shell
5. **DO NOT** use `<a href>` for internal links -- use React Router `<Link to>` for all internal navigation
6. **DO NOT** skip heading levels -- `<h1>` then `<h2>` then `<h3>`, never jump
7. **DO NOT** create CSS module files -- use inline styles + CSS tokens
8. **DO NOT** put presentation logic in the thin route page files -- all rendering lives in InsurancePage.tsx
9. **DO NOT** create barrel files or `index.ts` in `src/pages/insurance/` (the hub page is `Index.tsx`, which is a page file, not a barrel)
10. **DO NOT** install any new npm packages
11. **DO NOT** use arrow function exports -- use named function declarations
12. **DO NOT** skip the non-null assertion (`!`) on `getInsuranceBySlug` -- the slug is known to exist
13. **DO NOT** forget the prominent phone CTA with urgency messaging ("We verify in under 10 minutes") -- this is a core business requirement, not optional
14. **DO NOT** modify the insurance data file (Story 5.1) -- if data is insufficient, flag it as a defect
15. **DO NOT** make specific coverage guarantees in the template text -- the data already uses "typically covers" language; the template should not override this with definitive claims
16. **DO NOT** use `target="_blank"` on internal links -- only on external links (there should be no external links on insurance pages)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] -- inline styles + CSS tokens
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- `/insurance/{slug}` URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] -- pages/insurance/ directory
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- data consumed by pages, not by components
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] -- semantic HTML, keyboard nav, ARIA, touch targets
- [Source: _bmad-output/planning-artifacts/epics.md#Story-5.2] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR8] -- Individual insurance provider pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections with FAQPage JSON-LD
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- Phone CTA with urgency messaging
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data (FAQPage)
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] -- Open Graph for link previews
- [Source: _bmad-output/implementation-artifacts/5-1-insurance-content-data-and-hub-page.md] -- Insurance data and hub page
- [Source: _bmad-output/implementation-artifacts/4-2-condition-page-template-and-mental-health-conditions.md] -- Pattern reference for template + thin wrapper approach

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
