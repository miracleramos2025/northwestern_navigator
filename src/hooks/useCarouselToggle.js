import { useState, useEffect } from 'react';

function useCarouselToggle() {
  const [carouselEnabled, setCarouselEnabled] = useState(
    localStorage.getItem('carouselEnabled') !== 'disabled'
  );

  useEffect(() => {
    localStorage.setItem('carouselEnabled', carouselEnabled ? 'enabled' : 'disabled');
  }, [carouselEnabled]);

  return [carouselEnabled, setCarouselEnabled];
}

export default useCarouselToggle;
