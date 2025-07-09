
import React, { useEffect } from 'react';

const ContactSchemas = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heidi Digital",
      "description": "Leading digital marketing agency in Australia providing comprehensive marketing solutions",
      "url": "https://heidigital.info",
      "email": "contact@heidigital.info",
      "openingHours": [
        "Mo-Fr 09:00-18:00"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@heidigital.info",
          "availableLanguage": ["English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "contact@heidigital.info",
          "availableLanguage": ["English"]
        }
      ],
      "priceRange": "$$-$$$",
      "serviceArea": {
        "@type": "Country",
        "name": "Australia"
      }
    };

    const contactPageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Heidi Digital - Get Free Marketing Consultation",
      "description": "Contact Australia's leading digital marketing agency for expert consultation and custom marketing solutions",
      "url": "https://heidigital.info/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Heidi Digital"
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
