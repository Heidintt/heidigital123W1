
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import servicesData from "@/data/services.json";

const Services = () => {
  // Set SEO for services page with explicit indexing
  useSEO({
    title: "Digital Marketing Services | AI-Powered Solutions | Heidi Digital",
    description: "Comprehensive digital marketing services including SEO, social media marketing, content creation, branding, and AI-powered marketing automation.",
    keywords: "digital marketing services, SEO optimization, social media marketing, content creation services, branding design, digital advertising, AI marketing tools",
    url: "https://heidigital.info/services",
    type: "website",
    robots: "index, follow, max-image-preview:large"
  });

  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Elevate your brand with our comprehensive digital marketing solutions"
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Explore Our Digital Marketing Services"
            subtitle="Transform your online presence with our expert solutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {servicesData.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Grow Your Business?"
        description="Discover how our tailored marketing services can drive growth and enhance your brand's digital footprint."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Services;
