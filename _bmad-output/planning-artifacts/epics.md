---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments:
  - planning-artifacts/prd.md
  - planning-artifacts/architecture.md
---

# silverstate - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for silverstate, decomposing the requirements from the PRD and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Families can view detailed program pages for each level of care (Residential, PHP, IOP) describing structure, approach, duration, and what a typical day looks like
FR2: Families can browse condition-specific treatment pages (~27) for their teen's diagnosis (anxiety, depression, PTSD, substance use, eating disorders, dual diagnosis, OCD, conduct disorders, etc.)
FR3: Families can view evidence-based therapy descriptions and clinical modalities used for each condition
FR4: Families can view the daily schedule and program structure to understand their teen's experience
FR5: Families can navigate between related content (conditions, programs, insurance, locations) via contextual internal links on every page
FR6: Families can access FAQ sections with condition-, program-, and insurance-specific answers on relevant pages
FR7: Families can view a hub page listing all insurance providers Silver State accepts
FR8: Families can view individual insurance provider pages (Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem) explaining typical adolescent treatment coverage
FR9: Families can submit an insurance verification form with their insurance details to initiate coverage confirmation [DEFERRED - MVP uses phone calls only]
FR10: The insurance verification form collects explicit consent for substance use disorder information disclosure per 42 CFR Part 2 before submission [DEFERRED]
FR11: The insurance verification form transmits data via encrypted connection with no marketing tracking scripts present on the form page [DEFERRED]
FR12: Families can view accreditation and certification badges (Joint Commission Gold Seal, LegitScript, NAATP) on every page of the site
FR13: Families can view staff profiles with names, photos, credentials, license information, specializations, and professional backgrounds
FR14: Families can view Silver State's key differentiators — ratings, staff-to-client ratio, LGBTQIA+ affirming care designation, on-site accredited academics, and full continuum of care
FR15: Every clinical content page displays a named, credentialed author or clinical reviewer
FR16: Clinical content cites trusted sources (CDC, SAMHSA, NIDA, peer-reviewed journals) where medical claims are made
FR17: Families can see a phone call CTA on every page of the site — no page exists without a clear path to contact
FR18: Mobile users can initiate a phone call with a single tap (click-to-call) from any page
FR19: Families can view a clear, step-by-step admissions process on a dedicated admissions page
FR20: Families can submit a general contact inquiry through the site
FR21: All phone CTAs attribute call source and originating page for conversion tracking
FR22: The homepage delivers the full branded experience — emotional hero content, persona-specific sections, trust signals, and conversion CTAs following the emotional journey arc
FR23: Families can view location-specific pages for Las Vegas metro service areas (Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County)
FR24: Families can view Silver State's address, service area, and facility details including contact information
FR25: Families can access a hub page showing all communities and areas served
FR26: All users can navigate the entire site using only a keyboard
FR27: All users can access content via screen readers through semantic HTML structure, proper heading hierarchy, and landmark roles
FR28: All images provide descriptive alternative text
FR29: All users can resize text to 200% without loss of content or functionality
FR30: All color combinations meet WCAG 2.1 AA contrast ratios (4.5:1 normal text, 3:1 large text)
FR31: The site respects prefers-reduced-motion user preferences for animations
FR32: Users can manage cookie consent preferences with opt-in required for non-essential tracking
FR33: Users can access the privacy policy from every page
FR34: No marketing tracking pixels execute on pages where users submit health information
FR35: Every page provides JSON-LD structured data describing its content type (MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList)
FR36: Every page provides unique SEO metadata — title tag, meta description, Open Graph tags, and canonical URL
FR37: All page content renders in the initial HTML without requiring JavaScript execution for crawlability
FR38: The site generates and maintains an up-to-date sitemap.xml with all page URLs
FR39: Breadcrumb navigation is present on all interior pages with structured data markup
FR40: All pages produce proper link previews when shared via email, text, or social platforms (Open Graph)
FR41: All pages render correctly and are fully functional across mobile (320px+), tablet (768px+), and desktop (1024px+) viewports
FR42: Touch targets on mobile meet minimum 44x44px sizing
FR43: No horizontal scrolling occurs at any viewport width
FR44: Content is structured in data files separate from presentation components, enabling new pages by adding data without writing new components
FR45: Each page type (condition, insurance, location, program) follows a consistent content schema ensuring structural uniformity across all pages of that type
FR46: Clinical content updates require sign-off from a named credentialed reviewer before publishing
FR47: Structured data markup is validated before deployment
FR48: The site tracks and reports Core Web Vitals and page performance metrics

### NonFunctional Requirements

NFR1: Largest Contentful Paint (LCP) < 2.5 seconds on all pages, all devices
NFR2: Cumulative Layout Shift (CLS) < 0.1 on all pages — no animations push content after initial render
NFR3: Interaction to Next Paint (INP) < 200ms for all interactive elements
NFR4: Total initial page weight < 1.5MB (HTML + critical CSS + critical JS + above-fold images)
NFR5: Time to Interactive < 3.5s — content readable before animations and non-critical JS load
NFR6: Images served in next-gen formats (WebP/AVIF) with appropriate sizing per viewport via srcset/picture
NFR7: All pages served over HTTPS/TLS — no exceptions, no mixed content
NFR8: Insurance verification and contact form data encrypted in transit (TLS) and at rest on the receiving backend
NFR9: Zero client-side storage of Protected Health Information — no localStorage, sessionStorage, or cookies containing PHI
NFR10: Business Associate Agreements (BAAs) executed with all technology vendors that process or transmit user data (hosting, analytics, form processing, CDN, email)
NFR11: Zero marketing tracking pixels or scripts execute on any page containing a health information form
NFR12: Cookie consent mechanism blocks non-essential scripts until user opts in
NFR13: 100% of pages conform to WCAG 2.1 Level AA — verified by automated testing (axe-core/Lighthouse) and manual keyboard/screen reader testing
NFR14: Color contrast minimum 4.5:1 for normal text, 3:1 for large text and UI components
NFR15: All interactive elements operable via keyboard with visible focus indicators
NFR16: No content flashes more than 3 times per second
NFR17: Skip navigation links present on all pages
NFR18: Form inputs have associated labels, error states are programmatically announced, and required fields are clearly indicated
NFR19: 99.9% uptime — families search in crisis moments at all hours including nights and weekends
NFR20: Static site architecture with no server-side runtime dependencies for public-facing pages
NFR21: CDN-distributed hosting with < 100ms Time to First Byte (TTFB) from continental U.S. locations as measured by synthetic monitoring
NFR22: Insurance form backend maintains independent availability with graceful degradation — if the form backend is unavailable, the phone CTA remains functional as the primary conversion path
NFR23: CTM dynamic number insertion loads without blocking page render or impacting LCP
NFR24: JSON-LD structured data on all pages validates error-free via Google's Rich Results Test
NFR25: sitemap.xml regenerated automatically on each production build, reflecting all current page URLs
NFR26: Insurance form data routes to a HIPAA-compliant backend service with BAA coverage
NFR27: Google Search Console property verified and receiving crawl/indexing data within 48 hours of launch
NFR28: 42 CFR Part 2 consent mechanisms operational on all SUD-related forms — compliance deadline February 16, 2026
NFR29: WCAG 2.1 AA compliance on 100% of pages — federal deadline May 11, 2026
NFR30: FTC-compliant language on all testimonials and outcome claims — ongoing, enforced through clinical content review process
NFR31: LegitScript certification maintained current for Google Ads eligibility — annual renewal
NFR32: 100% of pages pass Google's mobile usability test
NFR33: 100% of pages have valid, error-free JSON-LD structured data for their content type
NFR34: Zero duplicate content issues — canonical URLs enforced on every page
NFR35: robots.txt allows full crawling of all public pages; no accidental noindex/nofollow on content pages
NFR36: All pre-rendered HTML contains the full page content (no empty shell requiring client-side rendering)

