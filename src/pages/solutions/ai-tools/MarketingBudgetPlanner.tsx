import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BudgetPlannerInputs from "@/components/budget-planner/BudgetPlannerInputs";
import { useSEO } from "@/hooks/useSEO";

const MarketingBudgetPlanner = () => {
  // SEO optimization for Marketing Budget Planner
  useSEO({
    title: "AI Marketing Budget Planner | Campaign Budget Calculator Tool | Heidi Digital",
    description: "Free AI-powered marketing budget planner. Plan campaigns, allocate resources, and forecast ROI with our interactive budget planning tool.",
    keywords: "marketing budget planner, budget calculator, campaign planning, marketing ROI, budget allocation, AI budget tool",
    url: "https://heidigital.info/solutions/ai-tools/marketing-budget-planner",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="AI Marketing Budget Planner"
        subtitle="Plan, allocate, and optimize your marketing budget with AI-powered insights and recommendations"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <BudgetPlannerInputs />
        </div>
      </section>
    </Layout>
  );
};

export default MarketingBudgetPlanner;
