---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-01b-continue', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments:
  - planning-artifacts/product-brief-silverstate-2026-02-23.md
  - planning-artifacts/research/domain-adolescent-behavioral-health-treatment-research-2026-02-23.md
  - mockups/silverstate-react/ (existing component library)
workflowType: 'prd'
documentCounts:
  briefs: 1
  research: 1
  brainstorming: 0
  projectDocs: 0
  mockups: 1
classification:
  projectType: web_app
  domain: healthcare
  complexity: high
  projectContext: brownfield
---

# Product Requirements Document - silverstate

**Author:** Silver
**Date:** 2026-02-23

## Executive Summary

Silver State Adolescent Treatment Center's clinical product is gold-standard — Joint Commission Gold Seal accredited, 4.8/5 rating, LGBTQIA+ affirming, dual diagnosis specialization, full continuum of care (Residential, PHP, IOP) with on-site accredited academics. Its website is not. The current WordPress site generates 353 monthly organic visits against an addressable search opportunity of 23,000+ monthly queries, in a state that ranks 51st for youth mental health access. The website is the bottleneck between clinical excellence and the families who need it most.

This PRD defines a ground-up React website rebuild — a conversion-optimized trust engine and hub magnet — that transforms Silver State's digital presence into its primary competitive advantage. Built on an existing React component library (20+ production-ready components including parallax heroes, scroll-triggered animations, card stacks, and data-driven content architecture), the site ships its full URL structure, schema markup, and conversion CTAs in week one using a Lego assembly model. Content depth and SEO optimization compound over 6-8 months targeting 85% census through organic family acquisition.

The primary conversion action is phone calls to (725) 525-9897. Every page exists to move a family closer to picking up the phone.

### What Makes This Special

No competitor in the Las Vegas adolescent treatment market is executing on modern web standards, structured data, or conversion-optimized page architecture. Silver State already ranks for high-value keywords with zero optimization — #3 for "lgbtq adolescent residential treatment" (Vol 1,200, KD 0), positioned for dual diagnosis terms, and sitting on 1,500-2,000+ monthly insurance keyword searches at KD 0-11 that no local competitor has claimed.

The site's conversion architecture mirrors a parent's emotional journey from crisis to action: validate their fear, reflect their child's specific struggle, prove clinical credibility, and deliver a frictionless path to call. This isn't a brochure — it's a trust engine where every scroll depth maps to a stage of emotional readiness, built for the 78% of families searching on mobile.

The convergence of regulatory deadlines (WCAG 2.1 AA by May 2026, 42 CFR Part 2 by February 2026), the industry's shift from "growth mode" to "proof mode," and a competitive vacuum in the Las Vegas market make this the exact right time to build. A gold-standard site immediately positions Silver State as the credibility leader in a $96.9B market where families compare 3-5 centers before making a single call.

## Project Classification

- **Project Type:** Web Application (React 19 + Vite + TypeScript SPA, SEO-optimized, conversion-focused)
- **Domain:** Healthcare — Adolescent behavioral health treatment (YMYL/HIPAA regulated)
- **Complexity:** High — HIPAA, 42 CFR Part 2, WCAG 2.1 AA, FTC advertising compliance, LegitScript, E-E-A-T requirements
- **Project Context:** Brownfield — existing React component library and WarmImmersive homepage mockup; production site is a new build assembled from existing parts

## Success Criteria

### User Success

| Criteria | Measurable Outcome | Target |
|----------|-------------------|--------|
| **Parent finds Silver State for their exact need** | Organic landing on condition, insurance, or location page matching search intent | Pages ranking top 10 for target keywords by month 3 |
| **Parent feels "they understand my child"** | Session duration on condition/program pages | > 2 min avg session on key pages |
| **Parent trusts Silver State with their teen** | Scroll depth through trust signals (accreditations, staff credentials, daily schedule) | > 60% scroll depth on program pages |
| **Parent knows exactly what to do next** | Time from landing to phone call | < 3 min avg session before call (month 3+) |
| **Insurance question answered immediately** | Insurance page to call conversion rate | Tracked via CTM per page — trending upward |
| **Mobile parent can act instantly** | Click-to-call tap rate on mobile | > 3% of mobile sessions |
| **Zero dead-end experiences** | Every page has phone CTA + internal links | 100% page coverage at launch |

### Business Success

**Silver State (Client):**
- **Primary:** 85% census maintained through consistent admissions pipeline
- **Leading indicator:** Monthly call volume from website (organic) trending upward month-over-month
- **Proof point:** Admissions attributable to organic web traffic via call tracking

**Comcreate (Agency):**
- **Primary:** Organic traffic growth independent of paid spend — the site is a compounding asset
- **Proof point:** "X% of total calls came from organic search, not paid campaigns"
- **Strategic:** Silver State's digital presence as a case study in treatment center web performance

### Technical Success

