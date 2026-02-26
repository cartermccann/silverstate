import type { CSSProperties } from 'react'
import { accreditations } from '../data/common'
import type { AccreditationEntry, BaseComponentProps } from '../types'
import { IconAward } from './Icons'

type TrustBadgesProps = BaseComponentProps

const sectionStyle: CSSProperties = {
  padding: '32px 0',
  background: 'var(--warm)',
  textAlign: 'center',
}

const badgeContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
  flexWrap: 'wrap',
}

const badgeStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: '.85rem',
  fontWeight: 600,
  color: 'var(--body)',
  fontFamily: 'var(--font-display)',
}

const badgeImgStyle: CSSProperties = {
  height: 48,
  width: 'auto',
  objectFit: 'contain',
}

export default function TrustBadges({ className, style }: TrustBadgesProps) {
  const badges: AccreditationEntry[] = accreditations

  return (
    <section
      aria-label="Accreditations and certifications"
      className={className}
      style={{ ...sectionStyle, ...style }}
    >
      <div className="wrap" style={badgeContainerStyle}>
        {badges.map((acc) => (
          <div key={acc.name} style={badgeStyle}>
            {acc.logo ? (
              <img src={acc.logo} alt={`${acc.name} accreditation badge`} style={badgeImgStyle} />
            ) : (
              <IconAward style={{ color: 'var(--sage)', flexShrink: 0 }} />
            )}
            <span>{acc.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
