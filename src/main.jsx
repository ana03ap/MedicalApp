import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvideer } from './context/AppContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppContextProvideer>
    <GoogleOAuthProvider clientId="288215351861-eoi9q12sfm9kpis1ajegv0u6aqtjnoo1.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>;
    </AppContextProvideer>
    
  </React.StrictMode>,
)
