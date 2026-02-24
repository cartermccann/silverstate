# Story 9.1: Cookie Consent & GA4 Analytics Setup

Status: ready-for-dev

## Story

As a **site visitor**,
I want to control my cookie preferences before any tracking runs,
So that my privacy is respected and Silver State complies with best practices.

**Dependencies:** Story 1.1 (production project), Story 1.7 (PageLayout wrapper — CookieConsent renders via PageLayout or App.tsx), Story 1.8 (route configuration — zone metadata per route), Story 1.11 (Vercel deployment — serverless function for GTM proxy)

**FRs covered:** FR32, FR34, NFR9, NFR12

## Acceptance Criteria

1. **Given** a user visits the site for the first time, **When** the page loads, **Then** the CookieConsent component displays a clear opt-in/opt-out choice for non-essential tracking (FR32)
2. **And** no analytics scripts (GA4, GTM) load until the user explicitly opts in (NFR12)
3. **And** consent preference is stored in localStorage using a non-PHI key (e.g., `ss_consent`) — not a cookie containing health information (NFR9)
4. **And** `utils/analytics.ts` implements Google Consent Mode v2 — signaling `analytics_storage` and `ad_storage` consent state to GA4
5. **And** GA4 loads via server-side GTM proxy (`api/gtm.ts`) on informational pages only (Zone 1)
6. **And** the two-zone tracking model ensures future health form pages (Zone 2) receive zero analytics scripts regardless of consent state (FR34)
7. **And** the consent banner is accessible: keyboard navigable, screen reader compatible, meets WCAG AA contrast ratios
8. **And** returning visitors who have already consented or declined do not see the banner again — their stored preference is respected

## Tasks / Subtasks

