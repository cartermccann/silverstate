import type { CSSProperties } from 'react'
import { site } from '../data/common'
import { IconPhone } from './Icons'

interface CtaBandProps {
  className?: string
  style?: CSSProperties
}

const sectionStyle: CSSProperties = {
  padding: '56px 0',
  background: 'var(--dark)',
  color: 'var(--white)',
  textAlign: 'center',
}

const headlineStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  fontWeight: 600,
  lineHeight: 1.1,
  letterSpacing: '-.03em',
  marginBottom: 12,
}

const bodyStyle: CSSProperties = {
  fontSize: '.95rem',
  lineHeight: 1.6,
  opacity: 0.75,
  maxWidth: 480,
  margin: '0 auto 28px',
}

export default function CtaBand({ className, style }: CtaBandProps) {
  return (
    <section
      aria-label="Contact us"
      className={`cta-band ${className || ''}`}
      style={{ ...sectionStyle, ...style }}
    >
      <div className="wrap">
        <h2 style={headlineStyle}>Ready to take the first step?</h2>
        <p style={bodyStyle}>
          Call our admissions team 24/7. No waitlists, no judgment — just answers.
        </p>
        <a
          href={site.phoneTel}
          className="btn btn-primary btn-pulse"
          aria-label={`Call Silver State at ${site.phone}`}
          style={{ fontSize: '1rem', padding: '16px 36px' }}
        >
          <IconPhone style={{ width: 18, height: 18 }} />
          Call {site.phone}
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-band { padding: 40px 0 !important; }
        }
      `}</style>
    </section>
  )
}
