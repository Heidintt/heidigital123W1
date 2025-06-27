
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import CompanyIntroduction from "@/components/about/CompanyIntroduction";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseAreas from "@/components/about/ExpertiseAreas";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const About = () => {
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
