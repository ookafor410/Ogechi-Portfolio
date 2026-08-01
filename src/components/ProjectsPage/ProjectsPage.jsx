import { PROJECTS } from '../../data/projects'
import PageHeader from '../PageHeader/PageHeader'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  return (
    <section aria-label="Projects">
      <PageHeader title="Projects" />
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
