import aboutPortrait from '../../assets/images/about-portrait.jpg'
import inspireArt from '../../assets/images/inspire-art-in-everyday.jpg'
import inspireTalking from '../../assets/images/inspire-interacting-talking-with-people.jpg'
import inspireArchitecture from '../../assets/images/inspire-maximalist-architecture.jpg'
import inspireFashion from '../../assets/images/inspire-maximalist-color-fashion.jpg'
import inspireRepetition from '../../assets/images/inspire-repetition-everyday.jpg'
import inspireRetroTech from '../../assets/images/inspire-retro-tech.jpg'
import inspireStillness from '../../assets/images/inspire-stillness-among-movement.jpg'
import inspireTopography from '../../assets/images/inspire-topography-mapping.jpg'
import RevealLink from '../RevealLink/RevealLink'
import PhotoGrid from '../PhotoGrid/PhotoGrid'
import styles from './AboutPage.module.css'

const INSPIRATION_PHOTOS = [
  {
    src: inspireArt,
    alt: 'An illustrated cartoon character glancing back, composited over a photo of a busy street with tangled overhead power lines',
    caption: 'Art in the everyday',
  },
  {
    src: inspireTalking,
    alt: 'A crowd of people laughing and holding hands together outdoors under trees',
    caption: 'Talking to people',
  },
  {
    src: inspireArchitecture,
    alt: 'The angular, moss-green concrete interior of a library with dramatic geometric ceilings',
    caption: 'Maximalist architecture',
  },
  {
    src: inspireFashion,
    alt: 'A woman in a bold leopard-print outfit standing in front of a matching leopard-print backdrop and a vintage TV',
    caption: 'Maximalist color and fashion',
  },
  {
    src: inspireRepetition,
    alt: 'A weathered green double door with matching scrollwork ironwork panels',
    caption: 'Repetition in the everyday',
  },
  {
    src: inspireRetroTech,
    alt: 'A vintage silver laptop with its CD drive open, next to an old flip phone and a Japanese anime magazine',
    caption: 'Retro tech',
  },
  {
    src: inspireStillness,
    alt: 'A child standing still and looking at the camera while a crowd moves in a blur around them',
    caption: 'Stillness among movement',
  },
  {
    src: inspireTopography,
    alt: 'A textured 3D relief map with contour lines showing mountainous terrain',
    caption: 'Topography and mapping',
  },
]

export default function AboutPage() {
  return (
    <section aria-label="About" className={styles.section}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>
          I'm Ogechi Okafor. I am a multidisciplinary builder and visual storyteller based in New
          York City. I combine journalism, design, and technology to create stories across
          photography, software, video, and data. My work explores how people interact with
          content and how storytelling can be more human, immersive, and impactful in a digital
          world. I enjoy interdisciplinary work as it helps me understand multiple perspectives
          and approaches to design, life and everything in between.
        </h1>
        <div className={styles.imageWrap}>
          <img
            className={styles.image}
            src={aboutPortrait}
            alt="Ogechi Okafor smiling outdoors, wearing glasses and a France jersey"
          />
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.lead}>
          If you're interested in doing something together or discussing a project, please
          contact
        </p>
        <RevealLink href="mailto:hello@ogechiokafor.com" variant="email">
          hello@ogechiokafor.com
        </RevealLink>
      </div>
      <div className={styles.inspire}>
        <h2 className={styles.inspireHeading}>
          <span className={styles.inspireHeadingLine}>Things that inspire</span>
          <span className={styles.inspireHeadingLine}>or itch my creative side</span>
        </h2>
        <PhotoGrid photos={INSPIRATION_PHOTOS} />
      </div>
    </section>
  )
}
