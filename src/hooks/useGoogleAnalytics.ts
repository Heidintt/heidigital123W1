
import { useCallback } from 'react';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label,
        value: parameters.value,
        ...parameters
      });
    }
  }, []);

  const trackPageView = useCallback((page_title: string, page_location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-2RNQ0CPNQQ', {
        page_title,
        page_location,
      });
    }
  }, []);

  const trackContactForm = useCallback((formType: string) => {
    trackEvent('form_submit', {
      category: 'contact',
      label: formType,
      value: 1
    });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, location: string) => {
    trackEvent('button_click', {
      category: 'interaction',
      label: `${buttonName} - ${location}`,
      value: 1
    });
  }, [trackEvent]);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    trackEvent('file_download', {
      category: 'download',
      label: fileName,
      file_extension: fileType,
      value: 1
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackContactForm,
    trackButtonClick,
    trackDownload
  };
};
