import { skills } from '../data/portfolio.ts'
import styles from './Skills.module.css'

/**
 * Skills are a definition list: category on the left, names in a single line.
 * They are not cards, and they are not a wall of pills.
 */
export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="wrap">
        <p className={styles.kicker}>02</p>
        <h2 id="skills-heading" className={styles.title}>
          Skills
        </h2>
        {skills.length === 0 ? (
          <p className={styles.empty}>Skills will be listed here.</p>
        ) : (
          <dl className={styles.groups}>
            {skills.map((skill) => (
              <div className={styles.group} key={skill.category}>
                <dt className={styles.category}>{skill.category}</dt>
                <dd>
                  <ul className={styles.items}>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
