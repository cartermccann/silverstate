# Story 4.3: Substance Abuse Condition Pages

Status: ready-for-dev

## Story

As a **parent whose teen is struggling with substance use**,
I want condition pages covering specific substances and dual diagnosis,
So that I find specialized treatment information -- not generic "substance abuse" content.

**Dependencies:** Story 4.1 (condition content data with substance abuse entries), Story 4.2 (ConditionPage template component), Story 1.8 (SEO utilities)

**FRs covered:** FR2, FR3, FR5, FR6, FR15, FR16, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** condition data from Story 4.1 for substance-related conditions, **When** a user navigates to any substance abuse condition page (e.g., `/conditions/alcohol-abuse-treatment`, `/conditions/dual-diagnosis-treatment`), **Then** each page renders using the same condition template with substance-specific content (FR2)
2. **And** content describes how Silver State treats the specific substance issue in adolescents, including detox considerations where applicable (FR3)
3. **And** dual diagnosis page explains co-occurring mental health + substance use treatment approach
4. **And** all pages include clinical reviewer, source citations, FAQ, and internal links (FR5, FR6, FR15, FR16)
5. **And** all ~8 substance-related pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)

## Tasks / Subtasks

- [ ] **Task 1: Create individual substance abuse condition route pages (~8)** (AC: #1, #2, #3, #5)
  - [ ] 1.1: Create `src/pages/conditions/DualDiagnosis.tsx` -- imports `getConditionBySlug` from `../../data/conditions`, finds the dual-diagnosis entry, renders `<ConditionPage condition={dualDiagnosisData} />`, exports route `meta` function for unique SEO metadata
  - [ ] 1.2: Create `src/pages/conditions/SubstanceAbuse.tsx` -- same thin-wrapper pattern with substance-abuse data
  - [ ] 1.3: Create `src/pages/conditions/AlcoholAbuse.tsx` -- same pattern with alcohol-abuse data
  - [ ] 1.4: Create `src/pages/conditions/OpioidAbuse.tsx` -- same pattern with opioid-abuse data
  - [ ] 1.5: Create `src/pages/conditions/BenzodiazepineAbuse.tsx` -- same pattern with benzodiazepine-abuse data
  - [ ] 1.6: Create `src/pages/conditions/CocaineAbuse.tsx` -- same pattern with cocaine-abuse data
  - [ ] 1.7: Create `src/pages/conditions/MethAbuse.tsx` -- same pattern with meth-abuse data
  - [ ] 1.8: Create `src/pages/conditions/CannabisAbuse.tsx` -- same pattern with cannabis-abuse data

- [ ] **Task 2: Follow the exact route page pattern from Story 4.2** (AC: #1, #5)
  - [ ] 2.1: Each route page file follows this exact pattern:
    ```typescript
    import { getConditionBySlug } from '../../data/conditions'
    import { generateMeta } from '../../utils/meta'
    import ConditionPage from './ConditionPage'

    const condition = getConditionBySlug('dual-diagnosis-treatment')!

    export const meta = () => generateMeta({
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `/conditions/${condition.slug}`,
    })

    export default function DualDiagnosis() {
      return <ConditionPage condition={condition} />
    }
    ```
  - [ ] 2.2: Each file uses `export default function PageName` -- named function, not arrow
  - [ ] 2.3: Each file is thin -- ONLY data lookup, meta export, and ConditionPage render
  - [ ] 2.4: The function name matches the PascalCase file name (e.g., `AlcoholAbuse` in `AlcoholAbuse.tsx`)

- [ ] **Task 3: Verify breadcrumb handle exports** (AC: #1, #5)
  - [ ] 3.1: **Breadcrumb Handle Export:** Each substance abuse condition page wrapper must export a `handle` object for breadcrumb rendering by PageLayout's Breadcrumb component. Example:
    ```ts
    export const handle = {
      breadcrumb: { label: 'Dual Diagnosis Treatment', parent: '/conditions' }
    }
    ```
    Verify this export is present in every substance abuse condition page wrapper created in Task 1.

- [ ] **Task 4: Register routes in routes.ts** (AC: #5)
  - [ ] 4.1: Add route entries for all 8 substance abuse condition pages in `src/routes.ts`:
    - `/conditions/dual-diagnosis-treatment` -> `pages/conditions/DualDiagnosis`
    - `/conditions/substance-abuse-treatment` -> `pages/conditions/SubstanceAbuse`
    - `/conditions/alcohol-abuse-treatment` -> `pages/conditions/AlcoholAbuse`
    - `/conditions/opioid-abuse-treatment` -> `pages/conditions/OpioidAbuse`
    - `/conditions/benzodiazepine-abuse-treatment` -> `pages/conditions/BenzodiazepineAbuse`
    - `/conditions/cocaine-abuse-treatment` -> `pages/conditions/CocaineAbuse`
    - `/conditions/meth-abuse-treatment` -> `pages/conditions/MethAbuse`
    - `/conditions/cannabis-abuse-treatment` -> `pages/conditions/CannabisAbuse`
  - [ ] 4.2: All routes use lazy loading for code splitting

- [ ] **Task 5: Verify content quality for substance-specific pages** (AC: #2, #3)
  - [ ] 5.1: Verify the dual diagnosis page data (from Story 4.1) specifically describes co-occurring mental health and substance use disorders, not just substance use alone. If the data content is insufficient, flag it as a defect against Story 4.1 -- do NOT modify data files in this story
  - [ ] 5.2: Verify substance-specific pages mention detox considerations where clinically relevant (opioid, benzodiazepine, alcohol). This is a content concern addressed in Story 4.1 data -- if missing, flag it
  - [ ] 5.3: Verify each substance page has NIDA and/or SAMHSA source citations in its data

- [ ] **Task 6: Verify compilation and rendering** (AC: all)
  - [ ] 6.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 6.2: Run `npm run dev` -- all 8 substance abuse pages render correctly
  - [ ] 6.3: Verify at least one substance page at 320px, 768px, and 1024px viewports
  - [ ] 6.4: Verify JSON-LD appears in page source (MedicalCondition + FAQPage) for each page
  - [ ] 6.5: Verify internal links navigate correctly (related conditions, programs, insurance, admissions)
  - [ ] 6.6: Verify clinical reviewer attribution is visible
  - [ ] 6.7: Verify source citations render as clickable links
  - [ ] 6.8: Verify each page has unique `<title>` and `<meta description>`

## Dev Notes

### Critical Context

This story creates ONLY the thin route page wrapper files for the 8 substance abuse conditions. The `ConditionPage.tsx` template was already built in Story 4.2. The condition content data was already created in Story 4.1. This story's scope is intentionally narrow:

1. Create 8 thin route page files
2. Register 8 routes in `routes.ts`
3. Verify everything renders correctly

No modifications to `ConditionPage.tsx` should be needed. If the template does not render substance abuse content properly, that is a defect in Story 4.2's template design -- the template must handle all three condition categories identically.

### File Creation Checklist

| File | Slug | Route |
|------|------|-------|
| `DualDiagnosis.tsx` | `dual-diagnosis-treatment` | `/conditions/dual-diagnosis-treatment` |
| `SubstanceAbuse.tsx` | `substance-abuse-treatment` | `/conditions/substance-abuse-treatment` |
| `AlcoholAbuse.tsx` | `alcohol-abuse-treatment` | `/conditions/alcohol-abuse-treatment` |
| `OpioidAbuse.tsx` | `opioid-abuse-treatment` | `/conditions/opioid-abuse-treatment` |
| `BenzodiazepineAbuse.tsx` | `benzodiazepine-abuse-treatment` | `/conditions/benzodiazepine-abuse-treatment` |
| `CocaineAbuse.tsx` | `cocaine-abuse-treatment` | `/conditions/cocaine-abuse-treatment` |
| `MethAbuse.tsx` | `meth-abuse-treatment` | `/conditions/meth-abuse-treatment` |
| `CannabisAbuse.tsx` | `cannabis-abuse-treatment` | `/conditions/cannabis-abuse-treatment` |

### Dual Diagnosis Special Considerations

The dual diagnosis page is unique among substance abuse pages because it bridges two categories -- mental health and substance use. The data in Story 4.1 should cover this, but the page must make clear that Silver State treats BOTH conditions simultaneously, not sequentially. This is a content quality concern, not a template concern.

### Architecture Compliance

- Each route page uses `export default function PageName` -- named function, not arrow
- All route pages are thin wrappers -- no presentation logic
- All route pages import `ConditionPage` from `./ConditionPage` (relative import within same directory)
- All route pages import data via `getConditionBySlug` from `../../data/conditions`
- No CSS modules, no Tailwind, no styled-components
- No barrel files in `src/pages/conditions/`
- Pages rendered inside PageLayout via route config -- do NOT render shell components
- No new npm packages

### Dependencies

- **Requires:** Story 4.1 (substance abuse condition data), Story 4.2 (ConditionPage template + route pattern established)
- **Produces for:** No downstream stories depend on this -- substance abuse pages are leaf content
- **Parallel:** Can be developed in parallel with Story 4.4 (eating disorder pages) since both depend on 4.1 and 4.2 but not on each other

### Anti-Patterns to AVOID

1. **DO NOT** modify `ConditionPage.tsx` -- if it doesn't render substance content correctly, file a defect against Story 4.2
2. **DO NOT** modify condition data files -- if data content is insufficient, file a defect against Story 4.1
3. **DO NOT** add presentation logic to route page files -- they must remain thin wrappers
4. **DO NOT** create a separate template for substance abuse pages -- reuse `ConditionPage.tsx`
5. **DO NOT** hardcode any content in route page files -- all content comes from condition data
6. **DO NOT** hardcode the phone number -- the template uses `site.phoneTel` from `data/common`
7. **DO NOT** forget to register routes in `routes.ts`
8. **DO NOT** create barrel files or `index.ts` in `src/pages/conditions/`
9. **DO NOT** use arrow function exports -- use named function declarations
10. **DO NOT** skip the non-null assertion (`!`) on `getConditionBySlug` -- the slug is known to exist in the data

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- `/conditions/{slug}` URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] -- pages/conditions/ directory
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function
- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.3] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR2] -- Condition-specific treatment pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] -- Evidence-based therapy descriptions, detox considerations
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections
- [Source: _bmad-output/planning-artifacts/prd.md#FR15] -- Named credentialed clinical reviewer
- [Source: _bmad-output/planning-artifacts/prd.md#FR16] -- Source citations (NIDA, SAMHSA)
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] -- Open Graph for link previews
- [Source: _bmad-output/implementation-artifacts/4-1-condition-content-data.md] -- Substance abuse condition data
- [Source: _bmad-output/implementation-artifacts/4-2-condition-page-template-and-mental-health-conditions.md] -- ConditionPage template and route page pattern

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
