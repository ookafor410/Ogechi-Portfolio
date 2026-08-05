import { PROJECTS } from '../../data/projects'
import { ARTICLES } from '../../data/articles'
import PageHeader from '../PageHeader/PageHeader'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsPage.module.css'

const WORK_ITEMS = [...PROJECTS, ...ARTICLES]

export default function ProjectsPage() {
  return (
    <section aria-label="Projects">
      <PageHeader title="Projects" />
      <div className={styles.grid}>
        {WORK_ITEMS.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
