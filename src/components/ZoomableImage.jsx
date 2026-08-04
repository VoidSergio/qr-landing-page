import { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const FILL_STYLE = { width: '100%', height: '100%' }

const wheelActivationKeys = (pressedKeys) => pressedKeys.includes('Control') || pressedKeys.includes('Meta')

function ZoomableImage({ src, alt, isActive, onZoomChange }) {
  const transformRef = useRef(null)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!isActive) transformRef.current?.resetTransform(0)
  }, [isActive])

  useEffect(() => {
    onZoomChange?.(zoomed)
  }, [zoomed, onZoomChange])

  return (
    <TransformWrapper
      ref={transformRef}
      initialScale={1}
      minScale={1}
      maxScale={4}
      centerOnInit
      limitToBounds
      doubleClick={{ mode: 'toggle', step: 3, animationTime: 200 }}
      panning={{ disabled: !zoomed, velocityDisabled: true }}
      pinch={{ step: 5 }}
      wheel={{ step: 0.2, activationKeys: wheelActivationKeys }}
      onTransform={(_, state) => setZoomed(state.scale > 1.01)}
    >
      <TransformComponent wrapperStyle={FILL_STYLE} contentStyle={FILL_STYLE}>
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          draggable={false}
          className="h-full w-full object-contain"
        />
      </TransformComponent>
    </TransformWrapper>
  )
}

export default ZoomableImage
