import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import usePageStyles from '../hooks/usePageStyles.js'
import css from '../styles/liveline.css?inline'
import SectionHead from '../components/SectionHead.jsx'
import Pricing from '../components/Pricing.jsx'
import Footer from '../components/Footer.jsx'
import { heroText, features, routingSteps } from '../data/content.js'

const orders = ['MO-118', 'MO-119', 'MO-120', 'MO-121', 'MO-122', 'MO-123', 'MO-124', 'MO-125']

const tickerItems = [
  ['Product & Variants', 'multi-level BOMs'],
  ['Procurement', 'POs & vendors'],
  ['Inventory', 'lot/serial ledger'],
  ['Production', 'job cards'],
  ['Quality & Costing', 'inspection & rollup'],
  ['Governance', 'full audit trail'],
]

const stats = [
  { target: 6, label: 'Connected modules' },
  { target: 99.4, suffix: '%', label: 'Stock accuracy' },
  { target: 0, prefix: '₹', label: 'To get started' },
  { target: 21, suffix: 'd', label: 'Enterprise trial' },
]

// Counts up from 0 to `target` the first time it scrolls into view
function Stat({ target, prefix = '', suffix = '', label }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const isFloat = !Number.isInteger(target)

  useEffect(() => {
    let raf
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      let start = null
      const dur = 1300
      const step = ts => {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        setValue((1 - Math.pow(1 - p, 3)) * target)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: .5 })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target])

  return (
    <div className="stat">
      <div className="v" ref={ref}>{prefix}{isFloat ? value.toFixed(1) : Math.round(value)}{suffix}</div>
      <div className="l">{label}</div>
    </div>
  )
}

export default function LiveLine() {
  usePageStyles(css, 'mfg01 — LiveLine')
  const [theme, setTheme] = useState('dark')

  // The design's colours are keyed off <html data-theme>
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    return () => document.documentElement.removeAttribute('data-theme')
  }, [theme])

  return (
    <>
      <nav>
        <div className="navrow">
          <a className="brand" href="#"><span className="mark">m1</span>mfg01</a>
          <div className="navlinks"><a href="#features">Features</a><a href="#pricing">Pricing</a></div>
          <div className="navright">
            <button
              className="themebtn"
              aria-label="Toggle theme"
              onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a className="navcta" href="#">Sign in</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <span className="pill"><span className="l" />Line running · 128 open orders</span>
        <h1>Run your shop floor without the spreadsheets</h1>
        <p>{heroText}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#">Sign in</a>
          <a className="btn-outline" href="#">Create your company</a>
        </div>

        <div className="belt-frame">
          <div className="belt-track">
            <div className="parts">
              {/* rendered twice so the loop is seamless */}
              {[...orders, ...orders].map((o, i) => <div key={i} className="part">{o}</div>)}
            </div>
          </div>
          <div className="belt-labels">{routingSteps.map(s => <span key={s}>{s}</span>)}</div>
        </div>
      </header>

      <div className="ticker-wrap">
        <div className="ticker">
          {[...tickerItems, ...tickerItems].map(([name, detail], i) => (
            <span key={i}><b>{name}</b> · {detail}</span>
          ))}
        </div>
      </div>

      <section className="section" id="features">
        <SectionHead
          kicker="EVERYTHING YOUR OPERATION NEEDS"
          title="One connected system"
          text="From the sales floor to the shop floor."
        />
        <div className="grid">
          {features.map((f, i) => (
            <div key={f.title} className="card">
              <div className="num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              {f.ent && <span className="ent">{f.ent}</span>}
            </div>
          ))}
        </div>

        <div className="stats">
          {stats.map(s => <Stat key={s.label} {...s} />)}
        </div>
      </section>

      <Pricing />
      <Footer />
    </>
  )
}
