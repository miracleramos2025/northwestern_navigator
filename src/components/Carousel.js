import React, { useState, useEffect, useRef, useCallback } from 'react';
import image1 from '../assets/images/home_1.jpeg';
import image2 from '../assets/images/home_2.jpeg';
import image3 from '../assets/images/home_3.jpeg';
import image4 from '../assets/images/home_4.jpeg';
import image5 from '../assets/images/home_5.jpeg';
import image6 from '../assets/images/home_6.png';

const Carousel = ({ carouselEnabled }) => {
  const images = [
    { src: image1, alt: 'Scenic view of Northwestern campus 1' },
    { src: image2, alt: 'Deering Library' },
    { src: image3, alt: 'Northwestern Medicine' }, 
    { src: image4, alt: 'Northwestern Football' },
    { src: image5, alt: 'Northwestern University Arch', className: 'home-5-image' },
    { src: image6, alt: 'Willie the Wildcat' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalIdRef = useRef(null);

  const startInterval = useCallback(() => {
    if (!intervalIdRef.current && carouselEnabled) {
      intervalIdRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  }, [images.length, carouselEnabled]);

  const stopInterval = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (carouselEnabled) {
      startInterval();
    } else {
      stopInterval();
    }
    return () => stopInterval();
  }, [carouselEnabled, startInterval, stopInterval]);

  const nextImage = () => {
    stopInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (carouselEnabled) startInterval();
  };

  const prevImage = () => {
    stopInterval();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (carouselEnabled) startInterval();
  };

  return (
    <div>
      <section id="carousel">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'active' : ''} ${image.className || ''}`}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
          <button
            className="carousel-button prev"
            onClick={prevImage}
            style={{ display: carouselEnabled ? 'block' : 'none' }}
          >
            &#10094;
          </button>
          <button
            className="carousel-button next"
            onClick={nextImage}
            style={{ display: carouselEnabled ? 'block' : 'none' }}
          >
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
