import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isMobile = () => window.matchMedia('(max-width: 900px)').matches

interface TextRevealProps {
  children: ReactNode
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  style?: CSSProperties
  stagger?: number
  scrub?: boolean
  once?: boolean
  triggerStart?: string
  duration?: number
}

export default function TextReveal({
  children,
  as: Tag = 'p',
  className,
  style,
  stagger = 0.04,
  scrub = false,
  once = true,
  triggerStart = 'top 85%',
  duration = 0.5,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = containerRef.current
    if (!el) return

    const words = el.querySelectorAll('.tr-word')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        end: scrub ? 'bottom 60%' : undefined,
        scrub: scrub ? 1 : false,
        once: !scrub && once,
        toggleActions: scrub ? undefined : 'play none none none',
      },
    })

    const mobile = isMobile()

    tl.fromTo(
      words,
      {
        opacity: 0,
        y: mobile ? 10 : 20,
        // Skip blur filter on mobile — expensive on mobile GPU
        ...(mobile ? {} : { filter: 'blur(4px)' }),
      },
      {
        opacity: 1,
        y: 0,
        ...(mobile ? {} : { filter: 'blur(0px)' }),
        duration: scrub ? 0.3 : duration,
        stagger: scrub ? 0.05 : stagger,
        ease: 'power3.out',
      }
    )

    return () => {
      tl.kill()
    }
  }, [children, stagger, scrub, once, triggerStart, duration])

  if (typeof children !== 'string') {
    return (
      // @ts-expect-error -- polymorphic ref
      <Tag ref={containerRef} className={className} style={style}>{children}</Tag>
    )
  }

  const words = children.split(/(\s+)/)

  return (
    // @ts-expect-error -- polymorphic ref
    <Tag ref={containerRef} className={className} style={style}>
      {words.map((word, i) =>
        /^\s+$/.test(word) ? (
          <span key={i}>{word}</span>
        ) : (
          <span
            key={i}
            className="tr-word"
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
            }}
          >
            {word}
          </span>
        )
      )}
    </Tag>
  )
}

interface CharRevealProps {
  children: ReactNode
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  style?: CSSProperties
  stagger?: number
  triggerStart?: string
  duration?: number
}

export function CharReveal({
  children,
  as: Tag = 'h1',
  className,
  style,
  stagger = 0.02,
  triggerStart = 'top 85%',
  duration = 0.4,
}: CharRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = containerRef.current
    if (!el) return

    const chars = el.querySelectorAll('.cr-char')
    const mobile = isMobile()

    gsap.fromTo(
      chars,
      { opacity: 0, y: mobile ? 20 : 40, rotateX: mobile ? -30 : -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          once: true,
        },
      }
    )

    return () => ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === el) t.kill()
    })
  }, [children, stagger, triggerStart, duration])

  if (typeof children !== 'string') {
    return (
      // @ts-expect-error -- polymorphic ref
      <Tag ref={containerRef} className={className} style={style}>{children}</Tag>
    )
  }

  const words = children.split(/(\s+)/)

  return (
    // @ts-expect-error -- polymorphic ref
    <Tag
      ref={containerRef}
      className={className}
      style={{ ...style, perspective: 800 }}
    >
      {words.map((word, wi) =>
        /^\s+$/.test(word) ? (
          <span key={wi}> </span>
        ) : (
          <span
            key={wi}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {word.split('').map((char, ci) => (
              <span
                key={ci}
                className="cr-char"
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                }}
              >
                {char}
              </span>
            ))}
          </span>
        )
      )}
    </Tag>
  )
}
