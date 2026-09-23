import { Link } from 'react-router-dom'
import usePageStyles from '../hooks/usePageStyles.js'
import css from '../styles/chooser.css?inline'
import { designs } from '../data/designs.js'

export default function Chooser() {
  usePageStyles(css, 'mfg01 — Design Options')

  return (
    <>
      <header className="top">
        <div className="brand"><span className="mark">m1</span>mfg01</div>
        <h1>Pick a homepage design</h1>
        <p>Three directions for the mfg01 landing page. Click one to open the full design.</p>
      </header>

      <main className="options">
        {designs.map((d, i) => (
          <Link key={d.slug} className="option" to={`/${d.slug}`}>
            <div className={d.dark ? 'preview preview-dark' : 'preview'}>
              {/* live, scaled-down render of the actual design */}
              <iframe src={`/${d.slug}`} title={`${d.name} preview`} tabIndex={-1} loading="lazy" scrolling="no" />
            </div>
            <div className="info">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h2>{d.name}</h2>
              <p>{d.description}</p>
              <div className="swatches">
                {d.swatches.map(c => <i key={c} style={{ background: c }} />)}
              </div>
              <span className="go">View design →</span>
            </div>
          </Link>
        ))}
      </main>

      <footer className="foot">mfg01 · design review</footer>
    </>
  )
}
