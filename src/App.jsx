import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Client from './pages/Client';
import Contact from './pages/Contact';
import lgo from './img/lgo.png'; 
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLandingComplete, setIsLandingComplete] = useState(false);

  const pages = ['/', '/home', '/about', '/services', '/client', '/contact'];
  const currentIndex = pages.indexOf(location.pathname);

  
  const handleNavigate = (direction) => {
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < pages.length) {
      navigate(pages[nextIndex]);
    }
  };

  
  useEffect(() => {
    document.body.classList.add('no-transition'); 
    return () => document.body.classList.remove('no-transition'); 
  }, []);

  
  const handleLandingComplete = () => {
    setIsLandingComplete(true); 
    document.body.classList.remove('no-transition'); 
  };

  return (
    <div className={`app-container ${location.pathname === '/' ? 'landing-page' : ''}`}>
     
      {location.pathname !== '/' && (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="nav-logo">
              <a href="/">
                <img src={lgo} alt="Logo" className="logo-image" />
              </a>
            </div>
            <div className="nav-items">
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/client">Client</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
      )}

      <Routes location={location}>
        <Route path="/" element={<Landing onComplete={handleLandingComplete} />} />
        <Route path="/home" element={<Home isLandingComplete={isLandingComplete} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     
      {location.pathname !== '/' && (
        <footer className="footer">
          <p>Copyright Quantum Chain Limited © 2024</p>
        </footer>
      )}
    </div>
  );
}

export default App;
