
export interface SocialSharingValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  debugUrls: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
}

export const validateSocialSharing = (url: string): SocialSharingValidation => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check if URL is absolute
  if (!url.startsWith('http')) {
    errors.push('URL must be absolute (start with http/https)');
  }

  // Check for meta tags (this would need to be run in browser context)
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (!ogTitle || !ogTitle.getAttribute('content')) {
    errors.push('Missing og:title meta tag');
  }

  if (!ogDescription || !ogDescription.getAttribute('content')) {
    errors.push('Missing og:description meta tag');
  }

  if (!ogImage || !ogImage.getAttribute('content')) {
    errors.push('Missing og:image meta tag');
  } else {
    const imageUrl = ogImage.getAttribute('content');
    if (imageUrl && !imageUrl.startsWith('http')) {
      warnings.push('OG image should be an absolute URL');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
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
    console.log('Validation:', validation);
    console.log('Debug URLs:', validation.debugUrls);
    console.groupEnd();
  }
};
