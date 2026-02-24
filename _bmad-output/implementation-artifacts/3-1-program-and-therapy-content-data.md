# Story 3.1: Program & Therapy Content Data

Status: ready-for-dev

## Story

As a **developer**,
I want typed content data files for all treatment programs and therapy modalities,
So that program pages are assembled from structured data without hardcoding content in components.

**Dependencies:** Story 1.2 (shared data types in `types.ts` — `ProgramData`, `TherapyModality`, `FaqEntry`, `DailyScheduleEntry`), Story 1.9 (build-time content validation script)

**FRs covered:** FR1 (program pages with structure, approach, duration, daily schedule), FR3 (evidence-based therapy descriptions), FR4 (daily schedule and program structure), FR5 (cross-references to related conditions), FR44 (data files separate from components), FR45 (consistent content schema)

## Acceptance Criteria

1. **Given** the data architecture from Epic 1, **When** program and therapy data files are created, **Then** `src/data/programs.ts` exports typed `ProgramData` for Residential, PHP, and IOP — each including: description, approach, duration, daily schedule, therapy modalities, target audience, FAQ entries, and related conditions (FR1, FR4)
2. **And** `src/data/therapies.ts` exports typed `TherapyModality` for all evidence-based therapies: CBT, DBT, EMDR, trauma-focused CBT, somatic experiencing, motivational interviewing, family therapy, etc. (FR3)
3. **And** all exports have explicit type annotations matching interfaces in `types.ts`
4. **And** cross-references use slug strings (e.g., `relatedConditions: ['anxiety', 'depression']`) (FR5)
5. **And** build-time content validation passes with zero errors

## Tasks / Subtasks

