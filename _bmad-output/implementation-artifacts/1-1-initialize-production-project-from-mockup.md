# Story 1.1: Initialize Production Project from Mockup

Status: review

## Story

As a **developer**,
I want the existing mockup project evolved into a production React Router v7 library/SPA mode project with the Architecture-defined directory structure,
So that all future pages and components build on a standardized, pre-rendering-capable foundation.

## Acceptance Criteria

1. **Given** the existing mockup in `mockups/silverstate-react/`, **When** the production project is initialized, **Then** the project uses React Router v7 library/SPA mode with Vite 6
2. **And** the directory structure matches the Architecture document exactly (`src/components/`, `src/pages/`, `src/data/`, `src/hooks/`, `src/utils/`, `src/layouts/`, `api/`, `e2e/`, `scripts/`)
3. **And** TypeScript strict mode is enabled with the same tsconfig flags as the mockup
4. **And** `.env.example` documents all required environment variables with placeholders
5. **And** existing design system CSS (tokens, utility classes) is migrated to `src/index.css`
6. **And** `npm run dev` starts the development server successfully
7. **And** existing components compile and render without errors in the new project structure

## Tasks / Subtasks

- [x] **Task 1: Copy mockup foundation to project root** (AC: #1, #5, #7)
  - [x] 1.1: Copy `mockups/silverstate-react/src/` contents to project root `src/`
  - [x] 1.2: Copy `mockups/silverstate-react/public/` contents to project root `public/`
  - [x] 1.3: Copy `mockups/silverstate-react/index.html` to project root
  - [x] 1.4: Merge `mockups/silverstate-react/package.json` dependencies into root package.json (do NOT overwrite — merge deps)
  - [x] 1.5: Copy `mockups/silverstate-react/tsconfig.json` and `tsconfig.node.json` to root (if not already present)

- [x] **Task 2: Verify React Router v7 library/SPA mode dependencies** (AC: #1)
  - [x] 2.1: Verify `react-router` is v7.1.0+ (already installed). Do NOT install `@react-router/dev`, `@react-router/node`, or `@react-router/serve` -- they are not needed for library/SPA mode
  - [x] 2.2: Ensure imports use `react-router` (v7 convention), NOT `react-router-dom`

- [x] **Task 3: Configure Vite for React Router v7 library/SPA mode** (AC: #1)
  - [x] 3.1: Keep `@vitejs/plugin-react` in `vite.config.ts` (do NOT replace with `@react-router/dev/vite`)
  - [x] 3.2: Configure static pre-rendering via a Vite plugin or build script (NOT via `react-router.config.ts`)
  - [x] 3.3: Ensure dev server starts with HMR and SPA routing

- [x] **Task 4: Create production directory structure** (AC: #2)
  - [x] 4.1: Create `src/layouts/` directory
  - [x] 4.2: Create `src/utils/` directory
  - [x] 4.3: Create `src/pages/` directory with subdirectories: `programs/`, `conditions/`, `insurance/`, `locations/`, `about/`, `admissions/`
  - [x] 4.4: Create `api/` directory at project root (Vercel serverless functions)
  - [x] 4.5: Create `e2e/` directory at project root (Playwright tests)
  - [x] 4.6: Create `scripts/` directory at project root (build scripts)
  - [x] 4.7: Move existing pages from `src/pages/` to correct locations (WarmImmersive → `src/pages/Home.tsx`)
  - [x] 4.8: Remove dev-only pages: `UILibrary.tsx`, `ComponentLibrary.tsx`, `PropControl.tsx`, `CodeBlock.tsx`, `UISection.tsx` (keep in mockups/ for reference)

- [x] **Task 5: Create route manifest** (AC: #1, #2)
  - [x] 5.1: Create `src/routes.ts` defining all application routes
  - [x] 5.2: Configure route-based code splitting with `React.lazy()` and `createBrowserRouter` for page components
  - [x] 5.3: Set up catch-all 404 route
  - [x] 5.4: Ensure route paths match Architecture URL structure exactly

- [x] **Task 6: Update App.tsx for library/SPA mode** (AC: #1, #7)
  - [x] 6.1: Update BrowserRouter setup to use `createBrowserRouter` + `RouterProvider` (React Router v7 library mode)
  - [x] 6.2: Remove dev-only routes (`/ui`, `/ui/components`)
  - [x] 6.3: Keep SmoothScroll and ScrollProgress wrappers
  - [x] 6.4: Ensure all existing components still render correctly

- [x] **Task 7: Create environment variable setup** (AC: #4)
  - [x] 7.1: Create `.env.example` with all required variables and placeholders
  - [x] 7.2: Create `.env` (gitignored) with local dev values
  - [x] 7.3: Ensure `.gitignore` includes `.env` and `.env.local`

- [x] **Task 8: Verify build and dev server** (AC: #6, #7)
  - [x] 8.1: Run `npm install` — zero errors
  - [x] 8.2: Run `npm run dev` — dev server starts, homepage renders
  - [x] 8.3: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 8.4: Run `npm run build` — production build succeeds
  - [x] 8.5: Verify pre-rendered HTML output contains content (not empty shell)

## Dev Notes

### Critical Context: This Is a Migration, NOT a Greenfield Build

The mockup at `mockups/silverstate-react/` is a **production-grade design system** with:
- **21 components** — all typed, all using inline styles + CSS tokens
- **Complete design token system** — 13 color tokens, 3 shadows, fluid type scale, button variants
- **Typed data models** — `types.ts` with BaseComponentProps, AnimationVariant, ProgramData, FaqEntry, etc.
- **2 custom hooks** — `useIsMobile` (900px breakpoint), `useDragScroll`
- **Full content data** — `data/content.ts` with site info, programs, conditions, therapies, team, insurance, FAQs
- **Working homepage** — `WarmImmersive.tsx` with parallax, card stacks, timelines, animations

**DO NOT** rewrite, refactor, or "improve" any existing components during this migration. Copy them as-is and verify they compile. Refactoring happens in later stories if needed.

### React Router v7 Mode Clarification

**React Router v7 Mode:** This project uses React Router v7 in **library/SPA mode** (not framework mode). Use `createBrowserRouter` with `React.lazy()` for route-based code splitting. The source directory is `src/`, NOT `app/`. Do NOT use `@react-router/dev/routes`, `route()` function, or file-based routing conventions. Pre-rendering is handled via a Vite plugin or build script, not via `react-router.config.ts`.

**Import Path:** Use `import { ... } from 'react-router'` (v7 convention), NOT `'react-router-dom'`.

The existing mockup uses `react-router` v7.1.0 with `BrowserRouter` (SPA mode). The production project continues in **library/SPA mode** with:
- Static pre-rendering of all routes at build time via a Vite plugin or build script (FR37)
- SEO metadata handled via a custom `<Meta>` component or `react-helmet-async` (FR36)
- Data loading handled by component-level data imports (not route-level `loader` functions)
- Explicit route configuration in `src/routes.ts` using `createBrowserRouter`

**Key setup steps:**
1. Keep `@vitejs/plugin-react` in vite.config.ts (do NOT replace with `@react-router/dev/vite`)
2. Pre-rendering configured via a Vite plugin (e.g., `vite-plugin-ssr` or a custom build script) -- NOT via `react-router.config.ts`
3. Routes defined in `src/routes.ts` using `createBrowserRouter` with `React.lazy()` for code splitting
4. No `app/` directory, no `root.tsx`, no file-based routing conventions

**NOTE:** `@react-router/dev`, `@react-router/node`, and `@react-router/serve` are NOT needed for static SPA deployment on Vercel. Do not install them.

### Existing Component Inventory (DO NOT recreate these)

**Animation Components (GSAP/Framer Motion):**
- `AnimateIn.tsx` — scroll-triggered fade-in (exports StaggerGroup, StaggerItem)
- `TextReveal.tsx` — word-by-word text animation (exports CharReveal)
- `Parallax.tsx` — scroll-driven parallax (exports ClipReveal)
- `CountUp.tsx` — number counter animation
- `Marquee.tsx` — infinite scrolling marquee
- `CardStack.tsx` — sticky-stacked card pile
- `MagneticButton.tsx` — mouse-following button (Framer Motion)

**UI Components:**
- `FaqItem.tsx` — collapsible FAQ accordion item
- `StatBlock.tsx` — stat value + label display
- `StepCard.tsx` — numbered step card
- `Timeline.tsx` — timeline entry with time/dot/content
- `ProfileChip.tsx` — profile badge with dot indicator

**Layout Components:**
- `Nav.tsx` — fixed header with logo, nav links, phone CTA (variant: light/dark)
- `Footer.tsx` — multi-column footer with contact info and links
- `SmoothScroll.tsx` — Lenis smooth scroll wrapper (desktop only)
- `ScrollProgress.tsx` — top progress bar

**Media Components:**
- `Icons.tsx` — all SVG icons as named exports (14 icons)
- `Lightbox.tsx` — full-screen image gallery

**Dev-Only Components (REMOVE from production, keep in mockups/):**
- `PropControl.tsx` — dynamic prop editor (dev tool)
- `CodeBlock.tsx` — syntax-highlighted code display (dev tool)
- `UISection.tsx` — section wrapper for UI library (dev tool)

### Data File Migration

The existing `src/data/content.ts` is a **monolithic** content file. In the production project, this needs to be split per the Architecture document:
- `src/data/common.ts` — site info, nav links, footer content, accreditations
- `src/data/programs.ts` — residential, PHP, IOP data
- `src/data/conditions.ts` — all condition page data
- `src/data/insurance.ts` — carrier list
- `src/data/about.ts` — team, facility, academy
- `src/data/admissions.ts` — process steps, FAQs
- `src/data/therapies.ts` — therapy modality descriptions
- `src/data/index.ts` — barrel re-export (ONLY barrel allowed in project)

**FOR THIS STORY:** Copy `content.ts` as-is. The data split happens in **Story 1.2** (Shared Data Types & Common Content Data). Do NOT split the data file in this story.

### Pages to Remove vs. Keep

**KEEP (rename/move):**
- `WarmImmersive.tsx` → `src/pages/Home.tsx` (rename only — do not refactor content)

**REMOVE from production src/ (keep in mockups/ for reference):**
- `UILibrary.tsx` — design system showcase (dev tool)
- `ComponentLibrary.tsx` — component playground (dev tool)

### Project Structure Notes

**Target directory structure (from Architecture doc):**
```
silverstate/
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── # NOTE: No react-router.config.ts — project uses library/SPA mode, not framework mode
├── public/
│   └── assets/                      # Copied from mockup
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes.ts                    # NEW — route manifest
│   ├── types.ts                     # From mockup (as-is)
│   ├── index.css                    # From mockup (as-is)
│   ├── components/                  # From mockup (all components)
│   ├── pages/                       # Restructured
│   │   ├── Home.tsx                 # Renamed from WarmImmersive.tsx
│   │   ├── programs/                # Empty — created in Epic 3
│   │   ├── conditions/              # Empty — created in Epic 4
│   │   ├── insurance/               # Empty — created in Epic 5
│   │   ├── locations/               # Empty — created in Epic 7
│   │   ├── about/                   # Empty — created in Epic 6
│   │   └── admissions/              # Empty — created in Epic 8
│   ├── data/
│   │   └── content.ts              # From mockup (as-is — split in Story 1.2)
│   ├── hooks/                       # From mockup (useIsMobile, useDragScroll)
│   ├── utils/                       # Empty — created in Story 1.8
│   └── layouts/                     # Empty — created in Story 1.7
├── api/                             # Empty — created in Story 8.2
├── e2e/                             # Empty — created in Story 1.10
└── scripts/                         # Empty — created in Story 1.9
```

### Environment Variables (.env.example)

```bash
# Client-side (exposed to browser via Vite)
VITE_GA4_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_CTM_ID=12345
VITE_R2_BASE_URL=https://images.silverstatetreatment.com
VITE_SITE_URL=https://www.silverstatetreatment.com

# Server-side only (Vercel serverless functions)
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=admissions@silverstatetreatment.com
```

**Convention:** Client-side vars use `VITE_` prefix. Access via `import.meta.env.VITE_*`. Server-side vars have no prefix — only available in `api/` functions.

### Architecture Compliance Requirements

- **Naming:** Components = `PascalCase.tsx`, Hooks = `camelCase.ts` with `use` prefix, Data files = `camelCase.ts`
- **Exports:** Components use `export default function ComponentName` — NOT arrow function exports
- **Styling:** CSS tokens in `index.css` + inline styles only — NO CSS modules, NO Tailwind, NO styled-components
- **Mobile breakpoint:** 900px single breakpoint (matches existing `useIsMobile` default)
- **No barrel files** in `components/` — import directly from component files. Barrel ONLY in `data/index.ts`
- **Google Fonts:** Loaded via CSS `@import` in `index.css` (Space Grotesk + Inter) — already in place

### Library & Framework Versions (LOCKED)

| Package | Version | Notes |
|---------|---------|-------|
| react | 19.0.0 | Latest stable |
| react-dom | 19.0.0 | Matches React |
| react-router | 7.1.0 | Library/SPA mode (import from `react-router`, not `react-router-dom`) |
| gsap | 3.14.2 | Animation library |
| @gsap/react | 2.1.2 | GSAP React integration |
| framer-motion | 12.34.3 | Motion/transition library |
| lenis | 1.3.17 | Smooth scroll |
| typescript | 5.9.3 | Strict mode enabled |
| vite | 6.0.0 | Build tool |
| @vitejs/plugin-react | 4.3.0 | Vite React plugin (NOT replaced — no @react-router/dev in library mode) |

### Testing Requirements (for this story)

This story does NOT set up the test infrastructure (that's Story 1.10). However, verification is required:

- [ ] `npm install` completes with zero errors
- [ ] `npx tsc --noEmit` passes with zero TypeScript errors
- [ ] `npm run dev` starts and the homepage renders at `localhost:5173` (or configured port)
- [ ] `npm run build` produces output in `dist/` (or `build/`)
- [ ] Pre-rendered HTML files exist in build output for at least the homepage route
- [ ] All existing animation components render without console errors
- [ ] Navigation between routes works (even if pages are placeholder)

### Git Intelligence

**Recent commits (5 total):**
- `f4257d2` — fix: add specific TTFB metric to NFR21
- `ffa8764` — mobile improvements to mockup components
- `e1d627a` — TypeScript conversion (29 files JS→TS) — **this is our foundation**
- `cda5cd0` — package.json deps + Joint Commission asset
- `fb36d96` — first commit

**Contributors:** cartermccann (dev), s (planning)
**Commit convention:** `feat:`, `fix:` prefixes (conventional commits)
**Co-author:** Claude Opus 4.6

**Current state:** Master branch is clean for application code. ~180 BMAD framework files modified (uncommitted) but irrelevant to this story.

### Anti-Patterns to AVOID

1. **DO NOT** install Next.js, Remix, or any other framework — this is React Router v7 library/SPA mode
2. **DO NOT** add CSS modules, Tailwind, or styled-components — project uses inline styles + CSS tokens
3. **DO NOT** create barrel files (`index.ts`) in `components/` — only allowed in `data/`
4. **DO NOT** refactor WarmImmersive.tsx content — just rename to Home.tsx
5. **DO NOT** split `content.ts` into multiple data files — that's Story 1.2
6. **DO NOT** create test files — that's Story 1.10
7. **DO NOT** set up ESLint or Prettier — that's Story 1.10
8. **DO NOT** configure Vercel deployment — that's Story 1.11
9. **DO NOT** create PageLayout component — that's Story 1.7
10. **DO NOT** change the 900px mobile breakpoint

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Starter-Template-Evaluation] — Evolve existing mockup rationale
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] — Complete directory structure
- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation-Patterns] — Naming, styling, component patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] — .env convention
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — URL structure
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.1] — Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#Technical-Architecture-Considerations] — SPA + pre-rendering strategy
- [Source: mockups/silverstate-react/package.json] — Existing dependency versions
- [Source: mockups/silverstate-react/src/types.ts] — Existing type definitions
- [Source: mockups/silverstate-react/src/data/content.ts] — Existing data structure
- [Source: mockups/silverstate-react/src/index.css] — Design token system

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

None — no debug issues encountered.

### Completion Notes List

- Migrated entire mockup from `mockups/silverstate-react/` to project root
- Converted from `react-router-dom` to `react-router` (v7 convention) in all 3 files that had the import (main.tsx, App.tsx, Nav.tsx)
- Upgraded routing from `BrowserRouter` + `Routes` to `createBrowserRouter` + `RouterProvider` (React Router v7 library/SPA mode)
- Created `routes.tsx` with `React.lazy()` code splitting for Home page and catch-all 404 route
- Preserved `SmoothScroll` and `ScrollProgress` wrappers via a `RootLayout` component with `Outlet` in App.tsx
- Removed 5 dev-only files from production: UILibrary.tsx, ComponentLibrary.tsx, PropControl.tsx, CodeBlock.tsx, UISection.tsx (kept in mockups/ for reference)
- Renamed `WarmImmersive.tsx` → `Home.tsx` (content unchanged)
- Created all production directories: layouts/, utils/, pages/{programs,conditions,insurance,locations,about,admissions}/, api/, e2e/, scripts/
- Configured Vite with manual chunk splitting (react-vendor, animation-vendor) for optimal loading
- Created `.env.example` with all VITE_ and server-side variables
- Created `.gitignore` with env, node_modules, dist, IDE, OS exclusions
- Set up pre-rendering build script at `scripts/prerender.ts` using `tsx` — injects noscript fallback content for SEO. Full SSR pre-rendering to be expanded in Story 1.9
- Updated page title from "Design Explorations" to "Silver State Adolescent Treatment Center"
- All verification passed: npm install (0 errors), tsc --noEmit (0 TS errors), npm run dev (server starts), npm run build (succeeds with pre-rendering), pre-rendered HTML contains semantic content

### Change Log

- 2026-02-23: Story 1.1 implementation complete — project initialized from mockup with production structure

### File List

**New files:**
- package.json
- .gitignore
- .env.example
- .env
- index.html
- vite.config.ts
- tsconfig.json
- tsconfig.node.json
- src/main.tsx
- src/App.tsx
- src/routes.tsx
- src/index.css
- src/types.ts
- src/vite-env.d.ts
- src/components/AnimateIn.tsx
- src/components/CardStack.tsx
- src/components/CountUp.tsx
- src/components/FaqItem.tsx
- src/components/Footer.tsx
- src/components/Icons.tsx
- src/components/Lightbox.tsx
- src/components/MagneticButton.tsx
- src/components/Marquee.tsx
- src/components/Nav.tsx
- src/components/Parallax.tsx
- src/components/ProfileChip.tsx
- src/components/ScrollProgress.tsx
- src/components/SmoothScroll.tsx
- src/components/StatBlock.tsx
- src/components/StepCard.tsx
- src/components/TextReveal.tsx
- src/components/Timeline.tsx
- src/data/content.ts
- src/hooks/useIsMobile.ts
- src/hooks/useDragScroll.ts
- src/pages/Home.tsx
- src/pages/programs/.gitkeep
- src/pages/conditions/.gitkeep
- src/pages/insurance/.gitkeep
- src/pages/locations/.gitkeep
- src/pages/about/.gitkeep
- src/pages/admissions/.gitkeep
- src/layouts/.gitkeep
- src/utils/.gitkeep
- public/assets/logo.png
- public/assets/hero-youth.webp
- public/assets/woman-on-phone.jpg
- public/assets/teen-therapist.jpg
- public/assets/joint-commission.webp
- public/assets/aetna.png
- public/assets/cigna.png
- public/assets/bcbs.png
- api/.gitkeep
- e2e/.gitkeep
- scripts/prerender.ts
