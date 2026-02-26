# Story 7.1: Location Content Data & Hub Page

Status: done

## Story

As a **parent searching for local treatment options**,
I want a service area hub showing all communities Silver State serves,
So that I know this facility serves my area.

**Dependencies:** Story 1.1 (production project), Story 1.2 (shared data types including `LocationData` interface in `types.ts`, `data/common.ts` with `site` object), Story 1.7 (PageLayout), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR5, FR23, FR24, FR25, FR35, FR36, FR40

> **FR5 (internal linking):** Hub page links to all 5 city service area pages and cross-links to programs, conditions.
>
> **FR23 (location-specific pages):** Data structure supports standalone city pages built in Story 7.2.

## Acceptance Criteria

1. **Given** the data architecture from Epic 1, **When** the location data file is created, **Then** `src/data/locations.ts` exports typed `LocationData` for all 5 service areas: Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County — each including: city name, slug, description, distance/directions from Silver State, local context, and related programs
2. **And** the Locations hub at `/locations` lists all service areas with links and a map context (FR25)
3. **And** Silver State's address and facility details are prominently displayed (FR24)
4. **And** the hub has unique SEO metadata, LocalBusiness JSON-LD, and OG tags (FR35, FR36, FR40)
5. **And** all exports in `locations.ts` have explicit type annotations
6. **And** `npx tsc --noEmit` passes with zero errors

## Tasks / Subtasks

