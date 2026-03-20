import { describe, it, expect, beforeEach, vi } from 'vitest'
import { loadCTMScript, initializeCTM, replaceCTMNumber, disableCTM, _resetCTM } from './ctm'

describe('ctm', () => {
  beforeEach(() => {
    document.querySelectorAll('#ss-ctm-script').forEach((s) => s.remove())
    _resetCTM()
    delete (window as Record<string, unknown>)._ctm
  })

  describe('loadCTMScript', () => {
    it('injects CTM script with async attribute and hardcoded account ID', () => {
      loadCTMScript()
      const script = document.querySelector('#ss-ctm-script') as HTMLScriptElement
      expect(script).not.toBeNull()
      expect(script.async).toBe(true)
      expect(script.src).toContain('497356.tctm.co/t.js')
    })

    it('does not inject script twice', () => {
      loadCTMScript()
      loadCTMScript()
      const scripts = document.querySelectorAll('#ss-ctm-script')
      expect(scripts.length).toBe(1)
    })

    it('retries after script load error', () => {
      loadCTMScript()
      const firstScript = document.querySelector('#ss-ctm-script') as HTMLScriptElement
      expect(firstScript).not.toBeNull()
      firstScript.dispatchEvent(new Event('error'))

      loadCTMScript()
      const secondScript = document.querySelector('#ss-ctm-script') as HTMLScriptElement
      expect(secondScript).not.toBeNull()
      expect(secondScript).not.toBe(firstScript)
    })
  })

  describe('initializeCTM', () => {
    it('defers loading via requestIdleCallback or setTimeout', () => {
      vi.useFakeTimers()
      initializeCTM()
      // Script not loaded synchronously
      expect(document.querySelector('#ss-ctm-script')).toBeNull()
      vi.runAllTimers()
      expect(document.querySelector('#ss-ctm-script')).not.toBeNull()
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

  describe('disableCTM', () => {
    it('removes CTM script and resets state', () => {
      loadCTMScript()
      expect(document.querySelector('#ss-ctm-script')).not.toBeNull()
      disableCTM()
      expect(document.querySelector('#ss-ctm-script')).toBeNull()
    })
  })
})