### Additional Requirements

**From Architecture — Starter Template / Project Foundation:**
- Evolve existing mockup project (mockups/silverstate-react/) into production — no external starter template. 21 existing components, typed data models, complete design system. This defines Epic 1 Story 1
- Restructure into React Router v7 library/SPA mode with `createBrowserRouter` and vite-ssg for static pre-rendering of all 50-60 routes
- Production directory structure defined in Architecture document must be followed exactly

**From Architecture — Hosting & Deployment:**
- Vercel hosting with Edge Network CDN, automatic HTTPS, built-in CI/CD
- Vercel serverless functions for contact form (api/contact.ts) + server-side GTM proxy (api/gtm.ts)
- Cloudflare R2 for image storage + CF CDN for delivery (pre-optimized images, no runtime transforms)
- Resend email API for contact form delivery

**From Architecture — Analytics & Tracking:**
- GA4 with server-side GTM, two-zone tracking model (Zone 1: informational pages get GA4; Zone 2: future health form pages get zero scripts)
- Custom cookie consent banner with Google Consent Mode v2
- CTM dynamic number insertion on all phone CTAs

**From Architecture — Code Quality & Testing:**
- Vitest + React Testing Library for unit/component tests
- Playwright + axe-core for E2E and accessibility testing
- ESLint + jsx-a11y plugin + Prettier for linting/formatting
- CI pipeline: tsc -> ESLint -> Prettier -> Vitest -> Build (with content/schema validation) -> Playwright

**From Architecture — Implementation Patterns:**
- Single styling paradigm: CSS design tokens in index.css + inline styles (no CSS modules, no Tailwind, no styled-components)
- 900px single mobile breakpoint (intentional architectural decision)
- PageLayout wraps every page: Nav + Breadcrumb (interior) + ErrorBoundary + main content + TrustBadges + CtaBand + Footer
- Data-driven content architecture: TypeScript data files in src/data/, no CMS for MVP
- All content data exports must be typed with interfaces in types.ts
- Components use export default function, accept className/style props, follow accessibility patterns

**From Architecture — Deferred Items (NOT in MVP):**
- Insurance verification form backend (FR9-FR11) — phone calls only
- 42 CFR Part 2 consent mechanism — no health data collected via forms at launch
- CMS evaluation — content stays in TypeScript data files
- SSR / Next.js migration — pre-rendering is sufficient

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 3 | Program pages (Residential, PHP, IOP) |
| FR2 | Epic 4 | Condition treatment pages (~27) |
| FR3 | Epic 3, 4 | Evidence-based therapy descriptions |
| FR4 | Epic 3 | Daily schedule and program structure |
| FR5 | Epic 2-8 | Cross-cutting: internal links on every page |
| FR6 | Epic 3, 4, 5 | FAQ sections on relevant pages |
| FR7 | Epic 5 | Insurance hub page |
| FR8 | Epic 5 | Individual insurance provider pages (9) |
| FR9 | DEFERRED | Insurance verification form |
| FR10 | DEFERRED | 42 CFR Part 2 consent mechanism |
| FR11 | DEFERRED | Encrypted form with no marketing pixels |
| FR12 | Epic 1 | Trust badges on every page (PageLayout) |
| FR13 | Epic 6 | Staff profiles with credentials |
| FR14 | Epic 2, 6 | Key differentiators displayed |
| FR15 | Epic 4, 6 | Clinical reviewer attribution on clinical pages |
| FR16 | Epic 4, 6 | Source citations for medical claims |
| FR17 | Epic 1 | Phone CTA on every page (PageLayout) |
| FR18 | Epic 1 | Click-to-call on mobile |
| FR19 | Epic 8 | Admissions process page |
| FR20 | Epic 8 | Contact inquiry form |
| FR21 | Epic 9 | CTM call tracking attribution |
| FR22 | Epic 2 | Homepage branded experience |
| FR23 | Epic 7 | Location-specific pages |
| FR24 | Epic 7 | Address, service area, facility details |
| FR25 | Epic 7 | Service area hub page |
| FR26 | Epic 1 | Keyboard navigation (cross-cutting) |
| FR27 | Epic 1 | Screen reader support (cross-cutting) |
| FR28 | Epic 1 | Alt text on all images (cross-cutting) |
| FR29 | Epic 1 | Text resize to 200% (cross-cutting) |
| FR30 | Epic 1 | WCAG AA contrast ratios (cross-cutting) |
| FR31 | Epic 1 | prefers-reduced-motion support |
| FR32 | Epic 9 | Cookie consent with opt-in |
| FR33 | Epic 1 | Privacy policy accessible from every page |
| FR34 | Epic 9 | No marketing pixels on health form pages |
| FR35 | Epic 1 (util), 2-8 | JSON-LD structured data per page |
| FR36 | Epic 1 (util), 2-8 | SEO metadata per page |
| FR37 | Epic 1 | Pre-rendered HTML for crawlability |
| FR38 | Epic 1 | sitemap.xml generation |
| FR39 | Epic 1 | Breadcrumb navigation + structured data |
| FR40 | Epic 2-8 | Open Graph for link previews |
| FR41 | Epic 1 | Responsive across all viewports |
| FR42 | Epic 1 | 44x44px touch targets |
| FR43 | Epic 1 | No horizontal scrolling |
| FR44 | Epic 1 | Data files separate from components |
| FR45 | Epic 1 | Consistent content schema per page type |
| FR46 | Epic 4, 6 | Clinical review sign-off (data fields) |
| FR47 | Epic 1 | Schema validation before deployment |
| FR48 | Epic 9 | Core Web Vitals tracking |

**Coverage: 45/48 FRs mapped. 3 FRs (FR9-11) explicitly deferred per Architecture decision.**

**Additional Coverage (added 2026-02-23):**
- Story 1.13 (Redirects): SEO equity preservation during migration
- Story 3.4 (LGBTQ+ / Group Therapy): FR14 (LGBTQ+ affirming care differentiator), FR3, FR5, FR6
- Epic 10 (Blog/Sanity): FR5, FR35, FR36, FR40, FR44 — extends data architecture to CMS-managed content

## Epic List

### Epic 1: Project Foundation & Site Shell
Families experience a fast, accessible, mobile-first site with persistent navigation, phone CTA on every page, trust badges, breadcrumbs, and a privacy policy — the shell that all content lives within.
**FRs covered:** FR12, FR17, FR18, FR26-31, FR33, FR35 (util), FR36 (util), FR37, FR38, FR39, FR41-43, FR44, FR45, FR47

### Epic 2: Homepage — The Trust Engine
Maria lands on the homepage and experiences the full emotional journey — from validation of her fear, to seeing her daughter reflected in the content, to trusting Silver State's credentials, to tapping the phone number.
**FRs covered:** FR5, FR14, FR22, FR35, FR36, FR40

### Epic 3: Treatment Program, Therapy & Approach Pages
Families can explore each level of care (Residential, PHP, IOP), specific therapy modalities (CBT, DBT, Family, Group, Individual, Meditation), specialized treatment approaches (Medication, Trauma-Informed, Holistic, Personalized), and LGBTQ+ affirming care — the full continuum of what Silver State offers.
**FRs covered:** FR1, FR3, FR4, FR5, FR6, FR14, FR35, FR36, FR40

### Epic 4: Condition Treatment Pages
Rachel finds treatment information specific to her teen's diagnosis — evidence-based therapies, clinical staff credentials, FAQ answers to her exact questions. This works for all ~27 conditions.
**FRs covered:** FR2, FR3, FR5, FR6, FR15, FR16, FR35, FR36, FR40

### Epic 5: Insurance Coverage Pages
David finds his insurance provider page, understands what's typically covered for adolescent residential treatment, and sees a direct phone number to get answers now.
**FRs covered:** FR5, FR6, FR7, FR8, FR35, FR36, FR40

