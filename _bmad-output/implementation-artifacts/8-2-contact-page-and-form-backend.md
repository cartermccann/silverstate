# Story 8.2: Contact Page & Form Backend

Status: ready-for-dev

## Story

As a **family member who wants to reach out but isn't ready to call**,
I want a contact page with a simple inquiry form,
So that I can submit my question or request without picking up the phone.

**Dependencies:** Story 1.1 (production project), Story 1.2 (shared data types, `site` in `data/common.ts`), Story 1.7 (PageLayout wrapper), Story 1.8 (SEO utilities — `utils/meta.ts`, `utils/schema.ts`), Story 1.11 (Vercel deployment — serverless function support)

**FRs covered:** FR5, FR17, FR20, FR35, FR36, FR40, NFR8, NFR9, NFR18

## Acceptance Criteria

1. **Given** the production project with Vercel deployment, **When** the contact page and form backend are built, **Then** the Contact page at `/contact` displays Silver State's contact information, address, and a general inquiry form (FR20)
2. **And** the form collects: name (required), email (required), phone (optional), and message (required) — no health information (FR20)
3. **And** `api/contact.ts` serverless function validates input, sanitizes data, and forwards via Resend email to the admissions team (NFR8)
4. **And** form inputs have associated `<label>` elements, error states are programmatically announced via `aria-live` regions, and required fields are indicated with both visual and programmatic markers (NFR18)
5. **And** the form does NOT collect any Protected Health Information — no diagnosis, medication, treatment history, or insurance fields (NFR9)
6. **And** a phone CTA is prominently displayed as the primary conversion path alongside the form (FR17)
7. **And** the page has unique SEO metadata (title, description, canonical URL), JSON-LD (LocalBusiness), and OG tags (FR35, FR36, FR40)
8. **And** internal links connect to admissions, programs, and insurance pages (FR5)
9. **And** the page is fully responsive and accessible across 320px, 768px, and 1024px+ viewports

## Tasks / Subtasks

