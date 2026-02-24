---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-02-23'
inputDocuments:
  - planning-artifacts/prd.md
  - planning-artifacts/prd-validation-report.md
  - planning-artifacts/product-brief-silverstate-2026-02-23.md
  - planning-artifacts/research/domain-adolescent-behavioral-health-treatment-research-2026-02-23.md
workflowType: 'architecture'
project_name: 'silverstate'
user_name: 'Silver'
date: '2026-02-23'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
48 FRs spanning 9 categories. The architectural core is a content-delivery system: families discover pages via search (FR35-40), consume clinical and insurance content (FR1-11), build trust through credibility signals (FR12-16), and convert via phone call CTAs (FR17-22). The site must work across all devices (FR41-43) with full accessibility (FR26-34), and content must be managed through data-driven architecture with clinical review gates (FR44-48).

No FRs require real-time data, user authentication, server-side state, or database access. The only server-side dependency is the HIPAA-compliant insurance verification form backend (FR9-11), which is deferred — MVP conversion path is phone calls only.

**Non-Functional Requirements:**
36 NFRs with the heaviest weight on:
- **Performance** (NFR1-6): LCP < 2.5s, CLS < 0.1, INP < 200ms, page weight < 1.5MB, TTI < 3.5s
- **Security/Privacy** (NFR7-12): HTTPS everywhere, zero PHI in client storage, zero marketing pixels on health form pages, cookie consent with opt-in
- **Accessibility** (NFR13-18): WCAG 2.1 AA on 100% of pages, keyboard operability, screen reader support
- **Reliability** (NFR19-22): 99.9% uptime, static architecture with no server runtime, CDN with < 100ms TTFB
- **Compliance deadlines** (NFR28-31): WCAG by May 2026, FTC and LegitScript ongoing

**Scale & Complexity:**

- Primary domain: Frontend web — static site generation with SPA interactivity layer
- Complexity level: High — regulated healthcare, multiple compliance frameworks, aggressive performance targets
- Estimated architectural components: ~8-10 page templates, ~25-30 reusable UI components, build-time generation pipeline (pre-rendering, sitemap, schema)

### Technical Constraints & Dependencies

- **Existing stack:** React 19 + Vite + TypeScript — committed, not up for debate
- **Existing component library:** 20+ production components in `mockups/silverstate-react/` — the build foundation
- **Existing content pattern:** `content.ts` data-driven architecture — extend, don't replace
- **No server runtime for public site:** Static files only, deployed to CDN
- **Image hosting:** Cloudflare R2 — S3-compatible object storage with zero egress fees, served via Cloudflare CDN edge. Images optimized (WebP/AVIF, responsive sizing) before upload since R2 is storage-only
- **Forms deferred:** No insurance verification form in MVP — phone calls are the only conversion path. No HIPAA form backend needed, no 42 CFR Part 2 consent mechanism needed at launch
- **Pre-rendering required:** All 50-60 pages must produce full HTML at build time for SEO crawlability
- **URL structure locked at launch:** Changing URLs post-indexing damages SEO — architecture must support the complete URL scheme from day one
- **Two tracking zones:** Informational pages (GA4 permitted) vs. future health form pages (zero marketing pixels)

### Cross-Cutting Concerns Identified

| Concern | Scope | Architectural Impact |
|---------|-------|---------------------|
| **WCAG 2.1 AA** | Every component, every page | Accessibility must be built into the component library foundation — contrast, keyboard nav, ARIA, semantic HTML, focus management |
| **Schema markup (JSON-LD)** | Every page | 7 schema types generated from content data at build time — needs a schema generation layer |
| **SEO metadata** | Every page | Title, description, OG tags, canonical URL — driven from content data, injected into pre-rendered HTML |
| **Phone CTA** | Every page | Persistent call-to-action component with CTM dynamic number insertion |
| **Trust signals** | Every page | Accreditation badge strip as a shared layout component |
| **Performance budget** | Every page | Animation lazy-loading, image optimization pipeline (pre-optimized to R2), code splitting strategy, `prefers-reduced-motion` |
| **HIPAA tracking zones** | Page-level config | Analytics script loading conditional on page type — future health form pages get zero marketing pixels |
| **Content review workflow** | Clinical pages | Operational process, not a technical feature — but content schema should support `reviewedBy` and `reviewDate` fields |
| **Internal linking** | Every page | Related content links driven by content data relationships — conditions link to programs, programs link to insurance, etc. |

## Starter Template Evaluation

### Primary Technology Domain

Frontend web — static site generation with SPA interactivity layer. React 19 + Vite 6 + TypeScript.

### Starter Options Considered

**No external starter template needed.** This is a brownfield project with an existing React 19 + Vite 6 + TypeScript codebase and a complete design system in `mockups/silverstate-react/`.

External starters evaluated and rejected:
- `create-vite` — would duplicate what exists without the component library or design system
- `create-next-app` — SSR framework, PRD explicitly defers Next.js migration
- `vike` (vite-plugin-ssr) — could add SSR, but pre-rendering is sufficient for static content

### Selected Approach: Evolve Existing Mockup

**Rationale:**
The mockup project is not a prototype — it's a production-grade design system with 21 components, typed data models, a complete color/typography/spacing token system, and a working homepage. Building from scratch would discard all of this for zero benefit.

**Existing Stack (committed):**

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript (strict mode) | 5.9.3 |
| Framework | React | 19.0.0 |
| Router | React Router DOM | 7.1.0 |
| Build | Vite + @vitejs/plugin-react | 6.0.0 |
| Pre-rendering | vite-ssg | latest |
| SEO metadata | react-helmet-async | latest |
| Animation | GSAP + @gsap/react | 3.14.2 / 2.1.2 |
| Animation | Framer Motion | 12.34.3 |
| Smooth scroll | Lenis | 1.3.17 |
| Styling | Plain CSS design tokens + inline styles | — |
| Fonts | Space Grotesk (display) + Inter (body) | Google Fonts |
| Images | Cloudflare R2 (storage) + CF CDN (delivery) | — |

**Design System Already Established:**
- CSS custom properties: 13 color tokens, 3 shadow levels, 2 border radii, fluid type scale (h1-h4 with `clamp()`)
- Button system: 6 variants (primary, dark, outline, white, ghost, pulse)
- Layout utilities: `.wrap` (1200px), `.wrap-narrow` (800px)
- Section heading pattern: `.section-label` + `.section-heading` + `.section-desc`
- Component patterns: bento cards, hover-lift, glassmorphic overlays, timeline rows, step cards, profile chips
- Accessibility foundations: skip link, `:focus-visible` ring styles, `prefers-reduced-motion` media query
- GPU hints: `will-change` on animated elements

**Note:** Production project initialization from the mockup foundation should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Pre-rendering: vite-ssg plugin for static pre-rendering at build time
- SEO metadata: react-helmet-async for per-page title, description, OG tags
- Hosting & deployment: Vercel (static + Edge Network CDN + CI/CD)
- Analytics: GA4 with server-side GTM, two-zone tracking model

