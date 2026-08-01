import styles from './Toolkit.module.css'

export default function ToolIcon({ label, image }) {
  return (
    <div className={styles.chip}>
      <img className={styles.icon} src={image} alt={label} />
    </div>
  )
}
