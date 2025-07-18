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
  locale = 'en_AU' // Make locale optional with default
}: {
  description: string;
  keywords: string;
  robots: string;
  author: string;
  title: string;
  locale?: string; // Make locale optional
}) => {
  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('keywords', keywords);
  updateMetaTag('robots', robots);
  updateMetaTag('author', author);
  
  // Enhanced robots directives for better crawling
  updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('bingbot', 'index, follow');
  updateMetaTag('yandex', 'index, follow');
  updateMetaTag('facebookbot', 'index, follow');
  
  // Geo-targeting for Australian businesses (enhanced)
  updateMetaTag('geo.region', 'AU');
  updateMetaTag('geo.country', 'Australia'); 
  updateMetaTag('geo.placename', 'Australia');
  updateMetaTag('geo.position', '-33.8688;151.2093');
  updateMetaTag('ICBM', '-33.8688, 151.2093');
  updateMetaTag('DC.title', title);
  
  // Language and locale (enhanced)
  updateMetaTag('language', 'en-AU');
  updateMetaTag('locale', locale);
  updateMetaTag('content-language', 'en-AU');
  
  // Copyright and rights
  updateMetaTag('copyright', `© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`);
  updateMetaTag('rights', 'Heidi Digital');
  updateMetaTag('publisher', 'Heidi Digital');
  
  // Enhanced classification
  updateMetaTag('classification', 'Business');
  updateMetaTag('category', 'Digital Marketing');
  updateMetaTag('coverage', 'Worldwide'); 
  updateMetaTag('distribution', 'Global');
  updateMetaTag('rating', 'General');
};