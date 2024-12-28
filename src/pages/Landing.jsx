import React, { useState, useEffect } from "react";
import "../styling/Landing.css";

const QuantumCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "quantum-cursor";
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const delay = 12;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const distanceX = mouseX - cursorX;
      const distanceY = mouseY - cursorY;

      cursorX += distanceX / delay;
      cursorY += distanceY / delay;

      cursor.style.left = `${cursorX - 15}px`;
      cursor.style.top = `${cursorY - 15}px`;

      createLiquidDrop(cursorX, cursorY);
      requestAnimationFrame(animateCursor);
    };

    const createLiquidDrop = (x, y) => {
      if (document.querySelectorAll(".quantum-particle").length < 20) {
        const particle = document.createElement("div");
        particle.className = "quantum-particle";
        particle.style.left = `${x - 5}px`;
        particle.style.top = `${y + 10}px`;
        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 800);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

const Landing = ({ onEnterSite }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [zoomOut, setZoomOut] = useState(false);

  const phrases = ["Welcome to The", "Quantum Chain", "Limited"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex < phrases.length - 1 ? prevIndex + 1 : prevIndex
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToHome = () => {
    setZoomOut(true);
    setTimeout(() => {
      onEnterSite();
    }, 1000);
  };

  const hexagonCount = 15;

  const generateHexagons = () => {
    return Array.from({ length: hexagonCount }, (_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div className="hexagon" key={i} />
    ));
  };

  const generateHexRows = () => {
    return Array.from({ length: 10 }, (_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div className="hex" key={i}>
        {generateHexagons()}
      </div>
    ));
  };

  return (
    <div className="page-container">
      <div className={`landing-container ${zoomOut ? "zoom-out" : ""}`}>
        <QuantumCursor />
        <div className="wrapper">{generateHexRows()}</div>
        <h1 className="animated-text">
          <div className="line">
            <span
              className={`phrase ${currentPhraseIndex >= 0 ? "visible" : ""}`}
            >
              Welcome to The
            </span>
          </div>
          <div className="line">
            <span
              className={`phrase ${currentPhraseIndex >= 1 ? "visible" : ""}`}
            >
              Quantum Chain
            </span>
          </div>
          <div className="line">
            <span
              className={`phrase ${currentPhraseIndex >= 2 ? "visible" : ""}`}
            >
              Limited
            </span>
          </div>
        </h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
          className="enter-button"
          onClick={goToHome}
          aria-label="Enter the website"
        >
          <span className="enter-text">Enter</span>
          <span className="site-text">Site</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;