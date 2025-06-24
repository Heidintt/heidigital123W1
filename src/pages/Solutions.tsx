
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import AIToolsSection from "@/components/solutions/AIToolsSection";
import FeaturedToolSection from "@/components/solutions/FeaturedToolSection";
import FreeResourcesSection from "@/components/solutions/FreeResourcesSection";
import NewsletterSection from "@/components/solutions/NewsletterSection";

const Solutions = () => {
  return (
    <Layout>
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative z-10 px-6 py-32 md:py-48 flex items-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in text-white leading-[1.1] tracking-tight">
                  Solution Hub
                </h1>
                <p className="text-xl md:text-3xl mb-0 opacity-90 animate-fade-in text-white leading-relaxed" style={{ animationDelay: "0.2s" }}>
                  Explore our cutting-edge tools and free resources to enhance your marketing strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AIToolsSection />
      <FeaturedToolSection />
      <FreeResourcesSection />
      <NewsletterSection />

      <CallToAction
        title="Need a Custom Solution?"
        description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default Solutions;
