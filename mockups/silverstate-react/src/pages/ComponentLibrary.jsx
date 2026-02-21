import { useState, useEffect, useCallback, useRef } from 'react'
import UISection from '../components/UISection'
import CodeBlock from '../components/CodeBlock'
import PropControl from '../components/PropControl'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax, { ClipReveal } from '../components/Parallax'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'


/* ── Constants ── */
const SERIF = "'DM Serif Display', serif"

const SECTIONS = [
  { id: 'animate-in', label: 'AnimateIn' },
  { id: 'stagger-group', label: 'StaggerGroup' },
  { id: 'text-reveal', label: 'TextReveal' },
  { id: 'char-reveal', label: 'CharReveal' },
  { id: 'parallax', label: 'Parallax' },
  { id: 'clip-reveal', label: 'ClipReveal' },
  { id: 'marquee', label: 'Marquee' },
  { id: 'magnetic-button', label: 'MagneticButton' },
  { id: 'count-up', label: 'CountUp' },
  { id: 'scroll-progress', label: 'ScrollProgress' },
]


/* ── useCardProps hook ── */
function useCardProps(schema) {
  const getDefaults = useCallback(() => {
    const defaults = {}
    schema.forEach((entry) => { defaults[entry.name] = entry.defaultValue })
    return defaults
  }, [schema])

  const [values, setValues] = useState(getDefaults)

  const setProp = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const resetProps = useCallback(() => {
    setValues(getDefaults())
  }, [getDefaults])

  return [values, setProp, resetProps]
}


/* ── JSX Generator ── */
function generateJSX(componentName, values, schema, childrenStr) {
  const props = []

  schema.forEach((entry) => {
    if (entry.name === 'text') return
    const val = values[entry.name]
    if (val === entry.defaultValue) return

    if (typeof val === 'string') {
      props.push(`${entry.name}="${val}"`)
    } else if (typeof val === 'boolean') {
      props.push(val ? entry.name : `${entry.name}={false}`)
    } else {
      props.push(`${entry.name}={${val}}`)
    }
  })

  const propsStr = props.length > 0 ? ' ' + props.join(' ') : ''
  const textEntry = schema.find((e) => e.name === 'text')
  const children = textEntry ? values.text : childrenStr

  if (children) {
    return `<${componentName}${propsStr}>\n  ${children}\n</${componentName}>`
  }
  return `<${componentName}${propsStr} />`
}


/* ── Component Card wrapper ── */
function ComponentCard({ id, title, description, schema, values, setProp, resetProps, replayKey, onReplay, renderPreview, renderJSX }) {
  return (
    <UISection id={id} title={title} description={description}>
      {/* Live Preview */}
      <div style={{
        background: '#fff', borderRadius: 'var(--radius)',
        border: '1px solid var(--border)', padding: 24,
        marginBottom: 16, overflow: 'hidden', position: 'relative',
        minHeight: 80,
      }}>
        <div key={`${JSON.stringify(values)}-${replayKey}`}>
          {renderPreview(values)}
        </div>
      </div>

      {/* Replay button */}
      <button
        onClick={onReplay}
        style={{
          marginBottom: 16, padding: '6px 16px',
          borderRadius: 999, border: '1px solid var(--border)',
          background: '#fff', fontSize: '.78rem', fontWeight: 600,
          color: 'var(--body)', cursor: 'pointer', fontFamily: 'inherit',
          transition: 'all .15s ease',
        }}
      >
        Replay Animation
      </button>

      {/* Prop Controls */}
      <div style={{
        background: 'var(--warm)', borderRadius: 'var(--radius)',
        padding: 20, marginBottom: 16,
      }}>
        <PropControl
          schema={schema}
          values={values}
          onChange={setProp}
          onReset={resetProps}
        />
      </div>

      {/* Code Block */}
      <CodeBlock label="Generated JSX">
        {renderJSX ? renderJSX(values) : generateJSX(title, values, schema)}
      </CodeBlock>
    </UISection>
  )
}


/* ══════════════════════════════════════════════════
   SCHEMAS
   ══════════════════════════════════════════════════ */

const animateInSchema = [
  { name: 'variant', type: 'select', label: 'Variant', options: ['fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight', 'scaleUp', 'slideUp', 'rotateIn', 'blurUp'], defaultValue: 'fadeUp' },
  { name: 'delay', type: 'range', label: 'Delay', min: 0, max: 2, step: 0.05, defaultValue: 0 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 3, step: 0.1, defaultValue: 0.8 },
  { name: 'once', type: 'toggle', label: 'Once', defaultValue: true },
  { name: 'triggerStart', type: 'select', label: 'Trigger Start', options: ['top 85%', 'top 90%', 'top 75%', 'top 50%'], defaultValue: 'top 85%' },
]

