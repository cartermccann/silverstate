import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  getConsentState,
  setConsentState,
  updateGoogleConsent,
  initializeDefaultConsent,
  initializeGA4,
  getTrackingZone,
  _resetGA4,
} from './analytics'
import { CONSENT_CHANGED_EVENT } from './consentEvents'

// Stub import.meta.env for GA4 ID
vi.stubEnv('VITE_GA4_ID', 'G-TEST123')

describe('analytics', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
    localStorage.clear()
    // Reset window.gtag and dataLayer
    delete (window as Record<string, unknown>).gtag
    delete (window as Record<string, unknown>).dataLayer
    // Remove any injected scripts
    document.querySelectorAll('script[src*="api/gtm"]').forEach((s) => s.remove())
    // Reset internal ga4Loaded flag
    _resetGA4()
  })

  describe('getConsentState', () => {
    it('returns "pending" when no value in localStorage', () => {
      expect(getConsentState()).toBe('pending')
    })

    it('returns "granted" when localStorage has "granted"', () => {
      localStorage.setItem('ss_consent', 'granted')
      expect(getConsentState()).toBe('granted')
    })

    it('returns "denied" when localStorage has "denied"', () => {
      localStorage.setItem('ss_consent', 'denied')
      expect(getConsentState()).toBe('denied')
    })

    it('returns "pending" for unexpected values', () => {
      localStorage.setItem('ss_consent', 'invalid')
      expect(getConsentState()).toBe('pending')
    })

    it('returns "pending" when localStorage throws', () => {
      const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('Storage disabled')
      })
      expect(getConsentState()).toBe('pending')
      spy.mockRestore()
    })
  })

  describe('setConsentState', () => {
    it('stores "granted" in localStorage', () => {
      setConsentState('granted')
      expect(localStorage.getItem('ss_consent')).toBe('granted')
    })

    it('stores "denied" in localStorage', () => {
      setConsentState('denied')
      expect(localStorage.getItem('ss_consent')).toBe('denied')
    })

    it('calls updateGoogleConsent', () => {
      setConsentState('granted')
      expect(window.dataLayer).toBeDefined()
      const consentUpdate = (window.dataLayer as unknown[][]).find(
        (entry) => entry[0] === 'consent' && entry[1] === 'update',
      )
      expect(consentUpdate).toBeDefined()
    })

    it('does not crash when localStorage throws', () => {
      const spy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Storage disabled')
      })
      expect(() => setConsentState('denied')).not.toThrow()
      spy.mockRestore()
    })

    it('does not initialize GA4 when granted on zone2 paths', () => {
      window.history.pushState({}, '', '/forms/intake')
      setConsentState('granted')
      expect(document.querySelector('script[src*="api/gtm"]')).toBeNull()
    })

    it('dispatches consent change event', () => {
      const listener = vi.fn()
      window.addEventListener(CONSENT_CHANGED_EVENT, listener as EventListener)
      setConsentState('granted')
      expect(listener).toHaveBeenCalledTimes(1)
      const event = listener.mock.calls[0]?.[0] as CustomEvent<'granted' | 'denied'>
      expect(event.detail).toBe('granted')
      window.removeEventListener(CONSENT_CHANGED_EVENT, listener as EventListener)
    })
  })

  describe('updateGoogleConsent', () => {
    it('pushes consent update to dataLayer', () => {
      updateGoogleConsent('granted')
      const entries = window.dataLayer as unknown[][]
      const update = entries.find((e) => e[0] === 'consent' && e[1] === 'update')
      expect(update).toBeDefined()
      expect(update![2]).toEqual({
        analytics_storage: 'granted',
        ad_storage: 'denied',
      })
    })

    it('always sets ad_storage to denied', () => {
      updateGoogleConsent('granted')
      const entries = window.dataLayer as unknown[][]
      const update = entries.find((e) => e[0] === 'consent' && e[1] === 'update')
      expect((update![2] as Record<string, string>).ad_storage).toBe('denied')
    })
  })

  describe('initializeDefaultConsent', () => {
    it('sets default consent to denied for both storage types', () => {
      initializeDefaultConsent()
      const entries = window.dataLayer as unknown[][]
      const defaultEntry = entries.find((e) => e[0] === 'consent' && e[1] === 'default')
      expect(defaultEntry).toBeDefined()
      expect(defaultEntry![2]).toEqual({
        analytics_storage: 'denied',
        ad_storage: 'denied',
        wait_for_update: 500,
      })
    })
  })

  describe('initializeGA4', () => {
    it('does not load script on zone2', () => {
      localStorage.setItem('ss_consent', 'granted')
      initializeGA4('zone2')
      expect(document.querySelector('script[src*="api/gtm"]')).toBeNull()
    })

    it('does not load script when consent is not granted', () => {
      initializeGA4('zone1')
      expect(document.querySelector('script[src*="api/gtm"]')).toBeNull()
    })

    it('loads script when zone1 and consent is granted', () => {
      localStorage.setItem('ss_consent', 'granted')
      initializeGA4('zone1')
      const script = document.querySelector('script[src*="api/gtm"]') as HTMLScriptElement
      expect(script).not.toBeNull()
      expect(script.src).toContain('/api/gtm?id=G-TEST123')
      expect(script.async).toBe(true)
    })

    it('does not load script twice', () => {
      localStorage.setItem('ss_consent', 'granted')
      initializeGA4('zone1')
      initializeGA4('zone1')
      const scripts = document.querySelectorAll('script[src*="api/gtm"]')
      expect(scripts.length).toBe(1)
    })
  })

  describe('getTrackingZone', () => {
    it('returns zone1 for informational pages', () => {
      expect(getTrackingZone('/')).toBe('zone1')
      expect(getTrackingZone('/programs/residential-treatment')).toBe('zone1')
      expect(getTrackingZone('/insurance')).toBe('zone1')
      expect(getTrackingZone('/contact')).toBe('zone1')
    })

    it('returns zone1 for all current MVP routes', () => {
      const routes = [
        '/',
        '/programs',
        '/conditions',
        '/insurance',
        '/about',
        '/contact',
        '/admissions/process',
        '/locations',
        '/privacy-policy',
      ]
      routes.forEach((route) => {
        expect(getTrackingZone(route)).toBe('zone1')
      })
    })

    it('returns zone2 for future health form routes', () => {
      expect(getTrackingZone('/forms/insurance')).toBe('zone2')
      expect(getTrackingZone('/insurance/verify')).toBe('zone2')
    })
  })
})
