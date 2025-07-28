
import React, { Suspense } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/home/ServicesSection";
// Lazy load các section lớn
const PortfolioSection = React.lazy(() => import("@/components/home/PortfolioSection"));
const BlogSection = React.lazy(() => import("@/components/home/BlogSection"));
const FinalCTASection = React.lazy(() => import("@/components/home/FinalCTASection"));
const ContactSection = React.lazy(() => import("@/components/home/ContactSection"));
import { useSEO } from "@/hooks/useSEO";
import { createLocalBusinessSchema, createServiceSchema } from "@/hooks/seo/localBusinessUtils";

const Index = () => {
  // Enhanced SEO optimization for homepage with updated meta title
  useSEO({
    title: "Cutting-edge marketing solutions | Heidigital",
    description: "Transform your business with Australia's digital marketing agency. Expert SEO, social media marketing, content creation & branding services. Get your FREE consultation today and boost ROI by 300%!",
    keywords: "digital marketing agency australia, marketing solutions, SEO services australia, social media marketing, content creation, branding agency, digital advertising, marketing automation, ROI optimization, australian marketing agency",
    url: "https://heidigital.info/",
    canonicalUrl: "https://heidigital.info/",
    type: "website",
    image: "https://heidigital.info/og-homepage.jpg"
  });

  // Optimized structured data for better SEO performance
  React.useEffect(() => {
    // Create standardized LocalBusiness schema
    const localBusinessSchema = createLocalBusinessSchema();
    // Create Service schema
    const serviceSchema = createServiceSchema();

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
        <h1 className="sr-only">Heidigital - Australia's Digital Marketing Agency</h1>
        
        {/* Hero section với H2 heading (Đảm bảo Hero render bằng H2, KHÔNG phải H1) */}
        <section aria-label="Hero">
          <Hero
            title="Transform Your Digital Future"
            subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
            ctaText="Start Your Journey"
            ctaLink="/contact"
            secondaryCtaText="Explore Solutions"
            secondaryCtaLink="/solutions/free-resources"
            headingLevel="h2"
            backgroundImage="/images/1-home-digital-marketing-services.avif"
          />
        </section>

        {/* Services section with H2 heading - hidden visually */}
        <section aria-label="Our Services" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Our Digital Marketing Services</h2>
            <ServicesSection />
          </div>
        </section>

        {/* Portfolio section with H2 heading - hidden visually */}
        <section aria-label="Portfolio Showcase" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Success Stories</h2>
            <Suspense fallback={<div>Loading portfolio...</div>}>
              <PortfolioSection />
            </Suspense>
          </div>
        </section>

        {/* Blog section with H2 heading - hidden visually */}
        <section aria-label="Latest Blog Posts" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Marketing Insights & Tips</h2>
            <Suspense fallback={<div>Loading blog...</div>}>
              <BlogSection />
            </Suspense>
          </div>
        </section>

        {/* Final CTA section */}
        <section aria-label="Final Call to Action" className="py-6">
          <Suspense fallback={<div>Loading...</div>}>
            <FinalCTASection />
          </Suspense>
        </section>

        {/* Contact section with H2 heading - hidden visually */}
        <section aria-label="Contact Information" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Get Started Today</h2>
            <Suspense fallback={<div>Loading contact...</div>}>
              <ContactSection />
            </Suspense>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
