# Story 2.2: Homepage Content Sections

Status: review

## Story

As a **parent scrolling deeper**,
I want to see persona-specific content that reflects my child, Silver State's differentiators, and clinical credibility,
So that I build trust through specificity — not generic marketing language.

**Dependencies:** Story 2.1 (Home.tsx with hero section, `data/homepage.ts` with initial data), Story 1.2 (shared data types, `data/common.ts`), Story 1.5 (TrustBadges and CtaBand — for reference pattern, though PageLayout renders them)

**FRs covered:** FR5 (internal links to programs, conditions, insurance), FR12 (trust signals — Joint Commission, named staff), FR14 (differentiators — rating, staff ratio, LGBTQIA+, academics, continuum), FR22 (homepage branded experience), FR26-30 (accessibility cross-cutting)

## Acceptance Criteria

1. **Given** a user scrolls below the hero, **When** content sections render, **Then** persona-specific content blocks describe the teens Silver State treats — anxiety, self-medicating, trauma (FR22)
2. **And** a differentiators section displays: 4.8/5 rating, 4:1 staff ratio, LGBTQIA+ affirming, on-site academics, full continuum of care (FR14)
3. **And** trust signals include Joint Commission Gold Seal, named clinical staff (Dr. Russ Park, Arianne Smith) (FR12)
4. **And** program highlights link to Residential, PHP, IOP pages (FR5)
5. **And** scroll-triggered animations enhance engagement without degrading CLS (NFR2)
6. **And** all sections are responsive and accessible (FR41, FR26-30)

## Tasks / Subtasks

