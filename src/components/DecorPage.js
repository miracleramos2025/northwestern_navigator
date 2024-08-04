import React from 'react';
import decor1 from '../assets/images/decor_1.avif';
import decor2 from '../assets/images/decor_2.jpeg';

const DecorPage = () => (
  <div>
    <h2>Christmas Decorations</h2>
    <div className="media-item">
      <img src={decor1} alt="Candy Cane Lane Lights" />
      <div className="media-text">
        <h3>Candy Cane Lane Lights</h3>
        <p>Light up your Christmas with outdoor Christmas Candy Cane Lights! Create a festive and welcoming atmosphere.</p>
        <p>Buy <a href="https://a.co/d/39F3kDl" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>
    <div className="media-item">
      <img src={decor2} alt="Snow Flocked Artificial Full Christmas Tree" />
      <div className="media-text">
        <h3>Snow Flocked Artificial Full Christmas Tree</h3>
        <p>Spark festive cheer with our 6ft snow flocked artificial Christmas pine tree; Its distinct, snow-covered appearance and 880 bendable branch tips can be conveniently decorated with ornaments for an elegant and tailored holiday vibe.</p>
        <p>Buy <a href="https://a.co/d/bwBzipw" target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
    </div>
  </div>
);

export default DecorPage;
