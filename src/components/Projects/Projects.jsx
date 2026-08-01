import productDesign from '../../assets/images/category-product-design.png'
import visualDesign from '../../assets/images/category-visual-design.png'
import mixedBag from '../../assets/images/category-mixed-bag.png'
import SectionHeader from '../SectionHeader/SectionHeader'
import CategoryRow from '../CategoryRow/CategoryRow'
import styles from './Projects.module.css'

const CATEGORIES = [
  {
    image: productDesign,
    alt: 'Close-up of a weathered metal drill bit connector against a dark background',
    number: '01',
    title: 'Product Design',
    description: 'All things problem solving',
  },
  {
    image: visualDesign,
    alt: 'A collage of colorful vintage bottle caps from breweries around the world',
    number: '02',
    title: 'Visual Design',
    description: 'All things pretty and pretty easy to understand',
  },
  {
    image: mixedBag,
    alt: 'An embroidered fabric patch styled like a vintage safety match box label',
    number: '03',
    title: 'Mixed Bag!',
    description: 'Shenanigans and Tomfoolery',
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
