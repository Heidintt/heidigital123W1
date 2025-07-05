
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ValuePropsSection from "@/components/home/ValuePropsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechnologySection from "@/components/home/TechnologySection";
import PortfolioSection from "@/components/home/PortfolioSection";
import BlogSection from "@/components/home/BlogSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ContactSection from "@/components/home/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // SEO optimization for homepage
  useSEO({
    title: "Digital Marketing Agency | AI-Powered Solutions | Heidi Digital",
    description: "Transform your business with AI-powered digital marketing strategies. Expert SEO, social media, content creation & branding services. Get your free consultation today!",
    keywords: "digital marketing agency, AI marketing solutions, SEO services, social media marketing, content creation, branding, digital advertising",
    url: "https://heidigital.info/",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Transform Your Digital Future"
        subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Start Your Journey"
        ctaLink="/contact"
        secondaryCtaText="Explore Solutions"
        secondaryCtaLink="/solutions"
      />

      <ValuePropsSection />
      <ServicesSection />
      <TechnologySection />
      <PortfolioSection />
      <BlogSection />
      <FinalCTASection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
