
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
  // New props for enhanced SEO
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  twitterCreator?: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const useSEO = ({
  title = "Heidi Digital - AI-Powered Marketing Solutions",
  description = "Professional AI-powered marketing solutions, digital marketing services, SEO, social media marketing and content creation to transform your business.",
  keywords = "digital marketing, AI marketing, SEO, social media marketing, content creation, branding, digital advertising, marketing agency",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  image = "https://heidigital.info/og-image.jpg",
  url = "https://heidigital.info/",
  type = "website",
  author = "Heidi Digital Team",
  publishedTime,
  modifiedTime,
  locale = "en_AU",
  siteName = "Heidi Digital",
  articleAuthor,
  articleSection,
  articleTags = [],
  twitterCreator = "@heidigital",
  schemaType = "WebPage",
  breadcrumbs = []
}: SEOProps = {}) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (metaTag) {
        metaTag.content = content;
      } else {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    updateMetaTag('author', author);
    
    // Enhanced robots directives
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow');
    
    // Geo-targeting for Australian businesses
    updateMetaTag('geo.region', 'AU');
    updateMetaTag('geo.placename', 'Australia');
    updateMetaTag('geo.position', '-33.8688;151.2093');
    updateMetaTag('ICBM', '-33.8688, 151.2093');
    
    // Language and locale
    updateMetaTag('language', 'en-AU');
    updateMetaTag('locale', locale);
    
    // Copyright and rights
    updateMetaTag('copyright', `© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`);
    updateMetaTag('rights', 'Heidi Digital');
    
    // Enhanced Open Graph tags with absolute URL conversion
    const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', absoluteImageUrl, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:site_name', siteName, true);
    
    // Article-specific Open Graph tags
    if (publishedTime) {
      updateMetaTag('og:article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag('og:article:modified_time', modifiedTime, true);
    }
    if (articleAuthor) {
      updateMetaTag('og:article:author', articleAuthor, true);
    }
    if (articleSection) {
      updateMetaTag('og:article:section', articleSection, true);
    }
    if (articleTags.length > 0) {
      articleTags.forEach(tag => {
        updateMetaTag('og:article:tag', tag, true);
      });
    }
    
    // Enhanced Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@heidigital');
    updateMetaTag('twitter:creator', twitterCreator);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', absoluteImageUrl);
    updateMetaTag('twitter:image:alt', title);
    
    // Additional Twitter tags
    updateMetaTag('twitter:domain', 'heidigital.info');
    updateMetaTag('twitter:url', url);
    
    // Mobile optimization
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', siteName);
    
    // Microsoft specific tags
    updateMetaTag('msapplication-TileColor', '#6366f1');
    updateMetaTag('msapplication-TileImage', absoluteImageUrl);
    updateMetaTag('msapplication-config', '/browserconfig.xml');
    
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

    // Add WebPage structured data
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": title,
      "description": description,
      "url": url,
      "isPartOf": {
        "@type": "WebSite",
        "name": siteName,
        "url": "https://heidigital.info"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": absoluteImageUrl,
        "width": 1200,
        "height": 630
      },
      "datePublished": publishedTime || new Date().toISOString(),
      "dateModified": modifiedTime || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://heidigital.info/logo.png"
        }
      }
    };

    // Add breadcrumb structured data if provided
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      
      const existingBreadcrumb = document.getElementById('breadcrumb-schema');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
      
      document.head.appendChild(breadcrumbScript);
    }

    // Add WebPage schema
    const webPageScript = document.createElement('script');
    webPageScript.type = 'application/ld+json';
    webPageScript.id = 'webpage-schema';
    webPageScript.textContent = JSON.stringify(webPageSchema);
    
    const existingWebPage = document.getElementById('webpage-schema');
    if (existingWebPage) {
      existingWebPage.remove();
    }
    
    document.head.appendChild(webPageScript);
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs]);
};
