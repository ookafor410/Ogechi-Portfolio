import { useState } from 'react'
import ShaderBackground from '../ShaderBackground/ShaderBackground'
import WordCycler from './WordCycler'
import styles from './Hero.module.css'

export default function Hero() {
  const [gradientReady, setGradientReady] = useState(false)

  return (
    <section className={styles.hero} aria-label="Introduction">
      <ShaderBackground onReady={() => setGradientReady(true)} />
      <div className={`${styles.wrapper} ${gradientReady ? styles.ready : ''}`}>
        <h1 className={styles.heading}>
          <span className={styles.line}>Welcome to my world of experiments :)</span>
          <span className={styles.line}>
            Always exploring ... <WordCycler />
          </span>
        </h1>
      </div>
    </section>
  )
}
