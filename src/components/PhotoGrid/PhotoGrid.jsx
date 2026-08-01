import styles from './PhotoGrid.module.css'

export default function PhotoGrid({ photos }) {
  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
        <figure key={photo.alt} className={styles.item}>
          <img className={styles.image} src={photo.src} alt={photo.alt} loading="lazy" />
          <figcaption className={styles.caption}>{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}