**Important Decisions (Shape Architecture):**
- JSON-LD schema: Generated from content data via utility functions per page type
- Testing: Vitest + React Testing Library + Playwright + axe-core
- Linting: ESLint + Prettier with jsx-a11y plugin
- Cookie consent: Custom lightweight banner with Google Consent Mode v2

**Deferred Decisions (Not in MVP):**
- Insurance verification form backend — conversion is phone calls only for now
- 42 CFR Part 2 consent mechanism — no health data collected via forms
- CMS for service pages — content stays in TypeScript data files for service pages (programs, conditions, insurance, locations, about, admissions). **Blog/resources section uses Sanity CMS** for ongoing content publishing by the client
- SSR / Next.js migration — pre-rendering is sufficient

### Pre-rendering & SEO

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Pre-rendering | vite-ssg plugin | Generates static HTML for all routes at build time. React Router v7 used in library/SPA mode with `createBrowserRouter` — pre-rendering handled by vite-ssg, not the router |
| SEO metadata | react-helmet-async | Per-page `<Helmet>` component sets title, description, canonical URL, OG tags. Metadata baked into pre-rendered HTML by vite-ssg |
| JSON-LD schema | Generated from content data | Utility function per page type reads content data and outputs JSON-LD block. Write once per type, every page gets correct schema automatically |
| Sitemap | Generated at build time | Route manifest produces sitemap.xml automatically during Vite build |

### Analytics & Compliance

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Analytics | GA4 with server-side GTM | Industry standard data + server-side processing filters sensitive data before reaching Google |
| Tracking zones | Two-zone model | Zone 1 (informational pages): GA4 loads via server-side GTM. Zone 2 (future health form pages): zero analytics scripts |
| Cookie consent | Custom lightweight banner | Simple component, stores preference in localStorage, conditionally loads GA4. Integrates with Google Consent Mode v2 |
| HIPAA form backend | Deferred | No forms in MVP — phone calls are the only conversion path. Revisit when forms are added |

### Hosting & Deployment

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Hosting | Vercel | Static deployment + Edge Network CDN (< 100ms TTFB), automatic HTTPS, built-in CI/CD |
| CI/CD | Vercel git integration | Push to main triggers build + deploy automatically |
| Server-side GTM | Vercel serverless function (`api/gtm.ts`) | Runs on same platform, minimal cost |
| Contact form backend | Vercel serverless function (`api/contact.ts`) + Resend email API | Form submits to `/api/contact`, serverless function validates input and forwards via Resend. One platform, no additional vendor BAAs beyond Resend. No PHI collected — general inquiries only (FR20) |
| Image delivery | Cloudflare R2 + CF CDN | Pre-optimized images uploaded to R2, served via Cloudflare edge. Separate from Vercel for media assets |

### Code Quality & Testing

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Unit testing | Vitest + React Testing Library | Fast Vite-native runner + user-centric component testing |
| Accessibility testing | axe-core + Playwright | Automated WCAG violation scanning on full rendered pages |
| E2E testing | Playwright | Full browser testing — pages render correctly, links work, CTAs present |
| Linting | ESLint + jsx-a11y plugin | Catches code problems + accessibility issues as you write |
| Formatting | Prettier | Consistent code style across all files — critical for AI agent consistency |

### Decision Impact Analysis

**Implementation Sequence:**
1. Restructure mockup into React Router v7 library/SPA mode with `createBrowserRouter`
2. Configure Vite build with pre-rendering for all routes
3. Set up ESLint + Prettier + jsx-a11y
4. Set up Vitest + React Testing Library + Playwright
5. Build content data schemas per page type
6. Build JSON-LD generation utilities per page type
7. Implement SEO metadata via react-helmet-async `<Helmet>` per page
8. Build Breadcrumb component (visual + BreadcrumbList JSON-LD) and wire into PageLayout
9. Configure Vercel deployment with git integration
10. Set up contact form serverless function (`api/contact.ts`) + Resend email integration
11. Set up GA4 + server-side GTM with two-zone loading
12. Implement custom cookie consent banner

**Cross-Component Dependencies:**
- React Router v7 library/SPA mode with `createBrowserRouter` handles routing; vite-ssg handles pre-rendering; react-helmet-async handles metadata — three separate concerns, cleanly separated
- Content data schemas feed both page rendering AND JSON-LD generation — design these once, correctly
- Two-zone tracking config uses the same page-level metadata that drives SEO and schema decisions
- Testing infrastructure validates all of the above — accessibility, schema validity, page rendering

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 16 areas where AI agents could make different choices, all resolved below.

### Naming Patterns

**File Naming:**

| Type | Convention | Example |
|------|-----------|---------|
| Components | `PascalCase.tsx` | `StepCard.tsx`, `AnimateIn.tsx` |
| Pages | `PascalCase.tsx` | `Residential.tsx`, `Anxiety.tsx` |
| Hooks | `camelCase.ts` with `use` prefix | `useIsMobile.ts`, `useDragScroll.ts` |
| Data files | `camelCase.ts` | `programs.ts`, `conditions.ts` |
| Type files | `camelCase.ts` | `types.ts` |
| Test files | `ComponentName.test.tsx` co-located | `Nav.test.tsx` next to `Nav.tsx` |
| E2E tests | `kebab-case.spec.ts` in `e2e/`, mirroring page structure | `e2e/programs/residential.spec.ts` |
| CSS | `kebab-case.css` | `index.css` |
| Config files | `kebab-case` or dotfile convention | `vite.config.ts`, `.eslintrc.cjs` |

**Code Naming:**

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase function | `export default function StepCard()` |
| Props interfaces | `ComponentNameProps` | `interface NavProps`, `interface StepCardProps` |
| Data type interfaces | PascalCase, descriptive | `FaqEntry`, `ProgramData`, `InsuranceEntry` |
| Hooks | camelCase with `use` prefix | `useIsMobile()`, `useDragScroll()` |
| Functions | camelCase | `handleScroll`, `generateJSX` |
| Variables | camelCase | `navLinks`, `facilityImages` |
| Page-scoped constants | UPPER_SNAKE_CASE | `const SAGE = '#5A7A6E'` |
| Content data exports | camelCase named exports | `export const faqs`, `export const programs` |
| Icons | `Icon` prefix, PascalCase | `IconPhone`, `IconShield`, `IconMapPin` |
| CSS custom properties | `--kebab-case` | `--blue`, `--sage-soft`, `--font-display` |
| CSS utility classes | `kebab-case` | `.bento-card`, `.btn-primary`, `.hover-lift` |
| Route paths | `kebab-case` lowercase | `/residential-treatment`, `/anxiety-treatment` |

### Structure Patterns

**Project Organization:**

