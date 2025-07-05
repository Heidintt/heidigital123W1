
import { Routes, Route } from "react-router-dom";
import FreeResources from "@/pages/solutions/FreeResources";
import AITools from "@/pages/solutions/AITools";
import MarketingToolsHub from "@/pages/solutions/MarketingToolsHub";
import MarketingBudgetPlanner from "@/pages/solutions/ai-tools/MarketingBudgetPlanner";
import ROICalculator from "@/pages/solutions/free-resources/ROICalculator";
import OnPageSEOChecklist from "@/pages/solutions/free-resources/OnPageSEOChecklist";
import SEOOptimizationChecklist from "@/pages/solutions/free-resources/SEOOptimizationChecklist";
import SocialMediaGrowthTools from "@/pages/solutions/free-resources/SocialMediaGrowthTools";
import MarketingWithCanva from "@/pages/solutions/free-resources/MarketingWithCanva";
import CROGuide from "@/pages/solutions/free-resources/CROGuide";

export const SolutionRoutes = () => {
  return (
    <Routes>
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="ai-tools" element={<AITools />} />
      <Route path="marketing-tools-hub" element={<MarketingToolsHub />} />
      <Route path="ai-tools/marketing-budget-planner" element={<MarketingBudgetPlanner />} />
      <Route path="free-resources/roi-calculator" element={<ROICalculator />} />
      <Route path="free-resources/on-page-seo-checklist" element={<OnPageSEOChecklist />} />
      <Route path="free-resources/seo-optimization-checklist" element={<SEOOptimizationChecklist />} />
      <Route path="free-resources/social-media-growth-tools" element={<SocialMediaGrowthTools />} />
      <Route path="free-resources/marketing-with-canva" element={<MarketingWithCanva />} />
      <Route path="free-resources/cro-guide" element={<CROGuide />} />
    </Routes>
  );
};