### Epic 6: About & Clinical Credibility
Dr. Chen verifies Silver State's clinical credentials — staff bios with license numbers, accreditation status, program structure — and confidently refers her client's family.
**FRs covered:** FR13, FR14, FR15, FR16, FR35, FR36, FR40

### Epic 7: Location & Service Area Pages
Families searching local terms land on relevant pages with Silver State's facility details and service area information for Las Vegas metro communities.
**FRs covered:** FR5, FR23, FR24, FR25, FR35, FR36, FR40

### Epic 8: Admissions & Contact
Families who are ready to act see a clear, step-by-step admissions process and can submit a contact inquiry directly through the site — no dead ends, no confusion.
**FRs covered:** FR5, FR19, FR20, FR35, FR36, FR40

### Epic 9: Analytics, Tracking & Privacy Compliance
Comcreate can track which pages drive calls, families can control their cookie preferences, and the site meets all privacy compliance requirements — the operational intelligence layer.
**FRs covered:** FR21, FR32, FR34, FR48

### Epic 10: Blog & Resources (Sanity CMS)
Families discover Silver State through blog content addressing their specific concerns. Comcreate can publish ongoing content without developer involvement. Existing blog posts driving ~87 visits/month are preserved.
**FRs covered:** FR5, FR35, FR36, FR40, FR44

---

## Epic 1: Project Foundation & Site Shell

Families experience a fast, accessible, mobile-first site with persistent navigation, phone CTA on every page, trust badges, breadcrumbs, and a privacy policy — the shell that all content lives within.

### Story 1.1: Initialize Production Project from Mockup

As a **developer**,
I want the existing mockup project evolved into a production React Router v7 library/SPA mode project with `createBrowserRouter`, vite-ssg for pre-rendering, and the Architecture-defined directory structure,
So that all future pages and components build on a standardized, pre-rendering-capable foundation.

**Acceptance Criteria:**

**Given** the existing mockup in `mockups/silverstate-react/`
**When** the production project is initialized
**Then** the project uses React Router v7 library/SPA mode with `createBrowserRouter`, `RouterProvider`, and Vite 6
**And** the directory structure matches the Architecture document exactly (`src/components/`, `src/pages/`, `src/data/`, `src/hooks/`, `src/utils/`, `src/layouts/`, `api/`, `e2e/`, `scripts/`)
**And** TypeScript strict mode is enabled
**And** `.env.example` documents all required environment variables with placeholders
**And** existing design system CSS (tokens, utility classes) is migrated to `src/index.css`
**And** `npm run dev` starts the development server successfully

### Story 1.2: Shared Data Types & Common Content Data

As a **developer**,
I want all shared TypeScript interfaces defined in `types.ts` and common site data in `data/common.ts`,
So that all future pages and components have type-safe, consistent data structures to build on.

**Acceptance Criteria:**

**Given** the production project from Story 1.1
**When** data types and common data are created
**Then** `src/types.ts` exports interfaces for all content areas: `BaseComponentProps`, `FaqEntry`, `ProgramData`, `ConditionData`, `InsuranceEntry`, `LocationData`, `TeamMember`, `AdmissionsStep`, `TherapyModality`, and page-type content schemas
**And** clinical content types include `reviewedBy?: string` and `reviewDate?: string` fields
**And** `src/data/common.ts` exports typed site info (`site.phone`, `site.phoneTel`, `site.name`, `site.address`), nav links, footer content, and accreditation data
**And** `src/data/index.ts` barrel re-exports from all data files
**And** all exports have explicit type annotations
**And** `npx tsc --noEmit` passes with zero errors

### Story 1.3: Nav Component

As a **family member visiting the site**,
I want persistent navigation with a visible phone number and click-to-call capability,
So that I can always find my way around the site and contact Silver State instantly from any page.

**Acceptance Criteria:**

**Given** a user visits any page on the site
**When** the page loads
**Then** the Nav displays the Silver State logo, primary navigation links, and a phone CTA with `tel:` link (FR17, FR18)
**And** a skip navigation link is the first focusable element on the page (NFR17)
**And** on mobile (< 900px), the nav collapses to a hamburger menu that opens a full navigation panel
**And** the phone CTA is always visible — not hidden inside the mobile menu
**And** the nav structure accommodates all content areas: Programs (3 levels of care + LGBTQ+ + Group Therapy), Therapy Modalities (5 pages), Treatment Approaches (5 pages including CPI), Conditions, Insurance, Locations, About, Admissions, Blog
**And** all interactive elements are keyboard accessible with visible focus indicators (FR26, NFR15)
**And** touch targets meet 44x44px minimum on mobile (FR42)
**And** the Nav renders correctly at 320px, 768px, and 1024px+ viewports (FR41)

### Story 1.4: Footer Component

As a **family member**,
I want a site footer with contact information, site links, and a privacy policy link,
So that I can find essential information and navigate from the bottom of any page.

**Acceptance Criteria:**

**Given** a user scrolls to the bottom of any page
**When** the Footer renders
**Then** it displays Silver State contact information, site navigation links, and a phone CTA with `tel:` link
**And** a link to the Privacy Policy page is visible and accessible (FR33)
**And** accreditation information is displayed
**And** all links are keyboard accessible with proper focus indicators
**And** the Footer is responsive across all breakpoints (FR41)
**And** semantic HTML is used (`<footer>` element with proper landmark role) (FR27)

### Story 1.5: TrustBadges & CtaBand Components

As a **parent evaluating treatment centers**,
I want to see accreditation badges and a clear call-to-action on every page,
So that I trust Silver State's credentials and always know how to take the next step.

**Acceptance Criteria:**

**Given** a user views any page on the site
**When** the page renders
**Then** TrustBadges displays Joint Commission Gold Seal, LegitScript, and NAATP accreditation badges (FR12)
**And** CtaBand displays a phone call CTA section with `tel:` link and urgency messaging (FR17, FR18)
**And** all badge images have descriptive alt text (FR28)
**And** both components are responsive across all breakpoints
**And** phone number uses `site.phoneTel` from `data/common.ts` — never hardcoded

### Story 1.6: Breadcrumb & ErrorBoundary Components

As a **user navigating interior pages**,
I want breadcrumb navigation showing my location in the site hierarchy, and graceful error handling if something goes wrong,
So that I'm never lost or stranded.

**Acceptance Criteria:**

**Given** a user visits any interior page (not homepage)
**When** the page renders
**Then** Breadcrumb displays a visual trail (e.g., Home > Programs > Residential Treatment) (FR39)
**And** Breadcrumb generates valid BreadcrumbList JSON-LD structured data (FR35)
**And** breadcrumb links are keyboard accessible
**And** the homepage does NOT display breadcrumbs

**Given** a page component throws a runtime error
**When** the ErrorBoundary catches the error
**Then** a fallback UI displays with the phone CTA — not a blank page
**And** the fallback UI is accessible and responsive

### Story 1.7: PageLayout — Shared Page Shell

As a **developer**,
I want a single PageLayout component that wraps every page with the shared shell,
So that cross-cutting concerns are handled in one place and no page ships without the required elements.

**Acceptance Criteria:**

**Given** any page component rendered within the app
**When** PageLayout wraps the page
**Then** it renders: Nav (top) → Breadcrumb (interior pages only) → ErrorBoundary wrapping `<main>` content → TrustBadges → CtaBand → Footer
**And** the `<main>` element has proper landmark role (FR27)
**And** heading hierarchy starts fresh within each page's content
**And** every page automatically gets phone CTA (FR17), trust badges (FR12), privacy link (FR33), breadcrumb on interior pages (FR39)
**And** PageLayout adds no page-specific content knowledge — it is a pure structural shell

### Story 1.8: SEO Utilities & Route Configuration

As a **developer**,
I want SEO utility functions and a complete route manifest,
So that every page gets correct JSON-LD, metadata, and pre-rendered HTML without manual configuration per page.

**Acceptance Criteria:**

