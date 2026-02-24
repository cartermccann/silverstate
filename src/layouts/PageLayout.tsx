import type { ReactNode } from 'react'
import { useLocation } from 'react-router'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import Nav from '../components/Nav'
import Breadcrumb from '../components/Breadcrumb'
import ErrorBoundary from '../components/ErrorBoundary'
import TrustBadges from '../components/TrustBadges'
import CtaBand from '../components/CtaBand'
import Footer from '../components/Footer'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'

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
    </SmoothScroll>
  )
}
