
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import AIToolsGrid from "@/components/solutions/AIToolsGrid";
import AIToolsFeatures from "@/components/solutions/AIToolsFeatures";

const AITools = () => {
  return (
    <Layout>
      <Hero
        title="AI Marketing Tools"
        subtitle="Supercharge your marketing with our powerful AI-powered tools"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our AI Tools Collection"
            subtitle="Cutting-edge AI tools to streamline your marketing workflow"
            centered
          />
          <AIToolsGrid />
        </div>
      </section>

      <AIToolsFeatures />

      <CallToAction
        title="Ready to Supercharge Your Marketing?"
        description="Get started with our AI tools today and see the difference they can make for your business"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default AITools;
