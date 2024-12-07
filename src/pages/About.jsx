import React from 'react';
import '../styling/About.css'; // Adjusted path for About.css
import bgA from '../img/bgA.png'; // Adjusted path for bgA.png

const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${bgA})` }}>
      <h1>Learn Who We Are</h1>
      <p>
        Welcome to Quantum Chain Limited! We are a technology-driven company committed to providing innovative financial solutions.
        Our mission is to bridge technology and finance to empower our clients globally.
      </p>
      <p>James Casas P. Winchester</p>
    </div>
  );
};

export default About;
