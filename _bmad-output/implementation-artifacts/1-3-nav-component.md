# Story 1.3: Nav Component

Status: review

## Story

As a **family member visiting the site**,
I want persistent navigation with a visible phone number and click-to-call capability,
So that I can always find my way around the site and contact Silver State instantly from any page.

**Dependencies:** Story 1.1 (production project initialized), Story 1.2 (shared data types and `data/common.ts` with `site.phoneTel`, `site.phone`, nav links array)

**FRs covered:** FR17, FR18, FR26, FR27, FR41, FR42, NFR15, NFR17

## Acceptance Criteria

1. **Given** a user visits any page, **When** the page loads, **Then** the Nav displays the Silver State logo, primary navigation links, and a phone CTA with `tel:` link (FR17, FR18)
2. **And** a skip navigation link is the first focusable element on the page (NFR17)
3. **And** on mobile (< 900px), the nav collapses to a hamburger menu that opens a full navigation panel
4. **And** the phone CTA is always visible -- not hidden inside the mobile menu
5. **And** all interactive elements are keyboard accessible with visible focus indicators (FR26, NFR15)
6. **And** touch targets meet 44x44px minimum on mobile (FR42)
7. **And** the Nav renders correctly at 320px, 768px, and 1024px+ viewports (FR41)

## Tasks / Subtasks

