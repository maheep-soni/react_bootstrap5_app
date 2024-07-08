import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './temfontAwesome.js'; // Import the Font Awesome configuration
import './components/Landing_page.jsx';
import './components/Card.jsx';
import './components/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
)
