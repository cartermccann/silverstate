import { Component } from 'react'
import type { CSSProperties, ReactNode, ErrorInfo } from 'react'
import { site } from '../data/common'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  style?: CSSProperties
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

const containerStyle: CSSProperties = {
  textAlign: 'center',
  padding: '80px 24px',
  maxWidth: 600,
  margin: '0 auto',
}

const headingStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.5rem',
  fontWeight: 600,
  color: 'var(--text)',
  marginBottom: 16,
}

const bodyStyle: CSSProperties = {
  fontSize: '.95rem',
  color: 'var(--body)',
  lineHeight: 1.65,
  marginBottom: 32,
}

const ctaStyle: CSSProperties = {
  display: 'inline-block',
  padding: '14px 32px',
  backgroundColor: 'var(--blue)',
  color: '#fff',
  borderRadius: 'var(--radius)',
  textDecoration: 'none',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '1rem',
  minWidth: 44,
  minHeight: 44,
}

const homeLinkStyle: CSSProperties = {
  display: 'inline-block',
  marginTop: 16,
  color: 'var(--blue)',
  textDecoration: 'underline',
  fontSize: '.9rem',
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <section
          role="alert"
          className={this.props.className}
          style={{ ...containerStyle, ...this.props.style }}
        >
          <h2 style={headingStyle}>Something Went Wrong</h2>
          <p style={bodyStyle}>
            We&apos;re sorry — this page isn&apos;t loading correctly right now. Please try
            refreshing, or reach out to us directly. We&apos;re here to help 24/7.
          </p>
          <a href={site.phoneTel} style={ctaStyle}>
            Call {site.phone}
          </a>
          <br />
          <a href="/" style={homeLinkStyle}>
            Return to Homepage
          </a>
        </section>
      )
    }

    return this.props.children
  }
}