**Given** the production project needs SEO infrastructure
**When** SEO utilities are created
**Then** `utils/schema.ts` exports JSON-LD generator functions for: MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList, Article, WebPage, CollectionPage (FR35)
**And** `utils/meta.ts` exports a react-helmet-async helper that generates `<Helmet>` props: title, description, OG tags, and canonical URL per page (FR36)
**And** `routes.ts` defines all routes matching the Architecture URL structure, consumed by `createBrowserRouter` in App.tsx
**And** vite-ssg pre-renders all routes to static HTML at build time (FR37)
**And** generated JSON-LD validates against schema.org standards
**And** pre-rendered HTML contains full page content without requiring JavaScript (NFR36)

### Story 1.9: Build Scripts — Sitemap, Validation & Robots

As a **search engine crawler**,
I want a valid sitemap.xml, robots.txt, and validated structured data,
So that all Silver State pages are discoverable and indexable.

**Acceptance Criteria:**

**Given** a production build runs
**When** build scripts execute
**Then** `scripts/generate-sitemap.ts` produces a valid `sitemap.xml` with all page URLs (FR38)
**And** `public/robots.txt` allows full crawling of all public pages (NFR35)
**And** `scripts/validate-content.ts` validates all data files have required fields — build fails on missing/empty required fields (FR45)
**And** `scripts/validate-schema.ts` validates JSON-LD output is error-free (FR47, NFR24)
**And** sitemap.xml regenerates automatically on each build (NFR25)

### Story 1.10: Testing & Linting Infrastructure

As a **developer**,
I want testing, linting, and formatting tools configured,
So that code quality, accessibility compliance, and type safety are enforced automatically.

**Acceptance Criteria:**

**Given** the production project
**When** testing infrastructure is set up
**Then** Vitest + React Testing Library is configured for unit/component tests
**And** Playwright is configured for E2E tests with axe-core for accessibility scanning
**And** ESLint is configured with jsx-a11y plugin
**And** Prettier is configured for consistent formatting
**And** `npm run test` runs Vitest, `npm run test:e2e` runs Playwright
**And** `npm run lint` runs ESLint, `npm run format` runs Prettier

### Story 1.11: Deployment & CI Pipeline

As a **developer**,
I want automated deployment to Vercel and a CI pipeline that enforces quality gates,
So that every push to main deploys a verified, high-quality build.

**Acceptance Criteria:**

**Given** code is pushed to the main branch
**When** the CI pipeline runs
**Then** `.github/workflows/ci.yml` executes in order: TypeScript check → ESLint → Prettier → Vitest → Build (with content + schema validation) → Playwright
**And** `vercel.json` configures trailing slash redirects, security headers, and cache headers for static assets
**And** Vercel deploys static files from `dist/` to Edge Network CDN (NFR19, NFR20, NFR21)
**And** the site is accessible via HTTPS with no mixed content (NFR7)
**And** deployed pages meet performance budgets: LCP < 2.5s, CLS < 0.1, INP < 200ms, page weight < 1.5MB, TTI < 3.5s (NFR1-5)
**And** no content flashes more than 3 times per second (NFR16)

### Story 1.12: Privacy Policy & 404 Pages

As a **family member**,
I want access to a clear privacy policy and a helpful error page if I reach a broken link,
So that I trust the site's handling of my information and am never stranded on a dead page.

**Acceptance Criteria:**

**Given** a user clicks the privacy policy link from any page
**When** the Privacy Policy page loads
**Then** it renders within PageLayout with full SEO metadata and JSON-LD (FR33, FR36)
**And** the content addresses data collection, HIPAA compliance, and cookie usage

**Given** a user navigates to a non-existent URL
**When** the 404 page renders
**Then** it displays a helpful message with navigation links and a phone CTA
**And** it uses PageLayout for consistent experience
**And** it returns proper HTTP 404 status

---

## Epic 2: Homepage — The Trust Engine

Maria lands on the homepage and experiences the full emotional journey — from validation of her fear, to seeing her daughter reflected in the content, to trusting Silver State's credentials, to tapping the phone number.

### Story 2.1: Homepage Data & Hero Section

As a **parent searching for help at 11 PM**,
I want an emotionally resonant hero section that validates what I'm feeling and stops my scrolling,
So that I know Silver State understands my situation before I read another word.

**Acceptance Criteria:**

**Given** a user lands on the homepage
**When** the hero section renders
**Then** the WarmImmersive hero displays emotional copy that validates parental fear and urgency
**And** a parallax or scroll-triggered animation creates visual depth without blocking content (NFR2)
**And** the hero image uses `fetchpriority="high"` for LCP optimization (NFR1)
**And** a phone CTA is visible in the hero section — above the fold on all devices
**And** the hero respects `prefers-reduced-motion` (FR31)
**And** homepage content data is sourced from a data file, not hardcoded in the component (FR44)

### Story 2.2: Homepage Content Sections

As a **parent scrolling deeper**,
I want to see persona-specific content that reflects my child, Silver State's differentiators, and clinical credibility,
So that I build trust through specificity — not generic marketing language.

**Acceptance Criteria:**

**Given** a user scrolls below the hero
**When** content sections render
**Then** persona-specific content blocks describe the teens Silver State treats — anxiety, self-medicating, trauma (FR22)
**And** a differentiators section displays: 4.8/5 rating, 4:1 staff ratio, LGBTQIA+ affirming, on-site academics, full continuum of care (FR14)
**And** trust signals include Joint Commission Gold Seal, named clinical staff (Dr. Russ Park, Arianne Smith) (FR12)
**And** program highlights link to Residential, PHP, IOP pages (FR5)
**And** scroll-triggered animations enhance engagement without degrading CLS (NFR2)
**And** all sections are responsive and accessible (FR41, FR26-30)

### Story 2.3: Homepage SEO, Schema & Conversion CTAs

As a **family finding Silver State through search or a shared link**,
I want the homepage to be fully discoverable with rich search results and proper link previews,
So that Silver State appears credibly in search results and shared links display correctly.

**Acceptance Criteria:**

**Given** the homepage is built
**When** SEO and conversion elements are implemented
**Then** JSON-LD structured data includes MedicalOrganization + LocalBusiness schemas (FR35)
**And** `<Helmet>` provides unique title, description, OG tags, and canonical URL (FR36, FR40)
**And** the page meets WCAG 2.1 AA accessibility standards: keyboard navigable, screen reader compatible, all interactive elements have 44x44px touch targets (FR26, FR42, NFR13)
**And** conversion CTAs follow the emotional journey arc — positioned at decision points throughout the page (FR22)
**And** internal links connect to condition pages, program pages, insurance hub, and admissions (FR5)
**And** the page pre-renders with full content in the HTML (FR37)

---

## Epic 3: Treatment Program Pages

Families can explore each level of care — Residential, PHP, IOP — understanding the structure, daily schedule, therapy modalities, and what their teen's experience will look like.

### Story 3.1: Program & Therapy Content Data

As a **developer**,
I want typed content data files for all treatment programs and therapy modalities,
So that program pages are assembled from structured data without hardcoding content in components.

**Acceptance Criteria:**

**Given** the data architecture from Epic 1
**When** program and therapy data files are created
**Then** `src/data/programs.ts` exports typed `ProgramData` for Residential, PHP, IOP, LGBTQ+ Affirming Care, Group Therapy, Crisis Prevention & Intervention (CPI) — each including: description, approach, duration, daily schedule, therapy modalities, target audience, FAQ entries, and related conditions (FR1, FR4)
**And** `src/data/therapies.ts` exports typed `TherapyModality` for all therapy modalities: Individual Therapy, CBT, DBT, Family Therapy, Meditation Therapy, Group Therapy — and all treatment approaches: Medication Treatment, Trauma-Informed Care, Holistic Treatment, Personalized Treatment (FR3)
**And** all exports have explicit type annotations matching interfaces in `types.ts`
**And** cross-references use slug strings (e.g., `relatedConditions: ['anxiety', 'depression']`) (FR5)
**And** build-time content validation passes with zero errors

