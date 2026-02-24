# Story 4.2: Condition Page Template & Mental Health Conditions

Status: ready-for-dev

## Story

As a **parent searching for their teen's specific diagnosis**,
I want condition pages with clinical depth -- evidence-based therapies, staff credentials, and FAQ answers,
So that I know Silver State has specialized expertise for my teen's exact situation.

**Dependencies:** Story 1.7 (PageLayout), Story 1.8 (SEO utilities -- `utils/meta.ts`, `utils/schema.ts`), Story 4.1 (condition content data with all 25 conditions populated)

**FRs covered:** FR2, FR3, FR5, FR6, FR15, FR16, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** condition data from Story 4.1, **When** a user navigates to any mental health condition page (e.g., `/conditions/anxiety-treatment`), **Then** the page displays: condition overview, how it manifests in adolescents, evidence-based therapies used at Silver State, and how the program addresses this condition specifically (FR2, FR3)
2. **And** a named credentialed clinical reviewer is displayed (FR15)
3. **And** medical claims cite trusted sources (FR16)
4. **And** an FAQ section with FAQPage JSON-LD answers condition-specific questions (FR6, FR35)
5. **And** internal links connect to relevant programs, related conditions, insurance, and admissions (FR5)
6. **And** SEO metadata and OG tags are unique per condition page (FR36, FR40)
7. **And** MedicalCondition JSON-LD structured data is generated (FR35)
8. **And** the template is reusable -- all ~12 mental health condition pages use the same component with different data

## Tasks / Subtasks