```
src/
  components/          # Flat — all components as PascalCase.tsx
    Nav.tsx
    Nav.test.tsx       # Co-located test
    Footer.tsx
    AnimateIn.tsx
    StepCard.tsx
    Icons.tsx          # All icons in single file
    ...
  pages/               # Grouped by content area
    Home.tsx
    programs/
      Residential.tsx
      PHP.tsx
      IOP.tsx
    conditions/
      Anxiety.tsx
      Depression.tsx
      TraumaPTSD.tsx
      ...
    insurance/
      Index.tsx
      Aetna.tsx
      ...
    about/
      Team.tsx
      Facility.tsx
      YouthAcademy.tsx
    admissions/
      Process.tsx
  data/                # Per-content-area data files
    index.ts           # Barrel re-export — ONLY allowed in data/
    common.ts          # site info, nav links, footer content
    programs.ts        # residential, PHP, IOP data
    conditions.ts      # all condition page data
    insurance.ts       # carrier list, verification info
    about.ts           # team, facility, academy data
    admissions.ts      # process steps, FAQs
    therapies.ts       # therapy modalities list
  hooks/               # Custom hooks as camelCase.ts
    useIsMobile.ts
    useDragScroll.ts
  utils/               # Pure utility functions
  types.ts             # Shared data type interfaces
  index.css            # Global styles, design tokens, reusable classes
  main.tsx             # App entry point
  App.tsx              # Root component with router
e2e/                   # Playwright E2E tests — mirrors page structure
  homepage.spec.ts
  programs/
    residential.spec.ts
    php.spec.ts
  conditions/
    anxiety.spec.ts
  insurance/
    index.spec.ts
  about/
    team.spec.ts
```

**Component File Structure Convention:**

Every component follows this internal order:
1. Imports (React, then libraries, then local)
2. Interface/type definitions (props)
3. Extracted style constants (if repeated inline styles exist)
4. Constants (if any)
5. Component function (`export default function Name`)
6. No barrel files (`index.ts`) — import directly from component file

**Page File Structure Convention:**

Every page follows this internal order:
1. Imports (React, components, hooks, data, types, icons)
2. Page-scoped constants (`UPPER_CASE`)
3. Extracted style constants (shared across sections)
4. Page-scoped sub-components (if needed, not exported)
5. Main page component (`export default function PageName`)

### Styling Patterns

**CSS Architecture Rules:**

| Rule | Details |
|------|---------|
| Design tokens | Always in `:root` custom properties in `index.css` — never hardcode colors, shadows, radii, or font families in components |
| Reusable patterns | Global CSS classes in `index.css` (`.bento-card`, `.btn-primary`, `.wrap`, `.section-heading`) |
| Component-specific | Inline `style={{}}` on JSX elements — no CSS modules, no styled-components, no Tailwind |
| Repeated inline styles | Extract into `const` variables typed as `CSSProperties` at the top of the file — reduces object allocation and makes shared styles explicit |
| Scoped overrides | `<style>` blocks at end of component for media queries or pseudo-selectors that can't be inline |
| Referencing tokens in inline styles | `color: 'var(--blue)'` — use the CSS custom property, not the hex value |
| Page-scoped color aliases | `const SAGE = '#5A7A6E'` at top of page file — permitted for readability but prefer `var(--sage)` in inline styles |
| Responsive | Media queries in `index.css` for global patterns, `<style>` blocks for component-specific |
| Mobile breakpoint | `900px` — single breakpoint, consistent throughout (matches `useIsMobile` default). Intentional architectural decision: the existing component library was built around 900px, a two-tier layout (mobile single-column vs. desktop multi-column) serves this content-and-CTA site well, and devices at 768-899px (e.g., iPad Mini portrait) benefit from the mobile layout's prominent phone CTA. No tablet-specific tier needed |
| Animations | GSAP for scroll-triggered, Framer Motion for interaction, CSS for simple transitions |
| Reduced motion | Always respect `prefers-reduced-motion` — GSAP checks automatically, CSS animations need the media query |
| GPU hints | `will-change: transform, opacity` on `[data-animate]` elements only — don't over-apply |
| `--muted` color restriction | Never use `--muted` (`#999`) for text smaller than 18px or text that conveys essential information — fails WCAG AA contrast on light backgrounds. Use `--body` (`#4a4a4a`) for readable secondary text |

**Extracted Style Constants Example:**

```tsx
const headingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: '1.05rem',
  fontWeight: 600, lineHeight: 1.2, color: 'var(--text)',
}

const bodyStyle: CSSProperties = {
  fontSize: '.85rem', color: 'var(--body)', lineHeight: 1.65,
}
```

**Adding New CSS Classes:**

- Add to `index.css` only if the pattern will be used across 3+ components
- Name with kebab-case: `.new-pattern-name`
- Follow existing specificity: single class selectors, `:hover` and `:focus-visible` variants
- Always include a `:focus-visible` style for interactive elements

### Content Data Patterns

**Data File Rules:**

| Rule | Details |
|------|---------|
| Export style | Named exports, never default: `export const programs = {...}` |
| Barrel file | `data/index.ts` re-exports from all data files — allowed ONLY in `data/` folder |
| Type annotations | Explicit types on all exports: `export const faqs: FaqEntry[] = [...]` |
| Interface location | Data shape interfaces in `types.ts`, not in data files |
| Content fields | Use full words, not abbreviations: `description` not `desc` for new types (existing `desc` fields are grandfathered) |
| Clinical content | Include `reviewedBy?: string` and `reviewDate?: string` fields on clinical page data types |
| Image paths | Cloudflare R2 URLs for production, `/assets/` for local dev |
| Phone numbers | Use `site.phone` and `site.phoneTel` from `common.ts` — never hardcode |
| Cross-references | Use slug strings to link between content areas: `relatedPrograms: ['residential', 'php']` |

**Adding a New Content Area:**

1. Create interface in `types.ts`
2. Create data file in `data/` with typed named exports
3. Add re-export to `data/index.ts`
4. Import in the page that consumes it

### Component Patterns

**Component API Rules:**

| Rule | Details |
|------|---------|
| Export | `export default function ComponentName` — always default export, always named function (not arrow) |
| Props | Destructure in parameter: `function Nav({ variant = 'light' }: NavProps)` |
| Optional props | Provide defaults in destructuring, not with `defaultProps` |
| className + style | All visual components accept optional `className?: string` and `style?: CSSProperties` |
| Children | Use `children?: ReactNode` when the component wraps content |
| Shared base | Use `BaseComponentProps` from `types.ts` for `className`, `style`, `children` |
| Events | Name handlers `onAction` in props: `onClose`, `onPrev`, `onNext` |
| Internal handlers | Name `handleAction` inside component: `handleScroll`, `handleClick` |

**Hook Return Type Rules:**

| Pattern | Convention | Example |
|---------|-----------|---------|
| Single value | Return directly | `useIsMobile()` returns `boolean` |
| Multiple values | Return a named object — never a tuple | `useDragScroll()` returns `{ ref, isDragging, handlers }` |
| Exception | `useState`/`useReducer` tuples are React convention — don't wrap them |

