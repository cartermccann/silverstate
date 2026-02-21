import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const presets = {
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
  // New dramatic presets
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
}

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className,
  as: Tag = 'div',
  style,
  triggerStart = 'top 85%',
  once = true,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const preset = presets[variant] || presets.fadeUp

    gsap.fromTo(el, preset.from, {
      ...preset.to,
      duration,
      delay,
      ease: 'power3.out',
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

export function StaggerGroup({
  children,
  className,
  style,
  stagger = 0.1,
  triggerStart = 'top 85%',
  variant = 'fadeUp',
  duration = 0.7,
}) {
  const ref = useRef(null)

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
      duration,
      stagger,
      ease: 'power3.out',
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

export function StaggerItem({ children, className, style }) {
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
