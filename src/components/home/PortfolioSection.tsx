
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results for
            <br />
            <span className="text-blue-600">Forward-Thinking Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative digital strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="FMCG DAO Marketing Revolution"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Web3 Strategy</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">Consumer Research</span>
              </div>
              <h3 className="text-xl font-bold mb-3">FMCG DAO Marketing Revolution</h3>
              <p className="text-gray-600 mb-4">Pioneering research into Web3-based community governance models that transformed brand loyalty and consumer engagement by 350%.</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/portfolio/fmcg-dao-strategy">View Case Study</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Microlino EV Launch Strategy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Campaign Strategy</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">EV Marketing</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Microlino EV Launch Strategy</h3>
              <p className="text-gray-600 mb-4">Comprehensive market entry campaign for revolutionary electric vehicle, generating 75M+ impressions and driving pre-orders.</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/portfolio/microlino-strategy">View Case Study</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nha Ca Cafe Marketing Strategy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">Brand Development</span>
                <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-medium">Marketing Strategy</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Nha Ca Cafe Marketing Plan</h3>
              <p className="text-gray-600 mb-4">Comprehensive marketing strategy for a unique cat-themed café combining coffee culture with creative workshops and feline charm.</p>
              <Button asChild variant="outline" size="sm">
                <Link to="/portfolio/nha-ca-cafe">View Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
