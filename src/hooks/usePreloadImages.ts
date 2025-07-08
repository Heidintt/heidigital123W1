
import { useEffect } from 'react';

export const usePreloadImages = (imageUrls: string[]) => {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, [imageUrls]);
};
