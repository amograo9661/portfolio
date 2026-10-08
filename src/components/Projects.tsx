import type { Project } from '../data/portfolio.ts'
import { projects } from '../data/portfolio.ts'
import styles from './Projects.module.css'

/**
 * The first project in portfolio.ts is the large feature.
 * The rest are a quieter index, so the section is not a grid of identical cards.
 * GitHub and live URLs are placeholders until you edit that file.
 */
export function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="wrap">
        <p className={styles.kicker}>03</p>
        <h2 id="projects-heading" className={styles.title}>
          Projects
        </h2>
        {projects.length === 0 || !featured ? (
          <p className={styles.empty}>Projects will be listed here.</p>
        ) : (
          <ol className={styles.list}>
            <li>
              <FeaturedProject project={featured} />
            </li>
            {rest.map((project, index) => (
              <li className={styles.row} key={project.id}>
                <p className={styles.index} aria-hidden="true">
                  {String(index + 2).padStart(2, '0')}
                </p>
                <ProjectSummary project={project} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const headingId = `project-${project.id}`

  return (
    <article className={styles.featured} aria-labelledby={headingId}>
      <p className={styles.watermark} aria-hidden="true">
        01
      </p>
      <div>
        <p className={project.status === 'in-progress' ? styles.status : styles.category}>
          {project.category}
        </p>
        <h3 className={styles.featuredTitle} id={headingId}>
          {project.title}
        </h3>
        <p className={styles.description}>{project.description}</p>
        <TechList project={project} />
        <p className={styles.actions}>
          <a className={styles.primary} href={project.githubUrl}>
            GitHub
          </a>
          <a className={styles.ghost} href={project.liveUrl}>
            Live demo
          </a>
        </p>
      </div>
      {project.features && project.features.length > 0 ? (
        <div className={styles.side}>
          <p className={styles.sideLabel}>Includes</p>
          <ul className={styles.features}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}

function ProjectSummary({ project }: { project: Project }) {
  const headingId = `project-${project.id}`

  return (
    <article aria-labelledby={headingId}>
      <div className={styles.rowHead}>
        <h3 className={styles.rowTitle} id={headingId}>
          {project.title}
        </h3>
        <p className={project.status === 'in-progress' ? styles.status : styles.meta}>
          {project.category}
        </p>
      </div>
      <p className={styles.description}>{project.description}</p>
      <TechList project={project} />
      <p className={styles.links}>
        <a href={project.githubUrl}>GitHub</a>
        <a href={project.liveUrl}>Live demo</a>
      </p>
    </article>
  )
}

function TechList({ project }: { project: Project }) {
  if (project.tech.length === 0) return null

  return (
    <ul className={styles.tech} aria-label={`Technologies for ${project.title}`}>
      {project.tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
