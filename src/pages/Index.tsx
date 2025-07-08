
import React from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TechnologySection from "@/components/home/TechnologySection";
import ValuePropsSection from "@/components/home/ValuePropsSection";
import ContactSection from "@/components/home/ContactSection";
import BlogSection from "@/components/home/BlogSection";

const Index = () => {
  // Enhanced SEO for homepage
  useSEO({
    title: "Heidi Digital | AI-Powered Marketing Solutions Australia | Transform Your Business",
    description: "Australia's leading AI-powered digital marketing agency. Transform your business with innovative SEO, social media, content creation & digital advertising solutions. Get results that matter.",
    keywords: "digital marketing agency australia, AI marketing, SEO services, social media marketing, content creation, digital advertising, branding, marketing automation, conversion optimization, australian marketing agency",
    url: "https://heidigital.info/",
    type: "website",
    image: "https://heidigital.info/og-homepage.jpg",
    schemaType: "WebPage",
    breadcrumbs: []
  });

  // Add enhanced structured data for homepage
  React.useEffect(() => {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Heidi Digital",
      "alternateName": "Heidi Digital Marketing Agency",
      "url": "https://heidigital.info",
      "description": "Australia's leading AI-powered digital marketing agency specializing in innovative marketing solutions, brand development, and digital transformation.",
      "publisher": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://heidigital.info/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Heidi Digital",
      "image": "https://heidigital.info/og-homepage.jpg",
      "description": "Australia's leading AI-powered digital marketing agency specializing in innovative marketing solutions, brand development, and digital transformation.",
      "url": "https://heidigital.info",
      "telephone": "+61-xxx-xxx-xxx",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW",
        "addressLocality": "Sydney"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.8688,
        "longitude": 151.2093
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "serviceType": "Digital Marketing Agency",
      "priceRange": "$$"
    };

    const schemas = [websiteSchema, businessSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `homepage-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`homepage-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`homepage-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        {/* Value Props Section */}
        <section aria-label="Value Propositions">
          <ValuePropsSection />
        </section>

        {/* Services Section */}
        <section aria-label="Our Services">
          <ServicesSection />
        </section>

        {/* Portfolio Section */}
        <section aria-label="Portfolio Showcase">
          <PortfolioSection />
        </section>

        {/* Technology Section */}
        <section aria-label="Technology Stack">
          <TechnologySection />
        </section>

        {/* Blog Section */}
        <section aria-label="Latest Blog Posts">
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section aria-label="Contact Information">
          <ContactSection />
        </section>

        {/* Final CTA Section */}
        <section aria-label="Final Call to Action">
          <FinalCTASection />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
