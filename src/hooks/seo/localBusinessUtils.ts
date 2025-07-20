export const createLocalBusinessSchema = ({
  name = "Heidigital",
  description = "Leading digital marketing agency in Australia providing comprehensive marketing solutions",
  url = "https://heidigital.info",
  email = "contact@heidigital.info"
}: {
  name?: string;
  description?: string;
  url?: string;
  email?: string;
} = {}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    "name": name,
    "alternateName": "Heidigital Marketing Agency",
    "description": description,
    "url": url,
    "email": email,
    "telephone": "+61432488786",
    "priceRange": "$0-$100",
    "logo": {
      "@type": "ImageObject",
      "url": "https://heidigital.info/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://heidigital.info/og-homepage.jpg",
    "openingHours": "Mo-Fr 09:00-18:00",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "addressRegion": "Australia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.2744,
      "longitude": 133.7751
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": email,
        "telephone": "+61432488786",
        "availableLanguage": ["English"],
        "areaServed": "AU",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    ],
    "sameAs": [
      "https://facebook.com/heidigital",
      "https://linkedin.com/company/heidigital",
      "https://twitter.com/heidigital"
    ]
  };
};

export const createServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Heidi Digital",
      "url": "https://heidigital.info"
    },
    "serviceType": "Digital Marketing",
    "description": "Comprehensive digital marketing services including SEO, social media marketing, content creation, and brand development",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "SEO Services",
        "description": "Advanced SEO strategies to improve search rankings",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Social Media Marketing",
        "description": "Strategic social media management and advertising",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Content Creation",
        "description": "Professional content creation and copywriting services",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };
};