| Criteria | Target | Enforcement |
|----------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s all pages | Core Web Vitals — Google ranking signal |
| CLS (Cumulative Layout Shift) | < 0.1 all pages | No animations pushing content around |
| Mobile usability | 100% pages pass Google's test | 78% of searches are mobile |
| WCAG 2.1 AA compliance | 100% pages pass | Legal requirement May 11, 2026 |
| Schema markup coverage | 100% pages with JSON-LD | Rich snippets + AI visibility |
| HIPAA-compliant analytics | Zero marketing pixels on health forms | Ongoing compliance |
| 42 CFR Part 2 consent mechanisms | Implemented on all SUD-related forms | Compliance deadline Feb 16, 2026 |
| HTTPS/TLS encryption | All data transmission encrypted | Non-negotiable |

### Measurable Outcomes

**SEO / Traffic (the compounding asset):**

| KPI | Baseline | 3-Month | 6-Month |
|-----|----------|---------|---------|
| Organic monthly traffic | 353 | 2,000+ | 7,500+ |
| Ranking keywords | 145 | 400+ | 900+ |
| Top 10 rankings | ~20 | 75+ | 200+ |
| Pages indexed | ~15 | 50+ | 75+ |

**GEO (Generative Engine Optimization):**
- Present in AI Overviews for top 10 treatment keywords by month 6
- Consistent citation as a named provider in ChatGPT, Perplexity, Gemini responses
- AI-referred traffic tracked as a distinct channel

## Product Scope

### MVP Strategy

**Approach:** Foundation Pour — ship the complete site architecture with real content on day one. The MVP isn't a subset of features; it's the entire site at launch depth. Every page exists, every URL is indexed, every CTA works. Content depth and optimization compound from there.

This is a **platform MVP** — the value is in the complete information architecture that makes Silver State the hub magnet for adolescent treatment in Las Vegas. Launching with partial pages or missing page types breaks the hub strategy.

**Resource Requirements:** 1 developer (Comcreate) building from existing component library. Content sourced from WordPress site extraction + domain research. Clinical content review by Silver State clinical staff (Dr. Russ Park / Arianne Smith).

### MVP — Week 1 Foundation Pour

**Site Architecture (50-60 pages at launch):**
- Homepage — full WarmImmersive experience, production-ready
- Program pages — Residential, PHP, IOP (3 pages)
- Condition pages — mental health, substance abuse, eating disorders (~25 pages)
- Insurance hub + individual provider pages — Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem (10 pages)
- Location/service area pages — Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County (6 pages)
- About/team page with leadership bios
- Admissions page with process steps
- Contact page
- Privacy Policy page

**Every Page Standard (non-negotiable):**
- JSON-LD schema markup (MedicalOrganization, LocalBusiness, MedicalCondition, FAQPage)
- SEO meta tags (title, description, Open Graph)
- Semantic HTML with proper heading hierarchy
- WCAG 2.1 AA foundations (alt text, contrast, keyboard nav, landmark roles)
- Phone call CTA — click-to-call on mobile, visible on every page
- Internal linking to related pages
- Reusable component blocks: Nav, Footer, trust badge strip, CTA bands, FAQ accordion

**HIPAA-Compliant Insurance Verification Form:**
- Encrypted form submission (TLS), no marketing pixels
- Secure data handling — no client-side storage of health information
- Proper consent language, privacy disclosure, 42 CFR Part 2 consent mechanism
- BAA with form data processing/hosting provider

**Integrations:**
- CTM (Call Tracking Metrics) wired into all phone CTAs
- HIPAA-compliant analytics (no marketing pixels on health form pages)
- Google Business Profile optimization

**Core User Journeys Supported:**
- Maria (Searching Parent) — full homepage experience + program pages + admissions
- David (Insurance-First) — insurance hub + all 9 provider pages + verification form
- Rachel (Condition-Specific) — all ~25 condition pages + staff credentials + FAQ
- Dr. Chen (Clinical Referrer) — about/team page + program detail + admissions + shareable URLs

**MVP Go/No-Go Criteria:**
1. All pages deployed with proper URLs, schema, and meta tags — Google Search Console shows crawling/indexing
2. Zero dead-end pages — every page has phone CTA and internal links, CTM tracking live
3. Insurance form HIPAA-compliant — encrypted, no tracking pixels, proper consent
4. Performance passes — LCP < 2.5s, CLS < 0.1, mobile usability passes
5. WCAG foundations hold — semantic HTML, heading hierarchy, alt text, keyboard nav, contrast
6. Visual quality matches WarmImmersive mockup standard across all pages

**Explicitly NOT in MVP:**
- Blog/CMS (evaluate month 2-3)
- Patient portal / authenticated pages
- Online scheduling / intake forms
- Chat widget / live chat
- Video content / virtual tours
- Multi-language support
- SSR / Next.js migration
- Advanced call tracking dashboards
- A/B testing infrastructure

### Post-MVP Roadmap

**Phase 2 — Content Depth (Months 1-2):**
- Expand page content based on keyword research priorities
- Blog architecture decision and first content pieces
- Staff credential pages with full bios, photos, Physician schema
- Insurance page content optimization per provider
- FAQ expansion based on real family questions

