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
let ctmLoading = false
const CTM_SCRIPT_ID = 'ss-ctm-script'

function resolveCTMScriptUrl(accountId: string): string {
  const encodedAccountId = encodeURIComponent(accountId)
  const configuredBaseUrl = import.meta.env.VITE_CTM_BASE_URL?.trim()

  if (!configuredBaseUrl) {
    return `https://${encodedAccountId}.tctm.co/t.js`
  }

  // Supports placeholders like {ACCOUNT_ID} or {accountId}.
  const baseUrl = configuredBaseUrl
    .replaceAll('{ACCOUNT_ID}', encodedAccountId)
    .replaceAll('{accountId}', encodedAccountId)
    .replace(/\/+$/, '')

  return baseUrl.endsWith('.js') ? baseUrl : `${baseUrl}/t.js`
}

/**
 * Load the CTM JavaScript snippet asynchronously.
 * Uses the CTM account ID from VITE_CTM_ID.
 * NOTE: The actual CTM script URL pattern should be confirmed with the CTM account setup.
 * Common patterns: https://{ACCOUNT_ID}.tctm.co/t.js or a CTM-provided script URL.
 */
export function loadCTMScript(): void {
  if (typeof window === 'undefined') return
  if (ctmLoaded || ctmLoading) return

  const accountId = import.meta.env.VITE_CTM_ID
  if (!accountId) {
    if (import.meta.env.DEV) {
      console.debug('[CTM] VITE_CTM_ID not set — skipping CTM script load')
    }
    return
  }

  const existingScript = document.getElementById(CTM_SCRIPT_ID)
  if (existingScript) return

  const script = document.createElement('script')
  script.id = CTM_SCRIPT_ID
  script.async = true
  // CTM script URL — confirm with CTM account setup.
  // Optionally configurable via VITE_CTM_BASE_URL.
  script.src = resolveCTMScriptUrl(accountId)
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

/**
 * Best-effort CTM teardown for consent revocation.
 * Removes script and clears in-memory CTM state.
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
