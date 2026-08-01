import { Suspense, useEffect } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import styles from './ShaderBackground.module.css'

export default function ShaderBackground({ onReady }) {
  useEffect(() => {
    // shadergradient doesn't expose a load/ready callback, so we approximate
    // "the gradient has loaded" with a double rAF — that guarantees the
    // browser has painted at least one frame after this component mounted.
    let raf1
    let raf2 = null
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => onReady?.())
    })
    return () => {
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [onReady])

  return (
    // onWheelCapture stops the scroll (wheel) event before it reaches the
    // canvas — shadergradient's underlying camera-controls library dollies
    // (zooms) the camera on wheel by default, which would otherwise hijack
    // normal page scrolling and change the locked distance below.
    <div className={styles.wrapper} aria-hidden="true" onWheelCapture={(e) => e.stopPropagation()}>
      <Suspense fallback={null}>
        <ShaderGradientCanvas pixelDensity={1} fov={45} style={{ position: 'absolute', inset: 0 }}>
          <ShaderGradient
            control="props"
            type="plane"
            animate="on"
            color1="#ff8e59"
            color2="#d0bce1"
            color3="#dbba95"
            brightness={1.2}
            grain="on"
            lightType="3d"
            uDensity={1.3}
            uStrength={4}
            uSpeed={0.4}
            range="disabled"
            rangeStart={40}
            rangeEnd={40}
            cDistance={1.5}
            enableTransition={false}
            cAzimuthAngle={180}
            cPolarAngle={90}
            positionX={-1.4}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={50}
          />
        </ShaderGradientCanvas>
      </Suspense>
    </div>
  )
}
