# Story 1.4: Footer Component

Status: review

## Story

As a **family member**,
I want a site footer with contact information, site links, and a privacy policy link,
So that I can find essential information and navigate from the bottom of any page.

## Acceptance Criteria

1. **Given** a user scrolls to the bottom of any page, **When** the Footer renders, **Then** it displays Silver State contact information (address, phone, email), site navigation links organized by category, and a phone CTA with `tel:` link
2. **And** a link to the Privacy Policy page is visible and accessible (FR33) -- this is NON-NEGOTIABLE
3. **And** accreditation information is displayed (Joint Commission Gold Seal, LegitScript, NAATP) (FR12)
4. **And** all links are keyboard accessible with proper focus indicators (FR26)
5. **And** the Footer is responsive across all breakpoints: 320px mobile, 768px tablet, 1024px+ desktop (FR41)
6. **And** semantic HTML is used (`<footer>` element with proper landmark role) (FR27)
7. **And** all contact data, navigation links, and accreditation entries are sourced from `data/common.ts` -- never hardcoded in the component (FR44)
8. **And** the phone number uses `site.phoneTel` and `site.phone` from `data/common.ts` -- never hardcoded
9. **And** no horizontal scrolling occurs at any viewport width (FR43)
10. **And** touch targets on all links meet 44x44px minimum on mobile (FR42)

**FRs covered:** FR17, FR18, FR27, FR33, FR41, FR42, FR43, FR44

## Tasks / Subtasks

- [x] **Task 1: Analyze existing Footer.tsx and plan delta** (AC: all)
  - [x] 1.1: Read current `mockups/silverstate-react/src/components/Footer.tsx` and catalog every element, style, and data source
  - [x] 1.2: Identify all hardcoded data that must be replaced with `data/common.ts` imports
  - [x] 1.3: Identify missing elements (Privacy Policy link, NAATP accreditation, proper data sourcing)
  - [x] 1.4: Identify accessibility gaps (link contrast, touch targets, focus indicators, aria-labels)

