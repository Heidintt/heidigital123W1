
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
  // Remove existing alternate links first
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
  
  // Only add alternate links if explicitly provided
  // Don't add default alternate links to avoid hreflang conflicts
  if (alternateUrls && alternateUrls.length > 0) {
    alternateUrls.forEach(({ hreflang, href }) => {
      const alternateLink = document.createElement('link');
      alternateLink.rel = 'alternate';
      alternateLink.hreflang = hreflang;
      alternateLink.href = href;
      document.head.appendChild(alternateLink);
    });
  }
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
