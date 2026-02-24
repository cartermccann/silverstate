# Story Validation Report — Full Deep Audit

> **Generated:** 2026-02-23
> **Scope:** All 33 implementation stories across 9 epics
> **Method:** Cross-referenced against architecture.md, epics.md, design-system-reference.md, mockup source code, and inter-story consistency

---

## Executive Summary

| Severity | Count |
|----------|-------|
| **CRITICAL** (must fix before implementation) | 8 |
| **IMPORTANT** (fix before or during implementation) | 16 |
| **MINOR** (informational, low risk) | 14 |
| **Total Issues** | 38 |

**Verdict:** Stories are well-structured and comprehensive, but 8 critical cross-cutting issues need resolution before any development begins. Most critical issues are naming inconsistencies and architectural ambiguities that would cause cascading confusion across multiple stories.

---

## CRITICAL ISSUES (Must Fix Before Implementation)

### C1. React Router v7: `app/` vs `src/` Directory Ambiguity
**Stories affected:** 1.1, 1.7, 1.8
**Problem:** React Router v7 framework mode expects an `app/` directory structure (`app/routes/`, `app/root.tsx`), but the architecture doc and all stories reference `src/` as the source directory. Story 1.1 describes migrating mockup code into `src/`, but if React Router v7 framework mode is used, the directory should be `app/`.
**Resolution needed:** Decide definitively: (a) Use React Router v7 **library mode** with `src/` directory (SPA pattern), or (b) Use framework mode with `app/` directory and update all 33 stories. Library mode is simpler and matches the current architecture doc.

### C2. `React.lazy()` vs Framework Mode Code Splitting
**Stories affected:** 1.1, 1.8
**Problem:** Story 1.8 says "Configure route-based code splitting with `React.lazy`" but React Router v7 framework mode uses file-based route imports that are automatically lazy-loaded. These are contradictory approaches.
**Resolution needed:** Same decision as C1 — if library mode, `React.lazy()` is correct. If framework mode, use file-based route config.

### C3. `generateMeta` vs `generatePageMeta` Naming Inconsistency
**Stories affected:** 1.8, 2.1, 2.3, 3.2, 3.3, 4.2, 4.3, 4.4, 5.1, 5.2, 6.1, 6.2, 7.1, 7.2, 8.1, 8.2
**Problem:** Story 1.8 defines the function as `generateMeta()` in `utils/meta.ts`. Stories 2.3, 3.2, 3.3 reference `generatePageMeta()`. Other stories reference `generateMeta()`. This naming split across ~16 stories will cause import errors.
**Resolution needed:** Pick one name (`generateMeta` recommended — matches Story 1.8 which creates it) and update all story files.

### C4. `NavLink` vs `NavLinkItem` Type Name Conflict
**Stories affected:** 1.2, 1.3
**Problem:** Story 1.2 defines a `NavLink` interface in `types.ts`. Story 1.3 also references `NavLink` but with potentially different fields. The existing mockup uses `NavLinkItem` in `types.ts`. Using `NavLink` conflicts with React Router's built-in `NavLink` component import.
**Resolution needed:** Rename the data type to `NavLinkItem` (matching the mockup) to avoid collision with React Router's `NavLink` component.

### C5. React Router Import Path: `react-router-dom` vs `react-router`
**Stories affected:** 1.3, 1.4, 1.6, 1.7, 1.8, 2.1, and all page stories
**Problem:** Some stories import from `'react-router-dom'` (v6 pattern), others from `'react-router'` (v7 pattern). React Router v7 uses `'react-router'` as the import path.
**Resolution needed:** Standardize all imports to `'react-router'` (v7 pattern) across all stories.

### C6. Build Script `build` Command Conflict
**Stories affected:** 1.9, 1.11
**Problem:** Story 1.9 defines `"build": "validate:content && validate:schema && generate:sitemap && tsc --noEmit && vite build"` (with sitemap). Story 1.11 defines `"build": "validate:content && validate:schema && tsc --noEmit && vite build"` (without sitemap). The CI pipeline in Story 1.11 would skip sitemap generation, violating NFR25.
**Resolution needed:** Story 1.11's build command must include `generate:sitemap`.

