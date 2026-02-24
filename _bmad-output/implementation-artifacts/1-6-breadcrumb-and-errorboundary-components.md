# Story 1.6: Breadcrumb & ErrorBoundary Components

Status: review

## Story

As a **user navigating interior pages**,
I want breadcrumb navigation showing my location in the site hierarchy, and graceful error handling if something goes wrong,
So that I'm never lost or stranded.

## Acceptance Criteria

1. **Given** a user visits any interior page (not homepage), **When** the page renders, **Then** Breadcrumb displays a visual trail (e.g., Home > Programs > Residential Treatment) (FR39)
2. **And** Breadcrumb generates valid BreadcrumbList JSON-LD structured data (FR35)
3. **And** breadcrumb links are keyboard accessible
4. **And** the homepage does NOT display breadcrumbs
5. **Given** a page component throws a runtime error, **When** the ErrorBoundary catches the error, **Then** a fallback UI displays with the phone CTA -- not a blank page (FR17)
6. **And** the fallback UI is accessible and responsive

## Dependencies

| Dependency | Story | What's needed |
|------------|-------|---------------|
| Production project initialized | Story 1.1 | `src/components/` directory, React Router v7 library/SPA mode, TypeScript strict mode |
| Shared data types & common data | Story 1.2 | `BaseComponentProps` in `types.ts`, `site.phone` / `site.phoneTel` in `data/common.ts` |
| CtaBand component | Story 1.5 | Not a hard dependency -- ErrorBoundary renders its own inline phone CTA, not CtaBand |
| PageLayout consumes both | Story 1.7 | PageLayout will import Breadcrumb and ErrorBoundary -- that story depends on this one |

## Tasks / Subtasks

