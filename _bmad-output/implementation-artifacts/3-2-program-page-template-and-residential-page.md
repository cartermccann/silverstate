# Story 3.2: Program Page Template & Residential Page

Status: done

## Story

As a **parent exploring residential treatment**,
I want a detailed program page showing structure, daily schedule, therapies used, and FAQ,
So that I understand what my teen's experience will look like at Silver State.

**Dependencies:** Story 3.1 (`data/programs.ts` with `residentialProgram` data, `data/therapies.ts` with therapy modalities), Story 1.7 (PageLayout), Story 1.8 (SEO utilities — `utils/schema.ts`, `utils/meta.ts`), Story 1.6 (Breadcrumb component)

**FRs covered:** FR1 (program pages — structure, approach, duration, daily schedule), FR3 (evidence-based therapy descriptions), FR4 (daily schedule), FR5 (internal links to conditions, insurance, admissions), FR6 (FAQ accordion with FAQPage JSON-LD), FR35 (JSON-LD structured data), FR36 (unique SEO metadata), FR40 (Open Graph tags)

## Acceptance Criteria

1. **Given** a user navigates to `/programs/residential-treatment`, **When** the Residential page renders, **Then** it displays: program overview, approach description, typical duration, and target population (FR1)
2. **And** a daily schedule section shows the structured day: therapy, academics, recreation, meals (FR4)
3. **And** therapy modalities section lists evidence-based treatments with descriptions (FR3)
4. **And** an FAQ accordion answers common residential treatment questions with FAQPage JSON-LD (FR6, FR35)
5. **And** internal links connect to related conditions, insurance, and admissions pages (FR5)
6. **And** the route `meta` export provides SEO metadata and OG tags (FR36, FR40)
7. **And** the page uses PageLayout and is fully responsive and accessible

## Tasks / Subtasks

