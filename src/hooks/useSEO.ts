
import { useEffect } from 'react';
import { useBasicMetaTags } from './seo/useBasicMetaTags';
import { useOpenGraphTags } from './seo/useOpenGraphTags';
import { useTwitterCardTags } from './seo/useTwitterCardTags';
import { useStructuredData } from './seo/useStructuredData';
import { usePerformanceLinks } from './seo/usePerformanceLinks';

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
  
  // Helper function to convert relative URLs to absolute URLs
  const getAbsoluteUrl = (inputUrl: string) => {
    if (!inputUrl) return "https://heidigital.info/og-image.jpg";
    
    // If already absolute URL, return as-is
    if (inputUrl.startsWith('http')) {
      return inputUrl;
    }
    
    // If relative URL (starts with /), convert to absolute
    if (inputUrl.startsWith('/')) {
      return `https://heidigital.info${inputUrl}`;
    }
    
    // For other cases, assume it needs the domain prefix
    return `https://heidigital.info/${inputUrl}`;
  };

  // Ensure image URL is absolute for social sharing
  const absoluteImageUrl = getAbsoluteUrl(image);
  
  useEffect(() => {
    // Use basic meta tags hook
    const { updateMetaTag } = useBasicMetaTags({
      title,
      description,
      keywords,
      robots,
      author,
      locale
    });

    // Use Open Graph tags hook with absolute image URL
    useOpenGraphTags({
      title,
      description,
      image: absoluteImageUrl,
      url,
      type,
      locale,
      siteName,
      publishedTime,
      modifiedTime,
      articleAuthor,
      articleSection,
      articleTags,
      updateMetaTag
    });

    // Use Twitter Card tags hook with absolute image URL
    useTwitterCardTags({
      title,
      description,
      image: absoluteImageUrl,
      url,
      twitterCreator,
      updateMetaTag
    });

    // Use structured data hook with absolute image URL
    useStructuredData({
      title,
      description,
      image: absoluteImageUrl,
      url,
      siteName,
      publishedTime,
      modifiedTime,
      schemaType,
      breadcrumbs
    });

    // Use performance links hook
    usePerformanceLinks(url);
    
  }, [title, description, keywords, robots, absoluteImageUrl, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs]);
};
