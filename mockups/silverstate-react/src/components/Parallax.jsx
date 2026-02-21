import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-driven parallax for images and sections.
 *
 * Props:
 * - speed: number — parallax multiplier (default 0.3, higher = more movement)
 * - direction: 'up' | 'down' (default 'up')
 * - scale: boolean — also scale on scroll (default false)
 * - scaleFrom: number — starting scale (default 1.15)
 * - scaleTo: number — ending scale (default 1)
 * - className, style: passthrough
 * - overflow: 'hidden' | 'visible' (default 'hidden')
 */
export default function Parallax({
  children,
  speed = 0.3,
  direction = 'up',
  scale = false,
  scaleFrom = 1.15,
  scaleTo = 1,
  className,
  style,
  overflow = 'hidden',
}) {
  const containerRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const distance = 100 * speed
    const yFrom = direction === 'up' ? distance : -distance
    const yTo = direction === 'up' ? -distance : distance

    const props = {
      y: yTo,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }

    if (scale) {
      props.scale = scaleTo
    }

    gsap.fromTo(
      inner,
      {
        y: yFrom,
        ...(scale ? { scale: scaleFrom } : {}),
      },
      props
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill()
      })
    }
  }, [speed, direction, scale, scaleFrom, scaleTo])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow,
        position: 'relative',
        ...style,
      }}
    >
      <div
        ref={innerRef}
        style={{
          willChange: 'transform',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Reveal-on-scroll with clip-path wipe.
 * Creates a curtain-reveal effect as the element enters the viewport.
 */
export function ClipReveal({
  children,
  className,
  style,
  direction = 'up', // 'up' | 'left' | 'right'
  duration = 1,
  triggerStart = 'top 80%',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const clipPaths = {
      up: {
        from: 'inset(100% 0 0 0)',
        to: 'inset(0% 0 0 0)',
      },
      left: {
        from: 'inset(0 100% 0 0)',
        to: 'inset(0 0% 0 0)',
      },
      right: {
        from: 'inset(0 0 0 100%)',
        to: 'inset(0 0 0 0%)',
      },
    }

    const cp = clipPaths[direction] || clipPaths.up

    gsap.fromTo(
      el,
      { clipPath: cp.from, opacity: 0 },
      {
        clipPath: cp.to,
        opacity: 1,
        duration,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          once: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [direction, duration, triggerStart])

  return (
    <div ref={ref} className={className} style={{ willChange: 'clip-path, opacity', ...style }}>
      {children}
    </div>
  )
}
