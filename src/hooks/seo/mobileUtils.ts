
import { updateMetaTag } from './metaTagUtils';

export const updateMobileOptimizationTags = (absoluteImageUrl: string, siteName: string) => {
  // Mobile optimization (enhanced)
  updateMetaTag('mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
  updateMetaTag('apple-mobile-web-app-title', siteName);
  updateMetaTag('apple-touch-fullscreen', 'yes');
  updateMetaTag('format-detection', 'telephone=no');
  
  // Microsoft specific tags (enhanced)
  updateMetaTag('msapplication-TileColor', '#6366f1');
  updateMetaTag('msapplication-TileImage', '/images/logo.png');
  updateMetaTag('msapplication-config', '/browserconfig.xml');
  updateMetaTag('msapplication-tooltip', 'Heidi Digital - AI-Powered Marketing Solutions');
  updateMetaTag('msapplication-starturl', '/');
};