### Story 3.2: Program Page Template & Residential Page

As a **parent exploring residential treatment**,
I want a detailed program page showing structure, daily schedule, therapies used, and FAQ,
So that I understand what my teen's experience will look like at Silver State.

**Acceptance Criteria:**

**Given** a user navigates to `/programs/residential-treatment`
**When** the Residential page renders
**Then** it displays: program overview, approach description, typical duration, and target population (FR1)
**And** a daily schedule section shows the structured day: therapy, academics, recreation, meals (FR4)
**And** therapy modalities section lists evidence-based treatments with descriptions (FR3)
**And** an FAQ accordion answers common residential treatment questions with FAQPage JSON-LD (FR6, FR35)
**And** internal links connect to related conditions, insurance, and admissions pages (FR5)
**And** `<Helmet>` provides SEO metadata and OG tags (FR36, FR40)
**And** the page uses PageLayout and is fully responsive and accessible
**And** the Residential page establishes the shared program page template used by ALL `/programs/*` pages (Stories 3.3-3.6) — one template, different data

### Story 3.3: PHP & IOP Program Pages

As a **parent exploring outpatient options**,
I want detailed program pages for PHP and IOP showing how they differ from residential,
So that I understand the full continuum of care and which level fits my teen.

**Acceptance Criteria:**

**Given** program data exists for PHP and IOP from Story 3.1
**When** a user navigates to `/programs/php` or `/programs/iop`
**Then** each page renders using the same template pattern as Residential with program-specific content (FR1)
**And** each page includes daily schedule, therapy modalities, and FAQ sections (FR3, FR4, FR6)
**And** internal links connect to related programs, conditions, and admissions (FR5)
**And** each page has unique SEO metadata, JSON-LD (MedicalTherapy), and OG tags (FR35, FR36, FR40)
**And** both pages are fully responsive and accessible

---

## Epic 4: Condition Treatment Pages

Rachel finds treatment information specific to her teen's diagnosis — evidence-based therapies, clinical staff credentials, FAQ answers to her exact questions. This works for all ~27 conditions.

### Story 4.1: Condition Content Data

As a **developer**,
I want a typed content data file covering all ~27 conditions Silver State treats,
So that condition pages are generated from structured data with consistent schemas.

**Acceptance Criteria:**

**Given** the data architecture and `ConditionData` interface from Epic 1
**When** the condition data file is created
**Then** `src/data/conditions.ts` exports typed data for all conditions: Anxiety, Depression, Trauma/PTSD, Suicidal Ideation, OCD, Bipolar Disorder, Autism Spectrum, Oppositional Defiant, Conduct Disorder, DMDD, BPD, Adjustment Disorder, School Refusal/Avoidance, Dual Diagnosis, Substance Abuse, Alcohol Abuse, Opioid Abuse, Benzodiazepine Abuse, Cocaine Abuse, Meth Abuse, Cannabis Abuse, Anorexia Nervosa, Bulimia Nervosa, Binge Eating, Compulsive Eating Disorder, ARFID, OSFED (FR2)
**And** each condition includes: description, symptoms, evidence-based therapies, how Silver State treats it, FAQ entries, related programs, `reviewedBy`, `reviewDate`, and source citations (FR3, FR6, FR15, FR16)
**And** source citations reference trusted authorities: CDC, SAMHSA, NIDA, peer-reviewed journals (FR16)
**And** all exports have explicit type annotations
**And** build-time content validation passes

### Story 4.2: Condition Page Template & Mental Health Conditions

As a **parent searching for their teen's specific diagnosis**,
I want condition pages with clinical depth — evidence-based therapies, staff credentials, and FAQ answers,
So that I know Silver State has specialized expertise for my teen's exact situation.

**Acceptance Criteria:**

**Given** condition data from Story 4.1
**When** a user navigates to any mental health condition page (e.g., `/conditions/anxiety-treatment`)
**Then** the page displays: condition overview, how it manifests in adolescents, evidence-based therapies used at Silver State, and how the program addresses this condition specifically (FR2, FR3)
**And** a named credentialed clinical reviewer is displayed (FR15)
**And** medical claims cite trusted sources (FR16)
**And** an FAQ section with FAQPage JSON-LD answers condition-specific questions (FR6, FR35)
**And** internal links connect to relevant programs, related conditions, insurance, and admissions (FR5)
**And** SEO metadata and OG tags are unique per condition page (FR36, FR40)
**And** MedicalCondition JSON-LD structured data is generated (FR35)
**And** School Refusal/Avoidance condition page is included in the mental health condition set
**And** the template is reusable — all ~13 mental health condition pages use the same component with different data

### Story 4.3: Substance Abuse Condition Pages

As a **parent whose teen is struggling with substance use**,
I want condition pages covering specific substances and dual diagnosis,
So that I find specialized treatment information — not generic "substance abuse" content.

**Acceptance Criteria:**

**Given** condition data from Story 4.1 for substance-related conditions
**When** a user navigates to any substance abuse condition page (e.g., `/conditions/alcohol-abuse-treatment`, `/conditions/dual-diagnosis-treatment`)
**Then** each page renders using the same condition template with substance-specific content (FR2)
**And** content describes how Silver State treats the specific substance issue in adolescents, including detox considerations where applicable (FR3)
**And** dual diagnosis page explains co-occurring mental health + substance use treatment approach
**And** all pages include clinical reviewer, source citations, FAQ, and internal links (FR5, FR6, FR15, FR16)
**And** all ~8 substance-related pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)

### Story 4.4: Eating Disorder Condition Pages

As a **parent whose teen has an eating disorder**,
I want condition pages for specific eating disorders with treatment approach details,
So that I know Silver State treats my teen's specific condition — not just "eating disorders" generically.

**Acceptance Criteria:**

**Given** condition data from Story 4.1 for eating disorder conditions
**When** a user navigates to any eating disorder condition page (e.g., `/conditions/anorexia-nervosa-treatment`)
**Then** each page renders using the same condition template with eating-disorder-specific content (FR2)
**And** content describes Silver State's approach to each eating disorder in adolescents (FR3)
**And** all pages include clinical reviewer, source citations, FAQ, and internal links (FR5, FR6, FR15, FR16)
**And** Compulsive Eating Disorder is included as a distinct condition page
**And** all ~6 eating disorder pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)

---

## Epic 5: Insurance Coverage Pages

David finds his insurance provider page, understands what's typically covered for adolescent residential treatment, and sees a direct phone number to get answers now.

### Story 5.1: Insurance Content Data & Hub Page

As a **parent checking if their insurance is accepted**,
I want a hub page listing all insurance providers Silver State accepts,
So that I immediately know whether my insurance covers treatment here.

**Acceptance Criteria:**

**Given** the data architecture from Epic 1
**When** the insurance hub is built
**Then** `src/data/insurance.ts` exports typed `InsuranceEntry` data for all 9 providers: Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem — each including: provider name, slug, typical coverage description, pre-authorization info, FAQ entries (FR8)
**And** the Insurance hub page at `/insurance` lists all accepted providers with links to individual pages (FR7)
**And** the hub includes a phone CTA with urgency messaging: "Want answers now? Call (725) 525-9897" (FR17)
**And** the hub page has unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)
**And** the page is fully responsive and accessible

### Story 5.2: Individual Insurance Provider Pages

As a **parent with Cigna (or any accepted insurer)**,
I want a dedicated page explaining what my insurance typically covers for adolescent treatment,
So that I understand my financial situation before I call.

**Acceptance Criteria:**

