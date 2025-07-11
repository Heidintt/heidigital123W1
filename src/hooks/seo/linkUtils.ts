
export const updateCanonicalUrl = (canonicalUrl?: string, url?: string) => {
  const finalCanonicalUrl = canonicalUrl || url;
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonicalLink) {
    canonicalLink.href = finalCanonicalUrl!;
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = finalCanonicalUrl!;
    document.head.appendChild(canonicalLink);
  }
};

export const updateAlternateLinks = (alternateUrls: Array<{ hreflang: string; href: string }>, url: string) => {
  const defaultAlternateLinks = [
    { hreflang: 'en-AU', href: url },
    { hreflang: 'en', href: url },
    { hreflang: 'x-default', href: url }
  ];
  
  const allAlternateLinks = alternateUrls.length > 0 ? alternateUrls : defaultAlternateLinks;
  
  // Remove existing alternate links
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
  
  allAlternateLinks.forEach(({ hreflang, href }) => {
    const alternateLink = document.createElement('link');
    alternateLink.rel = 'alternate';
    alternateLink.hreflang = hreflang;
    alternateLink.href = href;
    document.head.appendChild(alternateLink);
  });
};

export const updatePerformanceLinks = () => {
  // Simplified and optimized performance links
  const performanceLinks = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
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
