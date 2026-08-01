import Tag from '../Tag/Tag'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  image,
  alt,
  tags = [],
  title,
  description,
  size = 'half',
  href = '#',
}) {
  return (
    <a className={`${styles.card} ${styles[size]}`} href={href}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={alt} loading="lazy" />
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className={styles.titles}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </a>
  )
}