**Given** insurance data from Story 5.1
**When** a user navigates to any insurance provider page (e.g., `/insurance/cigna`)
**Then** the page explains what that provider typically covers for adolescent residential, PHP, and IOP treatment (FR8)
**And** coverage details include deductibles, copays, pre-authorization process — in plain language, not legalese
**And** an FAQ section answers provider-specific insurance questions with FAQPage JSON-LD (FR6, FR35)
**And** a prominent phone CTA says "We verify insurance in under 10 minutes" (FR17)
**And** internal links connect to programs, admissions, and the insurance hub (FR5)
**And** all 9 provider pages have unique SEO metadata and OG tags (FR36, FR40)
**And** the template is reusable — all 9 pages use the same component with different data

---

## Epic 6: About & Clinical Credibility

Dr. Chen verifies Silver State's clinical credentials — staff bios with license numbers, accreditation status, program structure — and confidently refers her client's family.

### Story 6.1: About Content Data & Team Page

As a **clinical referrer or parent evaluating credentials**,
I want a team page with staff profiles showing names, photos, credentials, and specializations,
So that I can verify the clinical team's qualifications before trusting them with a teen.

**Acceptance Criteria:**

**Given** the data architecture from Epic 1
**When** the team page is built
**Then** `src/data/about.ts` exports typed `TeamMember` data for clinical leadership and key staff — each including: name, photo URL, title, credentials, license numbers, specializations, and professional background (FR13)
**And** the Team page at `/about/our-team` displays staff profiles in a visually engaging format
**And** each staff profile generates Physician/Person JSON-LD structured data (FR35)
**And** the page displays Silver State's key differentiators: ratings, staff ratio, LGBTQIA+ affirming, academics, continuum of care (FR14)
**And** clinical reviewer attribution is visible (FR15)
**And** the page has unique SEO metadata and OG tags (FR36, FR40)

### Story 6.2: Facility & Youth Academy Pages

As a **parent wanting to see the environment**,
I want facility and academy detail pages,
So that I understand the physical environment and academic continuity my teen will experience.

**Acceptance Criteria:**

**Given** about data from Story 6.1
**When** a user navigates to `/about/facility` or `/about/youth-academy`
**Then** the Facility page describes the treatment environment, location, and amenities (FR14, FR24)
**And** the Youth Academy page describes Silver State's on-site accredited academics program (FR14)
**And** both pages include images with descriptive alt text (FR28)
**And** internal links connect to programs, admissions, and team page (FR5)
**And** both pages have unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)
**And** both pages are fully responsive and accessible

---

## Epic 7: Location & Service Area Pages

Families searching local terms land on relevant pages with Silver State's facility details and service area information for Las Vegas metro communities.

### Story 7.1: Location Content Data & Hub Page

As a **parent searching for local treatment options**,
I want a service area hub showing all communities Silver State serves,
So that I know this facility serves my area.

**Acceptance Criteria:**

**Given** the data architecture from Epic 1
**When** the location hub is built
**Then** `src/data/locations.ts` exports typed `LocationData` for all 5 service areas: Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County — each including: city name, slug, description, distance/directions from Silver State, local context, related programs
**And** the Locations hub at `/locations` lists all service areas with links and a map context (FR25)
**And** Silver State's address and facility details are prominently displayed (FR24)
**And** the hub has unique SEO metadata, LocalBusiness JSON-LD, and OG tags (FR35, FR36, FR40)

### Story 7.2: City Service Area Pages

As a **parent in Henderson (or any Las Vegas metro city)**,
I want a locally relevant page that connects Silver State to my community,
So that when I search "teen treatment Henderson NV" I find a page speaking to my location.

**Acceptance Criteria:**

**Given** location data from Story 7.1
**When** a user navigates to any city page (e.g., `/locations/henderson`)
**Then** the page provides locally relevant content: proximity to Silver State, local context, service area description (FR23)
**And** Silver State's address and contact information are displayed (FR24)
**And** internal links connect to programs, conditions, insurance, and admissions (FR5)
**And** all 5 city pages have unique SEO metadata, LocalBusiness JSON-LD, and OG tags (FR35, FR36, FR40)
**And** the template is reusable — all 5 pages use the same component with different data

---

## Epic 8: Admissions & Contact

Families who are ready to act see a clear, step-by-step admissions process and can submit a contact inquiry directly through the site — no dead ends, no confusion.

### Story 8.1: Admissions Content Data & Process Page

As a **parent ready to take the next step**,
I want a clear, step-by-step admissions page,
So that I know exactly what to expect when I call and what the process looks like.

**Acceptance Criteria:**

**Given** the data architecture from Epic 1
**When** the admissions page is built
**Then** `src/data/admissions.ts` exports typed admissions process steps and FAQ entries
**And** the Admissions page at `/admissions` displays a clear, numbered step-by-step process (FR19)
**And** each step describes what happens: initial call, insurance verification, assessment, admission (FR19)
**And** an FAQ section answers common admissions questions with FAQPage JSON-LD (FR6, FR35)
**And** a prominent phone CTA with 24/7 messaging drives conversion (FR17)
**And** internal links connect to insurance, programs, and contact page (FR5)
**And** the page has unique SEO metadata and OG tags (FR36, FR40)

### Story 8.2: Contact Page & Form Backend

As a **family member who wants to reach out but isn't ready to call**,
I want a contact page with a simple inquiry form,
So that I can submit my question or request without picking up the phone.

**Acceptance Criteria:**

**Given** the production project with Vercel deployment
**When** the contact page and form backend are built
**Then** the Contact page at `/contact` displays Silver State's contact information, address, and a general inquiry form (FR20)
**And** the form collects: name, email, phone (optional), and message — no health information (FR20)
**And** `api/contact.ts` serverless function validates input, sanitizes data, and forwards via Resend email to the admissions team (NFR8)
**And** form inputs have associated labels, error states are programmatically announced, and required fields are indicated (NFR18)
**And** the form does NOT collect any Protected Health Information (NFR9)
**And** a phone CTA is prominently displayed as the primary conversion path alongside the form (FR17)
**And** the page has unique SEO metadata, JSON-LD, and OG tags (FR35, FR36, FR40)

---

## Epic 9: Analytics, Tracking & Privacy Compliance

Comcreate can track which pages drive calls, families can control their cookie preferences, and the site meets all privacy compliance requirements — the operational intelligence layer.

### Story 9.1: Cookie Consent & GA4 Analytics Setup

As a **site visitor**,
I want to control my cookie preferences before any tracking runs,
So that my privacy is respected and Silver State complies with best practices.

**Acceptance Criteria:**

**Given** a user visits the site for the first time
**When** the cookie consent banner appears
**Then** the CookieConsent component displays a clear opt-in/opt-out choice for non-essential tracking (FR32)
**And** no analytics scripts load until the user opts in (NFR12)
**And** consent preference is stored in localStorage (not a cookie containing PHI) (NFR9)
**And** `utils/analytics.ts` implements Google Consent Mode v2 — signals consent state to GA4
**And** GA4 loads via server-side GTM proxy (`api/gtm.ts`) on informational pages only (Zone 1)
**And** the two-zone tracking model ensures future health form pages (Zone 2) get zero analytics scripts (FR34)
**And** the banner is accessible: keyboard navigable, screen reader compatible, meets contrast ratios

### Story 9.2: CTM Integration & Performance Monitoring

As a **Comcreate team member**,
I want call tracking attribution and Core Web Vitals monitoring,
So that we can measure which pages drive calls and ensure performance targets are met.

**Acceptance Criteria:**

**Given** CTM (Call Tracking Metrics) account is active
**When** CTM integration is implemented
**Then** `utils/ctm.ts` implements dynamic number insertion on all phone CTAs across the site (FR21)
**And** CTM script loads asynchronously without blocking page render or impacting LCP (NFR23)
**And** each page's phone CTA attributes the call source and originating page URL (FR21)
**And** Core Web Vitals (LCP, CLS, INP) are tracked and reportable via GA4 or web-vitals library (FR48)
**And** all phone CTAs across Nav, CtaBand, and page-level CTAs use CTM dynamic insertion

