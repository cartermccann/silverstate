import { useRef, useEffect, useState } from 'react'
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
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(`${prefix}${end}${suffix}`)
      return
    }

    const el = ref.current
    if (!el) return

    const numericEnd = typeof end === 'number' ? end : parseFloat(end)
    if (isNaN(numericEnd)) {
      setDisplay(`${prefix}${end}${suffix}`)
      return
    }

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
              `${prefix}${isFloat ? counter.value.toFixed(1) : Math.round(counter.value)}${suffix}`
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
  }, [end, suffix, prefix, duration, triggerStart])

  return <span ref={ref}>{display}</span>
}
