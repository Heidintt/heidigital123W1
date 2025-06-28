
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
      icon: Users,
      title: "Social Media Marketing",
      description: "Build and engage your community across all major social platforms with strategic content and targeted campaigns.",
      features: ["Content Strategy", "Community Management", "Paid Social Campaigns", "Analytics & Reporting"],
      link: "/services/social-media"
    },
    {
      icon: Zap,
      title: "Content Creation",
      description: "Create compelling content that tells your brand story and drives engagement across all marketing channels.",
      features: ["Blog Writing", "Video Production", "Graphic Design", "Content Strategy"],
      link: "/services/content-creation"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
      link: "/services/seo"
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Create a strong, memorable brand identity that resonates with your target audience and stands out from competitors.",
      features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Brand Positioning"],
      link: "/services/branding"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Maximize your ROI with targeted digital advertising campaigns across Google, Facebook, and other platforms.",
      features: ["PPC Campaigns", "Social Media Ads", "Display Advertising", "Retargeting"],
      link: "/services/digital-ads"
    },
    {
      icon: Bot,
      title: "AI Marketing Solutions",
      description: "Leverage artificial intelligence to automate and optimize your marketing efforts for better results.",
      features: ["Marketing Automation", "AI Analytics", "Chatbot Development", "Predictive Marketing"],
      link: "/services/ai-marketing"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions to grow your business"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="What We Offer"
            subtitle="End-to-end digital marketing services tailored to your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how our comprehensive digital marketing services can help your business achieve remarkable growth and success in today's competitive landscape."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Services;
