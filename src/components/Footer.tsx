import { site } from '../data/portfolio.ts'
import styles from './Footer.module.css'

/** Year is captured when the page loads, so it stays current without a manual edit. */
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.row}`}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.tagline}>{site.footerTagline}</p>
          <p className={styles.copy}>© {year}</p>
        </div>
        <ul className={styles.links}>
          <li>
            <a href={site.githubUrl}>GitHub</a>
          </li>
          <li>
            <a href={site.linkedinUrl}>LinkedIn</a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
