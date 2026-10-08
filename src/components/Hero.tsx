import portrait from '../assets/profile.jpg'
import { site } from '../data/portfolio.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import { joinLines, useTypingEffect } from '../hooks/useTypingEffect.ts'
import styles from './Hero.module.css'

/**
 * Identity screen: name and roles on the left, portrait on the right.
 * The typing line is the only major animation. Screen readers get one static sentence.
 * Replace src/assets/profile.jpg to use your own photo — the shipped image is a stand-in.
 */
export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const typed = useTypingEffect(site.typingLines, reducedMotion)
  const readableRoles = joinLines(site.typingLines)
  const visibleLine = reducedMotion ? readableRoles : typed

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
      <div className={`wrap ${styles.layout}`}>
        <div>
          <p className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {site.badge}
          </p>
          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.greeting}>{site.greeting}</span>
            <span className={styles.name}>{site.nameLine}</span>
          </h1>
          <p className="sr-only">{readableRoles}</p>
          <p className={styles.typed} aria-hidden="true">
            {visibleLine}
            {reducedMotion ? null : <span className={styles.caret} />}
          </p>
          <p className={styles.intro}>{site.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projects">
              View Projects
            </a>
            <a className={styles.secondary} href="#contact">
              Contact Me
            </a>
          </div>
          <ul className={styles.tags} aria-label="Focus areas">
            {site.techTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden="true" />
          <span className={`${styles.orb} ${styles.orbA}`} aria-hidden="true" />
          <span className={`${styles.orb} ${styles.orbB}`} aria-hidden="true" />
          <span className={styles.rule} aria-hidden="true" />
          <img
            className={styles.portrait}
            src={portrait}
            alt={site.portraitAlt}
            width={864}
            height={1152}
          />
          <p className={styles.discipline}>
            {site.portraitLines[0]}
            <br />
            {site.portraitLines[1]}
          </p>
          <p className={styles.focus}>{site.portraitFocus}</p>
        </div>
      </div>
    </section>
  )
}
