import { useState } from 'react'
import { Link } from 'react-router-dom'
import usePageStyles from '../hooks/usePageStyles.js'
import { readStoredTheme, storeTheme } from '../hooks/useTheme.js'
import css from '../styles/chooser.css?inline'
import { designs } from '../data/designs.js'

export default function Chooser() {
  usePageStyles(css, 'mfg01 — Design Options')
  // Theme the previews render in; opening a design carries it over
  const [theme, setTheme] = useState(() => readStoredTheme() ?? 'dark')
  const pick = t => { setTheme(t); storeTheme(t) }

  return (
    <>
      <header className="top">
        <div className="brand"><span className="mark">m1</span>mfg01</div>
        <h1>Pick a homepage design</h1>
        <p>Three directions for the mfg01 landing page. Each one comes in dark and light — switch below to compare, then click one to open the full design.</p>
        <div className="seg" role="group" aria-label="Preview theme">
          {['dark', 'light'].map(t => (
            <button key={t} aria-pressed={theme === t} onClick={() => pick(t)}>
              {t === 'dark' ? 'Dark' : 'Light'}
            </button>
          ))}
        </div>
      </header>

      <main className="options">
        {designs.map((d, i) => (
          <Link key={d.slug} className="option" to={`/${d.slug}?theme=${theme}`}>
            <div className={theme === 'dark' ? 'preview preview-dark' : 'preview'}>
              {/* live, scaled-down render of the actual design */}
              <iframe key={theme} src={`/${d.slug}?theme=${theme}`} title={`${d.name} preview (${theme})`} tabIndex={-1} loading="lazy" scrolling="no" />
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
