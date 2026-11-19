import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || ''
axios.interceptors.request.use((config) => {
  if (axios.defaults.baseURL && config.url?.startsWith('/api')) {
    config.url = config.url.replace(/^\/api/, '')
  }
  return config
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
