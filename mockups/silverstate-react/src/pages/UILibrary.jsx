import { useState, useEffect, useRef } from 'react'
import UISection from '../components/UISection'
import CodeBlock from '../components/CodeBlock'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax, { ClipReveal } from '../components/Parallax'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'
import {
  IconPhone, IconCheck, IconArrowLeft, IconArrowRight,
  IconShield, IconHome, IconSun, IconGrad, IconUsers, IconUser,
  IconHeart, IconStar, IconMapPin, IconMail, IconBook, IconAward,
} from '../components/Icons'


/* ── Constants ── */
const SERIF = "'DM Serif Display', serif"
const SAGE = '#5A7A6E'

const SECTIONS = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'layout', label: 'Layout' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'icons', label: 'Icons' },
  { id: 'animate-in', label: 'AnimateIn' },
  { id: 'text-reveal', label: 'TextReveal' },
  { id: 'parallax', label: 'Parallax & ClipReveal' },
  { id: 'marquee', label: 'Marquee' },
  { id: 'magnetic-button', label: 'MagneticButton' },
  { id: 'count-up', label: 'CountUp' },
  { id: 'section-headings', label: 'Section Headings' },
  { id: 'patterns', label: 'Patterns' },
]

const COLOR_GROUPS = [
  {
    category: 'Brand',
    tokens: [
      { name: '--blue', value: '#134B8E', label: 'Primary Blue' },
      { name: '--blue-hover', value: '#1a5daf', label: 'Blue Hover' },
      { name: '--blue-soft', value: '#edf2f8', label: 'Blue Soft' },
      { name: '--sage', value: '#5A7A6E', label: 'Sage' },
      { name: '--sage-soft', value: '#eef4f1', label: 'Sage Soft' },
    ],
  },
  {
    category: 'Backgrounds',
    tokens: [
      { name: '--cream', value: '#FDFBF7', label: 'Cream' },
      { name: '--warm', value: '#F5F2EB', label: 'Warm' },
      { name: '--warm-deep', value: '#E5DED3', label: 'Warm Deep' },
      { name: '--white', value: '#fff', label: 'White' },
      { name: '--dark', value: '#0f172a', label: 'Dark' },
    ],
  },
  {
    category: 'Text',
    tokens: [
      { name: '--text', value: '#111', label: 'Heading' },
      { name: '--body', value: '#4a4a4a', label: 'Body' },
      { name: '--muted', value: '#999', label: 'Muted' },
    ],
  },
  {
    category: 'Utility',
    tokens: [
      { name: '--border', value: 'rgba(0,0,0,.07)', label: 'Border' },
    ],
  },
]

const ICONS = [
  { name: 'IconPhone', Component: IconPhone },
  { name: 'IconCheck', Component: IconCheck },
  { name: 'IconArrowLeft', Component: IconArrowLeft },
  { name: 'IconArrowRight', Component: IconArrowRight },
  { name: 'IconShield', Component: IconShield },
  { name: 'IconHome', Component: IconHome },
  { name: 'IconSun', Component: IconSun },
  { name: 'IconGrad', Component: IconGrad },
  { name: 'IconUsers', Component: IconUsers },
  { name: 'IconUser', Component: IconUser },
  { name: 'IconHeart', Component: IconHeart },
  { name: 'IconStar', Component: IconStar },
  { name: 'IconMapPin', Component: IconMapPin },
  { name: 'IconMail', Component: IconMail },
  { name: 'IconBook', Component: IconBook },
  { name: 'IconAward', Component: IconAward },
]

const ANIMATE_PRESETS = [
  'fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight',
  'scaleUp', 'slideUp', 'rotateIn', 'blurUp',
]


