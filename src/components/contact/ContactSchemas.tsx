
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

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly do you respond to contact inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We respond to all contact inquiries within 24 hours during business days. For urgent matters, we typically respond within 2-4 hours during business hours (9 AM - 6 PM AEST)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer free initial consultations to discuss your marketing needs and provide recommendations. This helps us understand your business goals and how we can best assist you."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I include when contacting you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please include your business name, industry, current marketing challenges, goals, and preferred contact method. The more details you provide, the better we can tailor our initial recommendations."
          }
        }
      ]
    };

    const schemas = [localBusinessSchema, contactPageSchema, faqSchema];
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
