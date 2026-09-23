import usePageStyles from '../hooks/usePageStyles.js'
import useTheme from '../hooks/useTheme.js'
import ThemeToggle from '../components/ThemeToggle.jsx'
import css from '../styles/makers.css?inline'
import SectionHead from '../components/SectionHead.jsx'
import Pricing from '../components/Pricing.jsx'
import Footer from '../components/Footer.jsx'

const chips = [
  { href: '#product-variants', label: 'Product & Variants', color: 'c-violet' },
  { href: '#inventory', label: 'Inventory', color: 'c-green' },
  { href: '#production', label: 'Production', color: 'c-orange' },
  { href: '#procurement', label: 'Procurement', color: 'c-rust' },
]

// This design uses its own headline per module
const cards = [
  { id: 'product-variants', tag: 'Product & Variants', tone: 't-violet', title: 'Define once, build many', text: 'Multi-level BOMs, versioned revisions, routed operations tied to the work center that performs each one.' },
  { id: 'procurement', tag: 'Procurement', tone: 't-rust', title: 'Buy what you need, when you need it', text: 'Purchase orders, goods receipts reconciliation, vendor records.', ent: '+ RFQs · Auto-PO' },
  { id: 'inventory', tag: 'Inventory', tone: 't-green', title: "Always know what's on hand", text: 'Lot/serial traceability, append-only stock ledger, always-current balances.' },
  { id: 'production', tag: 'Production Execution', tone: 't-orange', title: 'Authorization to the shop floor', text: 'MOs snapshot the BOM at release; job cards log labor, machine time, consumption.' },
  { tag: 'Quality & Costing', tone: 't-violet', title: 'Stay in control of cost', text: 'Incoming inspection, planned cost rollup per unit.', ent: '+ Variance analysis' },
  { tag: 'Planning & Governance', tone: 't-green', title: 'Plan ahead, stay accountable', text: 'Full audit trail on every change.', ent: '+ MRP · RBAC' },
]

const mockStats = [
  { v: '128', l: 'Open manufacturing orders' },
  { v: '99.4%', l: 'Stock accuracy' },
  { v: '₹0', l: 'Cost to start' },
]

export default function BuiltForMakers() {
  usePageStyles(css, 'mfg01 — Built for Makers')
  const [theme, toggleTheme] = useTheme('dark')

  return (
    <>
      <nav>
        <div className="navrow">
          <a className="brand" href="#">mfg01</a>
          <div className="navlinks"><a href="#features">Features</a><a href="#pricing">Pricing</a></div>
          <div className="navright">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a className="navcta" href="#">Sign In / Sign Up</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="headline">
          BUILT FOR
          <span className="pill">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 21V9l6 3V9l6 3V9l6 3v9H3Z" /><path d="M3 21h18" /></svg>
            Makers
          </span>
        </div>

        <div className="sub-wrap">
          <p className="sub">
            <span className="underline"><b>Products, BOMs, inventory</b>
              <svg viewBox="0 0 300 14"><path d="M2 8 Q80 2 150 7 T298 6" stroke="var(--orange)" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
            </span>, procurement, quality and costing — one login, one shop floor.
          </p>
          <div className="annotate">
            <svg viewBox="0 0 70 70" fill="none"><path d="M8 8 C20 30 30 45 55 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" /><path d="M45 50 L56 56 L52 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
            <div className="txt">₹0/month<br />unlimited users</div>
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn-primary" href="#">Start for Free</a>
          <span className="sep">|</span>
          {chips.map(c => (
            <a key={c.href} className="chip" href={c.href}><span className={`dot ${c.color}`} />{c.label}</a>
          ))}
        </div>

        <div className="frame">
          <div className="frame-bar"><span /><span /><span /></div>
          <div className="frame-body">
            <div className="mock-grid">
              <div className="mock-side">
                <div className="b active" /><div className="b" /><div className="b" /><div className="b" /><div className="b" />
              </div>
              <div className="mock-main">
                <div className="mock-row">
                  {mockStats.map(s => (
                    <div key={s.l} className="mock-card"><div className="v">{s.v}</div><div className="l">{s.l}</div></div>
                  ))}
                </div>
                <div className="mock-wide" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="features">
        <SectionHead
          kicker="EVERYTHING YOUR OPERATION NEEDS"
          title="One connected system"
          text="From the sales floor to the shop floor."
        />
        <div className="grid">
          {cards.map(c => (
            <div key={c.tag} className="card" id={c.id}>
              <span className={`tag ${c.tone}`}>{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              {c.ent && <span className="ent">{c.ent}</span>}
            </div>
          ))}
        </div>
      </section>

      <Pricing />
      <Footer />

      <a className="chatbubble" href="#"><span className="d" />Talk to Sales</a>
    </>
  )
}
