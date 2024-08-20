import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Transportation from './components/Transportation';
import Dinning from './components/Dinning';
import StudentLife from './components/StudentLife';
import StudySpaces from './components/StudySpaces';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [carouselEnabled, setCarouselEnabled] = useState(() => {
    const savedSetting = localStorage.getItem('carouselEnabled');
    return savedSetting !== 'disabled';
  });

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <div className="header-content">
            <h1>Northwestern Navigator</h1>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Settings</button>
            <div className="dropdown-content">
              <label>
                <input
                  type="checkbox"
                  id="toggleDarkMode"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                Dark Mode
              </label>
              <label>
                <input
                  type="checkbox"
                  id="toggleCarousel"
                  checked={!carouselEnabled}
                  onChange={() => setCarouselEnabled(!carouselEnabled)}
                />
                Turn Off Carousel
              </label>
            </div>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/StudentLife">Student Life</Link>
            <Link to="/Dinning">Dinning</Link>
            <Link to="/StudySpaces">Study Spaces</Link>
            <Link to="/Transportation">Transportation</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home carouselEnabled={carouselEnabled} />} />
            <Route path="/StudentLife" element={<StudentLife />} />
            <Route path="/Dinning" element={<Dinning />} />
            <Route path="/StudySpaces" element={<StudySpaces />} />
            <Route path="/Transportation" element={<Transportation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
