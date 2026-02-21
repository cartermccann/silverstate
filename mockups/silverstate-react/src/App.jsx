import { Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import ScrollProgress from './components/ScrollProgress'
import WarmImmersive from './pages/WarmImmersive'
import UILibrary from './pages/UILibrary'
import ComponentLibrary from './pages/ComponentLibrary'

export default function App() {
  const location = useLocation()
  const isDevRoute = location.pathname.startsWith('/ui')

  if (isDevRoute) {
    return (
      <Routes>
        <Route path="/ui" element={<UILibrary />} />
        <Route path="/ui/components" element={<ComponentLibrary />} />
      </Routes>
    )
  }

  return (
    <SmoothScroll>
      <ScrollProgress color="#5A7A6E" />
      <Routes>
        <Route path="/" element={<WarmImmersive />} />
      </Routes>
    </SmoothScroll>
  )
}
