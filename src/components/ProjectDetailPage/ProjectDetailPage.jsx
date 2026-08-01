import { useParams } from 'react-router-dom'
import { PROJECTS } from '../../data/projects'
import PageHeader from '../PageHeader/PageHeader'
import Tag from '../Tag/Tag'
import RevealLink from '../RevealLink/RevealLink'
import styles from './ProjectDetailPage.module.css'

const DETAIL_FIELDS = [
  { key: 'timeline', label: 'Timeline' },
  { key: 'type', label: 'Type' },
  { key: 'role', label: 'Role' },
  { key: 'tools', label: 'Tools' },
]

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = PROJECTS.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section aria-label="Project not found">
        <PageHeader title="Project not found" />
        <div className={styles.notFound}>
          <RevealLink href="/work" variant="upper">
            Back to Work
          </RevealLink>
        </div>
      </section>
    )
  }

  const { title, overview, heroImage, images = [] } = project

  return (
    <section aria-label={title}>
      <PageHeader
        title={title}
        aside={
          overview && (
            <div className={styles.overviewBlock}>
              <h2 className={styles.label}>Overview</h2>
              <p className={styles.overview}>{overview}</p>
            </div>
          )
        }
      />
      <div className={styles.content}>
        {heroImage && (
          <figure className={styles.hero}>
            <img
              className={styles.heroImage}
              src={heroImage.src}
              alt={heroImage.alt}
              loading="lazy"
              style={heroImage.aspectRatio ? { aspectRatio: heroImage.aspectRatio } : undefined}
            />
          </figure>
        )}

        <dl className={styles.details} aria-label="Project details">
          {DETAIL_FIELDS.map(({ key, label }) => {
            const value = project[key]
            if (!value) return null
            return (
              <div className={styles.detailRow} key={key}>
                <dt className={styles.label}>{label}</dt>
                <dd className={styles.detailValue}>
                  {key === 'tools' ? (
                    <div className={styles.tools}>
                      {value.map((tool) => (
                        <Tag key={tool}>{tool}</Tag>
                      ))}
                    </div>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            )
          })}
        </dl>

        {images.length > 0 && (
          <div className={styles.grid}>
            {images.map((image) => (
              <figure key={image.src} className={styles.gridItem}>
                <img
                  className={styles.gridImage}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined}
                />
              </figure>
            ))}
          </div>
        )}

        <div className={styles.backWrap}>
          <RevealLink href="/work" variant="upper">
            Back to Work
          </RevealLink>
        </div>
      </div>
    </section>
  )
}
