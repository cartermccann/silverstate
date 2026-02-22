import { useEffect, useCallback } from 'react'
import type { LightboxImage } from '../types'

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[index]!

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && index > 0) onPrev()
    if (e.key === 'ArrowRight' && index < images.length - 1) onNext()
  }, [onClose, onPrev, onNext, index, images.length])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Ambient blur background */}
      <div
        className="lightbox-bg"
        style={{ backgroundImage: `url(${current.src})` }}
      />

      {/* Main image */}
      <img
        key={current.src}
        src={current.src}
        alt={current.alt || ''}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Close */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        &#x2715;
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          className="lightbox-nav lightbox-nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          &#8592;
        </button>
      )}

      {/* Next */}
      {index < images.length - 1 && (
        <button
          className="lightbox-nav lightbox-nav--next"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          &#8594;
        </button>
      )}

      {/* Caption */}
      {current.caption && (
        <span className="lightbox-caption">{current.caption}</span>
      )}
    </div>
  )
}
