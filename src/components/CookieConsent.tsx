import { useState, useEffect, useRef } from 'react'
import {
  getConsentState,
  setConsentState,
  initializeDefaultConsent,
} from '../utils/analytics'

const BREAKPOINT = 900

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => {
    initializeDefaultConsent()
    return getConsentState() === 'pending'
  })
  const bannerRef = useRef<HTMLDivElement>(null)

  // Focus the banner when it appears so keyboard users are aware
  useEffect(() => {
    if (showBanner && bannerRef.current) {
      bannerRef.current.focus()
    }
  }, [showBanner])

  if (!showBanner) return null

  function handleAccept() {
    setConsentState('granted')
    setShowBanner(false)
  }

  function handleDecline() {
    setConsentState('denied')
    setShowBanner(false)
  }

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      tabIndex={-1}
      style={styles.banner}
    >
      <div style={styles.inner}>
        <div style={styles.text}>
          <p style={styles.heading}>We value your privacy</p>
          <p style={styles.description}>
            We use cookies to analyze site traffic and improve your experience.
            No health information is collected through cookies.
          </p>
        </div>
        <div style={styles.buttons}>
          <button
            type="button"
            onClick={handleAccept}
            style={styles.acceptBtn}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, { background: '#fff', color: 'var(--dark)' })
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, { background: 'var(--sage)', color: '#fff' })
            }}
          >
            Accept Analytics
          </button>
          <button
            type="button"
            onClick={handleDecline}
            style={styles.declineBtn}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, { background: 'rgba(255,255,255,0.15)' })
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, { background: 'transparent' })
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'var(--dark)',
    color: '#fff',
    boxShadow: '0 -2px 16px rgba(0, 0, 0, 0.18)',
    padding: '20px 0',
    outline: 'none',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    flexWrap: 'wrap' as const,
  },
  text: {
    flex: '1 1 400px',
    minWidth: 0,
  },
  heading: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: '0 0 6px 0',
  },
  description: {
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    margin: 0,
    opacity: 0.85,
  },
  buttons: {
    display: 'flex',
    gap: 12,
    flexShrink: 0,
  },
  acceptBtn: {
    background: 'var(--sage)',
    color: '#fff',
    border: 'none',
    borderRadius: 'var(--radius)',
    padding: '12px 24px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: 'pointer',
    minHeight: 44,
    minWidth: 44,
    transition: 'background 0.2s, color 0.2s',
  },
  declineBtn: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: 'var(--radius)',
    padding: '12px 24px',
    fontSize: '0.9375rem',
    fontWeight: 500,
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: 'pointer',
    minHeight: 44,
    minWidth: 44,
    transition: 'background 0.2s',
  },
}

// Responsive styles via media query - inject once
if (typeof document !== 'undefined') {
  const styleId = 'cookie-consent-responsive'
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      @media (max-width: ${BREAKPOINT}px) {
        [aria-label="Cookie consent"] > div {
          flex-direction: column !important;
          text-align: center !important;
        }
        [aria-label="Cookie consent"] > div > div:last-child {
          width: 100% !important;
          flex-direction: column !important;
        }
        [aria-label="Cookie consent"] button {
          width: 100% !important;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        [aria-label="Cookie consent"] {
          animation: none !important;
        }
      }
    `
    document.head.appendChild(style)
  }
}
