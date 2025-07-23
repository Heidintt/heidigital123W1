
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observePerformance = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Monitor bundle size and loading times
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navTiming = performance.getEntriesByType('navigation')[0];
          console.log('Page Load Time:', navTiming.loadEventEnd - navTiming.fetchStart);
          console.log('DOM Content Loaded:', navTiming.domContentLoadedEventEnd - navTiming.fetchStart);
        });
      }
    };

    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      observePerformance();
    }
  }, []);
};
