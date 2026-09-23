import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Chooser from './pages/Chooser.jsx'
import LiveLine from './pages/LiveLine.jsx'
import BuiltForMakers from './pages/BuiltForMakers.jsx'
import Kinetic from './pages/Kinetic.jsx'
import DesignSwitcher from './components/DesignSwitcher.jsx'

// Start each page at the top when switching designs
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Chooser />} />
        <Route path="/liveline" element={<><LiveLine /><DesignSwitcher /></>} />
        <Route path="/built-for-makers" element={<><BuiltForMakers /><DesignSwitcher /></>} />
        <Route path="/kinetic" element={<><Kinetic /><DesignSwitcher /></>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
