
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import MarketingToolsSection from "@/components/solutions/MarketingToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import FreeResourcesSection from "@/components/solutions/FreeResourcesSection";
import NewsletterSection from "@/components/solutions/NewsletterSection";

const Solutions = () => {
  // Enhanced SEO for solutions page
  useSEO({
    title: "Free Marketing Tools & Resources Hub | AI Calculators & Templates | Heidi Digital",
    description: "Access 25+ free AI marketing tools, templates, ROI calculators & expert resources. Boost your digital marketing strategy with innovative solutions. Download now - no signup required!",
    keywords: "free marketing tools, AI marketing calculators, marketing templates, ROI calculator, digital marketing resources, SEO tools, social media templates, marketing automation tools, free marketing guides",
    url: "https://heidigital.info/solutions",
    type: "website",
    image: "https://heidigital.info/og-solutions.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" }
    ]
  });

  // Add Product and SoftwareApplication structured data
  React.useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AI Marketing Tools & Resources Hub",
      "description": "Comprehensive collection of free AI-powered marketing tools, calculators, templates and resources for digital marketers",
      "brand": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": "https://heidigital.info/solutions"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5"
      }
    };

    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AI Marketing Tools Suite",
      "description": "Free online marketing tools including ROI calculators, content planners, and SEO analyzers",
      "url": "https://heidigital.info/solutions",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "softwareVersion": "2.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD"
      },
      "author": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "downloadUrl": "https://heidigital.info/solutions",
      "featureList": [
        "ROI Calculator",
        "Content Calendar Planner",
        "SEO Analyzer",
        "Social Media Templates",
        "Marketing Budget Planner",
        "Conversion Rate Calculator"
      ]
    };

    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use AI Marketing Tools for Business Growth",
      "description": "Step-by-step guide to leveraging AI marketing tools for improved ROI and business growth",
      "totalTime": "PT30M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose Your Marketing Tool",
          "text": "Select the appropriate AI marketing tool based on your specific needs and goals",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Input Your Data",
          "text": "Enter your business data and marketing parameters into the tool",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Analyze Results",
          "text": "Review the AI-generated insights and recommendations",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Implement Strategies",
          "text": "Apply the recommendations to optimize your marketing campaigns",
          "position": 4
        }
      ]
    };

    const schemas = [productSchema, softwareSchema, howToSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `solutions-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`solutions-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`solutions-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        <Hero
          title="Solution Hub"
          subtitle="Explore our cutting-edge tools and free resources to enhance your marketing strategy"
        />

        <section aria-label="Marketing Tools">
          <MarketingToolsSection />
        </section>

        <section aria-label="Featured Tool">
          <FeaturedToolSection />
        </section>

        <section aria-label="Free Resources">
          <FreeResourcesSection />
        </section>

        <section aria-label="Newsletter Signup">
          <NewsletterSection />
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Need a Custom Solution?"
            description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
            primaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonText="Explore Services"
            secondaryButtonLink="/services"
            backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
          />
        </section>
      </main>
    </Layout>
  );
};

export default Solutions;
