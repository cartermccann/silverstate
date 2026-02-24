import { useRef, useEffect, useState, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CountUpProps {
  end: number | string
  suffix?: string
  prefix?: string
  duration?: number
  triggerStart?: string
}

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  triggerStart = 'top 85%',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  const numericEnd = useMemo(() => (typeof end === 'number' ? end : parseFloat(String(end))), [end])
  const canAnimate = !isNaN(numericEnd)
  const prefersReduced = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )
  const shouldAnimate = canAnimate && !prefersReduced

  const [display, setDisplay] = useState(() =>
    shouldAnimate ? `${prefix}0${suffix}` : `${prefix}${end}${suffix}`,
  )

  useEffect(() => {
    if (!shouldAnimate) return

    const el = ref.current
    if (!el) return

    const isFloat = !Number.isInteger(numericEnd)
    const counter = { value: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: triggerStart,
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        gsap.to(counter, {
          value: numericEnd,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplay(
              `${prefix}${isFloat ? counter.value.toFixed(1) : Math.round(counter.value)}${suffix}`,
            )
          },
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [numericEnd, shouldAnimate, suffix, prefix, duration, triggerStart])

  return <span ref={ref}>{display}</span>
}