**Phase 3 — SEO Acceleration (Months 3-6):**
- Content expansion driven by Search Console ranking data
- Long-tail keyword targeting from real performance data
- Backlink and authority building (PR, directories, partnerships)
- GEO monitoring — AI Overview citations, LLM citation tracking
- Conversion rate optimization from CTM call data

**Phase 4 — Expansion (Months 6-8+):**
- A/B testing CTAs and page layouts
- Landing page optimization for paid campaigns (post-LegitScript)
- Evaluate: Spanish language support, chat widget, video content/virtual tours, SSR/Next.js migration — all decisions based on real data

### Risk Mitigation

**Technical Risks:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| SPA pre-rendering fails or is incomplete | Google can't index pages — SEO strategy broken | Validate every route renders full HTML; test with Google's URL Inspection tool before launch |
| GSAP/Framer Motion animations degrade CWV | Poor rankings, poor UX on mobile | Performance budget per page; content-first rendering; `prefers-reduced-motion` support |
| 60+ pages of content quality varies | E-E-A-T signals inconsistent; Google penalizes low-quality pages | Content schema enforces structure; launch with solid content on all pages, perfect on top 10 |

**Compliance Risks:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| HIPAA tracking violation (marketing pixels leaking health data) | HIGH — regulatory action, fines | Zero marketing pixels on health form pages; HIPAA-compliant analytics only; tracking audit before launch |
| 42 CFR Part 2 non-compliance (collecting SUD data without consent) | HIGH — regulatory action | Implement consent mechanism on all SUD-related forms; document consent flow |
| WCAG non-compliance after May 2026 | HIGH — loss of Medicare/Medicaid reimbursements | Build accessibility into component library from day one; test every page with axe-core/Lighthouse |
| FTC advertising claim violation (unsubstantiated outcome claims) | MEDIUM — legal exposure | Clinical content review — named credentialed reviewer signs off before publish |
| LegitScript certification lapse | HIGH — can't run Google Ads | Maintain annual certification ($3,095/year); track renewal deadlines |

**Market & Resource Risks:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| Competitor copies strategy | Las Vegas market gap closes | First-mover advantage + domain authority compounds — hard to replicate quickly |
| Google algorithm change devalues approach | Rankings drop | Diversified traffic strategy (SEO + GEO + referral + directories); site built on fundamentals, not exploits |
| Single developer bottleneck | Delays if developer unavailable | Component library + data-driven architecture means content additions don't require dev work |
| Clinical content review delays | Pages launch without E-E-A-T compliance | Batch content for review; launch with structure + real content, refine with clinical review in weeks 2-4 |
| Silver State staff content (bios, photos) delayed | About/team page incomplete at launch | Launch with available info; update as content arrives |

## User Journeys

### Journey 1: Maria, 43 — "The Searching Parent" (Primary, Success Path)

It's 11:47 PM and Maria is sitting on the edge of her bed, phone in hand, tears she won't let herself cry yet. Her 15-year-old daughter hasn't been to school in three weeks. The outpatient therapist said the words "residential treatment" today and Maria's stomach dropped. She types "teen treatment center Las Vegas" into Google.

She taps the Silver State result. The page loads fast — no lag, no pop-ups, no chat widget ambushing her. The hero section says something that stops her scrolling: it validates exactly what she's feeling. Fear. Guilt. The sense that she waited too long. She doesn't feel sold to — she feels seen.

She scrolls. A section describes the teens Silver State treats — not generic "troubled youth" language, but specific profiles: the anxious teen who can't make it through a school day, the teen self-medicating to cope, the teen whose trauma has made home feel unsafe. Maria sees her daughter in those words.

Further down: Joint Commission Gold Seal. 4.8/5 rating. Named clinical staff with real credentials — Dr. Russ Park, Arianne Smith. A daily schedule that shows structure, not lockdown. 4:1 staff ratio. On-site accredited school so her daughter doesn't fall further behind. LGBTQIA+ affirming care. Maria's shoulders drop half an inch.

She reaches the admissions section. Four clear steps. No maze. A phone number — (725) 525-9897 — that says "24/7." She taps it. A human voice answers. It sounds exactly like the website promised: warm, competent, unhurried. Maria starts talking.

**Reveals requirements for:** Hero emotional copy, persona-specific content blocks, trust signal components (accreditation badges, staff credentials, ratings), admissions process steps, click-to-call CTA, 24/7 messaging, mobile-first layout, page speed optimization.

---

### Journey 2: David, 47 — "The Insurance-First Parent" (Primary, Bottom-of-Funnel)

David already knows his son needs residential treatment. He talked to two facilities last week — both wanted him to "call to discuss financials" before giving a straight answer. He's done with runarounds. He types "does Cigna cover teen residential treatment" during his lunch break.

He lands on Silver State's dedicated Cigna insurance page. Within 10 seconds he sees: Yes, Silver State accepts Cigna. The page explains what Cigna typically covers for adolescent residential treatment — deductibles, copays, pre-authorization process. No legalese, no hedging. Real information.

Below that: an insurance verification form. Name, insurance provider, member ID, teen's date of birth. The form explicitly states: HIPAA-compliant, encrypted, no marketing tracking. David fills it out. It takes 90 seconds.

