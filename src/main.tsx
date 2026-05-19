import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import LenisProvider from './components/LenisProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LenisProvider>
        <App />
      </LenisProvider>
    </HelmetProvider>
  </StrictMode>,
)