- [ ] **Task 1: Create the reusable ConditionPage template component** (AC: #1, #2, #3, #4, #5, #8)
  - [ ] 1.1: Create `src/pages/conditions/ConditionPage.tsx` as a shared template component. This is NOT a route page -- it is a presentational component that receives `ConditionData` as a prop and renders the full condition page layout. Export as `export default function ConditionPage({ condition }: ConditionPageProps)`
  - [ ] 1.2: Define `ConditionPageProps` interface: `{ condition: ConditionData }`
  - [ ] 1.3: Import `ConditionData`, `FaqEntry`, `SourceCitation` types from `../../types`
  - [ ] 1.4: Import `site` from `../../data/common` for phone CTA references
  - [ ] 1.5: Import relevant icon components from `../../components/Icons` (e.g., `IconPhone`)

- [ ] **Task 2: Implement the condition page sections** (AC: #1, #2, #3)
  - [ ] 2.1: **Hero/Header Section** -- Display `condition.headline` as the `<h1>`. Below it, show `condition.category` as a styled label (e.g., "Mental Health" / "Substance Abuse" / "Eating Disorders") using a `<span>` with appropriate styling. Include a brief introductory line establishing Silver State's expertise
  - [ ] 2.2: **Condition Overview Section** -- Render `condition.description` as the main body content under an `<h2>` heading like "Understanding {condition.name} in Adolescents". Use paragraph elements for each paragraph (split on double newline if description contains multiple paragraphs)
  - [ ] 2.3: **Symptoms Section** -- Render `condition.symptoms` as a styled list under an `<h2>` heading like "Signs of {shortName} in Teens". Use `<ul>` with `<li>` items. Each symptom gets its own list item. Style with appropriate spacing and optional check/bullet icons
  - [ ] 2.4: **Evidence-Based Therapies Section** -- Render `condition.therapies` under an `<h2>` heading like "Evidence-Based Treatment Approaches". Each therapy name displayed prominently. Consider a card or list layout
  - [ ] 2.5: **Our Approach Section** -- Render `condition.approach` under an `<h2>` heading like "How Silver State Treats {shortName}". This is where Silver State's specific treatment methodology is described
  - [ ] 2.6: **Clinical Reviewer Attribution** -- Display `condition.reviewedBy` and `condition.reviewDate` in a visible attribution block. Format: "Clinically reviewed by {reviewedBy} on {reviewDate}". Style as a subtle but visible badge/block near the top or bottom of the clinical content. This satisfies FR15
  - [ ] 2.7: **Source Citations Section** -- Render `condition.sources` as a numbered or bulleted list of links at the bottom of the clinical content. Each source renders as `<a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>`. This satisfies FR16

- [ ] **Task 3: Implement the FAQ section with JSON-LD** (AC: #4)
  - [ ] 3.1: Render `condition.faqs` under an `<h2>` heading "Frequently Asked Questions". Use `FaqItem` component from `../../components/FaqItem` if it exists, or create an accordion-style FAQ display with `<details>`/`<summary>` elements
  - [ ] 3.2: Each FAQ renders with `faq.q` as the question and `faq.a` as the answer
  - [ ] 3.3: Import `generateFaqPageSchema` from `../../utils/schema` and generate FAQPage JSON-LD from `condition.faqs`. Inject into the page head via a `<script type="application/ld+json">` block

- [ ] **Task 4: Implement internal links section** (AC: #5)
  - [ ] 4.1: **Related Programs** -- Render links to programs referenced in `condition.relatedPrograms`. Use `<Link to={'/programs/' + slug}>` for each. Display under a heading like "Treatment Programs for {shortName}"
  - [ ] 4.2: **Related Conditions** -- Render links to conditions referenced in `condition.relatedConditions`. Use `<Link to={'/conditions/' + slug}>` for each. Display under a heading like "Related Conditions We Treat"
  - [ ] 4.3: **Insurance & Admissions Links** -- Include a static section with links to `/insurance` ("Verify Your Insurance") and `/admissions` ("Start the Admissions Process") with a phone CTA
  - [ ] 4.4: All internal links use React Router `<Link>` component -- not `<a href>`

- [ ] **Task 5: Implement phone CTA within the page** (AC: #5)
  - [ ] 5.1: Include a mid-page CTA section between the clinical content and the FAQ, styled prominently. Text like "Ready to get help for your teen? Call us now" with a `<a href={site.phoneTel}>` button showing the phone number
  - [ ] 5.2: Include `aria-label` on the phone link: `aria-label="Call Silver State at {site.phone}"`
  - [ ] 5.3: The CTA uses the `.btn` class or equivalent styling -- must be visually prominent with `background: var(--blue)`, `color: var(--white)`

- [ ] **Task 6: Implement MedicalCondition JSON-LD** (AC: #7)
  - [ ] 6.1: Import `generateMedicalConditionSchema` from `../../utils/schema` (or create inline if the utility does not yet exist for this type)
  - [ ] 6.2: Generate MedicalCondition JSON-LD with fields: `@type: 'MedicalCondition'`, `name`, `description`, `possibleTreatment` (list of therapies), `signOrSymptom` (list of symptoms)
  - [ ] 6.3: Inject into the page via a `<script type="application/ld+json">` block alongside the FAQPage JSON-LD

- [ ] **Task 7: Create individual mental health condition route pages (~12)** (AC: #6, #8)
  - [ ] 7.1: Create `src/pages/conditions/Anxiety.tsx` -- imports `conditions` from `../../data/conditions`, finds the anxiety entry by slug, renders `<ConditionPage condition={anxietyData} />`, exports route `meta` function using `utils/meta.ts` for SEO metadata (title, description, OG tags, canonical URL)
  - [ ] 7.2: Create `src/pages/conditions/Depression.tsx` -- same pattern with depression data
  - [ ] 7.3: Create `src/pages/conditions/TraumaPTSD.tsx` -- same pattern with trauma/PTSD data
  - [ ] 7.4: Create `src/pages/conditions/SuicidalIdeation.tsx` -- same pattern with suicidal ideation data
  - [ ] 7.5: Create `src/pages/conditions/OCD.tsx` -- same pattern with OCD data
  - [ ] 7.6: Create `src/pages/conditions/BipolarDisorder.tsx` -- same pattern with bipolar disorder data
  - [ ] 7.7: Create `src/pages/conditions/AutismSpectrum.tsx` -- same pattern with autism spectrum data
  - [ ] 7.8: Create `src/pages/conditions/OppositionalDefiant.tsx` -- same pattern with ODD data
  - [ ] 7.9: Create `src/pages/conditions/ConductDisorder.tsx` -- same pattern with conduct disorder data
  - [ ] 7.10: Create `src/pages/conditions/DMDD.tsx` -- same pattern with DMDD data
  - [ ] 7.11: Create `src/pages/conditions/BPD.tsx` -- same pattern with BPD data
  - [ ] 7.12: Create `src/pages/conditions/AdjustmentDisorder.tsx` -- same pattern with adjustment disorder data

- [ ] **Task 8: Route page pattern (repeated for each page in Task 7)** (AC: #6, #8)
  - [ ] 8.1: Each route page file follows this exact pattern:
    ```typescript
    import { getConditionBySlug } from '../../data/conditions'
    import { generateMeta } from '../../utils/meta'
    import ConditionPage from './ConditionPage'

    const condition = getConditionBySlug('anxiety-treatment')!

    export const meta = () => generateMeta({
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `/conditions/${condition.slug}`,
    })

    export default function Anxiety() {
      return <ConditionPage condition={condition} />
    }
    ```
  - [ ] 8.2: Each route page uses `export default function PageName` -- named function, not arrow
  - [ ] 8.3: Each route page imports condition data via `getConditionBySlug` from `data/conditions`
  - [ ] 8.4: Each route page file is thin -- it contains ONLY the data lookup, meta export, and ConditionPage render. All presentation logic lives in `ConditionPage.tsx`
  - [ ] 8.5: The `meta` function must use `condition.metaTitle` and `condition.metaDescription` from the ConditionData fields -- not construct the title inline

- [ ] **Task 9: Verify breadcrumb handle exports** (AC: #6, #8)
  - [ ] 9.1: **Breadcrumb Handle Export:** Each condition page wrapper must export a `handle` object for breadcrumb rendering by PageLayout's Breadcrumb component. Example:
    ```ts
    export const handle = {
      breadcrumb: { label: 'Anxiety Treatment', parent: '/conditions' }
    }
    ```
    Verify this export is present in every mental health condition page wrapper created in Task 7.

- [ ] **Task 10: Register routes in routes.ts** (AC: #6)
  - [ ] 10.1: Add route entries for all 12 mental health condition pages in `src/routes.ts`:
    - `/conditions/anxiety-treatment` -> `pages/conditions/Anxiety`
    - `/conditions/depression-treatment` -> `pages/conditions/Depression`
    - `/conditions/trauma-ptsd-treatment` -> `pages/conditions/TraumaPTSD`
    - `/conditions/suicidal-ideation-treatment` -> `pages/conditions/SuicidalIdeation`
    - `/conditions/ocd-treatment` -> `pages/conditions/OCD`
    - `/conditions/bipolar-disorder-treatment` -> `pages/conditions/BipolarDisorder`
    - `/conditions/autism-spectrum-treatment` -> `pages/conditions/AutismSpectrum`
    - `/conditions/oppositional-defiant-disorder-treatment` -> `pages/conditions/OppositionalDefiant`
    - `/conditions/conduct-disorder-treatment` -> `pages/conditions/ConductDisorder`
    - `/conditions/dmdd-treatment` -> `pages/conditions/DMDD`
    - `/conditions/bpd-treatment` -> `pages/conditions/BPD`
    - `/conditions/adjustment-disorder-treatment` -> `pages/conditions/AdjustmentDisorder`
  - [ ] 10.2: All routes use lazy loading for code splitting

- [ ] **Task 11: Responsive styling** (AC: #1)
  - [ ] 11.1: ConditionPage uses inline styles + CSS tokens. All colors reference `var(--blue)`, `var(--text)`, `var(--body)`, `var(--cream)`, `var(--white)`, etc.
  - [ ] 11.2: Layout uses `.wrap` container for max-width centering (1200px)
  - [ ] 11.3: At mobile (< 900px), all sections stack vertically with appropriate spacing
  - [ ] 11.4: At desktop (>= 900px), consider a two-column layout for some sections (e.g., symptoms list beside therapies list) or maintain single-column with wider max-width
  - [ ] 11.5: All touch targets (links, CTAs) meet 44x44px minimum on mobile
  - [ ] 11.6: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings, `<h3>` for subsections -- never skip levels

- [ ] **Task 12: Verify compilation and rendering** (AC: all)
  - [ ] 12.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 12.2: Run `npm run dev` -- condition pages render correctly
  - [ ] 12.3: Verify at least one condition page at 320px, 768px, and 1024px viewports
  - [ ] 12.4: Verify JSON-LD appears in page source (MedicalCondition + FAQPage)
  - [ ] 12.5: Verify all internal links navigate correctly
  - [ ] 12.6: Verify clinical reviewer attribution is visible
  - [ ] 12.7: Verify source citations render as links

## Dev Notes

### Critical Context

The `ConditionPage.tsx` template is the core reusable component for ALL condition pages across Stories 4.2, 4.3, and 4.4. It must be designed as a pure presentational component that receives `ConditionData` and renders the complete page. Individual route pages (Anxiety.tsx, Depression.tsx, etc.) are thin wrappers that look up their data and pass it to the template.

This pattern -- thin route pages + shared template -- is identical to how program pages work in Epic 3 and how insurance pages will work in Epic 5. Consistency across all page types is critical.

### ConditionPage.tsx Template Section Order

The recommended section order for the condition page template, top to bottom:

1. **Page Hero** -- `<h1>` headline + category label + clinical reviewer badge
2. **Condition Overview** -- Description paragraphs
3. **Symptoms Section** -- Signs to watch for in teens
4. **Evidence-Based Therapies** -- Treatment approaches used
5. **Our Approach** -- How Silver State treats this condition
6. **Mid-Page Phone CTA** -- Conversion point
7. **FAQ Section** -- Parent-focused questions with accordion
8. **Related Programs** -- Links to Residential, PHP, IOP
9. **Related Conditions** -- Links to related diagnosis pages
10. **Insurance & Admissions Links** -- Final conversion section
11. **Source Citations** -- Authoritative references

The clinical reviewer attribution should appear near the top (below the hero) or as a persistent badge -- it must be visible without scrolling far.

### JSON-LD Implementation

Two JSON-LD blocks are needed per condition page:

**MedicalCondition Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Anxiety Disorders in Adolescents",
  "description": "...",
  "possibleTreatment": [
    { "@type": "MedicalTherapy", "name": "Cognitive Behavioral Therapy (CBT)" },
    { "@type": "MedicalTherapy", "name": "Dialectical Behavior Therapy (DBT)" }
  ],
  "signOrSymptom": [
    { "@type": "MedicalSignOrSymptom", "name": "Persistent worry or fear" }
  ]
}
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does adolescent anxiety treatment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatment duration varies..."
      }
    }
  ]
}
```

Both should be generated using utility functions from `utils/schema.ts`. If the `generateMedicalConditionSchema` function does not exist yet (Story 1.8 may not have created it for this specific type), create it in `utils/schema.ts` or generate the JSON-LD inline in the template. Prefer adding to `utils/schema.ts` for reusability.

### SEO Meta Pattern

Each route page exports a `meta` function that uses `generateMeta` from `utils/meta.ts`. The function generates:
- `<title>` -- e.g., "Adolescent Anxiety Treatment | Silver State Treatment Center"
- `<meta name="description">` -- from `condition.metaDescription`
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`)
- Canonical URL -- e.g., `https://www.silverstatetreatment.com/conditions/anxiety-treatment`

The exact `meta` export pattern depends on how Story 1.8 implemented `utils/meta.ts`. Follow whatever pattern the existing program pages or other implemented pages use.

### Architecture Compliance

- ConditionPage template uses `export default function ConditionPage` -- named function, not arrow
- All colors reference CSS tokens -- no hardcoded hex values
- Interactive elements: `<Link>` for navigation, `<a>` for phone CTA -- no `<div onClick>`
- Inline styles for component-specific styling, CSS tokens for design system values
- No CSS modules, no Tailwind, no styled-components
- No barrel file imports -- import directly from component files
- Content data imported from `data/conditions` -- no hardcoded content in the template
- All images have appropriate `alt` text
- `prefers-reduced-motion` respected for any animations
- 900px single mobile breakpoint via `useIsMobile()` if needed for conditional rendering
- Page rendered inside PageLayout (via route config) -- do NOT render Nav, Footer, TrustBadges, or CtaBand in the condition page; PageLayout handles those

### Dependencies

- **Requires:** Story 1.1 (project), Story 1.2 (types), Story 1.7 (PageLayout), Story 1.8 (SEO utils), Story 4.1 (condition data)
- **Produces for:** Story 4.3 (substance abuse pages reuse ConditionPage template), Story 4.4 (eating disorder pages reuse ConditionPage template)
- **Shared template:** `ConditionPage.tsx` MUST be designed so Stories 4.3 and 4.4 create only thin route page files that import it -- no template changes should be needed

### Anti-Patterns to AVOID

1. **DO NOT** create separate template components per category -- one `ConditionPage.tsx` serves ALL conditions across all three categories
2. **DO NOT** hardcode condition content in the template -- all content comes from the `condition` prop
3. **DO NOT** hardcode the phone number -- use `site.phoneTel` and `site.phone` from `data/common`
4. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand in condition pages -- PageLayout handles the shell
5. **DO NOT** use `<a href>` for internal links -- use React Router `<Link to>` for all internal navigation
6. **DO NOT** skip heading levels -- `<h1>` then `<h2>` then `<h3>`, never jump from `<h1>` to `<h3>`
7. **DO NOT** create CSS module files -- use inline styles + CSS tokens
8. **DO NOT** put presentation logic in the thin route page files -- all rendering lives in ConditionPage.tsx
9. **DO NOT** forget to include both MedicalCondition AND FAQPage JSON-LD
10. **DO NOT** forget the clinical reviewer attribution (FR15) -- it must be visible on the page
11. **DO NOT** forget source citations (FR16) -- they must render as clickable links
12. **DO NOT** use `target="_blank"` on internal links -- only on external source citation links
13. **DO NOT** create barrel files or `index.ts` in `src/pages/conditions/`
14. **DO NOT** install any new npm packages -- use existing React, React Router, and project utilities
15. **DO NOT** make the `ConditionPage.tsx` template aware of which category it is rendering beyond what is in the data -- the same template renders mental health, substance abuse, and eating disorder pages identically

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] -- inline styles + CSS tokens, extracted style constants
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- `/conditions/{slug}` URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] -- pages/conditions/ directory, flat components
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- data consumed by pages, not by components directly
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] -- semantic HTML, keyboard nav, ARIA, touch targets
- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.2] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR2] -- Condition-specific treatment pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] -- Evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections
- [Source: _bmad-output/planning-artifacts/prd.md#FR15] -- Named credentialed clinical reviewer
- [Source: _bmad-output/planning-artifacts/prd.md#FR16] -- Source citations
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data (MedicalCondition, FAQPage)
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] -- Open Graph for link previews
- [Source: _bmad-output/implementation-artifacts/4-1-condition-content-data.md] -- ConditionData structure and content

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