- [x] **Task 1: Create Breadcrumb component** (AC: #1, #2, #3, #4)
  - [x] 1.1: Create `src/components/Breadcrumb.tsx` with path-to-label mapping logic
  - [x] 1.2: Derive breadcrumb trail from current URL path using React Router's `useLocation()`
  - [x] 1.3: Implement path segment to display label mapping (e.g., `programs` -> `Programs`, `residential-treatment` -> `Residential Treatment`)
  - [x] 1.4: Render visual breadcrumb trail with `>` separators and linked segments
  - [x] 1.5: Generate BreadcrumbList JSON-LD structured data and inject via `<script type="application/ld+json">`
  - [x] 1.6: Ensure current page (last crumb) is plain text, not a link
  - [x] 1.7: Accept `className` and `style` props via `BaseComponentProps`
  - [x] 1.8: Use semantic `<nav aria-label="Breadcrumb">` wrapper with `<ol>` list

- [x] **Task 2: Implement Breadcrumb accessibility** (AC: #3, #4)
  - [x] 2.1: Wrap in `<nav aria-label="Breadcrumb">` landmark
  - [x] 2.2: Use `<ol>` with `<li>` for each crumb (semantic list)
  - [x] 2.3: Mark current page with `aria-current="page"` on the last `<li>`
  - [x] 2.4: Ensure all links have visible `:focus-visible` ring (via global CSS)
  - [x] 2.5: Ensure links are keyboard navigable (native `<a>` elements)

- [x] **Task 3: Create ErrorBoundary component** (AC: #5, #6)
  - [x] 3.1: Create `src/components/ErrorBoundary.tsx` as a React class component
  - [x] 3.2: Implement `static getDerivedStateFromError()` and `componentDidCatch()` lifecycle methods
  - [x] 3.3: Render children when no error, fallback UI when error is caught
  - [x] 3.4: Fallback UI displays: error message (generic, not the raw error), phone CTA with `site.phoneTel`, and a link back to the homepage
  - [x] 3.5: Accept `className`, `style`, and `children` props
  - [x] 3.6: Accept optional `fallback` prop for custom fallback UI override

- [x] **Task 4: Implement ErrorBoundary accessibility & responsiveness** (AC: #6)
  - [x] 4.1: Fallback UI uses semantic HTML (`<section>`, `<h2>`, `<p>`, `<a>`)
  - [x] 4.2: Phone CTA is a real `<a href="tel:...">` link -- not a div with onClick
  - [x] 4.3: Homepage link is a real `<a href="/">` -- keyboard accessible
  - [x] 4.4: Fallback is responsive across all viewports (320px to 1440px+)
  - [x] 4.5: Text uses design tokens (`var(--text)`, `var(--body)`) -- no hardcoded colors
  - [x] 4.6: ARIA role="alert" on error container so screen readers announce the error state

- [x] **Task 5: Create unit tests** (AC: #1-#6)
  **Dependency Note:** Component tests written in this story require test infrastructure from Story 1.10 (Vitest, RTL, jest-dom). If implementing before Story 1.10, create the test files but note they cannot be run until the test framework is set up.
  - [x] 5.1: Create `src/components/Breadcrumb.test.tsx`
  - [x] 5.2: Create `src/components/ErrorBoundary.test.tsx`
  - [x] 5.3: Test Breadcrumb renders correct trail for nested paths
  - [x] 5.4: Test Breadcrumb renders nothing on homepage (`/`)
  - [x] 5.5: Test Breadcrumb generates valid JSON-LD
  - [x] 5.6: Test Breadcrumb marks last item with `aria-current="page"`
  - [x] 5.7: Test ErrorBoundary renders children when no error
  - [x] 5.8: Test ErrorBoundary renders fallback when child throws
  - [x] 5.9: Test ErrorBoundary fallback contains phone CTA and homepage link

- [x] **Task 6: Verify TypeScript and architecture compliance**
  - [x] 6.1: Run `npx tsc --noEmit` -- zero errors
  - [x] 6.2: Verify both components use `export default function` / `export default class` pattern
  - [x] 6.3: Verify no hardcoded colors, phone numbers, or content strings
  - [x] 6.4: Verify `className` and `style` props accepted on both components
  - [x] 6.5: Verify no barrel file created -- components imported directly

## Dev Notes

### Critical Context: Both Components Are NEW

Neither Breadcrumb nor ErrorBoundary exist in the mockup at `mockups/silverstate-react/`. These are entirely new components. The Architecture document defines their locations:

- `src/components/Breadcrumb.tsx` -- Route-based breadcrumb nav + BreadcrumbList JSON-LD (FR39)
- `src/components/ErrorBoundary.tsx` -- Page-level error boundary

Both will be consumed by `PageLayout` (Story 1.7):
- Breadcrumb renders on interior pages only (not homepage)
- ErrorBoundary wraps `<main>` content area

### Breadcrumb: Path Derivation Logic

The Breadcrumb derives its trail from the current URL path. Given the Architecture's URL structure:

```
/programs/residential-treatment  ->  Home > Programs > Residential Treatment
/conditions/anxiety-treatment    ->  Home > Conditions > Anxiety Treatment
/insurance/cigna                 ->  Home > Insurance > Cigna
/about/our-team                  ->  Home > About > Our Team
/about/facility                  ->  Home > About > Facility
/admissions                      ->  Home > Admissions
/contact                         ->  Home > Contact
/privacy                         ->  Home > Privacy Policy
/locations/henderson             ->  Home > Locations > Henderson
```

**Path-to-Label Mapping Strategy:**

Use a static map for known path segments, with kebab-case-to-title-case as the fallback:

```tsx
const SEGMENT_LABELS: Record<string, string> = {
  'programs': 'Programs',
  'conditions': 'Conditions',
  'insurance': 'Insurance',
  'about': 'About',
  'admissions': 'Admissions',
  'locations': 'Locations',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'residential-treatment': 'Residential Treatment',
  'php': 'PHP',
  'iop': 'IOP',
  'anxiety-treatment': 'Anxiety Treatment',
  'depression-treatment': 'Depression Treatment',
  'trauma-ptsd-treatment': 'Trauma & PTSD Treatment',
  'suicidal-ideation-treatment': 'Suicidal Ideation Treatment',
  'ocd-treatment': 'OCD Treatment',
  'bipolar-disorder-treatment': 'Bipolar Disorder Treatment',
  'autism-spectrum-treatment': 'Autism Spectrum Treatment',
  'oppositional-defiant-treatment': 'Oppositional Defiant Treatment',
  'conduct-disorder-treatment': 'Conduct Disorder Treatment',
  'dmdd-treatment': 'DMDD Treatment',
  'bpd-treatment': 'BPD Treatment',
  'adjustment-disorder-treatment': 'Adjustment Disorder Treatment',
  'dual-diagnosis-treatment': 'Dual Diagnosis Treatment',
  'substance-abuse-treatment': 'Substance Abuse Treatment',
  'alcohol-abuse-treatment': 'Alcohol Abuse Treatment',
  'opioid-abuse-treatment': 'Opioid Abuse Treatment',
  'benzodiazepine-abuse-treatment': 'Benzodiazepine Abuse Treatment',
  'cocaine-abuse-treatment': 'Cocaine Abuse Treatment',
  'meth-abuse-treatment': 'Meth Abuse Treatment',
  'cannabis-abuse-treatment': 'Cannabis Abuse Treatment',
  'anorexia-nervosa-treatment': 'Anorexia Nervosa Treatment',
  'bulimia-nervosa-treatment': 'Bulimia Nervosa Treatment',
  'binge-eating-treatment': 'Binge Eating Treatment',
  'arfid-treatment': 'ARFID Treatment',
  'osfed-treatment': 'OSFED Treatment',
  'our-team': 'Our Team',
  'youth-academy': 'Youth Academy',
  'facility': 'Facility',
  'aetna': 'Aetna',
  'cigna': 'Cigna',
  'bcbs': 'BCBS',
  'ambetter': 'Ambetter',
  'humana': 'Humana',
  'uhc': 'UHC',
  'tricare': 'TRICARE',
  'medicaid': 'Medicaid',
  'anthem': 'Anthem',
  'las-vegas': 'Las Vegas',
  'henderson': 'Henderson',
  'north-las-vegas': 'North Las Vegas',
  'summerlin': 'Summerlin',
  'clark-county': 'Clark County',
}

function segmentToLabel(segment: string): string {
  return SEGMENT_LABELS[segment] || segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
```

**Why a static map instead of purely algorithmic conversion:**
- Abbreviations: `php` -> `PHP`, `iop` -> `IOP`, `ocd` -> `OCD`, `bpd` -> `BPD`
- Special characters: `trauma-ptsd` -> `Trauma & PTSD`
- Compound names: `our-team` -> `Our Team` (not `Our-team`)
- Medical terms: `arfid` -> `ARFID`, `dmdd` -> `DMDD`, `osfed` -> `OSFED`

The algorithmic fallback handles any future pages not yet in the map.

### Breadcrumb: JSON-LD Structured Data

Every interior page must include a `BreadcrumbList` JSON-LD block. This is injected into the DOM via a `<script type="application/ld+json">` element rendered by the Breadcrumb component itself.

**Schema.org BreadcrumbList spec:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.silverstatetreatment.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Programs",
      "item": "https://www.silverstatetreatment.com/programs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Residential Treatment",
      "item": "https://www.silverstatetreatment.com/programs/residential-treatment"
    }
  ]
}
```

**Rules:**
- `position` is 1-indexed
- `item` is the **full canonical URL** (use `VITE_SITE_URL` env var with `/` fallback)
- The last item (current page) SHOULD include the `item` URL per Google's recommendation
- `name` uses the same label mapping as the visual trail
- `@context` must be `https://schema.org` (NOT `http://`)

**Implementation:**

```tsx
function generateBreadcrumbJsonLd(
  crumbs: Array<{ label: string; path: string }>
): string {
  const siteUrl = import.meta.env.VITE_SITE_URL || ''

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.path}`,
    })),
  })
}
```

### Breadcrumb: Complete Component Reference

```tsx
import { useLocation, Link } from 'react-router'
import type { CSSProperties } from 'react'