const staggerGroupSchema = [
  { name: 'variant', type: 'select', label: 'Variant', options: ['fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight', 'scaleUp', 'slideUp', 'rotateIn', 'blurUp'], defaultValue: 'fadeUp' },
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.02, max: 0.5, step: 0.02, defaultValue: 0.1 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 3, step: 0.1, defaultValue: 0.7 },
]

const textRevealSchema = [
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.01, max: 0.2, step: 0.01, defaultValue: 0.04 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
  { name: 'scrub', type: 'toggle', label: 'Scrub', defaultValue: false },
  { name: 'once', type: 'toggle', label: 'Once', defaultValue: true },
  { name: 'text', type: 'text', label: 'Text', defaultValue: 'We believe adolescent treatment should feel like a turning point — not a dead end.' },
]

const charRevealSchema = [
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.005, max: 0.1, step: 0.005, defaultValue: 0.02 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 2, step: 0.1, defaultValue: 0.4 },
  { name: 'text', type: 'text', label: 'Text', defaultValue: 'One call can change everything' },
]

const parallaxSchema = [
  { name: 'speed', type: 'range', label: 'Speed', min: 0.05, max: 1, step: 0.05, defaultValue: 0.3 },
  { name: 'direction', type: 'select', label: 'Direction', options: ['up', 'down'], defaultValue: 'up' },
  { name: 'scale', type: 'toggle', label: 'Scale', defaultValue: false },
  { name: 'scaleFrom', type: 'range', label: 'Scale From', min: 1, max: 2, step: 0.05, defaultValue: 1.15 },
  { name: 'scaleTo', type: 'range', label: 'Scale To', min: 0.8, max: 1.5, step: 0.05, defaultValue: 1 },
  { name: 'overflow', type: 'select', label: 'Overflow', options: ['hidden', 'visible'], defaultValue: 'hidden' },
]

const clipRevealSchema = [
  { name: 'direction', type: 'select', label: 'Direction', options: ['up', 'left', 'right'], defaultValue: 'up' },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.3, max: 3, step: 0.1, defaultValue: 1 },
]

const marqueeSchema = [
  { name: 'speed', type: 'range', label: 'Speed', min: 10, max: 200, step: 5, defaultValue: 60 },
  { name: 'direction', type: 'select', label: 'Direction', options: ['left', 'right'], defaultValue: 'left' },
  { name: 'pauseOnHover', type: 'toggle', label: 'Pause on Hover', defaultValue: true },
  { name: 'gap', type: 'range', label: 'Gap', min: 8, max: 80, step: 4, defaultValue: 48 },
]

const magneticSchema = [
  { name: 'strength', type: 'range', label: 'Strength', min: 0.05, max: 1, step: 0.05, defaultValue: 0.3 },
]

const countUpSchema = [
  { name: 'end', type: 'number', label: 'End', min: 0, max: 10000, step: 1, defaultValue: 150 },
  { name: 'prefix', type: 'text', label: 'Prefix', defaultValue: '' },
  { name: 'suffix', type: 'text', label: 'Suffix', defaultValue: '' },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.5, max: 5, step: 0.5, defaultValue: 2 },
]

const scrollProgressSchema = [
  { name: 'color', type: 'color', label: 'Color', defaultValue: 'var(--blue)' },
  { name: 'height', type: 'range', label: 'Height', min: 1, max: 10, step: 1, defaultValue: 3 },
]


/* ══════════════════════════════════════════════════
   MARQUEE ITEMS
   ══════════════════════════════════════════════════ */
const MARQUEE_ITEMS = ['Cognitive Behavioral Therapy', 'DBT', 'EMDR', 'Art Therapy', 'Equine Therapy', 'Family Systems']


