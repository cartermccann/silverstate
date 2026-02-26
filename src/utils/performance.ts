// Core Web Vitals monitoring — uses web-vitals library to measure LCP, CLS, INP
// Metrics are forwarded to GA4 (if consent granted) or logged to console.

import type { Metric } from 'web-vitals'
import { getConsentState } from './analytics'

/**
 * Send a Core Web Vitals metric to GA4 or console.
 * GA4 receives the metric only if consent is granted and gtag is available.
 */
function sendToAnalytics(metric: Metric): void {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'

  if (getConsentState() === 'granted' && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_rating: metric.rating,
      page_path: pathname,
    })
  } else {
    console.debug(`[CWV] ${metric.name}:`, metric.value, `(${metric.rating})`, pathname)
  }
}

/**
 * Initialize Core Web Vitals monitoring.
 * Safe to call regardless of consent — web-vitals only measures locally,
 * data is only forwarded to GA4 if consent is granted.
 */
export function initializePerformanceMonitoring(): void {
  // Dynamic import to keep web-vitals out of the critical bundle
  import('web-vitals').then(({ onLCP, onCLS, onINP }) => {
    onLCP(sendToAnalytics)
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics)
  })
}
