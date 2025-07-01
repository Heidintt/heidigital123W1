
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
import { Brain, PenTool, Search, Share2 } from "lucide-react";

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

  const iconMap = {
    Brain,
    PenTool,
    Search,
    Share2
  };

  return (
    <Layout>
      <Hero
        title={homepageData.hero_title}
        subtitle={homepageData.hero_subtitle}
        backgroundImage={homepageData.hero_image}
        ctaText={homepageData.cta_text}
        ctaLink={homepageData.cta_link}
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="About Heidi Digital"
            subtitle="AI-Powered Marketing Solutions That Drive Results"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <p className="text-gray-600 text-base">
              We are a leading digital marketing agency specializing in AI-powered solutions that transform businesses and drive measurable results.
            </p>
            <p className="text-gray-600 text-base">
              Our expert team combines cutting-edge technology with creative strategies to help your brand succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive AI-powered marketing solutions tailored to your business needs"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {homepageData.services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title}
                description={service.description}
                icon={iconMap[service.icon as keyof typeof iconMap]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="Our Work"
            subtitle="Explore our successful digital marketing campaigns and case studies"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <PortfolioCard
              title="FMCG DAO Strategy"
              description="Revolutionizing FMCG brand engagement through DAO-driven marketing strategies."
              image="https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Strategy", "DAO"]}
              link="/portfolio/fmcg-dao-strategy"
            />
            <PortfolioCard
              title="Microlino EV Campaign"
              description="Driving awareness and pre-orders for the Microlino electric vehicle with innovative digital campaigns."
              image="https://images.unsplash.com/photo-1617584184774-0119c3392e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVWfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Campaign", "EV"]}
              link="/portfolio/microlino-strategy"
            />
            <PortfolioCard
              title="I Choose The Sun"
              description="Creating a viral campaign for Sun Life, promoting financial security and bright futures."
              image="https://images.unsplash.com/photo-1598515220910-044ca3489489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VubGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Viral", "Campaign"]}
              link="/portfolio/i-choose-the-sun"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials from satisfied customers"
            centered
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageData.testimonials.map((item, index) => (
              <TestimonialCard 
                key={index} 
                quote={item.quote}
                author={item.name}
                company={item.company}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Grow Your Business?"
        description="Transform your digital presence with our AI-powered marketing solutions"
        primaryButtonText={homepageData.cta_text}
        primaryButtonLink={homepageData.cta_link}
        secondaryButtonText="View Our Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Index;
