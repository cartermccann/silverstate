import type { CSSProperties } from 'react'
import { privacySections, privacyLastUpdated } from '../data/privacy'
import { generateMeta } from '../utils/meta'
import { generateWebPage } from '../utils/schema'

const SITE_URL = import.meta.env?.VITE_SITE_URL || 'https://www.silverstatetreatment.com'

const sectionStyle: CSSProperties = {
  marginBottom: 40,
}

const headingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--h4-size)',
  lineHeight: 'var(--h4-lh)',
  color: 'var(--text)',
  marginBottom: 16,
}

const paragraphStyle: CSSProperties = {
  color: 'var(--body)',
  lineHeight: 1.7,
  marginBottom: 12,
}

export const meta = generateMeta({
  title: 'Privacy Policy | Silver State Adolescent Treatment Center',
  description:
    'Learn how Silver State Adolescent Treatment Center collects, uses, and protects your information. HIPAA-compliant practices, cookie policy, and your privacy rights.',
  path: '/privacy',
  ogType: 'website',
  jsonLd: [
    generateWebPage({
      title: 'Privacy Policy',
      description:
        'Privacy policy for Silver State Adolescent Treatment Center website, covering data collection, HIPAA compliance, cookies, and your rights.',
      url: `${SITE_URL}/privacy`,
      dateModified: privacyLastUpdated,
    }),
  ],
})

export default function Privacy() {
  return (
    <section className="wrap-narrow" style={{ paddingTop: 64, paddingBottom: 80 }}>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--h2-size)',
          lineHeight: 'var(--h2-lh)',
          color: 'var(--text)',
          marginBottom: 8,
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          color: 'var(--body)',
          fontSize: '.9rem',
          marginBottom: 48,
        }}
      >
        Last updated: {privacyLastUpdated}
      </p>

      {privacySections.map((section) => (
        <div key={section.id} id={section.id} style={sectionStyle}>
          <h2 style={headingStyle}>{section.heading}</h2>
          {section.content.map((paragraph, i) => (
            <p key={i} style={paragraphStyle}>
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </section>
  )
}
