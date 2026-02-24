import { render, screen } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

function ThrowingComponent(): JSX.Element {
  throw new Error('Test error')
}

function SafeComponent(): JSX.Element {
  return <p>Safe content</p>
}

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error
  beforeAll(() => {
    console.error = (...args: unknown[]) => {
      if (typeof args[0] === 'string' && args[0].includes('ErrorBoundary caught')) return
      if (typeof args[0] === 'string' && args[0].includes('The above error')) return
      originalConsoleError(...args)
    }
  })
  afterAll(() => {
    console.error = originalConsoleError
  })

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <SafeComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Safe content')).toBeInTheDocument()
  })

  it('renders fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Something Went Wrong')).toBeInTheDocument()
  })

  it('displays phone CTA in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    const phoneCta = screen.getByRole('link', { name: /call/i })
    expect(phoneCta).toHaveAttribute('href', 'tel:7255259897')
  })

  it('displays homepage link in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    const homeLink = screen.getByRole('link', { name: /homepage/i })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders with role="alert" for screen readers', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Custom error UI')).toBeInTheDocument()
  })
})
