# Story 1.5: TrustBadges & CtaBand Components

Status: review

## Story

As a **parent evaluating treatment centers**,
I want to see accreditation badges and a clear call-to-action on every page,
So that I trust Silver State's credentials and always know how to take the next step.

## Acceptance Criteria

1. **Given** a user views any page, **When** the page renders, **Then** TrustBadges displays Joint Commission Gold Seal, LegitScript, and NAATP accreditation badges (FR12)
2. **And** CtaBand displays a phone call CTA section with `tel:` link and urgency messaging (FR17, FR18)
3. **And** all badge images have descriptive alt text (FR28)
4. **And** both components are responsive across all breakpoints (FR41)
5. **And** phone number uses `site.phoneTel` from `data/common.ts` — never hardcoded (Architecture: Phone Numbers rule)

## Dependencies

| Dependency | Story | What's Needed |
|------------|-------|---------------|
| Production project structure | Story 1.1 | `src/components/` directory exists, build compiles |
| Shared data types & common data | Story 1.2 | `types.ts` has `AccreditationEntry` and `BaseComponentProps`; `data/common.ts` exports `site` (with `phone`, `phoneTel`) and `accreditations` array |
| Icons component | Story 1.1 (migrated) | `IconPhone` exported from `components/Icons.tsx` |

**Note:** Both TrustBadges and CtaBand are consumed by PageLayout (Story 1.7). They must be built BEFORE Story 1.7 begins.

## FRs Covered

| FR | Description | How This Story Addresses It |
|----|-------------|---------------------------|
| FR12 | Accreditation badges on every page | TrustBadges component renders Joint Commission Gold Seal, LegitScript, and NAATP badges |
| FR17 | Phone CTA on every page | CtaBand renders a prominent phone CTA with `tel:` link |
| FR18 | Mobile click-to-call with single tap | CtaBand `tel:` link enables native phone dialer on mobile |
| FR28 | Descriptive alt text on all images | All badge images have descriptive alt text (e.g., "Joint Commission Gold Seal of Approval") |

## Tasks / Subtasks

