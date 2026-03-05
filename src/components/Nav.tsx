import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router'
import { IconPhone, IconMenu, IconClose, IconChevronDown } from './Icons'
import type { NavLinkItemWithDropdown } from '../types'
import { navLinks, site, CDN_URL } from '../data/common'
import useIsMobile from '../hooks/useIsMobile'

export default function Nav() {
  const mobileNavPanelId = 'mobile-main-navigation'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()

  // Desktop dropdown state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Mobile accordion state
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const lastLinkRef = useRef<HTMLAnchorElement>(null)
  const phoneCTARef = useRef<HTMLAnchorElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null)
    setMenuOpen(false)
    setMobileAccordion(null)
  }, [location.pathname])

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

  // Escape key handler — close dropdown (desktop) or mobile menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (openDropdown) {
          const trigger = triggerRefs.current[openDropdown]
          setOpenDropdown(null)
          trigger?.focus()
        } else if (effectiveMenuOpen) {
          setMenuOpen(false)
          hamburgerRef.current?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [effectiveMenuOpen, openDropdown])

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!effectiveMenuOpen) return

    function handleFocusTrap(e: KeyboardEvent) {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === phoneCTARef.current) {
          e.preventDefault()
          lastLinkRef.current?.focus()
        }
      } else {
        if (document.activeElement === lastLinkRef.current) {
          e.preventDefault()
          phoneCTARef.current?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleFocusTrap)
    return () => document.removeEventListener('keydown', handleFocusTrap)
  }, [effectiveMenuOpen])

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest('.nav-dropdown-wrapper')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [openDropdown])

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current)
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current)
    }
  }, [])

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  const handleLinkClick = useCallback(() => {
    if (effectiveMenuOpen) {
      setMenuOpen(false)
    }
    setOpenDropdown(null)
  }, [effectiveMenuOpen])

  // Desktop hover handlers
  const handleMouseEnter = useCallback((label: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
    enterTimerRef.current = setTimeout(() => {
      setOpenDropdown(label)
    }, 150)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current)
      enterTimerRef.current = null
    }
    leaveTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }, [])

  // Mobile accordion toggle
  const toggleMobileAccordion = useCallback((label: string) => {
    setMobileAccordion((prev) => (prev === label ? null : label))
  }, [])

  const phoneAriaLabel = `Call Silver State at ${site.phone}`

  // Active link detection
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  // Track last simple link index for mobile focus trap
  let mobileLastLinkIndex = -1
  navLinks.forEach((l, i) => {
    if (!l.dropdown) mobileLastLinkIndex = i
  })

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
          <Link to="/" aria-label="Silver State — Home" onClick={handleLinkClick}>
            <img src={`${CDN_URL}/assets/logo.png`} alt="" style={{ height: isMobile ? 40 : 56 }} />
          </Link>

          <nav aria-label="Main navigation" className="desktop-nav" style={{ gap: 2, alignItems: 'center' }}>
              {navLinks.map((link: NavLinkItemWithDropdown) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="nav-dropdown-wrapper"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative' }}
                  >
                    <button
                      type="button"
                      ref={(el) => {
                        triggerRefs.current[link.label] = el
                      }}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.label}
                      aria-current={isActive(link.href) ? 'true' : undefined}
                      onClick={() =>
                        setOpenDropdown((prev) => (prev === link.label ? null : link.label))
                      }
                      className="nav-trigger-btn"
                      style={{
                        fontSize: '.82rem',
                        fontWeight: 600,
                        color: isActive(link.href) ? 'var(--blue)' : 'var(--body)',
                        position: 'relative',
                        borderRadius: 4,
                        padding: '4px 6px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        fontFamily: 'inherit',
                      }}
                    >
                      {link.label}
                      <IconChevronDown
                        style={{
                          transition: 'transform .2s',
                          transform:
                            openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {openDropdown === link.label && (
                      <div
                        className="mega-dropdown"
                        role="menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          zIndex: 99,
                          width: 620,
                          marginTop: 8,
                          animation: 'mega-fade-in .2s ease-out',
                          background: 'rgba(255,255,255,.97)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid var(--border)',
                          boxShadow: '0 12px 40px rgba(0,0,0,.1)',
                          borderRadius: 12,
                          padding: '24px 28px',
                        }}
                      >
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3, 1fr)',
                              gap: 24,
                            }}
                          >
                            {link.dropdown.map((col) => (
                              <div key={col.heading}>
                                <div
                                  style={{
                                    fontSize: '.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '.08em',
                                    color: 'var(--body)',
                                    opacity: 0.5,
                                    marginBottom: 12,
                                  }}
                                >
                                  {col.heading}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                  {col.links.map((item) => (
                                    <Link
                                      key={item.href}
                                      to={item.href}
                                      role="menuitem"
                                      onClick={handleLinkClick}
                                      className="mega-link"
                                      style={{
                                        fontSize: '.85rem',
                                        color: 'var(--body)',
                                        padding: '5px 8px',
                                        borderRadius: 6,
                                        display: 'block',
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                  {col.viewAll && (
                                    <Link
                                      to={col.viewAll.href}
                                      role="menuitem"
                                      onClick={handleLinkClick}
                                      className="mega-view-all"
                                      style={{
                                        fontSize: '.8rem',
                                        fontWeight: 600,
                                        color: 'var(--blue)',
                                        padding: '8px 8px 4px',
                                        display: 'block',
                                        marginTop: 4,
                                      }}
                                    >
                                      {col.viewAll.label} →
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    style={{
                      fontSize: '.82rem',
                      fontWeight: 600,
                      color: isActive(link.href) ? 'var(--blue)' : 'var(--body)',
                      position: 'relative',
                      borderRadius: 4,
                      padding: '4px 6px',
                    }}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

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
                minWidth: 44,
                minHeight: 44,
                justifyContent: 'center',
              }}
            >
              <IconPhone />
              <span className="phone-text">{site.phone}</span>
            </a>

            <button
              ref={hamburgerRef}
              type="button"
              className="mobile-hamburger"
              aria-label={effectiveMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={effectiveMenuOpen}
              aria-controls={mobileNavPanelId}
              onClick={() => (effectiveMenuOpen ? handleMenuClose() : setMenuOpen(true))}
              style={{
                minWidth: 44,
                minHeight: 44,
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
          </div>
        </div>
      </header>

      {effectiveMenuOpen && (
        <nav
          id={mobileNavPanelId}
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
          {navLinks.map((link: NavLinkItemWithDropdown, i: number) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  type="button"
                  ref={i === 0 ? (firstLinkRef as React.Ref<HTMLButtonElement>) : undefined}
                  aria-expanded={mobileAccordion === link.label}
                  onClick={() => toggleMobileAccordion(link.label)}
                  style={{
                    width: '100%',
                    minHeight: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    borderBottom: '1px solid var(--border)',
                    background: 'none',
                    border: 'none',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'var(--border)',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textAlign: 'left',
                  }}
                >
                  {link.label}
                  <IconChevronDown
                    width={14}
                    height={14}
                    style={{
                      transition: 'transform .2s',
                      transform:
                        mobileAccordion === link.label ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {mobileAccordion === link.label && (
                  <div
                    style={{
                      background: 'rgba(0,0,0,.02)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link.dropdown.map((col) => (
                      <div key={col.heading} style={{ padding: '12px 24px 8px' }}>
                        <div
                          style={{
                            fontSize: '.7rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '.08em',
                            color: 'var(--body)',
                            opacity: 0.5,
                            marginBottom: 8,
                          }}
                        >
                          {col.heading}
                        </div>
                        {col.links.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={handleLinkClick}
                            style={{
                              display: 'block',
                              padding: '6px 0',
                              fontSize: '.9rem',
                              color: 'var(--body)',
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                        {col.viewAll && (
                          <Link
                            to={col.viewAll.href}
                            onClick={handleLinkClick}
                            style={{
                              display: 'block',
                              padding: '6px 0 2px',
                              fontSize: '.85rem',
                              fontWeight: 600,
                              color: 'var(--blue)',
                              marginTop: 2,
                            }}
                          >
                            {col.viewAll.label} →
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                ref={
                  i === 0
                    ? (firstLinkRef as React.Ref<HTMLAnchorElement>)
                    : i === mobileLastLinkIndex
                      ? lastLinkRef
                      : undefined
                }
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
            ),
          )}
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
          .mega-dropdown {
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
        @keyframes mega-fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .phone-text { display: none; }
        }
        .nav-trigger-btn:hover,
        .nav-trigger-btn:focus-visible {
          color: var(--blue) !important;
        }
        .mega-link:hover,
        .mega-link:focus-visible {
          background: rgba(0,0,0,.04);
          color: var(--blue) !important;
        }
        .mega-view-all:hover,
        .mega-view-all:focus-visible {
          opacity: .8;
        }
      `}</style>
    </>
  )
}
