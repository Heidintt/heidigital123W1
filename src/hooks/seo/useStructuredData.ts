interface StructuredDataProps {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemaType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const useStructuredData = ({
  title,
  description,
  image,
  url,
  siteName,
  publishedTime,
  modifiedTime,
  schemaType,
  breadcrumbs = []
}: StructuredDataProps) => {
  // Add WebPage structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": "https://heidigital.info"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Heidi Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heidi Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heidigital.info/logo.png"
      }
    }
  };

  // Add breadcrumb structured data if provided
  if (breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    
    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }
    
    document.head.appendChild(breadcrumbScript);
  }

  // Add WebPage schema
  const webPageScript = document.createElement('script');
  webPageScript.type = 'application/ld+json';
  webPageScript.id = 'webpage-schema';
  webPageScript.textContent = JSON.stringify(webPageSchema);
  
  const existingWebPage = document.getElementById('webpage-schema');
  if (existingWebPage) {
    existingWebPage.remove();
  }
  
  document.head.appendChild(webPageScript);
};