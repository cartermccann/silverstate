# Story 4.1: Condition Content Data

Status: ready-for-dev

## Story

As a **developer**,
I want a typed content data file covering all ~25 conditions Silver State treats,
So that condition pages are generated from structured data with consistent schemas.

**Dependencies:** Story 1.1 (production project initialized), Story 1.2 (`ConditionData` interface in `types.ts`, placeholder `data/conditions.ts` with empty array)

**FRs covered:** FR2, FR3, FR5, FR6, FR15, FR16, FR44, FR45

## Acceptance Criteria

1. **Given** the data architecture and `ConditionData` interface from Epic 1, **When** the condition data file is created, **Then** `src/data/conditions.ts` exports typed data for all conditions: Anxiety, Depression, Trauma/PTSD, Suicidal Ideation, OCD, Bipolar Disorder, Autism Spectrum, Oppositional Defiant, Conduct Disorder, DMDD, BPD, Adjustment Disorder, Dual Diagnosis, Substance Abuse, Alcohol Abuse, Opioid Abuse, Benzodiazepine Abuse, Cocaine Abuse, Meth Abuse, Cannabis Abuse, Anorexia Nervosa, Bulimia Nervosa, Binge Eating, ARFID, OSFED (FR2)
2. **And** each condition includes: description, symptoms, evidence-based therapies, how Silver State treats it, FAQ entries, related programs, `reviewedBy`, `reviewDate`, and source citations (FR3, FR6, FR15, FR16)
3. **And** source citations reference trusted authorities: CDC, SAMHSA, NIDA, peer-reviewed journals (FR16)
4. **And** all exports have explicit type annotations
5. **And** build-time content validation passes

## Tasks / Subtasks