- [x] **Task 1: Create the ProgramPage template component** (AC: #1, #2, #3, #4, #5, #7)
  - [x] 1.1: Create `src/pages/programs/ProgramPage.tsx` as a shared template component that all three program pages (Residential, PHP, IOP) will use. This component accepts a `ProgramPageData` object as a prop and renders the full program page layout
  - [x] 1.2: Use `export default function ProgramPage({ program }: ProgramPageProps)` — named function, default export
  - [x] 1.3: Define `ProgramPageProps` interface: `{ program: ProgramPageData }`
  - [x] 1.4: ProgramPage renders these sections in order:
    1. **Hero/Header section:** Program label, title (h1), overview paragraph, duration badge, stat badge (if present)
    2. **Approach section:** Heading (h2), approach description, feature bullet list with `IconCheck` icons
    3. **Daily Schedule section:** Heading (h2), `TimelineRow` components for each schedule entry
    4. **Therapy Modalities section:** Heading (h2), grid of therapy cards showing name, short description, and link
    5. **FAQ section:** Heading (h2), `FaqItem` accordion components
    6. **Related Content section:** Links to related conditions, other programs, insurance, and admissions
  - [x] 1.5: ProgramPage does NOT render Nav, Footer, TrustBadges, or CtaBand — PageLayout handles those

- [x] **Task 2: Implement the program hero/header section** (AC: #1)
  - [x] 2.1: Render the program label as a section label (`<span>` with uppercase styling per existing `.section-label` pattern)
  - [x] 2.2: Render the program title as `<h1>` with display font styling (`fontFamily: 'var(--font-display)'`)
  - [x] 2.3: Render the overview paragraph
  - [x] 2.4: Render duration and stat as badge-style elements (e.g., pill-shaped inline-blocks)
  - [x] 2.5: Render the target audience description
  - [x] 2.6: Add scroll animations: `CharReveal` or `AnimateIn` on the heading, `AnimateIn blurUp` on the body text. Respect `prefers-reduced-motion`

- [x] **Task 3: Implement the approach & features section** (AC: #1)
  - [x] 3.1: Render the approach text as a paragraph below an `<h2>` heading
  - [x] 3.2: Render features as a `StaggerGroup` / `StaggerItem` list with `IconCheck` icons — same pattern as the mockup's program features
  - [x] 3.3: Include the stat callout (e.g., "4:1 staff-to-client ratio") as a visually distinct element

- [x] **Task 4: Implement the daily schedule section** (AC: #2)
  - [x] 4.1: Render each `DailyScheduleEntry` using the `TimelineRow` component — same pattern as the mockup's daily schedule section
  - [x] 4.2: Wrap in a glassmorphic container (`background: rgba(255,255,255,0.85)`, `backdrop-filter: blur(24px)`, `border-radius: var(--radius-lg)`) — matching the mockup pattern
  - [x] 4.3: Add `<h2>` heading: "A Day in Treatment" (for Residential) or similar per program
  - [x] 4.4: Add `AnimateIn slideUp` wrapper for scroll-triggered entrance

- [x] **Task 5: Implement the therapy modalities section** (AC: #3)
  - [x] 5.1: Import `therapyBySlug` from `src/data/therapies.ts`
  - [x] 5.2: For each therapy slug in `program.therapyModalities`, look up the full `TherapyModality` object from `therapyBySlug`
  - [x] 5.3: Render therapy cards in a responsive grid: each card shows the therapy name, a brief description, and the `howItHelps` text
  - [x] 5.4: Cards should use the `.bento-card` class or similar existing pattern
  - [x] 5.5: Add `StaggerGroup` / `StaggerItem` animation on the therapy cards

- [x] **Task 6: Implement the FAQ accordion section with FAQPage JSON-LD** (AC: #4)
  - [x] 6.1: Render `program.faqs` using the `FaqItem` component with accordion behavior (`useState` for openFaq index)
  - [x] 6.2: Add `<h2>` heading: "Frequently Asked Questions" or "Common Questions About [Program Name]"
  - [x] 6.3: Generate FAQPage JSON-LD from the FAQ entries using `generateFAQPage` from `utils/schema.ts` (Story 1.8)
  - [x] 6.4: Render the FAQPage JSON-LD as a `<script type="application/ld+json">` element
  - [x] 6.5: Wrap in the glassmorphic container pattern matching the homepage FAQ section

- [x] **Task 7: Implement the related content / internal links section** (AC: #5)
  - [x] 7.1: Render a "Related Conditions" section with links to condition pages using `program.relatedConditions` slugs — each links to `/conditions/${slug}`. If condition pages don't exist yet (Epic 4), render as text with a `// TODO` comment
  - [x] 7.2: Render a "Related Programs" section with links to the other two programs: e.g., Residential page links to PHP and IOP
  - [x] 7.3: Render links to Insurance hub (`/insurance`) and Admissions (`/admissions`) with CTA-style messaging (e.g., "Verify your insurance coverage" → `/insurance`, "Ready to take the next step?" → `/admissions`)
  - [x] 7.4: All internal links use `<Link>` from React Router
  - [x] 7.5: Include a phone CTA in the related content area for immediate conversion

- [x] **Task 8: Create `src/pages/programs/Residential.tsx` using the template** (AC: #1, #6)
  - [x] 8.1: Create `src/pages/programs/Residential.tsx`
  - [x] 8.2: Import `residentialProgram` from `src/data/programs.ts`
  - [x] 8.3: Import `ProgramPage` from `./ProgramPage`
  - [x] 8.4: Component simply renders `<ProgramPage program={residentialProgram} />`
  - [x] 8.5: Export a `meta` function using `generateMeta` from `utils/meta.ts` with the residential program's `metaTitle` and `metaDescription`
  - [x] 8.6: Export a `handle` (or equivalent React Router v7 mechanism) for breadcrumb data: `{ breadcrumb: 'Residential Treatment' }`

- [x] **Task 9: Add MedicalTherapy JSON-LD** (AC: #4)
  - [x] 9.1: In addition to FAQPage JSON-LD, generate a MedicalTherapy (or MedicalProcedure) JSON-LD for the program using `utils/schema.ts`
  - [x] 9.2: Include: therapy type, provider (Silver State), conditions treated, description
  - [x] 9.3: Render as a separate `<script type="application/ld+json">` element

- [x] **Task 10: Register the route** (AC: #6)
  - [x] 10.1: Ensure `/programs/residential-treatment` is registered in `src/routes.ts` pointing to `pages/programs/Residential.tsx`
  - [x] 10.2: If routes.ts already has a placeholder or pattern, fill in the correct component path

- [x] **Task 11: Responsive design** (AC: #7)
  - [x] 11.1: Program header: text scales via `clamp()` typography, no overflow at 320px
  - [x] 11.2: Feature list: single column on mobile, can be multi-column on desktop
  - [x] 11.3: Daily schedule: full-width on mobile with adequate touch targets on timeline items
  - [x] 11.4: Therapy grid: 1 column on mobile, 2-3 columns on desktop
  - [x] 11.5: FAQ: full-width accordion items with 44px minimum touch targets on mobile
  - [x] 11.6: All touch targets (links, FAQ toggles, CTA buttons) meet 44x44px on mobile (FR42)
  - [x] 11.7: No horizontal scrolling at any viewport (FR43)

- [x] **Task 12: Accessibility** (AC: #7)
  - [x] 12.1: Heading hierarchy: one `<h1>` (program title), `<h2>` for each section, `<h3>` for subsections
  - [x] 12.2: FAQ items: `<button>` for toggle with `aria-expanded`, content region with `aria-hidden` when collapsed
  - [x] 12.3: All internal links are `<Link>` (keyboard accessible), all CTAs are `<a>` or `<button>`
  - [x] 12.4: All images have descriptive `alt` text or `alt=""` for decorative
  - [x] 12.5: Focus styles via global `:focus-visible` rules apply to all interactive elements
  - [x] 12.6: Screen reader support: semantic sections with proper landmark roles where appropriate

- [x] **Task 13: Verify breadcrumb handle exports and clinical reviewer display** (AC: #1, #7)
  - [x] 13.1: **Breadcrumb Handle Export:** Each program page wrapper must export a `handle` object for breadcrumb rendering by PageLayout's Breadcrumb component. Example:
    ```ts
    export const handle = {
      breadcrumb: { label: 'Residential Treatment', parent: '/programs' }
    }
    ```
    Verify this export is present in the residential page wrapper and template pattern.
  - [x] 13.2: **Clinical Reviewer:** Each program page should display the clinical reviewer attribution (from `data/common.ts` or the data file) per FR15. Include reviewer name, credentials, and 'Clinically Reviewed by' label.

- [x] **Task 14: Verify compilation and rendering** (AC: all)
  - [x] 14.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 14.2: Run `npm run dev` — navigate to `/programs/residential-treatment`, verify full page renders
  - [x] 14.3: Verify breadcrumb shows: Home > Programs > Residential Treatment
  - [x] 14.4: Verify FAQ accordion opens/closes correctly
  - [x] 14.5: Verify JSON-LD is present in page source (FAQPage + MedicalTherapy)
  - [x] 14.6: Verify page title and meta description
  - [x] 14.7: Verify keyboard navigation through all interactive elements
  - [x] 14.8: Verify at 320px, 768px, and 1024px viewports

## Dev Notes

### Critical Context

**The ProgramPage template is the key deliverable.** It is used by all three program pages (Residential, PHP, IOP). Building it well in this story means Stories 3.3 (PHP and IOP) become simple one-file wrappers that pass different data to the same template.

**There is no direct equivalent in the mockup.** The mockup has a homepage that includes program sections, but there are no dedicated program page components. The program page is a new build informed by the program data from `data/programs.ts` and the visual patterns already established in the homepage (timeline, feature lists, animations).

**Reuse existing components heavily:**
- `TimelineRow` — for the daily schedule
- `FaqItem` — for the FAQ accordion
- `AnimateIn`, `CharReveal`, `TextReveal`, `StaggerGroup`, `StaggerItem` — for animations
- `IconCheck`, `IconPhone` — for feature lists and CTAs
- `MagneticButton` — for the phone CTA
- `StatBlock` — potentially for the stat/duration badges

**PageLayout handles the shell.** The program page only renders its own content within `<main>`. Nav, Footer, TrustBadges, CtaBand, and Breadcrumb come from PageLayout. The breadcrumb trail should show: Home > Programs > Residential Treatment.

### Architecture Compliance

- **Component pattern:** `export default function Residential()` in the page file, `export default function ProgramPage()` in the template
- **Styling:** CSS tokens + inline styles. No CSS modules. Reuse existing CSS utility classes (`.bento-card`, `.wrap`, `.section-heading`)
- **Data flow:** `data/programs.ts` → `pages/programs/Residential.tsx` → `pages/programs/ProgramPage.tsx` → components
- **SEO:** `meta` export on the page file using `utils/meta.ts` helper
- **JSON-LD:** Generated from data using `utils/schema.ts` generators
- **Routing:** `/programs/residential-treatment` → `pages/programs/Residential.tsx`
- **Internal links:** `<Link>` from React Router for all same-site navigation
- **No barrel files in components:** Import directly from component files

### Dependencies

| Direction | Story | What |
|-----------|-------|------|
| Depends on | 3.1 | `data/programs.ts` (residentialProgram), `data/therapies.ts` (therapyBySlug) |
| Depends on | 1.7 | PageLayout wrapping the page |
| Depends on | 1.8 | `utils/schema.ts` (JSON-LD generators), `utils/meta.ts` (metadata helper) |
| Depends on | 1.6 | Breadcrumb component (renders in PageLayout) |
| Depends on | 1.1 | Migrated components (TimelineRow, FaqItem, AnimateIn, etc.) |
| Produces for | 3.3 | `ProgramPage.tsx` template reused by PHP and IOP pages |
| Produces for | 4.x | Condition pages link back to program pages |
| Produces for | 2.2 | Homepage program section links to this page |

### Anti-Patterns to AVOID

1. **DO NOT** hardcode program content in ProgramPage.tsx — all content comes from the `program` prop which originates from data files
2. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand — PageLayout handles these
3. **DO NOT** create separate template components for each program — one ProgramPage template serves all three
4. **DO NOT** use `<a href>` for internal links — use `<Link>` from React Router
5. **DO NOT** skip the FAQ JSON-LD — every FAQ section needs FAQPage structured data
6. **DO NOT** forget the `meta` export on Residential.tsx — every page needs SEO metadata
7. **DO NOT** hardcode the breadcrumb trail — it should be generated from the route structure
8. **DO NOT** use `--muted` for essential text below 18px
9. **DO NOT** skip heading hierarchy — h1 → h2 → h3, never skipping levels
10. **DO NOT** use CSS modules, Tailwind, or styled-components
11. **DO NOT** create barrel files in `src/components/` or `src/pages/`
12. **DO NOT** import from the old `../data/content` path — use `../data/programs` and `../data/therapies`
13. **DO NOT** forget `loading="lazy"` on below-fold images
14. **DO NOT** forget touch targets (44px minimum) on FAQ toggles and internal links on mobile

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] — page file structure, pages grouped by content area
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens + inline styles, responsive patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/programs/residential-treatment`
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] — heading hierarchy, semantic HTML, keyboard, ARIA
- [Source: _bmad-output/planning-artifacts/architecture.md#Pre-rendering-and-SEO] — meta export, JSON-LD generation
- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.2] — acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR1] — program page with structure, approach, duration
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] — evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR4] — daily schedule
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] — FAQ sections with FAQPage JSON-LD
- [Source: mockups/silverstate-react/src/pages/WarmImmersive.tsx] — visual patterns for schedule, features, animations
- [Source: mockups/silverstate-react/src/data/content.ts] — source content for residential data

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (claude-opus-4-6)

### Debug Log References

- Senior review (2026-02-25): fixed missing therapy-card links (task marked complete but links were not rendered)
- Senior review (2026-02-25): removed duplicate JSON-LD emission by de-duplicating schema generation between page wrappers and template
- Senior review (2026-02-25): enforced 44px minimum touch target on primary conversion CTAs in program pages

### Completion Notes List

- **COMPLETE — All 14 tasks implemented and verified**
- Created `src/pages/programs/ProgramPage.tsx` — shared template with 7 sections: Hero, Approach & Features, Daily Schedule, Therapy Modalities, FAQ Accordion, Related Content/CTAs, Clinical Reviewer
- Updated `src/pages/programs/Residential.tsx` — wrapper with meta tags useEffect, handle export, passes residentialProgram to ProgramPage
- Both FAQPage and MedicalTherapy JSON-LD generated and rendered as separate `<script type="application/ld+json">` elements
- All animations: CharReveal on headings, AnimateIn blurUp on body, StaggerGroup on features/therapies, slideUp on glass containers
- FaqItem controlled via useState, matching Home.tsx pattern
- Glass containers matching homepage pattern (rgba white, blur(24px), border) with 20px horizontal padding for mobile fit
- Therapy cards use bento-card class, show name + description + howItHelps + a related condition link
- Related content: related programs, related conditions, insurance/admissions CTAs with phone CTA
- Clinical reviewer attribution displayed at bottom ("Clinically Reviewed by Dr. Russ Park, DNP")
- 44px touch targets on all interactive links
- Route `/programs/residential-treatment` registered in routes.tsx
- Breadcrumb correctly displays Home > Programs > Residential Treatment via URL segment labels
- Handle export present: `{ breadcrumb: { label: 'Residential Treatment', parent: '/programs' } }`
- Meta export generates title, description, canonical, OG tags, and Twitter cards; JSON-LD is emitted once by `ProgramPage` to avoid duplication
- **Responsive fixes (Session 2):** Reduced therapy grid minmax from 300px to 260px to prevent overflow at 320px viewport; reduced glass container padding from 32px to 20px horizontal for better mobile fit
- **Accessibility fixes (Session 2):** Added `role="region"` and `aria-hidden={!isOpen}` to FaqItem content region; fixed nested `<a>` tag in MagneticButton (changed from `as="a"` to default `as="div"`)
- Heading hierarchy verified: h1 (program title) → h2 (section headings) → h3 (subsections) — no skipped levels
- TypeScript compiles clean, Vite builds, and targeted Story 3.2 regression tests pass with zero regressions observed
- Senior review regression checks (2026-02-25): `npx tsc --noEmit`, `npm run lint`, `npm run test -- src/pages/programs/ProgramPage.test.tsx`, `npm run format:check`, and `npm run build` all pass

### File List

- `src/pages/programs/ProgramPage.tsx` (created) — Shared program page template component
- `src/pages/programs/Residential.tsx` (modified) — Residential page wrapper with SEO meta, JSON-LD, handle export
- `src/components/FaqItem.tsx` (modified) — Added role="region" and aria-hidden to collapsible content
- `src/pages/programs/PHP.tsx` (modified) — Removed duplicate wrapper-level JSON-LD generation (de-duplicated with ProgramPage template)
- `src/pages/programs/IOP.tsx` (modified) — Removed duplicate wrapper-level JSON-LD generation (de-duplicated with ProgramPage template)
- `src/pages/programs/ProgramPage.test.tsx` (created) — Added Story 3.2 review regression tests for therapy links, JSON-LD scripts, touch targets, and non-duplicated route meta JSON-LD

## Change Log

- **2026-02-24:** Story 3.2 complete — ProgramPage template and Residential page implemented with all 7 sections, dual JSON-LD (FAQPage + MedicalTherapy), responsive grids, accessibility improvements (FaqItem aria-hidden), and mobile-safe padding
- **2026-02-25:** Senior code review completed — fixed missing therapy links, removed duplicate JSON-LD generation across template/wrappers, enforced 44px CTA touch targets, and added focused regression tests.

### Senior Developer Review (AI)

**Reviewer:** Silver  
**Date:** 2026-02-25  
**Outcome:** Approved (all high/medium findings fixed)

**Findings**

1. **HIGH:** Task 5.3 was marked complete, but therapy cards had no links (`src/pages/programs/ProgramPage.tsx`)
2. **MEDIUM:** JSON-LD emitted twice per program page (wrapper meta `jsonLd` + template `<script>` output), creating duplicate schema entries (`src/pages/programs/Residential.tsx`, `src/pages/programs/PHP.tsx`, `src/pages/programs/IOP.tsx`, `src/pages/programs/ProgramPage.tsx`)
3. **MEDIUM:** Primary conversion CTAs did not explicitly enforce 44px minimum touch target for FR42 (`src/pages/programs/ProgramPage.tsx`)

**Fixes Applied**

- Added therapy-card condition links in `ProgramPage` using `therapy.usedFor` and program condition context.
- Removed wrapper-level JSON-LD generation from program wrappers; JSON-LD is now emitted once by the shared template.
- Added explicit `minHeight: 44` styling to insurance, admissions, and phone CTAs in the related-content card.
- Added targeted regression tests covering links, schema presence, touch targets, and wrapper meta de-duplication behavior.
