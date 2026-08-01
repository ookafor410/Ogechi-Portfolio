import styles from './Keyboard.module.css'

export default function KeyButton({ image, letter, phrase, onActivate }) {
  return (
    <button
      type="button"
      className={styles.key}
      onMouseEnter={() => onActivate(phrase)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(phrase)}
      onBlur={() => onActivate(null)}
      onClick={() => onActivate(phrase)}
      aria-label={`${letter}: ${phrase}`}
    >
      <img src={image} alt="" loading="lazy" />
    </button>
  )
}
