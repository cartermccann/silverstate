import { useRef, useEffect, Children, type ReactNode, type CSSProperties } from 'react'
import gsap from 'gsap'

interface CardStackProps {
  children?: ReactNode
  topStart?: number
  topStep?: number
  scaleTarget?: number
  gap?: number
  style?: CSSProperties
}

export default function CardStack({ children, topStart = 120, topStep = 20, scaleTarget = 0.95, gap = 40, style }: CardStackProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
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
  }, [scaleTarget])

  return (
    <div ref={ref} style={{ position: 'relative', ...style }}>
      {Children.map(children, (child, i) => (
        <div
          className="card-stack-item"
          style={{
            position: 'sticky',
            top: topStart + i * topStep,
            zIndex: i + 1,
            transformOrigin: 'top center',
            marginBottom: gap,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
