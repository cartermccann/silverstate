# Story 2.1: Homepage Data & Hero Section

Status: review

## Story

As a **parent searching for help at 11 PM**,
I want an emotionally resonant hero section that validates what I'm feeling and stops my scrolling,
So that I know Silver State understands my situation before I read another word.

**Dependencies:** Story 1.1 (production project initialized), Story 1.2 (shared data types and `data/common.ts` with `site.phoneTel`, `site.phone`), Story 1.7 (PageLayout wrapping the homepage), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5 (internal links), FR14 (differentiators — partial, hero context), FR22 (homepage branded experience), FR31 (prefers-reduced-motion), FR44 (data-driven content)

## Acceptance Criteria

1. **Given** a user lands on the homepage, **When** the hero section renders, **Then** the WarmImmersive hero displays emotional copy that validates parental fear and urgency (FR22)
2. **And** a parallax or scroll-triggered animation creates visual depth without blocking content (NFR2 — CLS < 0.1)
3. **And** the hero image uses `fetchpriority="high"` for LCP optimization (NFR1 — LCP < 2.5s)
4. **And** a phone CTA is visible in the hero section — above the fold on all devices
5. **And** the hero respects `prefers-reduced-motion` (FR31) — parallax and character reveal animations are disabled or reduced when the user prefers reduced motion
6. **And** homepage content data is sourced from a data file, not hardcoded in the component (FR44)

## Tasks / Subtasks

