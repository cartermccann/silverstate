import { useState, useEffect, useCallback, type ReactNode } from 'react'
import type { AnimationVariant } from '../types'
import UISection from '../components/UISection'
import CodeBlock from '../components/CodeBlock'
import PropControl, { type SchemaEntry } from '../components/PropControl'
import AnimateIn, { StaggerGroup, StaggerItem } from '../components/AnimateIn'
import TextReveal, { CharReveal } from '../components/TextReveal'
import Parallax, { ClipReveal } from '../components/Parallax'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import CountUp from '../components/CountUp'
import Lightbox from '../components/Lightbox'
import TimelineRow from '../components/Timeline'
import StepCard from '../components/StepCard'
import ProfileChip from '../components/ProfileChip'
import CardStack from '../components/CardStack'
import useDragScroll from '../hooks/useDragScroll'


type PropValue = string | number | boolean

interface ComponentCardProps {
  id: string
  title: string
  description: string
  schema: SchemaEntry[]
  values: Record<string, PropValue>
  setProp: (name: string, value: PropValue) => void
  resetProps: () => void
  replayKey: number
  onReplay: () => void
  renderPreview: (values: Record<string, PropValue>) => ReactNode
  renderJSX?: (values: Record<string, PropValue>) => string
}

interface Section {
  id: string
  label: string
}


/* -- Constants -- */
const DISPLAY = "var(--font-display)"

const SECTIONS: Section[] = [
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
  { id: 'lightbox', label: 'Lightbox' },
  { id: 'timeline', label: 'TimelineRow' },
  { id: 'step-card', label: 'StepCard' },
  { id: 'profile-chip', label: 'ProfileChip' },
  { id: 'card-stack', label: 'CardStack' },
  { id: 'drag-carousel', label: 'DragCarousel' },
]


/* -- useCardProps hook -- */
function useCardProps(schema: SchemaEntry[]): [Record<string, PropValue>, (name: string, value: PropValue) => void, () => void] {
  const getDefaults = useCallback(() => {
    const defaults: Record<string, PropValue> = {}
    schema.forEach((entry) => { defaults[entry.name] = entry.defaultValue })
    return defaults
  }, [schema])

  const [values, setValues] = useState(getDefaults)

  const setProp = useCallback((name: string, value: PropValue) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const resetProps = useCallback(() => {
    setValues(getDefaults())
  }, [getDefaults])

  return [values, setProp, resetProps]
}


/* -- JSX Generator -- */
function generateJSX(componentName: string, values: Record<string, PropValue>, schema: SchemaEntry[], childrenStr?: string): string {
  const props: string[] = []

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


/* -- Component Card wrapper -- */
function ComponentCard({ id, title, description, schema, values, setProp, resetProps, replayKey, onReplay, renderPreview, renderJSX }: ComponentCardProps) {
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


/* ======================================================
   SCHEMAS
   ====================================================== */

const animateInSchema: SchemaEntry[] = [
  { name: 'variant', type: 'select', label: 'Variant', options: ['fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight', 'scaleUp', 'slideUp', 'rotateIn', 'blurUp'], defaultValue: 'fadeUp' },
  { name: 'delay', type: 'range', label: 'Delay', min: 0, max: 2, step: 0.05, defaultValue: 0 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 3, step: 0.1, defaultValue: 0.8 },
  { name: 'once', type: 'toggle', label: 'Once', defaultValue: true },
  { name: 'triggerStart', type: 'select', label: 'Trigger Start', options: ['top 85%', 'top 90%', 'top 75%', 'top 50%'], defaultValue: 'top 85%' },
]

const staggerGroupSchema: SchemaEntry[] = [
  { name: 'variant', type: 'select', label: 'Variant', options: ['fadeUp', 'fadeIn', 'fadeLeft', 'fadeRight', 'scaleUp', 'slideUp', 'rotateIn', 'blurUp'], defaultValue: 'fadeUp' },
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.02, max: 0.5, step: 0.02, defaultValue: 0.1 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 3, step: 0.1, defaultValue: 0.7 },
]

const textRevealSchema: SchemaEntry[] = [
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.01, max: 0.2, step: 0.01, defaultValue: 0.04 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 2, step: 0.1, defaultValue: 0.5 },
  { name: 'scrub', type: 'toggle', label: 'Scrub', defaultValue: false },
  { name: 'once', type: 'toggle', label: 'Once', defaultValue: true },
  { name: 'text', type: 'text', label: 'Text', defaultValue: 'We believe adolescent treatment should feel like a turning point — not a dead end.' },
]

const charRevealSchema: SchemaEntry[] = [
  { name: 'stagger', type: 'range', label: 'Stagger', min: 0.005, max: 0.1, step: 0.005, defaultValue: 0.02 },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.1, max: 2, step: 0.1, defaultValue: 0.4 },
  { name: 'text', type: 'text', label: 'Text', defaultValue: 'One call can change everything' },
]