**Icon Pattern:**

- All icons live in `components/Icons.tsx`
- Each icon is a named export: `export function IconPhone(props: SVGProps<SVGSVGElement>)`
- SVG with `width`, `height`, and `fill="currentColor"` so parent controls size/color
- Prefix with `Icon` — always

**Accessibility Pattern (Every Component):**

- Interactive elements: `<button>` for actions, `<a>` for navigation — never `<div onClick>`
- ARIA labels: On icon-only buttons, on landmark regions, on navigation
- Focus styles: `:focus-visible` ring via global CSS (already set up)
- Skip link: Present on every page via `Nav` component
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — not `<div>` soup
- Heading hierarchy: One `<h1>` per page, sequential `<h2>`/`<h3>` — never skip levels
- Alt text: Descriptive for informational images, `alt=""` for decorative
- Keyboard: All interactive elements reachable via Tab, operable via Enter/Space
- **Touch targets:** All interactive elements must be at least 44x44px touch target on mobile (padding counts toward target size)
- **Color contrast:** Minimum 4.5:1 ratio for normal text, 3:1 for large text (18px+ bold or 24px+ regular). Never use `--muted` for essential information text below 18px

### Route & URL Patterns

| Rule | Details |
|------|---------|
| Format | All lowercase, kebab-case: `/residential-treatment`, `/anxiety-treatment` |
| Programs | `/programs` (hub), `/programs/residential-treatment`, `/programs/php`, `/programs/iop`, `/programs/lgbtq-affirming-care`, `/programs/group-therapy`, `/programs/crisis-prevention-intervention` |
| Therapy Modalities | `/programs/individual-therapy`, `/programs/cognitive-behavioral-therapy`, `/programs/dialectical-behavior-therapy`, `/programs/family-therapy`, `/programs/meditation-therapy` |
| Treatment Approaches | `/programs/medication-treatment`, `/programs/trauma-informed-care`, `/programs/holistic-treatment`, `/programs/personalized-treatment` |
| Conditions | `/conditions` (hub), `/conditions/anxiety-treatment`, `/conditions/depression-treatment` |
| Insurance | `/insurance`, `/insurance/aetna`, `/insurance/cigna` |
| About | `/about/our-team`, `/about/facility`, `/about/youth-academy` |
| Admissions | `/admissions` |
| Blog | `/blog`, `/blog/:slug` |
| Locations | `/locations` (hub), `/locations/las-vegas`, `/locations/henderson`, `/locations/north-las-vegas`, `/locations/summerlin`, `/locations/clark-county` |
| Contact | `/contact` |
| Privacy | `/privacy` |
| 404 | `*` catch-all — renders `NotFound.tsx` |
| No trailing slashes | Enforce via redirect or canonical |
| Canonical URLs | Every page declares a canonical URL in meta |
| **Route-to-file mapping** | Route path segments must match the page directory structure. `/programs/residential-treatment` maps to `pages/programs/Residential.tsx`. Any agent can find the file for a given URL without searching |

### Testing Patterns

**Test Naming Convention (inside test files):**

```tsx
describe('ComponentName', () => {
  it('renders the headline when content is provided', () => {...})
  it('shows the phone CTA on mobile viewport', () => {...})
})
```

- `describe` block matches component/page name exactly
- `it` statements are behavior-focused: "renders the X when Y", "shows X on Y", "navigates to X when Y is clicked"
- Never test internal state directly — test what the user sees

**Testing Priority Hierarchy:**

| Priority | What | Why |
|----------|------|-----|
| 1. Content data validation | Build-time tests verifying every data file has required fields, no broken image paths, no empty strings | Catches the most real-world bugs on a content site |
| 2. Accessibility (axe-core) | Every page scanned — zero violations | Non-negotiable for healthcare + WCAG compliance |
| 3. Component rendering | Every component renders without crashing with required props | Catches import/type errors early |
| 4. E2E critical paths | Homepage loads, phone CTA visible, navigation works, each program page renders | Validates the user journeys that matter |

**Coverage rule:** Do not mandate line coverage percentages. Instead mandate: *every page passes axe-core, every content data file passes schema validation, every component renders with required props.*

### Environment Variable Patterns

**Variable Convention:**

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_GA4_ID` | GA4 measurement ID | `G-XXXXXXXXXX` |
| `VITE_GTM_ID` | Server-side GTM container ID | `GTM-XXXXXXX` |
| `VITE_CTM_ID` | CTM account ID for dynamic number insertion | `12345` |
| `VITE_R2_BASE_URL` | Cloudflare R2 image base URL | `https://images.silverstatetreatment.com` |
| `VITE_SITE_URL` | Canonical site URL for meta/schema generation | `https://www.silverstatetreatment.com` |
| `VITE_SANITY_PROJECT_ID` | Sanity project ID for blog content | `abc123xyz` |
| `VITE_SANITY_DATASET` | Sanity dataset name | `production` |
| `RESEND_API_KEY` | Resend email API key (server-side only) | `re_xxxxxxxxx` |
| `CONTACT_EMAIL` | Destination for contact form submissions (server-side only) | `admissions@silverstatetreatment.com` |

**Rules:**

| Rule | Details |
|------|---------|
| Client-exposed prefix | All client-side variables prefixed with `VITE_` — Vite convention, automatically exposed to browser |
| Server-only variables | No prefix — only available in `api/` serverless functions, never shipped to client |
| Access pattern | `import.meta.env.VITE_*` in client code — never `process.env` |
| `.env.example` | Documents all required variables with placeholder values — committed to git |
| `.env` / `.env.local` | Contains real values — never committed, listed in `.gitignore` |
| Fallback values | Data files use `import.meta.env.VITE_R2_BASE_URL || '/assets'` for local dev fallback |

### Process Patterns

**Error Handling:**

| Scenario | Pattern |
|----------|---------|
| Image load failure | CSS fallback background color on image containers |
| Route not found | Catch-all route renders a custom 404 page |
| Content missing | Build-time validation — if content data is missing a required field, the build fails |
| Component error | `ErrorBoundary` wraps page content inside `PageLayout` — every page automatically gets error boundary protection. Shows fallback UI with phone CTA, not a blank page |

**Loading & Performance:**

| Pattern | Rule |
|---------|------|
| Images | Pre-optimized (WebP/AVIF, responsive sizes) before upload to R2. Use `loading="lazy"` on below-fold images, `fetchpriority="high"` on hero/LCP image |
| Code splitting | React Router lazy loading per page — one bundle per route |
| Fonts | `display=swap` on Google Fonts import (already in place) |
| Animation | GSAP ScrollTrigger loads only on pages with scroll animations |
| Third-party scripts | GA4 loads conditionally based on cookie consent + tracking zone |

### Enforcement Guidelines

**All AI Agents MUST:**

