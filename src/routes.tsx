import { lazy, Suspense } from 'react'
import type { RouteObject } from 'react-router'

const Home = lazy(() => import('./pages/Home'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Suspense fallback={null}><Home /></Suspense>,
  },
  {
    path: '*',
    element: (
      <div style={{ textAlign: 'center', padding: '120px 32px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--h2-size)', marginBottom: 16 }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--body)' }}>The page you're looking for doesn't exist.</p>
      </div>
    ),
  },
]
