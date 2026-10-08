import { about } from '../data/portfolio.ts'
import styles from './About.module.css'

/** Editorial intro: a large title, one statement, then the longer bio and interests. */
export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <p className={styles.kicker}>01</p>
        <h2 id="about-heading" className={styles.title}>
          {about.title}
        </h2>
        <div className={styles.layout}>
          <div>
            <p className={styles.statement}>{about.statement}</p>
            <p className={styles.body}>{about.body}</p>
          </div>
          <div className={styles.interests}>
            <p>{about.interestsLabel}</p>
            <ul>
              {about.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
