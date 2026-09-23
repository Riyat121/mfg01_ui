# mfg01 — Design Options (React)

A small React app for comparing three homepage designs for mfg01: **LiveLine**, **Built for Makers** and **Kinetic**.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Structure

```
src/
  main.jsx               app entry (BrowserRouter)
  App.jsx                routes: /  /liveline  /built-for-makers  /kinetic
  pages/                 Chooser + one component per design
  components/            DesignSwitcher, SectionHead, Pricing, Footer
  data/                  designs list + shared copy (features, plans, footer)
  hooks/usePageStyles.js mounts a design's stylesheet only while that page is shown
  styles/                chooser.css, switcher.css, liveline.css, makers.css, kinetic.css
```

Each design keeps its own global stylesheet (they all style `body`, `nav`, `h1`, …), so pages
load their CSS with `?inline` and `usePageStyles` adds/removes it on mount/unmount. That keeps
the designs from bleeding into each other.

When deploying, route all paths to `index.html` (SPA fallback). `public/_redirects` handles this on Netlify.
