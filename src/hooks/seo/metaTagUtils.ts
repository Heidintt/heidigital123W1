
// Helper function to update meta tags
export const updateMetaTag = (name: string, content: string, property?: boolean) => {
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

export const updateBasicMetaTags = ({
  description,
  keywords,
  robots,
  author,
  title,
  locale
}: {
  description: string;
  keywords: string;
  robots: string;
  author: string;
  title: string;
  locale: string;
}) => {
  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('robots', robots);
  updateMetaTag('author', author);
  
  // Simplified robots directives
  updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large');
  updateMetaTag('bingbot', 'index, follow');
  
  // Geo-targeting for Australian businesses
  updateMetaTag('geo.region', 'AU');
  updateMetaTag('geo.country', 'Australia'); 
  updateMetaTag('geo.placename', 'Australia');
  
  // Language and locale
  updateMetaTag('language', 'en-AU');
  updateMetaTag('locale', locale);
  updateMetaTag('content-language', 'en-AU');
  
  // Copyright and publisher info
  updateMetaTag('copyright', `© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`);
  updateMetaTag('publisher', 'Heidi Digital');
  
  // Classification
  updateMetaTag('classification', 'Business');
  updateMetaTag('category', 'Digital Marketing');
  updateMetaTag('rating', 'General');
};
