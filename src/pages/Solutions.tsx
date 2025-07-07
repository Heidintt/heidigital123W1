
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
  // Set SEO for solutions page
  useSEO({
    title: "AI Marketing Tools & Free Resources | Solution Hub | Heidi Digital",
    description: "Access cutting-edge AI marketing tools, free templates, ROI calculators & expert resources. Transform your digital marketing strategy with innovative solutions. Try now!",
    keywords: "AI marketing tools, free marketing resources, marketing templates, ROI calculator, digital marketing hub, marketing automation tools, SEO tools",
    url: "https://heidigital.info/solutions",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Solution Hub"
        subtitle="Explore our cutting-edge tools and free resources to enhance your marketing strategy"
      />

      <MarketingToolsSection />
      <FeaturedToolSection />
      <FreeResourcesSection />
      <NewsletterSection />

      <CallToAction
        title="Need a Custom Solution?"
        description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Solutions;
