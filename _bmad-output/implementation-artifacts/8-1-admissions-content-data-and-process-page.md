# Story 8.1: Admissions Content Data & Process Page

Status: ready-for-dev

## Story

As a **parent ready to take the next step**,
I want a clear, step-by-step admissions page,
So that I know exactly what to expect when I call and what the process looks like.

**Dependencies:** Story 1.1 (production project), Story 1.2 (shared data types — `AdmissionStep`, `FaqEntry` in `types.ts`, `site` in `data/common.ts`), Story 1.7 (PageLayout wrapper), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5, FR6, FR17, FR19, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** the data architecture from Epic 1, **When** the admissions data file is created, **Then** `src/data/admissions.ts` exports typed admissions process steps using the `AdmissionStep` interface from `types.ts` and FAQ entries using the `FaqEntry` interface from `types.ts`
2. **Given** a user navigates to `/admissions`, **When** the Admissions page renders, **Then** it displays a clear, numbered step-by-step admissions process (FR19)
3. **And** each step describes what happens: initial call, insurance verification, assessment, admission (FR19)
4. **And** an FAQ section answers common admissions questions with FAQPage JSON-LD structured data (FR6, FR35)
5. **And** a prominent phone CTA with 24/7 messaging drives conversion (FR17)
6. **And** internal links connect to insurance hub, program pages, and contact page (FR5)
7. **And** the page has unique SEO metadata (title, description, canonical URL) and OG tags (FR36, FR40)
8. **And** the page uses PageLayout and is fully responsive and accessible across 320px, 768px, and 1024px+ viewports

## Tasks / Subtasks