---

## Updates Added 2026-02-23: Missing Pages, Redirects, Blog/CMS

The following additions were identified during SEO migration analysis (see `seo-migration-url-mapping.md`).

---

### Story 1.13: 301 Redirect Map

As a **search engine or user following an old link**,
I want all old URLs to redirect to the correct new pages,
So that no SEO equity is lost and no bookmarks break during the site migration.

**Acceptance Criteria:**

**Given** the site launches with a new URL structure
**When** a user or crawler requests any old URL from the current site
**Then** `vercel.json` contains 301 redirects for all URL changes:

| Old URL | New URL |
|---------|---------|
| `/what-we-treat/` | `/conditions` |
| `/what-we-treat/teen-substance-abuse-treatment/` | `/conditions` |
| `/what-we-treat/teen-eating-disorder-treatment/` | `/conditions` |
| `/what-we-treat/teen-dual-diagnosis/` | `/conditions/dual-diagnosis-treatment` |
| `/what-we-treat/teen-ocd-treatment/` | `/conditions/ocd-treatment` |
| `/what-we-treat/teen-conduct-disorder-cd-treatment/` | `/conditions/conduct-disorder-treatment` |
| `/what-we-treat/teen-trauma/` | `/conditions/trauma-ptsd-treatment` |
| `/what-we-treat/teen-mental-health/` | `/conditions/depression-treatment` |
| `/what-we-treat/teen-bpd-treatment/` | `/conditions/personality-disorders-treatment` |
| `/what-we-treat/teen-eating-disorder-treatment/teen-arfid/` | `/conditions/arfid-treatment` |
| `/what-we-treat/teen-school-refusal/` | `/conditions/school-refusal-avoidance-treatment` |
| `/programs/teen-lgbtqia/` | `/programs/lgbtq-affirming-care` |
| `/programs/teen-group-therapy/` | `/programs/group-therapy` |
| `/programs/teen-individual-therapy/` | `/programs/individual-therapy` |
| `/programs/teen-cognitive-behavioral-therapy/` | `/programs/cognitive-behavioral-therapy` |
| `/programs/teen-dbt/` | `/programs/dialectical-behavior-therapy` |
| `/programs/teen-family-therapy/` | `/programs/family-therapy` |
| `/programs/teen-meditation-therapy/` | `/programs/meditation-therapy` |
| `/programs/teen-medication-treatment/` | `/programs/medication-treatment` |
| `/programs/teen-trauma-informed-care/` | `/programs/trauma-informed-care` |
| `/programs/teen-holistic-treatment/` | `/programs/holistic-treatment` |
| `/programs/teen-personalized-treatment/` | `/programs/personalized-treatment` |
| `/about-us/` | `/about/our-team` |
| `/contact-us/` | `/contact` |
| `/crisis-prevention-intervention-cpi-for-teen-mental-health/` | `/programs/crisis-prevention-intervention` |
| `/defiant-teenager-mental-health-treatment/` | `/blog/defiant-teenager-treatment` |
| `/burnout-middle-high-school-students/` | `/blog/school-burnout` |
| `/synthetic-drug-abuse-when-las-vegas-teen-rehab-becomes-critical/` | `/blog/synthetic-drug-abuse` |
| `/teen-bath-salts-addiction/` | `/blog/bath-salts-addiction` |
| `/mental-health-teen-cliques/` | `/blog/teen-cliques-mental-health` |

**And** old blog URLs redirect to new `/blog/` paths (blog posts migrated to Sanity in Epic 10)
**And** no redirect chains exist (each old URL resolves in a single hop)
**And** redirects are verified by E2E tests that confirm 301 status codes

### Story 1.14: Image Optimization Pipeline & R2 Setup

As a **developer**,
I want a documented image optimization pipeline and Cloudflare R2 bucket configured,
So that all images are served in next-gen formats at appropriate sizes with zero egress fees.

**Acceptance Criteria:**

**Given** the production project needs optimized images
**When** the image pipeline is set up
**Then** a documented process exists for optimizing images: source → WebP/AVIF conversion → responsive sizing (mobile/desktop) → upload to R2 (NFR6)
**And** Cloudflare R2 bucket is created and accessible via `VITE_R2_BASE_URL` environment variable
**And** R2 images are served via Cloudflare CDN with appropriate cache headers
**And** data files use `import.meta.env.VITE_R2_BASE_URL || '/assets'` for image URLs with local dev fallback
**And** total initial page weight stays under 1.5MB including above-fold images (NFR4)
**And** `<picture>` elements with `srcset` serve appropriate sizes per viewport
**And** hero/LCP images use `fetchpriority="high"`, below-fold images use `loading="lazy"`

---

### Story 3.4: LGBTQ+ Affirming Care & Group Therapy Program Pages

As a **parent searching for LGBTQ-affirming or group therapy programs**,
I want dedicated program pages for these specialties,
So that I find treatment information tailored to my teen's needs — not a generic program page.

**Acceptance Criteria:**

