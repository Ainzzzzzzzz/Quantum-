import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Client from './pages/Client';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLandingComplete, setIsLandingComplete] = useState(false);

  const pages = ['/', '/home', '/about', '/services', '/client', '/contact'];
  const currentIndex = pages.indexOf(location.pathname);

  // Handle page navigation
  const handleNavigate = (direction) => {
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < pages.length) {
      navigate(pages[nextIndex]);
    }
  };

  // Disable transitions during landing animation
  useEffect(() => {
    document.body.classList.add('no-transition'); // Disable transitions
    return () => document.body.classList.remove('no-transition'); // Re-enable after landing
  }, []);

  // Trigger when landing page animation is complete
  const handleLandingComplete = () => {
    setIsLandingComplete(true); // Set landing to complete after animation
    document.body.classList.remove('no-transition'); // Re-enable transitions
  };

  return (
    <div className="app-container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={600}
          classNames="page-transition"
        >
          <Routes location={location}>
            <Route path="/" element={<Landing onComplete={handleLandingComplete} />} />
            <Route path="/home" element={<Home isLandingComplete={isLandingComplete} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/client" element={<Client />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <div className="navigation-arrows">
        {currentIndex > 0 && (
          // biome-ignore lint/a11y/useButtonType: <explanation>
<button className="arrow left-arrow" onClick={() => handleNavigate(-1)}>
            &#8592;
          </button>
        )}
        {currentIndex < pages.length - 1 && (
          // biome-ignore lint/a11y/useButtonType: <explanation>
<button className="arrow right-arrow" onClick={() => handleNavigate(1)}>
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