### C7. E2E Tests Run Against Dev Server, Not Built Output
**Stories affected:** 1.10, 1.11
**Problem:** Playwright config (Story 1.10) uses `webServer.command: 'npm run dev'` which starts the dev server. In CI (Story 1.11), E2E tests should run against the production build (`npm run preview`). Testing against the dev server doesn't validate pre-rendered HTML, build artifacts, or production performance.
**Resolution needed:** Add a CI-specific Playwright webServer command that uses `npm run preview` to serve the built output.

### C8. GTM vs GA4 Confusion in Server-Side Proxy
**Stories affected:** 9.1
**Problem:** The architecture doc specifies both `VITE_GA4_ID` and `VITE_GTM_ID` as separate env vars, and `api/gtm.ts` as a "Server-side GTM proxy." But Story 9.1's implementation actually proxies the GA4 gtag.js script (`googletagmanager.com/gtag/js?id={GA4_ID}`), not a full GTM container. The file is named `gtm.ts` but proxies GA4.
**Resolution needed:** Clarify whether this is (a) a true server-side GTM container or (b) a first-party proxy for GA4 script. Rename file and env vars accordingly.

---

## IMPORTANT ISSUES (Fix Before or During Implementation)

### I1. Accreditation Data Conflict: HIPAA vs NAATP
**Stories affected:** 1.2, 1.5
**Problem:** The mockup's TrustBadges data shows "HIPAA Compliant" as one badge, but Story 1.5 references "NAATP Member." These are different badges — which should be in `data/common.ts`?
**Resolution:** Verify the client's actual accreditations and standardize across all stories.

### I2. `homepage.ts` Data File Not in Architecture Doc
**Stories affected:** 2.1, 2.2, 2.3
**Problem:** The architecture doc's directory structure lists data files: `common.ts`, `programs.ts`, `conditions.ts`, `insurance.ts`, `locations.ts`, `about.ts`, `admissions.ts`, `therapies.ts`. No `homepage.ts`. Story 2.1 creates it.
**Resolution:** Add `homepage.ts` to the architecture doc's data file list, or merge homepage data into `common.ts`.

### I3. Dr. Russ Park Title/Credentials Inconsistency
**Stories affected:** 2.2, 6.1
**Problem:** Mockup says "Executive Director" with "Advanced Nurse Executive" credentials. Story 6.1 says "Medical Director, Psychiatrist." Story 2.2 says "DNP." These are significantly different professional roles.
**Resolution:** Verify the correct title and credentials with the client.

### I4. CtaBand Content Hardcoded vs Data-Driven
**Stories affected:** 1.5, architecture.md
**Problem:** Architecture says "All user-facing content from data files, not hardcoded." Story 1.5 hardcodes CtaBand headline and body text directly in the component.
**Resolution:** Extract CtaBand content to `data/common.ts` or accept it as component-scoped content with a documented exception.

### I5. Content Validation Script Assumes All Data Files Exist
**Stories affected:** 1.9
**Problem:** `validate-content.ts` tries to validate ALL data files (`programs.ts`, `conditions.ts`, etc.) but these files are created in Epics 3-8. Running validation before those epics will fail.
**Resolution:** Add graceful handling for missing data files — skip validation with a warning if a data file doesn't exist yet.

### I6. `lint` and `format` Script Scope Conflicts
**Stories affected:** 1.10, 1.11
**Problem:** Story 1.10: `"lint": "eslint src/ --ext .ts,.tsx"` / Story 1.11: `"lint": "eslint ."`. Story 1.10: `"format": "prettier --write \"src/**/*.{ts,tsx,css}\""` / Story 1.11: `"format": "prettier --write ."`.
**Resolution:** Standardize scope. Recommend Story 1.11's broader scope (`.`) since `.eslintignore` and `.prettierignore` handle exclusions.

