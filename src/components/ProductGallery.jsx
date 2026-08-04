import { useEffect, useRef, useState } from 'react'

function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const trackRef = useRef(null)
  const lightboxTrackRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!lightboxOpen) return

    const el = lightboxTrackRef.current
    if (el) el.scrollTo({ left: active * el.clientWidth })

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (images.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
          In arrivo
        </span>
      </div>
    )
  }

  const scheduleActiveUpdate = (el) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const index = Math.round(el.scrollLeft / el.clientWidth)
      setActive((current) => (current === index ? current : index))
    })
  }

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    scheduleActiveUpdate(el)
  }

  const handleLightboxScroll = () => {
    const el = lightboxTrackRef.current
    if (!el) return
    scheduleActiveUpdate(el)
  }

  const goTo = (index) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative h-full w-full">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch]"
      >
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Apri a schermo intero — foto ${index + 1} di ${images.length}`}
            className="h-full w-full flex-none snap-center"
          >
            <img
              src={src}
              alt={`${name} — foto ${index + 1} di ${images.length}`}
              loading="eager"
              decoding="async"
              className="h-full w-full object-contain [backface-visibility:hidden] [transform:translateZ(0)]"
            />
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center gap-1.5 bg-gradient-to-t from-scuro/40 to-transparent px-gutter pb-3 pt-8">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Vai alla foto ${index + 1}`}
              onClick={() => goTo(index)}
              className={`pointer-events-auto h-[3px] max-w-8 flex-1 transition-colors ${
                index === active ? 'bg-oro' : 'bg-crema/50'
              }`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-scuro/95">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Chiudi"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-crema/70 transition-colors hover:text-oro"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div
            ref={lightboxTrackRef}
            onScroll={handleLightboxScroll}
            className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [-webkit-overflow-scrolling:touch]"
          >
            {images.map((src, index) => (
              <div key={src} className="flex h-full w-full flex-none snap-center items-center justify-center px-gutter">
                <img
                  src={src}
                  alt={`${name} — foto ${index + 1} di ${images.length}`}
                  loading="eager"
                  decoding="async"
                  className="max-h-full max-w-full object-contain [backface-visibility:hidden] [transform:translateZ(0)]"
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-1.5 px-gutter">
              {images.map((src, index) => (
                <span
                  key={src}
                  className={`h-[3px] max-w-8 flex-1 transition-colors ${
                    index === active ? 'bg-oro' : 'bg-crema/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
