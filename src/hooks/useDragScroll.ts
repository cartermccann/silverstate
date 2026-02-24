import { useState, useRef, useCallback } from 'react'

interface DragState {
  isDown: boolean
  startX: number
  scrollLeft: number
}

export default function useDragScroll(sensitivity = 1.5) {
  const ref = useRef<HTMLDivElement>(null)
  const dragState = useRef<DragState>({ isDown: false, startX: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    setIsDragging(true)
  }, [])

  const onMouseUp = useCallback(() => {
    dragState.current.isDown = false
    setIsDragging(false)
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragState.current.isDown) return
    e.preventDefault()
    const el = ref.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - dragState.current.startX) * sensitivity
    el.scrollLeft = dragState.current.scrollLeft - walk
  }, [sensitivity])

  return {
    ref,
    isDragging,
    handlers: {
      onMouseDown,
      onMouseUp,
      onMouseLeave: onMouseUp,
      onMouseMove,
    },
  }
}
