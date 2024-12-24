import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Client from './pages/Client';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/client" element={<Client />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <p>Copyright Quantum Chain Limited © 2024</p>
      </footer>
    </div>
  );
}

export default App;