const parallaxSchema: SchemaEntry[] = [
  { name: 'speed', type: 'range', label: 'Speed', min: 0.05, max: 1, step: 0.05, defaultValue: 0.3 },
  { name: 'direction', type: 'select', label: 'Direction', options: ['up', 'down'], defaultValue: 'up' },
  { name: 'scale', type: 'toggle', label: 'Scale', defaultValue: false },
  { name: 'scaleFrom', type: 'range', label: 'Scale From', min: 1, max: 2, step: 0.05, defaultValue: 1.15 },
  { name: 'scaleTo', type: 'range', label: 'Scale To', min: 0.8, max: 1.5, step: 0.05, defaultValue: 1 },
  { name: 'overflow', type: 'select', label: 'Overflow', options: ['hidden', 'visible'], defaultValue: 'hidden' },
]

const clipRevealSchema: SchemaEntry[] = [
  { name: 'direction', type: 'select', label: 'Direction', options: ['up', 'left', 'right'], defaultValue: 'up' },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.3, max: 3, step: 0.1, defaultValue: 1 },
]

const marqueeSchema: SchemaEntry[] = [
  { name: 'speed', type: 'range', label: 'Speed', min: 10, max: 200, step: 5, defaultValue: 60 },
  { name: 'direction', type: 'select', label: 'Direction', options: ['left', 'right'], defaultValue: 'left' },
  { name: 'pauseOnHover', type: 'toggle', label: 'Pause on Hover', defaultValue: true },
  { name: 'gap', type: 'range', label: 'Gap', min: 8, max: 80, step: 4, defaultValue: 48 },
]

const magneticSchema: SchemaEntry[] = [
  { name: 'strength', type: 'range', label: 'Strength', min: 0.05, max: 1, step: 0.05, defaultValue: 0.3 },
]

const countUpSchema: SchemaEntry[] = [
  { name: 'end', type: 'number', label: 'End', min: 0, max: 10000, step: 1, defaultValue: 150 },
  { name: 'prefix', type: 'text', label: 'Prefix', defaultValue: '' },
  { name: 'suffix', type: 'text', label: 'Suffix', defaultValue: '' },
  { name: 'duration', type: 'range', label: 'Duration', min: 0.5, max: 5, step: 0.5, defaultValue: 2 },
]

const scrollProgressSchema: SchemaEntry[] = [
  { name: 'color', type: 'color', label: 'Color', defaultValue: 'var(--blue)' },
  { name: 'height', type: 'range', label: 'Height', min: 1, max: 10, step: 1, defaultValue: 3 },
]

const lightboxSchema: SchemaEntry[] = [
  { name: 'index', type: 'range', label: 'Image Index', min: 0, max: 2, step: 1, defaultValue: 0 },
]

const timelineSchema: SchemaEntry[] = [
  { name: 'time', type: 'text', label: 'Time', defaultValue: '8:00 AM' },
  { name: 'activity', type: 'text', label: 'Activity', defaultValue: 'Morning Meditation' },
  { name: 'desc', type: 'text', label: 'Description', defaultValue: 'Guided mindfulness session to set intentions.' },
]

