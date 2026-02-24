import { useRef, useEffect, Children, type ReactNode, type CSSProperties } from 'react'
import gsap from 'gsap'
import useIsMobile from '../hooks/useIsMobile'

interface CardStackProps {
  children?: ReactNode
  topStart?: number
  topStep?: number
  scaleTarget?: number
  gap?: number
  style?: CSSProperties
}

export default function CardStack({
  children,
  topStart = 120,
  topStep = 20,
  scaleTarget = 0.95,
  gap = 40,
  style,
}: CardStackProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // On mobile, pull sticky top closer to the nav and tighten the step
  const effectiveTopStart = isMobile ? 72 : topStart
  const effectiveTopStep = isMobile ? 10 : topStep
  const effectiveGap = isMobile ? 24 : gap

  useEffect(() => {
    if (!ref.current) return

    // Skip the scale-down scrub on mobile — it causes jank with
    // touch scrolling and doesn't add much value on narrow viewports.
    if (isMobile) return

    const ctx = gsap.context(() => {
      const cards = ref.current!.querySelectorAll(':scope > .card-stack-item')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scale: scaleTarget,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, ref.current)
    return () => ctx.revert()
  }, [scaleTarget, isMobile])

  return (
    <div ref={ref} style={{ position: 'relative', ...style }}>
      {Children.map(children, (child, i) => (
        <div
          className="card-stack-item"
          style={{
            position: 'sticky',
            top: effectiveTopStart + i * effectiveTopStep,
            zIndex: i + 1,
            transformOrigin: 'top center',
            marginBottom: effectiveGap,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
