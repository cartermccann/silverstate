import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router'
import { IconPhone, IconMenu, IconClose } from './Icons'
import type { NavLinkItem } from '../types'
import { navLinks, site } from '../data/common'
import useIsMobile from '../hooks/useIsMobile'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const lastLinkRef = useRef<HTMLAnchorElement>(null)
  const phoneCTARef = useRef<HTMLAnchorElement>(null)

  // Scroll detection
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Derive effective menu state: auto-close on desktop
  const effectiveMenuOpen = isMobile && menuOpen

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (effectiveMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [effectiveMenuOpen])

  // Focus management: move focus to first link when menu opens
  useEffect(() => {
    if (effectiveMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus()
    }
  }, [effectiveMenuOpen])

  // Escape key handler
  useEffect(() => {
    if (!effectiveMenuOpen) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [effectiveMenuOpen])

  // Focus trap inside mobile menu
  // DOM order: Phone CTA -> Hamburger -> First link -> ... -> Last link
  // Trap cycle: Phone CTA -> Hamburger -> First link -> ... -> Last link -> (wrap) Phone CTA
  useEffect(() => {
    if (!effectiveMenuOpen) return

    function handleFocusTrap(e: KeyboardEvent) {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift+Tab on Phone CTA -> wrap to last nav link
        if (document.activeElement === phoneCTARef.current) {
          e.preventDefault()
          lastLinkRef.current?.focus()
        }
      } else {
        // Tab on last nav link -> wrap to Phone CTA
        if (document.activeElement === lastLinkRef.current) {
          e.preventDefault()
          phoneCTARef.current?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleFocusTrap)
    return () => document.removeEventListener('keydown', handleFocusTrap)
  }, [effectiveMenuOpen])

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  const handleLinkClick = useCallback(() => {
    if (effectiveMenuOpen) {
      setMenuOpen(false)
    }
  }, [effectiveMenuOpen])

  const phoneAriaLabel = `Call Silver State at ${site.phone}`

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        role="banner"
        className="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          background: scrolled ? 'rgba(253,251,247,.88)' : 'rgba(253,251,247,.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Link to="/" aria-label="Silver State — Home">
            <img src="/assets/logo.png" alt="" style={{ height: isMobile ? 40 : 56 }} />
          </Link>

          {!isMobile && (
            <nav aria-label="Main navigation" style={{ display: 'flex', gap: 28 }}>
              {navLinks.map((link: NavLinkItem) => (
                <Link
                  key={link.label}
                  to={link.href}
                  style={{
                    fontSize: '.875rem',
                    fontWeight: 600,
                    color: 'var(--body)',
                    position: 'relative',
                    borderRadius: 4,
                    padding: '4px 8px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a
              href={site.phoneTel}
              className="btn"
              aria-label={phoneAriaLabel}
              ref={phoneCTARef}
              style={{
                padding: '10px 22px',
                borderRadius: 999,
                background: 'var(--blue)',
                color: 'var(--white)',
                fontSize: '.85rem',
                border: 'none',
              }}
            >
              <IconPhone />
              <span className="phone-text">{site.phone}</span>
            </a>

            {isMobile && (
              <button
                ref={hamburgerRef}
                type="button"
                aria-label={effectiveMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={effectiveMenuOpen}
                onClick={() => (effectiveMenuOpen ? handleMenuClose() : setMenuOpen(true))}
                style={{
                  minWidth: 44,
                  minHeight: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: 'var(--text)',
                }}
              >
                {effectiveMenuOpen ? <IconClose /> : <IconMenu />}
              </button>
            )}
          </div>
        </div>
      </header>

      {effectiveMenuOpen && (
        <nav
          aria-label="Main navigation"
          className="mobile-nav-panel"
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--cream)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link: NavLinkItem, i: number) => (
            <Link
              key={link.label}
              to={link.href}
              ref={i === 0 ? firstLinkRef : i === navLinks.length - 1 ? lastLinkRef : undefined}
              onClick={handleLinkClick}
              style={{
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        .site-header {
          transition: background .3s, border-color .3s;
        }
        @media (prefers-reduced-motion: reduce) {
          .site-header {
            transition-duration: 0.01ms !important;
          }
          .mobile-nav-panel {
            animation: none !important;
          }
        }
        .mobile-nav-panel {
          animation: nav-slide-in 0.3s cubic-bezier(0.2, 0.6, 0.3, 1);
        }
        @keyframes nav-slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @media (max-width: 480px) {
          .phone-text { display: none; }
        }
      `}</style>
    </>
  )
}
