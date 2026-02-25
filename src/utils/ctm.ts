// CTM (Call Tracking Metrics) — Dynamic Number Insertion utility
// Loads the CTM script asynchronously and provides helpers for SPA re-scanning.

export interface CTMConfig {
  accountId: string
  phoneNumber: string
}

// CTM global API shape (available after script loads)
declare global {
  interface Window {
    _ctm?: {
      replace?: (element: HTMLElement) => void
    }
  }
}

let ctmLoaded = false

/**
 * Load the CTM JavaScript snippet asynchronously.
 * Uses the CTM account ID from VITE_CTM_ID.
 * NOTE: The actual CTM script URL pattern should be confirmed with the CTM account setup.
 * Common patterns: https://{ACCOUNT_ID}.tctm.co/t.js or a CTM-provided script URL.
 */
export function loadCTMScript(): void {
  if (typeof window === 'undefined') return
  if (ctmLoaded) return

  const accountId = import.meta.env.VITE_CTM_ID
  if (!accountId) {
    if (import.meta.env.DEV) {
      console.debug('[CTM] VITE_CTM_ID not set — skipping CTM script load')
    }
    return
  }

  const script = document.createElement('script')
  script.async = true
  // CTM script URL — confirm with CTM account setup
  script.src = `https://${encodeURIComponent(accountId)}.tctm.co/t.js`
  document.head.appendChild(script)

  ctmLoaded = true
}

/**
 * Initialize CTM — loads the script with a delay to avoid blocking LCP.
 * Uses requestIdleCallback (with setTimeout fallback) to defer loading.
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
 * Useful after React re-renders or SPA navigation that injects new phone CTAs.
 */
export function replaceCTMNumber(element: HTMLElement): void {
  if (typeof window === 'undefined') return
  if (window._ctm?.replace) {
    window._ctm.replace(element)
  }
}

/** Reset CTM loaded state — test only */
export function _resetCTM(): void {
  ctmLoaded = false
}
