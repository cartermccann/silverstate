import { useRef, useState, type ReactNode, type CSSProperties } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

interface MagneticButtonProps {
  children?: ReactNode
  strength?: number
  className?: string
  style?: CSSProperties
  as?: 'div' | 'button' | 'a'
}

export default function MagneticButton({
  children,
  strength = 0.3,
  className,
  style,
  as = 'div',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const [isHovered, setIsHovered] = useState(false)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const moveX = e.clientX - rect.left - rect.width / 2
    const moveY = e.clientY - rect.top - rect.height / 2

    x.set(moveX * strength)
    y.set(moveY * strength)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const MotionTag = as === 'button' ? motion.button
                  : as === 'a' ? motion.a
                  : motion.div

  return (
    <MotionTag
      ref={ref as React.RefObject<never>}
      className={className}
      style={{
        display: 'inline-block',
        x: springX,
        y: springY,
        scale: isHovered ? 1.02 : 1,
        ...style,
      }}
      transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </MotionTag>
  )
}
