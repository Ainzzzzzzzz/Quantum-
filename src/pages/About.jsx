import React, { useState } from 'react';
import BG from '../img/BG.png'; 
import bg1 from '../img/bg1.jpg'; 
import '../styling/About.css';

const About = () => {
  const [showMission, setShowMission] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleLearnMoreClick = () => {
    if (showMission) {
      setIsFadingOut(true); 
      setTimeout(() => {
        setShowMission(false); 
        setIsFadingOut(false); 
      }, 1000); 
    } else {
      setShowMission(true); 
    }
  };

  return (
    <div className="about-container" style={{ backgroundImage: `url(${BG})` }}>
      <div className="content">
        <h1>Learn <br /> Who We Are</h1>
        <p>
          Welcome to Quantum Chain Limited! We are a technology-driven company committed to providing innovative financial solutions. 
          Our mission is to bridge technology and finance to empower our clients globally.
        </p>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="learn-more-btn" onClick={handleLearnMoreClick}>
          Learn More
        </button>

        {showMission && (
          <div className={`mission-container ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At Quantum Chain Limited, we are committed to empowering individuals with a deep understanding and structure of the global stock market.
                We believe in providing actionable insights and strategies to help you navigate the complex world of investments.
                We strive to demystify the intricacies of the stock market, making it accessible to investors of all levels.
                Our mission is to foster a culture of informed decision-making and long-term financial success by providing personalized advice and support
                that aligns with your unique goals and risk tolerance.
              </p>
              <div className="mission-image-container">
                <img src={bg1} alt="Mission Illustration" className="mission-image" />
              </div>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default About;
