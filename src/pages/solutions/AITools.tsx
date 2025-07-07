
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import AIToolsGrid from "@/components/solutions/AIToolsGrid";
import AIToolsFeatures from "@/components/solutions/AIToolsFeatures";
import { useSEO } from "@/hooks/useSEO";

const AITools = () => {
  // Enhanced SEO for AI Tools page
  useSEO({
    title: "Free AI Marketing Tools | Automated Campaign Optimization & Analytics | Heidi Digital",
    description: "Supercharge your marketing with our powerful AI-powered tools. Free automated campaign optimization, performance analytics, content generation & ROI tracking. Try now!",
    keywords: "AI marketing tools, automated marketing, AI campaign optimization, marketing automation tools, AI analytics, content generation tools, marketing AI software, free AI tools",
    url: "https://heidigital.info/solutions/ai-tools",
    type: "website",
    image: "https://heidigital.info/og-ai-tools.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" },
      { name: "AI Tools", url: "https://heidigital.info/solutions/ai-tools" }
    ]
  });

  // Add AI Tools structured data
  React.useEffect(() => {
    const softwareApplicationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AI Marketing Tools Suite",
      "description": "Comprehensive collection of AI-powered marketing tools for campaign optimization and performance analytics",
      "url": "https://heidigital.info/solutions/ai-tools",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "softwareVersion": "3.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock"
      },
      "author": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "featureList": [
        "AI Campaign Optimization",
        "Performance Analytics Dashboard",
        "Content Generation Tools",
        "ROI Tracking and Analysis",
        "Automated A/B Testing",
        "Predictive Analytics",
        "Customer Segmentation AI",
        "Marketing Automation Workflows"
      ],
      "screenshot": "https://heidigital.info/ai-tools-screenshot.jpg",
      "downloadUrl": "https://heidigital.info/solutions/ai-tools",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "95",
        "bestRating": "5"
      }
    };

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AI Marketing Tools Collection",
      "description": "Advanced AI-powered marketing tools designed to automate and optimize your marketing campaigns",
      "brand": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "category": "Marketing Software",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "url": "https://heidigital.info/solutions/ai-tools"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Marketing Professional"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "These AI tools have transformed our marketing efficiency. The automation features save us hours every week."
        }
      ]
    };

    const schemas = [softwareApplicationSchema, productSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `ai-tools-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`ai-tools-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`ai-tools-schema-${index}`);
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
          title="AI Marketing Tools"
          subtitle="Supercharge your marketing with our powerful AI-powered tools"
        />

        <section className="py-16 px-4 bg-white" aria-label="AI Tools Collection">
          <div className="container mx-auto">
            <SectionHeading
              title="Our AI Tools Collection"
              subtitle="Cutting-edge AI tools to streamline your marketing workflow"
              centered
            />
            <AIToolsGrid />
          </div>
        </section>

        <section aria-label="AI Tools Features">
          <AIToolsFeatures />
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Ready to Supercharge Your Marketing?"
            description="Get started with our AI tools today and see the difference they can make for your business"
            primaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonText="View Services"
            secondaryButtonLink="/services"
            backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
          />
        </section>
      </main>
    </Layout>
  );
};

export default AITools;