### I7. PageLayout Route Wiring Ownership Duplicated
**Stories affected:** 1.7, 1.8
**Problem:** Story 1.7 Task 6 says "Wire PageLayout into route configuration." Story 1.8 Task 3.4 says "Group routes under a root layout route that uses PageLayout." Both claim responsibility.
**Resolution:** Story 1.7 creates PageLayout component. Story 1.8 wires it into routes. Remove Task 6 from Story 1.7 or mark it as "verify 1.8 integration."

### I8. `WebPage` JSON-LD Type Missing from Story 1.8
**Stories affected:** 1.8, 1.12
**Problem:** Story 1.8 creates 7 JSON-LD generators but doesn't include `WebPage`. Story 1.12 needs `generateWebPage()` for the Privacy page.
**Resolution:** Either add `WebPage` to Story 1.8's generator list, or explicitly note in Story 1.12 that it must create the function.

### I9. Address Inconsistency Across Mockup and Stories -- RESOLVED
**Stories affected:** 1.2, 1.4, 1.8, 7.1
**Problem:** Mockup Footer shows "8225 W Robindale Rd, Las Vegas, NV 89113." Story 1.8 schema examples showed "2180 S. 6th Street, Las Vegas, NV 89104."
**Resolution:** RESOLVED. The correct address is **8225 W Robindale Rd, Las Vegas, NV 89113** (confirmed from live site). All story files have been updated. `data/common.ts` will use this address as the single source of truth.

### I10. FaqItem Sample Test Uses Wrong Prop Interface
**Stories affected:** 1.10
**Problem:** Story 1.10's sample test uses `{ question: '...', answer: '...' }` but the actual FaqItem component uses `{ q, a, isOpen, onToggle }` props. FaqItem is a controlled component — the test won't work.
**Resolution:** Update the sample test to use correct props: `q`, `a`, `isOpen`, `onToggle`.

### I11. `AdmissionsStep` vs `AdmissionStep` Naming
**Stories affected:** 1.2, 8.1
**Problem:** Mockup `types.ts` defines `AdmissionStep` (singular). Story 8.1 references `AdmissionsStep` (plural) in multiple places.
**Resolution:** Use the existing `AdmissionStep` name consistently across all stories.

### I12. Missing Breadcrumb `handle` Export on Condition Pages
**Stories affected:** 4.2, 4.3, 4.4
**Problem:** Architecture specifies breadcrumb via route `handle` export. Condition page stories don't mention exporting `handle` with breadcrumb data.
**Resolution:** Add `handle` export with breadcrumb configuration to condition page story tasks.

### I13. CTM Cookie Consent Decision Unresolved
**Stories affected:** 9.2
**Problem:** CTM typically sets cookies for session tracking. Story says "CTM is independent of cookie consent" but also says "if CTM sets any cookies, it should be gated behind consent." If CTM sets cookies, loading without consent violates NFR12.
**Resolution:** Research whether CTM sets cookies. If yes, gate behind consent like GA4. If no, document the decision.

### I14. Data Lookup Pattern Inconsistency (Template Stories)
**Stories affected:** 5.2, 7.2
**Problem:** Insurance pages use `getInsuranceBySlug()` helper. Location pages use `locations.find()` inline. Both follow the same template+wrapper pattern.
**Resolution:** Add `getLocationBySlug()` to `locations.ts` for consistency.

### I15. FR Coverage Gaps in FR Lists
**Stories affected:** 6.1, 6.2, 7.1
**Problem:** FR16 missing from 6.1 FR list. FR15 missing from 6.2 FR list. FR5 and FR23 missing from 7.1 FR list. The requirements ARE addressed in the tasks, just not listed in the FR coverage section.
**Resolution:** Add missing FRs to the coverage lists in each story.

### I16. `ConditionData` Missing `metaTitle` Field
**Stories affected:** 4.1, 4.2
**Problem:** `ProgramPageData` includes `metaTitle` and `metaDescription`. `ConditionData` is missing `metaTitle` — condition pages need it for SEO meta generation.
**Resolution:** Add `metaTitle` and `metaDescription` to the `ConditionData` interface.

