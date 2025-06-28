
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { Zap, Users, BarChart3, Palette, Target, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Marketing Strategy",
      description: "Leverage artificial intelligence to create data-driven marketing strategies that deliver measurable results and optimize your marketing ROI.",
      price: "Competitive & Flexible"
    },
    {
      icon: Zap,
      title: "Content Creation & SEO",
      description: "AI-generated content that ranks high on search engines and engages your target audience with compelling storytelling.",
      price: "Competitive & Flexible"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management powered by AI insights to build and grow your online community.",
      price: "Competitive & Flexible"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive marketplace.",
      price: "Competitive & Flexible"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Maximize your ROI with AI-optimized advertising campaigns across Google, Facebook, and other major platforms.",
      price: "Competitive & Flexible"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies and technical optimization techniques.",
      price: "Competitive & Flexible"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Comprehensive Digital Marketing Services"
        subtitle="AI-powered marketing solutions that drive real results and accelerate your business growth in the digital landscape"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Get Started Today"
        ctaLink="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/portfolio"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Digital Marketing Services"
            subtitle="End-to-end marketing solutions designed to transform your business and drive sustainable growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Let's Grow Your Business Together"
        description="Schedule a free consultation to discover how our AI-powered marketing services can drive significant growth for your business in today's competitive landscape."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Case Studies"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Services;
