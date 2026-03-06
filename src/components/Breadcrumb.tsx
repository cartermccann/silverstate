import { useLocation, Link } from 'react-router'
import type { CSSProperties } from 'react'
import type { BaseComponentProps } from '../types'
import { routePaths } from '../routes'

type BreadcrumbProps = BaseComponentProps

const SEGMENT_LABELS: Record<string, string> = {
  programs: 'Programs',
  conditions: 'Conditions',
  insurance: 'Insurance',
  about: 'About',
  admissions: 'Admissions',
  locations: 'Locations',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  'residential-treatment': 'Residential Treatment',
  'crisis-prevention-intervention': 'Crisis Prevention & Intervention',
  'anxiety-treatment': 'Anxiety Treatment',
  'depression-treatment': 'Depression Treatment',
  'trauma-ptsd-treatment': 'Trauma & PTSD Treatment',
  'suicidal-ideation-treatment': 'Suicidal Ideation Treatment',
  'ocd-treatment': 'OCD Treatment',
  'bipolar-disorder-treatment': 'Bipolar Disorder Treatment',
  'autism-spectrum-treatment': 'Autism Spectrum Treatment',
  'oppositional-defiant-disorder-treatment': 'Oppositional Defiant Disorder Treatment',
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
  'binge-eating-disorder-treatment': 'Binge Eating Disorder Treatment',
  'binge-eating-treatment': 'Binge Eating Treatment',
  'arfid-treatment': 'ARFID Treatment',
  'osfed-treatment': 'OSFED Treatment',
  'school-refusal-treatment': 'School Refusal Treatment',
  'compulsive-eating-treatment': 'Compulsive Eating Treatment',
  'our-team': 'Our Team',
  'youth-academy': 'Youth Academy',
  facility: 'Facility',
  aetna: 'Aetna',
  cigna: 'Cigna',
  ambetter: 'Ambetter',
  uhc: 'UHC',
  'medicaid-ffs': 'Medicaid Fee for Service',
  geha: 'GEHA',
  umr: 'UMR',
  hpn: 'HPN',
  'las-vegas': 'Las Vegas',
  henderson: 'Henderson',
  'north-las-vegas': 'North Las Vegas',
  summerlin: 'Summerlin',
  'clark-county': 'Clark County',
  compare: 'Compare',
  'cbt-vs-dbt': 'CBT vs DBT',
  'anxiety-vs-depression': 'Anxiety vs Depression',
  'ptsd-vs-anxiety': 'PTSD vs Anxiety',
  'anorexia-vs-bulimia': 'Anorexia vs Bulimia',
}

const SECTION_ROOT_ALIASES: Record<string, string> = {
  about: '/about/our-team',
}

function segmentToLabel(segment: string): string {
  return (
    SEGMENT_LABELS[segment] ||
    segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

function generateBreadcrumbJsonLd(crumbs: Array<{ label: string; path: string }>): string {
  const rawSiteUrl = import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com'
  const siteUrl = rawSiteUrl.replace(/\/+$/, '')

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.path === '/' ? `${siteUrl}/` : `${siteUrl}${crumb.path}`,
    })),
  })
}

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
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 44,
  padding: '4px 6px',
  color: 'var(--blue)',
  textDecoration: 'none',
}

const currentStyle: CSSProperties = {
  color: 'var(--text)',
  fontWeight: 500,
}

export default function Breadcrumb({ className, style }: BreadcrumbProps) {
  const { pathname } = useLocation()

  if (pathname === '/') return null

  // Hide breadcrumb for unknown paths rendered by the wildcard 404 route.
  if (!routePaths.includes(pathname)) return null

  const segments = pathname.split('/').filter(Boolean)
  const segmentCrumbs: Array<{ label: string; path: string }> = []

  for (const [index, segment] of segments.entries()) {
    const basePath = '/' + segments.slice(0, index + 1).join('/')
    const path =
      index === 0 && SECTION_ROOT_ALIASES[segment] ? SECTION_ROOT_ALIASES[segment] : basePath
    const label = segmentToLabel(segment)
    const previous = segmentCrumbs[segmentCrumbs.length - 1]

    // Collapse duplicate paths (e.g. /about + /about/our-team aliasing) and keep the most specific label.
    if (previous && previous.path === path) {
      previous.label = label
      continue
    }

    segmentCrumbs.push({ label, path })
  }

  const crumbs = [{ label: 'Home', path: '/' }, ...segmentCrumbs]

  const jsonLd = generateBreadcrumbJsonLd(crumbs)

  return (
    <>
      <nav aria-label="Breadcrumb" className={className} style={{ ...navStyle, ...style }}>
        <ol style={listStyle}>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            return (
              <li key={crumb.path}>
                {index > 0 && (
                  <span style={separatorStyle} aria-hidden="true">
                    {' '}
                    &gt;{' '}
                  </span>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
