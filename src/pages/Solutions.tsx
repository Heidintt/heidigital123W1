
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import AIToolsSection from "@/components/solutions/AIToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import FreeResourcesSection from "@/components/solutions/FreeResourcesSection";
import NewsletterSection from "@/components/solutions/NewsletterSection";

const Solutions = () => {
  // Set SEO for solutions page
  useSEO({
    title: "Marketing Solutions & Tools Hub | Heidi Digital",
    description: "Explore our cutting-edge AI marketing tools and free resources to enhance your marketing strategy. Transform your digital marketing with innovative solutions.",
    keywords: "marketing solutions, AI marketing tools, free marketing resources, digital marketing hub, marketing automation",
    url: "https://heidigital.info/solutions",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Solution Hub"
        subtitle="Explore our cutting-edge tools and free resources to enhance your marketing strategy"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AIToolsSection />
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
