
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AIToolsSection from "@/components/solutions/AIToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import AIToolsFeatures from "@/components/solutions/AIToolsFeatures";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const AITools = () => {
  // SEO optimization for Tools page
  useSEO({
    title: "Marketing Tools & Calculators | Free Digital Marketing Solutions | Heidi Digital",
    description: "Comprehensive marketing tools including ROI calculator, budget planner, and optimization solutions. Free tools for businesses to improve marketing performance.",
    keywords: "marketing tools, ROI calculator, budget planner, marketing automation, digital marketing solutions, free marketing tools",
    url: "https://heidigital.info/solutions/ai-tools",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Marketing Tools"
        subtitle="Comprehensive suite of marketing tools to automate, optimize, and enhance your digital campaigns"
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AIToolsFeatures />
      <AIToolsSection />
      <FeaturedToolSection />

      <CallToAction
        title="Ready to Optimize Your Marketing?"
        description="Discover how our comprehensive toolkit can help you achieve better results and drive growth for your business."
        primaryButtonText="Explore All Tools"
        primaryButtonLink="/solutions"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-purple-600 to-blue-600"
      />
    </Layout>
  );
};

export default AITools;
