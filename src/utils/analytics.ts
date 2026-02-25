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
  if (state === 'granted') {
    initializeGA4('zone1')
  }
}

/**
 * Update Google Consent Mode v2 signals.
 * ad_storage is always 'denied' — Silver State does not use Google Ads remarketing.
 */
export function updateGoogleConsent(state: 'granted' | 'denied'): void {
  ensureGtagShim()
  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: 'denied',
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

/** Track whether GA4 script has already been injected */
let ga4Loaded = false

/** Reset GA4 loaded state — test only */
export function _resetGA4(): void {
  ga4Loaded = false
}

/**
 * Initialize GA4 via the server-side GTM proxy.
 * CRITICAL: Never call on Zone 2 pages — zone check happens BEFORE script injection.
 */
export function initializeGA4(zone: TrackingZone): void {
  if (zone === 'zone2') return
  if (ga4Loaded) return

  const consent = getConsentState()
  if (consent !== 'granted') return

  const ga4Id = import.meta.env.VITE_GA4_ID
  if (!ga4Id) return

  // Load GA4 via server-side proxy
  const script = document.createElement('script')
  script.async = true
  script.src = `/api/gtm?id=${encodeURIComponent(ga4Id)}`
  document.head.appendChild(script)

  ensureGtagShim()
  window.gtag('js', new Date())
  window.gtag('config', ga4Id, {
    send_page_view: true,
  })

  ga4Loaded = true
}

/**
 * Determine the tracking zone for a given pathname.
 * Zone 2 = health form pages (zero scripts always).
 * For MVP, no Zone 2 pages exist — all current routes are Zone 1.
 */
export function getTrackingZone(pathname: string): TrackingZone {
  // TODO: Future Zone 2 routes — uncomment when health forms are added:
  // if (pathname.startsWith('/forms/') || pathname === '/insurance/verify') return 'zone2'
  void pathname // Prevent unused parameter warning
  return 'zone1'
}
