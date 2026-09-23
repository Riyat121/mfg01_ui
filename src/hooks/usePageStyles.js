import { useLayoutEffect } from 'react'

// Each design ships its own global stylesheet (body, :root, nav, h1 …).
// Mount it only while that page is on screen so designs never clash.
export default function usePageStyles(css, title) {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    style.textContent = css
    document.head.appendChild(style)
    const prevTitle = document.title
    if (title) document.title = title
    return () => {
      style.remove()
      document.title = prevTitle
    }
  }, [css, title])
}
