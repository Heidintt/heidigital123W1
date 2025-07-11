
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
  // Simplified SEO optimization for homepage
  useSEO({
    title: "Heidi Digital - AI Marketing Agency Australia | SEO & Digital Marketing Services",
    description: "Transform your business with Australia's leading AI-powered digital marketing agency. Expert SEO, social media marketing, content creation & branding services. Free consultation available!",
    keywords: "digital marketing agency australia, AI marketing solutions, SEO services australia, social media marketing, content creation, branding agency, digital advertising, marketing automation",
    url: "https://heidigital.info/",
    type: "website",
    image: "https://heidigital.info/og-homepage.jpg",
    schemaType: "WebPage"
  });

  // Simplified structured data for better SEO performance
  React.useEffect(() => {
    // Single comprehensive schema for the organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://heidigital.info/#organization",
      "name": "Heidi Digital",
      "description": "AI-powered digital marketing agency specializing in SEO, social media marketing, and brand development for Australian businesses",
      "url": "https://heidigital.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heidigital.info/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://heidigital.info/og-homepage.jpg",
      "sameAs": [
        "https://facebook.com/heidigital",
        "https://twitter.com/heidigital",
        "https://linkedin.com/company/heidigital"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-XXX-XXX-XXX",
        "contactType": "customer service",
        "availableLanguage": ["English"]
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
      "knowsAbout": [
        "Digital Marketing",
        "SEO Services",
        "Social Media Marketing",
        "Content Creation",
        "Brand Development",
        "AI Marketing"
      ]
    };

    // Insert schema into head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'organization-schema';
    script.textContent = JSON.stringify(organizationSchema);
    
    // Remove existing schema if present
    const existing = document.getElementById('organization-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const script = document.getElementById('organization-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <main role="main" id="main-content">
        {/* Main H1 heading for SEO */}
        <h1 className="sr-only">Heidi Digital - Australia's Leading AI-Powered Digital Marketing Agency</h1>
        
        {/* Hero section */}
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

        {/* Services section */}
        <section aria-label="Our Services" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Our Digital Marketing Services</h2>
            <ServicesSection />
          </div>
        </section>

        {/* Technology section */}
        <section aria-label="Technology & Tools" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">AI-Powered Marketing Technology</h2>
            <TechnologySection />
          </div>
        </section>

        {/* Portfolio section */}
        <section aria-label="Portfolio Showcase" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Success Stories</h2>
            <PortfolioSection />
          </div>
        </section>

        {/* Blog section */}
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

        {/* Contact section */}
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
