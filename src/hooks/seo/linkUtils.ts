export const normalizeUrl = (url: string): string => {
  // Remove trailing slash for consistency, except for root URL
  if (url.endsWith('/') && url !== 'https://heidigital.info/') {
    return url.slice(0, -1);
  }
  return url;
};

export const updateCanonicalUrl = (canonicalUrl?: string, url?: string) => {
  const finalCanonicalUrl = normalizeUrl(canonicalUrl || url || window.location.href);
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonicalLink) {
    canonicalLink.href = finalCanonicalUrl;
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = finalCanonicalUrl;
    document.head.appendChild(canonicalLink);
  }
};

// XÓA HOÀN TOÀN HÀM NÀY
// export const updateAlternateLinks = (alternateUrls: Array<{ hreflang: string; href: string }>, url: string) => { ... };

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
