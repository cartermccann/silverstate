import type { CSSProperties, ReactNode } from 'react'

interface StatBlockProps {
  value: ReactNode
  label: string
  style?: CSSProperties
}

export default function StatBlock({ value, label, style }: StatBlockProps) {
  return (
    <div style={style}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
        fontWeight: 700, lineHeight: 0.9, color: 'var(--text)', display: 'block',
      }}>
        {value}
      </span>
      <span style={{
        fontSize: '.8rem', color: 'var(--muted)',
        textTransform: 'uppercase', letterSpacing: '.06em',
        fontWeight: 500, marginTop: 4, display: 'block',
      }}>
        {label}
      </span>
    </div>
  )
}
