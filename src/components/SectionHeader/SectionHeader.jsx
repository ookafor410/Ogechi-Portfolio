import styles from './SectionHeader.module.css'

export default function SectionHeader({ title, id, bordered = true }) {
  return (
    <div className={`${styles.header} ${bordered ? styles.bordered : ''}`} id={id}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
