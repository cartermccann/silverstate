import { describe, it, expect, beforeEach, vi } from 'vitest'
import { loadCTMScript, initializeCTM, replaceCTMNumber, _resetCTM } from './ctm'

vi.stubEnv('VITE_CTM_ID', '12345')

describe('ctm', () => {
  beforeEach(() => {
    document.querySelectorAll('script[src*="tctm.co"]').forEach((s) => s.remove())
    _resetCTM()
    delete (window as Record<string, unknown>)._ctm
  })

  describe('loadCTMScript', () => {
    it('injects CTM script with async attribute', () => {
      loadCTMScript()
      const script = document.querySelector('script[src*="tctm.co"]') as HTMLScriptElement
      expect(script).not.toBeNull()
      expect(script.async).toBe(true)
      expect(script.src).toContain('12345.tctm.co/t.js')
    })

    it('does not inject script twice', () => {
      loadCTMScript()
      loadCTMScript()
      const scripts = document.querySelectorAll('script[src*="tctm.co"]')
      expect(scripts.length).toBe(1)
    })

    it('skips loading when VITE_CTM_ID is not set', () => {
      vi.stubEnv('VITE_CTM_ID', '')
      _resetCTM()
      loadCTMScript()
      expect(document.querySelector('script[src*="tctm.co"]')).toBeNull()
    })
  })

  describe('initializeCTM', () => {
    it('defers loading via requestIdleCallback or setTimeout', () => {
      vi.useFakeTimers()
      initializeCTM()
      // Script not loaded synchronously
      expect(document.querySelector('script[src*="tctm.co"]')).toBeNull()
      vi.runAllTimers()
      vi.useRealTimers()
    })
  })

  describe('replaceCTMNumber', () => {
    it('calls _ctm.replace when available', () => {
      const mockReplace = vi.fn()
      window._ctm = { replace: mockReplace }
      const el = document.createElement('div')
      replaceCTMNumber(el)
      expect(mockReplace).toHaveBeenCalledWith(el)
    })

    it('does not throw when _ctm is undefined', () => {
      const el = document.createElement('div')
      expect(() => replaceCTMNumber(el)).not.toThrow()
    })
  })
})