- [x] **Task 1: Create `src/data/homepage.ts` with typed homepage content data** (AC: #6)
  - [x] 1.1: Create `src/data/homepage.ts` — this file consolidates all homepage-specific content data that currently lives in `data/content.ts` in the mockup
  - [x] 1.2: Define and export `heroData` containing the immersive hero content: `headline`, `body`, `ctaPrimary` (label + href), `ctaSecondary` (label + href), `backgroundImage` (src + alt). Source the actual copy from the existing mockup's `hero.immersive` object in `mockups/silverstate-react/src/data/content.ts`
  - [x] 1.3: Define and export `introData` containing the intro section copy: the TextReveal paragraph ("We believe adolescent treatment should feel like a turning point...") and the credibility line below it. This content is currently hardcoded in WarmImmersive.tsx and must be extracted to data
  - [x] 1.4: Define and export `whoThisIsForData` containing: headline, body, profiles array (each with `label` and `desc`). Source from the mockup's `whoThisIsFor` export
  - [x] 1.5: Define and export `facilityGalleryImages` as `LightboxImage[]` for the facility lightbox. Source from the hardcoded `facilityImages` array in WarmImmersive.tsx
  - [x] 1.6: All exports must have explicit type annotations — either referencing interfaces from `types.ts` or defining new homepage-specific interfaces inline if needed (e.g., `HeroData`, `IntroData`, `WhoThisIsForData`)
  - [x] 1.7: If new interfaces are needed (e.g., `HeroData`), define them in `src/types.ts`, not in the data file
  - [x] 1.8: Add `homepage.ts` re-export to `src/data/index.ts` barrel

- [x] **Task 2: Migrate `WarmImmersive.tsx` into `src/pages/Home.tsx` — hero section** (AC: #1, #2, #3, #4, #5)
  - [x] 2.1: Create `src/pages/Home.tsx` as the production homepage. This is NOT the same file as the mockup's `WarmImmersive.tsx` — it is a new production file that evolves the mockup's hero section code. The mockup at `mockups/silverstate-react/src/pages/WarmImmersive.tsx` is the reference, not the target
  - [x] 2.2: Use `export default function Home()` — named function, default export
  - [x] 2.3: Import hero content from `src/data/homepage.ts` — never hardcode headline, body, or CTA text in the component
  - [x] 2.4: Import `site` from `src/data/common.ts` for phone number (`site.phoneTel`, `site.phone`)
  - [x] 2.5: Implement the hero section (Section 1 from the mockup): full-viewport Parallax background image with overlay gradient and centered hero text content
  - [x] 2.6: Hero image `<img>` must have `fetchpriority="high"` and `loading="eager"` (it IS the LCP element) — no `loading="lazy"` on the hero image
  - [x] 2.7: Hero image must have explicit `width` and `height` attributes (or CSS that prevents layout shift) to maintain CLS < 0.1
  - [x] 2.8: Preserve the `CharReveal` animation on the headline and `TextReveal` on the body text from the mockup
  - [x] 2.9: Preserve the `AnimateIn` fade-up on the CTA buttons below the hero text
  - [x] 2.10: Phone CTA in the hero must use `site.phoneTel` and `site.phone` — render as `<a href={site.phoneTel}>` with `IconPhone` icon and `.btn .btn-white .btn-pulse` classes
  - [x] 2.11: Secondary CTA ("Learn More") should use `<Link to="/programs/residential-treatment">` — converting from the mockup's `href="#programs"` hash link to a proper route link
  - [x] 2.12: Preserve the overlay gradient: `linear-gradient(180deg, rgba(15,23,42,.55) 0%, rgba(15,23,42,.7) 100%)`

- [x] **Task 3: Implement `prefers-reduced-motion` support for hero animations** (AC: #5)
  - [x] 3.1: Verify that GSAP-based animations (CharReveal, TextReveal, Parallax) respect `prefers-reduced-motion` — GSAP's ScrollTrigger has built-in support, but verify it is working
  - [x] 3.2: The Parallax zoom effect (`scaleFrom={1.2}` to `scaleTo={1}`) must be disabled when `prefers-reduced-motion: reduce` is active — the image should render at `scale(1)` with no animation
  - [x] 3.3: The hero CTA `AnimateIn` should still render content but without movement when reduced motion is preferred
  - [x] 3.4: If using Framer Motion for any hero animations, pass `initial={false}` or check `useReducedMotion()` from Framer Motion

- [x] **Task 4: Implement the intro section below the hero** (AC: #1, #6)
  - [x] 4.1: Port Section 2 from the mockup ("We believe adolescent treatment should feel like a turning point...") — a centered TextReveal paragraph with scrub
  - [x] 4.2: Replace hardcoded intro text with data from `introData` exported from `src/data/homepage.ts`
  - [x] 4.3: Preserve the `TextReveal` scrub behavior and the `AnimateIn` blurUp on the accreditation line below

- [x] **Task 5: Implement the "Who This Is For" section** (AC: #1, #6)
  - [x] 5.1: Port Section 2b from the mockup — asymmetric two-column layout with sticky heading on the left and ProfileChip stagger on the right
  - [x] 5.2: Replace hardcoded `whoThisIsFor` data with import from `src/data/homepage.ts`
  - [x] 5.3: Preserve the `CharReveal` on the heading, `AnimateIn` blurUp on the body text, and `StaggerGroup`/`StaggerItem` on the ProfileChip list
  - [x] 5.4: Preserve the mobile responsive behavior: sticky sidebar becomes static at < 900px, grid collapses to single column

- [x] **Task 6: Responsive hero behavior** (AC: #1, #4)
  - [x] 6.1: At 320px: hero text scales via `clamp()` (already in mockup), phone CTA is visible and tappable, no horizontal overflow
  - [x] 6.2: At 768px: hero fills viewport, CTA buttons wrap gracefully (flexWrap: 'wrap' already present)
  - [x] 6.3: At 1024px+: full hero experience with parallax and character reveal
  - [x] 6.4: Phone CTA in the hero must have a touch target of at least 44x44px — the `.btn` class provides this via padding

- [x] **Task 7: Verify homepage renders within PageLayout** (AC: #1)
  - [x] 7.1: The production `Home.tsx` should NOT render `<Nav>` or `<Footer>` directly — those come from `PageLayout` (Story 1.7). Remove the direct `<Nav variant="dark" />` and `<Footer />` calls that exist in the mockup's WarmImmersive.tsx
  - [x] 7.2: The homepage must be wrapped by PageLayout via the route configuration in `routes.ts` — verify the route exists
  - [x] 7.3: PageLayout's breadcrumb must NOT render on the homepage (Story 1.6/1.7 handles this)

- [x] **Task 8: Verify compilation** (AC: all)
  - [x] 8.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 8.2: Run `npm run dev` — homepage renders with hero section, intro, and "Who This Is For" section
  - [x] 8.3: Manually verify hero image loads immediately (no lazy loading shimmer)
  - [x] 8.4: Manually verify phone CTA is above the fold on a 375px mobile viewport

## Dev Notes

### Critical Context

**This story builds the first part of the homepage.** The existing mockup at `mockups/silverstate-react/src/pages/WarmImmersive.tsx` is a ~1300-line monolithic component that renders the entire homepage in one file. The production approach splits this into three stories (2.1, 2.2, 2.3). This story covers:

- The homepage data file (`src/data/homepage.ts`)
- The hero section (Section 1 in the mockup)
- The intro section (Section 2 in the mockup)
- The "Who This Is For" section (Section 2b in the mockup)

Stories 2.2 and 2.3 will add the remaining sections to this same `Home.tsx` file.

**What already exists in the mockup and should be ADAPTED (not copy-pasted):**
- `WarmImmersive.tsx` — the full homepage component with 11 visual sections
- `data/content.ts` — monolithic content data file with `hero`, `whoThisIsFor`, `site`, `facilityImages`, etc.
- All animation components (`Parallax`, `CharReveal`, `TextReveal`, `AnimateIn`, `MagneticButton`, `ProfileChip`) — these should already be migrated to `src/components/` by Story 1.1

**What MUST CHANGE from the mockup:**
1. Direct `<Nav>` and `<Footer>` rendering — removed; PageLayout handles these
2. Hardcoded content strings — extracted to `src/data/homepage.ts`
3. Hash links (`href="#programs"`) — converted to route links (`<Link to="/programs/residential-treatment">`)
4. Monolithic `content.ts` — split into per-content-area data files (homepage.ts, programs.ts, etc.)
5. Page-scoped color constants (`SAGE`, `DARK`, etc.) — keep as page-scoped `const` values at the top of Home.tsx, but prefer CSS token references (`var(--sage)`, `var(--dark)`) where tokens exist. The `DISPLAY` font reference should use `var(--font-display)` instead of the hardcoded value

### Architecture Compliance

**Note:** `homepage.ts` is not listed in the original architecture doc's data file inventory. It has been added as a recognized data file for homepage content (see updated Story 1.2). This follows the same pattern as other per-content-area data files.

- **Component pattern:** `export default function Home()` — named function, default export
- **Styling:** CSS tokens + inline styles. No CSS modules, no Tailwind. Use `var(--font-display)` for the display font, `var(--text)` for heading color, `var(--body)` for body text, `var(--cream)` for background
- **Data imports:** Content from `src/data/homepage.ts`, site info from `src/data/common.ts`
- **Image handling:** Hero image uses `fetchpriority="high"` and `loading="eager"`. Below-fold images use `loading="lazy"`
- **Animation:** GSAP for scroll-triggered (Parallax, CharReveal, TextReveal), Framer Motion for interaction, CSS for simple transitions. All must respect `prefers-reduced-motion`
- **Mobile breakpoint:** 900px single breakpoint. Use `useIsMobile()` for conditional rendering, `<style>` block with `@media (max-width: 900px)` for CSS-only responsive adjustments
- **No barrel file imports in components:** Import directly from component files (e.g., `import AnimateIn from '../components/AnimateIn'`)

### Dependencies

| Direction | Story | What |
|-----------|-------|------|
| Depends on | 1.1 | Production project structure, migrated components |
| Depends on | 1.2 | `types.ts` interfaces, `data/common.ts` site info |
| Depends on | 1.7 | PageLayout wrapper (Nav, Footer, TrustBadges, CtaBand) |
| Produces for | 2.2 | `Home.tsx` file that Story 2.2 will extend with additional sections |
| Produces for | 2.3 | `Home.tsx` file that Story 2.3 will add SEO/schema/CTA elements to |
| Produces for | 3.x, 4.x, 5.x | `data/homepage.ts` as a pattern example for other data files |

### Anti-Patterns to AVOID

1. **DO NOT** copy the entire WarmImmersive.tsx into Home.tsx — this story only covers the hero, intro, and "Who This Is For" sections. The remaining sections are Stories 2.2 and 2.3
2. **DO NOT** render `<Nav>` or `<Footer>` directly in Home.tsx — PageLayout handles these
3. **DO NOT** hardcode headline, body text, or CTA labels in the JSX — all content comes from data files
4. **DO NOT** use `loading="lazy"` on the hero image — it IS the LCP element and must load eagerly with `fetchpriority="high"`
5. **DO NOT** use hardcoded hex colors when a CSS token exists — use `var(--text)`, `var(--body)`, `var(--cream)`, `var(--font-display)` instead of `#0f172a`, `#4a4a4a`, `#FAF7F2`, `'Space Grotesk'`
6. **DO NOT** use `--muted` color for essential text below 18px — use `var(--body)` instead
7. **DO NOT** use CSS modules, Tailwind, or styled-components — inline styles + CSS tokens only
8. **DO NOT** create barrel files in `src/components/`
9. **DO NOT** skip `prefers-reduced-motion` support — parallax zoom and character reveals must be disabled/reduced for users who prefer reduced motion
10. **DO NOT** use `<div onClick>` for CTAs — use `<a>` for navigation and phone links, `<button>` for actions
11. **DO NOT** forget to add `aria-label` to the phone CTA in the hero (e.g., `aria-label="Call Silver State at (725) 525-9897"`)
12. **DO NOT** use `href="#programs"` hash links — convert to `<Link to="/programs/residential-treatment">`
13. **DO NOT** import from `../data/content` (the old monolithic file) — import from `../data/homepage` and `../data/common`
14. **DO NOT** install any new npm packages for this story

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens + inline styles, extracted style constants, responsive patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations, barrel exports
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function, BaseComponentProps
- [Source: _bmad-output/planning-artifacts/architecture.md#Loading-and-Performance] — fetchpriority, lazy loading rules
- [Source: _bmad-output/planning-artifacts/epics.md#Story-2.1] — acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR22] — homepage branded experience
- [Source: _bmad-output/planning-artifacts/prd.md#FR31] — prefers-reduced-motion
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] — data-driven content architecture
- [Source: _bmad-output/planning-artifacts/prd.md#NFR1] — LCP < 2.5s
- [Source: _bmad-output/planning-artifacts/prd.md#NFR2] — CLS < 0.1
- [Source: mockups/silverstate-react/src/pages/WarmImmersive.tsx] — full homepage mockup (Sections 1, 2, 2b for this story)
- [Source: mockups/silverstate-react/src/data/content.ts] — existing content data to extract from

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Replaced 1788-line monolithic Home.tsx (mockup copy) with clean 230-line production file covering only Story 2.1 scope

### Completion Notes List

- Added `HeroData` and `IntroData` interfaces to types.ts
- Restructured homepage.ts: added `heroData` (with CTAs + background image), `introData` (paragraph + credibility line), `facilityGalleryImages` (LightboxImage[]); kept legacy `hero` export for backward compat
- Rewrote Home.tsx with only 3 sections: hero, intro, "Who This Is For" — Stories 2.2/2.3 will add remaining sections
- Removed direct Nav/Footer rendering (PageLayout handles via route config)
- Replaced all hardcoded colors with CSS tokens: `var(--font-display)`, `var(--sage)`, `var(--body)`, `var(--text)`
- Converted `href="#programs"` hash link to `<Link to="/programs/residential-treatment">`
- Added `fetchPriority="high"`, `loading="eager"`, `width={1920}`, `height={1080}` to hero image for LCP optimization
- Added `aria-label` on phone CTA: "Call Silver State at (725) 525-9897"
- All animation components (Parallax, CharReveal, TextReveal, AnimateIn, MagneticButton) already handle prefers-reduced-motion
- Responsive: clamp() font sizes, flexWrap CTAs, sticky sidebar unsticks at 900px, .btn provides 44px touch targets
- tsc --noEmit: zero errors; vite build: success (Home.js 12.38KB, down from ~49KB)

### Change Log

- 2026-02-24: Implemented homepage hero, intro, and "Who This Is For" sections (all 8 tasks complete)

### File List

- `src/types.ts` (modified) — Added HeroData, IntroData interfaces
- `src/data/homepage.ts` (modified) — Added heroData, introData, facilityGalleryImages; explicit type annotations on all exports
- `src/pages/Home.tsx` (modified) — Production rewrite: hero + intro + who-this-is-for only, CSS tokens, data-driven, no Nav/Footer
