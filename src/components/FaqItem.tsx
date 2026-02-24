interface FaqItemProps {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
  accentColor?: string
}

export default function FaqItem({ q, a, isOpen, onToggle, accentColor = '#5A7A6E' }: FaqItemProps) {
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
          fontSize: '1.05rem',
          fontWeight: 500,
          color: 'var(--text)',
          lineHeight: 1.4,
          gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: isOpen ? accentColor : 'rgba(0,0,0,.05)',
            color: isOpen ? '#fff' : 'var(--body)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            fontWeight: 300,
            lineHeight: 1,
            transition: 'all .2s ease',
          }}
          aria-hidden="true"
        >
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s cubic-bezier(0.2, 0.6, 0.3, 1), opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              paddingBottom: 24,
              color: 'var(--body)',
              fontSize: '.95rem',
              lineHeight: 1.7,
              maxWidth: 640,
            }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}
