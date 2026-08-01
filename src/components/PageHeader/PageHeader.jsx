import styles from './PageHeader.module.css'

export default function PageHeader({ title, aside }) {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <h1 className={styles.title}>{title}</h1>
        {aside && <div className={styles.aside}>{aside}</div>}
      </div>
    </div>
  )
}