The page also shows a direct phone number with the message: "Want answers now? Call (725) 525-9897 — we verify insurance in under 10 minutes." David doesn't want to wait. He calls. The admissions coordinator pulls up Cigna's coverage while they talk. Ten minutes later, David knows exactly what's covered, what's out-of-pocket, and what the next step is. He schedules an assessment for Thursday.

**Reveals requirements for:** Individual insurance provider pages (9-10), insurance verification form (HIPAA-compliant, encrypted, no tracking pixels), 42 CFR Part 2 consent mechanism, clear coverage explanation content, phone CTA with urgency messaging, CTM tracking per insurance page, form data processing with BAA.

---

### Journey 3: Rachel, 39 — "The Condition-Specific Parent" (Primary, Mid-Funnel)

Rachel's 14-year-old was diagnosed with PTSD after a traumatic event two years ago. Outpatient therapy helped stabilize things, but the nightmares are back, school refusal has returned, and Rachel's therapist suggested looking into residential programs that specialize in trauma. Rachel doesn't want a generic teen facility — she needs specialists.

She searches "teen PTSD treatment Las Vegas" and finds Silver State's PTSD/trauma condition page. The page doesn't just list PTSD as "something we treat" — it describes the specific evidence-based therapies used (EMDR, trauma-focused CBT, somatic experiencing), names the clinical staff trained in these modalities, and explains how the residential structure supports trauma recovery specifically.

Rachel reads about the daily schedule — structured but not rigid. She sees the 4:1 staff ratio and thinks about her daughter's need for individual attention. The LGBTQIA+ affirming care badge catches her eye — her daughter came out last year, and Rachel has heard horror stories about treatment centers that aren't safe for queer kids.

She navigates to the About page through an internal link. Staff bios with photos, credentials, specializations. Dr. Russ Park's trauma experience. She clicks back to the condition page and reads the FAQ section — "How long does residential treatment for teen PTSD typically last?" "Will my teen fall behind in school?" The answers are specific and cited.

Rachel feels informed enough to call. She taps the phone number, tells the admissions coordinator about her daughter's specific situation, and asks to speak with the clinical team about their trauma approach. The call happens.

**Reveals requirements for:** Condition-specific pages (~25) with clinical depth, named staff with credentials and specializations, evidence-based therapy descriptions, FAQ accordion with FAQPage schema, internal linking between condition/program/about pages, staff bio pages with Physician schema, clinical content review process (E-E-A-T).

---

### Journey 4: Dr. Sarah Chen — Clinical Referrer (Secondary, Referral Path)

Dr. Chen is a licensed family therapist in Henderson. She's been working with a 16-year-old client for six months, but the teen's substance use has escalated beyond what outpatient care can address. She needs to recommend a residential facility to the family — and her professional reputation is attached to that recommendation.

