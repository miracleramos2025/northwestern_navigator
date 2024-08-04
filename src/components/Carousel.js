import React, { useState, useEffect } from 'react';
import home1 from '../assets/images/home_1.jpeg';
import home2 from '../assets/images/home_2.jpeg';
import home3 from '../assets/images/home_3.webp';
import home4 from '../assets/images/home_4.jpeg';
import useCarouselToggle from '../hooks/useCarouselToggle';

const Carousel = () => {
  const images = [home1, home2, home3, home4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselEnabled] = useCarouselToggle();

  useEffect(() => {
    let intervalId;
    if (carouselEnabled) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselEnabled, images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <section id="carousel">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Christmas Home ${index + 1}`} />
            </div>
          ))}
          {carouselEnabled && (
            <>
              <button className="carousel-button prev" onClick={prevImage}>&#10094;</button>
              <button className="carousel-button next" onClick={nextImage}>&#10095;</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