/* ══════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════ */
export default function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState('animate-in')

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

  /* ── Card state for each component ── */
  const [animateInValues, setAnimateInProp, resetAnimateIn] = useCardProps(animateInSchema)
  const [animateInReplay, setAnimateInReplay] = useState(0)

  const [staggerValues, setStaggerProp, resetStagger] = useCardProps(staggerGroupSchema)
  const [staggerReplay, setStaggerReplay] = useState(0)

  const [textRevealValues, setTextRevealProp, resetTextReveal] = useCardProps(textRevealSchema)
  const [textRevealReplay, setTextRevealReplay] = useState(0)

  const [charRevealValues, setCharRevealProp, resetCharReveal] = useCardProps(charRevealSchema)
  const [charRevealReplay, setCharRevealReplay] = useState(0)

  const [parallaxValues, setParallaxProp, resetParallax] = useCardProps(parallaxSchema)
  const [parallaxReplay, setParallaxReplay] = useState(0)

  const [clipRevealValues, setClipRevealProp, resetClipReveal] = useCardProps(clipRevealSchema)
  const [clipRevealReplay, setClipRevealReplay] = useState(0)

  const [marqueeValues, setMarqueeProp, resetMarquee] = useCardProps(marqueeSchema)
  const [marqueeReplay, setMarqueeReplay] = useState(0)

  const [magneticValues, setMagneticProp, resetMagnetic] = useCardProps(magneticSchema)
  const [magneticReplay, setMagneticReplay] = useState(0)

  const [countUpValues, setCountUpProp, resetCountUp] = useCardProps(countUpSchema)
  const [countUpReplay, setCountUpReplay] = useState(0)

  const [scrollProgressValues, setScrollProgressProp, resetScrollProgress] = useCardProps(scrollProgressSchema)
  const [scrollProgressReplay, setScrollProgressReplay] = useState(0)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cream)' }}>
      {/* ── Sidebar ── */}
      <aside className="cl-sidebar" style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, width: 240,
        background: '#fff', borderRight: '1px solid var(--border)',
        padding: '24px 0', overflowY: 'auto', zIndex: 50,
      }}>
        <div style={{ padding: '0 20px', marginBottom: 24 }}>
          <span style={{
            fontFamily: SERIF, fontSize: '1.15rem', fontWeight: 400,
            color: 'var(--text)',
          }}>
            Components
          </span>
          <span style={{
            display: 'block', fontSize: '.72rem', color: 'var(--muted)',
            marginTop: 2,
          }}>
            Interactive Playground
          </span>
          <a href="/ui" style={{
            display: 'inline-block', marginTop: 8,
            fontSize: '.72rem', color: 'var(--blue)', textDecoration: 'none',
          }}>
            &larr; Design System
          </a>
        </div>
        <nav>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="cl-sidebar-link"
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
      <nav className="cl-topbar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50, background: '#fff', borderBottom: '1px solid var(--border)',
        padding: '12px 20px', overflowX: 'auto', whiteSpace: 'nowrap',
      }}>
        <span style={{
          fontFamily: SERIF, fontSize: '1rem', fontWeight: 400,
          color: 'var(--text)', marginRight: 20,
        }}>
          Components
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
      <main className="cl-main" style={{
        marginLeft: 240, flex: 1, padding: '48px 56px',
        maxWidth: 960, minHeight: '100vh',
      }}>

        {/* ─── 1. ANIMATE IN ─── */}
        <ComponentCard
          id="animate-in"
          title="AnimateIn"
          description="Scroll-triggered entrance animations with 8 presets. Powered by GSAP ScrollTrigger."
          schema={animateInSchema}
          values={animateInValues}
          setProp={setAnimateInProp}
          resetProps={resetAnimateIn}
          replayKey={animateInReplay}
          onReplay={() => setAnimateInReplay((k) => k + 1)}
          renderPreview={(v) => (
            <AnimateIn
              variant={v.variant}
              delay={v.delay}
              duration={v.duration}
              once={v.once}
              triggerStart={v.triggerStart}
            >
              <div style={{
                width: 160, height: 100, borderRadius: 'var(--radius)',
                background: 'linear-gradient(135deg, var(--sage) 0%, var(--blue) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '.85rem', fontWeight: 600,
              }}>
                {v.variant}
              </div>
            </AnimateIn>
          )}
          renderJSX={(v) => generateJSX('AnimateIn', v, animateInSchema, '{children}')}
        />


        {/* ─── 2. STAGGER GROUP ─── */}
        <ComponentCard
          id="stagger-group"
          title="StaggerGroup"
          description="Staggered scroll-triggered animations for groups of elements."
          schema={staggerGroupSchema}
          values={staggerValues}
          setProp={setStaggerProp}
          resetProps={resetStagger}
          replayKey={staggerReplay}
          onReplay={() => setStaggerReplay((k) => k + 1)}
          renderPreview={(v) => (
            <StaggerGroup
              variant={v.variant}
              stagger={v.stagger}
              duration={v.duration}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <StaggerItem key={n}>
                  <div style={{
                    width: 80, height: 80, background: 'var(--sage-soft)',
                    borderRadius: 'var(--radius)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: 600, color: 'var(--sage)', fontSize: '1.1rem',
                    border: '1px solid rgba(90,122,110,.15)',
                  }}>
                    {n}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          )}
          renderJSX={(v) => {
            const jsx = generateJSX('StaggerGroup', v, staggerGroupSchema)
            return jsx.replace(' />', '>\n  <StaggerItem>Item 1</StaggerItem>\n  <StaggerItem>Item 2</StaggerItem>\n</StaggerGroup>')
          }}
        />


        {/* ─── 3. TEXT REVEAL ─── */}
        <ComponentCard
          id="text-reveal"
          title="TextReveal"
          description="Word-by-word scroll-triggered text reveal with blur and fade effect."
          schema={textRevealSchema}
          values={textRevealValues}
          setProp={setTextRevealProp}
          resetProps={resetTextReveal}
          replayKey={textRevealReplay}
          onReplay={() => setTextRevealReplay((k) => k + 1)}
          renderPreview={(v) => (
            <TextReveal
              as="p"
              stagger={v.stagger}
              duration={v.duration}
              scrub={v.scrub}
              once={v.once}
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 400, lineHeight: 1.55, color: 'var(--text)', margin: 0,
              }}
            >
              {v.text}
            </TextReveal>
          )}
          renderJSX={(v) => generateJSX('TextReveal', v, textRevealSchema)}
        />


        {/* ─── 4. CHAR REVEAL ─── */}
        <ComponentCard
          id="char-reveal"
          title="CharReveal"
          description="Character-by-character scroll-triggered text animation with 3D rotation."
          schema={charRevealSchema}
          values={charRevealValues}
          setProp={setCharRevealProp}
          resetProps={resetCharReveal}
          replayKey={charRevealReplay}
          onReplay={() => setCharRevealReplay((k) => k + 1)}
          renderPreview={(v) => (
            <CharReveal
              as="h2"
              stagger={v.stagger}
              duration={v.duration}
              style={{
                fontFamily: SERIF, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: 0,
              }}
            >
              {v.text}
            </CharReveal>
          )}
          renderJSX={(v) => generateJSX('CharReveal', v, charRevealSchema)}
        />


        {/* ─── 5. PARALLAX ─── */}
        <ComponentCard
          id="parallax"
          title="Parallax"
          description="Scroll-driven depth movement effect for images and sections."
          schema={parallaxSchema}
          values={parallaxValues}
          setProp={setParallaxProp}
          resetProps={resetParallax}
          replayKey={parallaxReplay}
          onReplay={() => setParallaxReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ height: 220, overflow: 'hidden', borderRadius: 'var(--radius)' }}>
              <Parallax
                speed={v.speed}
                direction={v.direction}
                scale={v.scale}
                scaleFrom={v.scaleFrom}
                scaleTo={v.scaleTo}
                overflow={v.overflow}
                style={{ height: '100%', width: '100%' }}
              >
                <div style={{
                  width: '100%', height: '150%',
                  background: 'linear-gradient(135deg, var(--sage) 0%, var(--blue) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    color: '#fff', fontSize: '.85rem', fontWeight: 600,
                    fontFamily: "'SF Mono', Menlo, monospace",
                  }}>
                    speed={'{' + v.speed + '}'}
                  </span>
                </div>
              </Parallax>
            </div>
          )}
          renderJSX={(v) => generateJSX('Parallax', v, parallaxSchema, '{children}')}
        />


        {/* ─── 6. CLIP REVEAL ─── */}
        <ComponentCard
          id="clip-reveal"
          title="ClipReveal"
          description="Clip-path wipe reveal effect with configurable direction."
          schema={clipRevealSchema}
          values={clipRevealValues}
          setProp={setClipRevealProp}
          resetProps={resetClipReveal}
          replayKey={clipRevealReplay}
          onReplay={() => setClipRevealReplay((k) => k + 1)}
          renderPreview={(v) => (
            <ClipReveal direction={v.direction} duration={v.duration}>
              <div style={{
                width: 240, height: 140, borderRadius: 'var(--radius)',
                background: v.direction === 'up' ? 'var(--sage)' : v.direction === 'left' ? 'var(--blue)' : 'var(--dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  color: '#fff', fontSize: '.85rem', fontWeight: 600,
                  fontFamily: "'SF Mono', Menlo, monospace",
                }}>
                  direction="{v.direction}"
                </span>
              </div>
            </ClipReveal>
          )}
          renderJSX={(v) => generateJSX('ClipReveal', v, clipRevealSchema, '{children}')}
        />


        {/* ─── 7. MARQUEE ─── */}
        <ComponentCard
          id="marquee"
          title="Marquee"
          description="Infinite horizontal scroll with pause-on-hover. GSAP-powered."
          schema={marqueeSchema}
          values={marqueeValues}
          setProp={setMarqueeProp}
          resetProps={resetMarquee}
          replayKey={marqueeReplay}
          onReplay={() => setMarqueeReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ overflow: 'hidden', margin: '-24px', padding: '24px 0' }}>
              <Marquee
                speed={v.speed}
                direction={v.direction}
                pauseOnHover={v.pauseOnHover}
                gap={v.gap}
              >
                {MARQUEE_ITEMS.map((t) => (
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
          )}
          renderJSX={(v) => {
            const jsx = generateJSX('Marquee', v, marqueeSchema)
            return jsx.replace(' />', '>\n  <span>Item 1</span>\n  <span>Item 2</span>\n</Marquee>')
          }}
        />


        {/* ─── 8. MAGNETIC BUTTON ─── */}
        <ComponentCard
          id="magnetic-button"
          title="MagneticButton"
          description="Cursor-following hover effect. Wraps any element."
          schema={magneticSchema}
          values={magneticValues}
          setProp={setMagneticProp}
          resetProps={resetMagnetic}
          replayKey={magneticReplay}
          onReplay={() => setMagneticReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
              <MagneticButton strength={v.strength}>
                <button className="btn btn-primary">
                  Hover Me (strength={v.strength})
                </button>
              </MagneticButton>
            </div>
          )}
          renderJSX={(v) => generateJSX('MagneticButton', v, magneticSchema, '<button className="btn btn-primary">Click Me</button>')}
        />


        {/* ─── 9. COUNT UP ─── */}
        <ComponentCard
          id="count-up"
          title="CountUp"
          description="Scroll-triggered animated number counter with prefix/suffix support."
          schema={countUpSchema}
          values={countUpValues}
          setProp={setCountUpProp}
          resetProps={resetCountUp}
          replayKey={countUpReplay}
          onReplay={() => setCountUpReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: SERIF, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 400, color: 'var(--text)', display: 'block',
              }}>
                <CountUp
                  end={v.end}
                  prefix={v.prefix}
                  suffix={v.suffix}
                  duration={v.duration}
                />
              </span>
            </div>
          )}
          renderJSX={(v) => generateJSX('CountUp', v, countUpSchema)}
        />


        {/* ─── 10. SCROLL PROGRESS ─── */}
        <UISection
          id="scroll-progress"
          title="ScrollProgress"
          description="Fixed progress bar at the top of the page. Preview below is a static mock since the real component uses fixed positioning."
        >
          {/* Static mock preview */}
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24,
            marginBottom: 16,
          }}>
            <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Preview (static mock — 60% scroll)
            </div>
            <div
              key={`sp-${JSON.stringify(scrollProgressValues)}-${scrollProgressReplay}`}
              style={{
                width: '100%',
                height: scrollProgressValues.height,
                background: 'rgba(0,0,0,.06)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: '60%',
                height: '100%',
                background: scrollProgressValues.color,
                borderRadius: 2,
                transition: 'all .3s ease',
              }} />
            </div>
          </div>

          {/* Replay */}
          <button
            onClick={() => setScrollProgressReplay((k) => k + 1)}
            style={{
              marginBottom: 16, padding: '6px 16px',
              borderRadius: 999, border: '1px solid var(--border)',
              background: '#fff', fontSize: '.78rem', fontWeight: 600,
              color: 'var(--body)', cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Replay Animation
          </button>

          {/* Prop Controls */}
          <div style={{
            background: 'var(--warm)', borderRadius: 'var(--radius)',
            padding: 20, marginBottom: 16,
          }}>
            <PropControl
              schema={scrollProgressSchema}
              values={scrollProgressValues}
              onChange={setScrollProgressProp}
              onReset={resetScrollProgress}
            />
          </div>

          {/* Code Block */}
          <CodeBlock label="Generated JSX">
            {generateJSX('ScrollProgress', scrollProgressValues, scrollProgressSchema)}
          </CodeBlock>
        </UISection>

      </main>


      {/* ── Scoped Styles ── */}
      <style>{`
        .cl-sidebar-link:hover {
          background: var(--warm) !important;
        }

        @media (max-width: 900px) {
          .cl-sidebar {
            display: none !important;
          }
          .cl-topbar {
            display: block !important;
          }
          .cl-main {
            margin-left: 0 !important;
            padding: 72px 20px 48px !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  )
}
