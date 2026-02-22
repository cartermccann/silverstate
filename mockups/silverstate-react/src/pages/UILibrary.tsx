import { useState, useEffect, useRef } from 'react'
import type { AnimationVariant } from '../types'
import UISection from '../components/UISection'
import CodeBlock from '../components/CodeBlock'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax, { ClipReveal } from '../components/Parallax'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'
import FaqItem from '../components/FaqItem'
import TimelineRow from '../components/Timeline'
import StepCard from '../components/StepCard'
import ProfileChip from '../components/ProfileChip'
import StatBlock from '../components/StatBlock'
import CardStack from '../components/CardStack'
import useDragScroll from '../hooks/useDragScroll'
import {
  IconPhone, IconCheck, IconArrowLeft, IconArrowRight,
  IconShield, IconHome, IconSun, IconGrad, IconUsers, IconUser,
  IconHeart, IconStar, IconMapPin, IconMail, IconBook, IconAward,
} from '../components/Icons'


/* -- Constants -- */
const DISPLAY = "var(--font-display)"
const SAGE = '#5A7A6E'

interface Section {
  id: string
  label: string
}

interface ColorToken {
  name: string
  value: string
  label: string
}

interface ColorGroup {
  category: string
  tokens: ColorToken[]
}

interface IconEntry {
  name: string
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const SECTIONS: Section[] = [
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
  { id: 'faq-item', label: 'FaqItem' },
  { id: 'lightbox', label: 'Lightbox' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'step-card', label: 'StepCard' },
  { id: 'profile-chip', label: 'ProfileChip' },
  { id: 'stat-block', label: 'StatBlock' },
  { id: 'card-stack', label: 'CardStack' },
  { id: 'drag-scroll', label: 'useDragScroll' },
  { id: 'glassmorphism', label: 'Glassmorphism' },
  { id: 'logo-grid', label: 'Logo Grid' },
  { id: 'scrollytelling', label: 'Scrollytelling' },
  { id: 'patterns', label: 'Patterns' },
]

const COLOR_GROUPS: ColorGroup[] = [
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

const ICONS: IconEntry[] = [
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

const ANIMATE_PRESETS: AnimationVariant[] = [
  'fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight',
  'scaleUp', 'slideUp', 'rotateIn', 'blurUp',
]



/* -- Metadata Tag -- */
function Meta({ text }: { text: string }) {
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


/* ======================================================
   MAIN COMPONENT
   ====================================================== */
export default function UILibrary() {
  const [activeSection, setActiveSection] = useState<string>('colors')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const mainRef = useRef<HTMLElement>(null)
  const { ref: dragDemoRef, isDragging: dragDemoIsDragging, handlers: dragDemoHandlers } = useDragScroll(1.5)

  /* -- IntersectionObserver for sidebar active state -- */
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveSection(id)
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
      {/* -- Sidebar -- */}
      <aside className="ui-sidebar" style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, width: 240,
        background: '#fff', borderRight: '1px solid var(--border)',
        padding: '24px 0', overflowY: 'auto', zIndex: 50,
      }}>
        <div style={{ padding: '0 20px', marginBottom: 24 }}>
          <span style={{
            fontFamily: DISPLAY, fontSize: '1.15rem', fontWeight: 600,
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

      {/* -- Mobile Top Bar -- */}
      <nav className="ui-topbar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50, background: '#fff', borderBottom: '1px solid var(--border)',
        padding: '12px 20px', overflowX: 'auto', whiteSpace: 'nowrap',
      }}>
        <span style={{
          fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600,
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

      {/* -- Main Content -- */}
      <main ref={mainRef} className="ui-main" style={{
        marginLeft: 240, flex: 1, padding: '48px 56px',
        maxWidth: 960, minHeight: '100vh',
      }}>

        {/* --- 1. COLORS --- */}
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


        {/* --- 2. TYPOGRAPHY --- */}
        <UISection id="typography" title="Typography" description="Two font families: Space Grotesk (display) for headings and accents, Inter (sans-serif) for body and UI.">
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

          {/* Space Grotesk specimens */}
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24, marginBottom: 32,
          }}>
            <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Space Grotesk
            </div>
            {[300, 400, 500, 600, 700].map((w) => (
              <div key={w} style={{ marginBottom: 8, display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span style={{
                  fontFamily: DISPLAY, fontWeight: w,
                  fontSize: '1.25rem', color: 'var(--text)', minWidth: 280,
                }}>
                  The quick brown fox jumps
                </span>
                <Meta text={`Space Grotesk ${w}`} />
              </div>
            ))}
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
                fontFamily: DISPLAY, fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700, lineHeight: 1.15, color: 'var(--text)', margin: 0,
              }}>
                Hero Headline
              </h1>
              <Meta text="Space Grotesk 700 / clamp(2.5rem, 5vw, 4rem) / 1.15" />
            </div>

            {/* Section h2 serif */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <h2 style={{
                fontFamily: DISPLAY, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700, lineHeight: 1.25, color: 'var(--text)', margin: 0,
              }}>
                Section Heading (Display)
              </h2>
              <Meta text="Space Grotesk 700 / clamp(1.75rem, 3vw, 2.5rem) / 1.25" />
            </div>

            {/* Section h2 sans (.section-heading) */}
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
            }}>
              <h2 className="section-heading" style={{ margin: 0 }}>
                Section Heading (Sans)
              </h2>
              <Meta text=".section-heading — Space Grotesk 600 / clamp(1.75rem, 2.5vw, 2.25rem) / 1.25 / -0.03em" />
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
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                4.8/5
              </span>
              <Meta text="Space Grotesk 700 / clamp(2rem, 3vw, 2.75rem) — stat numbers" />
            </div>
          </div>
        </UISection>


        {/* --- 3. LAYOUT --- */}
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


        {/* --- 4. BUTTONS --- */}
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

          {/* Pulse Variants */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Pulse Variants
          </h3>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <button className="btn btn-primary btn-pulse"><IconPhone /> Call Now</button>
            <button className="btn btn-primary btn-sage-pulse">Start Conversation</button>
          </div>
          <div style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            padding: 24, background: 'var(--dark)', borderRadius: 'var(--radius)',
            marginBottom: 16,
          }}>
            <button className="btn btn-white btn-pulse"><IconPhone /> Call Now</button>
          </div>
          <CodeBlock>{`.btn-pulse       — Blue glow keyframe (2.5s infinite)
.btn-sage-pulse  — Sage glow keyframe (2.5s infinite)

<button className="btn btn-primary btn-pulse">
  <IconPhone /> Call Now
</button>
<button className="btn btn-primary btn-sage-pulse">
  Start Conversation
</button>`}</CodeBlock>
        </UISection>