She searches "adolescent residential treatment Las Vegas" and finds Silver State. She's looking for different things than a parent: accreditation status (Joint Commission — confirmed), clinical leadership credentials (she recognizes Dr. Park's background), program structure (Residential, PHP, IOP — a full continuum so the teen won't need to transfer facilities), and dual diagnosis capability (critical for her client).

She checks the admissions page to understand the referral process. She notes the phone number and the insurance verification information — she'll need to tell the family which insurers are accepted. She sees the 4:1 staff ratio and the on-site academics (Silver State Youth Academy) — important details for the family.

Satisfied, Dr. Chen sends the parent a direct link to the Silver State website along with the phone number. The parent lands on the same site and begins their own journey — but they arrive with a professional endorsement already attached.

**Reveals requirements for:** Professional-grade clinical content (not just parent-friendly), accreditation and staff credentials prominently displayed, clear referral/admissions process, shareable URLs with proper Open Graph meta tags (so links preview well in email/text), program detail pages with clinical specificity, insurance acceptance clearly listed.

---

### Journey 5: Comcreate Team — Site Management (Operations)

After launch, the Comcreate team monitors Silver State's digital performance. They check Google Search Console for indexing status — are all 60+ pages being crawled? They review CTM dashboards for call volume by source and landing page. They track Core Web Vitals in PageSpeed Insights.

Weekly: review ranking keyword movement, identify pages gaining or losing position, and prioritize content expansion based on real data. Monthly: report to Silver State on organic traffic growth, call attribution, and conversion trends. Quarterly: assess whether the SEO/GEO targets are on track and adjust strategy.

Content updates follow a defined process: clinical content changes require a named credentialed reviewer before publishing (E-E-A-T compliance). New pages are built using the established component library and data-driven content architecture. Schema markup is validated before deploy. WCAG compliance is tested on every new page.

**Reveals requirements for:** Data-driven content architecture (content.ts pattern), reusable component library with consistent usage, schema markup validation workflow, WCAG testing process, performance monitoring setup, analytics dashboard access, content update workflow with clinical review gate.

---

### Journey Requirements Summary

| Journey | Key Capability Areas Revealed |
|---------|------------------------------|
| **Maria (Searching Parent)** | Emotional hero content, persona-specific blocks, trust signals, admissions flow, mobile click-to-call, page speed |
| **David (Insurance-First)** | Individual insurance pages, HIPAA-compliant form, 42 CFR Part 2 consent, insurance verification CTA, CTM per-page tracking |
| **Rachel (Condition-Specific)** | Condition pages with clinical depth, staff credentials, evidence-based therapy descriptions, FAQ schema, internal linking |
| **Dr. Chen (Clinical Referrer)** | Professional clinical content, accreditation display, shareable URLs with OG tags, referral process clarity |
| **Comcreate (Operations)** | Data-driven content architecture, component library, schema validation, WCAG testing, analytics, content review workflow |

## Domain-Specific Requirements

### Compliance & Regulatory

**HIPAA (Health Insurance Portability and Accountability Act):**
- All data transmission encrypted via HTTPS/TLS — non-negotiable
- Contact and insurance verification forms require secure transmission and storage
- Business Associate Agreements (BAAs) required with: web hosting provider, analytics platform, email service provider, CDN, form data processor
- Updated Notices of Privacy Practices required (deadline: February 16, 2026)
- Zero marketing pixels (Facebook Pixel, Google Analytics standard tracking, ad conversion scripts) on any page where users submit health information
- No client-side storage of Protected Health Information (PHI)

**42 CFR Part 2 (Substance Use Disorder Records):**
- Explicit patient consent mechanism required before collecting any SUD-related information
- Consent tracking must be documented and auditable
- Insurance verification form must include 42 CFR Part 2 consent language for substance use disorder inquiries
- **Compliance deadline: February 16, 2026**

**WCAG 2.1 Level AA (ADA Web Accessibility):**
- Federal compliance deadline: **May 11, 2026** — applies to all organizations accepting Medicare/Medicaid
- Enforcement: OCR investigation, potential suspension of federal financial assistance (Medicare/Medicaid reimbursements)
- Requirements: color contrast ratios (4.5:1 normal text, 3:1 large text), keyboard navigability, alt text on all images, proper heading hierarchy, skip navigation links, form labels and error identification, text resizable to 200%, captions/transcripts for media
- Must be built into the component library from day one — retrofitting is prohibitively expensive

**FTC Advertising Guidelines:**
- All claims must be truthful, evidence-based, and substantiated
- Testimonials cannot make claims that would be deceptive if made directly — must include disclaimers about typical results
- Outcome statistics require third-party validation or "competent and reliable scientific evidence"
- Material connections between advertisers and endorsers must be disclosed
- Use evidence-based language ("our evidence-based approach has shown...") — never absolute claims ("we cure depression")

**Nevada DPBH (Division of Public and Behavioral Health):**
- Website must accurately reflect licensed services and facility details
- Licensing and accreditation information must be current and verifiable

### Technical Constraints

**Security:**
- HTTPS/TLS encryption on all pages — no exceptions
- Insurance verification form data encrypted at rest and in transit
- No client-side storage of health information (no localStorage, sessionStorage, or cookies containing PHI)
- Mandatory multi-factor authentication on any systems accessing ePHI (backend/admin only — not public-facing website)

**Privacy:**
- Cookie consent management with opt-in for non-essential tracking (HIPAA + privacy best practices)
- HIPAA-compliant analytics: server-side tracking, or Matomo (self-hosted), or properly configured privacy-first analytics
- Separate tracking configuration for health form pages (zero marketing pixels) vs. informational pages
- Privacy policy clearly visible and accessible from every page

**Performance:**
- Content renders before animations trigger (LCP optimization)
- GSAP/Framer Motion animations lazy-loaded and performance-budgeted
- Images optimized (WebP/AVIF with fallbacks), lazy-loaded below the fold
- Critical CSS inlined for above-the-fold content
- Treatment center website average: 8-12s load time — Silver State target: < 2.5s LCP

### Integration Requirements

**CTM (Call Tracking Metrics):**
- Dynamic number insertion on all phone CTAs for source attribution
- Per-page call tracking to identify top-converting pages
- Integration with organic vs. paid source distinction

**Google Search Console:**
- All pages submitted for indexing via sitemap.xml
- Structured data validated through Rich Results Test
- Core Web Vitals monitored

**Google Business Profile:**
- Optimized for local pack rankings
- Consistent NAP (Name, Address, Phone) across website and GBP
- Categories, attributes, and service descriptions aligned with website content

**Schema Markup (JSON-LD):**
- `MedicalOrganization` — primary entity (accreditations, contact, services)
- `LocalBusiness` — nested for local discovery (address, hours, service area)
- `MedicalCondition` — each condition treated page
- `MedicalTherapy` — each therapy/program offered
- `Physician` / `Person` — staff credential pages
- `FAQPage` — FAQ sections on condition/program/insurance pages
- `BreadcrumbList` — site navigation structure

### E-E-A-T Content Requirements (Google YMYL)

This is functionally mandatory for healthcare SEO — not a legal regulation, but determines whether Google ranks the content:

- **Experience:** Every clinical content page must have a named, credentialed author or reviewer
- **Expertise:** Medical claims must cite trusted sources (CDC, SAMHSA, NIDA, peer-reviewed journals)
- **Authoritativeness:** Accreditation badges (Joint Commission, LegitScript) visible on every page; staff credential pages with license numbers and specializations
- **Trustworthiness:** HTTPS, clear privacy policy, visible contact information, no deceptive claims, proper disclosure of financial relationships

## Web Application Specific Requirements

### Project-Type Overview

Silver State is a single-page application (SPA) built with React 19 + Vite + TypeScript, functioning as a public-facing marketing and lead generation website. It is not a web application in the traditional sense (no user accounts, no dashboards, no real-time data) — it is a content-rich, conversion-optimized website built with SPA tooling for component reusability and animation quality, while requiring the SEO characteristics of a multi-page site.

This creates a specific technical tension: **SPA architecture for developer experience and UI quality vs. static/pre-rendered output for SEO crawlability and performance.** The resolution is pre-rendering critical SEO pages while maintaining the SPA experience for interactive sections.

### Technical Architecture Considerations

**SPA + Pre-rendering Strategy:**
- React 19 + Vite as build toolchain — keep existing stack
- Pre-render all SEO-critical pages at build time (react-snap, vite-plugin-ssr, or vite-ssg)
- All page content must be present in the initial HTML — no client-side-only rendering for content that Google needs to index
- Client-side hydration adds interactivity (animations, scroll effects, form handling) after initial content render
- Sitemap.xml generated at build time with all page URLs
- robots.txt configured for proper crawling

**Routing:**
- Client-side routing (React Router) for navigation between pages
- All routes must resolve to pre-rendered HTML files for direct URL access and SEO
- URL structure locked from day one — changing URLs after indexing damages SEO
- Canonical URLs on every page to prevent duplicate content

**Proposed URL Structure:**

| Page Type | URL Pattern | Count |
|-----------|-------------|-------|
| Homepage | `/` | 1 |
| Programs | `/programs/{program-slug}/` | 3 |
| Conditions | `/conditions/{condition-slug}/` | ~25 |
| Insurance Hub | `/insurance/` | 1 |
| Insurance Providers | `/insurance/{provider-slug}/` | 9 |
| Locations Hub | `/locations/` | 1 |
| Location Pages | `/locations/{city-slug}/` | 5 |
| About/Team | `/about/` | 1 |
| Admissions | `/admissions/` | 1 |
| Contact | `/contact/` | 1 |
| Privacy Policy | `/privacy/` | 1 |
| **Total** | | **~50-60** |

### Browser & Device Support

| Target | Requirement |
|--------|-------------|
| **Mobile** | Primary — 78% of treatment searches. iOS Safari 15+, Chrome Mobile 100+ |
| **Desktop** | Secondary — Chrome 100+, Firefox 100+, Safari 15+, Edge 100+ |
| **Responsive breakpoints** | Mobile (320-767px), Tablet (768-1023px), Desktop (1024px+) |
| **Touch interactions** | Click-to-call, scroll, swipe on carousels. No complex gestures required |
| **JavaScript required** | Yes — React SPA. Pre-rendered HTML provides content fallback for crawlers |

### SEO Architecture

**On-Page SEO (every page):**
- Unique `<title>` tag optimized for target keyword (50-60 chars)
- Unique `<meta description>` with call-to-action (150-160 chars)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) for social sharing
- Canonical `<link rel="canonical">` URL
- Proper heading hierarchy: single `<h1>` per page, logical `<h2>`/`<h3>` nesting
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Image `alt` text descriptive and keyword-relevant
- Internal links with descriptive anchor text connecting related pages