- [x] **Task 1: Update data imports and remove hardcoded content** (AC: #1)
  - [x] 1.1: Replace the hardcoded `navLinks` array inside Nav.tsx with an import from `data/common.ts` -- the nav links array must be defined in `common.ts` by Story 1.2
  - [x] 1.2: Replace the hardcoded phone number `tel:7255259897` with `site.phoneTel` imported from `data/common.ts`
  - [x] 1.3: Replace the hardcoded display phone `(725) 525-9897` with `site.phone` imported from `data/common.ts`
  - [x] 1.4: Remove the local `NavLink` interface definition from Nav.tsx -- use the shared `NavLinkItem` type from `types.ts` (named `NavLinkItem`, not `NavLink`, to avoid collision with React Router's `NavLink` component)
  - [x] 1.5: Remove the `variant` prop and `_variant` parameter -- the mockup's light/dark variant system is unused (only light mode exists in production). If a dark variant is needed later, it can be re-added. Remove the `NavProps` interface that only contained `variant`
  - [x] 1.6: Convert nav link `<a href="#programs">` hash links to `<Link to="/programs/residential-treatment">` (or appropriate route paths) using React Router `Link` component. The exact link targets come from the nav links array in `data/common.ts`

- [x] **Task 2: Add IconMenu and IconClose to Icons.tsx** (AC: #3)
  - [x] 2.1: Add `IconMenu` (hamburger icon) to `src/components/Icons.tsx` -- 24x24 viewBox, three horizontal lines, `stroke="currentColor"`, `strokeWidth="2"`, `aria-hidden="true"`, following existing icon pattern exactly
  - [x] 2.2: Add `IconClose` (X icon) to `src/components/Icons.tsx` -- 24x24 viewBox, X shape, `stroke="currentColor"`, `strokeWidth="2"`, `aria-hidden="true"`, following existing icon pattern exactly

- [x] **Task 3: Implement mobile hamburger menu** (AC: #3, #4, #5, #6)
  - [x] 3.1: Add `menuOpen` boolean state via `useState(false)`
  - [x] 3.2: Import `useIsMobile` hook from `hooks/useIsMobile`
  - [x] 3.3: On mobile (< 900px), render a hamburger `<button>` with `IconMenu`/`IconClose` toggling based on `menuOpen` state. The button must have `aria-label="Open menu"` / `aria-label="Close menu"` and `aria-expanded={menuOpen}`
  - [x] 3.4: Hamburger button must be minimum 44x44px touch target (use `min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;`)
  - [x] 3.5: When `menuOpen` is true, render a full-viewport mobile navigation panel **below** the fixed header bar (position: fixed, top: 64px, left: 0, right: 0, bottom: 0). The panel must have `background: var(--cream)` and `z-index: 99`
  - [x] 3.6: Mobile panel renders the same nav links as desktop but as a vertical list with large touch targets (each link at least 48px tall with padding)
  - [x] 3.7: Mobile panel links use `<Link to="...">` from React Router -- same data source as desktop links
  - [x] 3.8: Clicking a mobile nav link closes the menu (`setMenuOpen(false)`) AND navigates to the route
  - [x] 3.9: The phone CTA button must remain **outside** the mobile menu panel -- always visible in the header bar regardless of menu state (AC #4)
  - [x] 3.10: On desktop (>= 900px), the hamburger button and mobile panel must NOT render at all (conditionally render based on `useIsMobile()`, not CSS `display: none`)
  - [x] 3.11: When mobile menu is open, set `document.body.style.overflow = 'hidden'` to prevent background scrolling. Reset to `''` on close. Use `useEffect` with cleanup to ensure reset on unmount
  - [x] 3.12: Add a `<style>` block or CSS in `index.css` for the mobile menu slide-in animation: `transform: translateX(100%)` to `translateX(0)` with `transition: transform 0.3s cubic-bezier(0.2, 0.6, 0.3, 1)`. Respect `prefers-reduced-motion` by setting `transition-duration: 0.01ms`

- [x] **Task 4: Ensure skip navigation link** (AC: #2)
  - [x] 4.1: Verify the skip link `<a href="#main-content" className="skip-link">Skip to main content</a>` is the **first** element rendered by Nav (before `<header>`) -- this already exists in the mockup, confirm it is preserved
  - [x] 4.2: Verify the target `id="main-content"` exists on the `<main>` element in PageLayout (Story 1.7 dependency -- add a dev note that PageLayout must have `<main id="main-content">`)
  - [x] 4.3: Verify the `.skip-link` CSS in `index.css` is intact: positioned off-screen by default (`top: -100px`), slides into view on `:focus` (`top: 0`), styled with `background: var(--dark)`, `color: var(--white)`, `z-index: 9999`

- [x] **Task 5: Keyboard accessibility** (AC: #5)
  - [x] 5.1: All nav links must be `<Link>` (anchor elements -- inherently focusable and keyboard navigable)
  - [x] 5.2: The phone CTA must be an `<a href="tel:...">` (inherently focusable)
  - [x] 5.3: The hamburger button must be a `<button>` element (inherently focusable) -- never a `<div onClick>`
  - [x] 5.4: Verify `:focus-visible` styles from `index.css` apply to all interactive elements (the global `a:focus-visible, button:focus-visible` rule with `box-shadow: 0 0 0 3px rgba(19, 75, 142, 0.3)` must apply)
  - [x] 5.5: When mobile menu opens, move focus to the first nav link in the panel. When menu closes, return focus to the hamburger button. Use `useRef` on both the first link and the hamburger button
  - [x] 5.6: Pressing `Escape` while the mobile menu is open must close it. Add a `useEffect` with a `keydown` listener on `document` that checks for `key === 'Escape'` and calls `setMenuOpen(false)`
  - [x] 5.7: Implement focus trap inside the mobile menu panel when open -- Tab cycles through menu items and does not escape to content behind the overlay. Use a manual focus trap: listen for `Tab` keydown on the last focusable element and redirect focus to the first, and vice versa for `Shift+Tab` on the first element

- [x] **Task 6: Touch target sizing** (AC: #6)
  - [x] 6.1: Phone CTA button: already meets 44px via `.btn` padding (`padding: 14px 28px` + text). Verify rendered height >= 44px
  - [x] 6.2: Hamburger menu button: enforce `min-width: 44px; min-height: 44px`
  - [x] 6.3: Desktop nav links: current padding is `4px 8px` -- acceptable on desktop where touch targets are not required
  - [x] 6.4: Mobile nav links (inside mobile panel): ensure each link has `min-height: 48px; display: flex; align-items: center; padding: 12px 24px` so touch target exceeds 44x44px

- [x] **Task 7: Responsive behavior verification** (AC: #7)
  - [x] 7.1: At 320px: header height 64px, logo scales if needed (max logo height ~40px at 320px to leave room for phone CTA and hamburger), phone CTA visible, hamburger visible, no horizontal overflow
  - [x] 7.2: At 768px: still mobile layout (< 900px breakpoint), hamburger menu present, phone CTA visible, no horizontal overflow
  - [x] 7.3: At 1024px: desktop layout, nav links visible in horizontal row, phone CTA visible, no hamburger, no horizontal overflow
  - [x] 7.4: At 320px, the phone CTA text may be hidden (show icon only) to prevent overflow. Use a span with a class that hides on small screens: `display: none` below ~480px for the text, keeping the `IconPhone` + link always tappable. This is a design decision -- the `tel:` link and icon remain, ensuring click-to-call works even without visible text
  - [x] 7.5: Ensure no element in the Nav causes horizontal scrolling at any viewport width (FR43)

- [x] **Task 8: Semantic HTML and ARIA** (AC: #1, #5)
  - [x] 8.1: Wrap the entire navigation in `<header>` with `role="banner"` (already present in mockup)
  - [x] 8.2: Wrap the nav links in `<nav aria-label="Main navigation">` (already present in mockup)
  - [x] 8.3: The mobile nav panel must also be wrapped in `<nav aria-label="Main navigation">` OR share the same `<nav>` element -- do NOT create two separate `<nav aria-label="Main navigation">` landmarks. On mobile, the same `<nav>` element should be the one that renders links (either the desktop horizontal links or the mobile panel links, never both simultaneously in the DOM for the same aria-label)
  - [x] 8.4: Phone CTA link: ensure `aria-label="Call Silver State at (725) 525-9897"` for screen reader clarity
  - [x] 8.5: Logo link: verify `aria-label="Silver State -- Home"` is preserved from mockup. The logo `<img>` should have `alt=""` (decorative, since the link itself has an aria-label)

- [x] **Task 9: CSS and styling cleanup** (AC: #7)
  - [x] 9.1: Remove the inline `<style>` block at the end of Nav.tsx that hides `.nav-desktop` on mobile. Replace this with the conditional rendering approach from Task 3.10 (mobile uses `useIsMobile()` to decide which layout to render)
  - [x] 9.2: Add necessary mobile menu styles. Prefer a `<style>` block inside the component for the mobile panel animation and mobile-specific overrides, following the Architecture pattern for component-specific media queries
  - [x] 9.3: Verify all colors use CSS tokens (`var(--blue)`, `var(--white)`, `var(--body)`, `var(--cream)`, `var(--border)`, `var(--text)`) -- never hardcoded hex values
  - [x] 9.4: Verify the header glassmorphism effect is preserved: `backdrop-filter: blur(24px)`, `background: rgba(253,251,247,.88)` on scroll. These values should reference the cream color concept but the existing rgba values are acceptable since there is no rgba token
  - [x] 9.5: Ensure `transition` on the header background/border respects `prefers-reduced-motion` -- the global CSS reset handles this (`transition-duration: 0.01ms !important`), but verify the inline transition on the header element does not override it. Consider using a CSS class instead of inline `transition` for the header so the global `prefers-reduced-motion` rule applies

- [x] **Task 10: Verify final component compiles and renders** (AC: all)
  - [x] 10.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [x] 10.2: Run `npm run dev` -- Nav renders correctly on homepage
  - [x] 10.3: Manually verify at 320px viewport: phone icon visible, hamburger visible, no overflow
  - [x] 10.4: Manually verify at 768px viewport: mobile layout, hamburger + phone CTA
  - [x] 10.5: Manually verify at 1024px viewport: desktop layout, horizontal links + phone CTA
  - [x] 10.6: Manually verify keyboard: Tab through skip link -> logo -> nav links -> phone CTA. On mobile: Tab through skip link -> logo -> hamburger -> (open) -> nav links -> phone CTA
  - [x] 10.7: Manually verify mobile menu: opens, closes, Escape closes, clicking link closes and navigates, focus management works

## Dev Notes

### Existing Nav.tsx Analysis

The current mockup Nav at `mockups/silverstate-react/src/components/Nav.tsx` provides a solid foundation but needs significant enhancement for production:

**What already exists and should be PRESERVED:**
- Fixed header with glassmorphism effect (`backdrop-filter: blur(24px)`, semi-transparent cream background)
- Scroll-responsive background opacity (transparent at top, opaque on scroll via `useState` + `useEffect`)
- Skip navigation link as the first rendered element (`<a href="#main-content" className="skip-link">`)
- Semantic HTML structure: `<header role="banner">` wrapping a `<nav aria-label="Main navigation">`
- Logo as `<Link to="/">` with `aria-label="Silver State -- Home"` and decorative `<img alt="">`
- Phone CTA as `<a href="tel:...">` with `.btn` class and `IconPhone` icon
- `.wrap` layout container for max-width centering
- Header height of 64px

**What MUST CHANGE for production:**

1. **Hardcoded data removal:** The `navLinks` array and phone number are hardcoded inline. These must come from `data/common.ts` (Story 1.2 provides `site.phone`, `site.phoneTel`, and a nav links array).

2. **Hash links to route links:** The current links use `href="#programs"` etc. (same-page anchors). Production needs `<Link to="/programs/residential-treatment">` etc. (route navigation). The link targets come from the nav links array in `data/common.ts`.

3. **No mobile hamburger menu:** The mockup hides `.nav-desktop` on mobile via a `<style>` block but provides NO replacement -- on mobile, users only see the logo and phone CTA with no way to navigate. A full hamburger menu implementation is required.

4. **Unused variant prop:** The `variant` prop (`light | dark`) is accepted but immediately aliased to `_variant` (unused). Remove it.

5. **Phone CTA aria-label:** The phone link has no `aria-label`. Add `aria-label="Call Silver State at (725) 525-9897"` for screen reader users.

6. **No touch target enforcement:** Desktop nav link padding is 4x8px -- fine for desktop mouse but must not be used on mobile. Mobile menu links need 44px+ touch targets.

### Mobile Hamburger Menu Requirements

The mobile menu is the largest new feature in this story. Implementation details:

**Layout at mobile (< 900px):**
```
[Logo] .................. [Phone Icon/CTA] [Hamburger]
```

**When hamburger is tapped:**
```
[Logo] .................. [Phone Icon/CTA] [X Close]
|-----------------------------------------------|
| Programs                                    > |
| Treatment                                   > |
| Admissions                                  > |
| About                                       > |
|                                               |
|                                               |
|-----------------------------------------------|
```

**Implementation pattern:**
- Use `useIsMobile()` to conditionally render mobile vs. desktop layout
- Desktop: horizontal `<nav>` with inline links (existing pattern)
- Mobile: hamburger `<button>` that toggles a full-viewport overlay panel
- The phone CTA ALWAYS renders in the header bar -- never moves into the menu panel
- The mobile panel slides in from the right edge with a CSS transform transition
- Background scroll is locked when menu is open (`document.body.style.overflow = 'hidden'`)

**Focus management:**
- Opening the menu: focus moves to the first nav link in the panel
- Closing the menu (via X button, Escape, or link click): focus returns to the hamburger button
- Tab trap: focus cycles within the mobile panel (hamburger button, nav links, phone CTA in header). Use a manual focus trap approach

### Skip Link Implementation

The skip link is already implemented in the mockup and must be preserved exactly. The CSS in `index.css` (lines 106-125) provides:
- `.skip-link`: absolutely positioned at `top: -100px` (off-screen), `z-index: 9999`
- `.skip-link:focus`: `top: 0`, with `outline: 2px solid var(--blue)` and `outline-offset: 2px`

The skip link targets `#main-content` which must exist on the `<main>` element. This is a Story 1.7 (PageLayout) responsibility -- the `<main>` element rendered by PageLayout must have `id="main-content"`.

**Dev agent guardrail:** Do NOT remove or restructure the skip link. It must remain as the very first child element rendered by the Nav component, before the `<header>`.

### Phone CTA with tel: Link

The phone CTA requirements:
- Must use `site.phoneTel` (value: `tel:7255259897`) for the `href`
- Must use `site.phone` (value: `(725) 525-9897`) for the display text
- Must include `IconPhone` icon
- Must have `aria-label="Call Silver State at (725) 525-9897"` (construct dynamically from `site.phone`)
- Must be styled with `.btn` class + inline overrides for the pill shape (`borderRadius: 999`)
- Must be visually prominent: `background: var(--blue)`, `color: var(--white)`
- On very small screens (< 480px), the phone number text may hide, leaving only the icon. The `<a>` element remains the same size (44px+ touch target) and the `tel:` link still works

### Touch Target Sizing

Per FR42 and WCAG 2.5.5 (enhanced), all interactive elements need 44x44px minimum on mobile:

| Element | Desktop | Mobile |
|---------|---------|--------|
| Nav links (horizontal) | 4px 8px padding (no min size needed) | 48px tall, full-width, 12px 24px padding |
| Phone CTA | `.btn` padding gives ~44px height | Same -- `.btn` padding already sufficient |
| Hamburger button | N/A (not rendered) | Explicit `min-width: 44px; min-height: 44px` |
| Logo link | 56px tall image | May scale to ~40px at 320px -- still meets 44px via padding |
| Skip link | Only visible on focus | Same -- CSS gives `padding: 12px 24px` |

### Responsive Behavior at Each Breakpoint

**320px (smallest supported mobile):**
- Single-row header: Logo (scaled ~40px height) | Phone icon (no text) | Hamburger (44x44)
- Phone text hidden via responsive class, icon only
- No horizontal overflow -- all elements fit
- Mobile menu takes full viewport below header

**768px (tablet portrait -- still mobile layout at < 900px):**
- Same mobile layout as 320px but with more breathing room
- Phone CTA can show full text `(725) 525-9897`
- Hamburger menu present

**1024px+ (desktop):**
- Full desktop layout: Logo | Nav links (horizontal row, gap 28px) | Phone CTA button
- No hamburger, no mobile menu
- `.wrap` container centers content at max-width 1200px

### Data Source for Nav Links (common.ts)

Story 1.2 creates `data/common.ts` which must export a nav links array. The Nav component imports this array and renders links from it. The expected shape (from Story 1.2):

```typescript
// Expected in data/common.ts (created by Story 1.2)
export const navLinks: NavLinkItem[] = [
  { label: 'Programs', href: '/programs/residential-treatment' },
  { label: 'Conditions', href: '/conditions/anxiety-treatment' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'About', href: '/about/our-team' },
]

export const site = {
  name: 'Silver State Adolescent Treatment Center',
  phone: '(725) 525-9897',
  phoneTel: 'tel:7255259897',
  // ...
}
```

**Dev agent guardrail:** If Story 1.2 is not yet complete when implementing this story, create a temporary local constant in Nav.tsx with the above shape and a `// TODO: import from data/common.ts when Story 1.2 is complete` comment. Do NOT block on Story 1.2 -- but the final version must use the imported data.

### Architecture Compliance Checklist

- [ ] Component uses `export default function Nav()` -- not arrow function export
- [ ] All colors reference CSS tokens (`var(--blue)`, `var(--white)`, etc.) -- no hardcoded hex
- [ ] Interactive elements: `<Link>` for navigation, `<a>` for phone CTA, `<button>` for hamburger -- no `<div onClick>`
- [ ] Inline styles for component-specific styling, CSS tokens from `index.css` for design system values
- [ ] `useIsMobile()` hook for breakpoint detection (not window width checks or CSS-only hiding)
- [ ] No CSS modules, no Tailwind, no styled-components
- [ ] No barrel file imports -- import Icons directly from `../components/Icons`
- [ ] Content data imported from `data/common.ts` -- no hardcoded phone numbers, site names, or nav labels
- [ ] File named `Nav.tsx` in `src/components/` (PascalCase)
- [ ] Co-located test file would be `Nav.test.tsx` (not in this story -- testing infra is Story 1.10)
- [ ] `prefers-reduced-motion` respected for all animations and transitions
- [ ] All images have appropriate `alt` text (logo `alt=""` since link has aria-label)
- [ ] No `--muted` color used for essential text below 18px
- [ ] Component accepts no props (variant removed) or minimal props if PageLayout needs to pass route info

### Project Structure Notes

**Files modified in this story:**

```
src/
  components/
    Nav.tsx              # MODIFY -- major rewrite of existing component
    Icons.tsx            # MODIFY -- add IconMenu and IconClose
  index.css              # POSSIBLY MODIFY -- add mobile menu animation styles if not using <style> block
```

**Files NOT modified (but depended upon):**

```
src/
  data/
    common.ts            # READ -- imports site info and navLinks (Story 1.2)
  hooks/
    useIsMobile.ts       # READ -- imported for breakpoint detection (already exists)
  types.ts               # READ -- NavLinkItem type (Story 1.2) -- named NavLinkItem (not NavLink) to avoid collision with React Router's NavLink component
  index.css              # READ -- .skip-link, .btn, .wrap, :focus-visible, prefers-reduced-motion
```

**Files that depend on this component:**

```
src/
  layouts/
    PageLayout.tsx       # Story 1.7 renders Nav at the top of every page
```

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] -- skip link, ARIA labels, keyboard operability, touch targets, semantic HTML
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] -- inline styles + CSS tokens, extracted style constants, responsive patterns, `prefers-reduced-motion`
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] -- export default function, props interface, BaseComponentProps
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming-Patterns] -- PascalCase components, Icon prefix for SVG icons
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- phone numbers from `site.phoneTel`, nav links from `common.ts`
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- flat components dir, no barrel files in components
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.3] -- acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR18] -- click-to-call on mobile
- [Source: _bmad-output/planning-artifacts/prd.md#FR26] -- keyboard navigation
- [Source: _bmad-output/planning-artifacts/prd.md#FR27] -- screen reader support via semantic HTML
- [Source: _bmad-output/planning-artifacts/prd.md#FR41] -- responsive across 320px+, 768px+, 1024px+
- [Source: _bmad-output/planning-artifacts/prd.md#FR42] -- 44x44px touch targets
- [Source: _bmad-output/planning-artifacts/prd.md#NFR15] -- keyboard operable with visible focus indicators
- [Source: _bmad-output/planning-artifacts/prd.md#NFR17] -- skip navigation on all pages
- [Source: mockups/silverstate-react/src/components/Nav.tsx] -- existing implementation baseline
- [Source: mockups/silverstate-react/src/components/Icons.tsx] -- existing icon pattern to follow
- [Source: mockups/silverstate-react/src/hooks/useIsMobile.ts] -- 900px breakpoint hook
- [Source: mockups/silverstate-react/src/index.css] -- skip-link CSS (lines 106-125), focus-visible styles (lines 242-251), prefers-reduced-motion (lines 66-78), .btn styles (lines 141-158), .wrap (lines 128-132)

### Anti-Patterns to AVOID

1. **DO NOT** use CSS `display: none` to hide desktop nav on mobile -- use conditional rendering via `useIsMobile()`. The `<style>` block approach from the mockup must be removed
2. **DO NOT** render the mobile menu panel when `useIsMobile()` returns false -- conditionally render, not CSS hide
3. **DO NOT** create a `<div onClick>` for the hamburger button -- must be a `<button>` element
4. **DO NOT** hardcode the phone number or nav links -- import from `data/common.ts`
5. **DO NOT** use `window.innerWidth` checks directly -- use the `useIsMobile()` hook
6. **DO NOT** add new color tokens or hardcoded hex values -- use existing CSS custom properties
7. **DO NOT** create a separate CSS module file (`Nav.module.css`) -- use inline styles + `<style>` block for media queries
8. **DO NOT** forget to lock body scroll when mobile menu is open
9. **DO NOT** forget to clean up body scroll lock on component unmount (useEffect cleanup)
10. **DO NOT** render two `<nav aria-label="Main navigation">` landmarks simultaneously in the DOM -- screen readers will announce duplicate landmarks
11. **DO NOT** put the phone CTA inside the mobile menu panel -- it must always be visible in the header bar
12. **DO NOT** use `tabIndex` on elements that are already natively focusable (`<a>`, `<button>`)
13. **DO NOT** forget the Escape key handler to close the mobile menu
14. **DO NOT** forget focus management (move focus to first link on open, return to hamburger on close)
15. **DO NOT** use `useEffect` without a cleanup function for event listeners (scroll, keydown)
16. **DO NOT** create barrel files or index.ts in `src/components/`
17. **DO NOT** skip the `aria-label` on the phone CTA link
18. **DO NOT** use `position: sticky` for the header -- it must be `position: fixed` (already correct in mockup)
19. **DO NOT** change the header height from 64px -- other components may depend on this value for spacing
20. **DO NOT** install any new npm packages for this story -- everything needed is already available (React, React Router, useIsMobile hook)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Fixed TypeScript error: removed `variant` prop from Nav but Home.tsx still passed `variant="dark"`. Updated Home.tsx to use `<Nav />` without props.
- Refined focus trap logic: initial implementation trapped between hamburger and phoneCTA but DOM order is Phone CTA -> Hamburger -> Nav links. Corrected to trap Tab on last nav link -> Phone CTA and Shift+Tab on Phone CTA -> last nav link, allowing natural tab flow between Phone CTA -> Hamburger -> First link.

### Completion Notes List

- Major rewrite of Nav.tsx from mockup to production-ready component
- Removed unused `variant` prop and `NavProps` interface; Nav now accepts no props
- Converted all `<a href>` nav links to React Router `<Link to>` components
- Implemented full mobile hamburger menu with slide-in animation from right edge
- Added IconMenu (hamburger) and IconClose (X) to Icons.tsx following existing pattern
- Mobile menu uses conditional rendering via `useIsMobile()` hook, not CSS display:none
- Phone CTA always visible in header bar, never hidden inside mobile menu panel
- Focus management: focus moves to first link on open, returns to hamburger on close
- Escape key closes mobile menu
- Focus trap cycles through Phone CTA -> Hamburger -> Nav links -> (wrap) Phone CTA
- Body scroll locked when mobile menu is open, with cleanup on unmount
- Phone text hidden below 480px (icon-only), tel: link still functional
- Logo scales from 56px (desktop) to 40px (mobile) via useIsMobile
- Header transition moved to CSS class `.site-header` so global `prefers-reduced-motion` applies
- Mobile menu animation respects `prefers-reduced-motion` via explicit CSS override
- All ARIA labels present: skip link, nav landmark, phone CTA, logo link, hamburger button
- No duplicate `<nav aria-label="Main navigation">` landmarks in DOM (conditional rendering ensures only one)
- Touch targets: hamburger 44x44, mobile links 48px min-height, phone CTA via .btn padding
- Zero TypeScript errors, zero Vite build errors
- No new dependencies installed

### File List

- src/components/Nav.tsx (modified - major rewrite)
- src/components/Icons.tsx (modified - added IconMenu, IconClose)
- src/pages/Home.tsx (modified - removed variant="dark" prop from Nav usage)

### Change Log

- 2026-02-24: Story 1.3 implemented - Nav component rewritten for production with mobile hamburger menu, keyboard accessibility, focus management, ARIA compliance, responsive behavior, and all data imported from common.ts
