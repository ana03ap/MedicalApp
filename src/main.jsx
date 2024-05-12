import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvideer } from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvideer>
    <App />
    </AppContextProvideer>
  </React.StrictMode>,
)
