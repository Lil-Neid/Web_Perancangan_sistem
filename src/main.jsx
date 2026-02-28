import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defineElement } from '@lordicon/element'
import './index.css'
import App from './App.jsx'

// Define the lord-icon custom element
defineElement();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
