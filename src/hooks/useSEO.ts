
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
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage' | 'NewsArticle' | 'CreativeWork';
  breadcrumbs?: Array<{ name: string; url: string }>;
  // Enhanced SEO props
  alternateUrls?: Array<{ hreflang: string; href: string }>;
  canonicalUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  audioUrl?: string;
  rating?: { ratingValue: number; reviewCount: number; bestRating?: number };
  priceRange?: string;
  availability?: string;
  category?: string;
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
  breadcrumbs = [],
  alternateUrls = [],
  canonicalUrl,
  imageAlt,
  videoUrl,
  audioUrl,
  rating,
  priceRange,
  availability,
  category
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
    
    // Enhanced robots directives for better crawling
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('yandex', 'index, follow');
    updateMetaTag('facebookbot', 'index, follow');
    
    // Geo-targeting for Australian businesses (enhanced)
    updateMetaTag('geo.region', 'AU');
    updateMetaTag('geo.country', 'Australia'); 
    updateMetaTag('geo.placename', 'Australia');
    updateMetaTag('geo.position', '-33.8688;151.2093');
    updateMetaTag('ICBM', '-33.8688, 151.2093');
    updateMetaTag('DC.title', title);
    
    // Language and locale (enhanced)
    updateMetaTag('language', 'en-AU');
    updateMetaTag('locale', locale);
    updateMetaTag('content-language', 'en-AU');
    
    // Copyright and rights
    updateMetaTag('copyright', `© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`);
    updateMetaTag('rights', 'Heidi Digital');
    updateMetaTag('publisher', 'Heidi Digital');
    
    // Enhanced classification
    updateMetaTag('classification', 'Business');
    updateMetaTag('category', category || 'Digital Marketing');
    updateMetaTag('coverage', 'Worldwide'); 
    updateMetaTag('distribution', 'Global');
    updateMetaTag('rating', 'General');
    
    // Enhanced Open Graph tags with absolute URL conversion
    const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', absoluteImageUrl, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', imageAlt || title, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:locale:alternate', 'en_US', true);
    updateMetaTag('og:site_name', siteName, true);
    
    // Video and Audio OG tags
    if (videoUrl) {
      updateMetaTag('og:video', videoUrl, true);
      updateMetaTag('og:video:type', 'video/mp4', true);
    }
    if (audioUrl) {
      updateMetaTag('og:audio', audioUrl, true);
      updateMetaTag('og:audio:type', 'audio/mpeg', true);
    }
    
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
    updateMetaTag('twitter:image:alt', imageAlt || title);
    updateMetaTag('twitter:domain', 'heidigital.info');
    updateMetaTag('twitter:url', url);
    
    // Business-specific Twitter tags
    updateMetaTag('twitter:label1', 'Service Area');
    updateMetaTag('twitter:data1', 'Australia');
    updateMetaTag('twitter:label2', 'Price Range');
    updateMetaTag('twitter:data2', priceRange || '$$-$$$');
    
    // Mobile optimization (enhanced)
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', siteName);
    updateMetaTag('apple-touch-fullscreen', 'yes');
    updateMetaTag('format-detection', 'telephone=no');
    
    // Microsoft specific tags (enhanced)
    updateMetaTag('msapplication-TileColor', '#6366f1');
    updateMetaTag('msapplication-TileImage', absoluteImageUrl);
    updateMetaTag('msapplication-config', '/browserconfig.xml');
    updateMetaTag('msapplication-tooltip', description);
    updateMetaTag('msapplication-starturl', '/');
    
    // Update canonical URL
    const finalCanonicalUrl = canonicalUrl || url;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = finalCanonicalUrl;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = finalCanonicalUrl;
      document.head.appendChild(canonicalLink);
    }
    
    // Enhanced alternate language links
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
    
    // Enhanced DNS prefetch and preconnect for performance
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

    // Enhanced WebPage structured data based on schema type
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": title,
      "description": description,
      "url": url,
      "identifier": url,
      "isPartOf": {
        "@type": "WebSite",
        "name": siteName,
        "url": "https://heidigital.info",
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital"
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": absoluteImageUrl,
        "width": 1200,
        "height": 630,
        "caption": imageAlt || title
      },
      "datePublished": publishedTime || new Date().toISOString(),
      "dateModified": modifiedTime || new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": articleAuthor || "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info",
        "logo": {
          "@type": "ImageObject",
          "url": "https://heidigital.info/logo.png",
          "width": 512,
          "height": 512
        }
      }
    };

    // Enhanced schema based on type
    let enhancedSchema = { ...baseSchema };

    if (schemaType === 'NewsArticle') {
      enhancedSchema = {
        ...enhancedSchema,
        "@type": "NewsArticle",
        "headline": title,
        "articleSection": articleSection || "Digital Marketing",
        "wordCount": description.length * 5, // Estimate
        "keywords": articleTags.join(", ") || keywords,
        "articleBody": description,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        }
      };
      
      if (rating) {
        enhancedSchema.aggregateRating = {
          "@type": "AggregateRating",
          "ratingValue": rating.ratingValue,
          "reviewCount": rating.reviewCount,
          "bestRating": rating.bestRating || 5
        };
      }
    }

    if (schemaType === 'CreativeWork') {
      enhancedSchema = {
        ...enhancedSchema,
        "@type": "CreativeWork",
        "creativeWorkStatus": "Published",
        "genre": category || "Digital Marketing",
        "keywords": articleTags.join(", ") || keywords,
        "audience": {
          "@type": "Audience",
          "audienceType": "Business Owners"
        }
      };
    }

    // Add video/audio if provided
    if (videoUrl) {
      enhancedSchema.video = {
        "@type": "VideoObject",
        "contentUrl": videoUrl,
        "description": description,
        "name": title,
        "thumbnailUrl": absoluteImageUrl
      };
    }

    if (audioUrl) {
      enhancedSchema.audio = {
        "@type": "AudioObject",
        "contentUrl": audioUrl,
        "description": description,
        "name": title
      };
    }

    // Add breadcrumb structured data if provided
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": {
            "@type": "WebPage",
            "@id": crumb.url,
            "url": crumb.url
          }
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

    // Add enhanced WebPage schema
    const webPageScript = document.createElement('script');
    webPageScript.type = 'application/ld+json';
    webPageScript.id = 'webpage-schema';
    webPageScript.textContent = JSON.stringify(enhancedSchema);
    
    const existingWebPage = document.getElementById('webpage-schema');
    if (existingWebPage) {
      existingWebPage.remove();
    }
    
    document.head.appendChild(webPageScript);
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs, alternateUrls, canonicalUrl, imageAlt, videoUrl, audioUrl, rating, priceRange, availability, category]);
};
