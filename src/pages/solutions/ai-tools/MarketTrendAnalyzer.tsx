
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";
import MarketTrendAnalyzerTool from "@/components/market-trend/MarketTrendAnalyzerTool";

const MarketTrendAnalyzer = () => {
  useSEO({
    title: "Market Trend Analysis & Prediction Tool | Heidi Digital",
    description: "Analyze market trends, detect spikes, and predict future patterns with our AI-powered market trend analysis tool. Built by Heidi Digital team.",
    keywords: "market trends, trend analysis, Google trends, spike detection, market prediction, trend analytics",
    url: "https://heidigital.info/solutions/tools/market-trend-analyzer",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Market Trend Analysis & Prediction Tool"
        subtitle="Analyze market trends, detect spikes, and predict future patterns with advanced analytics. Designed by Heidi Digital team."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                🎯 Designed by Heidi Digital Team
              </span>
            </div>
            <p className="text-center text-gray-600">
              Advanced market trend analysis tool with spike detection and prediction capabilities. 
              Track keyword trends, analyze market patterns, and make data-driven decisions.
            </p>
          </div>
          <MarketTrendAnalyzerTool />
        </div>
      </section>
    </Layout>
  );
};

export default MarketTrendAnalyzer;
