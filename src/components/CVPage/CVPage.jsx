import resumePdf from '../../assets/Ogechi_Okafor_Resume.pdf?url'
import PageHeader from '../PageHeader/PageHeader'
import RevealLink from '../RevealLink/RevealLink'
import styles from './CVPage.module.css'

export default function CVPage() {
  return (
    <section aria-label="CV">
      <PageHeader title="CV" />
      <div className={styles.content}>
        <RevealLink
          href={resumePdf}
          download="Ogechi_Okafor_Resume.pdf"
          variant="pill"
          className={styles.downloadButton}
        >
          Download PDF
        </RevealLink>
        <iframe
          className={styles.viewer}
          src={resumePdf}
          title="Ogechi Okafor Resume"
        >
          <p>
            Your browser can't display embedded PDFs.{' '}
            <a href={resumePdf} download="Ogechi_Okafor_Resume.pdf">
              Download the resume
            </a>{' '}
            instead.
          </p>
        </iframe>
      </div>
    </section>
  )
}
