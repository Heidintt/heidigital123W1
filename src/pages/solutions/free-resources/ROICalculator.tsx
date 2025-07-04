import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ROICalculatorTool from "@/components/roi-calculator/ROICalculatorTool";
import { useSEO } from "@/hooks/useSEO";

const ROICalculator = () => {
  // SEO optimization for ROI Calculator
  useSEO({
    title: "Free Marketing ROI Calculator | Campaign Performance Analytics | Heidi Digital",
    description: "Calculate marketing ROI, track campaign performance, and optimize your marketing spend with our free comprehensive ROI calculator tool.",
    keywords: "ROI calculator, marketing ROI, campaign analytics, marketing performance, return on investment, marketing metrics",
    url: "https://heidigital.info/solutions/free-resources/roi-calculator",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Marketing ROI Calculator"
        subtitle="Calculate your marketing return on investment and optimize your campaign performance with detailed analytics"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <ROICalculatorTool />
        </div>
      </section>
    </Layout>
  );
};

export default ROICalculator;
