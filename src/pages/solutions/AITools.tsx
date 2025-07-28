
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
    title: "Free Marketing Tools | Automated Campaign Optimization & Analytics | Heidi Digital",
    description: "Supercharge your marketing with our powerful tools. Free automated campaign optimization, performance analytics, content generation & ROI tracking. Try now!",
    keywords: "Marketing tools, automated marketing, AI campaign optimization, marketing automation tools, AI analytics, content generation tools, marketing AI software, free AI tools",
    url: "https://heidigital.info/solutions/ai-tools",
    canonicalUrl: "https://heidigital.info/solutions/ai-tools",
    type: "website",
    image: "https://heidigital.info/og-ai-tools.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" },
      { name: "Marketing Tools", url: "https://heidigital.info/solutions/ai-tools" }
    ]
  });

  // Add AI Tools structured data with proper offers
  React.useEffect(() => {
    const softwareApplicationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Marketing Tools Suite",
      "description": "Comprehensive collection of marketing tools for campaign optimization and performance analytics",
      "url": "https://heidigital.info/solutions/ai-tools",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "softwareVersion": "3.0",
      "author": {
        "@type": "LocalBusiness",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
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
      },
      "offers": {
        "@type": "Offer",
        "name": "AI Marketing Tools Access",
        "description": "Full access to our AI marketing tools suite",
        "priceCurrency": "AUD",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "category": "Free Tools"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ai-tools-schema';
    script.textContent = JSON.stringify(softwareApplicationSchema);
    
    const existing = document.getElementById('ai-tools-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('ai-tools-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        <Hero
          title="Marketing Tools"
          subtitle="Supercharge your marketing with our powerful tools"
          backgroundImage="/images/blog/4-home-digital-marketing-services.avif"
        />

        <section className="py-16 px-4 bg-white" aria-label="Tools Collection">
          <div className="container mx-auto">
            <SectionHeading
              title="Our Tools Collection"
              subtitle="Cutting-edge marketing tools to streamline your marketing workflow"
              centered
            />
            <AIToolsGrid />
          </div>
        </section>

        <section aria-label="Tools Features">
          <AIToolsFeatures />
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Ready to Supercharge Your Marketing?"
            description="Get started with our tools today and see the difference they can make for your business"
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
