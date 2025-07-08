export const usePerformanceLinks = (url: string) => {
  // Update canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonicalLink) {
    canonicalLink.href = url;
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = url;
    document.head.appendChild(canonicalLink);
  }
  
  // Add alternate language links
  const alternateLinks = [
    { hreflang: 'en-AU', href: url },
    { hreflang: 'en', href: url },
    { hreflang: 'x-default', href: url }
  ];
  
  alternateLinks.forEach(({ hreflang, href }) => {
    let alternateLink = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement;
    if (alternateLink) {
      alternateLink.href = href;
    } else {
      alternateLink = document.createElement('link');
      alternateLink.rel = 'alternate';
      alternateLink.hreflang = hreflang;
      alternateLink.href = href;
      document.head.appendChild(alternateLink);
    }
  });
  
  // Add DNS prefetch and preconnect for performance
  const performanceLinks = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//images.unsplash.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
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