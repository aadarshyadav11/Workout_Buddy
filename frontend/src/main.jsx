import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutsProvider } from './context/WorkoutsProvider'
import { AuthProvider } from './context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <WorkoutsProvider>
       <App />
    </WorkoutsProvider> 
    </AuthProvider>
  </StrictMode>,
)
