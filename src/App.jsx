import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import './css/Landing_page.css'
import './css/Card.css'
import './css/Footer.css'
import Navbar from './components/Navbar.jsx';
import Landing_page from './components/Landing_page.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import { HashRouter } from 'react-router-dom';
function App() {
 

  return (
    
    <HashRouter basename='/'>
     <Navbar/>
     <Landing_page/>
     <Card/>
     <Footer/>

    </HashRouter>
  )
}

export default App
