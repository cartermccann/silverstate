# SEO Migration: URL Mapping & Traffic Preservation

> **Generated:** 2026-02-23
> **Source:** Ahrefs organic data (2026-02-20)
> **Total estimated organic traffic:** ~330 visits/month
> **Purpose:** Ensure zero traffic loss during site rebuild

---

## CRITICAL FINDING: Pages Getting Traffic That DON'T Exist in New Site

The current site has pages ranking well that are **NOT in our 30-story implementation plan**. These need to be either recreated at matching slugs or 301-redirected to the closest equivalent.

---

## Top Traffic Pages — Current Site

| Rank | Current URL | Traffic/mo | Top Keyword | Position | Volume |
|------|-------------|-----------|-------------|----------|--------|
| 1 | `/programs/teen-lgbtqia/` | **140** | lgbtq adolescent residential treatment | **#3** | 1,200 |
| 2 | `/what-we-treat/teen-dual-diagnosis/` | **71** | dual diagnosis teen residential school | **#2** | 450 |
| 3 | `/crisis-prevention-intervention-cpi-for-teen-mental-health/` | **43** | supportive approach cpi | #6 | 350 |
| 4 | `/defiant-teenager-mental-health-treatment/` | **16** | defiant teen | **#1** | 150 |
| 5 | `/burnout-middle-high-school-students/` | **11** | school burnout | #11 | 300 |
| 6 | `/synthetic-drug-abuse-when-las-vegas-teen-rehab-becomes-critical/` | **10** | synthetic drugs rehabs | #9 | 200 |
| 7 | `/` (homepage) | **10** | silver state las vegas | #4 | 40 |
| 8 | `/programs/teen-group-therapy/` | **10** | teen group therapy | #12 | 500 |
| 9 | `/teen-bath-salts-addiction/` | **4** | bath salts addiction treatment | #11 | 100 |
| 10 | `/what-we-treat/teen-ocd-treatment/` | **3** | teen obsessive compulsive disorder treatment | #19 | 350 |
| 11 | `/mental-health-teen-cliques/` | **3** | how can cliques be harmful | #3 | 20 |
| 12 | `/what-we-treat/teen-conduct-disorder-cd-treatment/` | **2** | teen conduct disorder treatment | #14 | 200 |
| 13 | `/what-we-treat/teen-trauma/` | **2** | teen ptsd treatment | #24 | 1,000 |
| 14 | `/what-we-treat/teen-mental-health/` | **0** | juvenile mental health facilities near me | #10 | 60 |
| 15 | `/what-we-treat/teen-bpd-treatment/` | **1** | teen personality disorder treatment | #23 | 500 |
| 16 | `/what-we-treat/teen-eating-disorder-treatment/teen-arfid/` | **0** | treatment for arfid | #96 | 300 |
| 17 | `/programs/teen-individual-therapy/` | **1** | silver state counseling | #8 | 30 |

---

## URL Migration Strategy

### Category A: MUST RECREATE (High Traffic, No Equivalent in New Site)

These pages are driving real traffic and MUST exist in the new site with matching or equivalent slugs.

| Current URL | Traffic | Action | New URL (Proposed) | Notes |
|-------------|---------|--------|-------------------|-------|
| `/programs/teen-lgbtqia/` | **140** | **RECREATE** | `/programs/lgbtq-affirming-care` | #1 traffic page! Rank #3 for 1,200 vol keyword. Must have dedicated page. |
| `/what-we-treat/teen-dual-diagnosis/` | **71** | **RECREATE** | `/conditions/dual-diagnosis` | #2 traffic page! Rank #2. Add as a condition page in Epic 4. |
| `/programs/teen-group-therapy/` | **10** | **RECREATE** | `/programs/group-therapy` | Therapy modality page. Currently in `therapies` data but needs a routable page. |

### Category B: BLOG CONTENT (Traffic Pages, Need Redirect or Recreation)

