import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { site } from '../data/common'
import { notFoundContent } from '../data/privacy'

const linkStyle: CSSProperties = {
  color: 'var(--blue)',
  fontWeight: 500,
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 44,
  padding: '6px 0',
}

export const meta = [
  { title: 'Page Not Found | Silver State Treatment Center' },
  { name: 'robots', content: 'noindex, nofollow' },
]

export default function NotFound() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '80px 32px 100px',
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--h2-size)',
          lineHeight: 'var(--h2-lh)',
          color: 'var(--text)',
          marginBottom: 16,
        }}
      >
        {notFoundContent.headline}
      </h1>
      <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: 40, fontSize: '1.05rem' }}>
        {notFoundContent.message}
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--h4-size)',
          lineHeight: 'var(--h4-lh)',
          color: 'var(--text)',
          marginBottom: 20,
        }}
      >
        Try one of these instead
      </h2>

      <nav aria-label="Suggested pages">
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: 48 }}>
          {notFoundContent.suggestions.map((s) => (
            <li key={s.href}>
              <Link to={s.href} style={linkStyle}>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{
          padding: '32px 24px',
          background: 'var(--blue-soft)',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1.1rem',
            color: 'var(--text)',
            marginBottom: 12,
          }}
        >
          Need help right now?
        </p>
        <a
          href={site.phoneTel}
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            borderRadius: 999,
            fontSize: '.95rem',
            fontWeight: 600,
            background: 'var(--blue)',
            color: 'var(--white)',
            minHeight: 44,
          }}
        >
          Call {site.phone}
        </a>
        <p style={{ color: 'var(--body)', fontSize: '.85rem', marginTop: 8 }}>Available 24/7</p>
      </div>
    </section>
  )
}
