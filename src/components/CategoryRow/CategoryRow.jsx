import styles from './CategoryRow.module.css'

export default function CategoryRow({
  image,
  alt,
  number,
  title,
  description,
  href = '#',
  imagePosition,
  imageZoom,
  imageFit,
}) {
  return (
    <a className={styles.row} href={href}>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={image}
          alt={alt}
          loading="lazy"
          style={{ '--img-position': imagePosition, '--img-zoom': imageZoom, '--img-fit': imageFit }}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.numberTitle}>
          <span className={styles.number}>{number}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  )
}