const stepCardSchema: SchemaEntry[] = [
  { name: 'step', type: 'number', label: 'Step', min: 1, max: 10, step: 1, defaultValue: 1 },
  { name: 'title', type: 'text', label: 'Title', defaultValue: 'Call our team' },
  { name: 'desc', type: 'text', label: 'Description', defaultValue: 'Speak with an admissions counselor 24/7.' },
]

const profileChipSchema: SchemaEntry[] = [
  { name: 'label', type: 'text', label: 'Label', defaultValue: 'The anxious teen' },
  { name: 'desc', type: 'text', label: 'Description', defaultValue: "who can't make it through a school day" },
  { name: 'dotColor', type: 'color', label: 'Dot Color', defaultValue: '#5A7A6E' },
]

const cardStackSchema: SchemaEntry[] = [
  { name: 'topStart', type: 'range', label: 'Top Start', min: 0, max: 200, step: 10, defaultValue: 0 },
  { name: 'topStep', type: 'range', label: 'Top Step', min: 10, max: 40, step: 2, defaultValue: 16 },
  { name: 'scaleTarget', type: 'range', label: 'Scale Target', min: 0.85, max: 1.0, step: 0.01, defaultValue: 0.95 },
  { name: 'gap', type: 'range', label: 'Gap', min: 20, max: 60, step: 4, defaultValue: 24 },
]

const dragCarouselSchema: SchemaEntry[] = [
  { name: 'sensitivity', type: 'range', label: 'Sensitivity', min: 0.5, max: 3.0, step: 0.1, defaultValue: 1.5 },
]


/* ======================================================
   MARQUEE ITEMS
   ====================================================== */
const MARQUEE_ITEMS = ['Cognitive Behavioral Therapy', 'DBT', 'EMDR', 'Art Therapy', 'Equine Therapy', 'Family Systems']


/* ======================================================
   MAIN COMPONENT
   ====================================================== */
