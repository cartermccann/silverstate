import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Prevent browser from restoring cached scroll positions on SPA navigation
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// Ensure page starts at the top on initial load
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