interface BreadcrumbProps {
  className?: string
  style?: CSSProperties
}

// [SEGMENT_LABELS map here]

// [segmentToLabel function here]

// [generateBreadcrumbJsonLd function here]

const navStyle: CSSProperties = {
  padding: '12px 0',
  fontSize: '.85rem',
  color: 'var(--body)',
}

const listStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '4px',
}

const separatorStyle: CSSProperties = {
  color: 'var(--body)',
  userSelect: 'none',
}

const linkStyle: CSSProperties = {
  color: 'var(--blue)',
  textDecoration: 'none',
}

const currentStyle: CSSProperties = {
  color: 'var(--text)',
  fontWeight: 500,
}

export default function Breadcrumb({ className, style }: BreadcrumbProps) {
  const { pathname } = useLocation()

  // Homepage: no breadcrumbs
  if (pathname === '/') return null

  // Build crumbs from path segments
  const segments = pathname.split('/').filter(Boolean)
  const crumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((segment, index) => ({
      label: segmentToLabel(segment),
      path: '/' + segments.slice(0, index + 1).join('/'),
    })),
  ]

  const jsonLd = generateBreadcrumbJsonLd(crumbs)

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={className}
        style={{ ...navStyle, ...style }}
      >
        <ol style={listStyle}>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            return (
              <li key={crumb.path}>
                {index > 0 && (
                  <span style={separatorStyle} aria-hidden="true"> &gt; </span>
                )}
                {isLast ? (
                  <span style={currentStyle} aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.path} style={linkStyle}>
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  )
}
```

**Note on `useLocation` vs `useMatches`:** `useLocation()` is simpler and sufficient for path-based breadcrumbs. `useMatches()` from React Router v7 framework mode provides richer route metadata (loaders, handles) but is overkill when the breadcrumb is purely derived from URL segments. If the team later wants route-level breadcrumb overrides (e.g., a route handle that specifies a custom label), migrate to `useMatches()`.

**Import Path:** Use `import { ... } from 'react-router'` (v7 convention), NOT `'react-router-dom'`. This project uses React Router v7 in library/SPA mode. Both `useLocation` and `Link` are available from `react-router`.

### ErrorBoundary: Class Component Requirement

React error boundaries **MUST** be class components. This is a React limitation -- `componentDidCatch` and `getDerivedStateFromError` have no hook equivalents. There is no `useErrorBoundary()` hook in React 19.

This is the ONLY class component in the project. Every other component uses `export default function`.

### ErrorBoundary: Complete Component Reference

```tsx
import { Component } from 'react'
import type { CSSProperties, ReactNode, ErrorInfo } from 'react'
import { site } from '../data/common'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  style?: CSSProperties
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