**Technical SEO:**
- Pre-rendered HTML for all pages (crawlable without JavaScript execution)
- `sitemap.xml` auto-generated at build time
- `robots.txt` allowing full crawling
- JSON-LD structured data on every page (schema types defined in Domain Requirements)
- Page load performance optimized for Core Web Vitals thresholds
- Mobile-friendly responsive design passing Google's mobile usability test
- HTTPS/TLS on all pages

**Content Architecture (data-driven):**
- Content separated from components via data files (extending existing `content.ts` pattern)
- Each page type has a defined content schema (fields, required data, optional data)
- Content schema enforces consistency: every condition page has the same structure, every insurance page has the same sections
- New pages created by adding data — not by writing new components

### Responsive Design Strategy

**Mobile-First Build:**
- Design and build mobile layout first, enhance for tablet and desktop
- Phone CTA persistent and accessible at all viewport sizes (sticky header or floating button on mobile)
- Touch targets minimum 44x44px (WCAG 2.5.5)
- No horizontal scrolling at any breakpoint
- Images served at appropriate sizes per viewport (srcset/sizes or picture element)
- Animations reduced or disabled on mobile if they impact performance (respect `prefers-reduced-motion`)

### Performance Targets

| Metric | Target | Method |
|--------|--------|--------|
| LCP | < 2.5s | Pre-render, critical CSS inline, image optimization, lazy-load below fold |
| CLS | < 0.1 | Reserve space for images/ads, no layout-shifting animations above fold |
| FID/INP | < 200ms | Minimize main thread blocking, defer non-critical JS |
| Total page weight | < 1.5MB initial load | Code splitting, tree shaking, image compression |
| Time to Interactive | < 3.5s | Defer animations, lazy-load non-critical components |

