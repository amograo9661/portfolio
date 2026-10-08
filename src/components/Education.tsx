import { education } from '../data/portfolio.ts'
import styles from './Education.module.css'

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="wrap">
        <p className={styles.kicker}>05</p>
        <h2 id="education-heading" className={styles.title}>
          Education
        </h2>
        {education.length === 0 ? (
          <p className={styles.empty}>Education will be listed here.</p>
        ) : (
          education.map((record) => (
            <article key={record.id}>
              <h3 className={styles.institution}>{record.institution}</h3>
              <p className={styles.degree}>
                {record.degree}
                <br />
                {record.specialization}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>Years</dt>
                  <dd>{record.period}</dd>
                </div>
                <div>
                  <dt>CGPA</dt>
                  <dd>{record.cgpa}</dd>
                </div>
                <div>
                  <dt>Expected graduation</dt>
                  <dd>{record.expectedGraduation}</dd>
                </div>
              </dl>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
