import { useState, useMemo, type CSSProperties } from 'react'
import type { GalleryCategory } from '../data/facility-gallery'
import { galleryCategories as defaultCategories } from '../data/facility-gallery'
import useIsMobile from '../hooks/useIsMobile'
import Lightbox from './Lightbox'

interface FacilityGalleryProps {
  categories?: GalleryCategory[]
  maxPerCategory?: number
  showCategoryTabs?: boolean
  fullWidth?: boolean
}

const ALL_SLUG = '__all__'

export default function FacilityGallery({
  categories = defaultCategories,
  maxPerCategory,
  showCategoryTabs = true,
  fullWidth = true,
}: FacilityGalleryProps) {
  const isMobile = useIsMobile()
  const isTablet = useIsMobile(1100)
  const [activeSlug, setActiveSlug] = useState(ALL_SLUG)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  /* Visible images based on active filter + optional limit */
  const visibleImages = useMemo(() => {
    const cats = activeSlug === ALL_SLUG ? categories : categories.filter((c) => c.slug === activeSlug)
    return cats.flatMap((c) => (maxPerCategory ? c.images.slice(0, maxPerCategory) : c.images))
  }, [activeSlug, categories, maxPerCategory])

  /* Grid columns */
  const columns = isMobile ? 1 : isTablet ? 2 : 3

  /* ── Styles ── */

  const wrapperStyle: CSSProperties = fullWidth
    ? { width: '100vw', marginLeft: 'calc(-50vw + 50%)' }
    : {}

  const tabBarStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    padding: '0 16px 24px',
  }

  const tabStyle = (active: boolean): CSSProperties => ({
    padding: '8px 18px',
    borderRadius: 999,
    border: active ? '2px solid var(--accent, #2563eb)' : '2px solid var(--stroke, #e0e0e0)',
    background: active ? 'var(--accent, #2563eb)' : 'transparent',
    color: active ? '#fff' : 'var(--body, #333)',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  })

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 4,
  }

  const cellStyle: CSSProperties = {
    overflow: 'hidden',
    position: 'relative',
  }

  const imgStyle: CSSProperties = {
    width: '100%',
    aspectRatio: '16 / 10',
    objectFit: 'cover',
    display: 'block',
    cursor: 'pointer',
    transition: 'transform 0.35s ease',
  }

  return (
    <div style={wrapperStyle}>
      {/* ── Category tabs ── */}
      {showCategoryTabs && (
        <div style={tabBarStyle}>
          <button
            type="button"
            style={tabStyle(activeSlug === ALL_SLUG)}
            onClick={() => setActiveSlug(ALL_SLUG)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              style={tabStyle(activeSlug === cat.slug)}
              onClick={() => setActiveSlug(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* ── Image grid ── */}
      <div style={gridStyle}>
        {visibleImages.map((image, idx) => (
          <div
            key={image.src}
            style={cellStyle}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img')
              if (img) img.style.transform = 'scale(1)'
            }}
          >
            <img
              src={image.src}
              alt={image.alt || ''}
              loading="lazy"
              style={imgStyle}
              onClick={() => setLightboxIndex(idx)}
            />
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={visibleImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(visibleImages.length - 1, (i ?? 0) + 1))}
        />
      )}
    </div>
  )
}
