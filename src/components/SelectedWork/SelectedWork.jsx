import { PROJECTS } from '../../data/projects'
import SectionHeader from '../SectionHeader/SectionHeader'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './SelectedWork.module.css'

const QUICK_GLANCE_SIZES = {
  stylelogxp: 'half',
  undead: 'half',
  magnesynth: 'half',
  omnom: 'half'
}

const QUICK_GLANCE = Object.keys(QUICK_GLANCE_SIZES)
  .map((id) => PROJECTS.find((project) => project.id === id))
  .map((project) => ({ ...project, size: QUICK_GLANCE_SIZES[project.id] }))

export default function SelectedWork() {
  return (
    <section id="selected-work" className={styles.section} aria-label="Selected work">
      <SectionHeader title="Quick Glance" />
      <div className={styles.grid}>
        {QUICK_GLANCE.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
