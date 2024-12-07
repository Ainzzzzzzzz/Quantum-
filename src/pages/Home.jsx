import React, { useEffect, useState } from "react";
import "../styling/Home.css";
import QT from "../img/QT.png"; // Importing the circular image
import logo1 from "../img/logo1.png"; // First card icon
import logo2 from "../img/logo2.png"; // Second card icon
import logo3 from "../img/logo3.png"; // Third card icon

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Trigger fade-in after a delay
    }, 200); // Delay time before showing content
  }, []);

  return (
    <div className={`home-container ${showContent ? "fade-in" : ""}`}>
      <h1>THE QUANTUM <br />CHAIN LIMITED</h1>
      <div className="image-wrapper">
        <img src={QT} alt="Galaxy or Blackhole" className="circular-image" />
      </div>

      {/* Card section */}
      <div className="container">
        <div className="card">
          <div className="icon">
            <img src={logo1} alt="Financial Services" className="card-icon" />
          </div>
          <h3>Financial Services</h3>
          <p>We offer a range of financial services to suit your needs.</p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn">More →</button>
        </div>
        <div className="card">
          <div className="icon">
            <img src={logo2} alt="Investment Planning" className="card-icon" />
          </div>
          <h3>Investment Planning</h3>
          <p>Discover how investment planning can help you achieve your goals.</p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn">More →</button>
        </div>
        <div className="card">
          <div className="icon">
            <img src={logo3} alt="Consulting Services" className="card-icon" />
          </div>
          <h3>Consulting Services</h3>
          <p>Our experts provide guidance tailored to your needs.</p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="btn">More →</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
