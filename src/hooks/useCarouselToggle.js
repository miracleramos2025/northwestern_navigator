import { useState, useEffect } from 'react';

const useCarouselToggle = () => {
  const [carouselEnabled, setCarouselEnabled] = useState(() => {
    const savedSetting = localStorage.getItem('carouselEnabled');
    return savedSetting !== 'disabled';
  });

  useEffect(() => {
    localStorage.setItem('carouselEnabled', carouselEnabled ? 'enabled' : 'disabled');
  }, [carouselEnabled]);

  return [carouselEnabled, setCarouselEnabled];
};

export default useCarouselToggle;