- [ ] **Task 1: Create Contact page at `src/pages/Contact.tsx`** (AC: #1, #2, #4, #5, #6, #8, #9)
  - [ ] 1.1: Create the file at `src/pages/Contact.tsx` following the Architecture directory structure (Contact is a top-level page, not nested under a folder)
  - [ ] 1.2: Use `export default function Contact()` — not arrow function export
  - [ ] 1.3: Import `site` from `../data/common` for phone number, address, and contact info — never hardcode
  - [ ] 1.4: Render a page title as `<h1>` — e.g., "Contact Us" or "Get in Touch"
  - [ ] 1.5: Render Silver State's contact information section:
    - Address: use `site.address` from `data/common.ts`
    - Phone: `<a href={site.phoneTel}>{site.phone}</a>` with `aria-label="Call Silver State at {site.phone}"`
    - Hours: "Our admissions team is available 24/7"
  - [ ] 1.6: Render a prominent phone CTA section ABOVE the form — the phone call is the primary conversion path, the form is secondary. Use messaging like: "Need to talk now? Call us 24/7" with a large `.btn` styled `<a href={site.phoneTel}>` button
  - [ ] 1.7: Render the contact inquiry form (see Task 2 for form details)
  - [ ] 1.8: Render internal links section:
    - Admissions: `/admissions` — "Learn about our admissions process"
    - Programs: `/programs/residential-treatment` — "Explore our treatment programs"
    - Insurance: `/insurance` — "Check your insurance coverage"
  - [ ] 1.9: Use `<Link to="...">` from React Router for all internal navigation links

- [ ] **Task 2: Implement contact form with accessibility** (AC: #2, #4, #5)
  - [ ] 2.1: Create a `<form>` element with `onSubmit` handler that prevents default and calls the API
  - [ ] 2.2: Form fields with associated `<label>` elements (using `htmlFor` matching input `id`):
    - **Name** (required): `<input type="text" id="name" name="name" required aria-required="true" autocomplete="name">`
    - **Email** (required): `<input type="email" id="email" name="email" required aria-required="true" autocomplete="email">`
    - **Phone** (optional): `<input type="tel" id="phone" name="phone" autocomplete="tel">`
    - **Message** (required): `<textarea id="message" name="message" required aria-required="true" rows={5}>`
  - [ ] 2.3: Each `<label>` must visually indicate required fields (e.g., asterisk `*` with a note "* Required" at the top of the form)
  - [ ] 2.4: Add `aria-describedby` on each required input pointing to an error message `<span>` that is hidden when no error, shown on validation failure
  - [ ] 2.5: Error messages must be inside an `aria-live="polite"` region so screen readers announce them when they appear
  - [ ] 2.6: Client-side validation before submit:
    - Name: non-empty after trimming
    - Email: valid email format (use HTML5 `type="email"` validation + a basic regex check)
    - Message: non-empty after trimming, minimum 10 characters
    - Phone: if provided, basic format validation (digits, spaces, dashes, parentheses allowed)
  - [ ] 2.7: Submit button: `<button type="submit">Send Message</button>` with `.btn` class styling
  - [ ] 2.8: Add form state management with `useState`:
    - `formData`: `{ name: string, email: string, phone: string, message: string }`
    - `errors`: `{ name?: string, email?: string, message?: string, phone?: string }`
    - `status`: `'idle' | 'submitting' | 'success' | 'error'`
  - [ ] 2.9: On successful submit, show a success message: "Thank you! We'll be in touch soon. For immediate assistance, call {site.phone}."
  - [ ] 2.10: On error, show an error message: "Something went wrong. Please try again or call us at {site.phone}."
  - [ ] 2.11: Disable the submit button while `status === 'submitting'` to prevent double submission. Show loading text: "Sending..."
  - [ ] 2.12: **CRITICAL:** The form must NOT include any health-related fields — no diagnosis, symptoms, medications, insurance details, treatment history, or any field that could constitute PHI. This is a HIPAA compliance requirement (NFR9)
  - [ ] 2.13: Add a brief note above or below the form: "This form is for general inquiries only. Please do not include personal health information. For clinical questions, call us directly."

- [ ] **Task 3: Create `api/contact.ts` — Vercel serverless function** (AC: #3)
  - [ ] 3.1: Create the file at `api/contact.ts` in the project root `api/` directory (Vercel convention — serverless functions live at the project root, not inside `src/`)
  - [ ] 3.2: Export a default function handler that accepts a `Request` and returns a `Response` (Vercel Edge/Serverless function signature)
  - [ ] 3.3: Only accept POST method — return 405 Method Not Allowed for other methods
  - [ ] 3.4: Parse the request body as JSON
  - [ ] 3.5: **Server-side validation** (do not trust client-side validation):
    - `name`: string, non-empty after trimming, max 200 characters
    - `email`: string, valid email format (regex validation), max 254 characters
    - `phone`: string, optional — if provided, allow only digits, spaces, dashes, parentheses, plus sign, max 20 characters
    - `message`: string, non-empty after trimming, min 10 characters, max 5000 characters
  - [ ] 3.6: Return 400 Bad Request with descriptive error for validation failures
  - [ ] 3.7: **Input sanitization**: Strip HTML tags from all fields. Trim whitespace. Escape any special characters before including in the email body
  - [ ] 3.8: Send email via Resend API:
    - Use `RESEND_API_KEY` environment variable (server-side only — no `VITE_` prefix)
    - Send to `CONTACT_EMAIL` environment variable (e.g., `admissions@silverstatetreatment.com`)
    - From address: a verified Resend sender domain (e.g., `noreply@silverstatetreatment.com`)
    - Subject: "New Contact Inquiry from {name}"
    - Body: formatted email with name, email, phone (if provided), and message
    - Reply-To: set to the submitter's email address so the admissions team can reply directly
  - [ ] 3.9: Return 200 OK with `{ success: true }` on successful send
  - [ ] 3.10: Return 500 Internal Server Error with generic message on Resend API failure — do NOT expose internal error details to the client
  - [ ] 3.11: Add rate limiting headers or basic protection (optional for MVP, but add a TODO comment for future implementation)
  - [ ] 3.12: Set CORS headers to only allow requests from the site's own origin (`VITE_SITE_URL`)
  - [ ] 3.13: **CRITICAL:** The serverless function must NEVER log, store, or forward the message content to any analytics service. Email delivery via Resend is the only data path (NFR8, NFR9)

- [ ] **Task 4: Connect form to API endpoint** (AC: #3)
  - [ ] 4.1: In the form `onSubmit` handler, POST to `/api/contact` with `Content-Type: application/json`
  - [ ] 4.2: Send `{ name, email, phone, message }` as the request body
  - [ ] 4.3: Handle success response (200): set `status` to `'success'`, clear form fields
  - [ ] 4.4: Handle error response (400): parse error details and display field-specific errors
  - [ ] 4.5: Handle network/server error (500 or fetch failure): set `status` to `'error'`, show generic error message with phone CTA fallback
  - [ ] 4.6: Use `try/catch` around `fetch` to handle network failures gracefully

- [ ] **Task 5: Implement SEO metadata and JSON-LD** (AC: #7)
  - [ ] 5.1: Use `generateMeta()` from `utils/meta.ts` for the route `meta` export with title (e.g., "Contact Us | Silver State Adolescent Treatment Center"), description, canonical URL (`/contact`), and OG tags
  - [ ] 5.2: Use `generateLocalBusiness()` from `utils/schema.ts` for LocalBusiness JSON-LD with address, phone, hours
  - [ ] 5.3: Include the JSON-LD in the page's `<head>` via the route `meta` export

- [ ] **Task 6: Ensure route is configured** (AC: #1)
  - [ ] 6.1: Verify `/contact` route exists in `src/routes.ts` and maps to `pages/Contact.tsx`
  - [ ] 6.2: If the route does not exist, add it following the existing route pattern

- [ ] **Task 7: Responsive layout and accessibility** (AC: #9)
  - [ ] 7.1: Use `.wrap` container for max-width centering
  - [ ] 7.2: On desktop, consider a two-column layout: contact info + phone CTA on one side, form on the other. On mobile (< 900px), stack everything vertically with phone CTA at top
  - [ ] 7.3: Heading hierarchy: `<h1>` for page title, `<h2>` for section headings (Contact Info, Send a Message, etc.)
  - [ ] 7.4: Form inputs must have visible focus indicators via global `:focus-visible` styles
  - [ ] 7.5: Submit button touch target meets 44x44px minimum
  - [ ] 7.6: All colors use CSS tokens
  - [ ] 7.7: No horizontal scrolling at any viewport width

- [ ] **Task 8: Verify compilation and rendering** (AC: all)
  - [ ] 8.1: Run `npx tsc --noEmit` — zero TypeScript errors (both `src/` and `api/` code)
  - [ ] 8.2: Run `npm run dev` — navigate to `/contact`, page renders correctly
  - [ ] 8.3: Fill out the form with valid data, submit — verify success state renders
  - [ ] 8.4: Submit with empty required fields — verify client-side validation errors appear
  - [ ] 8.5: Verify error messages are announced by screen readers (test with `aria-live` region)
  - [ ] 8.6: Verify phone CTA is prominent and links correctly
  - [ ] 8.7: Tab through all form elements — verify logical tab order: name -> email -> phone -> message -> submit
  - [ ] 8.8: Check at 320px, 768px, and 1024px viewports — no overflow, form usable at all sizes

## Dev Notes

### Critical Context

**This is the ONLY interactive form in the MVP.** The insurance verification form is deferred — phone calls are the primary conversion path. This contact form is a secondary conversion path for families who are not ready to call. Because of this, the form must be simple, trustworthy, and absolutely compliant with HIPAA/privacy requirements.

**What exists:** The `site` object in `data/common.ts` provides phone, address, and contact info. SEO utilities are available from `utils/meta.ts` and `utils/schema.ts`. PageLayout handles Nav, Footer, TrustBadges, CtaBand, and Breadcrumb. The `api/` directory at project root is the Vercel serverless function location.

**What to build:** Two new files — `src/pages/Contact.tsx` (page component with form) and `api/contact.ts` (serverless function). Plus a route entry if not already configured.

**Resend API integration:** The serverless function calls the Resend email API (`https://api.resend.com/emails`). The API key (`RESEND_API_KEY`) and destination email (`CONTACT_EMAIL`) are server-side environment variables — no `VITE_` prefix, not exposed to the client. Reference: https://resend.com/docs/api-reference/emails/send-email

**Form data flow:**
```
Browser form submit
  -> POST /api/contact (JSON body)
    -> api/contact.ts validates + sanitizes
      -> Resend API sends email to CONTACT_EMAIL
        -> 200 OK returned to browser
          -> Success message displayed
```

**Security model:** This form is "general inquiry only" — it explicitly does NOT collect PHI. The PHI note on the form is a compliance measure. Server-side validation and sanitization are mandatory even though no health data is collected, because the form is a public endpoint.

### Architecture Compliance

- **Component export:** `export default function Contact()` — named function, default export
- **Styling:** CSS tokens + inline styles only. No CSS modules, no Tailwind, no styled-components
- **Phone numbers:** Always use `site.phoneTel` and `site.phone` from `data/common.ts`
- **Internal links:** Use `<Link to="...">` from React Router
- **No barrel files:** Do NOT create `pages/index.ts`
- **900px breakpoint:** Single mobile breakpoint
- **PageLayout:** Wraps the page at route level — do not import Nav, Footer, TrustBadges, CtaBand, or Breadcrumb
- **Serverless function:** `api/contact.ts` lives at the project root `api/` directory, not inside `src/`
- **Environment variables:** Server-side vars (`RESEND_API_KEY`, `CONTACT_EMAIL`) have no `VITE_` prefix. Client-side vars use `import.meta.env.VITE_*`
- **Form labels:** Every `<input>` and `<textarea>` must have an associated `<label>` with matching `htmlFor`/`id` — never placeholder-only labels

### Dependencies

**Depends on (must be completed first):**
- Story 1.1: Production project initialized
- Story 1.2: `data/common.ts` with `site` object (phone, address, name)
- Story 1.7: PageLayout wrapper
- Story 1.8: `utils/meta.ts` (generateMeta), `utils/schema.ts` (generateLocalBusiness), `routes.ts`
- Story 1.11: Vercel deployment configured (serverless functions work in `api/` directory)
- Story 8.1: Admissions page exists at `/admissions` (linked from contact page)

**Produces for later stories:**
- Story 9.1 (Cookie Consent & GA4) — the contact page is a Zone 1 (informational) page that gets GA4 analytics. The contact form itself does NOT collect health info, so Zone 1 is appropriate
- Story 9.2 (CTM Integration) — the phone CTA on this page will get CTM dynamic number insertion

### Anti-Patterns to AVOID

1. **DO NOT** collect any health information in the form — no diagnosis, symptoms, medications, insurance, or treatment history fields. This is a HIPAA compliance requirement
2. **DO NOT** store form data in localStorage, sessionStorage, or cookies — NFR9 prohibits client-side PHI storage, and while this form has no PHI, the pattern must be consistent
3. **DO NOT** send form data to any analytics service — the only data path is Resend email delivery
4. **DO NOT** hardcode the phone number — import from `data/common.ts`
5. **DO NOT** use placeholder text as a substitute for `<label>` elements — NFR18 requires associated labels
6. **DO NOT** render Nav, Footer, TrustBadges, CtaBand, or Breadcrumb — PageLayout handles these
7. **DO NOT** use arrow function default export
8. **DO NOT** trust client-side validation — always validate on the server in `api/contact.ts`
9. **DO NOT** expose internal error details to the client — return generic error messages from the serverless function
10. **DO NOT** use `process.env` in client-side code — use `import.meta.env.VITE_*` (though this page has no client-side env vars)
11. **DO NOT** install new npm packages for form validation — use native HTML5 validation + custom validation logic
12. **DO NOT** add a CAPTCHA for MVP — add a TODO comment for future implementation if spam becomes an issue
13. **DO NOT** use `--muted` color for form labels or error text — use `var(--body)` for secondary text, `var(--text)` for labels
14. **DO NOT** skip the "do not include health information" notice on the form — this is a compliance measure

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Hosting-and-Deployment] — Vercel serverless functions, Resend email API
- [Source: _bmad-output/planning-artifacts/architecture.md#Environment-Variable-Patterns] — RESEND_API_KEY, CONTACT_EMAIL (server-side), VITE_* (client-side)
- [Source: _bmad-output/planning-artifacts/architecture.md#Accessibility-Pattern] — form labels, aria-live, focus indicators, touch targets
- [Source: _bmad-output/planning-artifacts/architecture.md#External-Integration-Boundaries] — Resend called from api/contact.ts only
- [Source: _bmad-output/planning-artifacts/architecture.md#Styling-Patterns] — CSS tokens, inline styles
- [Source: _bmad-output/planning-artifacts/epics.md#Story-8.2] — acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] — phone CTA on every page
- [Source: _bmad-output/planning-artifacts/prd.md#FR20] — contact inquiry form
- [Source: _bmad-output/planning-artifacts/prd.md#NFR8] — form data encrypted in transit
- [Source: _bmad-output/planning-artifacts/prd.md#NFR9] — zero client-side storage of PHI
- [Source: _bmad-output/planning-artifacts/prd.md#NFR18] — form input labels, error states, required fields

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
