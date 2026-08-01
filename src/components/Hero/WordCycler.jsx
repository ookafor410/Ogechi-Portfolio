import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const WORDS = ['technology', 'photography', 'journalism', 'experience design', 'marketing', 'architecture', 'history', 'fashion', 'cinematography']
const INTERVAL_MS = 2200

export default function WordCycler() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % WORDS.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={styles.wordCycler} aria-live="off">
      <span key={index} className={styles.wordCyclerItem}>
        {WORDS[index]}
      </span>
    </span>
  )
}