- [ ] **Task 1: Create `src/utils/analytics.ts` — consent management and GA4 loading** (AC: #2, #3, #4, #5, #6)
  - [ ] 1.1: Define a `ConsentState` type: `'granted' | 'denied' | 'pending'`
  - [ ] 1.2: Define a `TrackingZone` type: `'zone1' | 'zone2'` — Zone 1 = informational pages (GA4 allowed after consent), Zone 2 = health form pages (zero scripts always)
  - [ ] 1.3: Implement `getConsentState(): ConsentState` — reads from `localStorage.getItem('ss_consent')`. Returns `'pending'` if no value stored, `'granted'` if `'granted'`, `'denied'` if `'denied'`
  - [ ] 1.4: Implement `setConsentState(state: 'granted' | 'denied'): void` — writes to `localStorage.setItem('ss_consent', state)`. After setting, calls `updateGoogleConsent(state)` and conditionally initializes GA4
  - [ ] 1.5: Implement `updateGoogleConsent(state: 'granted' | 'denied'): void` — calls `gtag('consent', 'update', { analytics_storage: state, ad_storage: 'denied' })`. Note: `ad_storage` is always `'denied'` — Silver State does not use Google Ads remarketing on the site
  - [ ] 1.6: Implement `initializeDefaultConsent(): void` — called on page load BEFORE any GA4 script loads. Sets default consent to `denied` via `gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', wait_for_update: 500 })`. This ensures Google Consent Mode v2 is initialized even before the user interacts with the banner
  - [ ] 1.7: Implement `initializeGA4(zone: TrackingZone): void` — if `zone === 'zone2'`, return immediately (no scripts load). If `zone === 'zone1'` and consent is `'granted'`, dynamically load the GTM script via the server-side proxy endpoint (`/api/gtm`). Use the GA4 measurement ID from `import.meta.env.VITE_GA4_ID`
  - [ ] 1.8: Implement `getTrackingZone(pathname: string): TrackingZone` — returns `'zone2'` for any path that matches future health form routes (for MVP, no Zone 2 pages exist — return `'zone1'` for all current routes). Include a TODO comment with the pattern for future Zone 2 routes (e.g., `/forms/*`, `/insurance/verify`)
  - [ ] 1.9: The `gtag` function reference: if `window.gtag` does not exist, create a minimal `gtag` shim that pushes to `window.dataLayer` — this is the standard Google pattern for Consent Mode v2 initialization before the full GTM script loads
  - [ ] 1.10: **CRITICAL:** Never call `initializeGA4()` on Zone 2 pages — the zone check must happen BEFORE any script injection, not after. This is a compliance requirement (FR34)
  - [ ] 1.11: Export all public functions: `getConsentState`, `setConsentState`, `initializeDefaultConsent`, `initializeGA4`, `getTrackingZone`

- [ ] **Task 2: Create `api/gtm.ts` — server-side GTM proxy** (AC: #5)
  - [ ] 2.1: Create the file at `api/gtm.ts` in the project root `api/` directory (Vercel serverless function)
    > **Naming Clarification:** Despite the file name `api/gtm.ts`, this is a **GA4 first-party script proxy**, NOT a full GTM server-side container. It proxies the GA4 `gtag.js` script (`googletagmanager.com/gtag/js?id={GA4_MEASUREMENT_ID}`) through the site's own domain to avoid ad blockers. The file is named `gtm.ts` because the script is hosted at `googletagmanager.com`, but the functionality is GA4 analytics only. Consider renaming to `api/analytics-proxy.ts` for clarity.
  - [ ] 2.2: The proxy fetches the GTM container script from Google's servers and serves it from the site's own domain
  - [ ] 2.3: Accept GET requests with the GTM container ID as a query parameter or use the GA4 measurement ID environment variable.
    > **Environment Variable:** In the serverless function, use `process.env.GA4_ID` (server-side, no VITE_ prefix) to access the GA4 measurement ID. The `VITE_GA4_ID` environment variable is for client-side code only. Set `GA4_ID` as a separate server environment variable in Vercel with the same GA4 measurement ID value.
  - [ ] 2.4: Fetch `https://www.googletagmanager.com/gtag/js?id={GA4_ID}` and return the response with appropriate `Content-Type: application/javascript` header
  - [ ] 2.5: Add cache headers: `Cache-Control: public, max-age=3600` (1 hour cache to reduce upstream requests)
  - [ ] 2.6: Return 405 for non-GET requests
  - [ ] 2.7: Return 502 Bad Gateway if the upstream fetch to Google fails — include no sensitive error details
  - [ ] 2.8: **Purpose:** Serving GTM through a first-party proxy reduces the likelihood of ad blockers blocking analytics, and routes all analytics traffic through the site's own domain

- [ ] **Task 3: Create `src/components/CookieConsent.tsx` — consent banner** (AC: #1, #7, #8)
  - [ ] 3.1: Use `export default function CookieConsent()` — not arrow function export
  - [ ] 3.2: Import `getConsentState`, `setConsentState`, `initializeDefaultConsent` from `../utils/analytics`
  - [ ] 3.3: On mount (`useEffect`), call `initializeDefaultConsent()` to set Google Consent Mode v2 defaults. Then check `getConsentState()` — if `'pending'`, show the banner. If `'granted'` or `'denied'`, hide the banner (returning visitor with existing preference)
  - [ ] 3.4: Manage visibility with `useState<boolean>` — `showBanner` defaults to `false`, set to `true` only if consent is `'pending'` after the mount check
  - [ ] 3.5: Banner content:
    - Heading: "We value your privacy" (use `<h2>` or visually styled `<p>` — not `<h1>` since the page already has one)
    - Description: "We use cookies to analyze site traffic and improve your experience. No health information is collected through cookies."
    - Two buttons: "Accept" and "Decline" (or "Accept Analytics" / "Decline")
  - [ ] 3.6: "Accept" button click: call `setConsentState('granted')`, set `showBanner` to `false`
  - [ ] 3.7: "Decline" button click: call `setConsentState('denied')`, set `showBanner` to `false`
  - [ ] 3.8: If `showBanner` is `false`, render `null` — no DOM output
  - [ ] 3.9: **Positioning:** Fixed to the bottom of the viewport. Use `position: fixed; bottom: 0; left: 0; right: 0; z-index: 100`. Background: `var(--dark)` or `var(--blue)` with `color: var(--white)` for contrast. Add a subtle box-shadow for visual separation
  - [ ] 3.10: **Layout:** Centered content with `.wrap` max-width. Horizontal layout on desktop (text on left, buttons on right). Stacked vertically on mobile (< 900px) with full-width buttons

- [ ] **Task 4: Cookie consent banner accessibility** (AC: #7)
  - [ ] 4.1: Wrap the banner in a `<div role="dialog" aria-label="Cookie consent" aria-modal="false">` — it is a non-modal dialog (the page is still usable behind it)
  - [ ] 4.2: Both buttons must be `<button>` elements — never `<div onClick>`
  - [ ] 4.3: Buttons must have minimum 44x44px touch target on mobile
  - [ ] 4.4: All text must meet WCAG AA contrast ratios (4.5:1 for normal text on the banner background)
  - [ ] 4.5: Banner must be keyboard navigable — Tab reaches both buttons, Enter/Space activates them
  - [ ] 4.6: On banner appearance, move focus to the banner container (or first button) so keyboard users are aware of it. Use `useRef` and `useEffect` to focus after render
  - [ ] 4.7: Ensure the banner does not trap focus — users can Tab past it to the page content
  - [ ] 4.8: Respect `prefers-reduced-motion` for any banner entrance animation (slide-up or fade-in)

- [ ] **Task 5: Wire CookieConsent into the app** (AC: #1, #2, #5, #6, #8)
  - [ ] 5.1: Render `<CookieConsent />` in `App.tsx` or `PageLayout.tsx` — it should appear on every page but outside the main content flow (fixed positioned, so placement in the component tree doesn't affect layout)
  - [ ] 5.2: In the app initialization (e.g., a `useEffect` in `App.tsx` or `PageLayout.tsx`), after consent is determined:
    - Get the current pathname
    - Determine the tracking zone via `getTrackingZone(pathname)`
    - If zone is `'zone1'` and consent is `'granted'`, call `initializeGA4('zone1')`
    - If zone is `'zone2'`, do nothing — zero scripts
  - [ ] 5.3: On route changes (new page navigation), re-check the zone for the new pathname. If navigating from a Zone 1 to Zone 2 page in the future, analytics should not fire page views on Zone 2 pages. For MVP, all pages are Zone 1, but the architecture must support Zone 2
  - [ ] 5.4: Use `useLocation()` from React Router to detect route changes and update analytics accordingly

- [ ] **Task 6: Verify compilation and behavior** (AC: all)
  - [ ] 6.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 6.2: Run `npm run dev` — visit the site, cookie consent banner appears on first visit
  - [ ] 6.3: Click "Accept" — banner disappears, `localStorage.getItem('ss_consent')` returns `'granted'`, GA4 script loads (verify in Network tab)
  - [ ] 6.4: Refresh the page — banner does NOT reappear (stored consent respected)
  - [ ] 6.5: Clear localStorage, refresh — banner reappears
  - [ ] 6.6: Click "Decline" — banner disappears, `localStorage.getItem('ss_consent')` returns `'denied'`, NO GA4 script loads
  - [ ] 6.7: Verify no analytics scripts load before any user action (check Network tab on fresh visit with cleared storage)
  - [ ] 6.8: Keyboard test: Tab to Accept button, press Enter — banner closes and consent is granted
  - [ ] 6.9: Check at 320px viewport — banner content readable, buttons tappable, no overflow

## Dev Notes

### Critical Context

**The two-zone tracking model is a compliance requirement, not a nice-to-have.** FR34 mandates zero marketing tracking pixels on pages where users submit health information. While no Zone 2 pages exist in the MVP (insurance form is deferred), the architecture MUST support Zone 2 from day one. When health forms are added in the future, the zone check must prevent ANY analytics scripts from loading — not just GA4 page views, but the entire GTM script.

**Google Consent Mode v2 integration:** Google requires that consent defaults are set BEFORE the GTM/GA4 script loads. The flow is:
1. Page loads → `initializeDefaultConsent()` sets `analytics_storage: 'denied'`, `ad_storage: 'denied'`
2. User clicks Accept → `updateGoogleConsent('granted')` signals the consent update
3. GA4 script loads via `/api/gtm` proxy
4. GA4 begins collecting data with consent mode flags

If the user declines, the GA4 script never loads. Google Consent Mode v2 still records a "consent denied" signal in the dataLayer, which Google uses for modeled conversions.

**What exists:** PageLayout renders the shared shell. The `api/` directory supports serverless functions. Environment variables `VITE_GA4_ID` and `VITE_GTM_ID` are defined in `.env.example` (Story 1.1).

> **Client-side environment variable clarification:** Use `VITE_GA4_ID` (not `VITE_GTM_ID`) for the GA4 measurement ID in client-side code. `VITE_GTM_ID` is a legacy naming artifact; the actual value is a GA4 measurement ID (e.g., `G-XXXXXXXXXX`). Client code should reference `import.meta.env.VITE_GA4_ID`.

**What to build:** Three new files — `src/utils/analytics.ts` (consent + GA4 loading), `api/gtm.ts` (server-side GTM proxy), and `src/components/CookieConsent.tsx` (consent banner UI). Plus wiring into the app initialization.

**localStorage key:** Use `ss_consent` (short for Silver State consent) — not a descriptive name like `cookieConsent` that might conflict with third-party libraries. The stored value is either `'granted'` or `'denied'` — never any PHI (NFR9).

### Architecture Compliance

- **Component export:** `export default function CookieConsent()` — named function, default export
- **Styling:** CSS tokens + inline styles only. Banner background uses `var(--dark)` or `var(--blue)`, text uses `var(--white)`
- **No CSS modules, Tailwind, or styled-components**
- **Utils are pure functions:** `analytics.ts` contains no React imports — it's a pure utility module. The React-specific wiring happens in `CookieConsent.tsx` and `App.tsx`/`PageLayout.tsx`
- **Serverless function:** `api/gtm.ts` at project root — Vercel convention
- **Environment variables:** `VITE_GA4_ID` accessed via `import.meta.env.VITE_GA4_ID` in client code for the GA4 measurement ID. In the serverless function (`api/gtm.ts`), use `process.env.GA4_ID` (server-side, no VITE_ prefix). Do not use `VITE_GTM_ID` in client code — use `VITE_GA4_ID` instead
- **No PHI in localStorage:** The consent value (`'granted'`/`'denied'`) is not PHI. Never store any user data alongside it
- **900px breakpoint** for banner responsive layout

### Dependencies

**Depends on (must be completed first):**
- Story 1.1: Production project with environment variables
- Story 1.7: PageLayout or App.tsx where CookieConsent is rendered
- Story 1.8: Route configuration (pathname-based zone detection)
- Story 1.11: Vercel deployment (serverless function support for `api/gtm.ts`)

**Produces for later stories:**
- Story 9.2 (CTM Integration) — CTM is separate from GA4 consent. CTM loads independently based on its own logic. However, the consent infrastructure in `analytics.ts` provides a pattern for conditional script loading
- All content pages (Epics 2-8) — GA4 analytics fires page views on these Zone 1 pages after consent

**Cross-cutting impact:**
- CookieConsent renders on EVERY page (via PageLayout or App.tsx)
- `analytics.ts` zone check affects every route
- The `api/gtm.ts` proxy is a shared endpoint

### Anti-Patterns to AVOID

1. **DO NOT** load GA4 or GTM scripts before the user explicitly opts in — NFR12 requires opt-in before non-essential scripts
2. **DO NOT** load ANY analytics scripts on Zone 2 pages, even if the user has consented — FR34 is absolute
3. **DO NOT** store PHI in localStorage — the consent key stores only `'granted'` or `'denied'`
4. **DO NOT** use a third-party cookie consent library (e.g., CookieBot, OneTrust) — the Architecture specifies a custom lightweight banner
5. **DO NOT** use `document.cookie` for consent storage — use `localStorage` per Architecture decision
6. **DO NOT** use `ad_storage: 'granted'` — Silver State does not use Google Ads remarketing. Always set `ad_storage: 'denied'`
7. **DO NOT** render the banner as a modal that blocks the page — it should be a fixed footer bar that the user can scroll past
8. **DO NOT** use `<div onClick>` for consent buttons — use `<button>` elements
9. **DO NOT** hardcode the GA4 measurement ID — use `import.meta.env.VITE_GA4_ID`
10. **DO NOT** use arrow function default export for the component
11. **DO NOT** skip the `initializeDefaultConsent()` call on page load — Google Consent Mode v2 requires defaults set before GTM loads
12. **DO NOT** forget to handle the case where localStorage is unavailable (e.g., private browsing with storage disabled) — gracefully default to `'pending'` and show the banner, but do not crash
13. **DO NOT** create a barrel file in `src/components/`
14. **DO NOT** use `--muted` color for banner text — must meet 4.5:1 contrast ratio

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Analytics-and-Compliance] — GA4 with server-side GTM, two-zone tracking model, cookie consent with Google Consent Mode v2
- [Source: _bmad-output/planning-artifacts/architecture.md#Tracking-Zone-Boundary] — Zone 1 (informational) vs Zone 2 (health forms)
- [Source: _bmad-output/planning-artifacts/architecture.md#External-Integration-Boundaries] — GA4/GTM loaded by CookieConsent + zone config
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] — VITE_GA4_ID, VITE_GTM_ID
- [Source: _bmad-output/planning-artifacts/architecture.md#Hosting-and-Deployment] — Vercel serverless function for GTM proxy
- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.1] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR32] — cookie consent with opt-in for non-essential tracking
- [Source: _bmad-output/planning-artifacts/prd.md#FR34] — zero marketing tracking pixels on health form pages
- [Source: _bmad-output/planning-artifacts/prd.md#NFR9] — zero client-side PHI storage
- [Source: _bmad-output/planning-artifacts/prd.md#NFR12] — cookie consent blocks non-essential scripts until opt-in
- Google Consent Mode v2 documentation: https://developers.google.com/tag-platform/security/guides/consent

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
