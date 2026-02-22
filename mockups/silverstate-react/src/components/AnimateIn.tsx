import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { AnimationVariant, AnimationPreset } from '../types'

gsap.registerPlugin(ScrollTrigger)

const presets: Record<AnimationVariant, AnimationPreset> = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0 },
  },
  fadeRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0 },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
  },
  slideUp: {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  },
  rotateIn: {
    from: { opacity: 0, y: 40, rotateX: -15 },
    to: { opacity: 1, y: 0, rotateX: 0 },
  },
  blurUp: {
    from: { opacity: 0, y: 40, filter: 'blur(10px)' },
    to: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  springUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    ease: 'cubic-bezier(.34, 1.56, .64, 1)',
    duration: 0.5,
  },
  springDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
    ease: 'cubic-bezier(.34, 1.56, .64, 1)',
    duration: 0.5,
  },
  clipUp: {
    from: { clipPath: 'inset(100% 0 0 0)' },
    to: { clipPath: 'inset(0% 0 0 0)' },
    ease: 'power3.inOut',
    duration: 1.2,
  },
}

interface AnimateInProps {
  children?: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  as?: string
  style?: CSSProperties
  triggerStart?: string
  once?: boolean
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 1.0,
  className,
  as: Tag = 'div',
  style,
  triggerStart = 'top 85%',
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const preset = presets[variant] || presets.fadeUp

    gsap.fromTo(el, preset.from, {
      ...preset.to,
      duration: preset.duration || duration,
      delay,
      ease: preset.ease || 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        once,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [variant, delay, duration, triggerStart, once])

  return (
    // @ts-expect-error -- polymorphic ref for arbitrary intrinsic elements
    <Tag
      ref={ref}
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}

interface StaggerGroupProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  stagger?: number
  triggerStart?: string
  variant?: AnimationVariant
  duration?: number
}

export function StaggerGroup({
  children,
  className,
  style,
  stagger = 0.15,
  triggerStart = 'top 85%',
  variant = 'fadeUp',
  duration = 1.0,
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll(':scope > .stagger-item')
    if (!items.length) return

    const preset = presets[variant] || presets.fadeUp

    gsap.fromTo(items, preset.from, {
      ...preset.to,
      duration: preset.duration || duration,
      stagger,
      ease: preset.ease || 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        once: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [stagger, triggerStart, variant, duration])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

interface StaggerItemProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export function StaggerItem({ children, className, style }: StaggerItemProps) {
  return (
    <div
      className={`stagger-item ${className || ''}`}
      style={{
        willChange: 'transform, opacity',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
