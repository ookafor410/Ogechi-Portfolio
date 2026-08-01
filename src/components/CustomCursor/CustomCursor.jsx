import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    if (!canHover) return

    setEnabled(true)
    document.body.classList.add(styles.hideNativeCursor)

    const handleMove = (event) => {
      const dot = dotRef.current
      if (!dot) return
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      dot.style.opacity = '1'
    }

    const handleLeave = () => {
      const dot = dotRef.current
      if (dot) dot.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.body.classList.remove(styles.hideNativeCursor)
    }
  }, [])

  if (!enabled) return null

  return <div className={styles.dot} ref={dotRef} aria-hidden="true" />
}
