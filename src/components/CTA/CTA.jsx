import RevealLink from '../RevealLink/RevealLink'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <h2 className={styles.heading}>Have an idea that would be even more amazing if we pair up?</h2>
      <RevealLink href="mailto:hello@ogechiokafor.com" variant="pill">
        Let's work together!
      </RevealLink>
    </section>
  )
}
