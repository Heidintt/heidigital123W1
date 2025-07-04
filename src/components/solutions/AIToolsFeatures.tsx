import React from "react";
import { Calculator, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
const AIToolsFeatures = () => {
  const features = [{
    icon: <Calculator className="h-12 w-12" />,
    title: "ROI Calculator",
    description: "Calculate and track your marketing return on investment with precision",
    points: ["Real-time ROI calculations across all channels", "Budget optimization recommendations", "Performance tracking and analytics", "Export detailed reports for stakeholders"]
  }, {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Budget Planning Tools",
    description: "Strategic budget allocation and campaign planning made simple",
    points: ["Multi-channel budget distribution", "Campaign forecasting and projections", "Resource allocation optimization", "Performance-based budget adjustments"]
  }];
  return;
};
export default AIToolsFeatures;