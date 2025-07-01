
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";

const Portfolio = () => {
  // Set SEO for portfolio page with explicit indexing
  useSEO({
    title: "Portfolio & Case Studies | Heidi Digital Marketing Success Stories",
    description: "Explore our successful digital marketing campaigns and case studies. See how we've helped businesses grow through strategic marketing solutions.",
    keywords: "marketing portfolio, case studies, digital marketing success stories, marketing campaigns, client results, brand development projects",
    url: "https://heidigital.info/portfolio",
    type: "website",
    robots: "index, follow, max-image-preview:large"
  });

  return (
    <Layout>
      <Hero
        title="Our Work"
        subtitle="Explore our successful digital marketing campaigns and case studies"
        backgroundImage="https://images.unsplash.com/photo-1550831103-58527b59499c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our successful digital marketing campaigns and case studies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <PortfolioCard
              title="FMCG DAO Strategy"
              description="Revolutionizing FMCG brand engagement through DAO-driven marketing strategies."
              image="https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Strategy", "Web3"]}
              link="/portfolio/fmcg-dao-strategy"
            />
            <PortfolioCard
              title="Microlino EV Campaign"
              description="Driving awareness and pre-orders for the Microlino electric vehicle with innovative digital campaigns."
              image="https://images.unsplash.com/photo-1617584184774-0119c3392e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVWfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Campaign", "Digital Marketing"]}
              link="/portfolio/microlino-strategy"
            />
            <PortfolioCard
              title="I Choose The Sun"
              description="Creating a viral campaign for Sun Life, promoting financial security and bright futures."
              image="https://images.unsplash.com/photo-1598515220910-044ca3489489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VubGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Social Media", "Viral Campaign"]}
              link="/portfolio/i-choose-the-sun"
            />
            <PortfolioCard
              title="Nha Ca Cafe"
              description="Enhancing brand presence and customer engagement for Nha Ca Cafe through targeted social media strategies."
              image="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Social Media", "Branding"]}
              link="/portfolio/nha-ca-cafe"
            />
            <PortfolioCard
              title="Koto Club"
              description="Building a vibrant online community and driving membership growth for Koto Club."
              image="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsdWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Community", "Social Media"]}
              link="/portfolio/koto-club"
            />
            <PortfolioCard
              title="Lua Hong Buffet"
              description="Increasing foot traffic and online orders for Lua Hong Buffet through strategic digital advertising."
              image="https://images.unsplash.com/photo-1606761940880-eb5915309394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVmZmV0fGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              categories={["Marketing Strategy", "Digital Ads"]}
              link="/portfolio/lua-hong-buffet"
            />
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Elevate Your Brand?"
        description="Explore our portfolio and discover how we can help your business achieve its marketing goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Portfolio;