- [x] **Task 2: Verify data dependency -- `data/common.ts` exports** (AC: #7, #8)
  - [x] 2.1: Confirm `data/common.ts` exports `site` object with `name`, `phone`, `phoneTel`, `email`, `address`
  - [x] 2.2: Confirm `data/common.ts` exports `footerLinks` (or `navLinks`) with categorized link arrays (programs, admissions, about) with production route paths
  - [x] 2.3: Confirm `data/common.ts` exports `accreditations` array with `name` and `logo` fields
  - [x] 2.4: If any of these exports are missing or incomplete, coordinate with Story 1.2 -- this story cannot proceed without them

- [x] **Task 3: Update Footer component -- data sourcing** (AC: #1, #7, #8)
  - [x] 3.1: Remove the hardcoded `footerLinks` object from inside the component file
  - [x] 3.2: Import `site`, `footerLinks`, and `accreditations` from `../data/common`
  - [x] 3.3: Replace hardcoded phone number `tel:7255259897` with `site.phoneTel`
  - [x] 3.4: Replace hardcoded phone display text `(725) 525-9897` with `site.phone`
  - [x] 3.5: Replace hardcoded email `info@silverstateatc.com` with `site.email`
  - [x] 3.6: Replace hardcoded address `8225 W Robindale Rd, Las Vegas, NV 89113` with `site.address`
  - [x] 3.7: Replace hardcoded tagline with value from `site.tagline` (or keep as marketing copy in `common.ts`)
  - [x] 3.8: Replace all `href: '#'` placeholder links with production route paths from the imported data
  - [x] 3.9: Replace hardcoded accreditation text in the copyright bar with dynamically rendered accreditation entries from `accreditations` data

- [x] **Task 4: Add Privacy Policy link** (AC: #2)
  - [x] 4.1: Add a clearly visible "Privacy Policy" link in the footer bottom bar, linking to `/privacy`
  - [x] 4.2: Ensure the link is positioned in the copyright/legal row alongside the copyright notice
  - [x] 4.3: Verify the link is keyboard focusable and has proper focus indicator
  - [x] 4.4: Consider adding "Terms of Use" placeholder link if it exists in the data -- but Privacy Policy is the non-negotiable requirement

- [x] **Task 5: Update accreditation display** (AC: #3)
  - [x] 5.1: Render accreditation badges dynamically from the `accreditations` data array
  - [x] 5.2: For entries with a `logo` value, display the image with descriptive `alt` text (e.g., "Joint Commission Gold Seal of Approval")
  - [x] 5.3: For entries with `logo: null`, display text-only accreditation with appropriate styling
  - [x] 5.4: Ensure NAATP is included in the accreditation data (add to `common.ts` if missing -- coordinate with Story 1.2)

- [x] **Task 6: Accessibility improvements** (AC: #4, #6, #10)
  - [x] 6.1: Verify `<footer>` element is present -- the existing mockup already uses `<footer role="contentinfo">`. The explicit `role="contentinfo"` is technically redundant (HTML5 `<footer>` implies it) but harmless; keep for screen reader compatibility with older AT
  - [x] 6.2: Add `aria-label="Footer navigation"` to the link sections or wrap them in a `<nav aria-label="Footer navigation">` element
  - [x] 6.3: Add `aria-label` attributes to icon-only or ambiguous links (phone icon link, email icon link, map pin)
  - [x] 6.4: Ensure all links have `:focus-visible` styles via the global CSS ring focus already in `index.css` (verify they apply correctly to footer links)
  - [x] 6.5: Ensure link color contrast meets WCAG AA ratio: footer link text on the footer background. **CRITICAL:** The existing mockup uses `color: 'var(--muted)'` (#999) for link text at `.85rem` font size -- this FAILS WCAG AA contrast on light backgrounds. Replace with `color: 'var(--body)'` (#4a4a4a) for the links, or ensure contrast ratio is >= 4.5:1
  - [x] 6.6: Ensure touch targets on all footer links are at least 44x44px on mobile by applying adequate padding or line-height. Current `marginBottom: 7` on `<li>` elements likely results in < 44px targets. Increase to `padding: 8px 0` or equivalent to ensure 44px minimum
  - [x] 6.7: Add `aria-label="Silver State Adolescent Treatment Center homepage"` (or similar) to the logo image link if it functions as a home link
  - [x] 6.8: Ensure heading hierarchy is correct -- footer `<h4>` elements are appropriate if the page's heading structure flows correctly into the footer

- [x] **Task 7: Responsive layout improvements** (AC: #5, #9)
  - [x] 7.1: Verify the existing 4-column → 2-column → 1-column grid works at 1024px+, 900px, and 500px breakpoints
  - [x] 7.2: Test at 320px viewport -- ensure no horizontal overflow, text wraps correctly, and all content is reachable
  - [x] 7.3: Adjust the 900px breakpoint to be consistent with the project's single `900px` mobile breakpoint (already correct in mockup)
  - [x] 7.4: Ensure the copyright/legal bottom bar wraps cleanly on mobile -- the existing `flexWrap: 'wrap'` handles this but verify at narrow widths
  - [x] 7.5: Consider stacking the logo/contact column full-width on mobile for better readability (currently part of the 1-column stack at 500px)

- [x] **Task 8: Extract inline style constants** (AC: all -- code quality)
  - [x] 8.1: Extract repeated `h4` heading styles into a `const columnHeadingStyle: CSSProperties` at the top of the file
  - [x] 8.2: Extract repeated link list item styles into a `const footerLinkStyle: CSSProperties`
  - [x] 8.3: Extract contact info row styles into a `const contactRowStyle: CSSProperties`
  - [x] 8.4: Import `CSSProperties` from React at the top of the file

- [x] **Task 9: Convert navigation links to React Router `<Link>`** (AC: #1)
  - [x] 9.1: Import `Link` from `react-router` (v7 convention -- NOT `react-router-dom`)
  - [x] 9.2: Replace `<a href="...">` for internal routes with `<Link to="...">` for client-side navigation
  - [x] 9.3: Keep `<a href="tel:...">` and `<a href="mailto:...">` as regular anchor tags (they are external protocol links)
  - [x] 9.4: Keep `<a>` for any external links (if any exist)

- [x] **Task 10: Verify and test** (AC: all)
  - [x] 10.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [x] 10.2: Visually verify at 320px, 768px, 900px, and 1200px+ viewports
  - [x] 10.3: Keyboard-navigate through every footer link using Tab key -- verify visible focus ring on each
  - [x] 10.4: Verify Privacy Policy link is present and points to `/privacy`
  - [x] 10.5: Verify phone `tel:` link works (or is correct format)
  - [x] 10.6: Verify email `mailto:` link works
  - [x] 10.7: Verify no hardcoded strings remain for site data (phone, email, address, link URLs)
  - [x] 10.8: Verify no `color: 'var(--muted)'` is used for essential text below 18px

## Dev Notes

### Existing Component Analysis

The current `Footer.tsx` at `mockups/silverstate-react/src/components/Footer.tsx` is a 100-line component that is approximately 70% ready for production. Here is a detailed gap analysis:

**What EXISTS and is GOOD (keep):**

| Element | Status | Notes |
|---------|--------|-------|
| `<footer role="contentinfo">` | KEEP | Semantic HTML landmark -- correct |
| 4-column grid layout (`2fr 1fr 1fr 1fr`) | KEEP | Good visual hierarchy -- logo/contact gets 2x width |
| Logo image with opacity treatment | KEEP | Subtle branding in footer |
| Contact info column (address, phone, email) | REFACTOR | Data is hardcoded -- must import from `common.ts` |
| Three link columns (Programs, Admissions, About) | REFACTOR | Links are hardcoded with `href: '#'` placeholders |
| Column headings with `.section-label`-style typography | KEEP | Uses `--font-display`, uppercase, letter-spacing |
| Copyright bar with year | KEEP | `new Date().getFullYear()` is correct dynamic year |
| Accreditation text in copyright bar | REFACTOR | Hardcoded text -- should render from data |
| Responsive grid: 4-col → 2-col → 1-col | KEEP | Breakpoints at 900px and 500px match project convention |
| `.wrap` container | KEEP | Uses project layout utility |
| `<style>` block for media queries | KEEP | Correct pattern per Architecture for component-specific responsive rules |
| `IconMapPin`, `IconPhone`, `IconMail` usage | KEEP | Correct icon pattern from Icons.tsx |

**What is MISSING (must add):**

| Element | Priority | FR |
|---------|----------|-----|
| Privacy Policy link | CRITICAL | FR33 -- non-negotiable |
| Data sourcing from `common.ts` | CRITICAL | FR44 -- no hardcoded content |
| React Router `<Link>` for internal navigation | HIGH | SPA navigation, not full page reloads |
| NAATP accreditation | HIGH | FR12 -- three accreditations required |
| Proper WCAG link contrast | HIGH | FR30 -- `--muted` fails on footer links |
| 44x44px touch targets on mobile | HIGH | FR42 |
| `aria-label` on icon-accompanied links | MEDIUM | FR27 |
| Footer `<nav>` wrapper with `aria-label` | MEDIUM | FR27 |
| Extracted style constants | MEDIUM | Architecture code quality pattern |

**What needs FIXING (bugs/issues):**

| Issue | Severity | Details |
|-------|----------|---------|
| Link color uses `var(--muted)` (#999) at .85rem | HIGH | Fails WCAG AA 4.5:1 contrast on `--cream` (#FDFBF7) background. Ratio is approximately 2.8:1. Must use `var(--body)` (#4a4a4a) which provides ~7.2:1 ratio |
| All `href` values are `'#'` placeholders | HIGH | Must be replaced with actual route paths from `common.ts` |
| Phone/email/address hardcoded | HIGH | Must import from `site` object in `common.ts` |
| Touch targets too small on mobile | MEDIUM | `<li>` with `marginBottom: 7` creates ~22px targets. Need padding to reach 44px |
| No `aria-label` on phone/email links with icons | LOW | Screen readers need context beyond the icon |

### Data Sources

All footer data MUST come from `src/data/common.ts` (dependency: Story 1.2). The Footer component must import:

```typescript
import { site, footerLinks, accreditations } from '../data/common'
```

**Expected `common.ts` exports used by Footer:**

```typescript
// Site info
export const site = {
  name: 'Silver State Adolescent Treatment Center',
  tagline: 'Empowering Teens to Blossom',
  phone: '(725) 525-9897',
  phoneTel: 'tel:7255259897',
  email: 'info@silverstateatc.com',
  address: '8225 W Robindale Rd, Las Vegas, NV 89113',
  // ...other fields
}

// Footer navigation (with production route paths)
export const footerLinks: FooterLinkGroup[] = [
  {
    heading: 'Programs',
    links: [
      { label: 'Residential Treatment', href: '/programs/residential-treatment' },
      { label: 'Partial Hospitalization', href: '/programs/php' },
      { label: 'Intensive Outpatient', href: '/programs/iop' },
      // ...
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'Verify Insurance', href: '/insurance' },
      { label: 'Admissions Process', href: '/admissions' },
      { label: 'Contact Us', href: '/contact' },
      // ...
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Treatment Team', href: '/about/our-team' },
      { label: 'Facility Tour', href: '/about/facility' },
      { label: 'Youth Academy', href: '/about/youth-academy' },
      // ...
    ],
  },
]

// Accreditations
export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'NAATP', logo: null },
]
```

**If `common.ts` does not export `footerLinks` as a structured array:** The dev agent should check the actual shape of the data export and adapt the Footer component accordingly. The key requirement is that link labels, URLs, and groupings come from data -- not from hardcoded values in the component.

**If Story 1.2 is not yet complete:** The dev agent must create temporary typed data inline with a `// TODO: Move to data/common.ts when Story 1.2 is complete` comment, matching the expected interface so the component can compile. This is the ONLY acceptable reason to have data in the component file.

### Accessibility Requirements

**Keyboard Navigation:**
- Every link in the footer must be reachable via Tab key
- Focus order should flow logically: logo/contact column first, then link columns left-to-right, then copyright bar
- Global `:focus-visible` ring from `index.css` (3px blue box-shadow) must apply to all footer links
- No focus traps -- user can Tab through and past the footer

**Screen Reader:**
- `<footer>` landmark is announced by screen readers automatically
- Link columns should be wrapped in `<nav aria-label="Footer navigation">` so screen readers announce it as a navigation landmark
- Phone link: `aria-label="Call Silver State at (725) 525-9897"`
- Email link: `aria-label="Email Silver State at info@silverstateatc.com"`
- Logo: `alt="Silver State Adolescent Treatment Center"` (already has alt text, but verify it is descriptive)

**Color Contrast:**
- **MUST FIX:** Replace all `color: 'var(--muted)'` (#999) on text below 18px with `color: 'var(--body)'` (#4a4a4a)
- Footer heading color `var(--text)` (#111) is fine -- passes easily
- Body text at `var(--body)` (#4a4a4a) on `var(--cream)` (#FDFBF7) provides ~7.2:1 ratio -- passes AA

**Touch Targets:**
- All footer links must have a minimum 44x44px touch target on mobile
- Current implementation has `marginBottom: 7` which is insufficient
- Solution: increase `<li>` or `<a>` padding to ensure at least 44px height per link row
- Contact info links (phone, email) already have `display: flex; alignItems: center; gap: 6` but need vertical padding

### Component Structure (Target)

```
Footer.tsx
  Imports: Link (react-router), Icons, data/common exports, CSSProperties
  Extracted style constants: columnHeadingStyle, footerLinkStyle, contactRowStyle
  Function: export default function Footer()
    <footer role="contentinfo">
      <div class="wrap">
        <div class="footer-grid"> (4-col grid)
          Column 1: Logo + tagline + contact info (address, phone tel:, email mailto:)
          Column 2-4: Link groups from footerLinks data, rendered with <Link> for internal routes
        </div>
        <div> (copyright/legal bar)
          Copyright notice with dynamic year
          Privacy Policy link (/privacy) -- NON-NEGOTIABLE
          Accreditation text from data
        </div>
      </div>
      <style> responsive media queries </style>
    </footer>
```

### Route Paths for Footer Links

Per the Architecture URL pattern document, footer links should use these production paths:

| Link Label | Route Path |
|------------|-----------|
| Residential Treatment | `/programs/residential-treatment` |
| Partial Hospitalization | `/programs/php` |
| Intensive Outpatient | `/programs/iop` |
| Verify Insurance | `/insurance` |
| Admissions Process | `/admissions` |
| Contact Us | `/contact` |
| Treatment Team | `/about/our-team` |
| Facility Tour | `/about/facility` |
| Youth Academy | `/about/youth-academy` |
| Privacy Policy | `/privacy` |

These should all be defined in `common.ts` and imported -- not hardcoded in the Footer.

### Anti-Patterns to AVOID

1. **DO NOT** hardcode phone numbers, email, address, or link URLs in the component -- all must come from `data/common.ts`
2. **DO NOT** use `color: 'var(--muted)'` (#999) for any text below 18px -- it fails WCAG AA contrast. Use `var(--body)` instead
3. **DO NOT** use `<a href="/privacy">` for internal routes -- use React Router `<Link to="/privacy">` for SPA navigation
4. **DO NOT** keep `href: '#'` placeholder links -- every link must point to a real route
5. **DO NOT** add CSS modules, styled-components, or Tailwind -- use inline styles + CSS tokens + `<style>` blocks for media queries
6. **DO NOT** use arrow function default export -- must be `export default function Footer()`
7. **DO NOT** create a barrel file or index.ts in components/
8. **DO NOT** import from `../data/content` (the old monolithic file) -- import from `../data/common`
9. **DO NOT** add animation or GSAP to the footer -- it is a static informational component
10. **DO NOT** remove the existing responsive `<style>` block -- it correctly handles the grid breakpoints
11. **DO NOT** use `<div onClick>` for any interactive element -- use `<a>` or `<button>` only
12. **DO NOT** skip the Privacy Policy link -- FR33 is a compliance requirement for every page

### Dependencies

| Dependency | Story | Status | Fallback |
|------------|-------|--------|----------|
| Production project structure | Story 1.1 | Must be complete | Cannot proceed without it |
| `data/common.ts` with site, footerLinks, accreditations exports | Story 1.2 | Must be complete (or in-progress) | Create temporary typed data inline with TODO comment |
| `types.ts` with FooterLinkGroup, AccreditationEntry interfaces | Story 1.2 | Must be complete (or in-progress) | Define interfaces locally with TODO comment |
| `Icons.tsx` with IconMapPin, IconPhone, IconMail | Story 1.1 (migrated) | Expected complete | Already exists in mockup |
| `index.css` with design tokens and focus styles | Story 1.1 (migrated) | Expected complete | Already exists in mockup |
| React Router (`Link` component -- import from `react-router`, not `react-router-dom`) | Story 1.1 | Expected complete | Already a dependency |

### Address Data Inconsistency

**Address (RESOLVED):** The correct facility address is **8225 W Robindale Rd, Las Vegas, NV 89113** (confirmed from live site). This matches the mockup Footer. The '2180 S. 6th Street' reference in Story 1.8 was incorrect and has been corrected.

### Estimated Effort

Small-medium story. The existing component is ~70% complete. Primary work is:
- Replacing hardcoded data with imports (30 min)
- Adding Privacy Policy link (10 min)
- Fixing WCAG contrast violations (15 min)
- Adding accessibility attributes (20 min)
- Touch target fixes (15 min)
- Extracting style constants (15 min)
- Converting `<a>` to `<Link>` for internal routes (15 min)
- Testing across viewports + keyboard nav (20 min)

Total estimate: ~2-3 hours

## Project Structure Notes

**Files MODIFIED in this story:**

```
src/
  components/
    Footer.tsx              # Primary file -- refactored from mockup version
```

**Files READ (not modified) in this story:**

```
src/
  data/
    common.ts               # Import site, footerLinks, accreditations (from Story 1.2)
  types.ts                   # Import FooterLinkGroup, AccreditationEntry (from Story 1.2)
  components/
    Icons.tsx                # Import IconMapPin, IconPhone, IconMail (from Story 1.1)
  index.css                  # Design tokens and focus styles referenced (from Story 1.1)
```

**No new files created in this story.** Footer.tsx already exists from the mockup migration in Story 1.1.

## References

- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation-Patterns] -- Naming, styling, component, accessibility patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- Footer.tsx location, PageLayout boundary (Footer rendered by PageLayout, not individual pages)
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] -- CSS tokens + inline styles, `--muted` restriction, extracted style constants, `<style>` blocks for media queries
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- `export default function`, BaseComponentProps, accessibility pattern for every component
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- Data sourcing from `data/common.ts`, never hardcode phone/content
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- Production route paths for all footer links
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.4] -- Story definition and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- Phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR18] -- Click-to-call on mobile
- [Source: _bmad-output/planning-artifacts/prd.md#FR27] -- Semantic HTML with landmark roles
- [Source: _bmad-output/planning-artifacts/prd.md#FR33] -- Privacy policy accessible from every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR41] -- Responsive across all viewports
- [Source: _bmad-output/planning-artifacts/prd.md#FR42] -- 44x44px touch targets
- [Source: _bmad-output/planning-artifacts/prd.md#FR43] -- No horizontal scrolling
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] -- Content in data files separate from components
- [Source: mockups/silverstate-react/src/components/Footer.tsx] -- Existing component being evolved
- [Source: mockups/silverstate-react/src/components/Icons.tsx] -- Icon components used in footer
- [Source: mockups/silverstate-react/src/data/content.ts] -- Existing data structure (site, accreditations)
- [Source: mockups/silverstate-react/src/types.ts] -- Existing type definitions (AccreditationEntry)
- [Source: mockups/silverstate-react/src/index.css] -- Design tokens, focus styles, layout utilities

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Added NAATP to accreditations array in data/common.ts (was missing per Task 5.4)
- Separated accreditation display into its own visual row with logo support (Joint Commission shows image, others show styled uppercase text)

### Completion Notes List

- All data sourced from data/common.ts: site info, footerLinks, accreditations — zero hardcoded content in component
- Added `accreditations` import and NAATP entry to common.ts
- Privacy Policy link added to copyright bar as `<Link to="/privacy">` (FR33 compliance)
- Accreditation badges rendered dynamically: logo-based entries show images with descriptive alt text, null-logo entries show styled uppercase text
- WCAG contrast fix: all link text changed from `var(--muted)` (#999) to `var(--body)` (#4a4a4a) — passes AA 4.5:1
- Touch targets: all footer links and contact rows have `minHeight: 44` with padding
- Accessibility: `<nav aria-label="Footer navigation">` wraps link columns using `display: contents`, phone/email links have descriptive aria-labels, logo has descriptive alt text
- All internal routes use React Router `<Link to>`, tel:/mailto: kept as `<a href>`
- Extracted style constants: `columnHeadingStyle`, `footerLinkStyle`, `contactRowStyle` with `CSSProperties` typing
- Tagline uses `site.tagline` dynamically, copyright uses `site.name`
- Responsive grid preserved: 4-col (1024+) -> 2-col (900px) -> 1-col (500px)
- Zero TypeScript errors, zero Vite build errors
- No new dependencies

### Change Log

- 2026-02-24: Story 1.4 implemented — Footer component refactored for production with data sourcing, Privacy Policy link, accreditation badges, WCAG contrast fixes, touch targets, accessibility improvements, and React Router links

### File List

- src/components/Footer.tsx (modified — major refactor from mockup)
- src/data/common.ts (modified — added NAATP to accreditations array)
