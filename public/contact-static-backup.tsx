import React from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
// Import các component Contact khác của bạn

const Contact = () => {
  // Enhanced SEO for contact page
  useSEO({
    title: "Contact Us - Heidi Digital | Get Your Free Marketing Consultation",
    description: "Ready to transform your business with AI-powered marketing? Contact Heidi Digital today for your free consultation. Let's discuss how we can help grow your business with proven digital marketing strategies.",
    keywords: "contact heidi digital, free marketing consultation, digital marketing agency contact, marketing services inquiry, get in touch heidi digital",
    url: "https://heidigital.info/contact",
    canonicalUrl: "https://heidigital.info/contact",
    type: "website",
    image: "https://heidigital.info/og-contact.jpg",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Contact", url: "https://heidigital.info/contact" }
    ]
  });

  // Add ContactPage structured data
  React.useEffect(() => {
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Heidi Digital",
      "description": "Get in touch with Heidi Digital for your free marketing consultation",
      "url": "https://heidigital.info/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'contact-schema';
    script.textContent = JSON.stringify(contactSchema);
    
    const existing = document.getElementById('contact-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('contact-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        {/* Thêm nội dung Contact component của bạn ở đây */}
        <h1>Contact Us - Heidi Digital | Get Your Free Marketing Consultation</h1>
        <p>Ready to transform your business with AI-powered marketing? Contact Heidi Digital today for your free consultation. Let's discuss how we can help grow your business with proven digital marketing strategies.</p>
        
        {/* Thêm form contact, thông tin liên hệ, v.v. */}
      </main>
    </Layout>
  );
};

export default Contact;