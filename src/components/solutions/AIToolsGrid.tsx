
import React from "react";
import AIToolCard from "./AIToolCard";
import { Calculator, TrendingUp } from "lucide-react";

const AIToolsGrid = () => {
  const aiTools = [
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "ROI Calculator",
      description: "Calculate and optimize your digital marketing ROI with real-time insights",
      content: "Comprehensive ROI calculator with budget recommendations, performance metrics, and visual dashboards. Designed by Heidi Digital team.",
      link: "/solutions/free-resources/roi-calculator",
      badge: { text: "FREE TOOL", variant: "new" as const },
      highlighted: true
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Marketing Budget Planner",
      description: "Plan and optimize your marketing budget allocation across channels with interactive forecasting",
      content: "Advanced budget planning tool with dual planning modes (Budget First/Goal First), real-time calculations, and performance visualizations. Perfect for campaign planning and resource allocation.",
      link: "/solutions/ai-tools/marketing-budget-planner",
      badge: { text: "NEW TOOL", variant: "new" as const },
      highlighted: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {aiTools.map((tool, index) => (
        <AIToolCard
          key={index}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
          content={tool.content}
          link={tool.link}
          badge={tool.badge}
          highlighted={tool.highlighted}
        />
      ))}
    </div>
  );
};

export default AIToolsGrid;