- [x] **Task 1: Define/verify LocationData interface in types.ts** (AC: #1, #5)
  - [x] 1.1: Verify Story 1.2 has created the `LocationData` interface in `src/types.ts`. If not yet present, add it with these fields:
    - `name: string` — display name (e.g., "Las Vegas")
    - `slug: string` — URL slug (e.g., `'las-vegas'`)
    - `description: string` — city/area overview paragraph
    - `distanceFromFacility: string` — e.g., "12 minutes from Silver State" or "Located in the same city"
    - `directions: string` — brief driving directions from the area to Silver State
    - `localContext: string` — paragraph about the community and why Silver State serves it
    - `serviceAreaDescription: string` — what Silver State provides to families in this area
    - `relatedPrograms: string[]` — slug-based cross-references (e.g., `['residential', 'php', 'iop']`)
    - `relatedConditions: string[]` — top conditions relevant to the area (e.g., `['anxiety', 'depression', 'substance-abuse']`)
    - `metaTitle: string` — SEO title for the city page
    - `metaDescription: string` — SEO description for the city page
    - `faqEntries?: FaqEntry[]` — optional FAQ specific to the location
    - `image?: { src: string; alt: string }` — optional area-relevant image
  - [x] 1.2: Ensure `FaqEntry` is imported/available from the same `types.ts` file

- [x] **Task 2: Create src/data/locations.ts with LocationData for all 5 service areas** (AC: #1, #5)
  - [x] 2.1: Create `src/data/locations.ts` with import: `import type { LocationData } from '../types'`
  - [x] 2.2: Export `locations` array with typed `LocationData[]` annotation containing all 5 service areas:

    **Las Vegas:**
    - slug: `'las-vegas'`
    - Silver State IS located in Las Vegas (8225 W Robindale Rd, Las Vegas, NV 89113)
    - Distance: "Silver State is located in Las Vegas, NV"
    - Local context: Las Vegas metro area, Clark County seat, families searching "teen treatment Las Vegas" or "adolescent therapy Las Vegas NV"
    - Related programs: all three (residential, php, iop)
    - Related conditions: anxiety, depression, substance-abuse, dual-diagnosis, trauma-ptsd

    **Henderson:**
    - slug: `'henderson'`
    - Distance: approximately 20-25 minutes from Silver State (depending on traffic)
    - Local context: Second-largest city in Nevada, family-oriented community south of Las Vegas, growing population of families with teens
    - Related programs: all three
    - Related conditions: anxiety, depression, substance-abuse

    **North Las Vegas:**
    - slug: `'north-las-vegas'`
    - Distance: approximately 25-30 minutes from Silver State
    - Local context: Northern Las Vegas metro area, growing community, families seeking accessible adolescent treatment
    - Related programs: all three
    - Related conditions: anxiety, depression, substance-abuse, conduct-disorder

    **Summerlin:**
    - slug: `'summerlin'`
    - Distance: approximately 15-20 minutes from Silver State
    - Local context: Master-planned community in western Las Vegas, affluent family-oriented area
    - Related programs: all three
    - Related conditions: anxiety, depression, eating-disorders, ocd

    **Clark County:**
    - slug: `'clark-county'`
    - Distance: "Silver State serves all of Clark County, NV"
    - Local context: Encompasses the entire Las Vegas metropolitan area, including unincorporated communities, rural areas, and all incorporated cities
    - Related programs: all three
    - Related conditions: anxiety, depression, substance-abuse, dual-diagnosis, trauma-ptsd

  - [x] 2.3: Each location entry must include `metaTitle` and `metaDescription` optimized for local SEO. Examples:
    - Las Vegas: `"Adolescent Treatment in Las Vegas, NV | Silver State Treatment Center"`
    - Henderson: `"Teen Treatment Near Henderson, NV | Silver State Adolescent Treatment"`
  - [x] 2.4: Export `locationHubContent` object for the hub page:
    ```typescript
    export const locationHubContent: { title: string; description: string; metaTitle: string; metaDescription: string } = {
      title: 'Areas We Serve',
      description: 'Silver State Adolescent Treatment Center serves families throughout the Las Vegas metropolitan area and Clark County...',
      metaTitle: 'Service Areas | Silver State Adolescent Treatment Center',
      metaDescription: 'Silver State serves families in Las Vegas, Henderson, North Las Vegas, Summerlin, and Clark County. Adolescent residential, PHP, and IOP treatment for teens 11-17.',
    }
    ```
  - [x] 2.5: Use `import.meta.env.VITE_R2_BASE_URL || '/assets'` for any image paths
  - [x] 2.6: Add re-export to `src/data/index.ts`: `export * from './locations'`

- [x] **Task 3: Create the Locations hub page at src/pages/locations/Index.tsx** (AC: #2, #3, #4)
  - [x] 3.1: Create `src/pages/locations/Index.tsx` with `export default function LocationsHub()` (note: file is `Index.tsx` per architecture, but the function name should be descriptive — `LocationsHub` not `Index`)
  - [x] 3.2: Import `locations`, `locationHubContent` from `../../data/locations`
  - [x] 3.3: Import `site` from `../../data/common`
  - [x] 3.4: Render a page header section with `<h1>` containing the hub title (e.g., "Areas We Serve" from `locationHubContent.title`) and introductory description
  - [x] 3.5: Render Silver State's address and facility details prominently (FR24):
    - Full address: `site.address` ("8225 W Robindale Rd, Las Vegas, NV 89113")
    - Phone: `site.phone` / `site.phoneTel` as a click-to-call link
    - Ages served: "Adolescents ages 11-17"
    - Programs available: "Residential Treatment, PHP, IOP"
    - This section should be visually distinct — use a card or callout box with `var(--cream)` or `var(--sage-soft)` background
  - [x] 3.6: Render the service area grid/list — map over `locations` array to create a card for each area:
    - City name as heading (`<h2>`)
    - Brief description or distance from Silver State
    - `<Link to={`/locations/${location.slug}`}>` for navigation to the individual city page
    - Each card should be visually engaging — use `.bento-card` or `.hover-lift` pattern
  - [x] 3.7: Optionally include a map context section — can be a static map image or a textual description of the Las Vegas metro area. If using an image, provide descriptive `alt` text: "Map of Silver State's service area covering Las Vegas, Henderson, North Las Vegas, Summerlin, and Clark County"
  - [x] 3.8: Include a phone CTA within page content: "Not sure if we serve your area? Call us at (725) 525-9897" using `site.phoneTel`
  - [x] 3.9: Internal links to related content: programs hub or residential page, admissions, insurance hub

- [x] **Task 4: Implement LocalBusiness JSON-LD for the hub page** (AC: #4)
  - [x] 4.1: Generate `LocalBusiness` JSON-LD for the hub page:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Silver State Adolescent Treatment Center",
      "description": "Adolescent mental health and substance abuse treatment center serving the Las Vegas metropolitan area.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8225 W Robindale Rd",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89113",
        "addressCountry": "US"
      },
      "telephone": "(725) 525-9897",
      "url": "https://www.silverstatetreatment.com",
      "areaServed": [
        { "@type": "City", "name": "Las Vegas", "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas" },
        { "@type": "City", "name": "Henderson", "sameAs": "https://en.wikipedia.org/wiki/Henderson,_Nevada" },
        { "@type": "City", "name": "North Las Vegas", "sameAs": "https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada" },
        { "@type": "City", "name": "Summerlin", "sameAs": "https://en.wikipedia.org/wiki/Summerlin,_Nevada" },
        { "@type": "AdministrativeArea", "name": "Clark County", "sameAs": "https://en.wikipedia.org/wiki/Clark_County,_Nevada" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "34"
      },
      "priceRange": "Call for pricing"
    }
    ```
  - [x] 4.2: Use `utils/schema.ts` generator from Story 1.8. If `generateLocalBusinessSchema` doesn't support `areaServed` yet, extend it or create the JSON-LD object inline with a `// TODO: move to utils/schema.ts` comment
  - [x] 4.3: Inject JSON-LD via the route `meta`/`handle` export pattern

- [x] **Task 5: SEO metadata and OG tags** (AC: #4)
  - [x] 5.1: Use `utils/meta.ts` to generate route `meta` export:
    - Title: `locationHubContent.metaTitle` — "Service Areas | Silver State Adolescent Treatment Center"
    - Description: `locationHubContent.metaDescription`
    - Canonical: `https://www.silverstatetreatment.com/locations`
    - OG image: Silver State facility exterior or Las Vegas area image

- [x] **Task 6: Responsive layout and accessibility** (AC: all)
  - [x] 6.1: Service area cards: on desktop (>= 900px), display in a 2 or 3-column grid. On mobile (< 900px), single column stack
  - [x] 6.2: Facility details callout: full-width on both mobile and desktop, visually prominent
  - [x] 6.3: Heading hierarchy: `<h1>` for page title, `<h2>` for each service area name and section headings
  - [x] 6.4: All links (service area cards, phone CTA, internal links) must be keyboard accessible with visible `:focus-visible` indicators
  - [x] 6.5: Touch targets on cards, phone CTA, and links must be >= 44x44px on mobile (FR42)
  - [x] 6.6: Service area cards should be fully clickable (the entire card is a link target, not just the text)
  - [x] 6.7: Use `var(--body)` for body text, `var(--text)` for headings
  - [x] 6.8: Verify no horizontal scrolling at 320px viewport (FR43)
  - [x] 6.9: Address display uses semantic `<address>` element

- [x] **Task 7: Add route for the hub page** (AC: all)
  - [x] 7.1: Verify or add route entry in `src/routes.ts`:
    - `/locations` → `pages/locations/Index.tsx`
  - [x] 7.2: Route should use PageLayout as its layout wrapper

- [x] **Task 8: Verify compilation and rendering** (AC: #6)
  - [x] 8.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [x] 8.2: Run `npm run dev` — Locations hub renders at `/locations`
  - [x] 8.3: Verify responsive layout at 320px, 768px, and 1024px+
  - [x] 8.4: Verify JSON-LD is present in page source
  - [x] 8.5: Verify all service area links navigate to correct `/locations/{slug}` URLs (pages may 404 until Story 7.2 is complete — that's expected)
  - [x] 8.6: Verify keyboard navigation through all interactive elements
  - [x] 8.7: Verify Silver State address and phone number display correctly from `site` data

## Dev Notes

### Critical Context

The Locations hub page and `locations.ts` data file serve two purposes:
1. The hub page (`/locations`) gives families a bird's-eye view of Silver State's service area
2. The data file provides content for all 5 individual city service area pages (Story 7.2)

**The data file must be designed to fully support Story 7.2** — each `LocationData` entry contains everything needed to render a standalone city page without additional data sources.

**Silver State's actual location:**
- Address: 8225 W Robindale Rd, Las Vegas, NV 89113
- This is in the southwestern part of the Las Vegas metro area, near the 215 Beltway
- The facility physically serves the entire Clark County / Las Vegas metropolitan area

**Las Vegas metro geography context (for writing accurate distance/directions):**
- Las Vegas (city proper): Silver State is located here — southwestern Las Vegas near Spring Valley
- Henderson: ~20-25 min drive south/southeast via I-215 or US-95
- North Las Vegas: ~25-30 min drive north via US-95
- Summerlin: ~15-20 min drive northwest (also in Las Vegas city limits but a distinct community)
- Clark County: encompasses all of the above plus unincorporated areas, Boulder City, Mesquite, Laughlin, etc.

**Local SEO intent:** Each service area page targets searches like "teen treatment [city] NV", "adolescent therapy near [city]", "residential treatment for teens [city] Nevada". The hub page targets broader "treatment near me" and "areas served" queries.

**No Google Maps embed** — use a static image or text-based map context. Embedding Google Maps would add third-party scripts and potential tracking concerns. A static map image with descriptive alt text is preferred.

### Architecture Compliance

- **Component export:** `export default function LocationsHub()` — named function, default export
- **File location:** `src/pages/locations/Index.tsx` — matches architecture directory structure (hub pages use `Index.tsx`)
- **Data file:** `src/data/locations.ts` — all location content here, not in components
- **Type annotations:** All exports must have explicit types: `export const locations: LocationData[] = [...]`
- **Interfaces in types.ts:** `LocationData` defined in `types.ts`, not in the data file
- **Styling:** CSS tokens + inline styles only. No CSS modules, no Tailwind
- **Phone/address:** Use `site.phone`, `site.phoneTel`, `site.address` from `data/common.ts` — never hardcode
- **Cross-references:** Use slug strings for linking between content areas: `relatedPrograms: ['residential', 'php', 'iop']`
- **Barrel re-export:** Add `export * from './locations'` to `data/index.ts`
- **Internal links:** Use React Router `<Link>` — never `<a href>` for internal navigation
- **JSON-LD:** Use `utils/schema.ts` generators — inject via route `meta`/`handle` pattern
- **Mobile breakpoint:** 900px

### Dependencies

**Depends on (must be complete):**
- Story 1.1: Production project structure
- Story 1.2: `types.ts` with `LocationData` interface (or `FaqEntry` if location FAQs are included), `data/common.ts` with `site` object, `data/index.ts` barrel
- Story 1.7: PageLayout wrapper
- Story 1.8: `utils/meta.ts`, `utils/schema.ts` with `generateLocalBusinessSchema`, route configuration

**Produces for (later stories depend on):**
- Story 7.2: `locations` array and `locationHubContent` from `data/locations.ts` — Story 7.2 creates the individual city pages using this exact data
- Story 6.2: Facility page may reference location data for address display consistency
- Story 2.2: Homepage may link to the locations hub

### Anti-Patterns to AVOID

1. **DO NOT** hardcode location data or city names in the page component — all content must come from `src/data/locations.ts`
2. **DO NOT** create CSS module files — use inline styles + CSS tokens
3. **DO NOT** use arrow function exports — must be `export default function LocationsHub()`
4. **DO NOT** embed Google Maps or any third-party map service — use a static image or text-based context
5. **DO NOT** create a barrel file in `src/pages/locations/`
6. **DO NOT** hardcode the phone number or address — use `site.*` from `data/common.ts`
7. **DO NOT** use `var(--muted)` for essential text below 18px
8. **DO NOT** skip the LocalBusiness JSON-LD — this is critical for local SEO
9. **DO NOT** use `<div onClick>` for service area cards — use `<Link>` wrapping the card content, or a card component with an embedded `<Link>`
10. **DO NOT** forget to include `areaServed` in the LocalBusiness JSON-LD — this connects Silver State to all 5 service areas in structured data
11. **DO NOT** render Nav, Footer, TrustBadges, or CtaBand directly — PageLayout handles these
12. **DO NOT** forget to add the re-export to `data/index.ts`
13. **DO NOT** make the distance/direction data inaccurate — Silver State is in southwestern Las Vegas (89113 zip code). Henderson is south/southeast, not north
14. **DO NOT** name the component function `Index` — name it `LocationsHub` for clarity, even though the file is `Index.tsx`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations, cross-references
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function pattern
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/locations`, `/locations/{slug}` URL pattern
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure] — `pages/locations/Index.tsx`, `data/locations.ts`
- [Source: _bmad-output/planning-artifacts/epics.md#Story-7.1] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR24] — address, service area, facility details
- [Source: _bmad-output/planning-artifacts/prd.md#FR25] — service area hub page
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data (LocalBusiness)
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] — Open Graph tags
- [Source: mockups/silverstate-react/src/data/content.ts] — existing `site` object with address data

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- Senior review (2026-02-25): removed duplicate LocalBusiness schema emission by keeping JSON-LD script output in-page and removing route-level `meta.jsonLd`.
- Senior review (2026-02-25): aligned Locations hub styling constants to CSS token values (`var(--font-display)`, `var(--warm)`).
- Senior review (2026-02-25): added explicit 44px touch-target enforcement on cross-navigation admissions/call CTAs.
- Senior review (2026-02-25): set a page-specific OG image for `/locations` metadata.
- Senior review (2026-02-25): updated Story 7.1 tests to validate no route-level ld+json and page-specific OG image behavior.

### Completion Notes List

- Expanded `LocationData` interface in `types.ts` to include all required fields: `name`, `slug`, `description`, `distanceFromFacility`, `directions`, `localContext`, `serviceAreaDescription`, `relatedPrograms`, `relatedConditions`, `metaTitle`, `metaDescription`, `faqEntries?`, `image?`
- Created full location content data for all 5 service areas (Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County) with accurate geographic context and distances
- Added `locationsBySlug` lookup map and `locationHubContent` hub page content export
- Built full `LocationsHub` page following Insurance hub pattern: hero section with CharReveal, facility details callout with semantic `<address>` element, service area card grid with fully-clickable `<Link>` wrapping, phone CTA section, and cross-navigation links
- LocalBusiness JSON-LD injected via `generateLocalBusiness()` from `utils/schema.ts` (already supports `areaServed`)
- SEO meta exported via `generateMeta()` with unique canonical/OG tags and page-specific OG image for the locations hub
- Responsive layout: 3-column grid on desktop (>=900px), single column on mobile
- All CSS tokens used correctly: `var(--font-display)`, `var(--warm)`, `var(--body)`, `var(--text)`, `var(--sage-soft)`, `var(--blue)`
- Touch targets >= 44px on all interactive elements, including cross-nav conversion CTAs
- 22 tests cover data validation, SEO/meta contract, and hub rendering
- Verification commands passed:
  - `npx tsc --noEmit`
  - `npx vitest run src/pages/locations/Index.test.tsx src/pages/locations/CityPage.test.tsx`
  - `npm run lint`
  - `npm run format:check`
- Route `/locations` already existed in `routes.tsx`; barrel re-export already in `data/index.ts`

### Change Log

- 2026-02-24: Story 7.1 implemented — LocationData interface expanded, locations.ts data created for 5 service areas, LocationsHub page built with JSON-LD, SEO, responsive layout, and 21 tests
- 2026-02-25: Senior code review completed — fixed duplicate schema/meta contract, OG image specificity, token compliance, touch-target enforcement, and updated regression tests.

### File List

- `src/types.ts` (modified — expanded LocationData interface)
- `src/data/locations.ts` (modified — populated with 5 locations + hub content + locationsBySlug)
- `src/pages/locations/Index.tsx` (modified — removed route-level schema emission, tokenized style constants, page-specific OG image, cross-nav touch-target enforcement)
- `src/pages/locations/Index.test.tsx` (updated — Story 7.1 metadata/schema/touch-target regression coverage)
- `_bmad-output/implementation-artifacts/7-1-location-content-data-and-hub-page.md` (modified — review completion record)
- `_bmad-output/implementation-artifacts/sprint-status.yaml` (modified — story status sync)

### Senior Developer Review (AI)

**Reviewer:** Silver  
**Date:** 2026-02-25  
**Outcome:** Approved (all high and medium findings fixed)

**Findings**

1. **HIGH:** Locations hub emitted duplicate `LocalBusiness` structured data via route meta (`jsonLd`) and in-page script.
2. **MEDIUM:** Route metadata used default OG image instead of a location/facility-specific image.
3. **MEDIUM:** Locations hub used hardcoded display font and warm background values instead of CSS tokens.
4. **MEDIUM:** Cross-navigation admissions/call CTAs lacked explicit 44px touch-target enforcement.

**Fixes Applied**

- Removed route-level `jsonLd` from `meta` and retained `LocalBusiness` structured data in page script output.
- Added page-specific `ogImage` to locations route metadata.
- Replaced hardcoded style constants with design-token values.
- Added explicit `minHeight` and alignment styles for cross-nav conversion CTAs and updated tests accordingly.
