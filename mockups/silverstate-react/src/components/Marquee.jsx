import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

/**
 * Infinite horizontal marquee scroll (maze.co style).
 * Duplicates children for seamless loop.
 *
 * Props:
 * - speed: number — pixels per second (default 60)
 * - direction: 'left' | 'right' (default 'left')
 * - pauseOnHover: boolean (default true)
 * - gap: number — gap between items in px (default 48)
 * - className, style: passthrough
 */
export default function Marquee({
  children,
  speed = 60,
  direction = 'left',
  pauseOnHover = true,
  gap = 48,
  className,
  style,
}) {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const track = trackRef.current
    if (!track) return

    // Wait for layout
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
        {/* Original */}
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  )
}
