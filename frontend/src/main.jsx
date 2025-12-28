import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutsProvider } from './context/WorkoutsProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutsProvider>
       <App />
    </WorkoutsProvider> 
  </StrictMode>,
)