        {/* --- 5. ICONS --- */}
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


        {/* --- 6. ANIMATE IN --- */}
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
                    fontFamily: DISPLAY, fontSize: '1rem', color: 'var(--text)',
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


        {/* --- 7. TEXT REVEAL --- */}
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
                fontFamily: DISPLAY, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 600, lineHeight: 1.55, color: 'var(--text)', margin: 0,
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
                fontFamily: DISPLAY, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700, lineHeight: 1.25, color: 'var(--text)', margin: 0,
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


        {/* --- 8. PARALLAX & CLIPREVEAL --- */}
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
            {(['up', 'left', 'right'] as const).map((dir) => (
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


        {/* --- 9. MARQUEE --- */}
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


        {/* --- 10. MAGNETIC BUTTON --- */}
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


        {/* --- 11. COUNT UP --- */}
        <UISection id="count-up" title="CountUp" description="Scroll-triggered number counter animation. Supports integers, floats, prefix, and suffix.">
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            padding: 32, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={150} />
              </span>
              <Meta text='end={150}' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={4.8} suffix="/5" />
              </span>
              <Meta text='end={4.8} suffix="/5"' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={98} suffix="%" />
              </span>
              <Meta text='end={98} suffix="%"' />
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                <CountUp end={500} prefix="$" suffix="k" />
              </span>
              <Meta text='prefix="$" end={500} suffix="k"' />
            </div>
          </div>
        </UISection>


        {/* --- 12. SECTION HEADINGS --- */}
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


        {/* --- 13. FAQ ITEM --- */}
        <UISection id="faq-item" title="FaqItem" description="Accessible accordion item with grid-template-rows animation. Supports custom accent color.">
          <div style={{
            background: '#fff', borderRadius: 'var(--radius-lg)',
            padding: '8px 32px', border: '1px solid var(--border)',
            marginBottom: 16,
          }}>
            {[
              { q: 'What ages do you serve?', a: 'We serve adolescents ages 11-17 with a range of mental health, substance abuse, and co-occurring conditions.' },
              { q: 'Do you accept insurance?', a: 'Yes, we work with most major insurance providers. Call our admissions team for a free benefits verification.' },
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

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Default', 'Description'].map((h) => (
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
                  ['q', 'string', '—', 'Question text'],
                  ['a', 'string', '—', 'Answer text'],
                  ['isOpen', 'boolean', '—', 'Controlled open state'],
                  ['onToggle', 'function', '—', 'Toggle callback'],
                  ['accentColor', 'string', "'#5A7A6E'", 'Icon background when open'],
                ].map(([prop, type, def, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{def}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import FaqItem from '../components/FaqItem'

<FaqItem
  q="What ages do you serve?"
  a="We serve adolescents ages 11-17."
  isOpen={openFaq === 0}
  onToggle={() => setOpenFaq(openFaq === 0 ? null : 0)}
  accentColor="#5A7A6E"
/>`}</CodeBlock>
        </UISection>


        {/* --- 14. LIGHTBOX --- */}
        <UISection id="lightbox" title="Lightbox" description="Full-viewport image lightbox with keyboard navigation, ambient blur background, and glassmorphic controls.">
          <p style={{ fontSize: '.88rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: 16 }}>
            The Lightbox component renders as a fixed overlay, so a live demo is not shown inline. It supports keyboard navigation (Escape, ArrowLeft, ArrowRight), ambient blur background derived from the current image, and glassmorphic nav buttons.
          </p>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Description'].map((h) => (
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
                  ['images', 'Array<{src, alt, caption?}>', 'Array of image objects'],
                  ['index', 'number', 'Current image index'],
                  ['onClose', 'function', 'Close callback (Escape key)'],
                  ['onPrev', 'function', 'Previous image callback (ArrowLeft)'],
                  ['onNext', 'function', 'Next image callback (ArrowRight)'],
                ].map(([prop, type, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import Lightbox from '../components/Lightbox'

const images = [
  { src: '/photo1.jpg', alt: 'Photo 1', caption: 'Caption' },
  { src: '/photo2.jpg', alt: 'Photo 2' },
]

{lightboxIndex !== null && (
  <Lightbox
    images={images}
    index={lightboxIndex}
    onClose={() => setLightboxIndex(null)}
    onPrev={() => setLightboxIndex(i => Math.max(0, i - 1))}
    onNext={() => setLightboxIndex(i => Math.min(images.length - 1, i + 1))}
  />
)}`}</CodeBlock>
        </UISection>


        {/* --- 15. TIMELINE --- */}
        <UISection id="timeline" title="Timeline" description="Timeline row component using CSS grid layout with time, dot, and content columns. Uses .timeline-* CSS classes.">
          <div style={{
            background: 'rgba(255,255,255,0.85)', borderRadius: 'var(--radius-lg)',
            padding: '12px 32px', border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            marginBottom: 16,
          }}>
            <TimelineRow time="8:00 AM" activity="Morning Meditation" desc="Guided mindfulness session to set intentions and practice emotional regulation." />
            <TimelineRow time="8:30 AM" activity="Academic Classes" desc="Accredited instruction at Silver State Youth Academy with certified teachers." />
            <TimelineRow time="12:00 PM" activity="Lunch & Free Time" desc="Nutritious meals and unstructured social time for peer connection." />
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Description'].map((h) => (
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
                  ['time', 'string', 'Time label (e.g. "8:00 AM")'],
                  ['activity', 'string', 'Activity heading'],
                  ['desc', 'string', 'Description text'],
                ].map(([prop, type, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import TimelineRow from '../components/Timeline'

<TimelineRow
  time="8:00 AM"
  activity="Morning Meditation"
  desc="Guided mindfulness session."
/>`}</CodeBlock>
        </UISection>


        {/* --- 16. STEP CARD --- */}
        <UISection id="step-card" title="StepCard" description="Numbered process step card with hover lift. Uses .step-card and .step-number CSS classes.">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16, marginBottom: 16,
          }}>
            <StepCard step={1} title="Call our team" desc="Speak with an admissions counselor 24/7." />
            <StepCard step={2} title="Verify insurance" desc="We handle everything for you." />
            <StepCard step={3} title="Begin treatment" desc="Your teen is welcomed from day one." />
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Description'].map((h) => (
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
                  ['step', 'number', 'Step number displayed in circle'],
                  ['title', 'string', 'Step heading'],
                  ['desc', 'string', 'Step description'],
                  ['style', 'object', 'Optional style overrides'],
                ].map(([prop, type, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import StepCard from '../components/StepCard'

<StepCard step={1} title="Call our team" desc="Speak with an admissions counselor 24/7." />`}</CodeBlock>
        </UISection>


        {/* --- 17. PROFILE CHIP --- */}
        <UISection id="profile-chip" title="ProfileChip" description="Dot + label + description chip using .profile-chip CSS class. Supports custom dot color.">
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12,
            marginBottom: 16, maxWidth: 400,
          }}>
            <ProfileChip label="The anxious teen" desc="who can't make it through a school day" />
            <ProfileChip label="The withdrawn teen" desc="who has stopped talking to family and friends" />
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Default', 'Description'].map((h) => (
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
                  ['label', 'string', '—', 'Primary label text'],
                  ['desc', 'string', '—', 'Description text'],
                  ['dotColor', 'string', "'#5A7A6E'", 'Dot accent color'],
                  ['style', 'object', '—', 'Optional style overrides'],
                ].map(([prop, type, def, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{def}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import ProfileChip from '../components/ProfileChip'

<ProfileChip
  label="The anxious teen"
  desc="who can't make it through a school day"
  dotColor="#5A7A6E"
/>`}</CodeBlock>
        </UISection>


        {/* --- 18. STAT BLOCK --- */}
        <UISection id="stat-block" title="StatBlock" description="Number + label metric block. Accepts string or ReactNode (e.g. CountUp) for value.">
          <div style={{
            display: 'flex', gap: 32, flexWrap: 'wrap',
            padding: 32, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <StatBlock value="24/7" label="Clinical Support" />
            <StatBlock value="11–17" label="Ages Served" />
            <StatBlock value={<CountUp end={4.8} suffix="/5" />} label="Average Review" />
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Prop', 'Type', 'Description'].map((h) => (
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
                  ['value', 'string | ReactNode', 'Display value (accepts CountUp, etc.)'],
                  ['label', 'string', 'Label text below value'],
                  ['style', 'object', 'Optional style overrides'],
                ].map(([prop, type, desc]) => (
                  <tr key={prop} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{prop}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import StatBlock from '../components/StatBlock'
import CountUp from '../components/CountUp'

<StatBlock value="24/7" label="Clinical Support" />
<StatBlock value={<CountUp end={4.8} suffix="/5" />} label="Average Review" />`}</CodeBlock>
        </UISection>


        {/* --- 19. CARD STACK --- */}
        <UISection id="card-stack" title="CardStack" description="GSAP-powered sticky stacking cards. Each child gets position: sticky with incrementing top values and scale-down animation on scroll.">
          <div style={{
            background: 'var(--warm)', borderRadius: 'var(--radius-lg)',
            padding: '32px 24px', marginBottom: 16,
            maxHeight: 600, overflowY: 'auto',
          }}>
            <CardStack topStart={0} topStep={16} gap={24}>
              <div className="bento-card" style={{ backgroundColor: '#fff', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Card One</h4>
                <p style={{ fontSize: '.88rem', color: 'var(--body)', lineHeight: 1.6 }}>
                  First card in the stack. As you scroll, this card scales down and the next card slides over it.
                </p>
              </div>
              <div className="bento-card" style={{ backgroundColor: '#faf9f6', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Card Two</h4>
                <p style={{ fontSize: '.88rem', color: 'var(--body)', lineHeight: 1.6 }}>
                  Second card stacks on top. Each card gets an incrementing top and zIndex value.
                </p>
              </div>
              <div className="bento-card" style={{ backgroundColor: SAGE, color: '#fff', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Card Three</h4>
                <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6 }}>
                  Last card in the stack. The final card does not scale down.
                </p>
              </div>
            </CardStack>
          </div>

          {/* Props table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            Props
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
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
                  ['children', '—', 'Card content elements (each wrapped in sticky container)'],
                  ['topStart', '120', 'First card sticky top position (px)'],
                  ['topStep', '20', 'Increment for each subsequent card (px)'],
                  ['scaleTarget', '0.95', 'Scale value cards shrink to on scroll'],
                  ['gap', '40', 'Bottom margin between cards (px)'],
                  ['style', '—', 'Container style overrides'],
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

          <CodeBlock label="Usage">{`import CardStack from '../components/CardStack'

<CardStack topStart={120} topStep={20} scaleTarget={0.95}>
  <div className="bento-card">Card 1 content</div>
  <div className="bento-card">Card 2 content</div>
  <div className="bento-card">Card 3 content</div>
</CardStack>`}</CodeBlock>
        </UISection>


        {/* --- 20. useDragScroll --- */}
        <UISection id="drag-scroll" title="useDragScroll" description="Custom hook for drag-to-scroll carousels. Returns a ref, dragging state, and mouse event handlers.">
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24,
            marginBottom: 16, position: 'relative', overflow: 'hidden',
          }}>
            {/* Fade edges */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 0, width: 48,
              background: 'linear-gradient(to right, #fff, transparent)',
              zIndex: 1, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: 0, bottom: 0, right: 0, width: 48,
              background: 'linear-gradient(to left, #fff, transparent)',
              zIndex: 1, pointerEvents: 'none',
            }} />
            <div
              ref={dragDemoRef}
              {...dragDemoHandlers}
              style={{
                display: 'flex', gap: 10,
                overflowX: 'auto', scrollSnapType: 'x mandatory',
                cursor: dragDemoIsDragging ? 'grabbing' : 'grab',
                paddingBottom: 4,
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                userSelect: 'none',
              }}
            >
              {['Cognitive Behavioral', 'Dialectical Behavior', 'EMDR Therapy', 'Art Therapy', 'Equine Therapy', 'Family Systems'].map((item) => (
                <span key={item} style={{
                  flexShrink: 0, display: 'inline-block', padding: '10px 20px',
                  background: 'var(--cream)', borderRadius: 999,
                  fontSize: '.88rem', fontWeight: 500, color: 'var(--text)',
                  border: '1px solid var(--border)', whiteSpace: 'nowrap',
                  scrollSnapAlign: 'center',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* API table */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 24,
          }}>
            API
          </h3>
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 16,
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Name', 'Type', 'Description'].map((h) => (
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
                  ['sensitivity', 'number (param)', 'Drag speed multiplier (default 1.5)'],
                  ['ref', 'React ref', 'Attach to the scrollable container'],
                  ['isDragging', 'boolean', 'True while mouse is held down and moving'],
                  ['handlers', 'object', 'Spread onto the container: onMouseDown, onMouseUp, onMouseLeave, onMouseMove'],
                ].map(([name, type, desc]) => (
                  <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", fontWeight: 600, color: 'var(--blue)' }}>{name}</td>
                    <td style={{ padding: '10px 16px', fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--muted)' }}>{type}</td>
                    <td style={{ padding: '10px 16px', color: 'var(--body)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock label="Usage">{`import useDragScroll from '../hooks/useDragScroll'

const { ref, isDragging, handlers } = useDragScroll(1.5)

<div ref={ref} {...handlers}
  style={{ display: 'flex', overflowX: 'auto',
    cursor: isDragging ? 'grabbing' : 'grab' }}>
  <span>Item 1</span>
  <span>Item 2</span>
</div>`}</CodeBlock>
        </UISection>


        {/* --- 21. GLASSMORPHISM --- */}
        <UISection id="glassmorphism" title="Glassmorphism" description="Semi-transparent panels with backdrop-filter blur. Three variants for different background contexts.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Light panel on warm bg */}
            <div style={{ padding: 24, background: 'var(--warm)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
              }}>
                Light Panel (warm backgrounds)
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)', borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255,255,255,0.3)', padding: '24px 32px',
              }}>
                <p style={{ fontSize: '.88rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
                  Used for FAQ panels, timeline containers, and content overlays on warm/cream backgrounds.
                </p>
              </div>
            </div>

            {/* Subtle panel on light bg */}
            <div style={{ padding: 24, background: 'var(--cream)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
              }}>
                Subtle Panel (light backgrounds)
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)', borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0,0,0,0.04)', padding: '24px 32px',
              }}>
                <p style={{ fontSize: '.88rem', color: 'var(--body)', lineHeight: 1.6, margin: 0 }}>
                  Used for insurance/accreditation logo panels on cream backgrounds.
                </p>
              </div>
            </div>

            {/* Dark panel on dark bg */}
            <div style={{ padding: 24, background: 'var(--dark)', borderRadius: 'var(--radius)' }}>
              <div style={{
                fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 12,
              }}>
                Dark Panel (dark backgrounds)
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)', borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255,255,255,0.08)', padding: '24px 32px',
              }}>
                <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, margin: 0 }}>
                  Used for feature cards and callout panels on dark section backgrounds.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock label="Variants">{`{/* Light — warm backgrounds */}
background: rgba(255,255,255,0.85);
backdrop-filter: blur(24px);
border: 1px solid rgba(255,255,255,0.3);

{/* Subtle — light backgrounds */}
background: rgba(255,255,255,0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(0,0,0,0.04);

{/* Dark — dark backgrounds */}
background: rgba(255,255,255,0.06);
backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.08);`}</CodeBlock>
        </UISection>


        {/* --- 22. LOGO GRID --- */}
        <UISection id="logo-grid" title="Logo Grid" description="Grayscale trust logos with hover-to-color effect inside a glassmorphic panel.">
          <div style={{
            background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)', borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(0,0,0,0.04)', padding: '32px 24px',
            marginBottom: 16,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 32, flexWrap: 'wrap',
            }}>
              {['Aetna', 'Blue Cross', 'Cigna', 'United', 'Tricare'].map((name) => (
                <span
                  key={name}
                  className="wi-logo-img-demo"
                  style={{
                    fontSize: '.85rem', fontWeight: 600,
                    color: 'var(--muted)', letterSpacing: '.02em',
                    filter: 'grayscale(100%)', opacity: 0.5,
                    transition: 'all .2s ease', cursor: 'default',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: 16 }}>
            Hover over any logo to see the color + opacity transition. Uses the <code>.wi-logo-img</code> class.
          </p>

          <CodeBlock>{`{/* Glassmorphic container */}
<div style={{
  background: 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(16px)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid rgba(0,0,0,0.04)',
  padding: '32px 24px',
}}>
  <img
    src={logo}
    className="wi-logo-img"
    style={{
      height: 36,
      filter: 'grayscale(100%)',
      opacity: 0.5,
      transition: 'all .2s ease',
    }}
  />
</div>

/* CSS */
.wi-logo-img:hover {
  filter: grayscale(0%) !important;
  opacity: 1 !important;
}`}</CodeBlock>
        </UISection>


        {/* --- 23. SCROLLYTELLING --- */}
        <UISection id="scrollytelling" title="Scrollytelling" description="Sticky image + scrolling content grid layout. Used for long-form narrative sections like Programs.">
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24, marginBottom: 16,
          }}>
            <div style={{
              fontSize: '.72rem', fontWeight: 600, letterSpacing: '.06em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
            }}>
              Layout Diagram
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1.2fr',
              gap: 24, minHeight: 200,
            }}>
              <div style={{
                background: 'var(--sage-soft)', borderRadius: 'var(--radius)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px dashed var(--sage)', padding: 16,
              }}>
                <span style={{
                  fontSize: '.78rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--sage)',
                  textAlign: 'center',
                }}>
                  position: sticky<br />top: 120px<br />(image stays fixed)
                </span>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                {['Section 1 — min-height: 80vh', 'Section 2 — scrolls past sticky image', 'Section 3 — content continues'].map((label) => (
                  <div key={label} style={{
                    background: 'var(--blue-soft)', borderRadius: 'var(--radius)',
                    padding: 16, border: '2px dashed var(--blue)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{
                      fontSize: '.75rem', fontWeight: 600,
                      fontFamily: "'SF Mono', Menlo, monospace", color: 'var(--blue)',
                      textAlign: 'center',
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CodeBlock label="Layout Pattern">{`<section style={{ position: 'relative' }}>
  <div className="wrap" style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: 56, padding: '80px 32px',
  }}>
    {/* Sticky Image */}
    <div style={{
      position: 'sticky', top: 120,
      height: 600, borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      <img src={image} style={{
        width: '100%', height: '100%',
        objectFit: 'cover',
      }} />
    </div>

    {/* Scrolling Content */}
    <div>
      {sections.map(section => (
        <div style={{ minHeight: '80vh' }}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>`}</CodeBlock>
        </UISection>


        {/* --- 24. PATTERNS --- */}
        <UISection id="patterns" title="Patterns" description="Composite UI patterns for reuse across pages.">
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

          {/* Hover Lift */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Hover Lift
          </h3>
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            padding: 24, background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', marginBottom: 16,
          }}>
            <div className="hover-lift" style={{
              width: 180, padding: '24px 20px', background: '#fff',
              borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,.05)',
              textAlign: 'center',
            }}>
              <IconUser style={{ color: SAGE, width: 28, height: 28 }} />
              <span style={{ display: 'block', marginTop: 8, fontSize: '.88rem', fontWeight: 500, color: 'var(--text)' }}>
                Hover me
              </span>
            </div>
          </div>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: 16 }}>
            Adds <code>scale(1.03) translateY(-2px)</code> + elevated shadow on hover. Apply <code>.hover-lift</code> to any card.
          </p>
          <CodeBlock>{`<div className="hover-lift">
  Card content
</div>

/* CSS */
.hover-lift:hover {
  transform: scale(1.03) translateY(-2px);
  box-shadow: 0 10px 40px rgba(0,0,0,.08);
}`}</CodeBlock>

          {/* Bento Card */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Bento Card
          </h3>
          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16,
          }}>
            <div className="bento-card" style={{ maxWidth: 300 }}>
              <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Bento Card</h4>
              <p style={{ fontSize: '.85rem', color: 'var(--body)', lineHeight: 1.6 }}>
                Full-featured card with border-radius-lg, subtle shadow, and scale + shadow hover transition.
              </p>
            </div>
          </div>
          <CodeBlock>{`<div className="bento-card">
  Card content
</div>

/* CSS */
.bento-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.2, 0.6, 0.3, 1);
}
.bento-card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 40px rgba(0,0,0,.08);
}`}</CodeBlock>

          {/* Dark Feature Card */}
          <h3 style={{
            fontSize: '.75rem', fontWeight: 600, letterSpacing: '.08em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12,
            marginTop: 32,
          }}>
            Dark Feature Card
          </h3>
          <div style={{ padding: 24, background: 'var(--dark)', borderRadius: 'var(--radius)', marginBottom: 16 }}>
            <div style={{
              padding: '20px', borderRadius: 'var(--radius)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              maxWidth: 280,
            }}>
              <span style={{
                fontFamily: DISPLAY, fontSize: '.88rem', fontWeight: 600,
                display: 'block', lineHeight: 1.3, color: '#fff',
              }}>
                Feature Title
              </span>
              <span style={{
                fontSize: '.82rem', color: 'rgba(255,255,255,.5)',
                lineHeight: 1.5, marginTop: 6, display: 'block',
              }}>
                Description text for the feature card on dark backgrounds.
              </span>
            </div>
          </div>
          <CodeBlock>{`<div style={{
  padding: 20,
  borderRadius: 'var(--radius)',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
}}>
  <span>Title</span>
  <span>Description</span>
</div>`}</CodeBlock>
        </UISection>

      </main>


      {/* -- Scoped Styles -- */}
      <style>{`
        .ui-sidebar-link:hover {
          background: var(--warm) !important;
        }

        .wi-logo-img-demo:hover {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
          color: var(--blue) !important;
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
