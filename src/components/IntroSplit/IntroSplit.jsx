import portrait from '../../assets/images/portrait.jpg'
import RevealLink from '../RevealLink/RevealLink'
import styles from './IntroSplit.module.css'

export default function IntroSplit() {
  return (
    <section className={styles.section} aria-label="About">
      <div className={styles.text}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Hello there!</h2>
          <p className={styles.bio}>
            I'm Ogechi Okafor. I am a multidisciplinary builder and visual storyteller based in
            New York City. I combine journalism, design, and technology to create stories across
            photography, software, video, and data. My work explores how people interact with
            content and how storytelling can be more human, immersive, and impactful in a digital
            world. I enjoy interdisciplinary work as it helps me understand multiple perspectives
            and approaches to design, life and everything in between.
          </p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.caption}>↓ What I'm upto when I'm not creating</p>
          <RevealLink href="#toolkit" variant="upper">
            Learn more
          </RevealLink>
        </div>
      </div>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={portrait}
          alt="Ogechi Okafor smiling in a library, wearing glasses and a baseball cap"
        />
      </div>
    </section>
  )
}
