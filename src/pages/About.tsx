
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import CompanyIntroduction from "@/components/about/CompanyIntroduction";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseAreas from "@/components/about/ExpertiseAreas";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const About = () => {
  // Set SEO for about page
  useSEO({
    title: "About Heidi Digital - Your Trusted Marketing Partner",
    description: "Learn about Heidi Digital's mission, values, and expertise in AI-powered digital marketing. Discover why we're the trusted partner for your brand development journey.",
    keywords: "about heidi digital, marketing agency, digital marketing experts, AI marketing specialists, brand development",
    url: "https://heidigital.info/about",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Your trusted partner in digital brand development journey"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <CompanyIntroduction />
      <MissionVision />
      <ExpertiseAreas />
      <CoreValues />
      <WhyChooseUs />

      <CallToAction
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how modern marketing strategies can help your business achieve exceptional growth and competitive advantage."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default About;