/* ── FAQ Accordion Item (pattern demo) ── */
function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,.08)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '24px 0', background: 'none',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          fontFamily: 'inherit', fontSize: '1.05rem', fontWeight: 500,
          color: 'var(--text)', lineHeight: 1.4, gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
            background: isOpen ? SAGE : 'rgba(0,0,0,.05)',
            color: isOpen ? '#fff' : 'var(--body)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 300, lineHeight: 1,
            transition: 'all .2s ease',
          }}
          aria-hidden="true"
        >
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 300 : 0,
          overflow: 'hidden',
          transition: 'max-height .3s ease, opacity .3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p style={{
          paddingBottom: 24, color: 'var(--body)', fontSize: '.95rem',
          lineHeight: 1.7, maxWidth: 640,
        }}>
          {a}
        </p>
      </div>
    </div>
  )
}


/* ── Metadata Tag ── */
function Meta({ text }) {
  return (
    <span style={{
      display: 'inline-block', marginTop: 8,
      padding: '4px 10px', borderRadius: 6,
      background: 'var(--warm)', fontSize: '.72rem',
      fontFamily: "'SF Mono', 'Fira Code', Menlo, Consolas, monospace",
      color: 'var(--muted)', lineHeight: 1.4,
    }}>
      {text}
    </span>
  )
}