export default function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState<string>('animate-in')

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

  /* -- Card state for each component -- */
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

  const [lightboxValues, setLightboxProp, resetLightbox] = useCardProps(lightboxSchema)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const [timelineValues, setTimelineProp, resetTimeline] = useCardProps(timelineSchema)
  const [timelineReplay, setTimelineReplay] = useState(0)

  const [stepCardValues, setStepCardProp, resetStepCard] = useCardProps(stepCardSchema)
  const [stepCardReplay, setStepCardReplay] = useState(0)

  const [profileChipValues, setProfileChipProp, resetProfileChip] = useCardProps(profileChipSchema)
  const [profileChipReplay, setProfileChipReplay] = useState(0)

  const [cardStackValues, setCardStackProp, resetCardStack] = useCardProps(cardStackSchema)
  const [cardStackReplay, setCardStackReplay] = useState(0)

  const [dragCarouselValues, setDragCarouselProp, resetDragCarousel] = useCardProps(dragCarouselSchema)
  const [dragCarouselReplay, setDragCarouselReplay] = useState(0)
  const { ref: clDragRef, isDragging: clDragIsDragging, handlers: clDragHandlers } = useDragScroll(dragCarouselValues.sensitivity as number)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cream)' }}>
      {/* -- Sidebar -- */}
      <aside className="cl-sidebar" style={{
        position: 'fixed', top: 0, left: 0, bottom: 0, width: 240,
        background: '#fff', borderRight: '1px solid var(--border)',
        padding: '24px 0', overflowY: 'auto', zIndex: 50,
      }}>
        <div style={{ padding: '0 20px', marginBottom: 24 }}>
          <span style={{
            fontFamily: DISPLAY, fontSize: '1.15rem', fontWeight: 600,
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

      {/* -- Mobile Top Bar -- */}
      <nav className="cl-topbar" style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50, background: '#fff', borderBottom: '1px solid var(--border)',
        padding: '12px 20px', overflowX: 'auto', whiteSpace: 'nowrap',
      }}>
        <span style={{
          fontFamily: DISPLAY, fontSize: '1rem', fontWeight: 600,
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

      {/* -- Main Content -- */}
      <main className="cl-main" style={{
        marginLeft: 240, flex: 1, padding: '48px 56px',
        maxWidth: 960, minHeight: '100vh',
      }}>

        {/* --- 1. ANIMATE IN --- */}
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
              variant={v.variant as AnimationVariant}
              delay={v.delay as number}
              duration={v.duration as number}
              once={v.once as boolean}
              triggerStart={v.triggerStart as string}
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


        {/* --- 2. STAGGER GROUP --- */}
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
              variant={v.variant as AnimationVariant}
              stagger={v.stagger as number}
              duration={v.duration as number}
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


        {/* --- 3. TEXT REVEAL --- */}
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
              stagger={v.stagger as number}
              duration={v.duration as number}
              scrub={v.scrub as boolean}
              once={v.once as boolean}
              style={{
                fontFamily: DISPLAY, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 600, lineHeight: 1.55, color: 'var(--text)', margin: 0,
              }}
            >
              {v.text as string}
            </TextReveal>
          )}
          renderJSX={(v) => generateJSX('TextReveal', v, textRevealSchema)}
        />


        {/* --- 4. CHAR REVEAL --- */}
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
              stagger={v.stagger as number}
              duration={v.duration as number}
              style={{
                fontFamily: DISPLAY, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 700, lineHeight: 1.25, color: 'var(--text)', margin: 0,
              }}
            >
              {v.text as string}
            </CharReveal>
          )}
          renderJSX={(v) => generateJSX('CharReveal', v, charRevealSchema)}
        />


        {/* --- 5. PARALLAX --- */}
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
                speed={v.speed as number}
                direction={v.direction as 'up' | 'down'}
                scale={v.scale as boolean}
                scaleFrom={v.scaleFrom as number}
                scaleTo={v.scaleTo as number}
                overflow={v.overflow as 'hidden' | 'visible'}
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


        {/* --- 6. CLIP REVEAL --- */}
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
            <ClipReveal direction={v.direction as 'up' | 'left' | 'right'} duration={v.duration as number}>
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


        {/* --- 7. MARQUEE --- */}
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
                speed={v.speed as number}
                direction={v.direction as 'left' | 'right'}
                pauseOnHover={v.pauseOnHover as boolean}
                gap={v.gap as number}
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


        {/* --- 8. MAGNETIC BUTTON --- */}
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
              <MagneticButton strength={v.strength as number}>
                <button className="btn btn-primary">
                  Hover Me (strength={v.strength})
                </button>
              </MagneticButton>
            </div>
          )}
          renderJSX={(v) => generateJSX('MagneticButton', v, magneticSchema, '<button className="btn btn-primary">Click Me</button>')}
        />


        {/* --- 9. COUNT UP --- */}
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
                fontFamily: DISPLAY, fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 700, color: 'var(--text)', display: 'block',
              }}>
                <CountUp
                  end={v.end as number}
                  prefix={v.prefix as string}
                  suffix={v.suffix as string}
                  duration={v.duration as number}
                />
              </span>
            </div>
          )}
          renderJSX={(v) => generateJSX('CountUp', v, countUpSchema)}
        />


        {/* --- 10. SCROLL PROGRESS --- */}
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
                height: scrollProgressValues.height as number,
                background: 'rgba(0,0,0,.06)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: '60%',
                height: '100%',
                background: scrollProgressValues.color as string,
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


        {/* --- 11. LIGHTBOX --- */}
        <UISection
          id="lightbox"
          title="Lightbox"
          description="Full-viewport image lightbox with keyboard navigation and ambient blur background. Click the button below to open."
        >
          <div style={{
            background: '#fff', borderRadius: 'var(--radius)',
            border: '1px solid var(--border)', padding: 24,
            marginBottom: 16,
          }}>
            <button
              className="btn btn-primary"
              onClick={() => setLightboxOpen(true)}
            >
              Open Lightbox
            </button>
          </div>

          {lightboxOpen && (
            <Lightbox
              images={[
                { src: '/assets/woman-on-phone.jpg', alt: 'Family involvement', caption: 'Family-centered treatment environment' },
                { src: '/assets/hero-youth.webp', alt: 'Youth activities', caption: 'Structured therapeutic programming' },
                { src: '/assets/teen-therapist.jpg', alt: 'Therapy sessions', caption: 'Individual and group therapy spaces' },
              ]}
              index={lightboxValues.index as number}
              onClose={() => setLightboxOpen(false)}
              onPrev={() => setLightboxProp('index', Math.max(0, (lightboxValues.index as number) - 1))}
              onNext={() => setLightboxProp('index', Math.min(2, (lightboxValues.index as number) + 1))}
            />
          )}

          {/* Prop Controls */}
          <div style={{
            background: 'var(--warm)', borderRadius: 'var(--radius)',
            padding: 20, marginBottom: 16,
          }}>
            <PropControl
              schema={lightboxSchema}
              values={lightboxValues}
              onChange={setLightboxProp}
              onReset={resetLightbox}
            />
          </div>

          <CodeBlock label="Generated JSX">
            {`<Lightbox\n  images={images}\n  index={${lightboxValues.index}}\n  onClose={() => setLightboxOpen(false)}\n  onPrev={() => setIndex(i => Math.max(0, i - 1))}\n  onNext={() => setIndex(i => Math.min(images.length - 1, i + 1))}\n/>`}
          </CodeBlock>
        </UISection>


        {/* --- 12. TIMELINE ROW --- */}
        <ComponentCard
          id="timeline"
          title="TimelineRow"
          description="Timeline row with time, dot, and content columns. Uses .timeline-* CSS classes."
          schema={timelineSchema}
          values={timelineValues}
          setProp={setTimelineProp}
          resetProps={resetTimeline}
          replayKey={timelineReplay}
          onReplay={() => setTimelineReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{
              background: 'rgba(255,255,255,0.85)', borderRadius: 'var(--radius)',
              padding: '4px 24px',
            }}>
              <TimelineRow time={v.time as string} activity={v.activity as string} desc={v.desc as string} />
            </div>
          )}
          renderJSX={(v) => `<TimelineRow\n  time="${v.time}"\n  activity="${v.activity}"\n  desc="${v.desc}"\n/>`}
        />


        {/* --- 13. STEP CARD --- */}
        <ComponentCard
          id="step-card"
          title="StepCard"
          description="Numbered process step card with hover lift effect. Uses .step-card and .step-number CSS classes."
          schema={stepCardSchema}
          values={stepCardValues}
          setProp={setStepCardProp}
          resetProps={resetStepCard}
          replayKey={stepCardReplay}
          onReplay={() => setStepCardReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ maxWidth: 280 }}>
              <StepCard step={v.step as number} title={v.title as string} desc={v.desc as string} />
            </div>
          )}
          renderJSX={(v) => `<StepCard\n  step={${v.step}}\n  title="${v.title}"\n  desc="${v.desc}"\n/>`}
        />


        {/* --- 14. PROFILE CHIP --- */}
        <ComponentCard
          id="profile-chip"
          title="ProfileChip"
          description="Dot + label + description chip using .profile-chip CSS class."
          schema={profileChipSchema}
          values={profileChipValues}
          setProp={setProfileChipProp}
          resetProps={resetProfileChip}
          replayKey={profileChipReplay}
          onReplay={() => setProfileChipReplay((k) => k + 1)}
          renderPreview={(v) => (
            <div style={{ maxWidth: 380 }}>
              <ProfileChip label={v.label as string} desc={v.desc as string} dotColor={v.dotColor as string} />
            </div>
          )}
          renderJSX={(v) => {
            const props = [`label="${v.label}"`, `desc="${v.desc}"`]
            if (v.dotColor !== '#5A7A6E') props.push(`dotColor="${v.dotColor}"`)
            return `<ProfileChip\n  ${props.join('\n  ')}\n/>`
          }}
        />


        {/* --- 15. CARD STACK --- */}
        <UISection
          id="card-stack"
          title="CardStack"
          description="GSAP-powered sticky stacking cards. Each child gets position: sticky with incrementing top and scale-down animation."
        >
          {/* Live Preview */}
          <div
            key={`cs-${JSON.stringify(cardStackValues)}-${cardStackReplay}`}
            style={{
              background: 'var(--warm)', borderRadius: 'var(--radius)',
              padding: '32px 24px', marginBottom: 16,
              maxHeight: 500, overflowY: 'auto',
            }}
          >
            <CardStack
              topStart={cardStackValues.topStart as number}
              topStep={cardStackValues.topStep as number}
              scaleTarget={cardStackValues.scaleTarget as number}
              gap={cardStackValues.gap as number}
            >
              <div className="bento-card" style={{ backgroundColor: '#fff', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Mental Health</h4>
                <p style={{ fontSize: '.85rem', color: 'var(--body)', lineHeight: 1.6 }}>Anxiety, Depression, PTSD, Bipolar Disorder, OCD</p>
              </div>
              <div className="bento-card" style={{ backgroundColor: '#faf9f6', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Substance Abuse</h4>
                <p style={{ fontSize: '.85rem', color: 'var(--body)', lineHeight: 1.6 }}>Alcohol, Cannabis, Prescription Medications</p>
              </div>
              <div className="bento-card" style={{ backgroundColor: '#5A7A6E', color: '#fff', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontFamily: DISPLAY, fontSize: '.95rem', fontWeight: 700, marginBottom: 8 }}>Therapeutic Modalities</h4>
                <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.85)', lineHeight: 1.6 }}>CBT, DBT, EMDR, Art Therapy, Family Systems</p>
              </div>
            </CardStack>
          </div>

          {/* Replay */}
          <button
            onClick={() => setCardStackReplay((k) => k + 1)}
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
              schema={cardStackSchema}
              values={cardStackValues}
              onChange={setCardStackProp}
              onReset={resetCardStack}
            />
          </div>

          {/* Code Block */}
          <CodeBlock label="Generated JSX">
            {`<CardStack${cardStackValues.topStart !== 0 ? ` topStart={${cardStackValues.topStart}}` : ''}${cardStackValues.topStep !== 16 ? ` topStep={${cardStackValues.topStep}}` : ''}${cardStackValues.scaleTarget !== 0.95 ? ` scaleTarget={${cardStackValues.scaleTarget}}` : ''}${cardStackValues.gap !== 24 ? ` gap={${cardStackValues.gap}}` : ''}>\n  <div className="bento-card">Card 1</div>\n  <div className="bento-card">Card 2</div>\n  <div className="bento-card">Card 3</div>\n</CardStack>`}
          </CodeBlock>
        </UISection>


        {/* --- 16. DRAG CAROUSEL --- */}
        <UISection
          id="drag-carousel"
          title="DragCarousel"
          description="Drag-to-scroll carousel using the useDragScroll hook. Adjust sensitivity to control drag speed."
        >
          {/* Live Preview */}
          <div
            key={`dc-${JSON.stringify(dragCarouselValues)}-${dragCarouselReplay}`}
            style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid var(--border)', padding: 24,
              marginBottom: 16, position: 'relative', overflow: 'hidden',
            }}
          >
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
              ref={clDragRef}
              {...clDragHandlers}
              style={{
                display: 'flex', gap: 10,
                overflowX: 'auto', scrollSnapType: 'x mandatory',
                cursor: clDragIsDragging ? 'grabbing' : 'grab',
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

          {/* Replay */}
          <button
            onClick={() => setDragCarouselReplay((k) => k + 1)}
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
              schema={dragCarouselSchema}
              values={dragCarouselValues}
              onChange={setDragCarouselProp}
              onReset={resetDragCarousel}
            />
          </div>

          {/* Code Block */}
          <CodeBlock label="Generated JSX">
            {`const { ref, isDragging, handlers } = useDragScroll(${dragCarouselValues.sensitivity})\n\n<div ref={ref} {...handlers}\n  style={{ display: 'flex', overflowX: 'auto',\n    cursor: isDragging ? 'grabbing' : 'grab' }}>\n  <span>Item 1</span>\n  <span>Item 2</span>\n</div>`}
          </CodeBlock>
        </UISection>

      </main>


      {/* -- Scoped Styles -- */}
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
