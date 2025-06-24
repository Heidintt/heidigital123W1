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
      <Hero
        title="Our Portfolio"
        subtitle="Explore our success stories and see how we've helped businesses achieve remarkable growth"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

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

      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Results Speak for Themselves
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We've helped businesses of all sizes achieve measurable growth through our strategic marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">350%</div>
              <div className="text-white/80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Featured Case Study:</span> Global Retail Transformation
              </h2>
              <p className="text-gray-600 mb-6">
                A leading retail brand was struggling with declining in-store sales and an outdated online presence. They needed a comprehensive digital transformation to meet the expectations of modern consumers.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold mb-2">The Challenge</h3>
                  <p className="text-gray-600">
                    Unify the online and offline shopping experience while increasing e-commerce sales and driving foot traffic to physical locations.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Our Approach</h3>
                  <p className="text-gray-600">
                    We implemented a holistic omnichannel strategy, leveraging AI for personalized recommendations, revamping their mobile app, and creating location-based marketing campaigns.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">The Results</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>82% increase in online conversions</li>
                    <li>35% improvement in customer retention</li>
                    <li>27% growth in in-store sales from digital touchpoints</li>
                    <li>3x ROI on marketing spend</li>
                  </ul>
                </div>
              </div>
              <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90">
                View Full Case Study
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Global Retail Transformation Case Study"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="text-xl font-bold text-heisocial-blue mb-1">82%</div>
                <div className="text-sm text-gray-600">Increase in online conversions</div>
              </div>
            </div>
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