- [ ] **Task 1: Extend `ProgramData` interface in `src/types.ts` for full program page support** (AC: #1, #3)
  - [ ] 1.1: Review the existing `ProgramData` interface in `types.ts` — the mockup version has: `label`, `title`, `body`, `features: string[]`, `stat?: string`. This is insufficient for full program pages
  - [ ] 1.2: Extend `ProgramData` (or create a new `ProgramPageData` interface that extends it) to include all fields needed for program pages:
    ```typescript
    interface ProgramPageData {
      slug: string                    // URL slug: 'residential-treatment', 'php', 'iop'
      label: string                   // Short label: 'Residential Treatment'
      title: string                   // Page heading
      metaTitle: string               // SEO title tag
      metaDescription: string         // SEO meta description
      heroImage?: string              // Hero/header image path
      overview: string                // Program overview paragraph
      approach: string                // Treatment approach description
      duration: string                // Typical duration (e.g., "30-90 days")
      targetAudience: string          // Who this program is for
      dailySchedule: DailyScheduleEntry[]  // Structured daily schedule
      therapyModalities: string[]     // Slugs referencing therapies.ts
      features: string[]              // Feature bullet points
      stat?: string                   // Key statistic (e.g., "4:1 staff-to-client ratio")
      faqs: FaqEntry[]                // Program-specific FAQ entries
      relatedConditions: string[]     // Slug references to conditions.ts
      relatedPrograms: string[]       // Slug references to other programs
      reviewedBy?: string             // Clinical reviewer name
      reviewDate?: string             // Last review date
    }
    ```
  - [ ] 1.3: Keep the existing `ProgramData` interface intact for backward compatibility with the homepage data (Story 2.1/2.2) — the homepage uses the simpler interface. The full `ProgramPageData` is for dedicated program pages

- [ ] **Task 2: Create or extend `TherapyModality` interface in `src/types.ts`** (AC: #2, #3)
  - [ ] 2.1: Define a `TherapyModality` interface in `types.ts`:
    ```typescript
    interface TherapyModality {
      slug: string                    // URL-friendly identifier: 'cbt', 'dbt', 'emdr'
      name: string                    // Full name: 'Cognitive Behavioral Therapy (CBT)'
      shortName: string               // Abbreviation or short form: 'CBT'
      description: string             // 2-3 sentence description of the therapy
      howItHelps: string              // How this therapy helps adolescents specifically
      usedFor: string[]               // Condition slugs where this therapy is primary
      evidenceBasis?: string          // Brief note on evidence basis (e.g., "FDA-recognized, 300+ clinical trials")
    }
    ```
  - [ ] 2.2: This interface supports both the therapy listings on program pages and potential future standalone therapy description sections

- [ ] **Task 3: Create `src/data/programs.ts` with full program page data** (AC: #1, #4)
  - [ ] 3.1: Create `src/data/programs.ts` with typed named exports
  - [ ] 3.2: Export `residentialProgram` as `ProgramPageData` with complete content:
    - slug: `'residential-treatment'`
    - Overview: 24/7 therapeutic support, structured safe environment, individualized treatment. Source from the mockup's `programs.residential` and expand with clinical detail
    - Approach: evidence-based therapies combined with academic continuity and family programming
    - Duration: "Typical stay is 30-90 days, individualized to each teen's progress"
    - Target audience: teens whose mental health requires around-the-clock clinical support
    - Daily schedule: full 7AM-9PM schedule from the mockup's `dailySchedule` array — this is the residential schedule
    - Therapy modalities: `['cbt', 'dbt', 'trauma-informed-care', 'individual-therapy', 'group-therapy', 'family-therapy', 'art-music-therapy', 'adventure-therapy', 'meditation-mindfulness']`
    - Features: expanded from the mockup's 7-item list
    - Stat: "4:1 staff-to-client ratio"
    - FAQs: 5-7 residential-specific questions (e.g., "How long does residential treatment last?", "Can my teen continue school during residential treatment?", "What does a typical day look like?", "How often can I visit or communicate with my teen?", "What happens after residential treatment?")
    - Related conditions: `['anxiety-treatment', 'depression-treatment', 'trauma-ptsd-treatment', 'substance-abuse-treatment', 'dual-diagnosis-treatment']`
    - Related programs: `['php', 'iop']`
    - reviewedBy and reviewDate: provide placeholder values (e.g., `'Dr. Russ Park, DNP'`, `'2026-02-01'`)
  - [ ] 3.3: Export `phpProgram` as `ProgramPageData` with complete content:
    - slug: `'php'`
    - Overview: full clinical intensity during the day, home evenings. Source from mockup's `programs.php` and expand
    - Duration: "Typical duration is 4-6 weeks, with sessions 5 days per week"
    - Daily schedule: create a PHP-specific schedule (e.g., 8AM-3PM structured, evenings at home)
    - Therapy modalities: `['cbt', 'dbt', 'trauma-informed-care', 'individual-therapy', 'group-therapy', 'family-therapy']`
    - FAQs: 5-7 PHP-specific questions
    - Related conditions and programs populated appropriately
  - [ ] 3.4: Export `iopProgram` as `ProgramPageData` with complete content:
    - slug: `'iop'`
    - Overview: targeted sessions several times per week, maintain school and routines. Source from mockup's `programs.iop` and expand
    - Duration: "Typical duration is 6-12 weeks, with 3 sessions per week"
    - Daily schedule: create an IOP-specific schedule (e.g., after-school sessions 3x/week)
    - Therapy modalities: `['cbt', 'dbt', 'individual-therapy', 'group-therapy', 'family-therapy']`
    - FAQs: 5-7 IOP-specific questions
    - Related conditions and programs populated appropriately
  - [ ] 3.5: Export a convenience lookup: `export const programsBySlug: Record<string, ProgramPageData>` mapping slug to data object — enables easy lookup by route parameter
  - [ ] 3.6: Export `allPrograms: ProgramPageData[]` as an ordered array (Residential, PHP, IOP) for iteration

- [ ] **Task 4: Create `src/data/therapies.ts` with therapy modality data** (AC: #2)
  - [ ] 4.1: Create `src/data/therapies.ts` with typed named exports
  - [ ] 4.2: Export `therapyModalities` as `TherapyModality[]` containing all evidence-based therapies:
    - Cognitive Behavioral Therapy (CBT)
    - Dialectical Behavior Therapy (DBT)
    - EMDR (Eye Movement Desensitization and Reprocessing)
    - Trauma-Focused CBT (TF-CBT)
    - Somatic Experiencing
    - Motivational Interviewing
    - Family Therapy
    - Group Therapy
    - Individual Therapy
    - Art & Music Therapy
    - Adventure Therapy
    - Meditation & Mindfulness
    - Crisis Prevention & Intervention (CPI)
    - Medication Management
    - LGBTQIA+ Affirming Care (not a therapy per se, but a modality/approach)
    - Holistic Treatment
  - [ ] 4.3: Each therapy must have a meaningful `description` (2-3 sentences about what the therapy involves) and `howItHelps` (1-2 sentences about adolescent-specific benefits)
  - [ ] 4.4: `usedFor` arrays should cross-reference condition slugs that will be defined in Epic 4 (e.g., CBT is used for anxiety, depression, OCD; EMDR is used for trauma/PTSD)
  - [ ] 4.5: Export a convenience lookup: `export const therapyBySlug: Record<string, TherapyModality>` mapping slug to data object

- [ ] **Task 5: Add re-exports to `src/data/index.ts`** (AC: #3)
  - [ ] 5.1: Add `export * from './programs'` to `src/data/index.ts`
  - [ ] 5.2: Add `export * from './therapies'` to `src/data/index.ts`

- [ ] **Task 6: Build-time validation** (AC: #5)
  - [ ] 6.1: Verify `npx tsc --noEmit` passes with zero errors — all type annotations match interface definitions
  - [ ] 6.2: If `scripts/validate-content.ts` is available (Story 1.9), verify it validates the new data files:
    - Every `ProgramPageData` has non-empty required fields (slug, label, title, overview, approach, duration, dailySchedule, therapyModalities, features, faqs)
    - Every `TherapyModality` has non-empty required fields (slug, name, description, howItHelps)
    - Cross-reference slugs in `therapyModalities` array match actual slugs in `therapies.ts`
    - Cross-reference slugs in `relatedConditions` will be validated when condition data exists (Epic 4)
  - [ ] 6.3: If the validation script is not yet available, add a `// TODO: Validate with scripts/validate-content.ts when Story 1.9 is complete` comment in the data files

## Dev Notes

### Critical Context

**This is a data-only story.** No React components or pages are created — only TypeScript data files in `src/data/`. The data files produced here are consumed by Stories 3.2 and 3.3 (program page template and individual program pages).

**The mockup's `data/content.ts` contains basic program data** (`programs.residential`, `programs.php`, `programs.iop`) and a simple therapy string array (`therapies`). These are significantly less detailed than what the production program pages require. This story expands the data substantially:

| Field | Mockup | Production |
|-------|--------|------------|
| Program overview | 1-2 sentences (`body`) | Full paragraph with clinical detail |
| Duration | Not specified | Explicit duration range |
| Target audience | Not specified | Who this program serves |
| Daily schedule | Shared across all programs | Per-program schedule |
| Therapy modalities | Simple string list | Structured objects with descriptions, evidence basis |
| FAQs | General FAQs only | Program-specific FAQ entries |
| Related content | None | Cross-references to conditions and other programs |
| Clinical review | None | `reviewedBy` and `reviewDate` fields |
| SEO metadata | None | `metaTitle` and `metaDescription` per program |

**The `DailyScheduleEntry` type already exists** in `types.ts` from the mockup: `{ time: string; activity: string; desc: string }`. The residential schedule can be sourced directly from the mockup's `dailySchedule` array. PHP and IOP need their own schedules created.

**Therapy modalities cross-reference conditions.** The `usedFor` field on each therapy references condition slugs. These slugs will be defined in Story 4.1 (condition data). For now, use the expected slugs based on the condition list in the epics: `'anxiety-treatment'`, `'depression-treatment'`, `'trauma-ptsd-treatment'`, etc.

### Architecture Compliance

- **Data file rules:** Named exports, never default. Explicit type annotations on all exports. Interfaces in `types.ts`, not in data files
- **Content field naming:** Use full words (`description` not `desc`) for new fields. Existing `desc` fields from the mockup types are grandfathered
- **Cross-references:** Slug strings for linking between content areas — `relatedConditions: ['anxiety-treatment']`, `therapyModalities: ['cbt', 'dbt']`
- **Clinical content fields:** Include `reviewedBy?: string` and `reviewDate?: string` on program data
- **Barrel file:** Re-export from `data/index.ts` — the only barrel file allowed in the project
- **Image paths:** Use `import.meta.env.VITE_R2_BASE_URL || '/assets'` for image path prefixes
- **Phone numbers:** Reference `site.phoneTel` from `data/common.ts` if any CTA text is stored in data — never hardcode phone numbers

### Dependencies

| Direction | Story | What |
|-----------|-------|------|
| Depends on | 1.2 | `types.ts` base interfaces (`FaqEntry`, `DailyScheduleEntry`, possibly `ProgramData`) |
| Depends on | 1.9 | `scripts/validate-content.ts` for build-time validation (optional — can defer) |
| Produces for | 3.2 | `residentialProgram` data consumed by the Residential page |
| Produces for | 3.3 | `phpProgram` and `iopProgram` data consumed by PHP and IOP pages |
| Produces for | 2.2 | Homepage may reference program data for the programs section (though homepage has its own lighter data) |
| Produces for | 4.x | Condition pages cross-reference program slugs |
| Produces for | 8.1 | Admissions page references programs |

### Anti-Patterns to AVOID

1. **DO NOT** put interfaces in the data files — all type definitions go in `src/types.ts`
2. **DO NOT** use `export default` — use named exports only: `export const residentialProgram: ProgramPageData = {...}`
3. **DO NOT** leave type annotations off exports — every export must have an explicit type
4. **DO NOT** hardcode phone numbers in data — reference the phone number pattern from `data/common.ts`
5. **DO NOT** use abbreviations for new field names — `description` not `desc`, `overview` not `ovw`
6. **DO NOT** put React imports in data files — data files are pure TypeScript data, no JSX, no React
7. **DO NOT** create the data files without the `index.ts` barrel re-exports
8. **DO NOT** make up clinical content — source from the existing mockup data and expand with reasonable detail. Mark any placeholder content with `// TODO: Replace with final clinical content`
9. **DO NOT** skip the slug-based lookup exports (`programsBySlug`, `therapyBySlug`) — pages need these for route parameter resolution
10. **DO NOT** create a monolithic file — keep `programs.ts` and `therapies.ts` as separate files per the architecture

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Content-Data-Patterns] — data file rules, type annotations, cross-references, barrel exports
- [Source: _bmad-output/planning-artifacts/architecture.md#Structure-Patterns] — `data/` directory organization
- [Source: _bmad-output/planning-artifacts/architecture.md#Naming-Patterns] — camelCase data files, PascalCase interfaces
- [Source: _bmad-output/planning-artifacts/epics.md#Story-3.1] — acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR1] — program pages with structure, approach, duration
- [Source: _bmad-output/planning-artifacts/prd.md#FR3] — evidence-based therapy descriptions
- [Source: _bmad-output/planning-artifacts/prd.md#FR4] — daily schedule and program structure
- [Source: _bmad-output/planning-artifacts/prd.md#FR44] — data files separate from components
- [Source: _bmad-output/planning-artifacts/prd.md#FR45] — consistent content schema per page type
- [Source: mockups/silverstate-react/src/data/content.ts] — existing program and therapy data to expand from
- [Source: mockups/silverstate-react/src/types.ts] — existing `ProgramData`, `DailyScheduleEntry`, `FaqEntry` interfaces

## Dev Agent Record

### Agent Model Used

_To be filled by dev agent_

### Debug Log References

### Completion Notes List

### File List