/* ══════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════ */
export default function UILibrary() {
  const [activeSection, setActiveSection] = useState('colors')
  const [openFaq, setOpenFaq] = useState(null)
  const mainRef = useRef(null)

  /* ── IntersectionObserver for sidebar active state ── */
  useEffect(() => {
    const observers = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cream)' }}>
      {/* ── Sidebar ── */}
      <aside className="ui-sidebar" style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, width: 240,
        background: '#fff', borderRight: '1px solid var(--border)',
        padding: '24px 0', overflowY: 'auto', zIndex: 50,
      }}>
        <div style={{ padding: '0 20px', marginBottom: 24 }}>
          <span style={{
            fontFamily: SERIF, fontSize: '1.15rem', fontWeight: 400,
            color: 'var(--text)',
          }}>
            UI Library
          </span>
          <span style={{
            display: 'block', fontSize: '.72rem', color: 'var(--muted)',
            marginTop: 2,
          }}>
            Silver State Design System
          </span>
          <a href="/ui/components" style={{
            display: 'inline-block', marginTop: 8,
            fontSize: '.72rem', color: 'var(--blue)', textDecoration: 'none',
          }}>
            Components Playground &rarr;
          </a>
        </div>
        <nav>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="ui-sidebar-link"
              style={{
                display: 'block', padding: '8px 20px',
                fontSize: '.82rem', fontWeight: activeSection === id ? 600 : 400,
                color: activeSection === id ? 'var(--blue)' : 'var(--body)',
                background: activeSection === id ? 'var(--blue-soft)' : 'transparent',
                borderRight: activeSection === id ? '2px solid var(--blue)' : '2px solid transparent',
                transition: 'all .15s ease',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <nav className="ui-topbar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50, background: '#fff', borderBottom: '1px solid var(--border)',
        padding: '12px 20px', overflowX: 'auto', whiteSpace: 'nowrap',
      }}>
        <span style={{
          fontFamily: SERIF, fontSize: '1rem', fontWeight: 400,
          color: 'var(--text)', marginRight: 20,
        }}>
          UI Library
        </span>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              display: 'inline-block', padding: '4px 12px',
              fontSize: '.78rem', fontWeight: activeSection === id ? 600 : 400,
              color: activeSection === id ? 'var(--blue)' : 'var(--body)',
              background: activeSection === id ? 'var(--blue-soft)' : 'transparent',
              borderRadius: 999, marginRight: 4,
              textDecoration: 'none', transition: 'all .15s ease',
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── Main Content ── */}
      <main ref={mainRef} className="ui-main" style={{
        marginLeft: 240, flex: 1, padding: '48px 56px',
        maxWidth: 960, minHeight: '100vh',
      }}>

        {/* ─── 1. COLORS ─── */}
        <UISection id="colors" title="Colors" description="Design tokens defined in :root. Use CSS custom properties for all color values.">
          {COLOR_GROUPS.map((group) => (
            <div key={group.category} style={{ marginBottom: 32 }}>
              <h3 style={{
                fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
              }}>
                {group.category}
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: 12,
              }}>
                {group.tokens.map((token) => (
                  <div key={token.name} style={{
                    background: '#fff', borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: 64,
                      background: token.value,
                      borderBottom: '1px solid var(--border)',
                    }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{
                        fontSize: '.78rem', fontWeight: 600, color: 'var(--text)',
                        fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace",
                      }}>
                        {token.name}
                      </div>
                      <div style={{
                        fontSize: '.72rem', color: 'var(--muted)', marginTop: 2,
                      }}>
                        {token.value}
                      </div>
                      <div style={{
                        fontSize: '.7rem', color: 'var(--body)', marginTop: 2,
                      }}>
                        {token.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Shadows */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Shadows
          </h3>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { name: '--shadow-sm', value: '0 1px 2px rgba(0,0,0,.04)' },
              { name: '--shadow', value: '0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.03)' },
              { name: '--shadow-hover', value: '0 2px 8px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04)' },
            ].map((s) => (
              <div key={s.name} style={{
                width: 160, height: 100, background: '#fff',
                borderRadius: 'var(--radius)', boxShadow: s.value,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 4,
              }}>
                <span style={{
                  fontSize: '.75rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--text)',
                }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>

          {/* Border Radius */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Border Radius
          </h3>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
            {[
              { name: '--radius', value: '12px' },
              { name: '--radius-lg', value: '16px' },
            ].map((r) => (
              <div key={r.name} style={{
                width: 120, height: 80, background: 'var(--warm)',
                borderRadius: r.value, border: '2px dashed var(--sage)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 2,
              }}>
                <span style={{
                  fontSize: '.75rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--text)',
                }}>
                  {r.name}
                </span>
                <span style={{ fontSize: '.7rem', color: 'var(--muted)' }}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </UISection>


        {/* ─── 2. TYPOGRAPHY ─── */}
        <UISection id="typography" title="Typography" description="Two font families: Inter (sans-serif) for UI and body, DM Serif Display for editorial headings.">
          {/* Font families */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
          }}>
            Font Families
          </h3>

          {/* Inter specimens */}
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24, marginBottom: 16,
          }}>
            <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Inter
            </div>
            {[300, 400, 500, 600, 700].map((w) => (
              <div key={w} style={{ marginBottom: 8, display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: w,
                  fontSize: '1.25rem', color: 'var(--text)', minWidth: 280,
                }}>
                  The quick brown fox jumps
                </span>
                <Meta text={`Inter ${w}`} />
              </div>
            ))}
          </div>

          {/* DM Serif specimens */}
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24, marginBottom: 32,
          }}>
            <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              DM Serif Display
            </div>
            <div style={{ marginBottom: 8, display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: SERIF, fontWeight: 400,
                fontSize: '1.5rem', color: 'var(--text)',
              }}>
                The quick brown fox jumps
              </span>
              <Meta text="DM Serif Display 400" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
              <span style={{
                fontFamily: SERIF, fontWeight: 400, fontStyle: 'italic',
                fontSize: '1.5rem', color: 'var(--text)',
              }}>
                The quick brown fox jumps
              </span>
              <Meta text="DM Serif Display 400 italic" />
            </div>
          </div>

          {/* Type scale */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
          }}>
            Type Scale
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Hero h1 */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <h1 style={{
                fontFamily: SERIF, fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400, lineHeight: 1.15, color: 'var(--text)', margin: 0,
              }}>
                Hero Headline
              </h1>
              <Meta text="DM Serif Display 400 / clamp(2.5rem, 5vw, 4rem) / 1.15" />
            </div>

            {/* Section h2 serif */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <h2 style={{
                fontFamily: SERIF, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: 0,
              }}>
                Section Heading (Serif)
              </h2>
              <Meta text="DM Serif Display 400 / clamp(1.75rem, 3vw, 2.5rem) / 1.25" />
            </div>

            {/* Section h2 sans (.section-heading) */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <h2 className="section-heading" style={{ margin: 0 }}>
                Section Heading (Sans)
              </h2>
              <Meta text=".section-heading — Inter 300 / clamp(1.75rem, 2.5vw, 2.25rem) / 1.25 / -0.03em" />
            </div>

            {/* .section-label */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <span className="section-label">Section Label</span>
              <Meta text=".section-label — Inter 600 / 0.7rem / uppercase / 0.1em tracking" />
            </div>

            {/* Body text */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '.95rem',
                fontWeight: 400, lineHeight: 1.7, color: 'var(--body)', margin: 0,
              }}>
                Body text paragraph. We believe adolescent treatment should feel like a turning point — not a dead end. Our clinical team works alongside your family to build a treatment plan.
              </p>
              <Meta text="Inter 400 / 0.95rem / 1.7 / var(--body)" />
            </div>

            {/* Small/caption */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '.85rem',
                fontWeight: 500, lineHeight: 1.5, color: 'var(--muted)', margin: 0,
              }}>
                Small / caption text used for secondary information
              </p>
              <Meta text="Inter 400-500 / 0.85rem / 1.5 / var(--muted)" />
            </div>

            {/* Stat number */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                4.8/5
              </span>
              <Meta text="DM Serif Display 400 / clamp(2rem, 3vw, 2.75rem) — stat numbers" />
            </div>
          </div>
        </UISection>


        {/* ─── 3. LAYOUT ─── */}
        <UISection id="layout" title="Layout" description="Container classes for constraining content width.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div style={{
                border: '2px dashed var(--sage)', borderRadius: 'var(--radius)',
                padding: '20px 32px', maxWidth: 1200, position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: -10, left: 16, background: 'var(--cream)',
                  padding: '0 8px', fontSize: '.72rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--sage)',
                }}>
                  .wrap — max-width: 1200px
                </span>
                <div style={{
                  background: 'var(--warm)', borderRadius: 8, padding: 16,
                  textAlign: 'center', fontSize: '.82rem', color: 'var(--body)',
                }}>
                  Content area — padding: 0 32px
                </div>
              </div>
            </div>
            <div>
              <div style={{
                border: '2px dashed var(--blue)', borderRadius: 'var(--radius)',
                padding: '20px 32px', maxWidth: 800, position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: -10, left: 16, background: 'var(--cream)',
                  padding: '0 8px', fontSize: '.72rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--blue)',
                }}>
                  .wrap-narrow — max-width: 800px
                </span>
                <div style={{
                  background: 'var(--blue-soft)', borderRadius: 8, padding: 16,
                  textAlign: 'center', fontSize: '.82rem', color: 'var(--body)',
                }}>
                  Narrow content area — padding: 0 32px
                </div>
              </div>
            </div>
            <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
              Responsive: padding reduces to 20px below 900px viewport width.
            </p>
          </div>
        </UISection>


        {/* ─── 4. BUTTONS ─── */}
        <UISection id="buttons" title="Buttons" description="Button variants using .btn base class. All are pill-shaped (border-radius: 999px).">
          {/* Light background */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            Light Background
          </h3>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-dark">Dark</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-white">White</button>
          </div>
          <CodeBlock label="Usage">{`.btn.btn-primary  — Blue filled
.btn.btn-dark     — Dark filled
.btn.btn-outline  — Transparent + border
.btn.btn-white    — White filled`}</CodeBlock>

          {/* Dark background */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Dark Background
          </h3>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: 'var(--dark)', borderRadius: 'var(--radius)',
            marginBottom: 16,
          }}>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-white">White</button>
          </div>

          {/* With Icon */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            With Icon
          </h3>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <button className="btn btn-primary"><IconPhone /> Call Now</button>
            <button className="btn btn-outline"><IconArrowRight /> Learn More</button>
          </div>
          <CodeBlock>{`<button className="btn btn-primary">
  <IconPhone /> Call Now
</button>`}</CodeBlock>

          {/* Magnetic */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Magnetic Variant
          </h3>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <MagneticButton strength={0.25}>
              <button className="btn btn-primary"><IconPhone /> Call Now</button>
            </MagneticButton>
          </div>
          <CodeBlock>{`<MagneticButton strength={0.25}>
  <button className="btn btn-primary">
    <IconPhone /> Call Now
  </button>
</MagneticButton>`}</CodeBlock>
        </UISection>


        {/* ─── 5. ICONS ─── */}
        <UISection id="icons" title="Icons" description="16 SVG icons from Icons.jsx. All use currentColor and accept style/size overrides.">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: 12,
          }}>
            {ICONS.map(({ name, Component }) => (
              <div key={name} style={{
                background: '#fff', borderRadius: 'var(--radius)',
                border: '1px solid var(--border)', padding: '16px 8px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 8,
              }}>
                <Component width={24} height={24} />
                <span style={{
                  fontSize: '.65rem', color: 'var(--muted)',
                  fontFamily: "'SF Mono', Menlo, monospace", textAlign: 'center',
                  wordBreak: 'break-all',
                }}>
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Color overrides */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Color Overrides
          </h3>
          <div style={{
            display: 'flex', gap: 24, alignItems: 'center',
            padding: 20, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <IconHeart width={24} height={24} />
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: 4 }}>default</div>
            </div>
            <div style={{ textAlign: 'center', color: 'var(--sage)' }}>
              <IconHeart width={24} height={24} />
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: 4 }}>var(--sage)</div>
            </div>
            <div style={{ textAlign: 'center', color: 'var(--blue)' }}>
              <IconHeart width={24} height={24} />
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: 4 }}>var(--blue)</div>
            </div>
          </div>
        </UISection>


        {/* ─── 6. ANIMATE IN ─── */}
        <UISection id="animate-in" title="AnimateIn" description="Scroll-triggered animations with 8 presets. Powered by GSAP ScrollTrigger.">
          <div className="ui-animate-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
          }}>
            {ANIMATE_PRESETS.map((preset) => (
              <AnimateIn key={preset} variant={preset} once={false}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)', padding: 24,
                  textAlign: 'center', minHeight: 100,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 8,
                }}>
                  <span style={{
                    fontFamily: SERIF, fontSize: '1rem', color: 'var(--text)',
                  }}>
                    {preset}
                  </span>
                  <Meta text={`variant="${preset}"`} />
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* StaggerGroup demo */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            StaggerGroup + StaggerItem
          </h3>
          <StaggerGroup
            variant="fadeUp"
            stagger={0.1}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <StaggerItem key={n}>
                <div style={{
                  width: 100, height: 100, background: 'var(--sage-soft)',
                  borderRadius: 'var(--radius)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: 600, color: 'var(--sage)', fontSize: '1.25rem',
                  border: '1px solid rgba(90,122,110,.15)',
                }}>
                  {n}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <CodeBlock>{`<StaggerGroup variant="fadeUp" stagger={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerGroup>`}</CodeBlock>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Default', 'Description'].map((h) => (
                    <th key={h} style={{
                      textAlign: 'left', padding: '10px 16px', fontWeight: 600,
                      color: 'var(--text)', fontSize: '.72rem', letterSpacing: '.04em',
                      textTransform: 'uppercase', background: 'var(--warm)',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['variant', '"fadeUp"', 'Animation preset name'],
                  ['delay', '0', 'Delay in seconds'],
                  ['duration', '0.8', 'Animation duration'],
                  ['once', 'true', 'Only animate once'],
                  ['triggerStart', '"top 85%"', 'ScrollTrigger start position'],
                  ['as', '"div"', 'HTML element type'],
                ].map(([prop, def, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{def}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </UISection>


        {/* ─── 7. TEXT REVEAL ─── */}
        <UISection id="text-reveal" title="TextReveal" description="Word-by-word and character-by-character scroll-triggered text animations.">
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            TextReveal (word-by-word)
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 32, marginBottom: 16,
          }}>
            <TextReveal
              as="p"
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 400, lineHeight: 1.55, color: 'var(--text)', margin: 0,
              }}
            >
              We believe adolescent treatment should feel like a turning point — not a dead end.
            </TextReveal>
          </div>

          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            CharReveal (character-by-character)
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 32, marginBottom: 16,
          }}>
            <CharReveal
              as="h2"
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: 0,
              }}
            >
              One call can change everything
            </CharReveal>
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            TextReveal Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Default', 'Description'].map((h) => (
                    <th key={h} style={{
                      textAlign: 'left', padding: '10px 16px', fontWeight: 600,
                      color: 'var(--text)', fontSize: '.72rem', letterSpacing: '.04em',
                      textTransform: 'uppercase', background: 'var(--warm)',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['children', '—', 'String text to animate'],
                  ['as', '"p"', 'Wrapper element'],
                  ['stagger', '0.04', 'Delay between words'],
                  ['scrub', 'false', 'Tie to scroll position'],
                  ['once', 'true', 'Only animate once'],
                  ['duration', '0.5', 'Duration per word'],
                ].map(([prop, def, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{def}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </UISection>


        {/* ─── 8. PARALLAX & CLIPREVEAL ─── */}
        <UISection id="parallax" title="Parallax & ClipReveal" description="Scroll-driven movement and clip-path reveal effects.">
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            Parallax
          </h3>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 24 }}>
            {[
              { speed: 0.2, label: 'speed={0.2}' },
              { speed: 0.5, label: 'speed={0.5}' },
            ].map(({ speed, label }) => (
              <Parallax
                key={speed}
                speed={speed}
                style={{
                  height: 200, width: 240, borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  width: '100%', height: '150%',
                  background: `linear-gradient(135deg, var(--sage) 0%, var(--blue) 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    color: '#fff', fontSize: '.85rem', fontWeight: 600,
                    fontFamily: "'SF Mono', Menlo, monospace",
                  }}>
                    {label}
                  </span>
                </div>
              </Parallax>
            ))}
          </div>

          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            ClipReveal
          </h3>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['up', 'left', 'right'].map((dir) => (
              <ClipReveal key={dir} direction={dir}>
                <div style={{
                  width: 200, height: 140, borderRadius: 'var(--radius)',
                  background: dir === 'up' ? 'var(--sage)' : dir === 'left' ? 'var(--blue)' : 'var(--dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    color: '#fff', fontSize: '.85rem', fontWeight: 600,
                    fontFamily: "'SF Mono', Menlo, monospace",
                  }}>
                    direction="{dir}"
                  </span>
                </div>
              </ClipReveal>
            ))}
          </div>
        </UISection>


        {/* ─── 9. MARQUEE ─── */}
        <UISection id="marquee" title="Marquee" description="Infinite horizontal scroll with pause-on-hover. GSAP-powered.">
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: '24px 0',
            overflow: 'hidden', marginBottom: 16,
          }}>
            <div style={{
              fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
              paddingLeft: 20,
            }}>
              Left direction — hover to pause
            </div>
            <Marquee speed={50} direction="left" gap={12} pauseOnHover>
              {['Cognitive Behavioral Therapy', 'DBT', 'EMDR', 'Art Therapy', 'Equine Therapy', 'Family Systems'].map((t) => (
                <span key={t} style={{
                  display: 'inline-block', padding: '10px 20px',
                  background: 'var(--cream)', borderRadius: 999,
                  fontSize: '.88rem', fontWeight: 500, color: 'var(--text)',
                  border: '1px solid var(--border)', whiteSpace: 'nowrap',
                }}>
                  {t}
                </span>
              ))}
            </Marquee>
          </div>

          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: '24px 0',
            overflow: 'hidden',
          }}>
            <div style={{
              fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
              paddingLeft: 20,
            }}>
              Right direction — speed={'{80}'}
            </div>
            <Marquee speed={80} direction="right" gap={14} pauseOnHover>
              {['Resilience', 'Growth', 'Healing', 'Family', 'Recovery', 'Hope', 'Strength'].map((t) => (
                <span key={t} style={{
                  display: 'inline-block', padding: '10px 22px',
                  background: SAGE, borderRadius: 999,
                  fontSize: '.85rem', fontWeight: 500, color: '#fff',
                  whiteSpace: 'nowrap',
                }}>
                  {t}
                </span>
              ))}
            </Marquee>
          </div>

          <CodeBlock>{`<Marquee speed={50} direction="left" gap={12} pauseOnHover>
  <span>Item 1</span>
  <span>Item 2</span>
</Marquee>`}</CodeBlock>
        </UISection>


        {/* ─── 10. MAGNETIC BUTTON ─── */}
        <UISection id="magnetic-button" title="MagneticButton" description="Cursor-following hover effect. Wraps any element.">
          <div style={{
            display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center',
            padding: 32, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}>
            {[
              { strength: 0.2, label: 'Subtle (0.2)' },
              { strength: 0.3, label: 'Default (0.3)' },
              { strength: 0.5, label: 'Strong (0.5)' },
            ].map(({ strength, label }) => (
              <MagneticButton key={strength} strength={strength}>
                <button className="btn btn-primary">{label}</button>
              </MagneticButton>
            ))}
          </div>
          <CodeBlock>{`<MagneticButton strength={0.3}>
  <button className="btn btn-primary">
    Click Me
  </button>
</MagneticButton>`}</CodeBlock>
        </UISection>


        {/* ─── 11. COUNT UP ─── */}
        <UISection id="count-up" title="CountUp" description="Scroll-triggered number counter animation. Supports integers, floats, prefix, and suffix.">
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            padding: 32, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={150} />
              </span>
              <Meta text='end={150}' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={4.8} suffix="/5" />
              </span>
              <Meta text='end={4.8} suffix="/5"' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={98} suffix="%" />
              </span>
              <Meta text='end={98} suffix="%"' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={500} prefix="$" suffix="k" />
              </span>
              <Meta text='prefix="$" end={500} suffix="k"' />
            </div>
          </div>
        </UISection>


        {/* ─── 12. SECTION HEADINGS ─── */}
        <UISection id="section-headings" title="Section Headings" description="Composable heading pattern: .section-label + .section-heading + .section-desc.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Left-aligned */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 32,
            }}>
              <div style={{
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
              }}>
                Left-aligned (default)
              </div>
              <span className="section-label">Our Approach</span>
              <h2 className="section-heading">Evidence-based treatment for lasting change</h2>
              <p className="section-desc">
                Our clinical team combines proven therapeutic modalities with individualized care plans.
              </p>
            </div>

            {/* Centered */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 32, textAlign: 'center',
            }}>
              <div style={{
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
              }}>
                Centered
              </div>
              <span className="section-label">Our Team</span>
              <h2 className="section-heading">A multidisciplinary team, working as one</h2>
              <p className="section-desc" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Led by experienced clinicians, our team brings together specialists across every dimension of adolescent care.
              </p>
            </div>
          </div>
          <CodeBlock>{`<span className="section-label">Label</span>
<h2 className="section-heading">Heading</h2>
<p className="section-desc">Description text.</p>`}</CodeBlock>
        </UISection>


        {/* ─── 13. PATTERNS ─── */}
        <UISection id="patterns" title="Patterns" description="Composite UI patterns extracted from WarmImmersive for reuse across pages.">
          {/* FAQ Accordion */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            FAQ Accordion
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius-lg)',
            padding: '8px 32px', border: '1px solid var(--border)',
            marginBottom: 32,
          }}>
            {[
              { q: 'What ages do you serve?', a: 'We serve adolescents ages 11-17 with a range of mental health, substance abuse, and co-occurring conditions.' },
              { q: 'Do you accept insurance?', a: 'Yes, we work with most major insurance providers. Call our admissions team for a free benefits verification.' },
              { q: 'What does a typical day look like?', a: 'Each day includes individual therapy, group sessions, academic support, recreational activities, and family programming.' },
            ].map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          {/* Stat Block */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            Stat Block
          </h3>
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            padding: 32, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 32,
          }}>
            {[
              { num: '24/7', label: 'Clinical Support' },
              { num: '11–17', label: 'Ages Served' },
              { num: '4:1', label: 'Staff-to-Client Ratio' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <span style={{
                  fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                  fontWeight: 400, color: 'var(--text)', display: 'block',
                }}>
                  {num}
                </span>
                <span style={{
                  fontSize: '.8rem', color: 'var(--muted)',
                  textTransform: 'uppercase', letterSpacing: '.06em',
                  fontWeight: 500, marginTop: 4, display: 'block',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Pill / Tag */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            Pill / Tag
          </h3>
          <div style={{
            display: 'flex', gap: 10, flexWrap: 'wrap',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            {/* White variant */}
            {['Anxiety', 'Depression', 'PTSD'].map((t) => (
              <span key={t} style={{
                display: 'inline-block', padding: '10px 20px',
                background: 'var(--cream)', borderRadius: 999,
                fontSize: '.92rem', fontWeight: 500, color: 'var(--text)',
                border: '1px solid var(--border)', whiteSpace: 'nowrap',
              }}>
                {t}
              </span>
            ))}
            {/* Sage variant */}
            {['CBT', 'DBT', 'EMDR'].map((t) => (
              <span key={t} style={{
                display: 'inline-block', padding: '10px 22px',
                background: SAGE, borderRadius: 999,
                fontSize: '.85rem', fontWeight: 500, color: '#fff',
                whiteSpace: 'nowrap',
              }}>
                {t}
              </span>
            ))}
          </div>
          <CodeBlock>{`{/* White pill */}
<span style={{
  padding: '10px 20px', background: 'var(--cream)',
  borderRadius: 999, border: '1px solid var(--border)',
}}>Label</span>

{/* Sage pill */}
<span style={{
  padding: '10px 22px', background: 'var(--sage)',
  borderRadius: 999, color: '#fff',
}}>Label</span>`}</CodeBlock>

          {/* Feature List with Check */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Feature List with Check
          </h3>
          <div style={{
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            {[
              'Individual therapy 3-5 times per week',
              'Family therapy integrated into every plan',
              'Academic support and credit recovery',
              'Discharge and transition planning',
            ].map((f) => (
              <div key={f} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                fontSize: '.9rem', color: 'var(--body)', lineHeight: 1.5,
              }}>
                <IconCheck style={{
                  flexShrink: 0, color: SAGE, marginTop: 2,
                  width: 16, height: 16,
                }} />
                {f}
              </div>
            ))}
          </div>
          <CodeBlock>{`<div style={{ display: 'flex', gap: 10 }}>
  <IconCheck style={{ color: 'var(--sage)' }} />
  Feature text
</div>`}</CodeBlock>
        </UISection>

      </main>


      {/* ── Scoped Styles ── */}
      <style>{`
        .ui-sidebar-link:hover {
          background: var(--warm) !important;
        }

        @media (max-width: 900px) {
          .ui-sidebar {
            display: none !important;
          }
          .ui-topbar {
            display: block !important;
          }
          .ui-main {
            margin-left: 0 !important;
            padding: 72px 20px 48px !important;
            max-width: 100% !important;
          }
          .ui-animate-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 500px) {
          .ui-animate-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
