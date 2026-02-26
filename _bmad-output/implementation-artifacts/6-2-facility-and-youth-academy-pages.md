# Story 6.2: Facility & Youth Academy Pages

Status: done

## Story

As a **parent wanting to see the environment**,
I want facility and academy detail pages,
So that I understand the physical environment and academic continuity my teen will experience.

**Dependencies:** Story 6.1 (`data/about.ts` with `facilityData`, `youthAcademyData`, `clinicalReviewer` exports), Story 1.7 (PageLayout), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5, FR14, FR15, FR24, FR28, FR35, FR36, FR40

> **FR15 (clinical reviewer attribution):** Both the Facility and Youth Academy pages display the clinical reviewer per the `clinicalReviewer` data from `about.ts`.

## Acceptance Criteria

1. **Given** about data from Story 6.1, **When** a user navigates to `/about/facility`, **Then** the Facility page describes the treatment environment, location, and amenities (FR14, FR24)
2. **And** the Youth Academy page at `/about/youth-academy` describes Silver State's on-site accredited academics program (FR14)
3. **And** both pages include images with descriptive alt text (FR28)
4. **And** internal links connect to programs, admissions, and team page (FR5)
5. **And** both pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)
6. **And** both pages are fully responsive and accessible (FR26-30, FR41-43)

## Tasks / Subtasks

