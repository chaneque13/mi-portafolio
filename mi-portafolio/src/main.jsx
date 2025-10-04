// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'  // ← CAMBIA A HashRouter
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* ← CAMBIA A HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)