These are blog/article-style pages at root-level URLs. The new site has no blog section. Options:
1. Recreate as blog/resource pages (add a `/resources/` section)
2. 301 redirect to the closest condition/program page

| Current URL | Traffic | Action | Redirect Target | Notes |
|-------------|---------|--------|----------------|-------|
| `/crisis-prevention-intervention-cpi-for-teen-mental-health/` | **43** | Redirect or recreate | `/programs/residential-treatment` | 18 keywords ranking. Consider keeping as `/resources/crisis-prevention-intervention` |
| `/defiant-teenager-mental-health-treatment/` | **16** | Redirect or recreate | `/conditions/conduct-disorders` | Rank #1 for "defiant teen", "teenage defiance", "where to send defiant teenager" |
| `/burnout-middle-high-school-students/` | **11** | Redirect or recreate | `/conditions/anxiety` or recreate | Rank #11 for "school burnout" (300 vol) |
| `/synthetic-drug-abuse-when-las-vegas-teen-rehab-becomes-critical/` | **10** | Redirect | `/conditions/substance-abuse` | Substance-specific content |
| `/teen-bath-salts-addiction/` | **4** | Redirect | `/conditions/substance-abuse` | Substance-specific content |
| `/mental-health-teen-cliques/` | **3** | Redirect | `/conditions/anxiety` or `/conditions/depression` | Low traffic, safe to redirect |

### Category C: CONDITION PAGES (URL Structure Change)

Current site uses `/what-we-treat/` prefix. New site uses `/conditions/`. These need 301 redirects.

| Current URL | Traffic | New URL | Redirect Type |
|-------------|---------|---------|--------------|
| `/what-we-treat/teen-dual-diagnosis/` | 71 | `/conditions/dual-diagnosis` | 301 |
| `/what-we-treat/teen-ocd-treatment/` | 3 | `/conditions/ocd` | 301 |
| `/what-we-treat/teen-conduct-disorder-cd-treatment/` | 2 | `/conditions/conduct-disorders` | 301 |
| `/what-we-treat/teen-trauma/` | 2 | `/conditions/trauma-ptsd` | 301 |
| `/what-we-treat/teen-mental-health/` | 0 | `/conditions/depression` or hub | 301 |
| `/what-we-treat/teen-bpd-treatment/` | 1 | `/conditions/personality-disorders` | 301 |
| `/what-we-treat/teen-eating-disorder-treatment/teen-arfid/` | 0 | `/conditions/arfid` | 301 |

### Category D: PROGRAM PAGES (URL Structure Similar)

Current site uses `/programs/` prefix which matches our new structure. Some need slug changes.

| Current URL | Traffic | New URL | Action |
|-------------|---------|---------|--------|
| `/programs/teen-lgbtqia/` | 140 | `/programs/lgbtq-affirming-care` | 301 redirect + new page |
| `/programs/teen-group-therapy/` | 10 | `/programs/group-therapy` | 301 redirect + new page |
| `/programs/teen-individual-therapy/` | 1 | `/programs/individual-therapy` | 301 redirect |

### Category E: PAGES WITH EQUIVALENT IN NEW SITE (Direct Match or Close)

| Current URL | New URL | Action |
|-------------|---------|--------|
| `/` | `/` | Direct match |
| `/about-us/` | `/about/our-team` | 301 redirect |
| `/admissions/` | `/admissions` | Direct match (remove trailing slash) |
| `/contact-us/` | `/contact` | 301 redirect |

---

## REQUIRED ADDITIONS TO IMPLEMENTATION PLAN

### 1. NEW PAGES NEEDED (not in current 30 stories)

| Page | Why | Epic | Suggested Story |
|------|-----|------|----------------|
| `/programs/lgbtq-affirming-care` | #1 traffic page (140/mo), rank #3 | Epic 3 | Add to Story 3.3 or new 3.4 |
| `/conditions/dual-diagnosis` | #2 traffic page (71/mo), rank #2 | Epic 4 | Add to Story 4.3 or new 4.5 |
| `/programs/group-therapy` | 10/mo traffic, rank #12 | Epic 3 | Add to Story 3.3 |

