import styles from './RevealLink.module.css'

export default function RevealLink({
  href,
  onClick,
  children,
  variant = 'upper',
  external = false,
  className = '',
}) {
  const Tag = href ? 'a' : 'button'
  const extraProps = href
    ? external
      ? { target: '_blank', rel: 'noreferrer' }
      : {}
    : { type: 'button' }

  return (
    <Tag
      className={`${styles.link} ${styles[variant]} ${className}`}
      href={href}
      onClick={onClick}
      {...extraProps}
    >
      <span className={styles.track}>
        <span className={styles.label}>{children}</span>
        <span className={styles.label} aria-hidden="true">
          {children}
        </span>
      </span>
    </Tag>
  )
}