**Given** program data is extended in `src/data/programs.ts` (Story 3.1)
**When** a user navigates to `/programs/lgbtq-affirming-care`
**Then** the page describes Silver State's LGBTQ+ affirming care designation, approach, staff training, and what makes the environment safe and inclusive (FR14)
**And** the page is a full program page with therapy modalities, FAQ (FAQPage JSON-LD), and internal links (FR3, FR5, FR6, FR35)
**And** the page has unique SEO metadata targeting "lgbtq adolescent residential treatment" (1,200 vol, currently ranking #3) (FR36, FR40)
**And** the page protects the site's #1 organic traffic source (140 visits/month)

**When** a user navigates to `/programs/group-therapy`
**Then** the page describes Silver State's group therapy approach for adolescents, types of groups offered, how groups complement individual therapy (FR3)
**And** the page includes FAQ, internal links to programs and conditions, and unique SEO metadata (FR5, FR6, FR35, FR36, FR40)
**And** both pages use the program page template pattern from Story 3.2
**And** both pages are fully responsive and accessible

**Priority Note:** The LGBTQ+ affirming care page is the site's #1 traffic driver. This story should be implemented immediately after the program template (Story 3.2) is approved.

### Story 3.5: Therapy Modality Pages

As a **parent researching specific therapies**,
I want dedicated pages for each therapy modality Silver State offers,
So that I understand the specific treatment approaches and can evaluate them for my teen.

**Acceptance Criteria:**

**Given** therapy data exists in `src/data/therapies.ts` (Story 3.1)
**When** therapy modality pages are built
**Then** each of the following therapies has a dedicated routable page:

| Therapy | URL |
|---------|-----|
| Individual Therapy | `/programs/individual-therapy` |
| Cognitive Behavioral Therapy (CBT) | `/programs/cognitive-behavioral-therapy` |
| Dialectical Behavior Therapy (DBT) | `/programs/dialectical-behavior-therapy` |
| Family Therapy | `/programs/family-therapy` |
| Meditation Therapy | `/programs/meditation-therapy` |

**And** each page describes the therapy, how it works with adolescents, what conditions it treats, and how Silver State applies it (FR3)
**And** each page includes FAQ section with FAQPage JSON-LD (FR6, FR35)
**And** internal links connect to related conditions, programs, and admissions (FR5)
**And** each page has unique SEO metadata and OG tags targeting therapy-specific keywords (FR36, FR40)
**And** MedicalTherapy JSON-LD structured data is generated per page (FR35)
**And** all pages use a shared therapy page template — reusable across all 5 pages
**And** all pages are fully responsive and accessible

**Note:** Group Therapy is covered in Story 3.4. These 5 + Group Therapy = 6 total therapy modality pages.

### Story 3.6: Treatment Approach Pages

As a **parent exploring Silver State's treatment philosophy**,
I want dedicated pages for each specialized treatment approach,
So that I understand the breadth and depth of how Silver State treats adolescents.

**Acceptance Criteria:**

**Given** program/approach data is extended in `src/data/programs.ts`
**When** treatment approach pages are built
**Then** each of the following approaches has a dedicated routable page:

| Approach | URL |
|----------|-----|
| Medication Treatment | `/programs/medication-treatment` |
| Trauma-Informed Care | `/programs/trauma-informed-care` |
| Holistic Treatment | `/programs/holistic-treatment` |
| Personalized Treatment Plan | `/programs/personalized-treatment` |
| Crisis Prevention & Intervention | `/programs/crisis-prevention-intervention` |

**And** each page describes the approach, how it integrates with Silver State's program levels, and what families should expect (FR1, FR3)
**And** each page includes FAQ section with FAQPage JSON-LD (FR6, FR35)
**And** internal links connect to related programs, conditions, and admissions (FR5)
**And** each page has unique SEO metadata and OG tags (FR36, FR40)
**And** MedicalTherapy JSON-LD structured data is generated per page (FR35)
**And** all pages are fully responsive and accessible
**And** all pages use a shared treatment approach template or the therapy page template from Story 3.5

**Note:** ONE shared template is used for all `/programs/*` pages across Stories 3.2-3.6. The template accepts program/therapy/approach data via props and renders the same layout pattern.

### Story 3.7: Programs Hub Page

As a **parent exploring what Silver State offers**,
I want a hub page listing all programs, therapies, and treatment approaches,
So that I can see the full scope of services and navigate to the right page for my teen.

**Acceptance Criteria:**

**Given** program and therapy data from Stories 3.1 and 3.5
**When** a user navigates to `/programs`
**Then** the page displays all programs organized by category: Levels of Care (Residential, PHP, IOP), Therapy Modalities (Individual, CBT, DBT, Family, Meditation, Group), Treatment Approaches (Medication, Trauma-Informed, Holistic, Personalized, CPI), and LGBTQ+ Affirming Care
**And** each item links to its dedicated program page (FR5)
**And** a phone CTA is prominently displayed (FR17)
**And** the page has unique SEO metadata via `<Helmet>` and CollectionPage JSON-LD (FR35, FR36, FR40)
**And** the page is fully responsive and accessible

---

### Story 4.5: Conditions Hub Page

As a **parent looking for help with their teen's specific condition**,
I want a hub page listing all conditions Silver State treats, organized by category,
So that I can quickly find my teen's diagnosis and learn about treatment options.

**Acceptance Criteria:**

**Given** condition data from Story 4.1
**When** a user navigates to `/conditions`
**Then** the page displays all ~27 conditions organized by category: Mental Health, Substance Abuse, Eating Disorders
**And** each condition links to its dedicated treatment page (FR5)
**And** a phone CTA is prominently displayed (FR17)
**And** the page has unique SEO metadata via `<Helmet>` and CollectionPage JSON-LD (FR35, FR36, FR40)
**And** the page is fully responsive and accessible

---

## Epic 10: Blog & Resources (Sanity CMS)

Families discover Silver State through blog content addressing their specific concerns — crisis prevention, defiant teens, school burnout. Comcreate can publish ongoing content without developer involvement. Existing blog posts driving ~87 visits/month are preserved.

**FRs covered:** FR5, FR35, FR36, FR40, FR44 (extends data-driven architecture to CMS-managed content)

### Story 10.1: Sanity CMS Setup & Blog Schema

As a **developer**,
I want Sanity CMS configured with a blog post schema,
So that the content team can create and manage blog/resource articles independently.

**Acceptance Criteria:**

**Given** the decision to use Sanity CMS for blog content
**When** Sanity is set up
**Then** a Sanity project is created and linked to the Silverstate codebase
**And** `sanity/` directory contains Sanity Studio configuration and schema definitions
**And** blog post schema includes: `title`, `slug`, `publishDate`, `author`, `heroImage`, `excerpt`, `body` (Portable Text), `categories`, `relatedConditions` (slug references), `relatedPrograms` (slug references), `seoTitle`, `seoDescription`, `reviewedBy`, `reviewDate`
**And** Sanity Studio is accessible at `/studio` (or a separate admin URL)
**And** `@sanity/client` is configured in `src/utils/sanity.ts` for fetching blog posts
**And** environment variables `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` are documented in `.env.example`
**And** Sanity API calls are made at build time or client-side with CDN caching — not blocking page render

### Story 10.2: Blog Index & Post Template Pages

As a **parent browsing for information**,
I want a blog index page and individual blog post pages,
So that I can discover and read articles relevant to my teen's situation.

**Acceptance Criteria:**

**Given** Sanity CMS is configured (Story 10.1)
**When** the blog section is built
**Then** `/blog` renders a paginated index of all published blog posts with title, excerpt, date, and category filters
**And** `/blog/:slug` renders individual blog posts with full Portable Text content, author attribution, and related content links (FR5)
**And** blog post pages display clinical reviewer attribution when `reviewedBy` is set (FR15)
**And** blog post pages include Article JSON-LD structured data (FR35)
**And** each blog post has unique SEO metadata from Sanity fields (FR36, FR40)
**And** blog pages use PageLayout for consistent site shell
**And** blog pages are fully responsive and accessible
**And** `src/pages/blog/Index.tsx` and `src/pages/blog/Post.tsx` follow project component conventions
**And** blog post URLs are discovered from Sanity at build time for vite-ssg pre-rendering

### Story 10.3: Migrate Existing Blog Posts to Sanity

As a **search engine indexing the new site**,
I want all existing blog content recreated in Sanity at matching URLs,
So that ~87 visits/month of organic traffic is preserved through the migration.

**Acceptance Criteria:**

**Given** blog post template exists (Story 10.2)
**When** existing blog content is migrated
**Then** the following posts are created in Sanity with content matching or improving on the originals:

| Original URL | New URL | Traffic/mo |
|-------------|---------|-----------|
| `/defiant-teenager-mental-health-treatment/` | `/blog/defiant-teenager-treatment` | 16 |
| `/burnout-middle-high-school-students/` | `/blog/school-burnout` | 11 |
| `/synthetic-drug-abuse-when-las-vegas-teen-rehab-becomes-critical/` | `/blog/synthetic-drug-abuse` | 10 |
| `/teen-bath-salts-addiction/` | `/blog/bath-salts-addiction` | 4 |
| `/mental-health-teen-cliques/` | `/blog/teen-cliques-mental-health` | 3 |

**And** each migrated post preserves the core content and keywords the original ranked for
**And** 301 redirects from old URLs to new `/blog/` paths are verified (Story 1.13)
**And** all migrated posts pass SEO metadata and JSON-LD validation

### Story 10.4: Blog Navigation & Site Integration

As a **family member on any page of the site**,
I want to discover blog content through navigation and internal links,
So that I find relevant articles as I explore Silver State's site.

**Acceptance Criteria:**

**Given** the blog section is live (Stories 10.1-10.3)
**When** blog navigation is integrated
**Then** the main Nav includes a "Resources" or "Blog" link to `/blog`
**And** the Footer includes a link to the blog section
**And** condition pages display related blog posts when `relatedConditions` matches (FR5)
**And** program pages display related blog posts when `relatedPrograms` matches (FR5)
**And** the blog index page is included in `sitemap.xml` generation (FR38)
**And** individual blog post URLs are included in the sitemap
**And** `data/common.ts` nav links are updated to include the blog section

---

## Operational Items (Not Stories — Tracked Separately)

The following NFRs are operational/administrative tasks, not implementation stories:

- **NFR10 (BAAs):** Business Associate Agreements must be executed with all vendors processing user data (Vercel, Cloudflare, Resend, Sanity, Google Analytics). Track as a compliance checklist item.
- **NFR27 (Google Search Console):** GSC property verified and receiving crawl/indexing data within 48 hours of launch. Track as a launch checklist item.
- **NFR31 (LegitScript):** Annual certification renewal for Google Ads eligibility. Track as an ongoing operational item.
