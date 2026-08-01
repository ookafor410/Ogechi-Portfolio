import SectionHeader from '../SectionHeader/SectionHeader'
import ToolIcon from './ToolIcon'
import { TOOLS } from './tools'
import styles from './Toolkit.module.css'

const STEP = 360 / TOOLS.length

export default function Toolkit() {
  return (
    <section id="toolkit" className={styles.section} aria-label="Toolkit">
      <SectionHeader title="Toolkit" bordered={false} />
      <div className={styles.wheel}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.ground} aria-hidden="true" />
        <div className={styles.orbit}>
          {TOOLS.map((tool, index) => {
            const angle = STEP * index
            return (
              <div key={tool.label} className={styles.slot} style={{ transform: `rotate(${angle}deg)` }}>
                <ToolIcon {...tool} />
              </div>
            )
          })}
        </div>
        <p className={styles.quote}>
          Creativity and
          <br />
          Youtube University
        </p>
      </div>
    </section>
  )
}
