import { useState } from 'react'
import KeyButton from './KeyButton'
import { ROW_1, ROW_2, ROW_3 } from './keys'
import styles from './Keyboard.module.css'

const DEFAULT_LABEL = 'Hover a key to explore'

export default function Keyboard() {
  const [activePhrase, setActivePhrase] = useState(null)

  return (
    <section className={styles.section} aria-label="Interactive keyboard — reveal a phrase per key">
      <div className={styles.display}>
        <span className={styles.ornament} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.rod} />
        </span>
        <p className={styles.label} aria-live="polite">
          {activePhrase ?? DEFAULT_LABEL}
        </p>
        <span className={styles.ornament} aria-hidden="true">
          <span className={styles.rod} />
          <span className={styles.dot} />
        </span>
      </div>
      <div className={styles.rows}>
        <div className={styles.row}>
          {ROW_1.map((key) => (
            <KeyButton key={key.letter} {...key} onActivate={setActivePhrase} />
          ))}
        </div>
        <div className={styles.row}>
          {ROW_2.map((key) => (
            <KeyButton key={key.letter} {...key} onActivate={setActivePhrase} />
          ))}
        </div>
        <div className={styles.row}>
          {ROW_3.map((key) => (
            <KeyButton key={key.letter} {...key} onActivate={setActivePhrase} />
          ))}
        </div>
      </div>
    </section>
  )
}
