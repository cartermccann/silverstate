import type { CSSProperties } from 'react'

interface StepCardProps {
  step: number
  title: string
  desc: string
  style?: CSSProperties
}

export default function StepCard({ step, title, desc, style }: StepCardProps) {
  return (
    <div className="step-card" style={style}>
      <div className="step-number">{step}</div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          fontWeight: 600,
          lineHeight: 1.2,
          color: 'var(--text)',
          textWrap: 'balance',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: 10,
          fontSize: '.85rem',
          color: 'var(--body)',
          lineHeight: 1.65,
        }}
      >
        {desc}
      </p>
    </div>
  )
}
