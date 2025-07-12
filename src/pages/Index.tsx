import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TechnologySection from "@/components/home/TechnologySection";
import PortfolioSection from "@/components/home/PortfolioSection";
import BlogSection from "@/components/home/BlogSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ContactSection from "@/components/home/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // Enhanced SEO optimization for homepage with updated meta title
  useSEO({
    title: "Cutting-edge marketing solutions | Heidigital",
    description: "Transform your business with Australia's digital marketing agency. Expert SEO, social media marketing, content creation & branding services. Get your FREE consultation today and boost ROI by 300%!",
    keywords: "digital marketing agency australia, AI marketing solutions, SEO services australia, social media marketing, content creation, branding agency, digital advertising, marketing automation, ROI optimization, australian marketing agency",
    url: "https://heidigital.info/",
    type: "website",
    image: "https://heidigital.info/og-homepage.jpg"
  });

  // Optimized structured data for better SEO performance
  React.useEffect(() => {
    // LocalBusiness Schema for Australian presence
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://heidigital.info",
      "name": "Heidi Digital",
      "description": "Digital marketing agency in Australia specializing in SEO, social media marketing, and brand development",
      "url": "https://heidigital.info",
      "email": "info@heidigital.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heidigital.info/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://heidigital.info/og-homepage.jpg",
      "priceRange": "AUD 500-5000",
      "openingHours": "Mo-Fr 09:00-18:00",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.8688,
        "longitude": 151.2093
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW",
        "addressLocality": "Sydney"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 127,
        "bestRating": 5
      }
    };

    // Service Schema for digital marketing services
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing Services",
      "provider": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "serviceType": "Digital Marketing",
      "description": "Comprehensive digital marketing services including SEO, social media marketing, content creation, and brand development",
      "areaServed": "Australia",
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
        }
      ]
    };

    // Insert schemas into head
    const schemas = [localBusinessSchema, serviceSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `homepage-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      // Remove existing schema if present
      const existing = document.getElementById(`homepage-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Cleanup function
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
      <main role="main" id="main-content">
        {/* Main H1 heading for SEO - hidden visually but accessible to screen readers */}
        <h1 className="sr-only">Heidi Digital - Australia's Leading AI-Powered Digital Marketing Agency</h1>
        
        {/* Hero section with H2 heading */}
        <section aria-label="Hero">
          <Hero
            title="Transform Your Digital Future"
            subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
            ctaText="Start Your Journey"
            ctaLink="/contact"
            secondaryCtaText="Explore Solutions"
            secondaryCtaLink="/solutions/free-resources"
          />
        </section>

        {/* Services section with H2 heading - hidden visually */}
        <section aria-label="Our Services" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Our Digital Marketing Services</h2>
            <ServicesSection />
          </div>
        </section>

        {/* Technology section with H2 heading - hidden visually */}
        <section aria-label="Technology & Tools" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">AI-Powered Marketing Technology</h2>
            <TechnologySection />
          </div>
        </section>

        {/* Portfolio section with H2 heading - hidden visually */}
        <section aria-label="Portfolio Showcase" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Success Stories</h2>
            <PortfolioSection />
          </div>
        </section>

        {/* Blog section with H2 heading - hidden visually */}
        <section aria-label="Latest Blog Posts" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Marketing Insights & Tips</h2>
            <BlogSection />
          </div>
        </section>

        {/* Final CTA section */}
        <section aria-label="Final Call to Action" className="py-6">
          <FinalCTASection />
        </section>

        {/* Contact section with H2 heading - hidden visually */}
        <section aria-label="Contact Information" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Get Started Today</h2>
            <ContactSection />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
