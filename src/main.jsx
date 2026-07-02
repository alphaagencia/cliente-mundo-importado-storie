import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Cormorant Garamond — serifa couture (títulos)
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/cormorant-garamond/latin-700.css'
// Manrope — sans limpa (corpo/rótulos)
import '@fontsource/manrope/latin-300.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/latin-700.css'
// Pinyon Script — acento manuscrito (uso mínimo)
import '@fontsource/pinyon-script/latin-400.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
