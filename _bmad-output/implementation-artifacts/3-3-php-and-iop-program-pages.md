# Story 3.3: PHP & IOP Program Pages

Status: ready-for-dev

## Story

As a **parent exploring outpatient options**,
I want detailed program pages for PHP and IOP showing how they differ from residential,
So that I understand the full continuum of care and which level fits my teen.

**Dependencies:** Story 3.1 (`data/programs.ts` with `phpProgram` and `iopProgram` data), Story 3.2 (`ProgramPage.tsx` template component, route pattern, meta export pattern)

**FRs covered:** FR1 (program pages — PHP, IOP with structure, approach, duration), FR3 (evidence-based therapy descriptions), FR4 (daily schedule), FR5 (internal links to related programs, conditions, admissions), FR6 (FAQ with FAQPage JSON-LD), FR35 (JSON-LD structured data — MedicalTherapy + FAQPage), FR36 (unique SEO metadata per page), FR40 (Open Graph tags)

## Acceptance Criteria

1. **Given** program data exists for PHP and IOP from Story 3.1, **When** a user navigates to `/programs/php` or `/programs/iop`, **Then** each page renders using the same template pattern as Residential with program-specific content (FR1)
2. **And** each page includes daily schedule, therapy modalities, and FAQ sections (FR3, FR4, FR6)
3. **And** internal links connect to related programs, conditions, and admissions (FR5)
4. **And** each page has unique SEO metadata, JSON-LD (MedicalTherapy + FAQPage), and OG tags (FR35, FR36, FR40)
5. **And** both pages are fully responsive and accessible

## Tasks / Subtasks

