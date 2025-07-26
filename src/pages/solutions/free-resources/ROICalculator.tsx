
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";
import ROICalculatorTool from "@/components/roi-calculator/ROICalculatorTool";

const ROICalculator = () => {
  // Set SEO for ROI Calculator page
  useSEO({
    title: "Interactive ROI Calculator - Digital Marketing Tool",
    description: "Free interactive ROI calculator for digital marketing campaigns. Calculate ROAS, CPA, conversion rates, and optimize your marketing budget with real-time insights.",
    keywords: "ROI calculator, ROAS calculator, digital marketing calculator, marketing metrics, campaign ROI, budget optimizer",
    url: "https://heidigital.info/solutions/tools/roi-calculator",
    canonicalUrl: "https://heidigital.info/solutions/free-resources/roi-calculator",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Interactive ROI Calculator"
        subtitle="Calculate and optimize your digital marketing ROI with real-time insights and budget recommendations. Designed by Heidi Digital team."
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
              This comprehensive ROI calculator was custom-built by our team to help marketers make data-driven decisions and optimize their campaign performance.
            </p>
          </div>
          <ROICalculatorTool />
        </div>
      </section>
    </Layout>
  );
};

export default ROICalculator;