- [x] **Task 1: Create the Facility page at src/pages/about/Facility.tsx** (AC: #1, #3, #4, #6)
  - [x] 1.1: Create `src/pages/about/Facility.tsx` with `export default function Facility()`
  - [x] 1.2: Import `facilityData`, `clinicalReviewer` from `../../data/about`
  - [x] 1.3: Import `site` from `../../data/common` for address and contact details
  - [x] 1.4: Render a page header section with `<h1>` containing the facility title (e.g., "Our Facility") with a subheading describing the treatment environment
  - [x] 1.5: Render Silver State's address and facility details prominently (FR24): `site.address` ("8225 W Robindale Rd, Las Vegas, NV 89113"), phone number via `site.phone`/`site.phoneTel`, hours/availability info
  - [x] 1.6: Render the facility description from `facilityData.description` — covering the physical environment, therapeutic spaces, living areas, outdoor spaces, and safety features
  - [x] 1.7: Render facility features list from `facilityData.features` — items like: safe therapeutic environment, comfortable living spaces, recreation areas, outdoor courtyard, commercial kitchen for nutritious meals, on-site classrooms, etc.
  - [x] 1.8: Render facility images from `facilityData.images` array — each image must have descriptive `alt` text from the data (FR28). Example alt: "Silver State residential living area with comfortable seating", "Outdoor therapeutic courtyard at Silver State". Use `loading="lazy"` on all images below the fold
  - [x] 1.9: Include key differentiator callout relevant to facility: 4:1 staff-to-client ratio, 24/7 clinical support, Joint Commission Gold Seal accredited environment
  - [x] 1.10: Render internal links section (FR5) with `<Link>` components:
    - "Explore Our Programs" → `/programs/residential-treatment`
    - "Meet Our Team" → `/about/our-team`
    - "Youth Academy" → `/about/youth-academy`
    - "Start Admissions" → `/admissions`
  - [x] 1.11: Include a phone CTA within page content: "Schedule a facility tour — call (725) 525-9897" using `site.phoneTel`
  - [x] 1.12: Render clinical reviewer attribution at page bottom: "Page reviewed by {clinicalReviewer.name}, {clinicalReviewer.credentials}" (FR15)

- [x] **Task 2: Create the Youth Academy page at src/pages/about/YouthAcademy.tsx** (AC: #2, #3, #4, #6)
  - [x] 2.1: Create `src/pages/about/YouthAcademy.tsx` with `export default function YouthAcademy()`
  - [x] 2.2: Import `youthAcademyData`, `clinicalReviewer` from `../../data/about`
  - [x] 2.3: Import `site` from `../../data/common`
  - [x] 2.4: Render a page header section with `<h1>` containing the academy title (e.g., "Silver State Youth Academy") with a subheading about academic continuity during treatment
  - [x] 2.5: Render the academy description from `youthAcademyData.description` — covering: accredited academics, how credits transfer, small class sizes, individualized learning plans, certified teachers, subjects covered, college prep support
  - [x] 2.6: Render academy features list from `youthAcademyData.features` — items like: fully accredited program, credits transfer to home school, small class sizes (typically 6-8 students), individualized learning plans, certified Nevada teachers, core academics (math, science, English, social studies), college prep support, GED preparation available
  - [x] 2.7: Render academy images from `youthAcademyData.images` array — each with descriptive `alt` text (FR28). Example alt: "Silver State Youth Academy classroom with small group instruction", "Student workspace in Silver State's on-site academic program". Use `loading="lazy"`
  - [x] 2.8: Highlight key differentiator: on-site accredited academics as a unique benefit — many treatment centers disrupt academic progress, Silver State maintains it
  - [x] 2.9: Render internal links section (FR5) with `<Link>` components:
    - "Explore Our Programs" → `/programs/residential-treatment`
    - "Meet Our Team" → `/about/our-team`
    - "See Our Facility" → `/about/facility`
    - "Start Admissions" → `/admissions`
  - [x] 2.10: Include a phone CTA within page content: "Questions about academics during treatment? Call (725) 525-9897" using `site.phoneTel`
  - [x] 2.11: Render clinical reviewer attribution at page bottom (FR15)

- [x] **Task 3: Implement JSON-LD structured data for both pages** (AC: #5)
  - [x] 3.1: Facility page — generate `MedicalOrganization` or `LocalBusiness` JSON-LD including:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Silver State Adolescent Treatment Center",
      "description": "Adolescent mental health and substance abuse treatment facility...",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8225 W Robindale Rd",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89113"
      },
      "telephone": "(725) 525-9897",
      "medicalSpecialty": "Psychiatry",
      "availableService": ["Residential Treatment", "Partial Hospitalization", "Intensive Outpatient"]
    }
    ```
  - [x] 3.2: Youth Academy page — generate `EducationalOrganization` JSON-LD including:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Silver State Youth Academy",
      "description": "On-site accredited academic program within Silver State Adolescent Treatment Center...",
      "parentOrganization": {
        "@type": "MedicalOrganization",
        "name": "Silver State Adolescent Treatment Center"
      },
      "address": { ... }
    }
    ```
  - [x] 3.3: Use `utils/schema.ts` generators from Story 1.8. If specific generators for these types don't exist yet, use the `generateLocalBusinessSchema` or create appropriately-shaped JSON-LD objects inline with a `// TODO: move to utils/schema.ts` comment

- [x] **Task 4: SEO metadata and OG tags for both pages** (AC: #5)
  - [x] 4.1: Facility page route `meta` export:
    - Title: `"Our Facility | Silver State Adolescent Treatment Center"`
    - Description: `"Tour Silver State's treatment facility in Las Vegas, NV — safe therapeutic environment, comfortable living spaces, outdoor areas, and on-site academics for teens 11-17."`
    - Canonical: `https://www.silverstatetreatment.com/about/facility`
    - OG image: facility exterior or interior photo
  - [x] 4.2: Youth Academy page route `meta` export:
    - Title: `"Silver State Youth Academy | On-Site Accredited Academics"`
    - Description: `"Silver State Youth Academy provides accredited academic programming during treatment — credits transfer, certified teachers, individualized learning plans for teens 11-17."`
    - Canonical: `https://www.silverstatetreatment.com/about/youth-academy`
    - OG image: classroom or academic setting photo

- [x] **Task 5: Responsive layout and accessibility** (AC: #6)
  - [x] 5.1: Both pages: on desktop (>= 900px), images can display in a 2-column grid or alongside text in a side-by-side layout. On mobile (< 900px), single column stack with images full-width
  - [x] 5.2: Feature lists: use `<ul>` with `<li>` elements for semantic structure
  - [x] 5.3: All images must have descriptive `alt` text — never empty `alt=""` (these are informational images, not decorative)
  - [x] 5.4: Heading hierarchy per page: `<h1>` for page title, `<h2>` for sections, `<h3>` for subsections
  - [x] 5.5: All links (internal and phone CTA) must be keyboard accessible with visible `:focus-visible` indicators
  - [x] 5.6: Touch targets on phone CTA and navigation links must be >= 44x44px on mobile (FR42)
  - [x] 5.7: Use `var(--body)` for body text, `var(--text)` for headings — never `var(--muted)` for essential text below 18px
  - [x] 5.8: Verify no horizontal scrolling at 320px viewport (FR43)
  - [x] 5.9: Images should have explicit `width` and `height` attributes (or aspect-ratio CSS) to prevent CLS (NFR2)

- [x] **Task 6: Add routes for both pages** (AC: all)
  - [x] 6.1: Verify or add route entries in `src/routes.ts` for:
    - `/about/facility` → `pages/about/Facility.tsx`
    - `/about/youth-academy` → `pages/about/YouthAcademy.tsx`
  - [x] 6.2: Both routes should use PageLayout as their layout wrapper

- [x] **Task 7: Verify compilation and rendering** (AC: all)
  - [x] 7.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 7.2: Run `npm run dev` — Facility page renders at `/about/facility`, Youth Academy page renders at `/about/youth-academy`
  - [x] 7.3: Verify responsive layout at 320px, 768px, and 1024px+ for both pages
  - [x] 7.4: Verify JSON-LD is present in page source for both pages
  - [x] 7.5: Verify all images render with correct alt text
  - [x] 7.6: Verify internal links navigate correctly to target pages
  - [x] 7.7: Verify keyboard navigation through all interactive elements

## Dev Notes

### Critical Context

These two pages depend entirely on data created by Story 6.1 in `src/data/about.ts`. The `facilityData` and `youthAcademyData` exports must already exist before this story can begin.

**Existing mockup content to reference:**
- `mockups/silverstate-react/src/data/content.ts` has `YouthAcademyFeature` data and some facility-related content in various sections — use as starting point
- The existing `YouthAcademyFeature` interface in `types.ts` (`title: string; desc: string`) may be used within the `youthAcademyData.features` array or replaced by the richer `AboutPageData.features` structure from Story 6.1

**Key content points for Facility page:**
- Silver State is located at 8225 W Robindale Rd, Las Vegas, NV 89113
- The facility serves adolescents ages 11-17
- Joint Commission Gold Seal accredited facility
- 4:1 staff-to-client ratio
- 24/7 clinical support available

**Key content points for Youth Academy page:**
- Silver State Youth Academy (SNYA) — on-site accredited academic program
- Credits transfer to home school district
- Certified Nevada teachers
- Small class sizes for individualized attention
- Core academics + college prep + GED preparation
- This is a key differentiator — most treatment centers disrupt academics, Silver State maintains continuity

**Both pages should feel like they're part of the About section — consistent visual treatment with the Team page, sharing the same design language (similar heading styles, card patterns, CTA placement).**

### Architecture Compliance

- **Component export:** `export default function Facility()` and `export default function YouthAcademy()` — named functions, default exports
- **File locations:** `src/pages/about/Facility.tsx` and `src/pages/about/YouthAcademy.tsx` — matches architecture directory structure
- **Data imports:** Import from `../../data/about` and `../../data/common` — never hardcode content
- **Styling:** CSS tokens + inline styles only. No CSS modules, no Tailwind, no styled-components
- **Image paths:** Use R2 URLs from data file — `import.meta.env.VITE_R2_BASE_URL || '/assets'` fallback already in data
- **Phone numbers:** Use `site.phone` and `site.phoneTel` from `data/common.ts` — never hardcode
- **Internal links:** Use React Router `<Link to="...">` — never `<a href="...">`  for internal navigation
- **Mobile breakpoint:** 900px — use `useIsMobile()` hook for conditional rendering or CSS media queries in `<style>` block
- **No barrel files:** No `index.ts` in `src/pages/about/` — import directly from `Facility.tsx` and `YouthAcademy.tsx`
- **JSON-LD:** Use `utils/schema.ts` generators — inject via route `meta`/`handle` export pattern

### Dependencies

**Depends on (must be complete):**
- Story 6.1: `data/about.ts` with `facilityData`, `youthAcademyData`, `clinicalReviewer` exports
- Story 1.1: Production project structure
- Story 1.2: `types.ts` with `AboutPageData` interface, `data/common.ts` with `site` object
- Story 1.7: PageLayout wrapper
- Story 1.8: `utils/meta.ts`, `utils/schema.ts`, route configuration

**Produces for (later stories depend on):**
- No direct downstream dependencies — these are leaf pages. However:
  - Story 7.1/7.2 (location pages) may link to the facility page
  - Story 8.1 (admissions) may link to facility and academy pages
  - Story 2.2 (homepage) may reference facility imagery

### Anti-Patterns to AVOID

1. **DO NOT** hardcode facility or academy content in the page components — all content must come from `src/data/about.ts`
2. **DO NOT** create CSS module files — use inline styles + CSS tokens
3. **DO NOT** use arrow function exports — must be `export default function Facility()` and `export default function YouthAcademy()`
4. **DO NOT** use empty `alt=""` on facility/academy images — these are informational images requiring descriptive alt text (FR28)
5. **DO NOT** create a barrel file in `src/pages/about/`
6. **DO NOT** hardcode the phone number or address — use `site.*` from `data/common.ts`
7. **DO NOT** use `var(--muted)` for essential text below 18px
8. **DO NOT** forget `loading="lazy"` on below-fold images
9. **DO NOT** skip the JSON-LD structured data — Facility needs MedicalOrganization, Youth Academy needs EducationalOrganization
10. **DO NOT** duplicate data between the two pages — both should reference the same `clinicalReviewer` export from `about.ts`
11. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand directly — PageLayout handles all of these
12. **DO NOT** forget to add routes in `src/routes.ts` if not already present from Story 1.8
13. **DO NOT** use `<img>` tags without `width`/`height` or aspect-ratio — prevents CLS
14. **DO NOT** skip internal links — both pages must connect to programs, admissions, team, and each other (FR5)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function pattern
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/about/facility`, `/about/youth-academy`
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure] — `pages/about/Facility.tsx`, `pages/about/YouthAcademy.tsx`
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] — alt text, keyboard nav, heading hierarchy, touch targets
- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.2] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] — internal links on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR14] — key differentiators
- [Source: _bmad-output/planning-artifacts/prd.md#FR24] — address, service area, facility details
- [Source: _bmad-output/planning-artifacts/prd.md#FR28] — descriptive alt text on all images
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] — Open Graph tags
- [Source: mockups/silverstate-react/src/data/content.ts] — existing facility and academy content
- [Source: mockups/silverstate-react/src/types.ts] — existing YouthAcademyFeature interface

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- Senior review (2026-02-25): removed duplicate Facility/Youth JSON-LD emission by keeping structured data scripts in-page and removing route-level `meta.jsonLd`.
- Senior review (2026-02-25): removed manual `useEffect` head/meta mutation from both pages and aligned metadata to route `meta` exports only.
- Senior review (2026-02-25): enforced required internal links and mobile touch-target constraints in cross-navigation CTA blocks.
- Senior review (2026-02-25): converted feature sections to semantic lists and added Story 6.2 regression tests for schema/meta/link/touch-target contracts.
- Senior review (2026-02-25): fixed remaining SEO contract gaps by setting page-specific OG images and aligning Youth Academy title to the story requirement.

### Completion Notes List

- Facility page (`/about/facility`) now delivers environment/location/amenities content from `facilityData`, with descriptive image alt text, contact details, semantic feature list, reviewer attribution, and required internal links.
- Youth Academy page (`/about/youth-academy`) now delivers accredited academics continuity content from `youthAcademyData`, with descriptive image alt text, semantic feature list, reviewer attribution, and required internal links.
- Both pages now emit in-page JSON-LD only:
  - Facility: `MedicalOrganization` + `LocalBusiness`
  - Youth Academy: `EducationalOrganization`
- Both route metadata exports now provide unique canonical/OG URL pathing and page-specific OG images from page data.
- Youth Academy metadata title now matches Story 6.2 requirement: `Silver State Youth Academy | On-Site Accredited Academics`.
- Focused Story 6.2 regression tests validate:
  - JSON-LD schema presence/type
  - Required internal links
  - Semantic list rendering
  - 44px+ touch target styles on conversion CTAs
  - Route metadata contract (no route-level ld+json, canonical/og path, OG image pathing)
- Verification commands passed:
  - `npx tsc --noEmit`
  - `npx vitest run src/pages/about/FacilityYouth.test.tsx src/pages/about/Team.test.tsx src/data/about.test.ts`
  - `npm run lint`
  - `npm run format:check`

### File List

- `src/pages/about/Facility.tsx` (modified -- removed head-side effects/route JSON-LD, semantic list + required links/touch targets, page-specific OG image in route meta)
- `src/pages/about/YouthAcademy.tsx` (modified -- removed head-side effects/route JSON-LD, semantic list + required links/touch targets, page-specific OG image in route meta)
- `src/data/about.ts` (modified -- Youth Academy meta title aligned to Story 6.2 requirement)
- `src/pages/about/FacilityYouth.test.tsx` (added/updated -- Story 6.2 regression coverage for schema/link/touch-target/meta/OG image contracts)
- `_bmad-output/implementation-artifacts/6-2-facility-and-youth-academy-pages.md` (modified -- review completion record)
- `_bmad-output/implementation-artifacts/sprint-status.yaml` (modified -- story and epic status sync)

## Change Log

- 2026-02-24: Story 6.2 implementation added Facility and Youth Academy pages.
- 2026-02-25: Senior code review completed -- fixed schema/meta/link/accessibility gaps, added Story 6.2 regression tests, and finalized story.

### Senior Developer Review (AI)

**Reviewer:** Silver  
**Date:** 2026-02-25  
**Outcome:** Approved (all high and medium findings fixed)

**Findings**

1. **HIGH:** Facility and Youth routes emitted duplicate JSON-LD via route `meta` plus in-page scripts.
2. **HIGH:** Route metadata used shared default OG image instead of page-specific facility/academy images (AC #5 gap).
3. **MEDIUM:** Youth Academy route title used `"On-Site Accredited Education"` instead of required `"On-Site Accredited Academics"`.
4. **MEDIUM:** Facility/Youth pages used manual `useEffect` head/meta mutation, violating route-meta conventions.
5. **MEDIUM:** Required program links and explicit 44px touch-target enforcement were missing in cross-navigation CTAs.
6. **MEDIUM:** Story artifact remained `ready-for-dev` with empty dev record/file list and unsynced sprint status.

**Fixes Applied**

- Removed route-level JSON-LD output and retained structured data in page scripts only.
- Added page-specific `ogImage` values to both Facility and Youth `meta` exports.
- Updated Youth Academy metadata title to the exact story-required value.
- Removed manual DOM head/meta side-effects and standardized on route metadata exports.
- Added required `/programs/residential-treatment` links and explicit `minHeight` CTA constraints for mobile touch targets.
- Added/updated Story 6.2 regression tests and synchronized story/sprint status to completion.
