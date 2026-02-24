import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isTouchDevice } from '../hooks/useIsMobile'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxProps {
  children?: ReactNode
  speed?: number
  direction?: 'up' | 'down'
  scale?: boolean
  scaleFrom?: number
  scaleTo?: number
  className?: string
  style?: CSSProperties
  overflow?: 'hidden' | 'visible'
}

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
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const isTouch = isTouchDevice()

    // Halve parallax speed on touch — scrub fights momentum scrolling
    const effectiveSpeed = isTouch ? speed * 0.4 : speed
    const distance = 100 * effectiveSpeed
    const yFrom = direction === 'up' ? distance : -distance
    const yTo = direction === 'up' ? -distance : distance

    // Disable scale on touch — combined transforms are expensive on mobile GPU
    const useScale = scale && !isTouch

    const props: gsap.TweenVars = {
      y: yTo,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }

    if (useScale) {
      props.scale = scaleTo
    }

    gsap.fromTo(
      inner,
      {
        y: yFrom,
        ...(useScale ? { scale: scaleFrom } : {}),
      },
      props,
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

interface ClipRevealProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  direction?: 'up' | 'left' | 'right'
  duration?: number
  triggerStart?: string
}

export function ClipReveal({
  children,
  className,
  style,
  direction = 'up',
  duration = 1,
  triggerStart = 'top 80%',
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const clipPaths: Record<string, { from: string; to: string }> = {
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

    const cp = clipPaths[direction] || clipPaths.up!

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
      },
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