### Implementation Considerations

**Build & Deploy:**
- Vite build produces static assets (HTML, CSS, JS, images)
- Pre-rendering step generates HTML for all routes
- Deploy to CDN-backed static hosting (Netlify, Vercel, Cloudflare Pages, or S3+CloudFront)
- No server required for the public-facing site — static files only
- Insurance verification form submits to a separate HIPAA-compliant backend/service (not part of the static site build)

**Component Library Extension:**
- Existing 20+ components in `mockups/silverstate-react/` are the foundation
- Extend with page-level templates: ConditionPage, InsurancePage, LocationPage, ProgramPage
- Each template composes existing components with page-type-specific layout and content schema
- New components only created when existing components can't serve the need

**Content Management:**
- Phase 1 (MVP): Content in TypeScript data files (extending `content.ts` pattern) — fast, type-safe, no CMS overhead
- Phase 2+ (evaluate): Headless CMS if content update frequency demands it (Sanity, Payload, or similar with HIPAA-compliant hosting)

## Functional Requirements

### Treatment Information & Discovery

- **FR1:** Families can view detailed program pages for each level of care (Residential, PHP, IOP) describing structure, approach, duration, and what a typical day looks like
- **FR2:** Families can browse condition-specific treatment pages (~25) for their teen's diagnosis (anxiety, depression, PTSD, substance use, eating disorders, dual diagnosis, OCD, conduct disorders, etc.)
- **FR3:** Families can view evidence-based therapy descriptions and clinical modalities used for each condition
- **FR4:** Families can view the daily schedule and program structure to understand their teen's experience
- **FR5:** Families can navigate between related content (conditions, programs, insurance, locations) via contextual internal links on every page
- **FR6:** Families can access FAQ sections with condition-, program-, and insurance-specific answers on relevant pages

### Insurance Verification & Coverage

- **FR7:** Families can view a hub page listing all insurance providers Silver State accepts
- **FR8:** Families can view individual insurance provider pages (Aetna, Cigna, BCBS, Ambetter, Humana, UHC, TRICARE, Medicaid, Anthem) explaining typical adolescent treatment coverage
- **FR9:** Families can submit an insurance verification form with their insurance details to initiate coverage confirmation
- **FR10:** The insurance verification form collects explicit consent for substance use disorder information disclosure per 42 CFR Part 2 before submission
- **FR11:** The insurance verification form transmits data via encrypted connection with no marketing tracking scripts present on the form page

### Clinical Credibility & Trust

- **FR12:** Families can view accreditation and certification badges (Joint Commission Gold Seal, LegitScript, NAATP) on every page of the site
- **FR13:** Families can view staff profiles with names, photos, credentials, license information, specializations, and professional backgrounds
- **FR14:** Families can view Silver State's key differentiators — ratings, staff-to-client ratio, LGBTQIA+ affirming care designation, on-site accredited academics, and full continuum of care
- **FR15:** Every clinical content page displays a named, credentialed author or clinical reviewer
- **FR16:** Clinical content cites trusted sources (CDC, SAMHSA, NIDA, peer-reviewed journals) where medical claims are made

### Family Conversion & Contact

- **FR17:** Families can see a phone call CTA on every page of the site — no page exists without a clear path to contact
- **FR18:** Mobile users can initiate a phone call with a single tap (click-to-call) from any page
- **FR19:** Families can view a clear, step-by-step admissions process on a dedicated admissions page
- **FR20:** Families can submit a general contact inquiry through the site
- **FR21:** All phone CTAs attribute call source and originating page for conversion tracking
- **FR22:** The homepage delivers the full branded experience — emotional hero content, persona-specific sections, trust signals, and conversion CTAs following the emotional journey arc

### Location & Service Area

- **FR23:** Families can view location-specific pages for Las Vegas metro service areas (Las Vegas, Henderson, North Las Vegas, Summerlin, Clark County)
- **FR24:** Families can view Silver State's address, service area, and facility details including contact information
- **FR25:** Families can access a hub page showing all communities and areas served

### Accessibility & Privacy Compliance

- **FR26:** All users can navigate the entire site using only a keyboard
- **FR27:** All users can access content via screen readers through semantic HTML structure, proper heading hierarchy, and landmark roles
- **FR28:** All images provide descriptive alternative text
- **FR29:** All users can resize text to 200% without loss of content or functionality
- **FR30:** All color combinations meet WCAG 2.1 AA contrast ratios (4.5:1 normal text, 3:1 large text)
- **FR31:** The site respects `prefers-reduced-motion` user preferences for animations
- **FR32:** Users can manage cookie consent preferences with opt-in required for non-essential tracking
- **FR33:** Users can access the privacy policy from every page
- **FR34:** No marketing tracking pixels execute on pages where users submit health information

### Search Engine & AI Discoverability

