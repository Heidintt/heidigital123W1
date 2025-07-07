
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
    title: "About Us | Top Digital Marketing Agency | Heidi Digital",
    description: "Meet Heidi Digital: Leading AI-powered marketing experts with proven results. Discover our mission, values & why we're Australia's trusted digital marketing partner.",
    keywords: "about heidi digital, digital marketing agency, AI marketing experts, marketing specialists, brand development team, marketing consultants australia",
    url: "https://heidigital.info/about",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Your trusted partner in digital brand development journey"
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
