interface BasicMetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  robots: string;
  author: string;
  locale: string;
}

export const useBasicMetaTags = ({
  title,
  description,
  keywords,
  robots,
  author,
  locale
}: BasicMetaTagsProps) => {
  // Helper function to update meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let metaTag = document.querySelector(selector) as HTMLMetaElement;
    
    if (metaTag) {
      metaTag.content = content;
    } else {
      metaTag = document.createElement('meta');
      if (property) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };

  // Update document title
  document.title = title;
  
  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('robots', robots);
  updateMetaTag('author', author);
  
  // Enhanced robots directives
  updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('bingbot', 'index, follow');
  
  // Geo-targeting for Australian businesses
  updateMetaTag('geo.region', 'AU');
  updateMetaTag('geo.placename', 'Australia');
  updateMetaTag('geo.position', '-33.8688;151.2093');
  updateMetaTag('ICBM', '-33.8688, 151.2093');
  
  // Language and locale
  updateMetaTag('language', 'en-AU');
  updateMetaTag('locale', locale);
  
  // Copyright and rights
  updateMetaTag('copyright', `© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`);
  updateMetaTag('rights', 'Heidi Digital');

  return { updateMetaTag };
};