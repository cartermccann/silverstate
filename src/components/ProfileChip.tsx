import type { CSSProperties } from 'react'

interface ProfileChipProps {
  label: string
  desc: string
  dotColor?: string
  style?: CSSProperties
}

export default function ProfileChip({
  label,
  desc,
  dotColor = '#5A7A6E',
  style,
}: ProfileChipProps) {
  return (
    <div className="profile-chip" style={style}>
      <span
        style={{
          flexShrink: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: dotColor,
          marginTop: 7,
        }}
      />
      <div>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '.95rem',
            fontWeight: 600,
            color: 'var(--text)',
            display: 'block',
            lineHeight: 1.3,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: '.85rem',
            color: 'var(--muted)',
            lineHeight: 1.5,
            marginTop: 2,
            display: 'block',
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  )
}
