import { useState, useCallback } from 'react'

export default function CodeBlock({ children, label }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [children])

  return (
    <div style={{ position: 'relative', marginTop: 12 }}>
      {label && (
        <span style={{
          display: 'block', fontSize: '.7rem', fontWeight: 600,
          letterSpacing: '.06em', textTransform: 'uppercase',
          color: 'var(--muted)', marginBottom: 6,
        }}>
          {label}
        </span>
      )}
      <pre style={{
        background: 'var(--warm)', borderRadius: 'var(--radius)',
        padding: '16px 20px', paddingRight: 56, overflow: 'auto',
        fontSize: '.82rem', lineHeight: 1.6, color: 'var(--text)',
        fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace",
        border: '1px solid var(--border)', margin: 0,
      }}>
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute', top: label ? 30 : 8, right: 8,
          padding: '6px 10px', borderRadius: 6, border: '1px solid var(--border)',
          background: copied ? 'var(--sage)' : '#fff', color: copied ? '#fff' : 'var(--body)',
          fontSize: '.72rem', fontWeight: 600, cursor: 'pointer',
          fontFamily: 'inherit', transition: 'all .15s ease',
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}
