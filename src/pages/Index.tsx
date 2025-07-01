import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import servicesData from "@/data/services.json";
import homepageData from "@/data/homepage.json";

const Index = () => {
  // Set SEO for homepage with explicit indexing
  useSEO({
    title: "Heidi Digital - AI-Powered Marketing Solutions & Digital Agency",
    description: "Transform your business with professional AI-powered marketing solutions. Expert SEO, social media marketing, content creation, and digital advertising services.",
    keywords: "digital marketing agency, AI marketing, SEO services, social media marketing, content creation, digital advertising, marketing automation, brand development",
    url: "https://heidigital.info/",
    type: "website",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  });

  const { hero, about, services, portfolio, testimonials, callToAction } = homepageData;

  return (
    <Layout>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title={about.title}
            subtitle={about.subtitle}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {about.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title={services.title}
            subtitle={services.subtitle}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {portfolio.items.map((item) => (
              <PortfolioCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title={testimonials.title}
            subtitle={testimonials.subtitle}
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.items.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={callToAction.title}
        description={callToAction.description}
        primaryButtonText={callToAction.primaryButtonText}
        primaryButtonLink={callToAction.primaryButtonLink}
        secondaryButtonText={callToAction.secondaryButtonText}
        secondaryButtonLink={callToAction.secondaryButtonLink}
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Index;
