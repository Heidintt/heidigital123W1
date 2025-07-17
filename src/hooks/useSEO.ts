import { useEffect } from 'react';
import { SEOProps } from './seo/types';
import { updateBasicMetaTags } from './seo/metaTagUtils';
import { updateOpenGraphTags } from './seo/openGraphUtils';
import { updateTwitterCardTags } from './seo/twitterUtils';
import { updateMobileOptimizationTags } from './seo/mobileUtils';
import { updateCanonicalUrl, updatePerformanceLinks } from './seo/linkUtils'; // XÓA: updateAlternateLinks
import { 
  createBaseSchema, 
  enhanceSchemaForType, 
  addMediaToSchema, 
  createBreadcrumbSchema, 
  injectSchema 
} from './seo/schemaUtils';

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
  // XÓA: locale = "en_AU",
  siteName = "Heidi Digital",
  articleAuthor,
  articleSection,
  articleTags = [],
  twitterCreator = "@heidigital",
  schemaType = "WebPage",
  breadcrumbs = [],
  // XÓA: alternateUrls = [],
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
    
    // Get absolute image URL
    const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
    
    // Update all meta tags
    updateBasicMetaTags({ description, keywords, robots, author, title }); // XÓA: locale
    
    updateOpenGraphTags({
      title,
      description,
      absoluteImageUrl,
      imageAlt,
      url,
      type,
      // XÓA: locale,
      siteName,
      publishedTime,
      modifiedTime,
      articleAuthor,
      articleSection,
      articleTags,
      videoUrl,
      audioUrl
    });
    
    updateTwitterCardTags({
      twitterCreator,
      title,
      description,
      absoluteImageUrl,
      imageAlt,
      url,
      priceRange
    });
    
    updateMobileOptimizationTags(absoluteImageUrl, siteName);
    
    // Update canonical URL only (XÓA alternate)
    updateCanonicalUrl(canonicalUrl, url);
    // XÓA: updateAlternateLinks(alternateUrls, url);
    updatePerformanceLinks();

    // ... rest of the code remains the same
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs, canonicalUrl, imageAlt, videoUrl, audioUrl, rating, priceRange, availability, category]); // XÓA: locale, alternateUrls
};
