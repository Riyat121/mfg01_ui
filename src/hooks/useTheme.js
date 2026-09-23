import { useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const KEY = 'mfg01-theme'
const isTheme = t => t === 'light' || t === 'dark'
// The chooser's preview iframes must not overwrite the viewer's own choice
const inIframe = window.self !== window.top

export function readStoredTheme() {
  try {
    const t = localStorage.getItem(KEY)
    return isTheme(t) ? t : null
  } catch {
    return null
  }
}

export function storeTheme(theme) {
  if (inIframe) return
  try { localStorage.setItem(KEY, theme) } catch { /* storage unavailable */ }
}

// Light/dark theme shared by every design. A `?theme=` param (used by the chooser)
// wins, then the viewer's last choice, then the design's own default.
// Each design's colours are keyed off <html data-theme>.
export default function useTheme(defaultTheme) {
  const [params, setParams] = useSearchParams()
  const [theme, setTheme] = useState(() => {
    const q = params.get('theme')
    if (isTheme(q)) { storeTheme(q); return q }
    return readStoredTheme() ?? defaultTheme
  })

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    return () => document.documentElement.removeAttribute('data-theme')
  }, [theme])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    storeTheme(next)
    // drop a stale ?theme= so a refresh keeps the new choice
    if (params.has('theme')) setParams(p => { p.delete('theme'); return p }, { replace: true })
  }

  return [theme, toggle]
}
