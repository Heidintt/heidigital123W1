import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
const AIToolsSection = () => {
  const tools = [{
    title: "ROI Calculator",
    description: "Calculate and optimize your digital marketing ROI with real-time insights and budget recommendations.",
    icon: <Calculator className="h-10 w-10 text-heisocial-purple" />,
    link: "/solutions/free-resources/roi-calculator"
  }, {
    title: "Marketing Budget Planner",
    description: "Plan and optimize your marketing budget allocation across channels with interactive forecasting.",
    icon: <TrendingUp className="h-10 w-10 text-heisocial-purple" />,
    link: "/solutions/ai-tools/marketing-budget-planner"
  }];
  return;
};
export default AIToolsSection;