import { experience } from '../data/portfolio.ts'
import styles from './Experience.module.css'

/** A single timeline column. The rail is decorative; the text carries the content. */
export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="wrap">
        <p className={styles.kicker}>04</p>
        <h2 id="experience-heading" className={styles.title}>
          Experience
        </h2>
        {experience.length === 0 ? (
          <p className={styles.empty}>Experience will be listed here.</p>
        ) : (
          <ol className={styles.list}>
            {experience.map((job) => (
              <li className={styles.item} key={job.id}>
                <div className={styles.rail} aria-hidden="true">
                  <span className={styles.dot} />
                </div>
                <article>
                  <p className={styles.when}>{job.duration}</p>
                  <h3 className={styles.organization}>{job.organization}</h3>
                  <p className={styles.role}>{job.role}</p>
                  <p className={styles.product}>
                    <span>Project</span>
                    {job.product}
                  </p>
                  <ul className={styles.highlights}>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