const containerStyle: CSSProperties = {
  textAlign: 'center',
  padding: '80px 24px',
  maxWidth: 600,
  margin: '0 auto',
}

const headingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.5rem',
  fontWeight: 600,
  color: 'var(--text)',
  marginBottom: 16,
}

const bodyStyle: CSSProperties = {
  fontSize: '.95rem',
  color: 'var(--body)',
  lineHeight: 1.65,
  marginBottom: 32,
}

const ctaStyle: CSSProperties = {
  display: 'inline-block',
  padding: '14px 32px',
  backgroundColor: 'var(--blue)',
  color: '#fff',
  borderRadius: 'var(--radius)',
  textDecoration: 'none',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '1rem',
  minWidth: 44,
  minHeight: 44,
}

const homeLinkStyle: CSSProperties = {
  display: 'inline-block',
  marginTop: 16,
  color: 'var(--blue)',
  textDecoration: 'underline',
  fontSize: '.9rem',
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error for debugging (console in dev, could integrate
    // with error reporting service in production)
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Allow custom fallback override
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <section
          role="alert"
          className={this.props.className}
          style={{ ...containerStyle, ...this.props.style }}
        >
          <h2 style={headingStyle}>Something Went Wrong</h2>
          <p style={bodyStyle}>
            We're sorry -- this page isn't loading correctly right now.
            Please try refreshing, or reach out to us directly.
            We're here to help 24/7.
          </p>
          <a href={site.phoneTel} style={ctaStyle}>
            Call {site.phone}
          </a>
          <br />
          <a href="/" style={homeLinkStyle}>
            Return to Homepage
          </a>
        </section>
      )
    }

    return this.props.children
  }
}
```

**Key design decisions in the fallback UI:**

1. **Uses `<a href>` instead of `<Link to>`**: When the error boundary catches an error, the React tree below it is unmounted. React Router's `<Link>` component may not work reliably in this state. Plain `<a href>` triggers a full page navigation, which resets the app and clears the error state.

2. **Phone CTA uses `site.phoneTel`**: Imported from `data/common.ts`. The phone number is never hardcoded in the component. The `<a href="tel:...">` pattern enables click-to-call on mobile (FR18).

3. **`role="alert"`**: Ensures screen readers immediately announce the error state when it appears. This is critical for accessibility -- a sighted user sees the fallback, but a screen reader user needs the equivalent notification.

4. **Generic error message**: The fallback does NOT display `error.message` or stack traces to the user. Those go to `console.error` for developer debugging.

5. **No state reset button**: The simplest recovery is refreshing the page or navigating home. A "Try Again" button would need to reset the error boundary state, which adds complexity. If the team wants this, add a `handleReset` method that calls `this.setState({ hasError: false, error: null })`.

### Styling Rules (Architecture Compliance)

Both components MUST follow the project's styling patterns:

| Rule | How it applies |
|------|---------------|
| Design tokens | Use `var(--blue)`, `var(--text)`, `var(--body)`, `var(--font-display)`, `var(--radius)` |
| Inline styles | All component-specific styles as inline `style={{}}` or extracted `CSSProperties` constants |
| No CSS modules | Do NOT create `Breadcrumb.module.css` or any CSS module |
| No hardcoded colors | Never write `#1B4D7A` when `var(--blue)` exists |
| `--muted` restriction | Never use `--muted` for text below 18px. Breadcrumb body text at `.85rem` must use `var(--body)` |
| Focus styles | `:focus-visible` ring handled by global CSS in `index.css` -- no per-component focus styles needed |
| 44x44px touch targets | Breadcrumb links need adequate padding/size on mobile. Consider minimum `padding: 4px 8px` and `min-height: 44px` on the list items for mobile |

