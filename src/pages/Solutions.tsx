
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import AIToolsSection from "@/components/solutions/AIToolsSection";
import FreeResourcesSection from "@/components/solutions/FreeResourcesSection";
import MarketingToolsSection from "@/components/solutions/MarketingToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import NewsletterSection from "@/components/solutions/NewsletterSection";
import { useSEO } from "@/hooks/useSEO";

const Solutions = () => {
  // Enhanced SEO for Solutions page
  useSEO({
    title: "Marketing Solutions Hub | AI Tools & Free Resources | Heidi Digital",
    description: "Explore our comprehensive marketing solutions including AI-powered tools, free resources, calculators, and templates to boost your digital marketing success.",
    keywords: "marketing solutions, AI marketing tools, free marketing resources, digital marketing hub, marketing calculators, SEO tools, content marketing tools",
    url: "https://heidigital.info/solutions",
    type: "website",
    image: "https://heidigital.info/og-solutions.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" }
    ]
  });

  // Add Solutions structured data - removed product schemas to avoid merchant policy errors
  React.useEffect(() => {
    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Marketing Solutions Hub",
      "description": "Comprehensive collection of AI-powered marketing tools and free resources",
      "url": "https://heidigital.info/solutions",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Marketing Solutions",
        "description": "Collection of marketing tools and resources",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "AI Marketing Tools",
            "description": "Advanced AI-powered marketing automation tools",
            "url": "https://heidigital.info/solutions/ai-tools"
          },
          {
            "@type": "ListItem",  
            "position": 2,
            "name": "Free Marketing Resources",
            "description": "Free guides, templates, and checklists for marketers",
            "url": "https://heidigital.info/solutions/free-resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Marketing Tools Hub",
            "description": "Professional marketing tools and calculators",
            "url": "https://heidigital.info/solutions/marketing-tools"
          }
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'solutions-schema';
    script.textContent = JSON.stringify(collectionSchema);
    
    const existing = document.getElementById('solutions-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('solutions-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        <Hero
          title="Marketing Solutions"
          subtitle="Powerful tools and resources to transform your marketing strategy"
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
        />

        <section className="py-16 px-4 bg-white" aria-label="Solutions Overview">
          <div className="container mx-auto">
            <SectionHeading
              title="Choose Your Marketing Solution"
              subtitle="From AI-powered automation to free resources, we have everything you need"
              centered
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <AIToolsSection />
              <FreeResourcesSection />
              <MarketingToolsSection />
            </div>
          </div>
        </section>

        <section aria-label="Featured Tool">
          <FeaturedToolSection />
        </section>

        <section aria-label="Newsletter Signup">
          <NewsletterSection />
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Ready to Transform Your Marketing?"
            description="Get started with our solutions today and see the difference they can make for your business"
            primaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonText="View Portfolio"
            secondaryButtonLink="/portfolio"
            backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
          />
        </section>
      </main>
    </Layout>
  );
};

export default Solutions;