1. Run `npx tsc --noEmit` before committing — zero TypeScript errors
2. Run ESLint + jsx-a11y — zero warnings on changed files
3. Run Prettier — all changed files formatted
4. Use existing CSS tokens — never introduce new hardcoded colors, fonts, or shadows
5. Follow the naming conventions table above — no exceptions
6. Include accessibility attributes on all interactive elements
7. Use `export default function` for components — not `const Component = () =>`
8. Import content data from `data/` files — never hardcode content strings in components
9. Add `loading="lazy"` on images below the fold
10. Test with keyboard navigation before marking any UI component complete
11. Ensure all interactive elements meet 44x44px minimum touch target on mobile
12. Never use `--muted` for essential text below 18px

**Pattern Verification:**

- ESLint + jsx-a11y catches naming and accessibility violations automatically
- TypeScript strict mode catches type mismatches
- Prettier catches formatting drift
- axe-core page scans catch contrast and ARIA violations
- Content data schema validation catches missing/empty fields at build time
- PR review checklist should verify: token usage, semantic HTML, heading hierarchy, keyboard operability, touch target sizing

### Pattern Examples

**Good:**

```tsx
// Correct component structure with extracted styles
import type { CSSProperties } from 'react'

interface TestimonialCardProps {
  quote: string
  author: string
  detail?: string
  style?: CSSProperties
}

const quoteStyle: CSSProperties = {
  fontSize: '.95rem', color: 'var(--body)', lineHeight: 1.7,
}

const authorStyle: CSSProperties = {
  marginTop: 12, fontSize: '.85rem', fontWeight: 600, color: 'var(--text)',
}

export default function TestimonialCard({ quote, author, detail, style }: TestimonialCardProps) {
  return (
    <blockquote className="bento-card" style={style}>
      <p style={quoteStyle}>"{quote}"</p>
      <footer style={authorStyle}>
        — {author}
        {detail && <span style={{ color: 'var(--muted)', fontWeight: 400 }}> · {detail}</span>}
      </footer>
    </blockquote>
  )
}
```

**Anti-Patterns:**

```tsx
// WRONG: Arrow function default export
const TestimonialCard = ({ quote, author }) => { ... }
export default TestimonialCard

// WRONG: Hardcoded colors instead of tokens
<p style={{ color: '#4a4a4a' }}>  // Should be 'var(--body)'

// WRONG: div with onClick instead of button
<div onClick={handleClose}>×</div>  // Should be <button>

// WRONG: No type annotation on data export
export const faqs = [...]  // Should be export const faqs: FaqEntry[] = [...]

// WRONG: Importing from old monolithic content file
import { site } from '../data/content'  // Should import from '../data/common'

// WRONG: CSS module or styled-component
import styles from './Nav.module.css'  // Project uses global CSS + inline styles

// WRONG: Using --muted for small essential text
<p style={{ fontSize: '.85rem', color: 'var(--muted)' }}>Important info</p>
// Should use 'var(--body)' for text this size

// WRONG: Hook returning a tuple
return [ref, isDragging, handlers]  // Should return { ref, isDragging, handlers }

// WRONG: Barrel file in components
components/index.ts  // Not allowed — import directly from component files
```

## Project Structure & Boundaries

### Complete Project Directory Structure