- [ ] **Task 1: Create `src/data/admissions.ts` — typed content data** (AC: #1)
  - [ ] 1.1: Import `AdmissionStep` and `FaqEntry` from `../types`. Uses `AdmissionStep` (singular) — matching the existing interface name in `types.ts` from the mockup. Do NOT create an alias or use `AdmissionsStep`.
  - [ ] 1.2: Export `admissionsSteps: AdmissionStep[]` — a typed array of 4 admissions process steps:
    - Step 1: "Initial Call" — what happens when a family calls (725) 525-9897, what to expect, staff who answer, 24/7 availability
    - Step 2: "Insurance Verification" — Silver State verifies coverage, contacts the insurance provider, explains benefits within ~10 minutes
    - Step 3: "Clinical Assessment" — licensed clinician conducts a phone assessment to determine the appropriate level of care (Residential, PHP, IOP)
    - Step 4: "Admission" — scheduling, what to bring, what the first day looks like, family orientation
  - [ ] 1.3: Each step must include at minimum: `title: string`, `desc: string` (the existing `AdmissionStep` interface uses `desc`, not `description` — this is grandfathered). Verify the actual `AdmissionStep` interface shape from `types.ts` and match it exactly
  - [ ] 1.4: Export `admissionsFaqs: FaqEntry[]` — a typed array of 6-8 FAQ entries covering common admissions questions:
    - "How long does the admissions process take?"
    - "What insurance do you accept?"
    - "What should my teen bring?"
    - "Can I visit my teen during treatment?"
    - "What if my teen doesn't want to go?"
    - "Do you offer transportation assistance?"
    - "What ages do you treat?"
    - "What happens after residential treatment?"
  - [ ] 1.5: Export `admissionsPageMeta` object with `title`, `description`, and `ogImage` for SEO metadata generation
  - [ ] 1.6: All exports must have explicit type annotations — never `export const admissionsSteps = [...]` without the type
  - [ ] 1.7: Add re-export of admissions data to `src/data/index.ts` barrel file

- [ ] **Task 2: Create Admissions page at `src/pages/admissions/Process.tsx`** (AC: #2, #3, #5, #6, #8)
  - [ ] 2.1: Create the file at `src/pages/admissions/Process.tsx` following the Architecture directory structure
  - [ ] 2.2: Use `export default function Process()` — not arrow function export
  - [ ] 2.3: Import `admissionsSteps` and `admissionsFaqs` from `../../data/admissions`
  - [ ] 2.4: Import `site` from `../../data/common` for phone number — never hardcode
  - [ ] 2.5: Import PageLayout wrapper or ensure the route config wraps this page in PageLayout (depends on how Story 1.7 implements layout wrapping — if PageLayout is a route-level wrapper in `routes.ts`, the page does not import it directly)
  - [ ] 2.6: Render a page title as `<h1>` — e.g., "Admissions Process" or "How to Get Started"
  - [ ] 2.7: Render the step-by-step process section with numbered steps. Each step should display: step number, step title, and step description. Use the existing `StepCard` component if its props match, or render a custom numbered list section. Semantic HTML: use an `<ol>` for the ordered process or `<section>` elements with clear visual numbering
  - [ ] 2.8: Render the FAQ section using `FaqItem` component (from `src/components/FaqItem.tsx`) for each FAQ entry. Wrap in an FAQ section with an `<h2>` heading
  - [ ] 2.9: Render a prominent phone CTA section with 24/7 messaging — e.g., "Ready to take the first step? Our admissions team is available 24/7." with a large `<a href={site.phoneTel}>` button using the `.btn` class
  - [ ] 2.10: Render internal links section connecting to:
    - Insurance hub: `/insurance` — "Check if your insurance is accepted"
    - Programs: `/programs/residential-treatment` — "Learn about our treatment programs"
    - Contact: `/contact` — "Send us a message"
  - [ ] 2.11: Use `<Link to="...">` from React Router for all internal navigation links — never `<a href>` for internal routes

- [ ] **Task 3: Implement SEO metadata and JSON-LD** (AC: #4, #7)
  - [ ] 3.1: Use `generateMeta()` from `utils/meta.ts` to produce the route `meta` export with title (e.g., "Admissions Process | Silver State Adolescent Treatment Center"), description, canonical URL (`/admissions`), and OG tags
  - [ ] 3.2: Use `generateFAQPage()` from `utils/schema.ts` to produce FAQPage JSON-LD from `admissionsFaqs`
  - [ ] 3.3: Include the JSON-LD in the page's `<head>` via the route `meta` export or a `<script type="application/ld+json">` tag in the component body
  - [ ] 3.4: Verify the FAQPage JSON-LD includes all FAQ question/answer pairs

- [ ] **Task 4: Ensure route is configured** (AC: #2)
  - [ ] 4.1: Verify `/admissions` route exists in `src/routes.ts` and maps to `pages/admissions/Process.tsx`
  - [ ] 4.2: If the route does not exist, add it following the existing route pattern in `routes.ts`

- [ ] **Task 5: Responsive layout and accessibility** (AC: #8)
  - [ ] 5.1: Use `.wrap` container for max-width centering (1200px)
  - [ ] 5.2: On mobile (< 900px), all content stacks vertically in a single column
  - [ ] 5.3: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings (Process Steps, FAQ, Contact), `<h3>` for individual step titles if needed
  - [ ] 5.4: All interactive elements (links, phone CTA) have visible focus indicators via global `:focus-visible` styles
  - [ ] 5.5: Phone CTA touch target meets 44x44px minimum on mobile
  - [ ] 5.6: All colors use CSS tokens — `var(--blue)`, `var(--text)`, `var(--body)`, `var(--cream)`, etc.
  - [ ] 5.7: No horizontal scrolling at any viewport width (FR43)

- [ ] **Task 6: Verify compilation and rendering** (AC: all)
  - [ ] 6.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 6.2: Run `npm run dev` — navigate to `/admissions`, page renders correctly
  - [ ] 6.3: Verify all 4 steps display with correct content
  - [ ] 6.4: Verify FAQ section renders and items expand/collapse
  - [ ] 6.5: Verify phone CTA is visible and links correctly
  - [ ] 6.6: Verify internal links navigate to correct routes
  - [ ] 6.7: Check at 320px, 768px, and 1024px viewports — no overflow, all content visible

## Dev Notes

### Critical Context

**What exists:** The `AdmissionStep` (aliased from `AdmissionStep`) and `FaqEntry` interfaces are defined in `types.ts` by Story 1.2. The `FaqItem` component exists in `src/components/FaqItem.tsx` for rendering expandable FAQ entries. The `StepCard` component exists in `src/components/StepCard.tsx` and may be suitable for rendering process steps. The `site` object in `data/common.ts` provides `site.phone` and `site.phoneTel`. SEO utilities (`utils/meta.ts`, `utils/schema.ts`) provide JSON-LD and metadata generation.

**What to build:** Two new files — `src/data/admissions.ts` (content data) and `src/pages/admissions/Process.tsx` (page component). Plus a route entry if not already configured.

**Content tone:** This is a healthcare admissions page for families in crisis. The tone must be warm, reassuring, and action-oriented. No clinical jargon. Use "your teen" not "the patient." Emphasize that calling is the first step and that the process is simple and supportive.

**The `AdmissionStep` interface shape:** The existing interface from the mockup uses `desc` (not `description`) — this is a grandfathered abbreviation. Check the exact fields in `types.ts` before creating data. The interface likely has: `title: string`, `desc: string`, and possibly an icon or number field.

### Architecture Compliance

- **Component export:** `export default function Process()` — named function, default export
- **Styling:** CSS tokens + inline styles only. No CSS modules, no Tailwind, no styled-components
- **Data pattern:** Named exports with explicit type annotations in `data/admissions.ts`
- **Phone numbers:** Always use `site.phoneTel` and `site.phone` from `data/common.ts` — never hardcode `(725) 525-9897` or `tel:7255259897`
- **Internal links:** Use `<Link to="...">` from React Router — never `<a href>` for same-site navigation
- **Barrel file:** Only `data/index.ts` may be a barrel file. Do NOT create `pages/admissions/index.ts`
- **900px breakpoint:** Single mobile breakpoint, use `useIsMobile()` hook if conditional rendering is needed
- **PageLayout:** The page is wrapped by PageLayout at the route level — do not import or render Nav, Footer, TrustBadges, CtaBand, or Breadcrumb inside the page component. These are handled by PageLayout
- **JSON-LD:** Use `generateFAQPage()` from `utils/schema.ts` — do not hand-write JSON-LD objects

### Dependencies

**Depends on (must be completed first):**
- Story 1.1: Production project initialized
- Story 1.2: `types.ts` with `AdmissionStep` and `FaqEntry` interfaces, `data/common.ts` with `site` object
- Story 1.7: PageLayout wrapper renders Nav, Breadcrumb, TrustBadges, CtaBand, Footer
- Story 1.8: `utils/meta.ts` (generateMeta), `utils/schema.ts` (generateFAQPage), `routes.ts`
- Story 1.6: Breadcrumb component (renders automatically via PageLayout for interior pages)

**Produces for later stories:**
- Story 8.2 (Contact Page) — the admissions page links to `/contact`
- Story 9.1 (Cookie Consent & GA4) — the admissions page is a Zone 1 (informational) page that gets GA4 analytics
- Story 9.2 (CTM Integration) — the phone CTA on this page will get CTM dynamic number insertion

### Anti-Patterns to AVOID

1. **DO NOT** hardcode the phone number — always import from `data/common.ts`
2. **DO NOT** render Nav, Footer, TrustBadges, CtaBand, or Breadcrumb inside the page — PageLayout handles these
3. **DO NOT** use arrow function default export — use `export default function Process()`
4. **DO NOT** use CSS modules, Tailwind, or styled-components — inline styles + CSS tokens only
5. **DO NOT** create a barrel file at `pages/admissions/index.ts` — import the page directly
6. **DO NOT** use `<a href="/insurance">` for internal links — use `<Link to="/insurance">` from React Router
7. **DO NOT** use `--muted` color for essential text below 18px — use `var(--body)` instead
8. **DO NOT** skip type annotations on data exports — `export const admissionsSteps: AdmissionStep[] = [...]`
9. **DO NOT** hand-write JSON-LD — use the generator functions from `utils/schema.ts`
10. **DO NOT** collect any health information on this page — admissions is informational only
11. **DO NOT** create the FAQ content without the `FaqEntry` type — it uses `q` and `a` fields (not `question`/`answer`)
12. **DO NOT** use `<div onClick>` for any interactive element — use `<a>` for links and `<button>` for actions

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations, barrel file policy
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles, 900px breakpoint
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/admissions` route
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure] — `src/pages/admissions/Process.tsx`, `src/data/admissions.ts`
- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.1] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] — internal links on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] — FAQ sections with JSON-LD
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] — phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR19] — step-by-step admissions process
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
