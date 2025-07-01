import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const Portfolio = () => {
  // SEO optimization for portfolio page
  useSEO({
    title: "Portfolio - Our Success Stories | Heidi Digital",
    description: "Explore our success stories and see how we've helped businesses achieve remarkable growth through digital marketing campaigns and strategies.",
    keywords: "portfolio, case studies, digital marketing success, marketing campaigns, client results",
    url: "https://heidigital.info/portfolio",
    type: "website"
  });

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

  console.log("Portfolio items:", portfolioItems.length);
  console.log("Filtered items:", filteredItems.length);
  console.log("Active category:", activeCategory);
  console.log("About to render Portfolio JSX");

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8f9fa'}}>
      <Layout>
        <Hero
          title="Our Portfolio"
          subtitle="Explore our success stories and see how we've helped businesses achieve remarkable growth"
          backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />

        <section className="py-8 px-4" style={{backgroundColor: '#ffffff'}}>
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title="Case Studies"
              subtitle="Browse our work by category"
              centered
            />

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === activeCategory ? "default" : "outline"}
                  className={`${category === activeCategory ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"} transition-colors`}
                  onClick={() => setActiveCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

            {filteredItems.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">No portfolio items found for this category.</p>
              </div>
            )}
          </div>
        </section>

        <CallToAction
          title="Ready to Achieve Similar Results?"
          description="Let's discuss how our digital marketing expertise can help your business grow and thrive in today's competitive landscape."
          primaryButtonText="Get Started"
          primaryButtonLink="/contact"
          backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
        />
      </Layout>
    </div>
  );
};

console.log("Portfolio component defined, about to export");

export default Portfolio;