- **FR35:** Every page provides JSON-LD structured data describing its content type (MedicalOrganization, LocalBusiness, MedicalCondition, MedicalTherapy, Physician, FAQPage, BreadcrumbList)
- **FR36:** Every page provides unique SEO metadata — title tag, meta description, Open Graph tags, and canonical URL
- **FR37:** All page content renders in the initial HTML without requiring JavaScript execution for crawlability
- **FR38:** The site generates and maintains an up-to-date sitemap.xml with all page URLs
- **FR39:** Breadcrumb navigation is present on all interior pages with structured data markup
- **FR40:** All pages produce proper link previews when shared via email, text, or social platforms (Open Graph)

### Responsive Multi-Device Experience

- **FR41:** All pages render correctly and are fully functional across mobile (320px+), tablet (768px+), and desktop (1024px+) viewports
- **FR42:** Touch targets on mobile meet minimum 44x44px sizing
- **FR43:** No horizontal scrolling occurs at any viewport width

### Content Operations & Site Management

- **FR44:** Content is structured in data files separate from presentation components, enabling new pages by adding data without writing new components
- **FR45:** Each page type (condition, insurance, location, program) follows a consistent content schema ensuring structural uniformity across all pages of that type
- **FR46:** Clinical content updates require sign-off from a named credentialed reviewer before publishing
- **FR47:** Structured data markup is validated before deployment
- **FR48:** The site tracks and reports Core Web Vitals and page performance metrics

## Non-Functional Requirements

### Performance

- **NFR1:** Largest Contentful Paint (LCP) < 2.5 seconds on all pages, all devices
- **NFR2:** Cumulative Layout Shift (CLS) < 0.1 on all pages — no animations push content after initial render
- **NFR3:** Interaction to Next Paint (INP) < 200ms for all interactive elements
- **NFR4:** Total initial page weight < 1.5MB (HTML + critical CSS + critical JS + above-fold images)
- **NFR5:** Time to Interactive < 3.5s — content readable before animations and non-critical JS load
- **NFR6:** Images served in next-gen formats (WebP/AVIF) with appropriate sizing per viewport via srcset/picture

### Security

- **NFR7:** All pages served over HTTPS/TLS — no exceptions, no mixed content
- **NFR8:** Insurance verification and contact form data encrypted in transit (TLS) and at rest on the receiving backend
- **NFR9:** Zero client-side storage of Protected Health Information — no localStorage, sessionStorage, or cookies containing PHI
- **NFR10:** Business Associate Agreements (BAAs) executed with all technology vendors that process or transmit user data (hosting, analytics, form processing, CDN, email)
- **NFR11:** Zero marketing tracking pixels or scripts execute on any page containing a health information form
- **NFR12:** Cookie consent mechanism blocks non-essential scripts until user opts in

### Accessibility

- **NFR13:** 100% of pages conform to WCAG 2.1 Level AA — verified by automated testing (axe-core/Lighthouse) and manual keyboard/screen reader testing
- **NFR14:** Color contrast minimum 4.5:1 for normal text, 3:1 for large text and UI components
- **NFR15:** All interactive elements operable via keyboard with visible focus indicators
- **NFR16:** No content flashes more than 3 times per second
- **NFR17:** Skip navigation links present on all pages
- **NFR18:** Form inputs have associated labels, error states are programmatically announced, and required fields are clearly indicated

### Reliability & Availability

- **NFR19:** 99.9% uptime — families search in crisis moments at all hours including nights and weekends
- **NFR20:** Static site architecture with no server-side runtime dependencies for public-facing pages
- **NFR21:** CDN-distributed hosting with < 100ms Time to First Byte (TTFB) from continental U.S. locations as measured by synthetic monitoring
- **NFR22:** Insurance form backend maintains independent availability with graceful degradation — if the form backend is unavailable, the phone CTA remains functional as the primary conversion path

### Integration

- **NFR23:** CTM dynamic number insertion loads without blocking page render or impacting LCP
- **NFR24:** JSON-LD structured data on all pages validates error-free via Google's Rich Results Test
- **NFR25:** sitemap.xml regenerated automatically on each production build, reflecting all current page URLs
- **NFR26:** Insurance form data routes to a HIPAA-compliant backend service with BAA coverage
- **NFR27:** Google Search Console property verified and receiving crawl/indexing data within 48 hours of launch

### Compliance Deadlines

- **NFR28:** 42 CFR Part 2 consent mechanisms operational on all SUD-related forms — compliance deadline February 16, 2026
- **NFR29:** WCAG 2.1 AA compliance on 100% of pages — federal deadline May 11, 2026
- **NFR30:** FTC-compliant language on all testimonials and outcome claims — ongoing, enforced through clinical content review process
- **NFR31:** LegitScript certification maintained current for Google Ads eligibility — annual renewal

### SEO Quality Thresholds

- **NFR32:** 100% of pages pass Google's mobile usability test
- **NFR33:** 100% of pages have valid, error-free JSON-LD structured data for their content type
- **NFR34:** Zero duplicate content issues — canonical URLs enforced on every page
- **NFR35:** robots.txt allows full crawling of all public pages; no accidental noindex/nofollow on content pages
- **NFR36:** All pre-rendered HTML contains the full page content (no empty shell requiring client-side rendering)
