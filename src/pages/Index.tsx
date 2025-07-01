
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

  return (
    <Layout>
      <Hero
        title={homepageData.hero_title}
        subtitle={homepageData.hero_subtitle}
        backgroundImage={homepageData.hero_image}
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="About Heidi Digital"
            subtitle="Your trusted partner in digital marketing success"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <p className="text-gray-600 text-base">
              We are a leading digital marketing agency specializing in AI-powered marketing solutions that drive real results for businesses of all sizes.
            </p>
            <p className="text-gray-600 text-base">
              Our expert team combines cutting-edge technology with proven marketing strategies to help your brand reach its full potential in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital marketing solutions tailored for your success"
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
            title="Our Portfolio"
            subtitle="Success stories from our valued clients"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <PortfolioCard
              title="FMCG DAO Strategy"
              description="Revolutionizing FMCG brand engagement through DAO-driven marketing strategies."
              image="https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              link="/portfolio/fmcg-dao-strategy"
            />
            <PortfolioCard
              title="Microlino EV Campaign"
              description="Driving awareness and pre-orders for the Microlino electric vehicle."
              image="https://images.unsplash.com/photo-1617584184774-0119c3392e19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              link="/portfolio/microlino-strategy"
            />
            <PortfolioCard
              title="I Choose The Sun"
              description="Creating a viral campaign for Sun Life, promoting financial security."
              image="https://images.unsplash.com/photo-1598515220910-044ca3489489?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              link="/portfolio/i-choose-the-sun"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with us"
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageData.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title={homepageData.cta_text}
        description="Ready to transform your business with our expert marketing solutions? Let's discuss how we can help you achieve your goals."
        primaryButtonText="Get Started Today"
        primaryButtonLink={homepageData.cta_link}
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Index;
