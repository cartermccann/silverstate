import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { IconMapPin, IconPhone, IconMail } from './Icons'
import { footerLinks, site, accreditations } from '../data/common'

const columnHeadingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '.7rem',
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: 'var(--text)',
  marginBottom: 12,
  fontWeight: 600,
  textWrap: 'balance',
}

const footerLinkStyle: CSSProperties = {
  color: 'var(--body)',
  fontSize: '.85rem',
  display: 'flex',
  alignItems: 'center',
  minHeight: 44,
  padding: '4px 0',
}

const contactRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  color: 'var(--body)',
  minHeight: 44,
  padding: '4px 0',
}

export default function Footer() {
  const phoneAriaLabel = `Call Silver State at ${site.phone}`
  const emailAriaLabel = `Email Silver State at ${site.email}`

  return (
    <footer
      role="contentinfo"
      style={{
        paddingTop: 64,
        paddingBottom: 32,
        borderTop: '1px solid var(--border)',
        fontSize: '.85rem',
      }}
    >
      <div className="wrap">
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32 }}
          className="footer-grid"
        >
          <div>
            <img
              src="/assets/logo.png"
              alt="Silver State Adolescent Treatment Center"
              style={{ height: 56, opacity: 0.4, marginBottom: 12 }}
            />
            <p
              style={{ lineHeight: 1.65, maxWidth: 280, color: 'var(--body)', fontSize: '.85rem' }}
            >
              {site.tagline}. Evidence-based adolescent treatment for Nevada families.
            </p>
            <div
              style={{
                marginTop: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                fontSize: '.82rem',
              }}
            >
              <span style={contactRowStyle}>
                <IconMapPin /> {site.address}
              </span>
              <a href={site.phoneTel} aria-label={phoneAriaLabel} style={contactRowStyle}>
                <IconPhone /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} aria-label={emailAriaLabel} style={contactRowStyle}>
                <IconMail /> {site.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" style={{ display: 'contents' }}>
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h4 style={columnHeadingStyle}>{group.heading}</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} style={footerLinkStyle}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {accreditations.map((a) =>
            a.logo ? (
              <img
                key={a.name}
                src={a.logo}
                alt={`${a.name} Accredited`}
                style={{ height: 40, objectFit: 'contain', opacity: 0.6 }}
              />
            ) : (
              <span
                key={a.name}
                style={{
                  fontSize: '.72rem',
                  fontWeight: 600,
                  color: 'var(--body)',
                  letterSpacing: '.04em',
                  textTransform: 'uppercase',
                  opacity: 0.6,
                }}
              >
                {a.name}
              </span>
            ),
          )}
        </div>

        <div
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '.75rem',
            color: 'var(--body)',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <Link
            to="/privacy"
            style={{ color: 'var(--body)', minHeight: 44, display: 'flex', alignItems: 'center' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
