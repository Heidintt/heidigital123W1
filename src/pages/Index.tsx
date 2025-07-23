
import React, { Suspense } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import { useSEO } from "@/hooks/useSEO";
import { createLocalBusinessSchema, createServiceSchema } from "@/hooks/seo/localBusinessUtils";

// Lazy load heavy components with better loading states
const PortfolioSection = React.lazy(() => import("@/components/home/PortfolioSection"));
const BlogSection = React.lazy(() => import("@/components/home/BlogSection"));
const FinalCTASection = React.lazy(() => import("@/components/home/FinalCTASection"));
const ContactSection = React.lazy(() => import("@/components/home/ContactSection"));

// Optimized loading component
const SectionLoader = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full"></div>
);

const Index = React.memo(() => {
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
    const localBusinessSchema = createLocalBusinessSchema();
    const serviceSchema = createServiceSchema();

    const schemas = [localBusinessSchema, serviceSchema];
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
      <main role="main" id="main-content">
        <h1 className="sr-only">Heidigital - Australia's Digital Marketing Agency</h1>
        
        <section aria-label="Hero">
          <Hero
            title="Transform Your Digital Future"
            subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
            ctaText="Start Your Journey"
            ctaLink="/contact"
            secondaryCtaText="Explore Solutions"
            secondaryCtaLink="/solutions/free-resources"
            headingLevel="h2"
          />
        </section>

        <section aria-label="Our Services" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Our Digital Marketing Services</h2>
            <ServicesSection />
          </div>
        </section>

        <section aria-label="Portfolio Showcase" className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Success Stories</h2>
            <Suspense fallback={<SectionLoader />}>
              <PortfolioSection />
            </Suspense>
          </div>
        </section>

        <section aria-label="Latest Blog Posts" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Marketing Insights & Tips</h2>
            <Suspense fallback={<SectionLoader />}>
              <BlogSection />
            </Suspense>
          </div>
        </section>

        <section aria-label="Final Call to Action" className="py-6">
          <Suspense fallback={<SectionLoader />}>
            <FinalCTASection />
          </Suspense>
        </section>

        <section aria-label="Contact Information" className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="sr-only">Get Started Today</h2>
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </div>
        </section>
      </main>
    </Layout>
  );
});

Index.displayName = "Index";

export default Index;
