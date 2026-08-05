import ReactMarkdown from 'react-markdown'
import PageHeader from '../PageHeader/PageHeader'
import RevealLink from '../RevealLink/RevealLink'
import styles from './ArticlePage.module.css'

const inlineOnly = { p: ({ children }) => <>{children}</> }

function splitParagraphs(markdown) {
  return markdown
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function Figure({ figure }) {
  return (
    <figure className={styles.figure}>
      <img className={styles.figureImage} src={figure.src} alt={figure.alt} loading="lazy" />
      <figcaption className={styles.figcaption}>
        {figure.caption && <span className={styles.caption}>{figure.caption}</span>}
        {figure.credit && <span className={styles.credit}>{figure.credit}</span>}
      </figcaption>
    </figure>
  )
}

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <section aria-label="Article not found">
        <PageHeader title="Article not found" />
        <div className={styles.notFound}>
          <RevealLink href="/work" variant="upper">
            Back to Work
          </RevealLink>
        </div>
      </section>
    )
  }

  const {
    headline,
    byline,
    dateline,
    standfirst,
    figures = [],
    bodyMarkdown,
    pullQuotes = [],
    sections = [],
    table,
    references = [],
    referencesLabel = 'References',
  } = article
  const paragraphs = splitParagraphs(bodyMarkdown)

  const groupByParagraph = (items) => {
    const map = new Map()
    items.forEach((item) => {
      const list = map.get(item.afterParagraph) || []
      list.push(item)
      map.set(item.afterParagraph, list)
    })
    return map
  }

  const figuresByParagraph = groupByParagraph(figures)
  const quotesByParagraph = groupByParagraph(pullQuotes)
  const sectionsByParagraph = groupByParagraph(sections)

  return (
    <article className={styles.article} aria-label={headline}>
      <header className={styles.masthead}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.meta}>
          {byline}
          {byline && dateline && <span aria-hidden="true"> · </span>}
          {dateline}
        </p>
        {standfirst && <p className={styles.standfirst}>{standfirst}</p>}
      </header>

      <div className={styles.body}>
        {(figuresByParagraph.get(-1) || []).map((figure, figureIndex) => (
          <Figure key={figureIndex} figure={figure} />
        ))}

        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className={index === 0 ? `${styles.paragraph} ${styles.dropCap}` : styles.paragraph}>
              <ReactMarkdown components={inlineOnly}>{paragraph}</ReactMarkdown>
            </p>

            {(figuresByParagraph.get(index) || []).map((figure, figureIndex) => (
              <Figure key={figureIndex} figure={figure} />
            ))}

            {table && table.afterParagraph === index && (
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  {(table.caption || table.credit) && (
                    <caption className={styles.tableCaption}>
                      {table.caption}
                      {table.caption && table.credit && <span aria-hidden="true"> — </span>}
                      {table.credit}
                    </caption>
                  )}
                  <thead>
                    <tr>
                      {table.columns.map((column) => (
                        <th key={column} scope="col">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  {table.totalRow && (
                    <tfoot>
                      <tr>
                        {table.totalRow.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            )}

            {(quotesByParagraph.get(index) || []).map((quote, quoteIndex) => (
              <blockquote key={quoteIndex} className={styles.pullQuote}>
                <p className={styles.pullQuoteText}>{quote.text}</p>
                {quote.attribution && <cite className={styles.pullQuoteAttribution}>{quote.attribution}</cite>}
              </blockquote>
            ))}

            {(sectionsByParagraph.get(index) || []).map((section, sectionIndex) => (
              <h2 key={sectionIndex} className={styles.sectionHeading}>
                {section.heading}
              </h2>
            ))}
          </div>
        ))}
      </div>

      {references.length > 0 && (
        <section className={styles.references} aria-label={referencesLabel}>
          <h2 className={styles.sectionHeading}>{referencesLabel}</h2>
          <ol className={styles.referencesList}>
            {references.map((reference, referenceIndex) => (
              <li key={referenceIndex} className={styles.referenceItem}>
                {reference.text}
                {reference.url && (
                  <>
                    {' '}
                    <a href={reference.url} className={styles.referenceLink}>
                      {reference.url}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className={styles.backWrap}>
        <RevealLink href="/work" variant="upper">
          Back to Work
        </RevealLink>
      </div>
    </article>
  )
}
