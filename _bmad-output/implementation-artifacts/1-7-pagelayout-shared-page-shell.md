# Story 1.7: PageLayout — Shared Page Shell

Status: review

## Story

As a **developer**,
I want a single PageLayout component that wraps every page with the shared shell,
So that cross-cutting concerns are handled in one place and no page ships without the required elements.

## Acceptance Criteria

1. **Given** any page component rendered within the app, **When** PageLayout wraps the page, **Then** it renders: Nav (top) -> Breadcrumb (interior pages only) -> ErrorBoundary wrapping `<main>` content -> TrustBadges -> CtaBand -> Footer
2. **And** the `<main>` element has proper landmark role (FR27)
3. **And** heading hierarchy starts fresh within each page's content
4. **And** every page automatically gets phone CTA (FR17), trust badges (FR12), privacy link (FR33), breadcrumb on interior pages (FR39)
5. **And** PageLayout adds no page-specific content knowledge — it is a pure structural shell
6. **And** SmoothScroll and ScrollProgress wrappers live inside PageLayout (moved out of App.tsx)
7. **And** the layout is fully responsive across all breakpoints (FR41)
8. **And** keyboard navigation flows naturally through the document order (FR26)

## FRs Covered

| FR | Description | How PageLayout Satisfies It |
|----|-------------|----------------------------|
| FR12 | Accreditation badges on every page | PageLayout renders `<TrustBadges />` on every page automatically |
| FR17 | Phone CTA on every page | PageLayout renders `<CtaBand />` (dedicated CTA section) + Nav includes phone CTA in header |
| FR27 | Screen reader support via landmarks | PageLayout uses `<main>` element providing the main landmark; Nav provides `<header>`/`<nav>`, Footer provides `<footer>` |
| FR33 | Privacy policy accessible from every page | Footer (rendered by PageLayout) includes privacy policy link |
| FR39 | Breadcrumb on all interior pages | PageLayout renders `<Breadcrumb />` conditionally — shown on all pages except homepage |

## Dependencies

### Hard Dependencies (must be complete before this story)

| Story | Component | Why Required |
|-------|-----------|--------------|
| 1.1 | Project Foundation | Production directory structure, React Router v7 framework mode, SmoothScroll, ScrollProgress |
| 1.3 | Nav | PageLayout renders Nav as the first visible element |
| 1.4 | Footer | PageLayout renders Footer as the last visible element |
| 1.5 | TrustBadges + CtaBand | PageLayout renders both between main content and Footer |
| 1.6 | Breadcrumb + ErrorBoundary | PageLayout renders Breadcrumb conditionally and wraps content in ErrorBoundary |

### Dependency Import Map

```
src/layouts/PageLayout.tsx
  imports from:
    react                          -> ReactNode, type
    react-router                   -> useLocation
    ../components/Nav              -> Nav (default export)
    ../components/Footer           -> Footer (default export)
    ../components/TrustBadges      -> TrustBadges (default export)
    ../components/CtaBand          -> CtaBand (default export)
    ../components/Breadcrumb       -> Breadcrumb (default export)
    ../components/ErrorBoundary    -> ErrorBoundary (default export)
    ../components/SmoothScroll     -> SmoothScroll (default export)
    ../components/ScrollProgress   -> ScrollProgress (default export)
```

### Downstream Consumers (depend on this story)

| Story | What Uses PageLayout |
|-------|---------------------|
| 1.8 | Routes wrap all pages with PageLayout |
| 1.12 | Privacy + 404 pages use PageLayout |
| 2.x | Homepage uses PageLayout (no breadcrumb) |
| 3.x-8.x | All content pages use PageLayout (with breadcrumb) |

## Tasks / Subtasks