### Mobile Responsiveness

**Breadcrumb on mobile (< 900px):**
- Use `flex-wrap: wrap` so long trails wrap to a new line instead of overflowing
- Font size can be slightly smaller on mobile if needed (use a `<style>` block with media query)
- DO NOT truncate or hide intermediate crumbs -- families need the full navigation context

**ErrorBoundary fallback on mobile:**
- The fallback is centered with `max-width: 600px` and `padding: 80px 24px`
- On very small screens (320px), the padding ensures content doesn't touch edges
- Phone CTA button meets 44x44px minimum touch target via `padding: 14px 32px`

### How PageLayout Will Use These Components (Story 1.7 Preview)

PageLayout will import both components and render them as follows:

```tsx
// PageLayout.tsx (Story 1.7 -- NOT created in this story)
import Breadcrumb from '../components/Breadcrumb'
import ErrorBoundary from '../components/ErrorBoundary'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <Breadcrumb />           {/* Renders nothing on homepage */}
      <ErrorBoundary>
        <main>{children}</main>
      </ErrorBoundary>
      <TrustBadges />
      <CtaBand />
      <Footer />
    </>
  )
}
```

Breadcrumb handles its own homepage detection internally (`if (pathname === '/') return null`), so PageLayout does not need conditional rendering logic. ErrorBoundary wraps `<main>` so that if any page component throws, the shell (Nav, Footer, etc.) remains intact.

### JSON-LD Relationship to `utils/schema.ts` (Story 1.8)

Story 1.8 will create `utils/schema.ts` with JSON-LD generator functions for all 7 schema types, including `BreadcrumbList`. However, the Breadcrumb component generates its own JSON-LD inline because:

1. The Breadcrumb data (crumbs array) is derived at render time from the URL
2. The JSON-LD must stay in sync with the visual breadcrumb trail
3. Separating generation into `utils/schema.ts` would require passing the crumbs array out and the JSON-LD back in, adding indirection

**Recommendation:** When Story 1.8 is implemented, the `generateBreadcrumbJsonLd` function can optionally be moved to `utils/schema.ts` and imported by the Breadcrumb component. But this is a refactoring decision for Story 1.8, not this story. For now, keep the JSON-LD generation co-located in `Breadcrumb.tsx`.

### Testing Strategy

**Breadcrumb tests (`Breadcrumb.test.tsx`):**

