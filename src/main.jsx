import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardProvider from './component/cardContext/CardProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardProvider >
        <App />
    </CardProvider>
   
  </React.StrictMode>,
)