```
silverstate/                          # Production project root
├── .github/
│   └── workflows/
│       └── ci.yml                    # Lint + type-check + test on PR
├── .env.example                      # Template for environment variables
├── .eslintrc.cjs                     # ESLint config with jsx-a11y plugin
├── .gitignore
├── .prettierrc                       # Prettier config
├── index.html                        # Vite entry HTML
├── package.json
├── playwright.config.ts              # Playwright E2E config
├── tsconfig.json                     # TypeScript strict config
├── tsconfig.node.json                # Node-side TS config (Vite, scripts)
├── vercel.json                       # Vercel deployment config (redirects, headers)
├── vite.config.ts                    # Vite + vite-ssg plugin for pre-rendering
│
├── public/
│   ├── assets/                       # Local dev images (production uses R2 URLs)
│   │   ├── logo.png
│   │   ├── joint-commission.webp
│   │   └── ...
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml                   # Generated at build time
│
├── src/
│   ├── main.tsx                      # App entry point
│   ├── App.tsx                       # Root: createBrowserRouter + RouterProvider, layout wrappers
│   ├── routes.ts                     # Route config array — consumed by createBrowserRouter in App.tsx
│   ├── types.ts                      # Shared data type interfaces
│   ├── index.css                     # Global styles, design tokens, reusable classes
│   │
│   ├── components/                   # Flat — all components as PascalCase.tsx
│   │   ├── AnimateIn.tsx             # + StaggerGroup, StaggerItem (named exports)
│   │   ├── AnimateIn.test.tsx
│   │   ├── Breadcrumb.tsx            # Route-based breadcrumb nav + BreadcrumbList JSON-LD (FR39)
│   │   ├── Breadcrumb.test.tsx
│   │   ├── CardStack.tsx
│   │   ├── CookieConsent.tsx         # Cookie banner + Google Consent Mode v2
│   │   ├── CookieConsent.test.tsx
│   │   ├── CountUp.tsx
│   │   ├── CtaBand.tsx               # Reusable phone CTA section band
│   │   ├── CtaBand.test.tsx
│   │   ├── ErrorBoundary.tsx         # Page-level error boundary
│   │   ├── FaqItem.tsx
│   │   ├── FaqItem.test.tsx
│   │   ├── Footer.tsx
│   │   ├── Footer.test.tsx
│   │   ├── Icons.tsx                 # All SVG icons as named exports
│   │   ├── Lightbox.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── Marquee.tsx
│   │   ├── Nav.tsx
│   │   ├── Nav.test.tsx
│   │   ├── Parallax.tsx              # + ClipReveal (named export)
│   │   ├── ProfileChip.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SmoothScroll.tsx
│   │   ├── StatBlock.tsx
│   │   ├── StepCard.tsx
│   │   ├── TextReveal.tsx            # + CharReveal (named export)
│   │   ├── Timeline.tsx
│   │   └── TrustBadges.tsx           # Accreditation badge strip (FR12)
│   │
│   ├── layouts/                      # Shared page layouts
│   │   └── PageLayout.tsx            # Nav + Breadcrumb (interior) + ErrorBoundary + main + TrustBadges + CtaBand + Footer
│   │
│   ├── pages/
│   │   ├── Home.tsx                  # Full WarmImmersive homepage (FR22)
│   │   ├── Contact.tsx               # Contact page (FR20)
│   │   ├── Privacy.tsx               # Privacy policy (FR33)
│   │   ├── NotFound.tsx              # 404 page
│   │   ├── programs/
│   │   │   ├── Index.tsx             # Programs hub page — all programs, therapies, approaches
│   │   │   ├── Residential.tsx       # FR1 — Residential Treatment
│   │   │   ├── PHP.tsx               # FR1 — Partial Hospitalization
│   │   │   ├── IOP.tsx               # FR1 — Intensive Outpatient
│   │   │   ├── LGBTQAffirmingCare.tsx  # FR14 — LGBTQ+ Affirming Care (#1 traffic page)
│   │   │   ├── GroupTherapy.tsx      # Group Therapy program page
│   │   │   ├── IndividualTherapy.tsx # Individual Therapy modality page
│   │   │   ├── CBT.tsx              # Cognitive Behavioral Therapy page
│   │   │   ├── DBT.tsx              # Dialectical Behavior Therapy page
│   │   │   ├── FamilyTherapy.tsx    # Family Therapy page
│   │   │   ├── MeditationTherapy.tsx # Meditation Therapy page
│   │   │   ├── MedicationTreatment.tsx # Medication Treatment approach
│   │   │   ├── TraumaInformedCare.tsx  # Trauma-Informed Care approach
│   │   │   ├── HolisticTreatment.tsx   # Holistic Treatment approach
│   │   │   ├── PersonalizedTreatment.tsx # Personalized Treatment Plan
│   │   │   └── CrisisPreventionIntervention.tsx # CPI program page
│   │   ├── conditions/               # FR2, FR3 (~27 pages)
│   │   │   ├── Index.tsx             # Conditions hub page — all conditions by category
│   │   │   ├── Anxiety.tsx
│   │   │   ├── Depression.tsx
│   │   │   ├── TraumaPTSD.tsx
│   │   │   ├── SubstanceAbuse.tsx
│   │   │   ├── SuicidalIdeation.tsx
│   │   │   ├── OCD.tsx
│   │   │   ├── BipolarDisorder.tsx
│   │   │   ├── AutismSpectrum.tsx
│   │   │   ├── OppositionalDefiant.tsx
│   │   │   ├── ConductDisorder.tsx
│   │   │   ├── DMDD.tsx
│   │   │   ├── PersonalityDisorders.tsx
│   │   │   ├── AdjustmentDisorder.tsx
│   │   │   ├── SchoolRefusalAvoidance.tsx  # School Refusal / Avoidance
│   │   │   ├── DualDiagnosis.tsx
│   │   │   ├── AlcoholAbuse.tsx
│   │   │   ├── OpioidAbuse.tsx
│   │   │   ├── BenzodiazepineAbuse.tsx
│   │   │   ├── CocaineAbuse.tsx
│   │   │   ├── MethAbuse.tsx
│   │   │   ├── CannabisAbuse.tsx
│   │   │   ├── AnorexiaNervosa.tsx
│   │   │   ├── BulimiaNervosa.tsx
│   │   │   ├── BingeEating.tsx
│   │   │   ├── CompulsiveEating.tsx    # Compulsive Eating Disorder
│   │   │   ├── ARFID.tsx
│   │   │   └── OSFED.tsx
│   │   ├── insurance/                # FR7, FR8
│   │   │   ├── Index.tsx             # Insurance hub page
│   │   │   ├── Aetna.tsx
│   │   │   ├── Cigna.tsx
│   │   │   ├── BCBS.tsx
│   │   │   ├── Ambetter.tsx
│   │   │   ├── Humana.tsx
│   │   │   ├── UHC.tsx
│   │   │   ├── TRICARE.tsx
│   │   │   ├── Medicaid.tsx
│   │   │   └── Anthem.tsx
│   │   ├── locations/                # FR23, FR24, FR25
│   │   │   ├── Index.tsx             # Service area hub
│   │   │   ├── LasVegas.tsx
│   │   │   ├── Henderson.tsx
│   │   │   ├── NorthLasVegas.tsx
│   │   │   ├── Summerlin.tsx
│   │   │   └── ClarkCounty.tsx
│   │   ├── about/                    # FR13, FR14
│   │   │   ├── Team.tsx
│   │   │   ├── Facility.tsx
│   │   │   └── YouthAcademy.tsx
│   │   ├── blog/                     # Blog/Resources (Sanity CMS)
│   │   │   ├── Index.tsx             # Blog index page with filters
│   │   │   └── Post.tsx              # Individual blog post template
│   │   └── admissions/               # FR19
│   │       └── Process.tsx
│   │
│   ├── data/                         # Per-content-area data files
│   │   ├── index.ts                  # Barrel re-export (only barrel allowed)
│   │   ├── common.ts                 # site info, nav links, footer, accreditations
│   │   ├── programs.ts               # Residential, PHP, IOP data
│   │   ├── conditions.ts             # All ~27 condition page data
│   │   ├── insurance.ts              # All carrier data + hub content
│   │   ├── locations.ts              # Service area page data
│   │   ├── about.ts                  # Team bios, facility, academy
│   │   ├── admissions.ts             # Process steps, FAQs
│   │   └── therapies.ts              # Therapy modality descriptions
│   │
│   ├── hooks/
│   │   ├── useIsMobile.ts
│   │   └── useDragScroll.ts
│   │
│   └── utils/
│       ├── schema.ts                 # JSON-LD generators per page type (FR35)
│       ├── schema.test.ts
│       ├── meta.ts                   # SEO metadata helper — generates react-helmet-async props (FR36)
│       ├── analytics.ts              # GA4 + Consent Mode v2 + two-zone logic
│       ├── ctm.ts                    # CTM dynamic number insertion helper (FR21)
│       └── sanity.ts                 # Sanity client config for blog content fetching
│
├── api/                              # Vercel serverless functions
│   ├── contact.ts                    # Contact form handler — validates, forwards via email (FR20)
│   └── gtm.ts                       # Server-side GTM proxy endpoint
│
├── sanity/                           # Sanity CMS studio config (blog/resources content)
│   ├── sanity.config.ts              # Sanity project + studio config
│   ├── sanity.cli.ts                 # Sanity CLI config
│   └── schemas/                      # Content type schemas for blog posts
│       └── post.ts                   # Blog post schema
│
├── e2e/                              # Playwright E2E tests — mirrors page structure
│   ├── homepage.spec.ts
│   ├── navigation.spec.ts
│   ├── accessibility.spec.ts         # axe-core scan across all pages
│   ├── programs/
│   │   └── residential.spec.ts
│   ├── conditions/
│   │   └── anxiety.spec.ts
│   ├── insurance/
│   │   └── index.spec.ts
│   ├── locations/
│   │   └── las-vegas.spec.ts
│   └── about/
│       └── team.spec.ts
│
└── scripts/
    ├── generate-sitemap.ts           # Build-time sitemap generation (FR38)
    ├── validate-content.ts           # Build-time content schema validation
    └── validate-schema.ts            # JSON-LD validation pre-deploy (FR47)
```

### Architectural Boundaries

**Component Boundaries:**

