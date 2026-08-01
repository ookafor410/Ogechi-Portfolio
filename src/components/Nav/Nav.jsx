import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'CV', href: '#' },
  { label: 'Work', to: '/work' },
  { label: 'Photobook', to: '/photobook' },
  { label: 'About', to: '/about' },
]

const SCROLL_THRESHOLD = 40

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
        <Link className={styles.brand} to="/">
          Ogechi Okafor
        </Link>
        {scrolled && <div className={styles.divider} aria-hidden="true" />}
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link className={styles.link} to={link.to}>
                  {link.label}
                </Link>
              ) : (
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