```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders nothing on the homepage', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    expect(container.querySelector('nav')).toBeNull()
  })

  it('renders Home > Programs > Residential Treatment for /programs/residential-treatment', () => {
    render(
      <MemoryRouter initialEntries={['/programs/residential-treatment']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Residential Treatment')).toBeInTheDocument()
  })

  it('renders the last crumb with aria-current="page"', () => {
    render(
      <MemoryRouter initialEntries={['/insurance/cigna']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    const current = screen.getByText('Cigna')
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  it('renders a nav element with aria-label="Breadcrumb"', () => {
    render(
      <MemoryRouter initialEntries={['/admissions']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
  })

  it('generates valid BreadcrumbList JSON-LD', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/programs/php']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    const jsonLd = JSON.parse(script!.textContent || '')
    expect(jsonLd['@type']).toBe('BreadcrumbList')
    expect(jsonLd.itemListElement).toHaveLength(3)
    expect(jsonLd.itemListElement[0].name).toBe('Home')
    expect(jsonLd.itemListElement[1].name).toBe('Programs')
    expect(jsonLd.itemListElement[2].name).toBe('PHP')
  })

  it('does not render the last crumb as a link', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    const contact = screen.getByText('Contact')
    expect(contact.tagName).not.toBe('A')
  })

  it('renders Home as a link', () => {
    render(
      <MemoryRouter initialEntries={['/about/our-team']}>
        <Breadcrumb />
      </MemoryRouter>
    )
    const homeLink = screen.getByText('Home')
    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
  })
})
```

**ErrorBoundary tests (`ErrorBoundary.test.tsx`):**

```tsx
import { render, screen } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

function ThrowingComponent(): JSX.Element {
  throw new Error('Test error')
}

function SafeComponent(): JSX.Element {
  return <p>Safe content</p>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for expected errors in tests
  const originalConsoleError = console.error
  beforeAll(() => {
    console.error = (...args: unknown[]) => {
      if (typeof args[0] === 'string' && args[0].includes('ErrorBoundary caught')) return
      if (typeof args[0] === 'string' && args[0].includes('The above error')) return
      originalConsoleError(...args)
    }
  })
  afterAll(() => {
    console.error = originalConsoleError
  })

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Safe content')).toBeInTheDocument()
  })

  it('renders fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Something Went Wrong')).toBeInTheDocument()
  })

  it('displays phone CTA in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    )
    const phoneCta = screen.getByRole('link', { name: /call/i })
    expect(phoneCta).toHaveAttribute('href', 'tel:7255259897')
  })

  it('displays homepage link in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    )
    const homeLink = screen.getByRole('link', { name: /homepage/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders with role="alert" for screen readers', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ThrowingComponent />
      </ErrorBoundary>
    )
    expect(screen.getByText('Custom error UI')).toBeInTheDocument()
  })
})
```

### Anti-Patterns to AVOID

1. **DO NOT** use a functional component for ErrorBoundary -- React requires a class component for `getDerivedStateFromError` and `componentDidCatch`. There is no hook equivalent.

2. **DO NOT** use `react-error-boundary` library -- the component is simple enough that a third-party dependency adds weight without value.

3. **DO NOT** display raw `error.message` or stack traces in the fallback UI -- this is a healthcare site for families in crisis. Show a human-friendly message and a phone number.

4. **DO NOT** hardcode phone numbers -- always import from `data/common.ts` (`site.phone`, `site.phoneTel`).

5. **DO NOT** use `<Link>` from React Router in the ErrorBoundary fallback -- when a React error occurs, the router context may be corrupted. Use plain `<a href>` for the homepage link to trigger a full page reload.

6. **DO NOT** use `useLocation()` inside ErrorBoundary -- it's a class component and cannot use hooks. Breadcrumb (a function component) uses `useLocation()` and that's correct.

7. **DO NOT** put the `SEGMENT_LABELS` map in a data file -- it's a presentation concern (display labels for URL segments), not content data. Keep it co-located in the Breadcrumb component.

8. **DO NOT** create breadcrumb CSS in `index.css` -- it's a single-component concern. Use inline styles as extracted `CSSProperties` constants per the Architecture styling patterns.

9. **DO NOT** conditionally render Breadcrumb from outside the component (e.g., in PageLayout with `{pathname !== '/' && <Breadcrumb />}`). The component handles its own homepage detection internally. This keeps the logic encapsulated and testable.

10. **DO NOT** use `<div onClick>` for phone CTA or navigation links -- always use `<a>` with proper `href` attributes. This is critical for accessibility and click-to-call functionality (FR18).

