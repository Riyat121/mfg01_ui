import { useEffect, useRef, useState } from 'react'
import usePageStyles from '../hooks/usePageStyles.js'
import useTheme from '../hooks/useTheme.js'
import ThemeToggle from '../components/ThemeToggle.jsx'
import css from '../styles/kinetic.css?inline'
import SectionHead from '../components/SectionHead.jsx'
import Pricing from '../components/Pricing.jsx'
import Footer from '../components/Footer.jsx'
import { heroText, features, routingSteps } from '../data/content.js'

const TEETH = Array.from({ length: 16 }, (_, i) => i * 22.5)

// Routing line that draws itself when it scrolls into view
function Routing() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShow(true); io.disconnect() }
    }, { threshold: .4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div className={show ? 'route-wrap show' : 'route-wrap'} ref={ref}>
      <h3>Product &amp; Variants — the routing that ships</h3>
      <div className="route">
        <svg viewBox="0 0 780 2" preserveAspectRatio="none">
          <line className="basep" x1="0" y1="1" x2="780" y2="1" />
          <line className="fillp" x1="0" y1="1" x2="780" y2="1" />
        </svg>
        {routingSteps.map((s, i) => (
          <div key={s} className="rnode"><div className="dot">{String(i + 1).padStart(2, '0')}</div><span>{s}</span></div>
        ))}
      </div>
    </div>
  )
}

export default function Kinetic() {
  usePageStyles(css, 'mfg01 — Kinetic')
  const [theme, toggleTheme] = useTheme('light')

  return (
    <>
      <nav>
        <div className="navrow">
          <a className="brand" href="#"><span className="mark">m1</span>mfg01</a>
          <div className="navlinks"><a href="#features">Features</a><a href="#pricing">Pricing</a></div>
          <div className="navright">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a className="navcta" href="#">Sign in</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div>
          <span className="eyebrow">MANUFACTURING ERP</span>
          <h1>Run your shop floor without the spreadsheets</h1>
          <p>{heroText}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#">Sign in</a>
            <a className="btn-outline" href="#">Create your company</a>
          </div>
        </div>
        <div className="gear-wrap" aria-hidden="true">
          <svg className="gear" width="280" height="280" viewBox="0 0 100 100">
            <g fill="none" stroke="#FF6B2C" strokeWidth="2" opacity="0.5">
              <circle cx="50" cy="50" r="34" />
              <g>{TEETH.map(a => <rect key={a} x="47" y="10" width="6" height="7" rx="1" transform={`rotate(${a} 50 50)`} />)}</g>
            </g>
            <path fill="#FF6B2C" opacity="0.12" d="M50 8 L56 20 L44 20 Z M50 92 L56 80 L44 80 Z M8 50 L20 44 L20 56 Z M92 50 L80 44 L80 56 Z M20 20 L28 26 L23 33 Z M80 80 L72 74 L77 67 Z M80 20 L72 26 L77 33 Z M20 80 L28 74 L23 67 Z" />
          </svg>
          <svg className="gear g2" width="180" height="180" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#4F52B2" strokeWidth="2" opacity="0.4" />
          </svg>
          <div className="center-badge"><div className="n">6</div><div className="l">MODULES</div></div>
        </div>
      </header>

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
        <Routing />
      </section>

      <Pricing />
      <Footer />
    </>
  )
}
