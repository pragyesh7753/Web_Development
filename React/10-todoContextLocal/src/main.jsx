import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { defineElement } from 'lord-icon-element'
import lottie from 'lottie-web'

// Register Lord Icon Element
defineElement(lottie.loadAnimation)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)