- [ ] **Task 1: Create `src/pages/programs/PHP.tsx`** (AC: #1, #2, #3, #4)
  - [ ] 1.1: Create `src/pages/programs/PHP.tsx`
  - [ ] 1.2: Import `phpProgram` from `src/data/programs.ts`
  - [ ] 1.3: Import `ProgramPage` from `./ProgramPage` (created in Story 3.2)
  - [ ] 1.4: Component renders `<ProgramPage program={phpProgram} />` — no additional layout or content
  - [ ] 1.5: Export `meta` function using `generateMeta` from `utils/meta.ts`:
    - Title: `phpProgram.metaTitle` (e.g., "Partial Hospitalization Program (PHP) for Teens | Silver State")
    - Description: `phpProgram.metaDescription`
    - Canonical URL: `${VITE_SITE_URL}/programs/php`
    - OG tags with program-specific title, description, and image
  - [ ] 1.6: Export `handle` (or equivalent) for breadcrumb: `{ breadcrumb: 'Partial Hospitalization (PHP)' }`
  - [ ] 1.7: Use `export default function PHP()` — named function, default export

- [ ] **Task 2: Create `src/pages/programs/IOP.tsx`** (AC: #1, #2, #3, #4)
  - [ ] 2.1: Create `src/pages/programs/IOP.tsx`
  - [ ] 2.2: Import `iopProgram` from `src/data/programs.ts`
  - [ ] 2.3: Import `ProgramPage` from `./ProgramPage`
  - [ ] 2.4: Component renders `<ProgramPage program={iopProgram} />` — no additional layout or content
  - [ ] 2.5: Export `meta` function using `generateMeta` from `utils/meta.ts`:
    - Title: `iopProgram.metaTitle` (e.g., "Intensive Outpatient Program (IOP) for Teens | Silver State")
    - Description: `iopProgram.metaDescription`
    - Canonical URL: `${VITE_SITE_URL}/programs/iop`
    - OG tags with program-specific title, description, and image
  - [ ] 2.6: Export `handle` for breadcrumb: `{ breadcrumb: 'Intensive Outpatient (IOP)' }`
  - [ ] 2.7: Use `export default function IOP()` — named function, default export

- [ ] **Task 3: Register routes** (AC: #1, #4)
  - [ ] 3.1: Ensure `/programs/php` is registered in `src/routes.ts` pointing to `pages/programs/PHP.tsx`
  - [ ] 3.2: Ensure `/programs/iop` is registered in `src/routes.ts` pointing to `pages/programs/IOP.tsx`
  - [ ] 3.3: Verify all three program routes exist: `/programs/residential-treatment` (Story 3.2), `/programs/php`, `/programs/iop`

- [ ] **Task 4: Verify cross-links between all program pages** (AC: #3)
  - [ ] 4.1: Residential page's "Related Programs" section links to `/programs/php` and `/programs/iop`
  - [ ] 4.2: PHP page's "Related Programs" links to `/programs/residential-treatment` and `/programs/iop`
  - [ ] 4.3: IOP page's "Related Programs" links to `/programs/residential-treatment` and `/programs/php`
  - [ ] 4.4: All three pages link to `/insurance` and `/admissions`
  - [ ] 4.5: All links use `<Link>` from React Router — no `<a href>` for internal navigation
  - [ ] 4.6: Related conditions links point to `/conditions/${slug}` — these may not resolve yet (Epic 4), but the links should be present

- [ ] **Task 5: Verify unique SEO metadata per page** (AC: #4)
  - [ ] 5.1: PHP page title, description, and canonical URL are unique and different from Residential
  - [ ] 5.2: IOP page title, description, and canonical URL are unique and different from Residential and PHP
  - [ ] 5.3: JSON-LD on each page uses program-specific data (not shared data)
  - [ ] 5.4: FAQPage JSON-LD on PHP page contains PHP-specific FAQs; IOP page contains IOP-specific FAQs

- [ ] **Task 6: Verify responsive behavior and accessibility** (AC: #5)
  - [ ] 6.1: Both pages render correctly at 320px, 768px, and 1024px+ viewports
  - [ ] 6.2: No horizontal scrolling on any viewport
  - [ ] 6.3: All interactive elements (FAQ toggles, links, CTAs) meet 44x44px touch target on mobile
  - [ ] 6.4: Heading hierarchy is correct: one `<h1>` per page, sequential `<h2>`/`<h3>`
  - [ ] 6.5: All interactive elements are keyboard accessible
  - [ ] 6.6: Breadcrumbs show correctly: Home > Programs > PHP (or IOP)

- [ ] **Task 7: Verify breadcrumb handle exports** (AC: #1, #5)
  - [ ] 7.1: **Breadcrumb Handle Export:** Each program page wrapper (PHP.tsx, IOP.tsx) must export a `handle` object for breadcrumb rendering by PageLayout's Breadcrumb component. Example:
    ```ts
    export const handle = {
      breadcrumb: { label: 'Partial Hospitalization (PHP)', parent: '/programs' }
    }
    ```
    Verify this export is present in both the PHP and IOP page wrappers.

- [ ] **Task 8: Verify compilation and rendering** (AC: all)
  - [ ] 8.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 8.2: Run `npm run dev`:
    - Navigate to `/programs/php` — full page renders with PHP-specific content
    - Navigate to `/programs/iop` — full page renders with IOP-specific content
  - [ ] 8.3: Verify PHP page shows: PHP-specific overview, PHP daily schedule, PHP therapy modalities, PHP FAQs, links to Residential and IOP
  - [ ] 8.4: Verify IOP page shows: IOP-specific overview, IOP daily schedule, IOP therapy modalities, IOP FAQs, links to Residential and PHP
  - [ ] 8.5: Verify page titles are unique in the browser tab
  - [ ] 8.6: Verify JSON-LD is present and unique per page
  - [ ] 8.7: Verify keyboard navigation works on both pages

## Dev Notes

### Critical Context

**This is a "thin wrapper" story.** The heavy lifting was done in Story 3.1 (data) and Story 3.2 (ProgramPage template + Residential page). This story creates two small page files — each is ~20 lines of code — that import data and pass it to the shared template.

**The pattern is identical to Residential.tsx:**
```tsx
import { phpProgram } from '../../data/programs'
import ProgramPage from './ProgramPage'

export default function PHP() {
  return <ProgramPage program={phpProgram} />
}

// meta export for SEO...
```

**Key difference from Residential:** PHP and IOP have different daily schedules, different therapy modality lists, different FAQ entries, and different related content links. All of this is handled by the data in `data/programs.ts` (Story 3.1) — the template renders whatever data it receives.

**PHP-specific notes:**
- PHP is a step-down from Residential — full clinical days, home evenings
- Daily schedule: shorter day (e.g., 8AM-3PM), no overnight
- Therapy modalities may be fewer than Residential (no adventure therapy, etc.)
- Target audience: teens transitioning from residential, or those who need structured days but can be safe at home

**IOP-specific notes:**
- IOP is a step-down from PHP — targeted sessions several times per week
- Daily schedule: part-time (e.g., 3-4 hours, 3 days/week, after school)
- Therapy modalities: focused on core evidence-based approaches
- Target audience: teens stepping down from higher care, or those needing focused support while maintaining school and social life

### Architecture Compliance

- **Page files:** Each page is a thin wrapper — imports data, passes to template, exports meta. Named function default export
- **Routing:** `/programs/php` → `pages/programs/PHP.tsx`, `/programs/iop` → `pages/programs/IOP.tsx`
- **SEO:** Each page exports its own `meta` function with unique title, description, canonical, and OG tags
- **Data flow:** `data/programs.ts` → `pages/programs/PHP.tsx` → `ProgramPage.tsx` → components
- **No barrel files:** Import directly from component and data files
- **Styling:** Inherits from ProgramPage template — no additional styling needed in the wrapper

### Dependencies

| Direction | Story | What |
|-----------|-------|------|
| Depends on | 3.1 | `data/programs.ts` (phpProgram, iopProgram) |
| Depends on | 3.2 | `ProgramPage.tsx` template component, route/meta pattern |
| Depends on | 1.7 | PageLayout (wraps the page) |
| Depends on | 1.8 | `utils/meta.ts` (metadata helper) |
| Produces for | 2.2 | Homepage program links now resolve to real pages |
| Produces for | 4.x | Condition pages cross-link to program pages |
| Produces for | 5.x | Insurance pages link to programs |
| Produces for | 8.1 | Admissions page links to all programs |

### Anti-Patterns to AVOID

1. **DO NOT** duplicate the ProgramPage template logic in PHP.tsx or IOP.tsx — use the shared template
2. **DO NOT** add extra sections or layout that aren't in the ProgramPage template — if PHP or IOP need unique sections, extend ProgramPage to support them via optional data fields, not by adding JSX to the wrapper
3. **DO NOT** hardcode any content in PHP.tsx or IOP.tsx — all content comes from `data/programs.ts`
4. **DO NOT** copy-paste the `meta` export — use the same `generateMeta` helper with different data
5. **DO NOT** skip registering routes in `routes.ts`
6. **DO NOT** forget to verify cross-links between all three program pages
7. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand — PageLayout handles these
8. **DO NOT** use `<a href>` for internal links — use `<Link>` from React Router
9. **DO NOT** use the same meta title/description across PHP and IOP — each must be unique for SEO
10. **DO NOT** create barrel files in `src/pages/programs/`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/programs/php`, `/programs/iop`
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] — pages grouped by content area
- [Source: _bmad-output/planning-artifacts/architecture.md#Pre-rendering-and-SEO] — meta export convention
- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.3] — acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR1] — program pages for each level of care
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] — evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR4] — daily schedule and program structure
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] — FAQ sections with FAQPage JSON-LD
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page
- [Source: mockups/silverstate-react/src/data/content.ts] — source content for PHP and IOP data

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
