# Story 9.2: CTM Integration & Performance Monitoring

Status: ready-for-dev

## Story

As a **Comcreate team member**,
I want call tracking attribution and Core Web Vitals monitoring,
So that we can measure which pages drive calls and ensure performance targets are met.

**Dependencies:** Story 1.1 (production project), Story 1.3 (Nav component — phone CTA), Story 1.5 (CtaBand component — phone CTA), Story 1.7 (PageLayout — where CTM script loads), Story 9.1 (analytics utility pattern in `utils/analytics.ts` — consent-aware script loading)

**FRs covered:** FR21, FR48, NFR23

## Acceptance Criteria

1. **Given** a CTM (Call Tracking Metrics) account is active, **When** CTM integration is implemented, **Then** `utils/ctm.ts` implements dynamic number insertion on all phone CTAs across the site (FR21)
2. **And** the CTM script loads asynchronously without blocking page render or impacting LCP (NFR23)
3. **And** each page's phone CTA attributes the call source and originating page URL — CTM replaces the static phone number with a tracking number that maps back to the page (FR21)
4. **And** all phone CTAs across Nav, CtaBand, and page-level CTAs use CTM dynamic number insertion — no phone CTA is missed
5. **And** Core Web Vitals (LCP, CLS, INP) are tracked and reportable via the web-vitals library (FR48)
6. **And** performance metrics are sent to GA4 (if consent granted) or logged for monitoring

## Tasks / Subtasks

