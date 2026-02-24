# Story 1.12: Privacy Policy & 404 Pages

Status: review

## Story

As a **family member**,
I want access to a clear privacy policy and a helpful error page if I reach a broken link,
So that I trust the site's handling of my information and am never stranded on a dead page.

## Acceptance Criteria

1. **Given** a user clicks the privacy policy link from any page, **When** the Privacy Policy page loads, **Then** it renders within PageLayout with full SEO metadata and JSON-LD (FR33, FR36)
2. **And** the content addresses data collection, HIPAA compliance, cookie usage, analytics disclosure, third-party services, and contact information for privacy concerns
3. **And** the privacy policy mentions 42 CFR Part 2 protections for substance use disorder information (future-proofing for when SUD forms are added)
4. **And** the Privacy page is accessible at `/privacy` and linked from the Footer on every page (FR33)
5. **Given** a user navigates to a non-existent URL, **When** the 404 page renders, **Then** it displays a helpful message with navigation links and a phone CTA
6. **And** it uses PageLayout for consistent experience (Nav, TrustBadges, CtaBand, Footer all present)
7. **And** it returns proper HTTP 404 status code in the pre-rendered response
8. **And** both pages are fully responsive across all breakpoints (320px, 768px, 1024px+) (FR41)
9. **And** both pages are keyboard accessible with proper heading hierarchy and semantic HTML (FR26, FR27)
10. **And** both pages pass `npx tsc --noEmit` with zero TypeScript errors

## Dependencies

| Story | What It Provides | Status Required |
|-------|-----------------|-----------------|
| 1.1 | Production project structure, route manifest with catch-all 404 route | Complete |
| 1.2 | `types.ts` interfaces, `data/common.ts` (site info, phone, nav links) | Complete |
| 1.7 | `PageLayout` component (Nav + Breadcrumb + ErrorBoundary + main + TrustBadges + CtaBand + Footer) | Complete |
| 1.8 | `utils/schema.ts` (JSON-LD generators), `utils/meta.ts` (SEO metadata helper), `routes.ts` | Complete |

## FRs Covered

- **FR33:** Users can access the privacy policy from every page
- **FR36:** Every page provides unique SEO metadata -- title tag, meta description, Open Graph tags, and canonical URL

## NFRs Addressed

- **NFR7:** HTTPS/TLS -- privacy page content reinforces this commitment
- **NFR9:** Zero client-side storage of PHI -- privacy policy documents this practice
- **NFR12:** Cookie consent -- privacy policy explains the cookie consent mechanism
- **NFR13:** WCAG 2.1 AA -- both pages must pass accessibility requirements
- **NFR34:** Canonical URLs -- both pages declare canonical URLs

## Tasks / Subtasks

