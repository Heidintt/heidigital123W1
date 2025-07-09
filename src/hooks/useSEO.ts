
import { useEffect } from 'react';
import { SEOProps } from './seo/types';
import { updateBasicMetaTags } from './seo/metaTagUtils';
import { updateOpenGraphTags } from './seo/openGraphUtils';
import { updateTwitterCardTags } from './seo/twitterUtils';
import { updateMobileOptimizationTags } from './seo/mobileUtils';
import { updateCanonicalUrl, updateAlternateLinks, updatePerformanceLinks } from './seo/linkUtils';
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
    
    // Get absolute image URL
    const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
    
    // Update all meta tags
    updateBasicMetaTags({ description, keywords, robots, author, title, locale });
    
    updateOpenGraphTags({
      title,
      description,
      absoluteImageUrl,
      imageAlt,
      url,
      type,
      locale,
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
    
    // Update canonical and alternate URLs
    updateCanonicalUrl(canonicalUrl, url);
    updateAlternateLinks(alternateUrls, url);
    updatePerformanceLinks();

    // Create and inject structured data
    const baseSchema = createBaseSchema({
      schemaType,
      title,
      description,
      url,
      siteName,
      absoluteImageUrl,
      imageAlt,
      publishedTime,
      modifiedTime,
      articleAuthor
    });

    const enhancedSchema = enhanceSchemaForType(baseSchema, schemaType, {
      title,
      articleSection,
      description,
      articleTags,
      keywords,
      url,
      rating,
      category
    });

    const finalSchema = addMediaToSchema(enhancedSchema, {
      videoUrl,
      audioUrl,
      absoluteImageUrl,
      title,
      description
    });

    // Inject breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs);
      if (breadcrumbSchema) {
        injectSchema(breadcrumbSchema, 'breadcrumb-schema');
      }
    }

    // Inject main page schema
    injectSchema(finalSchema, 'webpage-schema');
    
    // Cleanup function to remove schemas when component unmounts
    return () => {
      const schemas = ['breadcrumb-schema', 'webpage-schema'];
      schemas.forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs, alternateUrls, canonicalUrl, imageAlt, videoUrl, audioUrl, rating, priceRange, availability, category]);
};
