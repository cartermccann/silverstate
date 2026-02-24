# Story 7.2: City Service Area Pages

Status: ready-for-dev

## Story

As a **parent in Henderson (or any Las Vegas metro city)**,
I want a locally relevant page that connects Silver State to my community,
So that when I search "teen treatment Henderson NV" I find a page speaking to my location.

**Dependencies:** Story 7.1 (`data/locations.ts` with `locations` array and all `LocationData` entries), Story 1.7 (PageLayout), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5, FR23, FR24, FR35, FR36, FR40

## Acceptance Criteria

1. **Given** location data from Story 7.1, **When** a user navigates to any city page (e.g., `/locations/henderson`), **Then** the page provides locally relevant content: proximity to Silver State, local context, service area description (FR23)
2. **And** Silver State's address and contact information are displayed (FR24)
3. **And** internal links connect to programs, conditions, insurance, and admissions (FR5)
4. **And** all 5 city pages have unique SEO metadata, LocalBusiness JSON-LD, and OG tags (FR35, FR36, FR40)
5. **And** the template is reusable — all 5 pages use the same component with different data
6. **And** all pages are fully responsive and accessible (FR26-30, FR41-43)

## Tasks / Subtasks

- [ ] **Task 1: Create a reusable CityPage template component** (AC: #5)
  - [ ] 1.1: Create `src/pages/locations/CityPage.tsx` — a shared internal component (not a route page itself) that accepts `LocationData` as a prop and renders the full city service area page layout
  - [ ] 1.2: Define the props interface:
    ```typescript
    interface CityPageProps {
      location: LocationData
    }
    ```
  - [ ] 1.3: `export default function CityPage({ location }: CityPageProps)` — this is the template that all 5 city page files will use
  - [ ] 1.4: The CityPage template renders:
    - **Header section:** `<h1>` with city-specific title (e.g., "Adolescent Treatment Near Henderson, NV" or "Teen Treatment in {location.name}"). Subheading with `location.serviceAreaDescription`
    - **Proximity section:** `location.distanceFromFacility` and `location.directions` — how to get to Silver State from this area. Display Silver State's full address (`site.address`) and phone (`site.phone`/`site.phoneTel`) as a click-to-call link (FR24)
    - **Local context section:** `location.localContext` — why Silver State serves this community, local relevance
    - **Programs available section:** Map `location.relatedPrograms` slugs to program names and render with `<Link>` to each program page (e.g., `/programs/residential-treatment`, `/programs/php`, `/programs/iop`) (FR5)
    - **Conditions treated section:** Map `location.relatedConditions` slugs to condition names and render with `<Link>` to each condition page (e.g., `/conditions/anxiety-treatment`) (FR5)
    - **FAQ section (optional):** If `location.faqEntries` exists and has entries, render an FAQ accordion using the `FaqItem` component with FAQPage JSON-LD
    - **Internal links section (FR5):** Links to insurance hub (`/insurance`), admissions (`/admissions`), team page (`/about/our-team`), locations hub (`/locations`)
    - **Phone CTA:** "Ready to learn more? Call Silver State at (725) 525-9897" using `site.phoneTel`
    - **Image (optional):** If `location.image` exists, render with descriptive `alt` text and `loading="lazy"`
  - [ ] 1.5: Import `site` from `../../data/common` inside the template
  - [ ] 1.6: Use semantic `<address>` element for the Silver State address display
  - [ ] 1.7: All text content comes from the `location` prop — the template has zero hardcoded city-specific content

- [ ] **Task 2: Create all 5 city page files** (AC: #1, #5)
  - [ ] 2.1: Create `src/pages/locations/LasVegas.tsx`:
    ```typescript
    import { getLocationBySlug } from '../../data/locations'
    import CityPage from './CityPage'

    const location = getLocationBySlug('las-vegas')
    if (!location) throw new Error('Location data not found: las-vegas')

    export default function LasVegas() {
      return <CityPage location={location} />
    }
    ```
  - [ ] 2.2: Create `src/pages/locations/Henderson.tsx` — same pattern with `getLocationBySlug('henderson')`
  - [ ] 2.3: Create `src/pages/locations/NorthLasVegas.tsx` — same pattern with `getLocationBySlug('north-las-vegas')`
  - [ ] 2.4: Create `src/pages/locations/Summerlin.tsx` — same pattern with `getLocationBySlug('summerlin')`
  - [ ] 2.5: Create `src/pages/locations/ClarkCounty.tsx` — same pattern with `getLocationBySlug('clark-county')`
  - [ ] 2.6: Each page file is minimal — it finds its data from the `locations` array via the `getLocationBySlug` helper and passes it to `CityPage`. The page file owns the route `meta` export for SEO; the template owns the rendering

> **Pattern Consistency:** Add a `getLocationBySlug(slug: string): LocationData | undefined` helper function to `data/locations.ts`, consistent with `getInsuranceBySlug()` in `data/insurance.ts`. Wrapper files should use this helper instead of inline `.find()`. Example:
> ```ts
> export function getLocationBySlug(slug: string): LocationData | undefined {
>   return locations.find(l => l.slug === slug)
> }
> ```
> Update wrapper file examples to use: `const location = getLocationBySlug('las-vegas')!`

- [ ] **Task 3: Implement LocalBusiness JSON-LD per city page** (AC: #4)
  - [ ] 3.1: Each city page generates a `LocalBusiness` JSON-LD block scoped to that service area:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Silver State Adolescent Treatment Center",
      "description": "Adolescent mental health treatment serving families in Henderson, NV...",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8225 W Robindale Rd",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89113",
        "addressCountry": "US"
      },
      "telephone": "(725) 525-9897",
      "url": "https://www.silverstatetreatment.com/locations/henderson",
      "areaServed": {
        "@type": "City",
        "name": "Henderson"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "34"
      }
    }
    ```
  - [ ] 3.2: Use `utils/schema.ts` generator from Story 1.8 — pass city-specific `areaServed` and `url`. If the generator doesn't support per-city customization, create the JSON-LD inline with `// TODO: extend utils/schema.ts`
  - [ ] 3.3: For Clark County, use `@type: "AdministrativeArea"` instead of `"City"` in `areaServed`
  - [ ] 3.4: Inject JSON-LD via the route `meta`/`handle` export in each city page file (not in the template)

- [ ] **Task 4: SEO metadata and OG tags per city page** (AC: #4)
  - [ ] 4.1: Each city page file exports route `meta` using `location.metaTitle` and `location.metaDescription` from the data:
    - LasVegas: Title `"Adolescent Treatment in Las Vegas, NV | Silver State Treatment Center"`, Canonical `https://www.silverstatetreatment.com/locations/las-vegas`
    - Henderson: Title `"Teen Treatment Near Henderson, NV | Silver State Adolescent Treatment"`, Canonical `https://www.silverstatetreatment.com/locations/henderson`
    - NorthLasVegas: Title `"Teen Treatment Near North Las Vegas, NV | Silver State Treatment"`, Canonical `https://www.silverstatetreatment.com/locations/north-las-vegas`
    - Summerlin: Title `"Adolescent Treatment Near Summerlin, NV | Silver State Treatment"`, Canonical `https://www.silverstatetreatment.com/locations/summerlin`
    - ClarkCounty: Title `"Teen Treatment in Clark County, NV | Silver State Treatment Center"`, Canonical `https://www.silverstatetreatment.com/locations/clark-county`
  - [ ] 4.2: OG image can be shared across all city pages (Silver State facility photo) or city-specific if available
  - [ ] 4.3: Use `utils/meta.ts` helper — same pattern as all other page types

- [ ] **Task 5: Internal links with slug-to-name mapping** (AC: #3)
  - [ ] 5.1: The CityPage template needs to map program slugs to display names and URLs. Create a local mapping constant or import from data:
    ```typescript
    const programLinks: Record<string, { name: string; path: string }> = {
      'residential': { name: 'Residential Treatment', path: '/programs/residential-treatment' },
      'php': { name: 'Partial Hospitalization (PHP)', path: '/programs/php' },
      'iop': { name: 'Intensive Outpatient (IOP)', path: '/programs/iop' },
    }
    ```
  - [ ] 5.2: Similarly, map condition slugs to display names and URLs. Since there are ~25 conditions, import condition data from `data/conditions.ts` (Story 4.1) or create a slim lookup. If Story 4.1 is not yet complete, use a local mapping for the most common conditions with a `// TODO: import from data/conditions.ts` comment
  - [ ] 5.3: Render program links as `<Link to={programLinks[slug].path}>` elements
  - [ ] 5.4: Render condition links similarly
  - [ ] 5.5: Include static internal links to: insurance hub (`/insurance`), admissions (`/admissions`), team (`/about/our-team`), locations hub (`/locations`)

- [ ] **Task 6: Responsive layout and accessibility** (AC: #6)
  - [ ] 6.1: Single column layout on mobile (< 900px), content sections stacked vertically
  - [ ] 6.2: On desktop (>= 900px), address/proximity section can sit in a sidebar or callout card alongside the main content
  - [ ] 6.3: Heading hierarchy per page: `<h1>` for city-specific page title, `<h2>` for section headings (Proximity, Programs, Conditions Treated, FAQ)
  - [ ] 6.4: All links must be keyboard accessible with visible `:focus-visible` indicators
  - [ ] 6.5: Touch targets >= 44x44px on mobile (FR42) — especially program and condition link lists
  - [ ] 6.6: Program and condition links should have sufficient padding for touch targets — use `min-height: 44px; display: flex; align-items: center; padding: 8px 16px`
  - [ ] 6.7: Use `var(--body)` for body text, `var(--text)` for headings — never `var(--muted)` for essential text below 18px
  - [ ] 6.8: Verify no horizontal scrolling at 320px viewport (FR43)
  - [ ] 6.9: Phone CTA uses `<a href="tel:...">` with `aria-label="Call Silver State at (725) 525-9897"`

- [ ] **Task 7: Add routes for all 5 city pages** (AC: all)
  - [ ] 7.1: Verify or add route entries in `src/routes.ts`:
    - `/locations/las-vegas` → `pages/locations/LasVegas.tsx`
    - `/locations/henderson` → `pages/locations/Henderson.tsx`
    - `/locations/north-las-vegas` → `pages/locations/NorthLasVegas.tsx`
    - `/locations/summerlin` → `pages/locations/Summerlin.tsx`
    - `/locations/clark-county` → `pages/locations/ClarkCounty.tsx`
  - [ ] 7.2: All routes use PageLayout as their layout wrapper

- [ ] **Task 8: Verify compilation and rendering** (AC: all)
  - [ ] 8.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 8.2: Run `npm run dev` — all 5 city pages render at their respective URLs
  - [ ] 8.3: Verify each page displays the correct city-specific content (not the same content on all pages)
  - [ ] 8.4: Verify responsive layout at 320px, 768px, and 1024px+ for at least 2 city pages
  - [ ] 8.5: Verify JSON-LD is present and city-specific in page source for each page
  - [ ] 8.6: Verify internal links navigate correctly
  - [ ] 8.7: Verify keyboard navigation through all interactive elements
  - [ ] 8.8: Verify Silver State address and phone number display correctly
  - [ ] 8.9: Verify the locations hub page (`/locations`) links correctly to all 5 city pages

## Dev Notes

### Critical Context

These 5 city pages are the core of Silver State's local SEO strategy. Each page targets local search intent like "teen treatment Henderson NV" or "adolescent therapy North Las Vegas". The pages must feel locally relevant — not like generic content with a city name swapped in.

**Key architectural pattern:** The reusable template approach (CityPage.tsx) ensures structural consistency across all 5 pages while each page file (LasVegas.tsx, Henderson.tsx, etc.) owns its route metadata and JSON-LD. This mirrors the pattern used by insurance provider pages (Story 5.2) and condition pages (Story 4.2).

**CityPage.tsx is a shared component, not a route page.** The individual city files (LasVegas.tsx, etc.) are the route pages. CityPage.tsx lives in `pages/locations/` alongside the city files for co-location convenience — it's only used by pages in this directory.

**Content differentiation between pages:**
Each city page must feel distinct, not templated. The `LocationData` entries from Story 7.1 provide city-specific:
- `description` — unique overview of the city/area
- `distanceFromFacility` — unique distance and travel context
- `directions` — unique driving directions
- `localContext` — unique community context
- `serviceAreaDescription` — unique description of Silver State's service to this area
- `relatedConditions` — tailored to the community's most relevant conditions
- `metaTitle` / `metaDescription` — unique SEO metadata per page

**Silver State physical address (constant across all pages):**
8225 W Robindale Rd, Las Vegas, NV 89113 — this is always the same. The city pages contextualize "how to get here from [city]", not a different address per city.

### Architecture Compliance

- **Component exports:** `export default function LasVegas()`, `export default function Henderson()`, etc. — named functions, default exports
- **Template component:** `export default function CityPage({ location }: CityPageProps)` — accepts data via props, has zero knowledge of which city it's rendering
- **File locations:** `src/pages/locations/LasVegas.tsx`, `Henderson.tsx`, `NorthLasVegas.tsx`, `Summerlin.tsx`, `ClarkCounty.tsx`, `CityPage.tsx`
- **Data imports:** Import from `../../data/locations` — never hardcode city content
- **Styling:** CSS tokens + inline styles only. No CSS modules
- **Phone/address:** Use `site.phone`, `site.phoneTel`, `site.address` from `data/common.ts`
- **Internal links:** Use React Router `<Link>` for all internal navigation
- **Cross-references:** Resolve slugs from `relatedPrograms` and `relatedConditions` to display names and paths
- **JSON-LD:** Each city page has its own LocalBusiness JSON-LD with city-scoped `areaServed`
- **No barrel files:** No `index.ts` in `src/pages/locations/` (the `Index.tsx` hub page is a page file, not a barrel)
- **Mobile breakpoint:** 900px

### Dependencies

**Depends on (must be complete):**
- Story 7.1: `data/locations.ts` with `locations` array containing all 5 `LocationData` entries
- Story 1.1: Production project structure
- Story 1.2: `types.ts` with `LocationData` and `FaqEntry` interfaces, `data/common.ts` with `site` object
- Story 1.7: PageLayout wrapper
- Story 1.8: `utils/meta.ts`, `utils/schema.ts`, route configuration

**Soft dependencies (enhance but don't block):**
- Story 3.1: `data/programs.ts` — for resolving program slugs to names. If not available, use a local mapping
- Story 4.1: `data/conditions.ts` — for resolving condition slugs to names. If not available, use a local mapping

**Produces for (later stories depend on):**
- No direct downstream dependencies — these are leaf pages. However:
  - The locations hub (Story 7.1) links to these pages
  - Homepage (Story 2.2) may feature service area links

### Anti-Patterns to AVOID

1. **DO NOT** hardcode city-specific content in the CityPage template — all content comes from the `location` prop
2. **DO NOT** create one massive page file with if/else for each city — use separate slim page files that delegate to CityPage
3. **DO NOT** create CSS module files — use inline styles + CSS tokens
4. **DO NOT** use arrow function exports — must be named function default exports
5. **DO NOT** create a barrel file in `src/pages/locations/`
6. **DO NOT** hardcode the phone number or address — use `site.*` from `data/common.ts`
7. **DO NOT** use `var(--muted)` for essential text below 18px
8. **DO NOT** skip the LocalBusiness JSON-LD on any city page — each needs its own schema
9. **DO NOT** use the same `metaTitle` or `metaDescription` across multiple city pages — each must be unique for SEO
10. **DO NOT** use `<div onClick>` for any interactive elements
11. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand directly — PageLayout handles these
12. **DO NOT** put route `meta` exports in CityPage.tsx — each city page file (LasVegas.tsx, etc.) owns its own route metadata
13. **DO NOT** use the non-null assertion (`!`) without a fallback — use a guard clause that throws a descriptive error if the location is not found (e.g., `if (!location) throw new Error('Location data not found: las-vegas')`). This satisfies type safety while providing a clear error message during development
14. **DO NOT** make all 5 pages feel identical — the data should provide enough differentiation that each page reads as locally relevant

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, cross-references via slugs
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/locations/{slug}` URL pattern
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure] — `pages/locations/*.tsx`, `data/locations.ts`
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] — keyboard nav, touch targets, semantic HTML, ARIA
- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.2] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] — internal links on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR23] — location-specific pages for Las Vegas metro
- [Source: _bmad-output/planning-artifacts/prd.md#FR24] — address, service area, facility details
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data (LocalBusiness)
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] — Open Graph tags

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
