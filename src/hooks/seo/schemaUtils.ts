
export const createBaseSchema = ({
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
}: {
  schemaType: string;
  title: string;
  description: string;
  url: string;
  siteName: string;
  absoluteImageUrl: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleAuthor?: string;
}): any => {
  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": description,
    "url": url,
    "identifier": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": siteName,
      "url": "https://heidigital.info",
      "publisher": {
        "@type": "Organization",
        "name": "Heidi Digital"
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": absoluteImageUrl,
      "width": 1200,
      "height": 630,
      "caption": imageAlt || title
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": articleAuthor || "Heidi Digital",
      "url": "https://heidigital.info"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heidi Digital",
      "url": "https://heidigital.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heidigital.info/logo.png",
        "width": 512,
        "height": 512
      }
    }
  };
};

export const enhanceSchemaForType = (
  baseSchema: any,
  schemaType: string,
  {
    title,
    articleSection,
    description,
    articleTags,
    keywords,
    url,
    rating,
    category
  }: {
    title: string;
    articleSection?: string;
    description: string;
    articleTags: string[];
    keywords: string;
    url: string;
    rating?: { ratingValue: number; reviewCount: number; bestRating?: number };
    category?: string;
  }
): any => {
  let enhancedSchema = { ...baseSchema };

  if (schemaType === 'NewsArticle') {
    enhancedSchema = {
      ...enhancedSchema,
      "@type": "NewsArticle",
      "headline": title,
      "articleSection": articleSection || "Digital Marketing",
      "wordCount": description.length * 5, // Estimate
      "keywords": articleTags.join(", ") || keywords,
      "articleBody": description,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };
    
    if (rating) {
      enhancedSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": rating.ratingValue,
        "reviewCount": rating.reviewCount,
        "bestRating": rating.bestRating || 5
      };
    }
  }

  if (schemaType === 'CreativeWork') {
    enhancedSchema = {
      ...enhancedSchema,
      "@type": "CreativeWork",
      "creativeWorkStatus": "Published",
      "genre": category || "Digital Marketing",
      "keywords": articleTags.join(", ") || keywords,
      "audience": {
        "@type": "Audience",
        "audienceType": "Business Owners"
      }
    };
  }

  return enhancedSchema;
};

export const addMediaToSchema = (
  schema: any,
  {
    videoUrl,
    audioUrl,
    absoluteImageUrl,
    title,
    description
  }: {
    videoUrl?: string;
    audioUrl?: string;
    absoluteImageUrl: string;
    title: string;
    description: string;
  }
): any => {
  const updatedSchema = { ...schema };

  if (videoUrl) {
    updatedSchema.video = {
      "@type": "VideoObject",
      "contentUrl": videoUrl,
      "description": description,
      "name": title,
      "thumbnailUrl": absoluteImageUrl
    };
  }

  if (audioUrl) {
    updatedSchema.audio = {
      "@type": "AudioObject",
      "contentUrl": audioUrl,
      "description": description,
      "name": title
    };
  }

  return updatedSchema;
};

export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": {
        "@type": "WebPage",
        "@id": crumb.url,
        "name": crumb.name,
        "url": crumb.url
      }
    }))
  };
};

export const injectSchema = (schema: any, id: string) => {
  if (!schema) return;
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(schema);
  
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};
