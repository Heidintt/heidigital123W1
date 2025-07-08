interface OpenGraphTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  locale: string;
  siteName: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  updateMetaTag: (name: string, content: string, property?: boolean) => void;
}

export const useOpenGraphTags = ({
  title,
  description,
  image,
  url,
  type,
  locale,
  siteName,
  publishedTime,
  modifiedTime,
  articleAuthor,
  articleSection,
  articleTags = [],
  updateMetaTag
}: OpenGraphTagsProps) => {
  // Enhanced Open Graph tags - Always provide og:image explicitly
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:image', image.startsWith('http') ? image : `https://heidigital.info${image}`, true);
  updateMetaTag('og:image:secure_url', image.startsWith('http') ? image : `https://heidigital.info${image}`, true);
  updateMetaTag('og:image:width', '1200', true);
  updateMetaTag('og:image:height', '630', true);
  updateMetaTag('og:image:alt', title, true);
  updateMetaTag('og:image:type', 'image/jpeg', true);
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
};