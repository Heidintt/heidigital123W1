
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
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Update robots meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robots);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robots;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOrCreateOGTag = (property: string, content: string) => {
      const ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateOGTag('og:title', title);
    updateOrCreateOGTag('og:description', description);
    updateOrCreateOGTag('og:image', image);
    updateOrCreateOGTag('og:url', url);
    updateOrCreateOGTag('og:type', type);
    updateOrCreateOGTag('og:site_name', siteName);
    updateOrCreateOGTag('og:locale', locale);

    // Update Twitter Card tags
    const updateOrCreateTwitterTag = (name: string, content: string) => {
      const twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', title);
    updateOrCreateTwitterTag('twitter:description', description);
    updateOrCreateTwitterTag('twitter:image', image);
    updateOrCreateTwitterTag('twitter:creator', twitterCreator);

    // Article specific tags
    if (type === 'article') {
      if (articleAuthor) updateOrCreateOGTag('article:author', articleAuthor);
      if (articleSection) updateOrCreateOGTag('article:section', articleSection);
      if (publishedTime) updateOrCreateOGTag('article:published_time', publishedTime);
      if (modifiedTime) updateOrCreateOGTag('article:modified_time', modifiedTime);
      
      articleTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.setAttribute('content', tag);
        document.head.appendChild(meta);
      });
    }

    // Update canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs]);
};
