# Story 6.1: About Content Data & Team Page

Status: ready-for-dev

## Story

As a **clinical referrer or parent evaluating credentials**,
I want a team page with staff profiles showing names, photos, credentials, and specializations,
So that I can verify the clinical team's qualifications before trusting them with a teen.

**Dependencies:** Story 1.1 (production project), Story 1.2 (shared data types including `TeamMember` interface in `types.ts`, `data/common.ts` with `site` object), Story 1.7 (PageLayout wrapper), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`)

**FRs covered:** FR13, FR14, FR15, FR16, FR35, FR36, FR40

> **FR16 (source citations):** Clinical content on the team page should cite credentials and institutional affiliations. Full source citation implementation is primarily on condition pages, but team member credentials serve as a form of clinical authority citation.

## Acceptance Criteria

1. **Given** the data architecture from Epic 1, **When** the about data file is created, **Then** `src/data/about.ts` exports typed `TeamMember` data for clinical leadership and key staff — each including: name, photo URL, title, credentials, license numbers, specializations, and professional background (FR13)
2. **And** the Team page at `/about/our-team` displays staff profiles in a visually engaging format
3. **And** each staff profile generates Physician/Person JSON-LD structured data (FR35)
4. **And** the page displays Silver State's key differentiators: 4.8/5 rating, 4:1 staff-to-client ratio, LGBTQIA+ affirming care, on-site accredited academics, full continuum of care (FR14)
5. **And** clinical reviewer attribution is visible on the page (FR15)
6. **And** the page has unique SEO metadata and OG tags via the route `meta` export (FR36, FR40)
7. **And** the page uses PageLayout and is fully responsive and accessible (FR26-30, FR41-43)
8. **And** all exports in `about.ts` have explicit type annotations
9. **And** `npx tsc --noEmit` passes with zero errors

## Tasks / Subtasks

- [ ] **Task 1: Define/verify TeamMember interface in types.ts** (AC: #1, #8)
  - [ ] 1.1: Verify Story 1.2 has created the `TeamMember` interface in `src/types.ts`. If not yet present, add it with these fields: `name: string`, `slug: string`, `photoUrl: string`, `title: string`, `credentials: string` (e.g., "MD, ABPN Board Certified"), `licenseNumbers: string[]`, `specializations: string[]`, `professionalBackground: string`, `education?: string`, `certifications?: string[]`, `reviewedBy?: string`, `reviewDate?: string`
  - [ ] 1.2: Verify or add `AboutPageData` interface in `types.ts` for the facility and academy page data (used by Story 6.2): `title: string`, `slug: string`, `description: string`, `features: string[]`, `images: { src: string; alt: string }[]`, `metaTitle: string`, `metaDescription: string`
  - [ ] 1.3: Verify or add `KeyDifferentiator` interface: `icon?: string`, `title: string`, `value: string`, `description: string`

- [ ] **Task 2: Create src/data/about.ts with TeamMember data** (AC: #1, #8)
  - [ ] 2.1: Create `src/data/about.ts` with the import: `import type { TeamMember } from '../types'`
  - [ ] 2.2: Export `teamMembers` array with typed `TeamMember[]` annotation. Include at minimum:
    - Dr. Russ Park — Medical Director. Psychiatrist. Include: credentials (MD, Board Certified in Psychiatry), license number(s), specializations (adolescent psychiatry, medication management, dual diagnosis), professional background paragraph
    - Arianne Smith — Clinical Director. Licensed therapist. Include: credentials (LCSW or equivalent), license number(s), specializations (trauma-informed care, family therapy, adolescent behavioral health), professional background paragraph
    - Additional clinical staff as available from source content (therapists, counselors, nursing staff, academic staff)
  - [ ] 2.3: Each TeamMember entry must have a unique `slug` field (e.g., `'dr-russ-park'`, `'arianne-smith'`) for URL fragments and cross-references
  - [ ] 2.4: Use `import.meta.env.VITE_R2_BASE_URL || '/assets'` for `photoUrl` base path. Photo URLs should follow pattern: `${baseUrl}/team/firstname-lastname.webp`
  - [ ] 2.5: Export `keyDifferentiators` array with typed annotation describing Silver State's 5 key differentiators:
    - `{ title: '4.8/5 Rating', value: '4.8', description: '34 verified reviews from families...' }`
    - `{ title: '4:1 Staff-to-Client Ratio', value: '4:1', description: 'Personalized attention...' }`
    - `{ title: 'LGBTQIA+ Affirming', value: '100%', description: 'Designated affirming care...' }`
    - `{ title: 'On-Site Accredited Academics', value: 'SNYA', description: 'Silver State Youth Academy...' }`
    - `{ title: 'Full Continuum of Care', value: 'RTC → PHP → IOP', description: 'Residential, PHP, and IOP...' }`
  - [ ] 2.6: Export `facilityData` and `youthAcademyData` objects (typed as `AboutPageData`) for use by Story 6.2 — include title, slug, description, features array, images array with descriptive alt text, metaTitle, metaDescription
  - [ ] 2.7: Export `clinicalReviewer` object: `{ name: string; credentials: string; title: string }` — used for FR15 clinical reviewer attribution across about pages
  - [ ] 2.8: Add re-export to `src/data/index.ts`: `export * from './about'`

- [ ] **Task 3: Create the Team page at src/pages/about/Team.tsx** (AC: #2, #4, #5, #7)
  - [ ] 3.1: Create `src/pages/about/Team.tsx` with `export default function Team()`
  - [ ] 3.2: Import `teamMembers`, `keyDifferentiators`, `clinicalReviewer` from `../../data/about`
  - [ ] 3.3: Import `site` from `../../data/common`
  - [ ] 3.4: The page must be wrapped in PageLayout (via route config, not manually imported in the page — PageLayout is applied at the layout level per Story 1.7)
  - [ ] 3.5: Render a page header section with `<h1>` containing "Our Clinical Team" or similar, with a subheading describing Silver State's commitment to adolescent mental health
  - [ ] 3.6: Render the key differentiators section (AC #4) — display all 5 differentiators in a visually engaging grid/card layout. Use `.bento-card` or similar existing CSS class. Each differentiator should show the value prominently with a title and description
  - [ ] 3.7: Render the team members section — each staff member displayed as a profile card with:
    - Photo (with `loading="lazy"`, descriptive `alt` text: `"Portrait of {name}, {title}"`)
    - Name as `<h2>` or `<h3>` (maintain heading hierarchy)
    - Title and credentials
    - License numbers displayed visually (e.g., "License: NV-12345")
    - Specializations as a tag list or comma-separated
    - Professional background paragraph
  - [ ] 3.8: Render clinical reviewer attribution (AC #5): display `clinicalReviewer.name`, `clinicalReviewer.credentials`, and `clinicalReviewer.title` at the bottom of the page with a "Page reviewed by" label (FR15)
  - [ ] 3.9: Add internal links to related content: programs page (`/programs/residential-treatment`), admissions (`/admissions`), facility (`/about/facility`) — use `<Link>` from React Router
  - [ ] 3.10: Include a phone CTA section within the page content directing users to call for more information about the clinical team

- [ ] **Task 4: Implement Physician JSON-LD structured data per staff member** (AC: #3)
  - [ ] 4.1: Import `generatePhysicianSchema` (or equivalent) from `../../utils/schema` — this utility should be created by Story 1.8. If not yet available, create a local helper that generates JSON-LD in this format:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Russ Park",
      "jobTitle": "Medical Director",
      "description": "Board-certified psychiatrist specializing in adolescent mental health...",
      "image": "https://images.silverstatetreatment.com/team/dr-russ-park.webp",
      "medicalSpecialty": ["Psychiatry", "Adolescent Medicine"],
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Silver State Adolescent Treatment Center"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8225 W Robindale Rd",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89113"
      }
    }
    ```
  - [ ] 4.2: Generate one JSON-LD block per team member — inject all into the page `<head>` using a `<script type="application/ld+json">` tag. Use the route `meta` or `handle` export pattern established by Story 1.8
  - [ ] 4.3: For non-physician staff (therapists, counselors), use `@type: "Person"` instead of `"Physician"`

