import { useEffect } from 'react';
import { SEOProps } from './seo/types';
import { updateBasicMetaTags } from './seo/metaTagUtils';
import { updateOpenGraphTags } from './seo/openGraphUtils';
import { updateTwitterCardTags } from './seo/twitterUtils';
import { updateMobileOptimizationTags } from './seo/mobileUtils';
import { updateCanonicalUrl, updatePerformanceLinks } from './seo/linkUtils';
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
  siteName = "Heidi Digital",
  articleAuthor,
  articleSection,
  articleTags = [],
  twitterCreator = "@heidigital",
  schemaType = "WebPage",
  breadcrumbs = [],
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
    updateBasicMetaTags({ description, keywords, robots, author, title });
    
    updateOpenGraphTags({
      title,
      description,
      absoluteImageUrl,
      imageAlt,
      url,
      type,
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
    
    // Update canonical URL with debugging
    console.log('�� useSEO - canonicalUrl:', canonicalUrl);
    console.log('🔍 useSEO - url:', url);
    updateCanonicalUrl(canonicalUrl, url);
    updatePerformanceLinks();

    // Create and inject structured data
    const baseSchema = createBaseSchema({
      title,
      description,
      url,
      image: absoluteImageUrl,
      type: schemaType,
      author,
      publishedTime,
      modifiedTime,
      rating,
      priceRange,
      availability,
      category
    });

    const enhancedSchema = enhanceSchemaForType(baseSchema, type, {
      articleAuthor,
      articleSection,
      articleTags,
      videoUrl,
      audioUrl
    });

    const schemaWithMedia = addMediaToSchema(enhancedSchema, {
      image: absoluteImageUrl,
      imageAlt,
      videoUrl,
      audioUrl
    });

    const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs, url);
    
    const finalSchema = breadcrumbs.length > 0 
      ? [schemaWithMedia, breadcrumbSchema]
      : schemaWithMedia;

    injectSchema(finalSchema);

    // Cleanup function
    return () => {
      // Remove any dynamically added canonical links on unmount
      const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
      canonicalLinks.forEach(link => {
        if (link.getAttribute('data-dynamic') === 'true') {
          link.remove();
        }
      });
    };
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs, canonicalUrl, imageAlt, videoUrl, audioUrl, rating, priceRange, availability, category]);
};