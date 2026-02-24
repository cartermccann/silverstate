import { useRef, useEffect } from 'react'

interface ScrollProgressProps {
  color?: string
  height?: number
}

/**
 * Thin scroll progress bar at the top of the page.
 * Shows how far through the page the user has scrolled.
 */
export default function ScrollProgress({ color = 'var(--blue)', height = 3 }: ScrollProgressProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      ref.current.style.width = `${progress}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height,
        zIndex: 9999,
        background: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <div
        ref={ref}
        style={{
          height: '100%',
          width: '0%',
          background: color,
          transition: 'width 0.05s linear',
          willChange: 'width',
        }}
      />
    </div>
  )
}
