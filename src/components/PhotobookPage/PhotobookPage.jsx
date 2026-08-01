import { useEffect, useRef } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import { PHOTOBOOK_META } from './photobookMeta'
import styles from './PhotobookPage.module.css'

const photoModules = import.meta.glob('../../assets/photobook/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

function humanize(filename) {
  const base = filename.replace(/\.[^.]+$/, '').replace(/^\d+[-_]?/, '')
  const words = base.replace(/[-_]+/g, ' ').trim()
  return words.charAt(0).toUpperCase() + words.slice(1)
}

const PHOTOS = Object.keys(photoModules)
  .sort()
  .map((path) => {
    const filename = path.split('/').pop()
    const meta = PHOTOBOOK_META[filename] ?? {}
    return {
      filename,
      src: photoModules[path],
      alt: meta.alt ?? humanize(filename),
      aspectRatio: meta.aspectRatio,
    }
  })

const SIZE_CLASSES = ['size0', 'size1', 'size2', 'size3', 'size4']
const ALIGN_CLASSES = ['alignStart', 'alignCenter', 'alignEnd']

export default function PhotobookPage() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function handleWheel(event) {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1
      if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) return
      event.preventDefault()
      el.scrollLeft += event.deltaY
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section aria-label="Photobook">
      <PageHeader title="Photobook" />
      {PHOTOS.length === 0 ? (
        <p className={styles.empty}>Photos coming soon.</p>
      ) : (
        <div
          ref={scrollRef}
          className={styles.galleryWrap}
          tabIndex={0}
          role="region"
          aria-label="Photobook gallery"
        >
          <div className={styles.track}>
            {PHOTOS.map((photo, index) => (
              <figure
                key={photo.filename}
                className={[
                  styles.item,
                  styles[SIZE_CLASSES[index % SIZE_CLASSES.length]],
                  styles[ALIGN_CLASSES[index % ALIGN_CLASSES.length]],
                ].join(' ')}
              >
                <img
                  className={styles.image}
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  style={photo.aspectRatio ? { aspectRatio: photo.aspectRatio } : undefined}
                />
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
