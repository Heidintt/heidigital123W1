
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
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
      id: "microlino-campaign",
      title: "Microlino 2026 Launch Campaign - Implementation",
      description: "Detailed implementation guide for Microlino's 2026 Australian Launch, focusing on urban mobility solutions and innovative marketing activations.",
      image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Campaign Strategy", "Digital Marketing", "Integrated Communications"],
      link: "/portfolio/microlino-campaign"
    },
    {
      id: "i-choose-the-sun",
      title: "Sun Life Vietnam - 'I Choose The Sun' Campaign",
      description: "A viral influencer-led social media campaign promoting positivity during COVID-19 pandemic, generating 75.6M views and 8,000+ user videos.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Social Media", "Influencer Marketing", "Campaign Strategy"],
      link: "/portfolio/i-choose-the-sun"
    },
    {
      id: "lua-hong-buffet",
      title: "Lửa Hồng Buffet Marketing Strategy",
      description: "Vibrant marketing plan for a hot pot buffet in Ho Chi Minh City targeting youth with interactive content and engaging events.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Event Marketing", "Content Strategy"],
      link: "/portfolio/lua-hong-buffet"
    },
    {
      id: "nha-ca-cafe",
      title: "Nhà Cá Cafe Marketing Strategy",
      description: "Comprehensive marketing plan for a unique cat-themed café in Thai Nguyen, combining coffee culture with creative workshops and feline charm.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Social Media", "Brand Development"],
      link: "/portfolio/nha-ca-cafe"
    },
    {
      id: "koto-club",
      title: "Koto Club Da Nang Marketing Plan",
      description: "Strategic marketing plan for an upscale nightclub in Da Nang, targeting 25-40 year old professionals and tourists through curated experiences and premium positioning.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Nightlife", "Brand Development"],
      link: "/portfolio/koto-club"
    }
  ];

  const categories = [
    "All",
    "Social Media",
    "Marketing Strategy",
    "Campaign Strategy",
    "Brand Development",
    "Digital Marketing",
    "Influencer Marketing",
    "Event Marketing",
    "Content Strategy",
    "EV Marketing",
    "Academic Research",
    "Web3 & Blockchain",
    "Consumer Engagement",
    "Integrated Communications",
    "Nightlife"
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeCategory));

  return (
    <Layout>
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)` }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="relative z-10 px-4 py-32 md:py-48 flex items-center">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white">
                  Our Portfolio
                </h1>
                <p className="text-xl md:text-2xl mb-0 opacity-90 animate-fade-in text-white" style={{ animationDelay: "0.2s" }}>
                  Explore our success stories and see how we've helped businesses achieve remarkable growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Case Studies"
            subtitle="Browse our work by category"
            centered
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === activeCategory ? "default" : "outline"}
                className={category === activeCategory ? "bg-heisocial-blue" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
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

      <CallToAction
        title="Ready to Achieve Similar Results?"
        description="Let's discuss how our digital marketing expertise can help your business grow and thrive in today's competitive landscape."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default Portfolio;
