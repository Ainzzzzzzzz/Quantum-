import React from 'react';
import { Link } from 'react-scroll'; 
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Client from './pages/Client';
import Contact from './pages/Contact';
import lgo from './img/lgo.png';

function App() {
  return (
    <div className="app-container">
     
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">
          
            <a href="#home"> 
              <img src={lgo} alt="Logo" className="logo-image" />
            </a>
          </div>
          <div className="nav-items">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
            <Link to="client" smooth={true} duration={500}>
              Client
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="client">
        <Client />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Copyright Quantum Chain Limited © 2024</p>
      </footer>
    </div>
  );
}

export default App;
