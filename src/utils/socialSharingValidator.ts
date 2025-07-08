
export interface SocialSharingValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  debugUrls: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  metaTags: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}

export const validateSocialSharing = (url: string): SocialSharingValidation => {
  const errors: string[] = [];
  const warnings: string[] = [];
  const metaTags: any = {};

  // Check if URL is absolute
  if (!url.startsWith('http')) {
    errors.push('URL must be absolute (start with http/https)');
  }

  // Check for meta tags (this would need to be run in browser context)
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  if (!ogTitle || !ogTitle.getAttribute('content')) {
    errors.push('Missing og:title meta tag');
  } else {
    metaTags.title = ogTitle.getAttribute('content');
  }

  if (!ogDescription || !ogDescription.getAttribute('content')) {
    errors.push('Missing og:description meta tag');
  } else {
    metaTags.description = ogDescription.getAttribute('content');
  }

  if (!ogImage || !ogImage.getAttribute('content')) {
    errors.push('Missing og:image meta tag');
  } else {
    const imageUrl = ogImage.getAttribute('content');
    metaTags.image = imageUrl;
    if (imageUrl && !imageUrl.startsWith('http')) {
      warnings.push('OG image should be an absolute URL');
    }
  }

  if (!ogUrl || !ogUrl.getAttribute('content')) {
    warnings.push('Missing og:url meta tag');
  } else {
    metaTags.url = ogUrl.getAttribute('content');
  }

  // Additional validations
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (!twitterCard || !twitterCard.getAttribute('content')) {
    warnings.push('Missing Twitter card meta tag');
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical || !canonical.getAttribute('href')) {
    warnings.push('Missing canonical link');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    metaTags,
    debugUrls: {
      facebook: `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(url)}`,
      twitter: `https://cards-dev.twitter.com/validator`
    }
  };
};

// Helper để log debug info trong development
export const logSocialSharingDebug = (url: string) => {
  if (process.env.NODE_ENV === 'development') {
    const validation = validateSocialSharing(url);
    console.group('🔍 Social Sharing Debug');
    console.log('URL:', url);
    console.log('Meta Tags Found:', validation.metaTags);
    console.log('Validation:', validation);
    console.log('Debug URLs:', validation.debugUrls);
    console.log('📋 Test these URLs:');
    console.log('- Facebook:', validation.debugUrls.facebook);
    console.log('- LinkedIn:', validation.debugUrls.linkedin);
    console.log('- Twitter:', validation.debugUrls.twitter);
    console.groupEnd();
  }
};

// New function to test social sharing from console
export const testSocialSharing = () => {
  const currentUrl = window.location.href;
  logSocialSharingDebug(currentUrl);
  
  console.log('🚀 Quick Test Links:');
  console.log('Facebook Debugger:', `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`);
  console.log('LinkedIn Inspector:', `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(currentUrl)}`);
  console.log('Twitter Validator:', 'https://cards-dev.twitter.com/validator');
  
  return validateSocialSharing(currentUrl);
};

// Make it available globally for easy testing
if (typeof window !== 'undefined') {
  (window as any).testSocialSharing = testSocialSharing;
}