11. **DO NOT** use `--muted` color for breadcrumb text -- at `.85rem` font size, `--muted` (#999) fails WCAG AA contrast. Use `var(--body)` (#4a4a4a) instead.

12. **DO NOT** use `dangerouslySetInnerHTML` for the fallback message content -- plain JSX text is fine and safer.

### File Checklist

| File | Action | Notes |
|------|--------|-------|
| `src/components/Breadcrumb.tsx` | CREATE | New component |
| `src/components/Breadcrumb.test.tsx` | CREATE | Unit tests |
| `src/components/ErrorBoundary.tsx` | CREATE | New class component |
| `src/components/ErrorBoundary.test.tsx` | CREATE | Unit tests |

**No other files should be created or modified by this story.**

### Architecture Compliance Requirements

- **Naming:** `Breadcrumb.tsx` and `ErrorBoundary.tsx` (PascalCase)
- **Exports:** Breadcrumb uses `export default function Breadcrumb`; ErrorBoundary uses `export default class ErrorBoundary`
- **Props:** Both accept `className?: string` and `style?: CSSProperties` via their props interfaces
- **Styling:** CSS tokens via `var(--token)` in inline styles, no CSS modules, no hardcoded colors
- **Data:** Phone number from `data/common.ts` -- never hardcoded
- **Accessibility:** `<nav aria-label>`, `aria-current="page"`, `role="alert"`, semantic HTML throughout
- **No barrel files:** Import directly from `./Breadcrumb` and `./ErrorBoundary`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation-Patterns] -- Component, styling, naming patterns
- [Source: _bmad-output/planning-artifacts/architecture.md#Project-Structure-and-Boundaries] -- File locations, boundaries
- [Source: _bmad-output/planning-artifacts/architecture.md#Route-and-URL-Patterns] -- URL structure for breadcrumb mapping
- [Source: _bmad-output/planning-artifacts/architecture.md#Architectural-Boundaries] -- PageLayout consumes Breadcrumb and ErrorBoundary
- [Source: _bmad-output/planning-artifacts/epics.md#Story-1.6] -- Story requirements and acceptance criteria
- [Source: _bmad-output/planning-artifacts/prd.md#FR35] -- JSON-LD structured data (BreadcrumbList)
- [Source: _bmad-output/planning-artifacts/prd.md#FR39] -- Breadcrumb navigation with structured data markup
- [Source: _bmad-output/planning-artifacts/prd.md#FR17] -- Phone CTA on every page (error fallback)
- [Source: https://schema.org/BreadcrumbList] -- JSON-LD schema specification
- [Source: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb] -- Google breadcrumb structured data guide

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6

### Debug Log References

No debug issues encountered.

### Completion Notes List

- Created `Breadcrumb.tsx` — path-derived breadcrumb nav with SEGMENT_LABELS static map, `segmentToLabel()` fallback for unknown segments, BreadcrumbList JSON-LD via `<script type="application/ld+json">`, semantic `<nav aria-label="Breadcrumb">` + `<ol>/<li>`, `aria-current="page"` on last crumb, returns `null` on homepage
- Created `ErrorBoundary.tsx` — React class component with `getDerivedStateFromError` + `componentDidCatch`, generic fallback UI with phone CTA from `site.phoneTel`, homepage link via plain `<a href="/">`, `role="alert"` for screen readers, optional custom `fallback` prop
- Added `crisis-prevention-intervention` to SEGMENT_LABELS (not in original story map but needed for CPI program page per confirmed decision #3)
- Test files created but cannot run until Story 1.10 provides Vitest/RTL/jest-dom infrastructure. Tests cover: homepage no-render, nested path trails, JSON-LD generation, aria-current, error catching, phone CTA, custom fallback
- TypeScript passes with zero errors on component files. Vite build succeeds.

### File List

| File | Action |
|------|--------|
| `src/components/Breadcrumb.tsx` | CREATE |
| `src/components/ErrorBoundary.tsx` | CREATE |
| `src/components/Breadcrumb.test.tsx` | CREATE |
| `src/components/ErrorBoundary.test.tsx` | CREATE |

### Change Log

- 2026-02-24: Story 1.6 implemented — Breadcrumb and ErrorBoundary components created with full accessibility, JSON-LD structured data, design token styling, and unit test files (pending test infra from Story 1.10)
