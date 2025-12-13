import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/themeContext'
import { ContentProvider } from './contexts/contentContext'
import './assets/index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ContentProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ContentProvider>
    </BrowserRouter>
  </StrictMode>,
)