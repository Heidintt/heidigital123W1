interface TwitterCardTagsProps {
  title: string;
  description: string;
  image: string;
  url: string;
  twitterCreator: string;
  updateMetaTag: (name: string, content: string, property?: boolean) => void;
}

export const useTwitterCardTags = ({
  title,
  description,
  image,
  url,
  twitterCreator,
  updateMetaTag
}: TwitterCardTagsProps) => {
  // Enhanced Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:site', '@heidigital');
  updateMetaTag('twitter:creator', twitterCreator);
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:image', image);
  updateMetaTag('twitter:image:alt', title);
  updateMetaTag('twitter:image:width', '1200');
  updateMetaTag('twitter:image:height', '630');
  
  // Additional Twitter tags
  updateMetaTag('twitter:domain', 'heidigital.info');
  updateMetaTag('twitter:url', url);
  
  // Facebook specific tags
  updateMetaTag('fb:app_id', '');
  
  // LinkedIn specific tags  
  updateMetaTag('linkedin:owner', 'heidi-digital');
  
  // Mobile optimization
  updateMetaTag('mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
  updateMetaTag('apple-mobile-web-app-title', 'Heidi Digital');
  
  // Microsoft specific tags
  updateMetaTag('msapplication-TileColor', '#6366f1');
  updateMetaTag('msapplication-TileImage', image);
  updateMetaTag('msapplication-config', '/browserconfig.xml');
};