| Boundary | Rule |
|----------|------|
| `PageLayout` | Wraps every page — renders Nav, Breadcrumb (interior pages only), ErrorBoundary around page content, TrustBadges, CtaBand, Footer. Individual pages never render these directly |
| `components/` | Zero knowledge of page content or routes. Components receive data via props only |
| `pages/` | Compose components + consume data. Pages know their content area but not other pages' internals |
| `data/` | Pure data — no React imports, no side effects. Exports typed constants only |
| `utils/` | Pure functions — no React imports, no component rendering. Used by pages and build scripts |
| `hooks/` | React hooks only — no direct DOM manipulation outside React lifecycle |
| `layouts/` | Structural shells — no content knowledge, no data imports |

**Data Flow:**

```
data/*.ts → pages/*.tsx → components/*.tsx → rendered HTML
                ↓
          utils/schema.ts → JSON-LD in <head>
          utils/meta.ts → SEO tags in <head>
```

Data flows one direction: data files → pages → components. Components never import from `data/` directly. Pages are the integration point that connects content data to UI components.

**External Integration Boundaries:**

| Integration | Boundary | Files |
|-------------|----------|-------|
| Cloudflare R2 | Image URLs in data files only — no R2 SDK, no runtime API calls | `data/*.ts` (image URL strings) |
| CTM | Script loaded in `PageLayout`, helper in `utils/ctm.ts` | `layouts/PageLayout.tsx`, `utils/ctm.ts` |
| GA4 + GTM | Loaded conditionally by `CookieConsent` + zone config | `components/CookieConsent.tsx`, `utils/analytics.ts` |
| Google Fonts | CSS `@import` in `index.css` — no JS runtime dependency | `index.css` |
| Vercel | Deploy config + serverless functions for contact form and GTM proxy — no client-side Vercel API calls | `vercel.json`, `.github/workflows/ci.yml`, `api/contact.ts`, `api/gtm.ts` |
| Resend | Email delivery for contact form — called from `api/contact.ts` serverless function only, never from client | `api/contact.ts` |
| Sanity CMS | Blog/resource content — fetched via `@sanity/client` at build time or with CDN caching. Studio at `/studio` or separate admin URL | `utils/sanity.ts`, `pages/blog/Index.tsx`, `pages/blog/Post.tsx` |

**Tracking Zone Boundary:**

| Zone | Pages | Analytics Behavior |
|------|-------|-------------------|
| Zone 1 (Informational) | All pages in MVP | GA4 loads after cookie consent via server-side GTM |
| Zone 2 (Health Forms) | Future form pages (post-MVP) | Zero analytics scripts — `utils/analytics.ts` checks page-level zone config and blocks loading |

### Requirements to Structure Mapping

**FR Category → Directory Mapping:**

| FR Category | FRs | Primary Location | Supporting Files |
|-------------|-----|-----------------|------------------|
| Treatment Information & Discovery | FR1-FR6 | `pages/programs/`, `pages/conditions/` | `data/programs.ts`, `data/conditions.ts`, `data/therapies.ts` |
| Insurance Verification & Coverage | FR7-FR8 (FR9-11 deferred) | `pages/insurance/` | `data/insurance.ts` |
| Clinical Credibility & Trust | FR12-FR16 | `components/TrustBadges.tsx`, `pages/about/` | `data/about.ts`, `data/common.ts` |
| Family Conversion & Contact | FR17-FR22 | `components/CtaBand.tsx`, `components/Nav.tsx`, `pages/Home.tsx`, `pages/Contact.tsx` | `utils/ctm.ts`, `data/common.ts`, `api/contact.ts` |
| Location & Service Area | FR23-FR25 | `pages/locations/` | `data/locations.ts` |
| Accessibility & Privacy | FR26-FR34 | Every component (built-in), `components/CookieConsent.tsx`, `pages/Privacy.tsx` | `utils/analytics.ts` |
| SEO & Discoverability | FR35-FR40 | `utils/schema.ts`, `utils/meta.ts`, `components/Breadcrumb.tsx`, `scripts/` | `routes.ts`, `vite.config.ts` |
| Responsive Experience | FR41-FR43 | Every component (built-in), `hooks/useIsMobile.ts` | `index.css` |
| Content Operations | FR44-FR48 | `data/` (all files), `scripts/validate-*.ts` | `types.ts` |

**Cross-Cutting Concerns → File Mapping:**

| Concern | Files Involved |
|---------|---------------|
| Phone CTA on every page | `layouts/PageLayout.tsx` (renders `CtaBand`), `components/Nav.tsx` (header CTA), `utils/ctm.ts` |
| JSON-LD on every page | `utils/schema.ts` (generators), each page renders `<Helmet>` with JSON-LD script tag, `scripts/validate-schema.ts` |
| SEO metadata on every page | `utils/meta.ts` (helper), each page renders `<Helmet>` with title/description/OG tags |
| WCAG on every component | Built into `index.css` (focus styles, skip link), each component (semantic HTML, ARIA, keyboard) |
| Breadcrumb nav on interior pages | `components/Breadcrumb.tsx` (visual trail + BreadcrumbList JSON-LD), rendered by `layouts/PageLayout.tsx` on all non-homepage routes |
| Trust badges on every page | `layouts/PageLayout.tsx` (renders `TrustBadges`) |
| Internal linking on every page | `data/*.ts` (cross-reference slugs), each page renders related links from data |
| Performance budget | `vite.config.ts` (code splitting), `index.css` (GPU hints), each page (lazy images) |
| Two-zone tracking | `utils/analytics.ts` (zone logic), `components/CookieConsent.tsx`, `routes.ts` (zone config per route) |

### Development Workflow Integration

**Development Server:**
- `npm run dev` — Vite dev server with HMR, React Router v7 library/SPA mode
- All pages available at their production URLs during dev
- Local `/assets/` folder substitutes for R2 URLs

**Build Process:**
- `npm run build` — `tsc --noEmit && vite build`
- vite-ssg pre-renders all routes defined in `routes.ts` to static HTML
- Generates `sitemap.xml` via `scripts/generate-sitemap.ts`
- Validates content schemas via `scripts/validate-content.ts`
- Validates JSON-LD via `scripts/validate-schema.ts`
- Output: `dist/` with static HTML + JS bundles + assets

**CI Pipeline (`.github/workflows/ci.yml`):**
1. TypeScript check (`tsc --noEmit`)
2. ESLint + jsx-a11y
3. Prettier check
4. Vitest (unit + component tests)
5. Build (includes content + schema validation)
6. Playwright (E2E + axe-core accessibility)

**Deployment:**
- Push to `main` → Vercel auto-deploys
- Vercel serves static files from Edge Network CDN
- `vercel.json` handles: trailing slash redirects, security headers, cache headers for static assets

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
All technology choices are fully compatible. React 19 + Vite 6 + TypeScript 5.9.3 + React Router v7 (library/SPA mode) + vite-ssg + react-helmet-async form a unified build/render stack with no version conflicts. GSAP 3.14.2 and Framer Motion 12.34.3 both integrate with React 19. Vercel hosting supports static deployment + serverless functions for contact form and GTM proxy. Cloudflare R2 operates independently for image delivery. Resend API is called server-side only from Vercel functions.

