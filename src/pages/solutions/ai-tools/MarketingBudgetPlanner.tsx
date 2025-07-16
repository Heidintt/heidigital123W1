import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import BudgetPlannerInputs from "@/components/budget-planner/BudgetPlannerInputs";
import BudgetPlannerResults from "@/components/budget-planner/BudgetPlannerResults";
import { MarketingChannel, BudgetPlannerState, PlanningMode } from "@/types/budgetPlanner";
import { useSEO } from "@/hooks/useSEO";

const MarketingBudgetPlanner = () => {
  // Enhanced SEO for budget planner page
  useSEO({
    title: "Marketing Campaign Budget Planner | Free AI Tool | Heidi Digital",
    description: "Plan your marketing budget with precision using our interactive AI-powered planning tool. Allocate resources and forecast results with data-driven insights.",
    keywords: "marketing budget planner, campaign budget tool, marketing ROI calculator, budget allocation tool, marketing planning software",
    url: "https://heidigital.info/solutions/ai-tools/marketing-budget-planner",
    canonicalUrl: "https://heidigital.info/solutions/ai-tools/marketing-budget-planner",
    type: "website",
    image: "https://heidigital.info/og-budget-planner.jpg",
    schemaType: "WebApplication",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" },
      { name: "AI Tools", url: "https://heidigital.info/solutions/ai-tools" },
      { name: "Budget Planner", url: "https://heidigital.info/solutions/ai-tools/marketing-budget-planner" }
    ]
  });

  // Add WebApplication structured data
  React.useEffect(() => {
    const webAppSchema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Marketing Campaign Budget Planner",
      "description": "Interactive AI-powered tool for planning marketing budgets and forecasting campaign results",
      "url": "https://heidigital.info/solutions/ai-tools/marketing-budget-planner",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD"
      },
      "creator": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'budget-planner-schema';
    script.textContent = JSON.stringify(webAppSchema);
    
    const existing = document.getElementById('budget-planner-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('budget-planner-schema');
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Xóa đoạn code set meta thủ công cũ
  // useEffect(() => {
  //   const metaTag = document.createElement('meta');
  //   metaTag.name = 'robots';
  //   metaTag.content = 'index, follow';
  //   document.head.appendChild(metaTag);
  //   return () => {
  //     document.head.removeChild(metaTag);
  //   };
  // }, []);

  const [plannerState, setPlannerState] = useState<BudgetPlannerState>({
    planningMode: 'budget-first',
    totalBudget: 10000,
    campaignGoal: 100,
    leadToCustomerRate: 20,
    channels: [
      {
        id: '1',
        name: 'Google Ads',
        budgetAllocation: 40,
        cpc: 2.5,
        cvr: 3.5,
        valuePerLead: 150
      },
      {
        id: '2',
        name: 'Facebook Ads',
        budgetAllocation: 30,
        cpc: 1.8,
        cvr: 2.8,
        valuePerLead: 120
      },
      {
        id: '3',
        name: 'SEO/Content',
        budgetAllocation: 20,
        cpc: 0.5,
        cvr: 4.2,
        valuePerLead: 180
      },
      {
        id: '4',
        name: 'Email Marketing',
        budgetAllocation: 10,
        cpc: 0.3,
        cvr: 5.0,
        valuePerLead: 90
      }
    ]
  });

  // ... phần code còn lại giữ nguyên

  return (
    <Layout>
      <Hero
        title="Marketing Campaign Budget Planner"
        subtitle="Plan your marketing budget with precision - allocate resources and forecast results with our interactive planning tool"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* ... phần JSX còn lại giữ nguyên */}
    </Layout>
  );
};

export default MarketingBudgetPlanner;