- [ ] **Task 5: SEO metadata and OG tags** (AC: #6)
  - [ ] 5.1: Use `utils/meta.ts` helper to generate the route `meta` export (or `handle` export per Story 1.8 pattern) with:
    - Title: `"Our Clinical Team | Silver State Adolescent Treatment Center"`
    - Description: `"Meet Silver State's clinical leadership — board-certified psychiatrists, licensed therapists, and specialized adolescent treatment professionals. Joint Commission Gold Seal accredited."`
    - Canonical URL: `https://www.silverstatetreatment.com/about/our-team`
    - OG image: team photo or Silver State branded image
  - [ ] 5.2: Ensure the meta export follows the exact pattern established by Story 1.8 for React Router v7 route metadata

- [ ] **Task 6: Responsive layout and accessibility** (AC: #7)
  - [ ] 6.1: Team member cards: on desktop (>= 900px), display in a 2 or 3-column grid. On mobile (< 900px), single column stack
  - [ ] 6.2: Key differentiators section: on desktop, display in a row/grid. On mobile, stack vertically or use a 2-column grid
  - [ ] 6.3: All images must have descriptive `alt` text (FR28)
  - [ ] 6.4: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings ("Our Clinical Team", "Why Silver State"), `<h3>` for individual staff member names
  - [ ] 6.5: All interactive elements (links, phone CTA) must be keyboard accessible with visible `:focus-visible` indicators
  - [ ] 6.6: Touch targets on phone CTA and navigation links must be >= 44x44px on mobile (FR42)
  - [ ] 6.7: Use `var(--body)` for body text, `var(--text)` for headings — never `var(--muted)` for essential text below 18px
  - [ ] 6.8: Verify no horizontal scrolling at 320px viewport (FR43)

- [ ] **Task 7: Verify compilation and rendering** (AC: #9)
  - [ ] 7.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 7.2: Run `npm run dev` — Team page renders correctly at `/about/our-team`
  - [ ] 7.3: Manually verify responsive layout at 320px, 768px, and 1024px+
  - [ ] 7.4: Manually verify JSON-LD is present in page source (view source or Structured Data Testing Tool)
  - [ ] 7.5: Verify keyboard navigation through all interactive elements

## Dev Notes

### Critical Context

The Team page is the primary clinical credibility page — it's where referring professionals (Dr. Chen persona) and skeptical parents verify Silver State's qualifications. The data in `about.ts` serves not just this page but also Story 6.2 (Facility and Youth Academy pages), so the data file must be designed to support all three pages in Epic 6.

**Existing mockup content to reference:**
- `mockups/silverstate-react/src/data/content.ts` contains `LeadershipEntry` data and basic team info — use this as the starting point but expand significantly with credentials, license numbers, specializations, and professional background
- The existing `LeadershipEntry` interface is too minimal (just name, title, bio) — the production `TeamMember` interface needs to be much richer per FR13
- The mockup homepage (`mockups/silverstate-react/src/components/`) includes `ProfileChip.tsx` which renders basic team member chips — this component pattern can be referenced but the Team page needs full profile cards, not chips

**Key clinical staff from existing content:**
- Dr. Russ Park — Medical Director, Psychiatrist
    - **ACTION REQUIRED:** Dr. Russ Park's title and credentials must be verified with the client. The mockup data shows 'Executive Director' with 'Advanced Nurse Executive with psychiatric mental health focus.' This story references 'Medical Director, Psychiatrist.' Use the mockup data as the default until client confirms.
- Arianne Smith — Clinical Director
- Additional staff should be populated from the Silver State website content or placeholder data with a clear TODO marker

**The data file `about.ts` must support three pages:**
1. Team page (`/about/our-team`) — this story
2. Facility page (`/about/facility`) — Story 6.2
3. Youth Academy page (`/about/youth-academy`) — Story 6.2

### Architecture Compliance

- **Component export:** `export default function Team()` — named function, default export
- **Data imports:** Import from `../../data/about` and `../../data/common` — never hardcode content
- **Type annotations:** All exports in `about.ts` must have explicit type annotations: `export const teamMembers: TeamMember[] = [...]`
- **Interfaces in types.ts:** `TeamMember`, `AboutPageData`, `KeyDifferentiator` — not in the data file
- **Styling:** CSS tokens + inline styles only. Use `var(--blue)`, `var(--text)`, `var(--body)`, `var(--cream)` etc. No CSS modules, no Tailwind
- **Image paths:** `${import.meta.env.VITE_R2_BASE_URL || '/assets'}/team/name.webp` pattern
- **Cross-references:** Use slug strings for linking (e.g., `slug: 'dr-russ-park'`)
- **Phone numbers:** Use `site.phone` and `site.phoneTel` from `data/common.ts` — never hardcode
- **Mobile breakpoint:** 900px via `useIsMobile()` hook or CSS media query in `<style>` block
- **Barrel re-export:** Add `export * from './about'` to `data/index.ts`
- **JSON-LD:** Use `utils/schema.ts` generators from Story 1.8 — inject via route `meta`/`handle` pattern

### Dependencies

**Depends on (must be complete):**
- Story 1.1: Production project structure exists
- Story 1.2: `types.ts` with `TeamMember` interface, `data/common.ts` with `site` object, `data/index.ts` barrel
- Story 1.7: PageLayout wrapper rendering Nav, Breadcrumb, TrustBadges, CtaBand, Footer
- Story 1.8: `utils/meta.ts` for SEO metadata, `utils/schema.ts` for JSON-LD generators, route configuration for `/about/our-team`

**Produces for (later stories depend on):**
- Story 6.2: `facilityData`, `youthAcademyData`, and `clinicalReviewer` exports from `about.ts`
- Story 2.2: Homepage may reference `teamMembers` for clinical credibility section (ProfileChip display)

### Anti-Patterns to AVOID

1. **DO NOT** hardcode team member data in the page component — all content must come from `src/data/about.ts`
2. **DO NOT** create a separate CSS file (`Team.module.css`) — use inline styles + CSS tokens + optional `<style>` block for media queries
3. **DO NOT** use arrow function export (`const Team = () =>`) — must be `export default function Team()`
4. **DO NOT** define data interfaces in `about.ts` — all interfaces go in `src/types.ts`
5. **DO NOT** create a barrel file `index.ts` in `src/pages/about/` — import page files directly
6. **DO NOT** hardcode the phone number — use `site.phoneTel` and `site.phone` from `data/common.ts`
7. **DO NOT** use `var(--muted)` for essential text below 18px — use `var(--body)` instead
8. **DO NOT** skip the JSON-LD structured data — each team member needs Physician/Person schema
9. **DO NOT** forget `loading="lazy"` on team member photos (they are below the fold)
10. **DO NOT** use `<div onClick>` for any interactive elements — use `<Link>`, `<a>`, or `<button>`
11. **DO NOT** forget to add the re-export to `data/index.ts`
12. **DO NOT** import React Router `Link` as a named import from `react-router` — use the correct import path per project convention
13. **DO NOT** skip the `alt` text on team member photos — must be descriptive (e.g., "Portrait of Dr. Russ Park, Medical Director")
14. **DO NOT** skip heading hierarchy — one `<h1>` per page, sequential `<h2>`/`<h3>`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations, barrel exports
- [Source: _bmad-output/planning-artifacts/architecture.md#Component-Patterns] — export default function, props interface
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles, extracted style constants
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] — `/about/our-team` URL
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure] — `pages/about/Team.tsx`, `data/about.ts`
- [Source: _bmad-output/planning-artifacts/epics.md#Story-6.1] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR13] — staff profiles with credentials
- [Source: _bmad-output/planning-artifacts/prd.md#FR14] — key differentiators
- [Source: _bmad-output/planning-artifacts/prd.md#FR15] — clinical reviewer attribution
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] — JSON-LD structured data (Physician type)
- [Source: _bmad-output/planning-artifacts/prd.md#FR36] — unique SEO metadata per page
- [Source: _bmad-output/planning-artifacts/prd.md#FR40] — Open Graph tags for link previews
- [Source: mockups/silverstate-react/src/data/content.ts] — existing team data (LeadershipEntry) to expand
- [Source: mockups/silverstate-react/src/components/ProfileChip.tsx] — existing profile display pattern

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
