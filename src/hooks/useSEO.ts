
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
    try {
      console.log("useSEO: Starting SEO setup...");
      
      // Update document title safely
      if (typeof document !== 'undefined' && document.title !== title) {
        document.title = title;
      }
      
      // Get absolute image URL
      const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
      
      // Update all meta tags with error handling
      try {
        updateBasicMetaTags({ description, keywords, robots, author, title, locale });
      } catch (error) {
        console.warn("Error updating basic meta tags:", error);
      }
      
      try {
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
      } catch (error) {
        console.warn("Error updating OpenGraph tags:", error);
      }
      
      try {
        updateTwitterCardTags({
          twitterCreator,
          title,
          description,
          absoluteImageUrl,
          imageAlt,
          url,
          priceRange
        });
      } catch (error) {
        console.warn("Error updating Twitter cards:", error);
      }
      
      try {
        updateMobileOptimizationTags(absoluteImageUrl, siteName);
      } catch (error) {
        console.warn("Error updating mobile tags:", error);
      }
      
      // Update canonical and alternate URLs
      try {
        updateCanonicalUrl(canonicalUrl, url);
        updateAlternateLinks(alternateUrls, url);
        updatePerformanceLinks();
      } catch (error) {
        console.warn("Error updating link tags:", error);
      }

      // Create and inject structured data with error handling
      try {
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
      } catch (error) {
        console.warn("Error updating structured data:", error);
      }
      
      console.log("useSEO: SEO setup completed successfully");
      
    } catch (error) {
      console.error("useSEO: Critical error in SEO setup:", error);
    }
    
    // Cleanup function with error handling
    return () => {
      try {
        const schemas = ['breadcrumb-schema', 'webpage-schema'];
        schemas.forEach(id => {
          const script = document.getElementById(id);
          if (script) {
            script.remove();
          }
        });
      } catch (error) {
        console.warn("Error cleaning up SEO schemas:", error);
      }
    };
    
  }, [title, description, keywords, robots, image, url, type, author, publishedTime, modifiedTime, locale, siteName, articleAuthor, articleSection, articleTags, twitterCreator, schemaType, breadcrumbs, alternateUrls, canonicalUrl, imageAlt, videoUrl, audioUrl, rating, priceRange, availability, category]);
};
