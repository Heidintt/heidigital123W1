export const normalizeUrl = (url: string): string => {
  // Remove trailing slash for consistency, except for root URL
  if (url.endsWith('/') && url !== 'https://heidigital.info/') {
    return url.slice(0, -1);
  }
  return url;
};

export const updateCanonicalUrl = (canonicalUrl?: string, url?: string) => {
  // Remove any existing canonical links first
  const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
  existingCanonicals.forEach(link => link.remove());

  // Create new canonical link
  const canonicalLink = document.createElement('link');
  canonicalLink.rel = 'canonical';
  
  // Use canonicalUrl if provided, otherwise use url or current location
  const finalCanonicalUrl = normalizeUrl(canonicalUrl || url || window.location.href);
  canonicalLink.href = finalCanonicalUrl;
  
  // Add to head
  document.head.appendChild(canonicalLink);
  
  // Debug logging
  console.log('✅ Canonical URL set to:', finalCanonicalUrl);
};

export const updatePerformanceLinks = () => {
  const performanceLinks = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//images.unsplash.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//googletagmanager.com' },
    { rel: 'dns-prefetch', href: '//connect.facebook.net' },
    { rel: 'dns-prefetch', href: '//platform.twitter.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://images.unsplash.com' }
  ];
  
  performanceLinks.forEach(({ rel, href, crossorigin }) => {
    let link = document.querySelector(`link[rel="${rel}"][href="${href}"]`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossorigin) {
        link.crossOrigin = crossorigin;
      }
      document.head.appendChild(link);
    }
  });
};