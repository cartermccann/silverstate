import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Word-by-word text reveal animation (realfood.gov style).
 * Each word fades in and translates up as the user scrolls.
 *
 * Props:
 * - children: string — the text to animate
 * - as: string — wrapper element (default 'p')
 * - className, style: passthrough
 * - stagger: number — delay between words (default 0.04)
 * - scrub: boolean — tie to scroll position (default false)
 * - once: boolean — only animate once (default true)
 * - triggerStart: string — ScrollTrigger start (default 'top 85%')
 * - duration: number — animation duration per word (default 0.5)
 */
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
}) {
  const containerRef = useRef(null)

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

    tl.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
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
    return <Tag ref={containerRef} className={className} style={style}>{children}</Tag>
  }

  const words = children.split(/(\s+)/)

  return (
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

/**
 * Character-by-character reveal for headings.
 */
export function CharReveal({
  children,
  as: Tag = 'h1',
  className,
  style,
  stagger = 0.02,
  triggerStart = 'top 85%',
  duration = 0.4,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = containerRef.current
    if (!el) return

    const chars = el.querySelectorAll('.cr-char')

    gsap.fromTo(
      chars,
      { opacity: 0, y: 40, rotateX: -90 },
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
    return <Tag ref={containerRef} className={className} style={style}>{children}</Tag>
  }

  // Split into words so line breaks only happen between words
  const words = children.split(/(\s+)/)

  return (
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
