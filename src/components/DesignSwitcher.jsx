import { Link, NavLink } from 'react-router-dom'
import { designs } from '../data/designs.js'
import '../styles/switcher.css'

// Floating pill for jumping between designs. Hidden inside the chooser's preview iframes.
export default function DesignSwitcher() {
  if (window.self !== window.top) return null
  return (
    <div className="ds-bar" role="navigation" aria-label="Design options">
      <Link className="ds-home" to="/">← All designs</Link>
      {designs.map(d => (
        <NavLink key={d.slug} to={`/${d.slug}`}>{d.name}</NavLink>
      ))}
    </div>
  )
}
