import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconPhone } from './Icons'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Treatment', href: '#treatment' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'About', href: '#about' },
]

export default function Nav({ variant = 'light' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = variant === 'dark'

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 64,
          background: scrolled ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background .3s, border-color .3s',
        }}
      >
        <div className="wrap" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '100%',
        }}>
          <Link to="/" aria-label="Silver State — Home">
            <img
              src="/assets/logo.png"
              alt=""
              style={{
                height: 56,
              }}
            />
          </Link>

          <nav aria-label="Main navigation" style={{ display: 'flex', gap: 28 }} className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '.875rem', fontWeight: 500,
                  color: 'var(--body)',
                  transition: 'color .15s',
                  position: 'relative',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:7255259897"
            className="btn"
            style={{
              padding: '10px 22px', borderRadius: 999,
              background: 'var(--blue)',
              color: 'var(--white)',
              fontSize: '.85rem',
              border: 'none',
              transition: 'all .15s',
            }}
          >
            <IconPhone />
            <span>(725) 525-9897</span>
          </a>
        </div>
      </header>
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
