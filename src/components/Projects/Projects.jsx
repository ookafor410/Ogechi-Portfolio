import mixedBag from '../../assets/images/mix-image.jpg'
import creativeComputingProjects from '../../assets/images/coding-image.png'
import photographyProjects from '../../assets/images/photo-image.png'
import writingProjects from '../../assets/images/writing-image.png'
import SectionHeader from '../SectionHeader/SectionHeader'
import CategoryRow from '../CategoryRow/CategoryRow'
import styles from './Projects.module.css'

const CATEGORIES = [
  {
    image: creativeComputingProjects,
    alt: 'Close-up of a weathered metal drill bit connector against a dark background',
    number: '01',
    title: 'Creative Computing',
    description: 'All things problem solving',
    imageFit: 'contain',
    imagePosition: '70% 90%',
    imageZoom: 3,
  },
  {
    image: photographyProjects,
    alt: 'Close-up of a weathered metal drill bit connector against a dark background',
    number: '01',
    title: 'Photography',
    description: 'All things problem solving',
    imageFit: 'contain',
    imagePosition: '30% 90%',
    imageZoom: 2.5,
  },
  {
    image: writingProjects,
    alt: 'A collage of colorful vintage bottle caps from breweries around the world',
    number: '02',
    title: 'Writing',
    description: 'All things pretty and pretty easy to understand',
    imagePosition: 'top left',
    imageZoom: 1,
  },
  {
    image: mixedBag,
    alt: 'An embroidered fabric patch styled like a vintage safety match box label',
    number: '03',
    title: 'Mixed Bag!',
    description: 'Shenanigans and Tomfoolery',
    imageFit: 'contain',
    imagePosition: '50% 40%',
    imageZoom: 2.5,
  },
]

export default function Projects() {
  return (
    <section className={styles.section} aria-label="Projects by category">
      <SectionHeader title="Projects" />
      <div className={styles.list}>
        {CATEGORIES.map((category) => (
          <CategoryRow key={category.number} {...category} />
        ))}
      </div>
    </section>
  )
}
