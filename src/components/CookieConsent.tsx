import { useState, useEffect, useRef } from 'react'
import {
  getConsentState,
  setConsentState,
  initializeDefaultConsent,
  updateGoogleConsent,
} from '../utils/analytics'
import { OPEN_CONSENT_EVENT } from '../utils/consentEvents'
import useIsMobile from '../hooks/useIsMobile'

export default function CookieConsent() {
  const isMobile = useIsMobile()
  const [showBanner, setShowBanner] = useState(
    () => typeof window !== 'undefined' && getConsentState() === 'pending',
  )
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initializeDefaultConsent()
    const savedConsent = getConsentState()
    if (savedConsent !== 'pending') {
      updateGoogleConsent(savedConsent)
    }
  }, [])

  useEffect(() => {
    function openConsentPreferences() {
      setShowBanner(true)
    }

    window.addEventListener(OPEN_CONSENT_EVENT, openConsentPreferences)
    return () => {
      window.removeEventListener(OPEN_CONSENT_EVENT, openConsentPreferences)
    }
  }, [])

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
      <div
        style={{
          ...styles.inner,
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <div style={{ ...styles.text, flex: isMobile ? '0 0 auto' : '1 1 280px' }}>
          <p style={styles.heading}>We value your privacy</p>
          <p style={styles.description}>
            We use cookies to analyze site traffic and improve your experience. No health
            information is collected through cookies.
          </p>
        </div>
        <div
          style={{
            ...styles.buttons,
            width: isMobile ? '100%' : 'auto',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <button
            type="button"
            onClick={handleAccept}
            style={{ ...styles.acceptBtn, width: isMobile ? '100%' : 'auto' }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                background: 'var(--white)',
                color: 'var(--dark)',
              })
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                background: 'var(--sage)',
                color: 'var(--white)',
              })
            }}
          >
            Accept Analytics
          </button>
          <button
            type="button"
            onClick={handleDecline}
            style={{ ...styles.declineBtn, width: isMobile ? '100%' : 'auto' }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, { background: 'rgba(255, 255, 255, 0.15)' })
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
    color: 'var(--white)',
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
    flexWrap: 'wrap',
  },
  text: {
    flex: '1 1 280px',
    minWidth: 0,
  },
  heading: {
    fontFamily: 'var(--font-display)',
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
    color: 'var(--white)',
    border: 'none',
    borderRadius: 'var(--radius)',
    padding: '12px 24px',
    fontSize: '0.9375rem',
    fontWeight: 600,
    fontFamily: 'var(--font-display)',
    cursor: 'pointer',
    minHeight: 44,
    minWidth: 44,
    transition: 'background 0.2s, color 0.2s',
  },
  declineBtn: {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid var(--white)',
    borderRadius: 'var(--radius)',
    padding: '12px 24px',
    fontSize: '0.9375rem',
    fontWeight: 500,
    fontFamily: 'var(--font-display)',
    cursor: 'pointer',
    minHeight: 44,
    minWidth: 44,
    transition: 'background 0.2s',
  },
}
