import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Import global styles in order
import './styles/variables.css'
import './styles/global.css'
import './styles/glassmorphism.css'
import './styles/animations.css'
import './styles/typography.css'
import './styles/utilities.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/sections.css'
import './styles/responsive.css'

// Import theme provider
import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
