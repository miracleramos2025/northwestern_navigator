import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import BakingPage from './components/BakingPage';
import DecorPage from './components/DecorPage';
import MusicMoviesPage from './components/MusicMoviesPage';
import ContactPage from './components/ContactPage';
import useDarkMode from './hooks/useDarkMode';
import useCarouselToggle from './hooks/useCarouselToggle';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [carouselEnabled, setCarouselEnabled] = useCarouselToggle();

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <header>
          <div className="header-content">
            <h1>How to Holiday!</h1>
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
                  checked={carouselEnabled}
                  onChange={() => setCarouselEnabled(!carouselEnabled)}
                />
                Turn Off Carousel
              </label>
            </div>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/events">Festivities in Chicago</Link>
            <Link to="/baking">Holiday Baking</Link>
            <Link to="/music_movies">Music & Movies</Link>
            <Link to="/decor">Christmas Decor</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/baking" element={<BakingPage />} />
            <Route path="/music_movies" element={<MusicMoviesPage />} />
            <Route path="/decor" element={<DecorPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
