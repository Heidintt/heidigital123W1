
import { updateMetaTag } from './metaTagUtils';

export const updateTwitterCardTags = ({
  twitterCreator,
  title,
  description,
  absoluteImageUrl,
  imageAlt,
  url,
  priceRange
}: {
  twitterCreator: string;
  title: string;
  description: string;
  absoluteImageUrl: string;
  imageAlt?: string;
  url: string;
  priceRange?: string;
}) => {
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
};
