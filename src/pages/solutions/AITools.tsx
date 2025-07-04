import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AIToolsSection from "@/components/solutions/AIToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import AIToolsFeatures from "@/components/solutions/AIToolsFeatures";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const AITools = () => {
  // SEO optimization for AI Tools page
  useSEO({
    title: "AI Marketing Tools & Automation | Free AI-Powered Solutions | Heidi Digital",
    description: "Powerful AI marketing tools to automate your campaigns. Free ROI calculator, budget planner, and AI-powered marketing solutions for businesses.",
    keywords: "AI marketing tools, marketing automation, AI-powered solutions, free marketing tools, ROI calculator, budget planner, marketing AI",
    url: "https://heidigital.info/solutions/ai-tools",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="AI Marketing Tools"
        subtitle="Harness the power of artificial intelligence to automate and optimize your marketing campaigns"
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <AIToolsFeatures />
      <AIToolsSection />
      <FeaturedToolSection />

      <CallToAction
        title="Ready to Transform Your Marketing with AI?"
        description="Discover how our AI-powered tools can revolutionize your marketing strategy and drive better results."
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
