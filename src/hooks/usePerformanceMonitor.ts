
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
            // Type assertion for PerformanceEventTiming
            const eventEntry = entry as any;
            if (eventEntry.processingStart) {
              console.log('FID:', eventEntry.processingStart - eventEntry.startTime);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            // Type assertion for LayoutShift
            const layoutEntry = entry as any;
            if (layoutEntry.value !== undefined && !layoutEntry.hadRecentInput) {
              console.log('CLS:', layoutEntry.value);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Monitor bundle size and loading times
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navTiming = performance.getEntriesByType('navigation')[0] as any;
          if (navTiming.loadEventEnd && navTiming.fetchStart) {
            console.log('Page Load Time:', navTiming.loadEventEnd - navTiming.fetchStart);
          }
          if (navTiming.domContentLoadedEventEnd && navTiming.fetchStart) {
            console.log('DOM Content Loaded:', navTiming.domContentLoadedEventEnd - navTiming.fetchStart);
          }
        });
      }
    };

    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      observePerformance();
    }
  }, []);
};
