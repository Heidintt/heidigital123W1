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
    schemaType: "WebPage", // <-- Sửa từ "WebApplication" thành "WebPage"
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

  const updatePlannerState = (updates: Partial<BudgetPlannerState>) => {
    setPlannerState(prev => ({ ...prev, ...updates }));
  };

  const updateChannel = (channelId: string, updates: Partial<MarketingChannel>) => {
    setPlannerState(prev => ({
      ...prev,
      channels: prev.channels.map(channel =>
        channel.id === channelId ? { ...channel, ...updates } : channel
      )
    }));
  };

  const addChannel = () => {
    const newChannel: MarketingChannel = {
      id: Date.now().toString(),
      name: 'New Channel',
      budgetAllocation: 0,
      cpc: 1.0,
      cvr: 2.0,
      valuePerLead: 100
    };
    
    setPlannerState(prev => ({
      ...prev,
      channels: [...prev.channels, newChannel]
    }));
  };

  const removeChannel = (channelId: string) => {
    setPlannerState(prev => ({
      ...prev,
      channels: prev.channels.filter(channel => channel.id !== channelId)
    }));
  };

  return (
    <Layout>
      <Hero
        title="Marketing Campaign Budget Planner"
        subtitle="Plan your marketing budget with precision - allocate resources and forecast results with our interactive planning tool"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Interactive Budget Planning Tool"
            subtitle="Choose your planning approach and configure your marketing channels"
            centered
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">
            {/* Left Column - Inputs */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <BudgetPlannerInputs
                plannerState={plannerState}
                updatePlannerState={updatePlannerState}
                updateChannel={updateChannel}
                addChannel={addChannel}
                removeChannel={removeChannel}
              />
            </div>

            {/* Right Column - Results */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <BudgetPlannerResults plannerState={plannerState} />
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to optimize your marketing budget?"
        description="Start planning your campaigns with data-driven insights and maximize your ROI"
        primaryButtonText="Start Planning"
        primaryButtonLink="#planner"
        secondaryButtonText="View More Tools"
        secondaryButtonLink="/solutions/ai-tools"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default MarketingBudgetPlanner;