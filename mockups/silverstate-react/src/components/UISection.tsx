import type { ReactNode } from 'react'

interface UISectionProps {
  id?: string
  title: string
  description?: string
  children?: ReactNode
}

export default function UISection({ id, title, description, children }: UISectionProps) {
  return (
    <section id={id} style={{ paddingBottom: 64 }}>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
        fontWeight: 700, lineHeight: 1.25, color: 'var(--text)',
        marginBottom: 8,
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          color: 'var(--body)', fontSize: '.9rem', lineHeight: 1.65,
          maxWidth: 560, marginBottom: 24,
        }}>
          {description}
        </p>
      )}
      {!description && <div style={{ height: 16 }} />}
      {children}
    </section>
  )
}
