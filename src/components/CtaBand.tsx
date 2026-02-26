import type { CSSProperties } from 'react'
import { site } from '../data/common'
import type { BaseComponentProps } from '../types'
import { IconPhone } from './Icons'

type CtaBandProps = BaseComponentProps

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
  marginBottom: 10,
}

const bodyStyle: CSSProperties = {
  fontSize: '.95rem',
  lineHeight: 1.6,
  opacity: 0.75,
  maxWidth: 480,
  margin: 0,
}

const contentStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 28,
  textAlign: 'left',
}

const copyStyle: CSSProperties = {
  flex: '1 1 460px',
}

const ctaWrapStyle: CSSProperties = {
  flex: '0 0 auto',
  display: 'flex',
  justifyContent: 'center',
}

const ctaLinkStyle: CSSProperties = {
  fontSize: '1rem',
  padding: '16px 36px',
  minWidth: 44,
  minHeight: 44,
  justifyContent: 'center',
}

export default function CtaBand({ className, style }: CtaBandProps) {
  return (
    <section
      aria-label="Contact us"
      className={`cta-band${className ? ` ${className}` : ''}`}
      style={{ ...sectionStyle, ...style }}
    >
      <div className="wrap cta-band-content" style={contentStyle}>
        <div className="cta-band-copy" style={copyStyle}>
          <h2 style={headlineStyle}>Ready to take the first step?</h2>
          <p style={bodyStyle}>
            Call our admissions team 24/7. No waitlists, no judgment - just answers.
          </p>
        </div>
        <div style={ctaWrapStyle}>
          <a
            href={site.phoneTel}
            className="btn btn-primary btn-pulse"
            aria-label={`Call Silver State at ${site.phone}`}
            style={ctaLinkStyle}
          >
            <IconPhone style={{ width: 18, height: 18 }} />
            Call {site.phone}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-band { padding: 40px 0 !important; }
          .cta-band-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px !important;
          }
          .cta-band-copy {
            max-width: 560px;
            margin: 0 auto;
          }
          .cta-band-copy p {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