**Pattern Consistency:**
All patterns reinforce each other. Naming conventions are consistent across all layers. Data flow is unidirectional (data → pages → components). Styling uses a single approach (CSS tokens + inline styles) with no competing paradigms. Environment variables follow Vite convention with clear client/server separation.

**Structure Alignment:**
Directory structure directly supports all architectural decisions. Page grouping mirrors URL structure. The `api/` directory cleanly separates serverless functions from client code. Boundaries are well-defined — components have no data knowledge, pages are the integration point, utils are pure functions.

### Requirements Coverage Validation ✅

**Functional Requirements Coverage (48 FRs):**

| FR Category | FRs | Status | Notes |
|-------------|-----|--------|-------|
| Treatment Information & Discovery | FR1-FR6 | ✅ Covered | `pages/programs/`, `pages/conditions/`, data files, FAQ and internal linking patterns |
| Insurance Verification & Coverage | FR7-FR8 | ✅ Covered | `pages/insurance/`, `data/insurance.ts` |
| Insurance Form | FR9-FR11 | ⏳ Deferred | Phone calls only for MVP — architecture supports future addition |
| Clinical Credibility & Trust | FR12-FR16 | ✅ Covered | `TrustBadges`, `pages/about/`, `reviewedBy`/`reviewDate` fields on clinical data types |
| Family Conversion & Contact | FR17-FR22 | ✅ Covered | `CtaBand`, `Nav` phone CTA, `utils/ctm.ts`, `api/contact.ts` for contact form (FR20) |
| Location & Service Area | FR23-FR25 | ✅ Covered | `pages/locations/`, `data/locations.ts` |
| Accessibility & Privacy | FR26-FR34 | ✅ Covered | Built into component patterns, `CookieConsent`, two-zone tracking, `pages/Privacy.tsx` |
| SEO & Discoverability | FR35-FR40 | ✅ Covered | `utils/schema.ts`, `utils/meta.ts`, `Breadcrumb.tsx` (FR39), pre-rendering, sitemap |
| Responsive Experience | FR41-FR43 | ✅ Covered | 900px breakpoint, `useIsMobile`, 44x44px touch targets |
| Content Operations | FR44-FR48 | ✅ Covered | Data-driven architecture, `scripts/validate-*.ts`, content review fields |

**Non-Functional Requirements Coverage (36 NFRs):**

| NFR Category | NFRs | Status | Notes |
|--------------|------|--------|-------|
| Performance | NFR1-6 | ✅ Covered | Pre-rendering, code splitting, lazy loading, image optimization, performance budget |
| Security | NFR7-12 | ✅ Covered | HTTPS, zero PHI client storage, two-zone tracking, cookie consent opt-in, BAA responsibility noted |
| Accessibility | NFR13-18 | ✅ Covered | axe-core testing, focus styles, skip link, semantic HTML, contrast rules, form label patterns |
| Reliability | NFR19-22 | ✅ Covered | Static architecture, Vercel CDN (< 100ms TTFB), no server runtime for public pages |
| Integration | NFR23-27 | ✅ Covered | CTM non-blocking, JSON-LD validation, sitemap auto-generation, form backend on Vercel |
| Compliance | NFR28-31 | ✅ Covered | Forms deferred (42 CFR Part 2 not yet needed), WCAG built-in, FTC via content review process |
| SEO Quality | NFR32-36 | ✅ Covered | Pre-rendered HTML with full content, canonical URLs, robots.txt, JSON-LD validation |

### Implementation Readiness Validation ✅

**Decision Completeness:**
All critical and important decisions documented with specific technology versions. No ambiguous "TBD" decisions remain in MVP scope. Deferred decisions (CMS, SSR, insurance form backend) are explicitly called out with trigger conditions for revisiting.

**Structure Completeness:**
Full directory tree with every file named and annotated. `api/` directory added for serverless functions. All integration points mapped to specific files. Route-to-file mapping enables any agent to find the right file for any URL.

**Pattern Completeness:**
16 conflict points resolved with explicit conventions. Naming, structure, styling, data, component, route, testing, environment variable, and process patterns all documented with examples and anti-patterns. Enforcement guidelines define what agents must verify before committing.

### Gap Analysis Results

**No critical gaps remain.** All 5 issues identified during validation have been resolved:

1. **Breadcrumb component (FR39):** Added `Breadcrumb.tsx` to components, wired into `PageLayout` for interior pages, generates both visual breadcrumb trail and `BreadcrumbList` JSON-LD
2. **Contact form backend (FR20):** Defined as Vercel serverless function (`api/contact.ts`) + Resend email API — one platform, minimal vendor overhead
3. **Environment variable pattern:** Added convention with `VITE_` prefix for client-side, no prefix for server-only, `.env.example` committed, `.env` gitignored
4. **ErrorBoundary wiring:** Explicitly placed inside `PageLayout` wrapping page content — every page gets automatic error boundary protection with fallback UI
5. **Breakpoint rationale:** 900px documented as intentional architectural decision with reasoning — existing component library foundation, two-tier layout sufficient for content-and-CTA site

### Architecture Completeness Checklist

**✅ Requirements Analysis**

- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**✅ Architectural Decisions**

- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined (CTM, GA4, R2, Resend)
- [x] Performance considerations addressed
- [x] Contact form backend defined

**✅ Implementation Patterns**

- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Styling patterns specified with breakpoint rationale
- [x] Content data patterns documented
- [x] Component patterns with examples and anti-patterns
- [x] Environment variable convention defined
- [x] Process patterns documented (error handling, loading)

**✅ Project Structure**

- [x] Complete directory structure with all files named
- [x] Component boundaries established
- [x] Integration points mapped to files
- [x] Requirements to structure mapping complete
- [x] Serverless API directory defined

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Brownfield project with 20+ existing production components reduces implementation risk
- Data-driven architecture means most pages are assembled from typed data, not custom code
- Single styling paradigm (CSS tokens + inline) eliminates CSS methodology conflicts
- Every FR maps to specific files — AI agents can find what to build without guessing
- Environment variables, breakpoint rationale, and error boundary wiring eliminate ambiguity

**Areas for Future Enhancement:**
- CMS evaluation when content update frequency increases (post-MVP)
- Insurance verification form backend when forms are added to the conversion path
- SSR/Next.js migration if pre-rendering proves insufficient
- Tablet-specific layouts if analytics show significant tablet traffic with poor UX

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Access environment variables via `import.meta.env.VITE_*` for client code
- Refer to this document for all architectural questions

**First Implementation Priority:**
Restructure the existing mockup project (`mockups/silverstate-react/`) into React Router v7 library/SPA mode with `createBrowserRouter`, vite-ssg for pre-rendering, and react-helmet-async for SEO metadata, following the production directory structure defined in this document.
