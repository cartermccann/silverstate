// CTM (Call Tracking Metrics) — Dynamic Number Insertion utility
// Account: 497356 | Script: //497356.tctm.co/t.js
// Primary script loads in index.html <head> per CTM standards.
// This module handles SPA re-scanning after React route changes.

const CTM_ACCOUNT_ID = '497356'
const CTM_SCRIPT_URL = `https://${CTM_ACCOUNT_ID}.tctm.co/t.js`
const CTM_SCRIPT_ID = 'ss-ctm-script'

// CTM global API shape (available after script loads)
declare global {
  interface Window {
    _ctm?: {
      replace?: (element: HTMLElement) => void
    }
  }
}

let ctmLoaded = false
let ctmLoading = false

/**
 * Load the CTM tracking script.
 * The primary load happens in index.html <head>, but this serves
 * as a fallback if the head script hasn't loaded yet (e.g. consent-gated).
 */
export function loadCTMScript(): void {
  if (typeof window === 'undefined') return
  if (ctmLoaded || ctmLoading) return

  const existingScript = document.getElementById(CTM_SCRIPT_ID)
  if (existingScript) return

  const script = document.createElement('script')
  script.id = CTM_SCRIPT_ID
  script.async = true
  script.src = CTM_SCRIPT_URL
  ctmLoading = true
  script.addEventListener('load', () => {
    ctmLoaded = true
    ctmLoading = false
  })
  script.addEventListener('error', () => {
    ctmLoaded = false
    ctmLoading = false
    script.remove()
  })
  document.head.appendChild(script)
}

/**
 * Initialize CTM — defers loading to avoid blocking LCP.
 */
export function initializeCTM(): void {
  if (typeof window === 'undefined') return

  const load = () => loadCTMScript()

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(load)
  } else {
    setTimeout(load, 100)
  }
}

/**
 * Trigger CTM to re-scan an element for phone numbers to replace.
 * Call this after SPA navigation so new phone CTAs get swapped.
 */
export function replaceCTMNumber(element: HTMLElement): void {
  if (typeof window === 'undefined') return
  if (window._ctm?.replace) {
    window._ctm.replace(element)
  }
}

/**
 * Best-effort CTM teardown for consent revocation.
 */
export function disableCTM(): void {
  if (typeof window === 'undefined') return
  document.getElementById(CTM_SCRIPT_ID)?.remove()
  delete window._ctm
  ctmLoaded = false
  ctmLoading = false
}

/** Reset CTM loaded state — test only */
export function _resetCTM(): void {
  document.getElementById(CTM_SCRIPT_ID)?.remove()
  ctmLoaded = false
  ctmLoading = false
  if (typeof window !== 'undefined') {
    delete window._ctm
  }
}