- [ ] **Task 1: Replace the placeholder `src/data/conditions.ts` with full condition data** (AC: #1, #4)
  - [ ] 1.1: Remove the placeholder empty array from `data/conditions.ts` created by Story 1.2
  - [ ] 1.2: Import `ConditionData`, `FaqEntry`, and `SourceCitation` types from `../types`
  - [ ] 1.3: Export a `conditions` constant typed as `ConditionData[]` containing all 25 condition objects
  - [ ] 1.4: Preserve any legacy re-export from the mockup's `content.ts` if Story 1.2 set one up (e.g., `conditionNames` string array for homepage use) -- do NOT remove it; add the full data alongside it

- [ ] **Task 2: Create Mental Health condition entries (~12)** (AC: #1, #2, #3)
  - [ ] 2.1: `anxiety` -- slug: `anxiety-treatment`, category: `mental-health`, name: `Anxiety Treatment`
  - [ ] 2.2: `depression` -- slug: `depression-treatment`, category: `mental-health`, name: `Depression Treatment`
  - [ ] 2.3: `trauma-ptsd` -- slug: `trauma-ptsd-treatment`, category: `mental-health`, name: `Trauma & PTSD Treatment`
  - [ ] 2.4: `suicidal-ideation` -- slug: `suicidal-ideation-treatment`, category: `mental-health`, name: `Suicidal Ideation Treatment`
  - [ ] 2.5: `ocd` -- slug: `ocd-treatment`, category: `mental-health`, name: `OCD Treatment`
  - [ ] 2.6: `bipolar-disorder` -- slug: `bipolar-disorder-treatment`, category: `mental-health`, name: `Bipolar Disorder Treatment`
  - [ ] 2.7: `autism-spectrum` -- slug: `autism-spectrum-treatment`, category: `mental-health`, name: `Autism Spectrum Treatment`
  - [ ] 2.8: `oppositional-defiant` -- slug: `oppositional-defiant-disorder-treatment`, category: `mental-health`, name: `Oppositional Defiant Disorder Treatment`
  - [ ] 2.9: `conduct-disorder` -- slug: `conduct-disorder-treatment`, category: `mental-health`, name: `Conduct Disorder Treatment`
  - [ ] 2.10: `dmdd` -- slug: `dmdd-treatment`, category: `mental-health`, name: `DMDD Treatment`
  - [ ] 2.11: `bpd` -- slug: `bpd-treatment`, category: `mental-health`, name: `Borderline Personality Disorder Treatment`
  - [ ] 2.12: `adjustment-disorder` -- slug: `adjustment-disorder-treatment`, category: `mental-health`, name: `Adjustment Disorder Treatment`

- [ ] **Task 3: Create Substance Abuse condition entries (~8)** (AC: #1, #2, #3)
  - [ ] 3.1: `dual-diagnosis` -- slug: `dual-diagnosis-treatment`, category: `substance-abuse`, name: `Dual Diagnosis Treatment`
  - [ ] 3.2: `substance-abuse` -- slug: `substance-abuse-treatment`, category: `substance-abuse`, name: `Substance Abuse Treatment`
  - [ ] 3.3: `alcohol-abuse` -- slug: `alcohol-abuse-treatment`, category: `substance-abuse`, name: `Alcohol Abuse Treatment`
  - [ ] 3.4: `opioid-abuse` -- slug: `opioid-abuse-treatment`, category: `substance-abuse`, name: `Opioid Abuse Treatment`
  - [ ] 3.5: `benzodiazepine-abuse` -- slug: `benzodiazepine-abuse-treatment`, category: `substance-abuse`, name: `Benzodiazepine Abuse Treatment`
  - [ ] 3.6: `cocaine-abuse` -- slug: `cocaine-abuse-treatment`, category: `substance-abuse`, name: `Cocaine Abuse Treatment`
  - [ ] 3.7: `meth-abuse` -- slug: `meth-abuse-treatment`, category: `substance-abuse`, name: `Methamphetamine Abuse Treatment`
  - [ ] 3.8: `cannabis-abuse` -- slug: `cannabis-abuse-treatment`, category: `substance-abuse`, name: `Cannabis Abuse Treatment`

- [ ] **Task 4: Create Eating Disorder condition entries (~5)** (AC: #1, #2, #3)
  - [ ] 4.1: `anorexia-nervosa` -- slug: `anorexia-nervosa-treatment`, category: `eating-disorders`, name: `Anorexia Nervosa Treatment`
  - [ ] 4.2: `bulimia-nervosa` -- slug: `bulimia-nervosa-treatment`, category: `eating-disorders`, name: `Bulimia Nervosa Treatment`
  - [ ] 4.3: `binge-eating` -- slug: `binge-eating-disorder-treatment`, category: `eating-disorders`, name: `Binge Eating Disorder Treatment`
  - [ ] 4.4: `arfid` -- slug: `arfid-treatment`, category: `eating-disorders`, name: `ARFID Treatment`
  - [ ] 4.5: `osfed` -- slug: `osfed-treatment`, category: `eating-disorders`, name: `OSFED Treatment`

- [ ] **Task 5: Populate each condition entry with required content fields** (AC: #2, #3)
  - [ ] 5.1: `description` -- 2-3 paragraphs describing the condition as it manifests in adolescents (ages 11-17). Write in empathetic, parent-facing language -- not clinical jargon. Must reference the fact that Silver State specializes in adolescent treatment
  - [ ] 5.2: `headline` -- Page headline, e.g., "Adolescent Anxiety Treatment at Silver State"
  - [ ] 5.3: `symptoms` -- Array of 5-8 symptom strings specific to how this condition presents in teens. Focus on observable behavioral signs parents would notice (e.g., "Withdrawal from friends and activities they used to enjoy" rather than "anhedonia")
  - [ ] 5.4: `therapies` -- Array of 3-5 evidence-based therapy name strings used at Silver State for this condition (e.g., `['Cognitive Behavioral Therapy (CBT)', 'Dialectical Behavior Therapy (DBT)', 'EMDR']`). Must be real, evidence-based therapies appropriate for the condition
  - [ ] 5.5: `approach` -- 1-2 paragraphs describing how Silver State specifically treats this condition. Reference the levels of care (Residential, PHP, IOP), the 4:1 staff-to-client ratio, on-site academics, and family involvement
  - [ ] 5.6: `faqs` -- Array of 3-5 `FaqEntry` objects with parent-focused Q&As. Questions should match real search intent (e.g., "How long does adolescent anxiety treatment take?", "Does insurance cover teen depression treatment?")
  - [ ] 5.7: `relatedPrograms` -- Array of program slug strings: select from `['residential-treatment', 'php', 'iop']` -- include all that are clinically relevant
  - [ ] 5.8: `relatedConditions` -- Array of 2-4 related condition slug strings. For example, anxiety's related conditions might include `['depression-treatment', 'trauma-ptsd-treatment', 'ocd-treatment']`
  - [ ] 5.9: `metaTitle` -- SEO title tag for the condition page. Target under 60 characters total including the ` | Silver State` suffix. Example: `'Adolescent Anxiety Treatment | Silver State'`
  - [ ] 5.10: `metaDescription` -- 150-160 character SEO meta description. Must include the condition name, "adolescent treatment," and "Silver State" or "Las Vegas"

- [ ] **Task 6: Add clinical reviewer attribution to every entry** (AC: #2)
  - [ ] 6.1: Set `reviewedBy` to `'Dr. Russ Park, MD'` on all condition entries (Silver State's medical director -- this is the named clinical reviewer per FR15)
  - [ ] 6.2: Set `reviewDate` to a recent date string (e.g., `'2026-02-01'`) on all entries

- [ ] **Task 7: Add source citations to every entry** (AC: #3)
  - [ ] 7.1: Each condition must have 2-4 `SourceCitation` objects in the `sources` array
  - [ ] 7.2: Citations must reference real, authoritative sources appropriate to the condition:
    - **Mental health conditions:** CDC adolescent mental health data, SAMHSA treatment resources, NIMH condition-specific pages, APA practice guidelines
    - **Substance abuse conditions:** NIDA adolescent substance use data, SAMHSA National Helpline/treatment locator, CDC youth substance use data
    - **Eating disorders:** NEDA (National Eating Disorders Association), NIMH eating disorder pages, APA eating disorder guidelines
  - [ ] 7.3: Each citation must have a `label` (display text) and `url` (valid URL to the authoritative source)
  - [ ] 7.4: Example format:
    ```typescript
    sources: [
      { label: 'CDC: Data and Statistics on Children\'s Mental Health', url: 'https://www.cdc.gov/childrensmentalhealth/data.html' },
      { label: 'SAMHSA: Treatments for Substance Use Disorders', url: 'https://www.samhsa.gov/find-help/treatment' },
    ]
    ```

- [ ] **Task 8: Add helper exports for category filtering** (AC: #4)
  - [ ] 8.1: Export `mentalHealthConditions` typed as `ConditionData[]` -- filtered from `conditions` where `category === 'mental-health'`
  - [ ] 8.2: Export `substanceAbuseConditions` typed as `ConditionData[]` -- filtered from `conditions` where `category === 'substance-abuse'`
  - [ ] 8.3: Export `eatingDisorderConditions` typed as `ConditionData[]` -- filtered from `conditions` where `category === 'eating-disorders'`
  - [ ] 8.4: Export a `getConditionBySlug` helper function: `export function getConditionBySlug(slug: string): ConditionData | undefined` that returns the condition matching the given slug

- [ ] **Task 9: Verify data integrity** (AC: #5)
  - [ ] 9.1: Run `npx tsc --noEmit` -- zero TypeScript errors
  - [ ] 9.2: Verify all 25 condition entries are present by checking `conditions.length === 25`
  - [ ] 9.3: Verify every entry has a non-empty `description`, `symptoms` array with at least 5 items, `therapies` array with at least 3 items, `faqs` array with at least 3 items, and `sources` array with at least 2 items
  - [ ] 9.4: Verify no duplicate slugs exist in the array
  - [ ] 9.5: Verify all `relatedPrograms` slugs reference valid program slugs (`residential-treatment`, `php`, `iop`)
  - [ ] 9.6: Verify all `relatedConditions` slugs reference valid condition slugs that exist in the `conditions` array
  - [ ] 9.7: Verify the `data/index.ts` barrel re-exports the new named exports from `conditions.ts`

## Dev Notes

### Critical Context

Story 1.2 creates `src/data/conditions.ts` as a placeholder file. It may re-export a legacy `conditionNames` string array from the mockup's `content.ts` for homepage use. This story replaces the placeholder with the full production data while preserving any legacy exports.

The `ConditionData` interface is defined in `src/types.ts` by Story 1.2. The exact shape is:

```typescript
export interface ConditionData {
  slug: string
  name: string
  headline: string
  category: 'mental-health' | 'substance-abuse' | 'eating-disorders'
  description: string
  symptoms: string[]
  therapies: string[]
  approach: string
  faqs: FaqEntry[]
  relatedPrograms: string[]
  relatedConditions: string[]
  metaTitle: string
  metaDescription: string
  reviewedBy?: string
  reviewDate?: string
  sources: SourceCitation[]
}
```

**Added:** `metaTitle` and `metaDescription` fields for SEO meta generation, consistent with `ProgramPageData` interface pattern.

```typescript
export interface FaqEntry {
  q: string
  a: string
}

export interface SourceCitation {
  label: string
  url: string
}
```

### Content Tone and Quality Requirements

This is a YMYL (Your Money Your Life) healthcare site. Content must be:

- **Empathetic and parent-facing:** Write for a worried parent at 11 PM, not for a clinician. Avoid jargon; explain clinical terms when used
- **Clinically accurate:** All therapy names must be real, evidence-based therapies. All symptom descriptions must be medically accurate
- **Adolescent-specific:** Every description must focus on ages 11-17. Do not use generic adult treatment language
- **Conversion-aware:** Content should build trust and naturally lead to the phone CTA. Include references to Silver State's specific differentiators (4:1 ratio, on-site academics, full continuum, LGBTQIA+ affirming)
- **SEO-informed:** Descriptions should naturally incorporate the condition name, "adolescent treatment," "teen," and Las Vegas/Nevada geographic context where appropriate

### Condition Slug Conventions

All condition slugs follow the pattern `{condition-name}-treatment` to match the URL structure `/conditions/{slug}`. The slug in the `ConditionData` IS the URL path segment -- the route will be `/conditions/${condition.slug}`.

### Cross-Reference Slug Values

**Program slugs** (for `relatedPrograms`):
- `residential-treatment`
- `php`
- `iop`

**Condition slugs** (for `relatedConditions`): Use the same slug values as defined in each condition entry's `slug` field. Every condition should cross-reference 2-4 clinically related conditions. Common groupings:
- Anxiety often co-occurs with depression, OCD, trauma/PTSD
- Depression often co-occurs with anxiety, suicidal ideation, substance abuse
- Substance abuse conditions often relate to dual diagnosis and each other
- Eating disorders often relate to each other and to anxiety, depression

### Source Citation Guidelines

Source citations establish E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) for Google and build trust with clinicians like Dr. Chen (persona from the epics).

**Required source authorities by category:**

| Category | Primary Sources |
|----------|----------------|
| Mental Health | CDC Children's Mental Health, NIMH, SAMHSA, APA |
| Substance Abuse | NIDA, SAMHSA, CDC Youth Risk Behavior, APA |
| Eating Disorders | NEDA, NIMH, APA, Academy for Eating Disorders |

**Citation format rules:**
- `label` must be a readable display string identifying the organization and the resource
- `url` must be a real, valid URL to the authoritative resource (not a made-up URL)
- Prefer condition-specific resource pages over generic organization homepages

### File Structure After This Story

```
src/data/
  conditions.ts     # MODIFIED -- full 25-condition ConditionData[] + category filters + getConditionBySlug
  index.ts          # MODIFIED -- add re-exports for new named exports (mentalHealthConditions, etc.)
```

### Architecture Compliance

- All exports use explicit type annotations: `export const conditions: ConditionData[] = [...]`
- All interfaces imported from `../types` -- not defined in the data file
- Named exports only -- no default exports on data files
- Cross-references use slug strings -- not object references or numeric IDs
- Clinical content includes `reviewedBy` and `reviewDate` fields on every entry
- Data file is pure TypeScript -- no React imports, no side effects
- FaqEntry uses `q` and `a` field names (grandfathered short names from types.ts)

### Dependencies

- **Requires:** Story 1.1 (project initialized), Story 1.2 (`ConditionData` interface in `types.ts`, placeholder `conditions.ts`)
- **Produces for:** Story 4.2 (mental health condition pages), Story 4.3 (substance abuse condition pages), Story 4.4 (eating disorder condition pages)
- **Also consumed by:** Homepage condition links, Nav condition link targets, Footer condition link targets, internal cross-links on program pages

### Anti-Patterns to AVOID

1. **DO NOT** define interfaces in the data file -- import all types from `../types`
2. **DO NOT** use default exports -- only named exports
3. **DO NOT** hardcode phone numbers in FAQ answers -- reference "call Silver State" generically; the phone number is rendered by the page component via `site.phone`
4. **DO NOT** use abbreviations for new field content -- write full words (`description`, not `desc`). The `q`/`a` field names on FaqEntry are grandfathered
5. **DO NOT** create fictional source citations -- all URLs must point to real authoritative resources (CDC, SAMHSA, NIDA, NIMH, NEDA, APA)
6. **DO NOT** use generic adult treatment content -- every description must be specific to adolescents ages 11-17
7. **DO NOT** include medical advice or diagnostic criteria -- the site provides information about treatment, not diagnosis
8. **DO NOT** remove legacy exports from `conditions.ts` that Story 1.2 may have set up (e.g., `conditionNames` string array)
9. **DO NOT** use `--muted` color references in content strings (content is plain text, not styled here, but avoid suggesting color usage)
10. **DO NOT** duplicate condition entries -- exactly 25 unique conditions, no duplicates
11. **DO NOT** leave any condition entry with empty `symptoms`, `therapies`, `faqs`, or `sources` arrays
12. **DO NOT** use object references for cross-linking -- use slug strings only
13. **DO NOT** add React imports or side effects to this data file

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] -- Data file rules, named exports, type annotations, cross-references
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- Condition page URL structure `/conditions/{slug}`
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- Data file location and boundary rules
- [Source: _bmad-output/planning-artifacts/epics.md#Story-4.1] -- Acceptance criteria and FR mapping
- [Source: _bmad-output/planning-artifacts/prd.md#FR2] -- ~25 condition treatment pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] -- Evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR5] -- Cross-content internal links via slugs
- [Source: _bmad-output/planning-artifacts/prd.md#FR6] -- FAQ sections on condition pages
- [Source: _bmad-output/planning-artifacts/prd.md#FR15] -- Named credentialed clinical reviewer
- [Source: _bmad-output/planning-artifacts/prd.md#FR16] -- Source citations for medical claims
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] -- Content in data files separate from components
- [Source: _bmad-output/planning-artifacts/prd.md#FR45] -- Consistent content schema per page type
- [Source: _bmad-output/implementation-artifacts/1-2-shared-data-types-and-common-content-data.md] -- ConditionData interface definition, placeholder data file strategy

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
