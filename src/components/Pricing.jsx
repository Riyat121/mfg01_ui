import SectionHead from './SectionHead.jsx'
import { plans } from '../data/content.js'

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <SectionHead
        kicker="PRICING"
        title="Start free, scale when ready"
        text="Unlimited users on Free. No credit card required."
      />
      <div className="plans">
        {plans.map(p => (
          <div key={p.name} className={p.highlight ? 'plan hi' : 'plan'}>
            <div className="pname">{p.name}</div>
            <div className="price">{p.price}</div>
            <ul>{p.items.map(i => <li key={i}>{i}</li>)}</ul>
            <a className="cta" href="#">{p.cta}</a>
          </div>
        ))}
      </div>
    </section>
  )
}
