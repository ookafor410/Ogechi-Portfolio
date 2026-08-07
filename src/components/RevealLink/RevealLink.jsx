import { Link } from 'react-router-dom'
import styles from './RevealLink.module.css'

export default function RevealLink({
  href,
  onClick,
  children,
  variant = 'upper',
  external = false,
  download,
  className = '',
}) {
  const isInternalRoute = href && href.startsWith('/') && !external && !download
  const combinedClassName = `${styles.link} ${styles[variant]} ${className}`

  if (isInternalRoute) {
    return (
      <Link className={combinedClassName} to={href} onClick={onClick}>
        <span className={styles.track}>
          <span className={styles.label}>{children}</span>
          <span className={styles.label} aria-hidden="true">
            {children}
          </span>
        </span>
      </Link>
    )
  }

  const Tag = href ? 'a' : 'button'
  const extraProps = href
    ? {
        ...(external ? { target: '_blank', rel: 'noreferrer' } : {}),
        ...(download ? { download } : {}),
      }
    : { type: 'button' }

  return (
    <Tag
      className={combinedClassName}
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