- [x] **Task 1: Extend `src/data/homepage.ts` with remaining homepage content data** (AC: #1, #2, #3, #4)
  - [x] 1.1: Add `programHighlightsData` — the three programs (Residential, PHP, IOP) with label, title, body, features list, and stat. Source from the mockup's `programs` export in `data/content.ts`. Include a `slug` field on each for linking: `'residential-treatment'`, `'php'`, `'iop'`
  - [x] 1.2: Add `conditionsOverviewData` — the three condition categories (Mental Health, Substance Abuse, Eating Disorders) with their condition lists. Source from the mockup's `conditions` export. Each condition should include a `slug` string for future linking to condition pages (e.g., `{ name: 'Anxiety', slug: 'anxiety-treatment' }`)
  - [x] 1.3: Add `therapiesOverviewData` — the list of therapy modalities. Source from the mockup's `therapies` string array
  - [x] 1.4: Add `youthAcademyData` — label, headline, body, features array, director info. Source from the mockup's `youthAcademy` export
  - [x] 1.5: Add `testimonialData` — quote, author, detail. Source from the mockup's `testimonial` export
  - [x] 1.6: Add `dailyScheduleData` as `DailyScheduleEntry[]` — time, activity, desc. Source from the mockup's `dailySchedule` export
  - [x] 1.7: Add `statsData` — the stat values displayed in the numbers strip (24/7, 11-17, 4:1, 4.8/5). Source from the mockup's `stats` array
  - [x] 1.8: Add `teamOverviewData` — clinical director attribution and team member roles for the carousel. Source from the mockup's `team` export
  - [x] 1.9: Add `insuranceOverviewData` — the insurance logos/names displayed on the homepage. Source from the mockup's `insurance` export. This is a summary list for the homepage; the full insurance data is in `data/insurance.ts` (Epic 5)
  - [x] 1.10: Add `accreditationsOverviewData` — accreditation badges for the homepage display. Source from the mockup's `accreditations` export
  - [x] 1.11: Add `familySectionData` — the "Your family is part of the treatment team" section content: heading, body text, bullet points. These are currently hardcoded in WarmImmersive.tsx and must be extracted
  - [x] 1.12: All new exports must have explicit type annotations. Define any new interfaces (e.g., `HomepageProgramHighlight`, `ConditionOverviewCategory`) in `src/types.ts`

- [x] **Task 2: Add program highlights section (scrollytelling) to Home.tsx** (AC: #4, #5, #6)
  - [x] 2.1: Port Section 3 from the mockup — the programs scrollytelling section with sticky image stack and scrolling content panels for Residential, PHP, IOP
  - [x] 2.2: Replace hardcoded program data with import from `programHighlightsData` in `src/data/homepage.ts`
  - [x] 2.3: Program labels, titles, bodies, and features come from data — not hardcoded JSX
  - [x] 2.4: Each program section must include a `<Link to={`/programs/${program.slug}`}>` that navigates to the full program page (FR5)
  - [x] 2.5: Preserve the sticky image + scrolling content pattern on desktop. On mobile (< 900px), sticky becomes static, panels get `min-height: auto`
  - [x] 2.6: Preserve the `AnimateIn`, `TextReveal`, `StaggerGroup`/`StaggerItem` animations on program content
  - [x] 2.7: All below-fold images in this section must use `loading="lazy"`

- [x] **Task 3: Add "What We Treat & Therapies" section (CardStack) to Home.tsx** (AC: #1, #5, #6)
  - [x] 3.1: Port Section 4 from the mockup — the editorial grid with stacked cards for Mental Health conditions, Substance Abuse conditions, Eating Disorders, and Therapeutic Modalities
  - [x] 3.2: Replace hardcoded conditions lists and therapies list with imports from `conditionsOverviewData` and `therapiesOverviewData`
  - [x] 3.3: Each condition name should eventually link to its condition page — for now, render as text (condition pages are Epic 4). Add a `// TODO: Link to /conditions/${slug} when Epic 4 is complete` comment
  - [x] 3.4: Preserve the `CardStack` component with stacking card animation
  - [x] 3.5: Preserve the `StaggerItem` animation on individual condition/therapy items

- [x] **Task 4: Add Youth Academy section to Home.tsx** (AC: #2, #6)
  - [x] 4.1: Port Section 4b from the mockup — the dark background section with academy content and image
  - [x] 4.2: Replace hardcoded youth academy data with import from `youthAcademyData`
  - [x] 4.3: Preserve the two-column grid (content + image with ClipReveal), feature cards in 2x2 grid, and director callout
  - [x] 4.4: Academy image must use `loading="lazy"` and have descriptive `alt` text
  - [x] 4.5: Mobile: grid collapses to single column at < 900px

- [x] **Task 5: Add testimonial section to Home.tsx** (AC: #3, #5)
  - [x] 5.1: Port Section 5 from the mockup — centered blockquote with TextReveal scrub
  - [x] 5.2: Replace hardcoded testimonial content with import from `testimonialData`
  - [x] 5.3: Preserve the `AnimateIn scaleUp` wrapper and `TextReveal` on the quote text
  - [x] 5.4: Ensure the `<blockquote>` semantic HTML is preserved for screen readers

- [x] **Task 6: Add "A Day in Treatment" timeline section to Home.tsx** (AC: #2, #6)
  - [x] 6.1: Port Section 5b from the mockup — daily schedule timeline with `TimelineRow` components
  - [x] 6.2: Replace hardcoded `dailySchedule` data with import from `dailyScheduleData`
  - [x] 6.3: Preserve the glassmorphic container with `backdrop-filter: blur(24px)`
  - [x] 6.4: Preserve the `AnimateIn slideUp` wrapper

- [x] **Task 7: Add numbers strip (stats) section to Home.tsx** (AC: #2)
  - [x] 7.1: Port Section 6 from the mockup — the 4-column stats grid with `StatBlock` and `CountUp`
  - [x] 7.2: Replace hardcoded stat values with import from `statsData`
  - [x] 7.3: Preserve the `StaggerGroup`/`StaggerItem` animation and `CountUp` on the rating
  - [x] 7.4: Mobile: 2-column grid at < 900px, 1-column at < 500px (preserve existing responsive behavior)

- [x] **Task 8: Add family involvement section to Home.tsx** (AC: #3, #6)
  - [x] 8.1: Port Section 7 from the mockup — sage green background, two-column with ClipReveal image and content
  - [x] 8.2: Replace hardcoded family section content with import from `familySectionData`
  - [x] 8.3: Preserve the ClipReveal + Parallax on the image, the Lightbox trigger, and the `StaggerGroup` feature list
  - [x] 8.4: Family image must use `loading="lazy"` and descriptive `alt` text
  - [x] 8.5: Mobile: grid collapses to single column at < 900px

- [x] **Task 9: Add treatment team section to Home.tsx** (AC: #3, #6)
  - [x] 9.1: Port Section 8 from the mockup — team heading, clinical director attribution, and scroll-snap team carousel
  - [x] 9.2: Replace hardcoded team data with import from `teamOverviewData`
  - [x] 9.3: Preserve the `useDragScroll` hook on the carousel for mouse/touch drag scrolling
  - [x] 9.4: Preserve the edge fade gradients and `hover-lift` class on cards
  - [x] 9.5: Named clinical staff (Dr. Russ Park, Arianne Smith) must be visible in the team section (FR12)
    - **ACTION REQUIRED:** Dr. Russ Park's title and credentials must be verified with the client. The mockup data shows 'Executive Director' with 'Advanced Nurse Executive with psychiatric mental health focus.' Other stories reference 'Medical Director, Psychiatrist' or 'DNP.' Use the mockup data as the default until client confirms the correct title/credentials.

- [x] **Task 10: Add FAQ section to Home.tsx** (AC: #1, #6)
  - [x] 10.1: Port Section 9 from the mockup — FAQ accordion with `FaqItem` components
  - [x] 10.2: Import FAQ data from `src/data/common.ts` (general FAQs) or `src/data/homepage.ts` (homepage-specific FAQs) — use whichever is more appropriate for the homepage's general questions
  - [x] 10.3: Preserve the accordion behavior with `openFaq` state and `onToggle` callbacks
  - [x] 10.4: Preserve the glassmorphic container styling

- [x] **Task 11: Add insurance & accreditations section to Home.tsx** (AC: #3, #4, #6)
  - [x] 11.1: Port Section 10 from the mockup — insurance logos and accreditation badges
  - [x] 11.2: Replace hardcoded insurance/accreditation data with imports from `insuranceOverviewData` and `accreditationsOverviewData`
  - [x] 11.3: Insurance section should include a link to the insurance hub page: `<Link to="/insurance">` (FR5)
  - [x] 11.4: Preserve the glassmorphic panels and `StaggerGroup scaleUp` animations
  - [x] 11.5: All insurance/accreditation images must have descriptive `alt` text (FR28)

- [x] **Task 12: Add admissions process section to Home.tsx** (AC: #4, #6)
  - [x] 12.1: Port Section 10b from the mockup — step cards for the admissions process
  - [x] 12.2: Import admissions data — either from `src/data/homepage.ts` or directly from `src/data/admissions.ts` if it exists (Story 8.1 creates the full admissions data)
  - [x] 12.3: Preserve the 4-column `StepCard` grid with `StaggerGroup` animation
  - [x] 12.4: The "Start the conversation" CTA must use `site.phoneTel` from `data/common.ts`
  - [x] 12.5: Mobile: 2-column at < 900px, 1-column at < 500px

- [x] **Task 13: Add the scoped `<style>` block for responsive overrides** (AC: #6)
  - [x] 13.1: Port the `<style>` block from the bottom of WarmImmersive.tsx that handles all mobile responsive grid collapses (`.wi-whothisis-grid`, `.wi-program-img-stack`, `.wi-numbers-grid`, `.wi-family-grid`, `.wi-academy-grid`, `.wi-steps-grid`)
  - [x] 13.2: Ensure all media queries use the 900px breakpoint (with a 500px secondary for narrower layouts)
  - [x] 13.3: Preserve the logo hover effect (`.wi-logo-img:hover`), team carousel scrollbar hide, and sticky sidebar patterns

- [x] **Task 14: Verify compilation and rendering** (AC: all)
  - [x] 14.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 14.2: Run `npm run dev` — all homepage sections render correctly
  - [x] 14.3: Manually verify at 320px: all sections responsive, no horizontal scroll, all CTAs tappable
  - [x] 14.4: Manually verify at 1024px+: scrollytelling works, sticky sidebars work, carousel is draggable
  - [x] 14.5: Manually verify keyboard navigation through FAQ accordion and team carousel

## Dev Notes

### Critical Context

**This story extends the Home.tsx file created in Story 2.1.** Story 2.1 builds the hero, intro, and "Who This Is For" sections. This story adds all remaining content sections — the bulk of the homepage. The mockup's WarmImmersive.tsx (Sections 3-10b) is the reference.

**Section mapping from the mockup:**

| Mockup Section | Description | Task |
|---|---|---|
| Section 3 | Programs scrollytelling | Task 2 |
| Section 4 | Conditions & Therapies CardStack | Task 3 |
| Section 4b | Youth Academy | Task 4 |
| Section 5 | Testimonial | Task 5 |
| Section 5b | Daily Schedule timeline | Task 6 |
| Section 6 | Numbers strip (stats) | Task 7 |
| Section 7 | Family involvement | Task 8 |
| Section 8 | Treatment team carousel | Task 9 |
| Section 9 | FAQ accordion | Task 10 |
| Section 10 | Insurance & Accreditations | Task 11 |
| Section 10b | Admissions process steps | Task 12 |

**What is NOT in this story:**
- Section 11 (Final CTA) — that is part of Story 2.3 (Conversion CTAs)
- The Lightbox component rendering — include the state and the `<Lightbox>` render at the end of Home.tsx, but the Lightbox component itself is already in `src/components/Lightbox.tsx` from Story 1.1
- JSON-LD structured data and SEO metadata — those are Story 2.3

### Architecture Compliance

- **Data-driven content:** Every section must pull content from data files, not hardcoded JSX strings
- **Styling:** CSS tokens + inline styles. Page-scoped color constants (`SAGE`, `DARK`, `WARM`, etc.) at the top of the file are acceptable per the architecture doc, but prefer CSS token references where they exist
- **Images:** All below-fold images must use `loading="lazy"`. Alt text required on all informational images; `alt=""` on decorative images
- **Internal links (FR5):** Program sections must link to `/programs/residential-treatment`, `/programs/php`, `/programs/iop`. Insurance section must link to `/insurance`. Use `<Link>` from React Router, not `<a href>`
- **Animations:** All scroll-triggered animations must respect `prefers-reduced-motion`. GSAP handles this automatically for ScrollTrigger-based animations. CSS transitions need the `prefers-reduced-motion` media query
- **Accessibility:** Heading hierarchy must be sequential (h1 in hero from Story 2.1, h2 for each section, h3 for subsections). All interactive elements must be keyboard accessible
- **No barrel files in components:** Import each component directly from its file

### Dependencies

| Direction | Story | What |
|-----------|-------|------|
| Depends on | 2.1 | Home.tsx file with hero section, `data/homepage.ts` initial structure |
| Depends on | 1.1 | All migrated components (AnimateIn, CardStack, TimelineRow, StatBlock, CountUp, ProfileChip, StepCard, FaqItem, Lightbox, etc.) |
| Depends on | 1.2 | `types.ts` interfaces, `data/common.ts` site info |
| Produces for | 2.3 | Complete Home.tsx ready for SEO/schema/CTA additions |
| Produces for | 3.x | Program links on homepage drive traffic to program pages |

### Anti-Patterns to AVOID

1. **DO NOT** hardcode any content strings in JSX — all text comes from data files
2. **DO NOT** add Section 11 (Final CTA "One call can change everything") — that belongs to Story 2.3
3. **DO NOT** add JSON-LD or SEO meta tags — that belongs to Story 2.3
4. **DO NOT** render `<Nav>` or `<Footer>` — PageLayout handles these
5. **DO NOT** use `loading="eager"` or `fetchpriority="high"` on below-fold images — only the hero image (Story 2.1) gets these
6. **DO NOT** skip heading hierarchy — each section's heading must be `<h2>`, subsections `<h3>`. Never skip from `<h2>` to `<h4>`
7. **DO NOT** use `--muted` color for essential text below 18px — the mockup uses `var(--muted)` in several places that need to be changed to `var(--body)` for accessibility
8. **DO NOT** use hash links (`href="#programs"`, `href="#admissions"`) — convert to React Router `<Link to="...">` with proper route paths
9. **DO NOT** forget to add `alt` text to all insurance and accreditation logos
10. **DO NOT** use CSS modules, Tailwind, or styled-components
11. **DO NOT** create barrel files in `src/components/`
12. **DO NOT** import from `../data/content` — use the split data files (`../data/homepage`, `../data/common`)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, extracted style constants, responsive patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] — heading hierarchy, alt text, keyboard navigation
- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.2] — acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] — contextual internal links on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR12] — accreditation badges
- [Source: _bmad-output/planning-artifacts/prd.md#FR14] — key differentiators
- [Source: _bmad-output/planning-artifacts/prd.md#FR22] — homepage branded experience
- [Source: mockups/silverstate-react/src/pages/WarmImmersive.tsx] — Sections 3-10b
- [Source: mockups/silverstate-react/src/data/content.ts] — existing content data to extract

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

No debug issues encountered.

### Completion Notes List

- Added 7 new TypeScript interfaces to `src/types.ts`: `HomepageProgramHighlight`, `ConditionOverviewItem`, `ConditionOverviewCategory`, `HomepageTeamOverview`, `FamilySectionData`, `HomepageAdmissionsStep`
- Extended `src/data/homepage.ts` with 13 new data exports: `programHighlightsData`, `conditionsOverviewData`, `therapiesOverviewData`, `youthAcademyData`, `testimonialData` (alias), `dailyScheduleData` (alias), `statsData` (alias), `teamOverviewData`, `insuranceOverviewData`, `accreditationsOverviewData`, `familySectionData`, `faqsData`, `admissionsOverviewData`
- Ported all mockup sections (3-10b) from WarmImmersive.tsx into Home.tsx as data-driven components
- All content is sourced from data files — zero hardcoded content strings in JSX
- Program highlights link to `/programs/${slug}` via React Router `<Link>` (FR5)
- Insurance section includes `<Link to="/insurance">` (FR5)
- Conditions rendered as text with `// TODO` comment for future Epic 4 linking
- All below-fold images use `loading="lazy"`
- `var(--muted)` replaced with `var(--body)` for essential text accessibility (per anti-pattern #7)
- CSS class names prefixed with `home-` (not `wi-`) to avoid collision with mockup
- Responsive: 900px primary breakpoint, 500px secondary for narrower layouts
- Preserves all animations: AnimateIn, TextReveal, CharReveal, StaggerGroup, ClipReveal, Parallax, CardStack, CountUp, useDragScroll
- Semantic HTML: h1 (hero), h2 (each section), h3 (condition categories) — proper heading hierarchy
- Keyboard accessible: FAQ accordion via FaqItem, team carousel via useDragScroll
- Section 11 (Final CTA) intentionally omitted — belongs to Story 2.3
- JSON-LD/SEO meta intentionally omitted — belongs to Story 2.3
- Dr. Russ Park data uses mockup defaults pending client verification (noted in Task 9.5)
- Named clinical staff visible: team clinical director attribution in team section (FR12)
- `npx tsc --noEmit` passes with zero errors
- `npx vite build` succeeds
- All 19 existing tests pass (zero regressions)

### File List

- `src/types.ts` — modified (added 6 new homepage interfaces)
- `src/data/homepage.ts` — modified (added 13 new data exports with type annotations)
- `src/pages/Home.tsx` — modified (added sections 3-10b, lightbox, scoped styles)

## Change Log

- 2026-02-24: Story 2.2 implementation — added all remaining homepage content sections (programs scrollytelling, conditions CardStack, youth academy, testimonial, daily schedule timeline, stats strip, family band, team carousel, FAQ accordion, insurance & accreditations, admissions steps) with full data-driven architecture, responsive design, and accessibility compliance