- [x] **Task 1: Create TrustBadges component** (AC: #1, #3, #4)
  - [x] 1.1: Create `src/components/TrustBadges.tsx` with `export default function TrustBadges`
  - [x] 1.2: Import `accreditations` from `../data/common` and `AccreditationEntry` type from `../types`
  - [x] 1.3: Accept `TrustBadgesProps` extending `BaseComponentProps` (`className?: string`, `style?: CSSProperties`)
  - [x] 1.4: Render a horizontal strip of accreditation badges with descriptive alt text
  - [x] 1.5: For badges with `logo: null` (LegitScript, NAATP), render a text-based badge with the accreditation name
  - [x] 1.6: Add responsive layout — horizontal row on desktop, wrapping on mobile
  - [x] 1.7: Use CSS tokens for all colors, fonts, spacing — no hardcoded values
  - [x] 1.8: Wrap in `<section>` with `aria-label="Accreditations and certifications"`

- [x] **Task 2: Create CtaBand component** (AC: #2, #4, #5)
  - [x] 2.1: Create `src/components/CtaBand.tsx` with `export default function CtaBand`
  - [x] 2.2: Import `site` from `../data/common`
  - [x] 2.3: Accept `CtaBandProps` extending `BaseComponentProps` (`className?: string`, `style?: CSSProperties`)
  - [x] 2.4: Render a full-width CTA band with urgency headline, supporting copy, and phone CTA link
  - [x] 2.5: Phone link uses `site.phoneTel` for href and `site.phone` for display text — NEVER hardcode
  - [x] 2.6: Include `IconPhone` from `../components/Icons` in the CTA button
  - [x] 2.7: Use `btn btn-primary btn-pulse` classes on the CTA link for visual prominence and pulse animation
  - [x] 2.8: Add responsive layout — content stacks vertically on mobile, horizontal on desktop
  - [x] 2.9: Ensure phone CTA link meets 44x44px minimum touch target (FR42)
  - [x] 2.10: Wrap in `<section>` with `aria-label="Contact us"`

- [x] **Task 3: Update accreditations data** (AC: #1, #3)
  - [x] 3.1: Verify `accreditations` array in `data/common.ts` includes all three required entries: Joint Commission, LegitScript, NAATP
  - [x] 3.2: If NAATP is missing from the data (current `content.ts` has "HIPAA Compliant" instead), update the `accreditations` array in `data/common.ts` to use: Joint Commission (with logo path), LegitScript (logo: null), NAATP (logo: null)
  - [x] 3.3: Ensure `AccreditationEntry` interface in `types.ts` supports the `logo: string | null` pattern (already does)

- [x] **Task 4: Verify TypeScript compilation and visual review** (AC: all)
  - [x] 4.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 4.2: Visually verify TrustBadges renders correctly in isolation (import into a test page or existing Home page temporarily)
  - [x] 4.3: Visually verify CtaBand renders correctly in isolation
  - [x] 4.4: Test at 320px, 768px, and 1200px viewport widths — no horizontal overflow, no layout breaks
  - [x] 4.5: Verify phone link triggers native dialer on mobile (or confirm `tel:` href is correct)
  - [x] 4.6: Keyboard-tab through both components — all interactive elements are reachable and have visible focus indicators

## Dev Notes

### These Are NEW Components — Nothing to Migrate

Neither TrustBadges nor CtaBand exist in the mockup (`mockups/silverstate-react/src/components/`). The mockup footer has a one-line text mention of accreditations (`"HIPAA Compliant · Joint Commission Accredited · LegitScript Approved"`) at the bottom of `Footer.tsx`, but there is no dedicated component. These are greenfield builds.

### Accreditation Data: Current State vs. Required State

**Current `content.ts` accreditations array:**
```ts
export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript', logo: null },
  { name: 'HIPAA Compliant', logo: null },
]
```

**ACTION REQUIRED:** Verify actual accreditation badges with client. The mockup shows 'HIPAA Compliant' -- confirm whether NAATP Member, Joint Commission, or other badges should also be included.

**Required per FR12 and the story acceptance criteria:**
The story specifies Joint Commission Gold Seal, LegitScript, and **NAATP** (National Association of Addiction Treatment Providers). The current data has "HIPAA Compliant" as the third entry instead of "NAATP."

**Action:** When Story 1.2 splits `content.ts` into `data/common.ts`, the `accreditations` array should be updated to:
```ts
export const accreditations: AccreditationEntry[] = [
  { name: 'Joint Commission Gold Seal', logo: '/assets/joint-commission.webp' },
  { name: 'LegitScript Certified', logo: null },
  { name: 'NAATP Member', logo: null },
]
```

If Story 1.2 has already been completed without this change, Task 3 of this story handles the update.

### Available Badge Assets

From `public/assets/`:
- `joint-commission.webp` — EXISTS, ready to use
- LegitScript logo — NOT available (render as text badge)
- NAATP logo — NOT available (render as text badge)

For badges without image assets, render a styled text-based badge using the `IconAward` or `IconShield` icon from `Icons.tsx` alongside the accreditation name. This provides a visual element while the client sources official logo files.

### TrustBadges Component Design

**Visual treatment:** A centered horizontal strip, typically placed above the CtaBand and below the main page content. Light background (use `var(--warm)` or `var(--sage-soft)`) to subtly differentiate from page content.

**Recommended structure:**
```tsx
import type { CSSProperties } from 'react'
import { accreditations } from '../data/common'
import { IconAward } from './Icons'

interface TrustBadgesProps {
  className?: string
  style?: CSSProperties
}

// Extracted style constants
const sectionStyle: CSSProperties = {
  padding: '32px 0',
  background: 'var(--warm)',
  textAlign: 'center',
}

const badgeContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  flexWrap: 'wrap',
}

const badgeStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: '.85rem',
  fontWeight: 600,
  color: 'var(--body)',
  fontFamily: 'var(--font-display)',
}

const badgeImgStyle: CSSProperties = {
  height: 48,
  width: 'auto',
  objectFit: 'contain',
}

export default function TrustBadges({ className, style }: TrustBadgesProps) {
  return (
    <section
      aria-label="Accreditations and certifications"
      className={className}
      style={{ ...sectionStyle, ...style }}
    >
      <div className="wrap" style={badgeContainerStyle}>
        {accreditations.map((acc) => (
          <div key={acc.name} style={badgeStyle}>
            {acc.logo ? (
              <img
                src={acc.logo}
                alt={`${acc.name} accreditation badge`}
                style={badgeImgStyle}
              />
            ) : (
              <IconAward style={{ color: 'var(--sage)', flexShrink: 0 }} />
            )}
            <span>{acc.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
```

**Key decisions:**
- Uses `<section>` with `aria-label` for screen reader landmark
- Badges with logos get `<img>` with descriptive alt text per FR28
- Badges without logos get the `IconAward` SVG icon + text label
- `flexWrap: 'wrap'` handles mobile gracefully without a media query
- All colors reference CSS tokens (`var(--body)`, `var(--warm)`, `var(--sage)`)
- Accepts `className` and `style` props per BaseComponentProps pattern

### CtaBand Component Design

**Visual treatment:** A full-width dark band (use `var(--dark)` background) with white/light text. High contrast for urgency. Contains a headline, supporting copy, and a prominent pulsing phone CTA button.

**Recommended structure:**
```tsx
import type { CSSProperties } from 'react'
import { site } from '../data/common'
import { IconPhone } from './Icons'

interface CtaBandProps {
  className?: string
  style?: CSSProperties
}

const sectionStyle: CSSProperties = {
  padding: '56px 0',
  background: 'var(--dark)',
  color: 'var(--white)',
  textAlign: 'center',
}

const headlineStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: '-.03em',
  marginBottom: 12,
}

const bodyStyle: CSSProperties = {
  fontSize: '.95rem',
  lineHeight: 1.6,
  opacity: 0.75,
  maxWidth: 480,
  margin: '0 auto 28px',
}

export default function CtaBand({ className, style }: CtaBandProps) {
  return (
    <section
      aria-label="Contact us"
      className={className}
      style={{ ...sectionStyle, ...style }}
    >
      <div className="wrap">
        <h2 style={headlineStyle}>
          Ready to take the first step?
        </h2>
        <p style={bodyStyle}>
          Call our admissions team 24/7. No waitlists, no judgment — just answers.
        </p>
        <a
          href={site.phoneTel}
          className="btn btn-primary btn-pulse"
          style={{ fontSize: '1rem', padding: '16px 36px' }}
        >
          <IconPhone style={{ width: 18, height: 18 }} />
          Call {site.phone}
        </a>
      </div>
    </section>
  )
}
```

**Key decisions:**
- Uses `var(--dark)` background with `var(--white)` text for high contrast (meets WCAG AA)
- Headline uses `clamp()` for fluid typography matching the design system
- Phone number sourced from `site.phoneTel` and `site.phone` — NEVER hardcoded
- CTA button uses existing `.btn .btn-primary .btn-pulse` CSS classes for consistent styling
- Padding `16px 36px` ensures the CTA easily exceeds the 44x44px minimum touch target (FR42)
- Supporting copy uses `opacity: 0.75` on white text over `var(--dark)` — this maintains WCAG AA contrast (white at 75% opacity on #0f172a computes to approximately 11:1 ratio)
- `<section>` with `aria-label` for screen reader landmark identification

### Component File Structure Convention (from Architecture)

Both components follow this internal order:
1. Imports (React types, then data imports, then component imports)
2. Interface/type definitions (props)
3. Extracted style constants (typed as `CSSProperties`)
4. Component function (`export default function Name`)

NO barrel files. Import directly: `import TrustBadges from '../components/TrustBadges'`

### Heading Hierarchy Consideration

These components will be rendered by PageLayout (Story 1.7) between `<main>` content and `<footer>`. The CtaBand uses an `<h2>` element.

**IMPORTANT:** The heading level in CtaBand may need adjustment depending on the page context. Since CtaBand sits outside `<main>` in the PageLayout flow (after main content, before footer), an `<h2>` is appropriate as a section-level heading within its own `<section>` landmark. However, if testing reveals heading hierarchy warnings, consider using a `<p>` with visual heading styles instead, or making the heading level configurable via props.

### Responsive Behavior (900px breakpoint)

**TrustBadges:**
- Desktop (> 900px): Horizontal row of badges, centered
- Mobile (< 900px): `flexWrap: 'wrap'` handles this — badges wrap naturally
- No `<style>` block needed unless badge spacing needs mobile-specific adjustment

**CtaBand:**
- Desktop (> 900px): Centered text block with CTA button
- Mobile (< 900px): Same centered layout — no structural change needed since it's already a single-column centered layout
- Consider reducing padding on mobile via a `<style>` block:

```tsx
<style>{`
  @media (max-width: 900px) {
    .cta-band { padding: 40px 0 !important; }
  }
`}</style>
```

Add a `cta-band` className to the section element to target it.

### Data Import Path

**After Story 1.2 (data split):**
```ts
import { site, accreditations } from '../data/common'
```

**If Story 1.2 is NOT complete yet (data still in content.ts):**
```ts
import { site, accreditations } from '../data/content'
```

The dev agent should check which data file exists at build time and import accordingly. The Architecture anti-patterns doc explicitly calls out: `import { site } from '../data/content'` is WRONG once the data split has occurred. Always import from the specific data module (`../data/common`), not the old monolithic file.

### Where These Components Get Rendered

Both TrustBadges and CtaBand are rendered by `PageLayout` (Story 1.7) on EVERY page. The rendering order in PageLayout will be:

```
Nav
Breadcrumb (interior pages only)
ErrorBoundary wrapping <main>
  {page content}
TrustBadges
CtaBand
Footer
```

**For this story:** Build the components in isolation. Do NOT create or modify PageLayout — that is Story 1.7. Verify the components work by temporarily importing them into an existing page (e.g., Home.tsx) or by creating a minimal test harness, then remove the temporary import before committing.

### Accessibility Checklist for Both Components

- [ ] `<section>` elements have `aria-label` attributes
- [ ] Badge images have descriptive `alt` text (not just the accreditation name — include "accreditation badge" or similar context)
- [ ] Phone CTA link (`<a href="tel:...">`) has visible text content (not icon-only)
- [ ] All text meets WCAG AA contrast ratios against their backgrounds
- [ ] CTA button has `:focus-visible` ring (provided by global `.btn:focus-visible` CSS class)
- [ ] Touch target on CTA link is at least 44x44px (padding ensures this)
- [ ] Components work with `prefers-reduced-motion` — the `.btn-pulse` animation is CSS-based and will be disabled by the existing `@media (prefers-reduced-motion: reduce)` rule in `index.css`
- [ ] No heading level violations — CtaBand `<h2>` is appropriate for a standalone section landmark

### Anti-Patterns to AVOID

1. **DO NOT** hardcode the phone number — always use `site.phoneTel` / `site.phone` from `data/common.ts`
2. **DO NOT** hardcode colors — use CSS tokens (`var(--dark)`, `var(--white)`, `var(--body)`, etc.)
3. **DO NOT** use arrow function default exports — use `export default function ComponentName`
4. **DO NOT** use CSS modules, styled-components, or Tailwind — inline styles + CSS tokens + existing CSS classes
5. **DO NOT** create barrel files in `components/` — no `components/index.ts`
6. **DO NOT** use `<div onClick>` for the phone CTA — use `<a href="tel:...">` for proper semantics and mobile behavior
7. **DO NOT** use `--muted` color for any essential text below 18px — use `var(--body)` instead
8. **DO NOT** render these inside PageLayout in this story — that's Story 1.7
9. **DO NOT** create test files in this story — testing infrastructure is Story 1.10
10. **DO NOT** use decorative `alt=""` on accreditation badges — they are informational images and require descriptive alt text (FR28)
11. **DO NOT** import from `../data/content` if `../data/common` already exists — always use the split data file

### Content Strings

**CtaBand copy (recommended, adjust as needed):**
- Headline: "Ready to take the first step?"
- Body: "Call our admissions team 24/7. No waitlists, no judgment — just answers."
- CTA text: "Call (725) 525-9897" (using `site.phone`)

**Architecture Note:** CtaBand headline and body text should be sourced from `data/common.ts` (e.g., `site.ctaBand.headline`, `site.ctaBand.body`) rather than hardcoded in the component, per architecture rule 'All user-facing content from data files.' If keeping content in the component, document this as an accepted exception for shell-level components.

These strings should be sourced from `data/common.ts` in production for content consistency. If Story 1.2 has defined a `ctaBand` content object in `common.ts`, use that. If not, hardcoding the headline/body copy in the component is acceptable for MVP — it can be moved to data files in a later refinement.

**TrustBadges:** No copy beyond the badge names, which come from the `accreditations` data array.

### Git Intelligence

**Commit convention:** `feat:` prefix for new features (conventional commits)
**Suggested commit message:** `feat: add TrustBadges and CtaBand components (FR12, FR17, FR18, FR28)`
**Files to commit:**
- `src/components/TrustBadges.tsx` (new)
- `src/components/CtaBand.tsx` (new)
- `src/data/common.ts` (modified — if accreditations data updated)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation-Patterns] — Component patterns, naming conventions, styling rules
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — BaseComponentProps, export conventions, accessibility patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles, extracted style constants
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — Phone number sourcing, data import rules
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] — TrustBadges.tsx and CtaBand.tsx in components/ flat directory
- [Source: _bmad-output/planning-artifacts/architecture.md#Architectural-Boundaries] — PageLayout renders TrustBadges + CtaBand, components have zero content knowledge
- [Source: _bmad-output/planning-artifacts/prd.md#FR12] — Accreditation badges on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] — Phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR18] — Mobile click-to-call
- [Source: _bmad-output/planning-artifacts/prd.md#FR28] — Descriptive alt text on all images
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.5] — Story definition and acceptance criteria
- [Source: mockups/silverstate-react/src/components/Icons.tsx] — IconPhone, IconAward, IconShield exports
- [Source: mockups/silverstate-react/src/components/Footer.tsx] — Existing accreditation text reference and inline style patterns
- [Source: mockups/silverstate-react/src/components/Nav.tsx] — Existing phone CTA pattern in header
- [Source: mockups/silverstate-react/src/data/content.ts] — Current accreditations array and site object
- [Source: mockups/silverstate-react/src/types.ts] — AccreditationEntry, BaseComponentProps interfaces
- [Source: mockups/silverstate-react/src/index.css] — CSS tokens, .btn classes, .wrap utility, .btn-pulse animation
- [Source: mockups/silverstate-react/public/assets/] — joint-commission.webp available; LegitScript and NAATP logos NOT available

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- NAATP already present in accreditations data (added during Story 1.4). HIPAA Compliant also kept as a 4th entry.

### Completion Notes List

- Created TrustBadges.tsx: horizontal badge strip with `var(--warm)` background, flexWrap for mobile, `<section aria-label>`, IconAward for text-only badges, descriptive alt text on logo images
- Created CtaBand.tsx: dark full-width CTA band with urgency headline, phone CTA using `btn btn-primary btn-pulse`, `site.phoneTel`/`site.phone` from data, `<section aria-label="Contact us">`, responsive padding via `<style>` block, aria-label on phone link
- Both components follow architecture: `export default function`, extracted CSSProperties constants, CSS tokens only, no hardcoded data
- Accreditations data verified: Joint Commission (logo), LegitScript (null), HIPAA Compliant (null), NAATP (null)
- Zero TypeScript errors, zero Vite build errors
- No new dependencies

### Change Log

- 2026-02-24: Story 1.5 implemented — TrustBadges and CtaBand greenfield components created

### File List

- src/components/TrustBadges.tsx (new)
- src/components/CtaBand.tsx (new)
