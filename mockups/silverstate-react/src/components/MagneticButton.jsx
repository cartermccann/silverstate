import { useRef, useCallback } from 'react'

/**
 * Magnetic hover effect for buttons/links.
 * The element subtly follows the cursor when hovered (maze.co style).
 *
 * Props:
 * - children: React node
 * - strength: number — how much the element moves (default 0.3)
 * - className, style: passthrough
 * - as: string — element type (default 'div')
 */
export default function MagneticButton({
  children,
  strength = 0.3,
  className,
  style,
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.6, 0.3, 1)'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 400)
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        willChange: 'transform',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Tag>
  )
}
