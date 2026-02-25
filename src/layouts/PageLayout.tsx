import { type ReactNode, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import Nav from '../components/Nav'
import Breadcrumb from '../components/Breadcrumb'
import ErrorBoundary from '../components/ErrorBoundary'
import TrustBadges from '../components/TrustBadges'
import CtaBand from '../components/CtaBand'
import Footer from '../components/Footer'
import CookieConsent from '../components/CookieConsent'
import { getConsentState, getTrackingZone, initializeGA4 } from '../utils/analytics'
import { initializeCTM, replaceCTMNumber } from '../utils/ctm'
import { initializePerformanceMonitoring } from '../utils/performance'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'
  const ctmInitialized = useRef(false)

  // Initialize GA4 when consent is granted and on Zone 1 pages
  useEffect(() => {
    const zone = getTrackingZone(pathname)
    if (zone === 'zone1' && getConsentState() === 'granted') {
      initializeGA4('zone1')
    }
  }, [pathname])

  // Initialize CTM once — gated behind consent (HIPAA safety default)
  useEffect(() => {
    if (!ctmInitialized.current && getConsentState() === 'granted') {
      initializeCTM()
      ctmInitialized.current = true
    }
  }, [])

  // Re-scan for phone numbers on route changes (SPA navigation)
  useEffect(() => {
    const mainEl = document.getElementById('main-content')
    if (mainEl) {
      replaceCTMNumber(mainEl)
    }
  }, [pathname])

  // Initialize Core Web Vitals monitoring once (runs regardless of consent)
  useEffect(() => {
    initializePerformanceMonitoring()
  }, [])

  return (
    <SmoothScroll>
      <ScrollProgress color="var(--sage)" />
      <Nav />
      {!isHomepage && <Breadcrumb />}
      <main id="main-content">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
      <TrustBadges />
      <CtaBand />
      <Footer />
      <CookieConsent />
    </SmoothScroll>
  )
}
