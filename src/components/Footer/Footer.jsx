import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const COLUMNS = [
  {
    heading: 'Pages',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Work', to: '/work' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/#contact' },
      { label: '404', href: '#' },
    ],
  },
  {
    heading: 'Socials',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Spotify', href: '#' },
    ],
  },
  {
    heading: 'Randomizer',
    links: [{ label: 'Press here', href: '#' }],
  },
]

function FooterColumn({ heading, links }) {
  return (
    <div className={styles.column}>
      <span className={styles.columnHeading}>{heading}</span>
      <ul className={styles.columnLinks}>
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link className={styles.columnLink} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <a className={styles.columnLink} href={link.href}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {COLUMNS.map((column) => (
          <FooterColumn key={column.heading} {...column} />
        ))}
      </div>
      <div className={styles.separator} aria-hidden="true" />
      <div className={styles.bottom}>
        <span className={styles.name}>Ogechi Okafor</span>
        <span className={styles.copyright}>© 2026 Ogechi Okafor. Made with a Chai in hand.</span>
      </div>
    </footer>
  )
}
