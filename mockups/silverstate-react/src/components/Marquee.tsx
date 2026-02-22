import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react'
import { gsap } from 'gsap'

interface MarqueeProps {
  children?: ReactNode
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  gap?: number
  className?: string
  style?: CSSProperties
}

export default function Marquee({
  children,
  speed = 60,
  direction = 'left',
  pauseOnHover = true,
  gap = 48,
  className,
  style,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const track = trackRef.current
    if (!track) return

    requestAnimationFrame(() => {
      const contentWidth = track.scrollWidth / 2
      const duration = contentWidth / speed

      const tween = gsap.to(track, {
        x: direction === 'left' ? -contentWidth : contentWidth,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            return direction === 'left'
              ? ((parseFloat(x) % contentWidth) + contentWidth) % contentWidth * -1
              : parseFloat(x) % contentWidth
          }),
        },
      })

      tweenRef.current = tween
    })

    return () => {
      tweenRef.current?.kill()
    }
  }, [speed, direction])

  const handleMouseEnter = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.4 })
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover && tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4 })
    }
  }

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        width: '100%',
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap,
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