---

## MINOR ISSUES (Informational, Low Risk)

### M1. `privacy.ts` data file not in architecture doc (Story 1.12)
### M2. `NotFoundContent` type is UI-specific, not a content data type (Story 1.12)
### M3. 404 page HTTP status implementation uncertain — headers vs loader throw (Story 1.12)
### M4. Footer privacy link may not exist in mockup (Story 1.12)
### M5. ESLint v8 may not be installable in 2026 (Story 1.10)
### M6. `toJsonLdString` vs `toJsonLdScript` naming inconsistency in Story 1.8
### M7. Sitemap priority values don't account for `/about/our-team` as a primary page (Story 1.9)
### M8. `web-vitals` npm package is a new dependency not in locked versions table (Story 9.2)
### M9. No consent modification UI after initial cookie choice (Story 9.1)
### M10. `window.gtag`/`window.dataLayer` TypeScript augmentation not mentioned (Story 9.1)
### M11. New interfaces not in architecture doc: `KeyDifferentiator`, `AboutPageData`, `EducationalOrganization` (Stories 6.1, 6.2)
### M12. Data duplication risk between `homepage.ts` and content-area files (Stories 2.1-2.3)
### M13. Meta title length contradiction — "under 60 chars" vs full site name suffix (Story 2.3)
### M14. Story 1.6 creates component tests but Story 1.10 sets up test infrastructure (dependency timing)

---

## CROSS-STORY CONFLICT MATRIX

| Conflict | Stories | Winner |
|----------|---------|--------|
| `build` script command | 1.9 vs 1.11 | 1.9 (include sitemap) |
| `lint`/`format` scope | 1.10 vs 1.11 | 1.11 (broader scope with ignore files) |
| PageLayout wiring ownership | 1.7 vs 1.8 | 1.8 (creates routes, wires layout) |
| `generateMeta` function name | 1.8 vs 2.3/3.2/3.3 | 1.8 (`generateMeta`) |
| `NavLink` type name | 1.2 vs mockup | mockup (`NavLinkItem`) |
| React Router import path | mixed | `'react-router'` (v7 standard) |
| Dr. Russ Park credentials | 2.2 vs 6.1 vs mockup | Needs client verification |
| Address | mockup vs 1.8 | Needs client verification |
| FaqItem test props | 1.10 vs design system | Design system (`q`, `a`, `isOpen`, `onToggle`) |
| Data lookup pattern | 5.2 vs 7.2 | 5.2 (`getBySlug()` helper pattern) |
| Non-null assertion guidance | 5.2 vs 7.2 | Add guard clause, don't use `!` |

---

## WHAT'S EXCELLENT

The stories are remarkably thorough overall. Highlights:

1. **Anti-pattern lists** — Every story has 10-15 anti-patterns that prevent common mistakes
2. **HIPAA/privacy handling** — Stories 8.2 and 9.1 are meticulous about PHI, consent, and data flow
3. **Accessibility** — Every story addresses WCAG requirements with specific tasks
4. **Template+wrapper pattern** — Consistently applied across insurance, conditions, and locations
5. **Phone number centralization** — All stories enforce `site.phone`/`site.phoneTel` from `data/common.ts`
6. **Responsive design** — 900px breakpoint consistently specified with specific mobile behaviors
7. **Design system compliance** — CSS tokens, inline styles, component prop interfaces all well-documented
8. **Cross-story data flow** — Data files correctly anticipate downstream story needs
9. **Dev notes context** — Rich background information helps implementing agents understand "why"

---

## RECOMMENDED FIX ORDER

1. **Resolve C1/C2 first** — React Router mode decision affects all 33 stories
2. **Fix C3-C5** — Naming inconsistencies are simple find-and-replace across stories
3. **Fix C6-C7** — Build/CI pipeline issues
4. **Clarify C8** — GTM vs GA4 naming
5. **Verify I1, I3, I9** — Client data (accreditations, credentials, address)
6. **Fix I2, I4-I16** — Story content updates
7. **Note M1-M14** — Address during implementation as encountered