- [x] **Task 1: Create PageLayout component file** (AC: #1, #2, #5)
  - [x] 1.1: Create `src/layouts/PageLayout.tsx`
  - [x] 1.2: Define `PageLayoutProps` interface with `children: ReactNode`
  - [x] 1.3: Export as `export default function PageLayout({ children }: PageLayoutProps)`
  - [x] 1.4: Import all 8 dependency components (Nav, Footer, TrustBadges, CtaBand, Breadcrumb, ErrorBoundary, SmoothScroll, ScrollProgress)

- [x] **Task 2: Implement render order** (AC: #1, #6)
  - [x] 2.1: Wrap entire output in `<SmoothScroll>` as outermost wrapper
  - [x] 2.2: Render `<ScrollProgress />` as first child inside SmoothScroll
  - [x] 2.3: Render `<Nav />` as the first structural element
  - [x] 2.4: Render `<Breadcrumb />` conditionally (see Task 3)
  - [x] 2.5: Render `<main id="main-content">` wrapping `<ErrorBoundary>{children}</ErrorBoundary>`
  - [x] 2.6: Render `<TrustBadges />` after main
  - [x] 2.7: Render `<CtaBand />` after TrustBadges
  - [x] 2.8: Render `<Footer />` as last structural element

- [x] **Task 3: Implement homepage detection for breadcrumb** (AC: #1, #4)
  - [x] 3.1: Use `useLocation()` from `react-router` to get current pathname
  - [x] 3.2: Determine homepage: `const isHomepage = pathname === '/'`
  - [x] 3.3: Conditionally render Breadcrumb: `{!isHomepage && <Breadcrumb />}`

- [x] **Task 4: Ensure proper landmark structure** (AC: #2, #8)
  - [x] 4.1: `<main>` element must have `id="main-content"` (matches Nav skip-link target)
  - [x] 4.2: Do NOT add redundant `role="main"` — the `<main>` element has implicit main role
  - [x] 4.3: Verify document landmark order: banner (Nav/header) -> navigation (Nav/nav) -> main -> contentinfo (Footer/footer)

- [x] **Task 5: Update App.tsx to remove SmoothScroll/ScrollProgress** (AC: #6)
  - [x] 5.1: Remove SmoothScroll import and wrapper from App.tsx
  - [x] 5.2: Remove ScrollProgress import and element from App.tsx
  - [x] 5.3: App.tsx should render routes only — PageLayout handles all wrapping

- [x] **Task 6: Verify PageLayout integration with route configuration** (AC: #1, #4)
  - [x] 6.1: **Verify** that Story 1.8 correctly integrates PageLayout as a layout route. This story creates the PageLayout component; Story 1.8 owns the route configuration that wires it in.
  - [x] 6.2: Verify: homepage renders WITHOUT breadcrumb, interior pages render WITH breadcrumb

- [x] **Task 7: Verify heading hierarchy** (AC: #3)
  - [x] 7.1: Confirm PageLayout renders NO `<h1>` — each page provides its own `<h1>` inside `{children}`
  - [x] 7.2: Confirm Nav, TrustBadges, CtaBand, and Footer do not inject `<h1>` elements
  - [x] 7.3: The only heading levels PageLayout's shell components may use are `<h2>`+ (e.g., Footer section headings use `<h4>`)

- [x] **Task 8: Verify build and type-check** (AC: #1-#8)
  - [x] 8.1: `npx tsc --noEmit` passes with zero TypeScript errors
  - [x] 8.2: `npm run dev` starts and all pages render with the full shell
  - [x] 8.3: Homepage: Nav + main content + TrustBadges + CtaBand + Footer (NO breadcrumb)
  - [x] 8.4: Interior page: Nav + Breadcrumb + main content + TrustBadges + CtaBand + Footer
  - [x] 8.5: SmoothScroll functions on desktop (Lenis smooth scrolling active)
  - [x] 8.6: ScrollProgress bar visible at top of page during scroll

## Dev Notes

### Render Order Diagram

```
<SmoothScroll>                         // Lenis smooth scroll (desktop only)
  <ScrollProgress />                   // Fixed progress bar at top (z-9999)
  <Nav />                              // Fixed header (z-100): logo + nav + phone CTA
                                       //   includes <a href="#main-content"> skip link
  {!isHomepage && <Breadcrumb />}      // Interior pages only: visual trail + JSON-LD
  <main id="main-content">             // Landmark: main content area
    <ErrorBoundary>                    // Catches runtime errors, shows fallback + phone CTA
      {children}                       // Page-specific content (each page provides its own <h1>)
    </ErrorBoundary>
  </main>
  <TrustBadges />                      // Joint Commission, LegitScript, NAATP badges
  <CtaBand />                          // Phone CTA band: "Call Now" + tel: link
  <Footer />                           // Site links, contact info, privacy link, copyright
</SmoothScroll>
```

### Document Landmark Flow (Screen Readers)

```
[Skip Link]  ->  "Skip to main content"
[banner]     ->  <header> inside Nav
[navigation] ->  <nav aria-label="Main navigation"> inside Nav
[main]       ->  <main id="main-content"> in PageLayout
[contentinfo]->  <footer role="contentinfo"> in Footer
```

This landmark structure enables screen reader users to jump between major page regions using landmark navigation (FR27). The skip link targets `#main-content` which matches the `id` on the `<main>` element.

### Component Signature

```tsx
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  // ...
}
```

PageLayout follows the project's component convention:
- Named function default export (NOT arrow function)
- Props interface defined above the component
- Accepts `children: ReactNode` only — no other props
- No `className` or `style` props — PageLayout is not a visual component, it is a structural shell

### Homepage Detection Strategy

```tsx
import { useLocation } from 'react-router'

// Inside PageLayout:
const { pathname } = useLocation()
const isHomepage = pathname === '/'
```

**Import Path:** React Router v7 uses `'react-router'` (not `'react-router-dom'`).

Use `useLocation()` from `react-router`. The homepage is defined as `pathname === '/'` exactly. All other paths are interior pages and receive breadcrumbs.

Do NOT use:
- Route config metadata to determine homepage (over-engineered for a single boolean)
- A prop like `showBreadcrumb` (defeats the purpose of automatic behavior)
- `window.location` directly (breaks SSR/pre-rendering)

### SmoothScroll + ScrollProgress Migration

In the mockup (`App.tsx`), SmoothScroll and ScrollProgress wrap the route content:

```tsx
// BEFORE (mockup App.tsx)
<SmoothScroll>
  <ScrollProgress color="#5A7A6E" />
  <Routes>
    <Route path="/" element={<WarmImmersive />} />
  </Routes>
</SmoothScroll>
```

In production, these move INTO PageLayout so that:
1. Every page gets smooth scrolling and the progress bar automatically
2. App.tsx becomes a pure routing shell
3. The concern is centralized in one place (PageLayout owns the scroll experience)

```tsx
// AFTER (production App.tsx) — routing only
export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout><Outlet /></PageLayout>}>
        {/* all routes here */}
      </Route>
    </Routes>
  )
}
```

Note: The exact routing syntax depends on how Story 1.1 configured React Router v7 framework mode. If using a layout route pattern, PageLayout wraps `<Outlet />`. If using a wrapper pattern, PageLayout wraps `{children}`. The dev agent should match whatever convention Story 1.1 established.

### ScrollProgress Color

The mockup uses a hardcoded hex: `<ScrollProgress color="#5A7A6E" />`. In production, use the CSS token reference instead: `<ScrollProgress color="var(--sage)" />`. If `--sage` is not defined as a CSS custom property in `index.css`, use `#5A7A6E` directly (which is the sage color). Check `index.css` for available tokens before deciding.

### Architectural Boundary: What PageLayout Is and Is NOT

**PageLayout IS:**
- A structural shell that wraps every page
- The single location for cross-cutting layout concerns
- A pure composition of existing components
- The owner of SmoothScroll and ScrollProgress wrappers
- The place that provides the `<main>` landmark element

**PageLayout is NOT:**
- A data consumer (imports ZERO data files from `src/data/`)
- A content renderer (adds ZERO text, headings, or page-specific content)
- A styling component (applies ZERO visual styles to children — no wrapper `<div>` with styles)
- A state manager (holds ZERO application state beyond reading the URL for breadcrumb logic)
- A conditional renderer of page sections (it does NOT show/hide TrustBadges, CtaBand, or Footer per page)

The ONLY conditional logic in PageLayout is: `{!isHomepage && <Breadcrumb />}`

### Integration with React Router v7 Framework Mode

Story 1.1 set up React Router v7 framework mode. PageLayout integrates as a **layout route** — it wraps all child routes. There are two common patterns depending on how 1.1 configured the router:

**Pattern A: Layout Route with Outlet**
```tsx
// routes.ts or App.tsx
<Route element={<PageLayout><Outlet /></PageLayout>}>
  <Route path="/" element={<Home />} />
  <Route path="/programs/residential-treatment" element={<Residential />} />
  {/* all other routes */}
</Route>
```

**Pattern B: React Router v7 Framework Mode Root Layout**
```tsx
// If using app/root.tsx or equivalent
export default function Root() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}
```

The dev agent should use whichever pattern Story 1.1 established. The key requirement is: **every route renders inside PageLayout, no exceptions.**

### Error Boundary Placement

The ErrorBoundary wraps ONLY the `{children}` (page content), NOT the entire layout. This is intentional:

```tsx
<main id="main-content">
  <ErrorBoundary>
    {children}     {/* Only this part fails gracefully */}
  </ErrorBoundary>
</main>
```

If a page component throws an error:
- Nav still renders (user can navigate away)
- Footer still renders (user can find contact info)
- CtaBand still renders (user can still call)
- Only the main content area shows the error fallback

This ensures families in crisis ALWAYS have access to the phone number, even if a page component crashes.

### No Page-Level Overrides

PageLayout does NOT accept props to hide or reconfigure shell elements. Every page gets the exact same shell:
- Nav: always
- Breadcrumb: always on interior pages, never on homepage
- ErrorBoundary: always wrapping main content
- TrustBadges: always
- CtaBand: always
- Footer: always

If a future requirement needs a page without TrustBadges (e.g., a standalone landing page), that would be a SEPARATE layout component — not a prop on PageLayout.

### File Location

```
src/
  layouts/
    PageLayout.tsx    <-- THIS FILE (the only file in layouts/ for now)
```

The `layouts/` directory is reserved for structural shells. PageLayout is the only layout needed for MVP. Future layouts (e.g., `MinimalLayout.tsx` for landing pages) would go here too.

### Full Reference Implementation

```tsx
import type { ReactNode } from 'react'
import { useLocation } from 'react-router'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import Nav from '../components/Nav'
import Breadcrumb from '../components/Breadcrumb'
import ErrorBoundary from '../components/ErrorBoundary'
import TrustBadges from '../components/TrustBadges'
import CtaBand from '../components/CtaBand'
import Footer from '../components/Footer'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Nav />
      {!isHomepage && <Breadcrumb />}
      <main id="main-content">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <TrustBadges />
      <CtaBand />
      <Footer />
    </SmoothScroll>
  )
}
```

**Important:** This is a reference, not copy-paste. The dev agent must verify:
1. Import paths match the actual project structure from Story 1.1
2. Component names match what Stories 1.3-1.6 actually exported
3. ScrollProgress props match the actual component API (color token vs. hardcoded hex)
4. The `react-router` import works correctly (React Router v7 uses `'react-router'`, not `'react-router-dom'`)

### Anti-Patterns to AVOID

1. **DO NOT** import any data files — PageLayout is a structural shell with zero content knowledge
   ```tsx
   // WRONG
   import { site } from '../data/common'
   ```

2. **DO NOT** add wrapper divs with styling around children — PageLayout is not a visual container
   ```tsx
   // WRONG
   <div style={{ maxWidth: 1200, margin: '0 auto' }}>
     {children}
   </div>
   ```

3. **DO NOT** add `<h1>` or any heading elements — each page controls its own heading hierarchy
   ```tsx
   // WRONG
   <main id="main-content">
     <h1>{pageTitle}</h1>
     {children}
   </main>
   ```

4. **DO NOT** accept props to conditionally hide shell elements
   ```tsx
   // WRONG
   interface PageLayoutProps {
     children: ReactNode
     hideTrustBadges?: boolean
     hideCtaBand?: boolean
   }
   ```

5. **DO NOT** use `window.location` for homepage detection — breaks pre-rendering
   ```tsx
   // WRONG
   const isHomepage = window.location.pathname === '/'
   ```

6. **DO NOT** place ErrorBoundary outside `<main>` — Nav/Footer must survive page errors
   ```tsx
   // WRONG
   <ErrorBoundary>
     <Nav />
     <main>{children}</main>
     <Footer />
   </ErrorBoundary>
   ```

7. **DO NOT** add page-level SEO/meta/JSON-LD in PageLayout — that is handled by route-level `meta` exports (Story 1.8)
   ```tsx
   // WRONG
   <Helmet><title>{pageTitle}</title></Helmet>
   ```

8. **DO NOT** use arrow function export
   ```tsx
   // WRONG
   const PageLayout = ({ children }: PageLayoutProps) => { ... }
   export default PageLayout
   ```

9. **DO NOT** add padding/margin to `<main>` to account for fixed Nav — each page handles its own top spacing (the Nav is 64px fixed, and pages already account for this)

10. **DO NOT** keep SmoothScroll and ScrollProgress in App.tsx after this story — they belong in PageLayout

### Testing Verification (Manual)

This story does NOT create test files (Story 1.10 sets up test infrastructure). But the dev agent must verify manually:

- [ ] `npx tsc --noEmit` passes with zero TypeScript errors
- [ ] Homepage (`/`): Shows Nav + content + TrustBadges + CtaBand + Footer. NO breadcrumb
- [ ] Any interior page: Shows Nav + Breadcrumb + content + TrustBadges + CtaBand + Footer
- [ ] Skip link (`Tab` key on page load) focuses and targets `#main-content`
- [ ] Screen reader landmark navigation: banner -> navigation -> main -> contentinfo
- [ ] ScrollProgress bar visible at top during scroll
- [ ] SmoothScroll active on desktop (smooth wheel scrolling)
- [ ] SmoothScroll disabled on touch devices and when `prefers-reduced-motion: reduce` is set
- [ ] If a page component is intentionally broken (throw error), ErrorBoundary shows fallback while Nav/Footer remain visible
- [ ] Phone CTA visible in Nav header AND in CtaBand section on every page
- [ ] No `<h1>` element exists in the shell — only inside `{children}`

### Architecture Compliance Checklist

- [ ] File at `src/layouts/PageLayout.tsx` (correct directory)
- [ ] Uses `export default function PageLayout` (named function, default export)
- [ ] Props interface defined as `PageLayoutProps`
- [ ] No data imports from `src/data/`
- [ ] No barrel file in `src/layouts/`
- [ ] No CSS modules, Tailwind, or styled-components
- [ ] No hardcoded phone numbers (phone numbers come from Nav/CtaBand which source from data)
- [ ] `useLocation` from `react-router` (not `react-router-dom` or `window.location`)
- [ ] `<main>` element with `id="main-content"`
- [ ] ErrorBoundary wraps only children, not the entire layout
- [ ] SmoothScroll and ScrollProgress removed from App.tsx
- [ ] All dependency components imported from `../components/` (direct imports, no barrel)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Architectural-Boundaries] -- PageLayout boundary: "Wraps every page -- renders Nav, Breadcrumb (interior pages only), ErrorBoundary around page content, TrustBadges, CtaBand, Footer. Individual pages never render these directly"
- [Source: _bmad-output/planning-artifacts/architecture.md#layouts-directory] -- "layouts/ = structural shells, no content knowledge, no data imports"
- [Source: _bmad-output/planning-artifacts/architecture.md#Error-Handling] -- "ErrorBoundary wraps page content inside PageLayout -- every page automatically gets error boundary protection"
- [Source: _bmad-output/planning-artifacts/architecture.md#Cross-Cutting-Concerns] -- Phone CTA, trust signals, breadcrumb nav, performance budget all handled via PageLayout
- [Source: _bmad-output/planning-artifacts/architecture.md#External-Integration-Boundaries] -- "CTM Script loaded in PageLayout" (note: CTM integration is Story 9.2, not this story)
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.7] -- Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR12] -- Accreditation badges on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- Phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR27] -- Semantic HTML landmarks
- [Source: _bmad-output/planning-artifacts/prd.md#FR33] -- Privacy policy accessible from every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR39] -- Breadcrumb on interior pages
- [Source: mockups/silverstate-react/src/App.tsx] -- Current SmoothScroll/ScrollProgress wrapping pattern
- [Source: mockups/silverstate-react/src/components/Nav.tsx] -- Skip link targets `#main-content`, fixed header at z-100
- [Source: mockups/silverstate-react/src/components/Footer.tsx] -- Uses `<footer role="contentinfo">`

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

No debug issues encountered.

### Completion Notes List

- Created `src/layouts/PageLayout.tsx` — structural shell composing all 8 dependency components in correct order: SmoothScroll > ScrollProgress > Nav > Breadcrumb (conditional) > main#main-content > ErrorBoundary > TrustBadges > CtaBand > Footer
- Homepage detection via `useLocation()` from `react-router` — `pathname === '/'` hides breadcrumb on homepage
- ScrollProgress now uses `var(--sage)` CSS token instead of hardcoded `#5A7A6E`
- Updated `App.tsx` — removed SmoothScroll/ScrollProgress imports, RootLayout now wraps `<Outlet />` in `<PageLayout>` instead
- ErrorBoundary wraps only `{children}` inside `<main>`, keeping Nav/Footer/CtaBand visible if a page crashes
- No `<h1>` in any shell component — verified across PageLayout, Nav, TrustBadges, CtaBand, Footer
- No data imports in PageLayout — pure structural shell as required by architecture
- TypeScript zero errors, Vite build succeeds

### File List

| File | Action |
|------|--------|
| `src/layouts/PageLayout.tsx` | CREATE |
| `src/App.tsx` | MODIFY |

### Change Log

- 2026-02-24: Story 1.7 implemented — PageLayout shared page shell with SmoothScroll/ScrollProgress migration from App.tsx