- [ ] **Task 1: Create `src/utils/ctm.ts` — CTM dynamic number insertion** (AC: #1, #3, #4)
  - [ ] 1.1: Define a `CTMConfig` interface with `accountId: string` and `phoneNumber: string` (the original static number that CTM will replace)
  - [ ] 1.2: Implement `loadCTMScript(): void` — dynamically injects the CTM JavaScript snippet into the page. The script should be loaded asynchronously (`async` attribute) to avoid blocking page render. Use the CTM account ID from `import.meta.env.VITE_CTM_ID`
  - [ ] 1.3: The CTM script URL pattern is typically: `https://ACCOUNT_ID.tctm.co/t.js` or the CTM-provided script URL. Use a configurable base URL with the account ID. Add a comment noting the actual URL pattern should be confirmed with the CTM account setup
  - [ ] 1.4: Implement `initializeCTM(): void` — loads the CTM script and registers the dynamic number insertion. CTM's DNI (Dynamic Number Insertion) works by scanning the page for phone numbers matching the source number and replacing them with tracking numbers. This happens automatically once the CTM script loads
  - [ ] 1.5: Implement `replaceCTMNumber(element: HTMLElement): void` — an optional manual trigger for CTM to re-scan a specific element. Useful after React re-renders that might inject new phone number elements. Calls `_ctm.replace(element)` or equivalent CTM API if available
  - [ ] 1.6: Guard all CTM calls with `typeof window !== 'undefined'` checks for SSR/pre-rendering safety
  - [ ] 1.7: If `VITE_CTM_ID` is not set (local development), skip script loading and log a debug message. Do NOT crash the app
  - [ ] 1.8: Export: `loadCTMScript`, `initializeCTM`, `replaceCTMNumber`

- [ ] **Task 2: Wire CTM into PageLayout or App initialization** (AC: #2, #4)
  - [ ] 2.1: In `PageLayout.tsx` (or `App.tsx`), call `initializeCTM()` on mount via `useEffect` — this loads the CTM script once for the entire app
  - [ ] 2.2: The CTM script must load AFTER the initial page render to avoid blocking LCP (NFR23). Use a `requestIdleCallback` or `setTimeout` with a small delay (e.g., 100ms) to ensure the page is interactive before loading the external script
  - [ ] 2.3: On route changes (when the user navigates to a new page), CTM needs to re-scan the DOM for new phone number elements. Use `useLocation()` from React Router to detect navigation and trigger a re-scan via `replaceCTMNumber()` on the document body or the main content area
  - [ ] 2.4: **CTM Consent Decision:** For HIPAA safety, **default to gating CTM behind cookie consent** until the team confirms CTM's cookie behavior. Treat CTM as a non-essential script (like GA4) and only load it after the user grants consent. If the team later confirms CTM does NOT set cookies, this gate can be removed. Implementation: Check `getConsentStatus() === 'granted'` before calling `initializeCTM()`. This aligns with NFR12 ('Cookie consent mechanism blocks non-essential scripts until user opts in')

- [ ] **Task 3: Ensure all phone CTAs are CTM-compatible** (AC: #4)
  - [ ] 3.1: CTM's dynamic number insertion works by finding phone numbers in the DOM that match the configured source number. All phone CTAs must render the SAME phone number string that CTM is configured to replace. Verify that Nav, CtaBand, and all page-level CTAs use `site.phone` and `site.phoneTel` from `data/common.ts`
  - [ ] 3.2: Phone CTA elements must use `<a href="tel:...">` with the phone number visible in text content — CTM needs visible text to find and replace. Icon-only phone CTAs (e.g., on very small mobile screens where the phone text is hidden) should still have the phone number in an `aria-label` or visually hidden `<span>` for CTM to detect
  - [ ] 3.3: Verify these components render CTM-compatible phone CTAs:
    - `src/components/Nav.tsx` — header phone CTA (Story 1.3)
    - `src/components/CtaBand.tsx` — full-width CTA band (Story 1.5)
    - `src/components/Footer.tsx` — footer phone CTA (Story 1.4)
    - `src/pages/admissions/Process.tsx` — admissions phone CTA (Story 8.1)
    - `src/pages/Contact.tsx` — contact page phone CTA (Story 8.2)
    - Any other page-level phone CTAs added by Epics 2-8
  - [ ] 3.4: If any phone CTA does not use `site.phone`/`site.phoneTel`, update it. All phone numbers must come from `data/common.ts` to ensure CTM has a single source number to match

- [ ] **Task 4: Install and configure web-vitals library** (AC: #5, #6)
  - [ ] 4.1: Install the `web-vitals` npm package: `npm install web-vitals`
  - [ ] 4.2: **File Separation:** Create `src/utils/performance.ts` for Core Web Vitals monitoring. Do NOT mix CWV logic into `utils/ctm.ts`. CTM handles call tracking; `performance.ts` handles web-vitals metrics. This maintains separation of concerns per the architecture's utility file conventions
  - [ ] 4.3: Import `onLCP`, `onCLS`, `onINP` from `web-vitals`
  - [ ] 4.4: Implement `initializePerformanceMonitoring(): void`:
    - Call `onLCP(sendToAnalytics)`
    - Call `onCLS(sendToAnalytics)`
    - Call `onINP(sendToAnalytics)`
  - [ ] 4.5: Implement `sendToAnalytics(metric: Metric): void` — the callback that receives each Core Web Vitals metric. The function should:
    - If GA4 is loaded and consent is granted, send the metric as a GA4 custom event via `gtag('event', metric.name, { value: metric.value, metric_id: metric.id, metric_rating: metric.rating })`
    - If GA4 is NOT loaded (consent denied or Zone 2), log the metric to `console.debug` for development visibility
    - Include the page pathname in the event data for per-page performance tracking
  - [ ] 4.6: Call `initializePerformanceMonitoring()` in `App.tsx` or `PageLayout.tsx` on mount — this should run regardless of consent state, since web-vitals is a client-side measurement library that does not set cookies or send data to external services on its own. The data is only forwarded if GA4 consent is granted

- [ ] **Task 5: Verify CTM script loading does not block LCP** (AC: #2)
  - [ ] 5.1: The CTM script must have `async` attribute when injected into the DOM
  - [ ] 5.2: Verify that the CTM script is NOT in the critical rendering path — it should load AFTER the page's LCP element has rendered
  - [ ] 5.3: Use Chrome DevTools Performance tab to verify: LCP occurs before CTM script load/execute
  - [ ] 5.4: If CTM script adds to CLS (layout shift from number replacement), investigate solutions:
    - Reserve consistent element dimensions for phone number display
    - Use a `min-width` on phone CTA elements to prevent layout shift when the number changes
    - The replacement should be visually seamless since all numbers are similar length

- [ ] **Task 6: Verify compilation and behavior** (AC: all)
  - [ ] 6.1: Run `npx tsc --noEmit` — zero TypeScript errors
  - [ ] 6.2: Run `npm run dev` — site loads, CTM initialization runs (or logs debug message if `VITE_CTM_ID` is not set)
  - [ ] 6.3: With `VITE_CTM_ID` configured: verify the CTM script loads in the Network tab (async, after initial render)
  - [ ] 6.4: Verify phone numbers are replaced by CTM tracking numbers (requires an active CTM account — may not be testable in local dev without the account)
  - [ ] 6.5: Navigate between pages — verify CTM re-scans on route change (new tracking numbers for new page context)
  - [ ] 6.6: Open Chrome DevTools Console — verify Core Web Vitals metrics are logged (`console.debug` output)
  - [ ] 6.7: With GA4 consent granted (from Story 9.1), verify CWV events appear in GA4 debug view
  - [ ] 6.8: Run Lighthouse performance audit — verify LCP is not impacted by CTM script loading
  - [ ] 6.9: Check for CLS impact — verify no visible layout shift when CTM replaces phone numbers

## Dev Notes

### Critical Context

**CTM (Call Tracking Metrics) is the primary conversion measurement tool.** Every phone CTA on the site needs CTM dynamic number insertion to track which pages drive calls. This is how Comcreate proves ROI to Silver State — "X calls came from the anxiety treatment page, Y calls from the insurance hub."

**How CTM Dynamic Number Insertion (DNI) works:**
1. The site renders the static phone number `(725) 525-9897` in all CTAs
2. The CTM script loads asynchronously
3. CTM scans the DOM for elements containing the configured source phone number
4. CTM replaces the visible number with a unique tracking number assigned to that visitor session
5. When the visitor calls the tracking number, CTM attributes the call to the page they were on
6. The `tel:` href is also updated so click-to-call works with the tracking number

**What exists:** Phone CTAs are already in Nav (Story 1.3), CtaBand (Story 1.5), and Footer (Story 1.4). All use `site.phone` and `site.phoneTel` from `data/common.ts`. Page-level phone CTAs exist on Admissions (Story 8.1) and Contact (Story 8.2).

**What to build:** `src/utils/ctm.ts` (CTM helper), performance monitoring setup (web-vitals), and wiring into the app initialization. No new page components — this story modifies the initialization layer only.

**web-vitals library:** This is the official Google library for measuring Core Web Vitals in the field. It's lightweight (~1.5KB gzipped) and does NOT send data anywhere on its own — it just provides metric values via callbacks. We choose where to send them (GA4 or console).

**CLS concern with number replacement:** When CTM replaces a phone number, the replacement number is typically the same length (10 digits formatted). However, if CTM uses a different format or adds characters, it could cause a small layout shift. Mitigation: ensure phone CTA containers have consistent dimensions (min-width) so the content swap doesn't change layout.

### Architecture Compliance

- **Utils are pure functions:** `ctm.ts` contains no React imports — it's a utility module. React wiring happens in PageLayout/App.tsx
- **Environment variables:** `VITE_CTM_ID` accessed via `import.meta.env.VITE_CTM_ID` in client code
- **Phone numbers:** ALL phone CTAs must use `site.phone` / `site.phoneTel` from `data/common.ts` — CTM matches against this number
- **Script loading:** Async, non-blocking, after initial render — NFR23 is explicit about not impacting LCP
- **No new CSS patterns:** This story adds no visual components. CTM replaces text content transparently
- **npm package:** `web-vitals` is the only new npm dependency. Do not install CTM-specific npm packages — CTM integration is via their hosted script, not an npm module

### Dependencies

**Depends on (must be completed first):**
- Story 1.1: Production project with environment variables (`VITE_CTM_ID`)
- Story 1.3: Nav component with phone CTA using `site.phoneTel`
- Story 1.4: Footer component with phone CTA using `site.phoneTel`
- Story 1.5: CtaBand component with phone CTA using `site.phoneTel`
- Story 1.7: PageLayout — where CTM initialization is wired
- Story 9.1: `utils/analytics.ts` — provides the consent state check and GA4 reference for CWV event forwarding. The `gtag` function and dataLayer pattern are established by Story 9.1

**Produces for later stories:**
- No stories depend on this one directly — it is a leaf story in the dependency graph
- However, all future pages with phone CTAs automatically get CTM tracking if they use `site.phoneTel`

**Cross-cutting impact:**
- CTM affects every component that renders a phone number
- web-vitals affects every page (performance metrics are collected globally)

### Anti-Patterns to AVOID

1. **DO NOT** load the CTM script synchronously or in the `<head>` — it must be async and loaded after initial render (NFR23)
2. **DO NOT** hardcode phone numbers in any component — CTM only works if all CTAs use the same source number from `data/common.ts`
3. **DO NOT** load CTM without cookie consent — default to gating CTM behind consent until the team confirms CTM's cookie behavior (see Task 2.4). Check `getConsentStatus() === 'granted'` before calling `initializeCTM()`
4. **DO NOT** install a CTM npm package — use their hosted script via dynamic injection
5. **DO NOT** block page render while waiting for CTM to load or replace numbers
6. **DO NOT** use `document.write()` to inject the CTM script — use `document.createElement('script')` with `async: true`
7. **DO NOT** forget to re-scan on React Router navigation — SPA page changes don't trigger script reload, so CTM needs a manual re-scan trigger
8. **DO NOT** send Core Web Vitals data to GA4 if consent is not granted — check consent state before forwarding metrics
9. **DO NOT** use `window.onload` to initialize CTM — use React lifecycle (`useEffect`) with idle callback
10. **DO NOT** create a visual component for CTM — it is invisible infrastructure. No new UI elements
11. **DO NOT** skip the `VITE_CTM_ID` guard — local development without the env var must not crash
12. **DO NOT** use `--muted` color anywhere in this story (no visual components, but good to reinforce)

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#External-Integration-Boundaries] — CTM loaded in PageLayout, helper in utils/ctm.ts
- [Source: _bmad-output/planning-artifacts/architecture.md#Loading-and-Performance] — third-party scripts load conditionally, CTM non-blocking
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] — VITE_CTM_ID
- [Source: _bmad-output/planning-artifacts/architecture.md#Tracking-Zone-Boundary] — CTM is functional, not analytics (loads on all zones)
- [Source: _bmad-output/planning-artifacts/epics.md#Story-9.2] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR21] — CTM call tracking attribution on all phone CTAs
- [Source: _bmad-output/planning-artifacts/prd.md#FR48] — Core Web Vitals tracking and reporting
- [Source: _bmad-output/planning-artifacts/prd.md#NFR23] — CTM loads without blocking render or impacting LCP
- web-vitals library: https://github.com/GoogleChrome/web-vitals
- CTM Dynamic Number Insertion docs: https://www.calltrackingmetrics.com/support/dynamic-number-insertion/

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
