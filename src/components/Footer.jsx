import { footerLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div>{footerLinks.map(l => <a key={l} href="#">{l}</a>)}</div>
      <div className="copy">Copyright © {new Date().getFullYear()} mfg01</div>
    </footer>
  )
}
