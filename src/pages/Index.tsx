import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import { 
  Brain, Zap, Users, Image, Target, BarChart3 
} from "lucide-react";

const Index = () => {
  // SEO optimization for homepage
  useSEO({
    title: "Digital Marketing Agency | AI-Powered Solutions | Heidi Digital",
    description: "Transform your business with AI-powered digital marketing strategies. Expert SEO, social media, content creation & branding services. Get your free consultation today!",
    keywords: "digital marketing agency, AI marketing solutions, SEO services, social media marketing, content creation, branding, digital advertising",
    url: "https://heidigital.info/",
    type: "website"
  });

  const services = [
    {
      icon: Brain,
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
      icon: Image,
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

  const portfolioItems = [
    {
      id: "fmcg-dao-strategy",
      title: "Web3 DAO Models in FMCG Marketing Strategy",
      description: "Academic research exploring how Web3-based community-owned DAO models can transform brand loyalty, consumer engagement, and marketing strategies in the FMCG industry by 2035.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Academic Research", "Web3 & Blockchain", "Consumer Engagement"],
      link: "/portfolio/fmcg-dao-strategy"
    },
    {
      id: "microlino-strategy",
      title: "Microlino 2026 Australian Launch Campaign",
      description: "Comprehensive strategic marketing communications campaign for Microlino's Australian market entry, featuring the 'Half the Space, Twice the Life' concept and integrated multi-channel approach.",
      image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Campaign Strategy", "Digital Marketing", "Integrated Communications", "EV Marketing"],
      link: "/portfolio/microlino-strategy"
    },
    {
      id: "i-choose-the-sun",
      title: "Sun Life Vietnam - 'I Choose The Sun' Campaign",
      description: "A viral influencer-led social media campaign promoting positivity during COVID-19 pandemic, generating 75.6M views and 8,000+ user videos.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Social Media", "Influencer Marketing", "Campaign Strategy"],
      link: "/portfolio/i-choose-the-sun"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Transform Your Digital Future"
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Featured Portfolio"
            subtitle="Discover our success stories and see how we've helped businesses achieve remarkable growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                categories={item.categories}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Success stories from businesses we've helped transform"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Heidigital transformed our social media strategy, increasing our engagement by 200% in just three months. Their data-driven approach has been a game-changer."
              author="James Wilson"
              company="TechStart Inc."
              rating={5}
            />
            <TestimonialCard
              quote="The SEO optimization services helped us achieve a 78% increase in organic traffic and significantly improved our conversion rates. Highly recommend!"
              author="Linda Chen"
              company="Global Retail Solutions"
              rating={5}
            />
            <TestimonialCard
              quote="Working with Heidigital on our AI marketing initiatives has given us a competitive edge. Their innovative approach has revolutionized how we connect with customers."
              author="Robert Taylor"
              company="Innovate Financial"
              rating={5}
            />
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Business?"
        description="Let's discuss how our AI-powered marketing solutions can drive significant growth for your business in today's competitive landscape."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Index;
