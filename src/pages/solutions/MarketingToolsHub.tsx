import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import MarketingToolsSection from "@/components/solutions/MarketingToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const MarketingToolsHub = () => {
  // SEO optimization for Marketing Tools Hub
  useSEO({
    title: "Marketing Tools Hub | All-in-One Digital Marketing Platform | Heidi Digital",
    description: "Complete marketing tools collection including AI content generators, calculators, and automation tools. Boost your marketing efficiency with our toolkit.",
    keywords: "marketing tools hub, digital marketing platform, marketing calculator, content generator, marketing automation, all-in-one marketing",
    url: "https://heidigital.info/solutions/marketing-tools-hub",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Marketing Tools Hub"
        subtitle="Your comprehensive toolkit for digital marketing success - calculators, generators, and automation tools all in one place"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <MarketingToolsSection />
      <FeaturedToolSection />

      <CallToAction
        title="Need Custom Marketing Solutions?"
        description="Our comprehensive toolkit is just the beginning. Let's create tailored marketing strategies for your unique business needs."
        primaryButtonText="Get Custom Strategy"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore All Solutions"
        secondaryButtonLink="/solutions"
        backgroundClass="bg-white"
      />
    </Layout>
  );
};

export default MarketingToolsHub;
