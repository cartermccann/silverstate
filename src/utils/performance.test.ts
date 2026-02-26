import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock web-vitals
const mockOnLCP = vi.fn()
const mockOnCLS = vi.fn()
const mockOnINP = vi.fn()

vi.mock('web-vitals', () => ({
  onLCP: mockOnLCP,
  onCLS: mockOnCLS,
  onINP: mockOnINP,
}))

// Mock analytics consent
vi.mock('./analytics', () => ({
  getConsentState: vi.fn(() => 'denied'),
}))

import { initializePerformanceMonitoring } from './performance'
import { getConsentState } from './analytics'

const mockGetConsentState = vi.mocked(getConsentState)

describe('performance', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetConsentState.mockReturnValue('denied')
  })

  it('registers all three CWV callbacks', async () => {
    initializePerformanceMonitoring()
    // Wait for dynamic import to resolve
    await vi.dynamicImportSettled()
    expect(mockOnLCP).toHaveBeenCalledOnce()
    expect(mockOnCLS).toHaveBeenCalledOnce()
    expect(mockOnINP).toHaveBeenCalledOnce()
  })

  it('passes callback functions to each CWV handler', async () => {
    initializePerformanceMonitoring()
    await vi.dynamicImportSettled()
    expect(typeof mockOnLCP.mock.calls[0][0]).toBe('function')
    expect(typeof mockOnCLS.mock.calls[0][0]).toBe('function')
    expect(typeof mockOnINP.mock.calls[0][0]).toBe('function')
  })

  it('sends metric to GA4 when consent is granted and gtag exists', async () => {
    mockGetConsentState.mockReturnValue('granted')
    const mockGtag = vi.fn()
    window.gtag = mockGtag

    initializePerformanceMonitoring()
    await vi.dynamicImportSettled()

    // Simulate LCP metric callback
    const lcpCallback = mockOnLCP.mock.calls[0][0]
    lcpCallback({ name: 'LCP', value: 2500, id: 'v1-123', rating: 'good' })

    expect(mockGtag).toHaveBeenCalledWith('event', 'LCP', {
      value: 2500,
      metric_id: 'v1-123',
      metric_rating: 'good',
      page_path: '/',
    })

    delete (window as Record<string, unknown>).gtag
  })

  it('multiplies CLS value by 1000 for GA4', async () => {
    mockGetConsentState.mockReturnValue('granted')
    const mockGtag = vi.fn()
    window.gtag = mockGtag

    initializePerformanceMonitoring()
    await vi.dynamicImportSettled()

    const clsCallback = mockOnCLS.mock.calls[0][0]
    clsCallback({ name: 'CLS', value: 0.15, id: 'v1-456', rating: 'needs-improvement' })

    expect(mockGtag).toHaveBeenCalledWith('event', 'CLS', {
      value: 150,
      metric_id: 'v1-456',
      metric_rating: 'needs-improvement',
      page_path: '/',
    })

    delete (window as Record<string, unknown>).gtag
  })

  it('logs to console.debug when consent is denied', async () => {
    mockGetConsentState.mockReturnValue('denied')
    const debugSpy = vi.spyOn(console, 'debug').mockImplementation(() => {})

    initializePerformanceMonitoring()
    await vi.dynamicImportSettled()

    const lcpCallback = mockOnLCP.mock.calls[0][0]
    lcpCallback({ name: 'LCP', value: 2500, id: 'v1-789', rating: 'good' })

    expect(debugSpy).toHaveBeenCalledWith('[CWV] LCP:', 2500, '(good)', '/')
    debugSpy.mockRestore()
  })
})
