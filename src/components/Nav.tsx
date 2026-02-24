import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { IconPhone } from './Icons'
import type { NavLinkItem } from '../types'
import { navLinks, site } from '../data/common'

interface NavProps {
  variant?: 'light' | 'dark'
}

export default function Nav({ variant: _variant = 'light' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header
        role="banner"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 64,
          background: scrolled ? 'rgba(253,251,247,.88)' : 'rgba(253,251,247,.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
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
            {navLinks.map((link: NavLinkItem) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '.875rem', fontWeight: 600,
                  color: 'var(--body)',
                  transition: 'color .15s',
                  position: 'relative',
                  borderRadius: 4,
                  padding: '4px 8px',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.phoneTel}
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
            <span>{site.phone}</span>
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
