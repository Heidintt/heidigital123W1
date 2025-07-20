
import React, { useEffect } from 'react';
import { createLocalBusinessSchema } from '@/hooks/seo/localBusinessUtils';

const ContactSchemas = () => {
  useEffect(() => {
    // Use standardized LocalBusiness schema
    const localBusinessSchema = createLocalBusinessSchema({
      name: "Heidigital",
      description: "Leading digital marketing agency in Australia providing comprehensive marketing solutions",
      url: "https://heidigital.info",
      email: "contact@heidigital.info"
    });

    const contactPageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Heidigital - Get Free Marketing Consultation",
      "description": "Contact Australia's leading digital marketing agency for expert consultation and custom marketing solutions",
      "url": "https://heidigital.info/contact",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Heidigital",
        "url": "https://heidigital.info"
      }
    };

    const schemas = [localBusinessSchema, contactPageSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `contact-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`contact-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`contact-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default ContactSchemas;
