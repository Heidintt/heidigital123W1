// Image optimization utilities to help reduce load times and improve Core Web Vitals

export const preloadCriticalImages = () => {
  const criticalImages = [
    '/images/1-home-digital-marketing-services.avif',
    '/images/logo.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
  });

  images.forEach(img => imageObserver.observe(img));
};

export const generateSrcSet = (basePath: string, sizes: number[] = [400, 800, 1200]) => {
  const extension = basePath.split('.').pop();
  const pathWithoutExt = basePath.replace(/\.[^/.]+$/, '');
  
  return sizes.map(size => `${pathWithoutExt}-${size}.${extension} ${size}w`).join(', ');
};

export const optimizeImageLoading = () => {
  // Preload critical images
  preloadCriticalImages();
  
  // Set up lazy loading for other images
  if ('IntersectionObserver' in window) {
    lazyLoadImages();
  }
  
  // Add loading attributes to existing images
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.loading = 'lazy';
    }
    if (!img.hasAttribute('decoding')) {
      img.decoding = 'async';
    }
  });
};