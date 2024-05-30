import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*** css ***/
import 'react-confirm-alert/src/react-confirm-alert.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
