import { useRef, useState } from 'react'

function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  if (images.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="text-etichetta uppercase tracking-[0.28em] text-scuro/40">
          In arrivo
        </span>
      </div>
    )
  }

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    setActive(Math.round(el.scrollLeft / el.clientWidth))
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
        className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${name} — foto ${index + 1} di ${images.length}`}
            className="h-full w-full flex-none snap-center object-cover"
          />
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
    </div>
  )
}

export default ProductGallery
