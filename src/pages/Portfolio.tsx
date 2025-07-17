
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const Portfolio = () => {
  // Enhanced SEO for portfolio page with corrected canonical URL
  useSEO({
    title: "Marketing Portfolio & Case Studies | Heidigital",
    description: "Explore our award-winning marketing campaigns & detailed case studies. See how we've helped businesses achieve 300% growth, viral campaigns & market dominance. View proven results now!",
    keywords: "marketing portfolio, case studies, marketing campaign results, success stories australia, digital marketing examples, campaign case studies, marketing ROI, viral marketing campaigns",
    url: "https://heidigital.info/portfolio",
    canonicalUrl: "https://heidigital.info/portfolio",
    type: "website",
    image: "https://heidigital.info/og-portfolio.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Portfolio", url: "https://heidigital.info/portfolio" }
    ]
  });

  // Add Portfolio structured data
  React.useEffect(() => {
    const portfolioSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Heidi Digital Marketing Portfolio",
      "description": "Showcase of successful marketing campaigns and case studies demonstrating proven results and innovative strategies",
      "creator": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "url": "https://heidigital.info/portfolio",
      "genre": "Marketing Portfolio",
      "about": [
        {
          "@type": "Thing",
          "name": "Digital Marketing Campaigns"
        },
        {
          "@type": "Thing",
          "name": "Brand Development Projects"
        },
        {
          "@type": "Thing",
          "name": "Social Media Campaigns"
        }
      ]
    };

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Marketing Portfolio Services",
      "description": "Professional marketing portfolio showcasing successful campaigns and case studies",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Portfolio Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Campaign Strategy Development",
              "description": "Strategic marketing campaign planning and execution"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Development",
              "description": "Complete brand identity and positioning strategies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Campaign Management",
              "description": "Viral social media campaign creation and management"
            }
          }
        ]
      }
    };

    const schemas = [portfolioSchema, businessSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `portfolio-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`portfolio-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`portfolio-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  
  const portfolioItems = [
    {
      id: "fmcg-dao-strategy",
      title: "Web3 DAO Models in FMCG Marketing Strategy",
      description: "Academic research exploring how Web3-based community-owned DAO models can transform brand loyalty, consumer engagement, and marketing strategies in the FMCG industry by 2035.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Academic Research", "Consumer Engagement"],
      link: "/portfolio/fmcg-dao-strategy"
    },
    {
      id: "microlino-strategy",
      title: "Microlino 2026 Australian Launch Campaign",
      description: "Comprehensive strategic marketing communications campaign for Microlino's Australian market entry, featuring the 'Half the Space, Twice the Life' concept and integrated multi-channel approach.",
      image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Campaign Strategy", "Digital Marketing", "Integrated Communications"],
      link: "/portfolio/microlino-strategy"
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
      id: "lua-hong-buffet",
      title: "Lửa Hồng Buffet Marketing Strategy",
      description: "Vibrant marketing plan for a hot pot buffet in Ho Chi Minh City targeting youth with interactive content and engaging events.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Event Marketing", "Content Strategy"],
      link: "/portfolio/lua-hong-buffet"
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
    "Marketing Strategy",
    "Campaign Strategy",
    "Brand Development",
    "Digital Marketing",
    "Social Media",
    "Event Marketing",
    "Content Strategy",
    "Academic Research",
    "Consumer Engagement",
    "Integrated Communications",
    "Nightlife"
  ];

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categories.includes(activeCategory));

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f8f9fa'}}>
      <Layout>
        <main role="main">
          <Hero
            title="Our Portfolio"
            subtitle="Explore our success stories and see how we've helped businesses achieve remarkable growth"
          />

          <section className="py-8 px-4" style={{backgroundColor: '#ffffff'}} aria-label="Portfolio Case Studies">
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

          <section aria-label="Call to Action">
            <CallToAction
              title="Ready to Achieve Similar Results?"
              description="Let's discuss how our digital marketing expertise can help your business grow and thrive in today's competitive landscape."
              primaryButtonText="Get Started"
              primaryButtonLink="/contact"
              backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
            />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Portfolio;
