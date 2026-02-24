# Story 4.4: Eating Disorder Condition Pages

Status: ready-for-dev

## Story

As a **parent whose teen has an eating disorder**,
I want condition pages for specific eating disorders with treatment approach details,
So that I know Silver State treats my teen's specific condition -- not just "eating disorders" generically.

**Dependencies:** Story 4.1 (condition content data with eating disorder entries), Story 4.2 (ConditionPage template component), Story 1.8 (SEO utilities)

**FRs covered:** FR2, FR3, FR5, FR6, FR15, FR16, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** condition data from Story 4.1 for eating disorder conditions, **When** a user navigates to any eating disorder condition page (e.g., `/conditions/anorexia-nervosa-treatment`), **Then** each page renders using the same condition template with eating-disorder-specific content (FR2)
2. **And** content describes Silver State's approach to each eating disorder in adolescents (FR3)
3. **And** all pages include clinical reviewer, source citations, FAQ, and internal links (FR5, FR6, FR15, FR16)
4. **And** all ~5 eating disorder pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)

## Tasks / Subtasks

- [ ] **Task 1: Create individual eating disorder condition route pages (~5)** (AC: #1, #2, #4)
  - [ ] 1.1: Create `src/pages/conditions/AnorexiaNervosa.tsx` -- imports `getConditionBySlug` from `../../data/conditions`, finds the anorexia-nervosa entry, renders `<ConditionPage condition={anorexiaData} />`, exports route `meta` function for unique SEO metadata
  - [ ] 1.2: Create `src/pages/conditions/BulimiaNervosa.tsx` -- same thin-wrapper pattern with bulimia-nervosa data
  - [ ] 1.3: Create `src/pages/conditions/BingeEating.tsx` -- same pattern with binge-eating data
  - [ ] 1.4: Create `src/pages/conditions/ARFID.tsx` -- same pattern with ARFID data
  - [ ] 1.5: Create `src/pages/conditions/OSFED.tsx` -- same pattern with OSFED data

- [ ] **Task 2: Follow the exact route page pattern from Story 4.2** (AC: #1, #4)
  - [ ] 2.1: Each route page file follows this exact pattern:
    ```typescript
    import { getConditionBySlug } from '../../data/conditions'
    import { generateMeta } from '../../utils/meta'
    import ConditionPage from './ConditionPage'

    const condition = getConditionBySlug('anorexia-nervosa-treatment')!

    export const meta = () => generateMeta({
      title: condition.metaTitle,
      description: condition.metaDescription,
      url: `/conditions/${condition.slug}`,
    })

    export default function AnorexiaNervosa() {
      return <ConditionPage condition={condition} />
    }
    ```
  - [ ] 2.2: Each file uses `export default function PageName` -- named function, not arrow
  - [ ] 2.3: Each file is thin -- ONLY data lookup, meta export, and ConditionPage render
  - [ ] 2.4: The function name matches the PascalCase file name (e.g., `BingeEating` in `BingeEating.tsx`)

- [ ] **Task 3: Verify breadcrumb handle exports** (AC: #1, #4)
  - [ ] 3.1: **Breadcrumb Handle Export:** Each eating disorder condition page wrapper must export a `handle` object for breadcrumb rendering by PageLayout's Breadcrumb component. Example:
    ```ts
    export const handle = {
      breadcrumb: { label: 'Anorexia Nervosa Treatment', parent: '/conditions' }
    }
    ```
    Verify this export is present in every eating disorder condition page wrapper created in Task 1.

- [ ] **Task 4: Register routes in routes.ts** (AC: #4)
  - [ ] 4.1: Add route entries for all 5 eating disorder condition pages in `src/routes.ts`:
    - `/conditions/anorexia-nervosa-treatment` -> `pages/conditions/AnorexiaNervosa`
    - `/conditions/bulimia-nervosa-treatment` -> `pages/conditions/BulimiaNervosa`
    - `/conditions/binge-eating-disorder-treatment` -> `pages/conditions/BingeEating`
    - `/conditions/arfid-treatment` -> `pages/conditions/ARFID`
    - `/conditions/osfed-treatment` -> `pages/conditions/OSFED`
  - [ ] 4.2: All routes use lazy loading for code splitting

- [ ] **Task 5: Verify content quality for eating disorder pages** (AC: #2, #3)
  - [ ] 5.1: Verify each eating disorder page data (from Story 4.1) describes Silver State's adolescent-specific approach to that eating disorder, not generic adult content
  - [ ] 5.2: Verify ARFID and OSFED pages have content that explains these less-commonly-known conditions in parent-friendly language -- parents searching for these terms may not be familiar with the acronyms
  - [ ] 5.3: Verify each eating disorder page has NEDA and/or NIMH source citations in its data
  - [ ] 5.4: If any data content is insufficient, flag it as a defect against Story 4.1 -- do NOT modify data files in this story

- [ ] **Task 6: Verify compilation and rendering** (AC: all)
  - [ ] 6.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 6.2: Run `npm run dev` -- all 5 eating disorder pages render correctly
  - [ ] 6.3: Verify at least one eating disorder page at 320px, 768px, and 1024px viewports
  - [ ] 6.4: Verify JSON-LD appears in page source (MedicalCondition + FAQPage) for each page
  - [ ] 6.5: Verify internal links navigate correctly (related conditions, programs, insurance, admissions)
  - [ ] 6.6: Verify clinical reviewer attribution is visible
  - [ ] 6.7: Verify source citations render as clickable links
  - [ ] 6.8: Verify each page has unique `<title>` and `<meta description>`

- [ ] **Task 7: Verify all 25 condition pages are now accessible** (AC: all)
  - [ ] 7.1: After this story, combined with Stories 4.2 and 4.3, all 25 condition routes should be registered and rendering. Verify the total count: 12 mental health (Story 4.2) + 8 substance abuse (Story 4.3) + 5 eating disorders (this story) = 25
  - [ ] 7.2: Spot-check navigation between condition pages -- click a "Related Conditions" link and verify it routes to the correct page
  - [ ] 7.3: Spot-check that the condition category label renders correctly: "Mental Health", "Substance Abuse", or "Eating Disorders" depending on the data

## Dev Notes

### Critical Context

This is the final story in Epic 4. After completion, all 25 condition pages will be live. Like Story 4.3, this story creates ONLY thin route page wrapper files. The `ConditionPage.tsx` template was built in Story 4.2 and the condition content data was created in Story 4.1.

This story's scope is intentionally narrow:

1. Create 5 thin route page files
2. Register 5 routes in `routes.ts`
3. Verify everything renders correctly
4. Confirm all 25 condition pages across Stories 4.2-4.4 are accessible

### File Creation Checklist

| File | Slug | Route |
|------|------|-------|
| `AnorexiaNervosa.tsx` | `anorexia-nervosa-treatment` | `/conditions/anorexia-nervosa-treatment` |
| `BulimiaNervosa.tsx` | `bulimia-nervosa-treatment` | `/conditions/bulimia-nervosa-treatment` |
| `BingeEating.tsx` | `binge-eating-disorder-treatment` | `/conditions/binge-eating-disorder-treatment` |
| `ARFID.tsx` | `arfid-treatment` | `/conditions/arfid-treatment` |
| `OSFED.tsx` | `osfed-treatment` | `/conditions/osfed-treatment` |

### ARFID and OSFED Content Notes

These two conditions are less well-known than anorexia or bulimia:

- **ARFID (Avoidant/Restrictive Food Intake Disorder):** Not about body image -- it is about sensory aversion, fear of choking/vomiting, or lack of interest in eating. Parents may not recognize it as an eating disorder. The data content (Story 4.1) should explain this distinction clearly
- **OSFED (Other Specified Feeding or Eating Disorder):** A clinically significant eating disorder that does not meet the full criteria for anorexia, bulimia, or binge eating disorder. Parents may arrive at this page after a clinician diagnosis they do not fully understand

If the data from Story 4.1 does not adequately explain these conditions in parent-friendly language, flag it as a content defect.

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

- **Requires:** Story 4.1 (eating disorder condition data), Story 4.2 (ConditionPage template + route page pattern)
- **Produces for:** No downstream stories depend on this -- eating disorder pages are leaf content
- **Parallel:** Can be developed in parallel with Story 4.3 (substance abuse pages) since both depend on 4.1 and 4.2 but not on each other
- **Epic 4 completion:** This story completes Epic 4. All 25 condition treatment pages are live after this story

### Anti-Patterns to AVOID

1. **DO NOT** modify `ConditionPage.tsx` -- if it doesn't render eating disorder content correctly, file a defect against Story 4.2
2. **DO NOT** modify condition data files -- if data content is insufficient, file a defect against Story 4.1
3. **DO NOT** add presentation logic to route page files -- they must remain thin wrappers
4. **DO NOT** create a separate template for eating disorder pages -- reuse `ConditionPage.tsx`
5. **DO NOT** hardcode any content in route page files -- all content comes from condition data
6. **DO NOT** hardcode the phone number -- the template uses `site.phoneTel` from `data/common`
7. **DO NOT** forget to register routes in `routes.ts`
8. **DO NOT** create barrel files or `index.ts` in `src/pages/conditions/`
9. **DO NOT** use arrow function exports -- use named function declarations
10. **DO NOT** skip the non-null assertion (`!`) on `getConditionBySlug` -- the slug is known to exist in the data
11. **DO NOT** forget the final verification in Task 6 -- confirm all 25 condition pages are accessible across all three stories

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- `/conditions/{slug}` URL structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] -- pages/conditions/ directory
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function
- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.4] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR2] -- Condition-specific treatment pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] -- Evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections
- [Source: _bmad-output/planning-artifacts/prd.md#FR15] -- Named credentialed clinical reviewer
- [Source: _bmad-output/planning-artifacts/prd.md#FR16] -- Source citations (NEDA, NIMH)
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] -- SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] -- Open Graph for link previews
- [Source: _bmad-output/implementation-artifacts/4-1-condition-content-data.md] -- Eating disorder condition data
- [Source: _bmad-output/implementation-artifacts/4-2-condition-page-template-and-mental-health-conditions.md] -- ConditionPage template and route page pattern
- [Source: _bmad-output/implementation-artifacts/4-3-substance-abuse-condition-pages.md] -- Substance abuse pages (parallel story)

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
