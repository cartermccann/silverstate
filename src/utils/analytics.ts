import { CONSENT_CHANGED_EVENT } from './consentEvents'

// Analytics utility — Google Consent Mode v2 + GA4 loading with two-zone tracking
// Zone 1: Informational pages (GA4 allowed after consent)
// Zone 2: Health form pages (zero analytics scripts regardless of consent)

export type ConsentState = 'granted' | 'denied' | 'pending'
export type TrackingZone = 'zone1' | 'zone2'

// Extend Window to include gtag and dataLayer
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

/**
 * Ensure the gtag shim exists. This is the standard Google pattern:
 * push arguments to dataLayer before the full GTM script loads.
 */
function ensureGtagShim(): void {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
  }
}

/**
 * Read consent state from localStorage.
 * Returns 'pending' if no value stored or localStorage unavailable.
 */
export function getConsentState(): ConsentState {
  try {
    const value = localStorage.getItem('ss_consent')
    if (value === 'granted' || value === 'denied') return value
    return 'pending'
  } catch {
    // localStorage unavailable (e.g., private browsing with storage disabled)
    return 'pending'
  }
}

/**
 * Store consent state and update Google Consent Mode.
 * Conditionally initializes GA4 if granted.
 */
export function setConsentState(state: 'granted' | 'denied'): void {
  try {
    localStorage.setItem('ss_consent', state)
  } catch {
    // localStorage unavailable — consent still applies for this session
  }
  updateGoogleConsent(state)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }))
  }
  if (state === 'granted') {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
    const zone = getTrackingZone(pathname)
    if (zone === 'zone1') {
      initializeGA4('zone1')
    }
  }
}

/**
 * Update Google Consent Mode v2 signals.
 * Both analytics and ad storage follow user consent (Google Tag bundles GA4 + Google Ads).
 */
export function updateGoogleConsent(state: 'granted' | 'denied'): void {
  ensureGtagShim()
  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
  })
}

/**
 * Initialize default consent BEFORE any GA4 script loads.
 * Must be called on page load as the first consent-related action.
 */
export function initializeDefaultConsent(): void {
  ensureGtagShim()
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    wait_for_update: 500,
  })
}

/**
 * Grant Google Tag tracking after user consent.
 * The gtag.js script is already loaded in index.html with consent defaults denied.
 * This just updates consent signals so GA4 + Google Ads start collecting.
 */
export function initializeGA4(zone: TrackingZone): void {
  if (zone === 'zone2') return

  const consent = getConsentState()
  if (consent !== 'granted') return

  ensureGtagShim()
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
  })
}

/** Reset GA4 loaded state — test only */
export function _resetGA4(): void {
  // No-op — kept for test compatibility
}

/**
 * Determine the tracking zone for a given pathname.
 * Zone 2 = health form pages (zero scripts always).
 * For MVP, no Zone 2 pages exist — all current routes are Zone 1.
 */
export function getTrackingZone(pathname: string): TrackingZone {
  if (pathname.startsWith('/forms/') || pathname === '/insurance/verify') {
    return 'zone2'
  }
  return 'zone1'
}
