
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
}

export const useSEO = ({
  title = "Heidi Digital - AI-Powered Marketing Solutions",
  description = "Professional AI-powered marketing solutions, digital marketing services, SEO, social media marketing and content creation to transform your business.",
  keywords = "digital marketing, AI marketing, SEO, social media marketing, content creation, branding, digital advertising, marketing agency",
  image = "https://heidigital.info/og-image.jpg",
  url = "https://heidigital.info/",
  type = "website",
  robots = "index, follow"
}: SEOProps = {}) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
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

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
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

    // Add structured data for better indexing
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebSite",
      "name": title,
      "description": description,
      "url": url,
      "image": image,
      ...(type === "website" && {
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital",
          "url": "https://heidigital.info"
        }
      })
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
    if (structuredDataScript) {
      structuredDataScript.innerHTML = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }
  }, [title, description, keywords, image, url, type, robots]);
};