### 2. REDIRECT MAP (add to Story 1.11 or new story)

A comprehensive 301 redirect map must be added to `vercel.json` to preserve SEO equity during migration. This includes:
- `/what-we-treat/*` → `/conditions/*` (pattern-based)
- `/about-us/` → `/about/our-team`
- `/contact-us/` → `/contact`
- All blog post URLs → closest condition/program page
- All old program URLs with different slugs

### 3. BLOG/RESOURCES SECTION DECISION NEEDED

The current site has ~6 blog-style articles driving ~87 visits/month combined. Options:
- **Option A:** Add a `/resources/` section and recreate the top 3-4 articles (CPI, defiant teen, burnout)
- **Option B:** 301 redirect all blog posts to closest service pages (loses content but simpler)
- **Option C:** Defer blog to post-MVP

### 4. CONDITION PAGES GAP ANALYSIS

Current conditions in our plan vs. what's ranking:

| Our Planned Conditions | Has Equivalent on Current Site? | Current Site Has But We're Missing |
|----------------------|-------------------------------|----------------------------------|
| Anxiety | Yes (blog post, not dedicated page) | |
| Depression | Partial (`/teen-mental-health/`) | |
| Trauma & PTSD | Yes (`/teen-trauma/`) | |
| Bipolar Disorder | Not on current site | |
| ADHD | Not on current site | |
| Substance Abuse | Yes (blog posts) | |
| Alcohol Abuse | Not on current site | |
| Marijuana Abuse | Not on current site | |
| Anorexia | Not on current site | |
| Bulimia | Not on current site | |
| Binge Eating | Not on current site | |
| ARFID | Yes (`/teen-arfid/`) | |
| | | **Dual Diagnosis** (71 traffic!) |
| | | **OCD** (3 traffic, 350 vol keyword) |
| | | **Conduct Disorder** (2 traffic, 200 vol) |
| | | **BPD / Personality Disorders** (1 traffic, 500 vol) |

**Missing conditions that should be added:** Dual Diagnosis, OCD, Conduct Disorder, BPD/Personality Disorders

---

## TOP KEYWORD OPPORTUNITIES

Keywords where the site is ranking but could improve with better pages:

| Keyword | Volume | Current Position | Opportunity |
|---------|--------|-----------------|-------------|
| lgbtq adolescent residential treatment | 1,200 | #3 | Protect — dedicated page needed |
| teen ptsd treatment | 1,000 | #24 | Improve — dedicated trauma page will help |
| teen anxiety treatment | 1,400 | #29 | Improve — dedicated anxiety page will help |
| adolescent depression treatment | 1,200 | #28 | Improve — dedicated depression page will help |
| teen personality disorder treatment | 500 | #23 | Add — BPD/personality disorder page needed |
| teen group therapy | 500 | #12 | Improve — dedicated therapy page |
| dual diagnosis teen residential school | 450 | #2 | Protect — dedicated page needed |
| teen obsessive compulsive disorder treatment | 350 | #19 | Add — OCD condition page needed |
| school burnout | 300 | #11 | Content opportunity |
| teen conduct disorder treatment | 200 | #14 | Add — conduct disorder page needed |

---

## NEXT STEPS

1. **DECISION:** Recreate blog content, redirect, or defer? (Option A/B/C above)
2. **UPDATE STORIES:** Add LGBTQ, dual diagnosis, OCD, conduct disorder, BPD pages to epics
3. **ADD REDIRECT STORY:** Create a story for the 301 redirect map in `vercel.json`
4. **UPDATE ROUTE TABLE:** Add new pages to Story 1.8's route manifest
5. **CONTENT DATA:** Create data entries for new condition/program pages