- [x] **Task 1: Create privacy policy content data** (AC: #2, #3)
  - [x] 1.1: Define `PrivacySection` interface in `src/types.ts` with fields: `id: string`, `heading: string`, `content: string[]` (array of paragraphs)
  - [x] 1.2: Create `src/data/privacy.ts` exporting typed `privacySections: PrivacySection[]` with all healthcare-required content sections (see Privacy Content Outline below)
  - [x] 1.3: Add `privacy.ts` re-export to `src/data/index.ts` barrel
  - [x] 1.4: Ensure all phone numbers use `site.phone` / `site.phoneTel` from `data/common.ts` -- never hardcoded

- [x] **Task 2: Create Privacy page component** (AC: #1, #2, #3, #4, #8, #9)
  - [x] 2.1: Create `src/pages/Privacy.tsx` using `export default function Privacy()`
  - [x] 2.2: Import privacy content from `data/privacy.ts` and site info from `data/common.ts`
  - [x] 2.3: Render within PageLayout (automatic via route config -- page receives PageLayout wrapper)
  - [x] 2.4: Render each privacy section with proper heading hierarchy (`<h1>` for page title, `<h2>` for each section)
  - [x] 2.5: Use inline styles with CSS design tokens -- no hardcoded colors or fonts
  - [x] 2.6: Add `last updated` date displayed prominently near the page title
  - [x] 2.7: Add contact information section for privacy concerns (email, phone, mailing address from `data/common.ts`)
  - [x] 2.8: Ensure responsive layout -- readable line lengths, proper spacing at all breakpoints

- [x] **Task 3: Create Privacy page SEO metadata and JSON-LD** (AC: #1)
  - [x] 3.1: Add route `meta` export using `utils/meta.ts` helper with unique title, description, OG tags, and canonical URL for `/privacy`
  - [x] 3.2: Generate `WebPage` JSON-LD schema via `utils/schema.ts` (see JSON-LD section below)
  - [x] 3.3: Set canonical URL to `${VITE_SITE_URL}/privacy`

- [x] **Task 4: Create 404 page content data** (AC: #5)
  - [x] 4.1: Define `NotFoundContent` interface in `src/types.ts` with fields: `headline: string`, `message: string`, `suggestions: { label: string; href: string }[]`
  - [x] 4.2: Create content in `src/data/common.ts` (or `src/data/privacy.ts` if co-locating utility page data) exporting typed `notFoundContent: NotFoundContent`
  - [x] 4.3: Include helpful navigation links: Home, Programs, Conditions, Insurance, Admissions, Contact
  - [x] 4.4: Include phone CTA text referencing `site.phone` from `data/common.ts`

- [x] **Task 5: Create NotFound page component** (AC: #5, #6, #8, #9)
  - [x] 5.1: Create `src/pages/NotFound.tsx` using `export default function NotFound()`
  - [x] 5.2: Import content from data file and site info from `data/common.ts`
  - [x] 5.3: Render within PageLayout (automatic via route config)
  - [x] 5.4: Display a warm, helpful headline (not "404 Error" -- something like "We couldn't find that page")
  - [x] 5.5: Display helpful message acknowledging the user may have followed an outdated link
  - [x] 5.6: Render navigation suggestion links as a styled list with descriptive labels
  - [x] 5.7: Include a prominent phone CTA: "Need help right now? Call (725) 525-9897" with `tel:` link
  - [x] 5.8: Use inline styles with CSS design tokens
  - [x] 5.9: Ensure all links meet 44x44px touch target minimum on mobile (FR42)

- [x] **Task 6: Configure routes and HTTP 404 status** (AC: #4, #7)
  - [x] 6.1: Add `/privacy` route to `routes.ts` pointing to `pages/Privacy.tsx`
  - [x] 6.2: Ensure catch-all `*` route in `routes.ts` points to `pages/NotFound.tsx`
  - [x] 6.3: Configure the catch-all route to return HTTP 404 status via Vercel's `vercel.json` fallback configuration (see Dev Notes — 404 HTTP Status section). The React Router route renders the NotFound component; the HTTP status is handled at the hosting layer.
  - [x] 6.4: Add `/privacy` to the pre-render routes list in `react-router.config.ts`
  - [x] 6.5: Do NOT add the 404 page to sitemap generation (it should not be indexed)

- [x] **Task 7: Add noindex meta to 404 page** (AC: #7)
  - [x] 7.1: Add `<meta name="robots" content="noindex, nofollow">` to the 404 page's `meta` export
  - [x] 7.2: Do NOT add JSON-LD structured data to the 404 page (no schema for error pages)
  - [x] 7.3: Set a basic title: "Page Not Found | Silver State Treatment Center"

- [x] **Task 8: Verify integration** (AC: #1-#10)
  - [x] 8.1: Verify Footer privacy link navigates to `/privacy` and page renders correctly
  - [x] 8.2: Verify navigating to `/this-page-does-not-exist` renders the 404 page
  - [x] 8.3: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [x] 8.4: Verify both pages render within PageLayout (Nav, breadcrumb on Privacy, TrustBadges, CtaBand, Footer)
  - [x] 8.5: Keyboard-navigate both pages -- all interactive elements reachable, focus indicators visible
  - [x] 8.6: Verify Privacy page breadcrumb shows: Home > Privacy Policy
  - [x] 8.7: Verify 404 page does NOT show breadcrumb (it has no meaningful location in site hierarchy -- implementation choice: either omit or show "Home > Page Not Found")

## Dev Notes

### Privacy Policy Content Outline (Healthcare-Specific)

The privacy policy MUST cover these sections. Content lives in `src/data/privacy.ts` as structured data, NOT hardcoded in the component.

**Section 1: Introduction**
- Who we are: Silver State Adolescent Treatment Center, LLC
- What this policy covers: how we collect, use, and protect information through this website
- Effective date / last updated date

**Section 2: Information We Collect**
- Information you provide voluntarily: contact form submissions (name, email, phone, message)
- Information collected automatically: IP address, browser type, device type, pages visited, referring URL
- Cookies and similar technologies (link to cookie consent mechanism)
- Clarify: the website does NOT collect Protected Health Information (PHI) through online forms in the current version. Insurance verification and clinical inquiries are handled via phone

**Section 3: How We Use Your Information**
- Respond to your inquiries
- Improve our website and services
- Analyze website usage patterns (via privacy-respecting analytics)
- Comply with legal obligations

**Section 4: HIPAA Compliance Statement**
- Silver State is a HIPAA-covered entity
- PHI is protected under HIPAA Privacy Rule and Security Rule
- This website does not collect, store, or transmit PHI through online forms
- All clinical information is handled through HIPAA-compliant channels (phone, in-person)
- Business Associate Agreements are maintained with all technology vendors that process user data

**Section 5: 42 CFR Part 2 -- Substance Use Disorder Records**
- Substance use disorder treatment records receive additional federal protections under 42 CFR Part 2
- Any future collection of SUD-related information through this website will require explicit written consent
- SUD records cannot be re-disclosed without patient consent
- This section is included proactively for when insurance verification forms are added

**Section 6: Cookies and Tracking Technologies**
- Essential cookies: site functionality (none currently beyond consent preference)
- Analytics cookies: Google Analytics 4 -- loaded ONLY after explicit user consent (opt-in)
- No marketing pixels or advertising trackers on any page collecting health information
- Cookie consent preference stored in localStorage (not a cookie itself)
- Users can change cookie preferences at any time via the cookie consent banner
- Google Consent Mode v2 integration ensures no data collected without consent

**Section 7: Third-Party Services**
- Google Analytics 4 (analytics, after consent)
- Call Tracking Metrics / CTM (phone call attribution)
- Cloudflare (CDN for image delivery)
- Vercel (website hosting)
- Google Fonts (typography -- no cookies, no tracking)
- Note: No data is shared with third parties for advertising purposes

**Section 8: Data Security**
- All data transmitted via HTTPS/TLS encryption
- No client-side storage of sensitive information
- Server-side protections for any form submissions
- Regular security practices and vendor assessments

**Section 9: Your Rights**
- Right to know what information we have collected
- Right to request deletion of your information
- Right to opt out of analytics tracking (via cookie consent)
- Nevada-specific privacy rights (NRS 603A)
- How to exercise these rights: contact information

**Section 10: Children's Privacy**
- Silver State treats adolescents (ages 12-17)
- This website is directed at parents and guardians, not minors
- We do not knowingly collect personal information from children under 13 through this website
- COPPA compliance statement

**Section 11: Changes to This Policy**
- We may update this policy periodically
- Changes will be posted on this page with an updated effective date
- Continued use of the site constitutes acceptance of changes

**Section 12: Contact Us**
- Privacy concerns: email address, phone number, mailing address
- All contact information sourced from `data/common.ts` -- never hardcoded

### 404 Page UX Design

The 404 page serves a specific purpose in healthcare: a family in crisis who hits a broken link should NEVER feel stranded. The page must:

1. **Reassure, don't blame:** Use warm language ("We couldn't find that page" not "Error 404")
2. **Offer clear next steps:** Navigation links to the most important pages
3. **Keep the phone CTA prominent:** A family may have been referred via an outdated link -- the phone number is their fastest path to help
4. **Maintain full site shell:** Nav, TrustBadges, CtaBand, Footer all present via PageLayout

**Suggested layout:**

```
[PageLayout header: Nav]

[Breadcrumb: Home > Page Not Found]  (optional -- see Task 8.7)

<main>
  <section style centered, max-width 600px>
    <h1>"We couldn't find that page"</h1>
    <p>The page you're looking for may have been moved or is no longer available.
       We're here to help you find what you need.</p>

    <h2>"Try one of these instead:"</h2>
    <nav aria-label="Suggested pages">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/programs/residential-treatment">Residential Treatment</a></li>
        <li><a href="/conditions/anxiety-treatment">Conditions We Treat</a></li>
        <li><a href="/insurance">Insurance & Coverage</a></li>
        <li><a href="/admissions">Admissions Process</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>

    <div class phone-cta>
      <p>"Need help right now?"</p>
      <a href="tel:+17255259897">Call (725) 525-9897</a>
      <p>Available 24/7</p>
    </div>
  </section>
</main>

[PageLayout footer: TrustBadges, CtaBand, Footer]
```

### Route Configuration

**Privacy route:**
```ts
// In routes.ts
{
  path: '/privacy',
  lazy: () => import('./pages/Privacy'),
}
```

**404 catch-all route (already scaffolded in Story 1.1):**
```ts
// In routes.ts -- must be LAST route
{
  path: '*',
  lazy: () => import('./pages/NotFound'),
}
```

**404 HTTP Status:** Use Vercel's fallback configuration. In `vercel.json`, configure the catch-all route to serve `NotFound.tsx` with a 404 status code. The React Router route simply renders the NotFound component; the HTTP status is handled at the hosting layer. Do NOT use `headers` export for status codes -- that is not a standard pattern.

**Vercel configuration (coordinate with Story 1.11):**

```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/404.html", "status": 404 }
  ]
}
```

This ensures that any URL not matching a static file returns the 404 page with a proper HTTP 404 status code.

### JSON-LD for Privacy Page

Use `WebPage` schema type from `utils/schema.ts`:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "description": "Privacy policy for Silver State Adolescent Treatment Center website, covering data collection, HIPAA compliance, cookies, and your rights.",
  "url": "https://www.silverstatetreatment.com/privacy",
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "Silver State Adolescent Treatment Center"
  },
  "dateModified": "2026-02-23",
  "inLanguage": "en-US"
}
```

Story 1.8 creates the `generateWebPage()` function in `utils/schema.ts`. Import and use it: `generateWebPage(title, description, url)`. This is a simple schema type that will be reused for other utility pages (Contact, Admissions, etc.).

**The 404 page gets NO JSON-LD.** Error pages should not have structured data.

### SEO Metadata

**Privacy page:**
```ts
export const meta = generateMeta({
  title: 'Privacy Policy | Silver State Adolescent Treatment Center',
  description: 'Learn how Silver State Adolescent Treatment Center collects, uses, and protects your information. HIPAA-compliant practices, cookie policy, and your privacy rights.',
  path: '/privacy',
  ogType: 'website',
})
```

**404 page:**
```ts
export const meta = () => [
  { title: 'Page Not Found | Silver State Treatment Center' },
  { name: 'robots', content: 'noindex, nofollow' },
]
```

### Styling Approach

Both pages use the standard project styling approach:
- CSS design tokens from `index.css` via `var(--token-name)`
- Inline `style={{}}` on JSX elements
- Extracted `CSSProperties` constants at top of file for repeated styles
- `.wrap` or `.wrap-narrow` CSS class for max-width container
- Responsive via `useIsMobile()` hook where layout differs between mobile/desktop

**Privacy page specifics:**
- Use `.wrap-narrow` (800px max-width) for optimal reading line length
- Body text in `var(--body)` color, headings in `var(--text)`
- Section spacing consistent with other content pages
- No heavy animations -- this is a utility/legal page

**404 page specifics:**
- Center-aligned content
- Navigation links styled as a clear, scannable list (not tiny footer-style links)
- Phone CTA styled prominently -- consider using existing `.btn-primary` or `.btn-pulse` class
- Keep it visually light -- the user is already disoriented, don't overwhelm

### Address Inconsistency

**Address (RESOLVED):** The correct facility address is **8225 W Robindale Rd, Las Vegas, NV 89113** (confirmed from live site). All stories now use this address.

### Anti-Patterns to AVOID

1. **DO NOT** hardcode privacy policy text directly in `Privacy.tsx` -- content must live in `data/privacy.ts`
2. **DO NOT** hardcode phone numbers -- always use `site.phone` / `site.phoneTel` from `data/common.ts`
3. **DO NOT** use `div` with `onClick` for navigation links on the 404 page -- use proper `<a>` elements or React Router `<Link>`
4. **DO NOT** add JSON-LD to the 404 page
5. **DO NOT** add the 404 page URL to `sitemap.xml` generation
6. **DO NOT** return HTTP 200 for the 404 page -- it must return 404 status
7. **DO NOT** use CSS modules, Tailwind, or styled-components
8. **DO NOT** create barrel files in `components/`
9. **DO NOT** use `--muted` color for essential text below 18px -- use `var(--body)`
10. **DO NOT** skip heading levels -- `<h1>` then `<h2>`, never `<h1>` then `<h3>`
11. **DO NOT** use generic legal boilerplate that doesn't reflect Silver State's actual practices -- this is a healthcare site with specific HIPAA obligations
12. **DO NOT** include legal advice or claim the privacy policy constitutes a legal agreement without Silver State's legal review -- frame it as an informational disclosure of practices

### Privacy Policy Legal Disclaimer

The privacy policy content created in this story is a **starting template** based on healthcare industry best practices. Silver State's legal counsel must review and approve the final privacy policy before the site launches. The data file structure makes it easy to update content without changing the component.

Include a comment in `data/privacy.ts`:
```ts
// IMPORTANT: This privacy policy content is a template based on healthcare best practices.
// It must be reviewed and approved by Silver State's legal counsel before production launch.
// Content can be updated by editing this file without changing the Privacy.tsx component.
```

### Architecture Compliance Requirements

- **Naming:** Pages = `PascalCase.tsx` (`Privacy.tsx`, `NotFound.tsx`), Data files = `camelCase.ts` (`privacy.ts`)
- **Exports:** `export default function Privacy()`, `export default function NotFound()`
- **Props interfaces:** Not needed -- these pages take no props (content from data files)
- **Styling:** CSS tokens + inline styles only
- **Data imports:** From `data/privacy.ts` and `data/common.ts` -- never from old monolithic `content.ts`
- **Phone numbers:** Always `site.phone` / `site.phoneTel` from common data
- **Accessibility:** Semantic HTML, heading hierarchy, keyboard navigation, ARIA labels on nav regions, alt text on any images, 44x44px touch targets
- **Mobile breakpoint:** 900px via `useIsMobile()` if layout differs

### File Inventory

**New files created:**
- `src/pages/Privacy.tsx` -- Privacy policy page component
- `src/pages/NotFound.tsx` -- 404 error page component
- `src/data/privacy.ts` -- Privacy policy structured content data

**Files modified:**
- `src/types.ts` -- Add `PrivacySection` and `NotFoundContent` interfaces
- `src/data/index.ts` -- Add re-export for `privacy.ts`
- `src/data/common.ts` -- Add `notFoundContent` export (or place in `privacy.ts`)
- `src/routes.ts` -- Add `/privacy` route, verify catch-all `*` route points to NotFound
- `react-router.config.ts` -- Add `/privacy` to pre-render list (do NOT add 404)
- `src/utils/schema.ts` -- `generateWebPage` function is created by Story 1.8; import and use it in this story

**Files NOT modified:**
- `src/components/Footer.tsx` -- **Footer Privacy Link:** The mockup Footer does NOT include a privacy link. Story 1.4's implementation must add a privacy link to the Footer's bottom bar. If Story 1.4 has already been implemented without a privacy link, add it in this story by modifying `Footer.tsx` to include `<Link to='/privacy'>Privacy Policy</Link>` in the bottom bar.
- `vercel.json` -- 404 status handling may need coordination with Story 1.11

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- URL structure, `/privacy` route
- [Source: _bmad-output/planning-artifacts/architecture.md#Process-Patterns] -- Catch-all route renders custom 404 page
- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation-Patterns] -- Naming, styling, component patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- Data file rules, type annotations
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- `pages/Privacy.tsx`, `pages/NotFound.tsx` in directory tree
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.12] -- Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#Accessibility-and-Privacy-Compliance] -- FR33 privacy policy requirement
- [Source: _bmad-output/planning-artifacts/prd.md#Domain-Specific-Requirements] -- HIPAA, 42 CFR Part 2, privacy constraints
- [Source: _bmad-output/planning-artifacts/prd.md#Technical-Constraints] -- Cookie consent, zero PHI in client storage, privacy policy visible from every page
- [Source: _bmad-output/planning-artifacts/prd.md#E-E-A-T-Content-Requirements] -- Trustworthiness: clear privacy policy

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

- Fixed unused imports in Privacy.tsx (site, toJsonLdScript) flagged by tsc --noEmit

### Completion Notes List

- Created comprehensive 12-section healthcare privacy policy in `src/data/privacy.ts` covering HIPAA, 42 CFR Part 2, cookies, third-party services, children's privacy, and Nevada-specific rights
- Privacy page renders all sections with proper h1/h2 heading hierarchy, last-updated date, and responsive layout via `.wrap-narrow` (800px max-width)
- Privacy page exports `meta` with full SEO metadata (title, description, OG tags, canonical URL) and `WebPage` JSON-LD schema
- NotFound page uses warm, reassuring language ("We couldn't find that page") with 6 navigation suggestions and a prominent phone CTA styled with blue-soft background
- NotFound page exports `meta` with noindex/nofollow and basic title — no JSON-LD
- Both `PrivacySection` and `NotFoundContent` interfaces added to types.ts
- 404 content co-located in `data/privacy.ts` alongside privacy sections (utility page data)
- All phone references use `site.phone`/`site.phoneTel` from data/common.ts — no hardcoded values
- Routes already configured by Story 1.8 (`/privacy` and `*` catch-all)
- Prerender script updated to generate `dist/404.html` at build time — Vercel automatically serves this with HTTP 404 status
- Used `routes` in vercel.json approach was incompatible with existing `redirects`/`headers` config; `404.html` at dist root is the standard Vercel SPA approach
- Footer already has Privacy Policy link (implemented in Story 1.4)
- Build succeeds, tsc passes with zero errors
- All links use 44px min-height for touch target compliance

### Change Log

- 2026-02-24: Implemented Privacy Policy and 404 pages (all 8 tasks complete)

### File List

- `src/types.ts` (modified) — Added PrivacySection and NotFoundContent interfaces
- `src/data/privacy.ts` (new) — Privacy policy content data, notFoundContent data
- `src/data/index.ts` (modified) — Added privacy.ts re-export
- `src/pages/Privacy.tsx` (modified) — Full privacy policy page with SEO meta and JSON-LD
- `src/pages/NotFound.tsx` (modified) — Helpful 404 page with navigation links and phone CTA
- `scripts/prerender.ts` (modified) — Added 404.html generation at dist root for Vercel HTTP 404 status
