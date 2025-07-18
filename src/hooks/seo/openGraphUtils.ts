import { updateMetaTag } from './metaTagUtils';

export const updateOpenGraphTags = ({
  title,
  description,
  absoluteImageUrl,
  imageAlt,
  url,
  type,
  locale = 'en_AU', // Make locale optional with default
  siteName,
  publishedTime,
  modifiedTime,
  articleAuthor,
  articleSection,
  articleTags,
  videoUrl,
  audioUrl
}: {
  title: string;
  description: string;
  absoluteImageUrl: string;
  imageAlt?: string;
  url: string;
  type: string;
  locale?: string; // Make locale optional
  siteName: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags: string[];
  videoUrl?: string;
  audioUrl?: string;
}) => {
  // Enhanced Open Graph tags with absolute URL conversion
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
};