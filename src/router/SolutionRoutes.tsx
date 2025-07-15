
import { Routes, Route } from "react-router-dom";
import Solutions from "@/pages/Solutions";
import AITools from "@/pages/solutions/AITools";
import FreeResources from "@/pages/solutions/FreeResources";
import MarketingToolsHub from "@/pages/solutions/MarketingToolsHub";
import GonePage from "@/components/GonePage";

// Keep only ROI Calculator and Marketing Budget Planner for AI Tools
import MarketingBudgetPlanner from "@/pages/solutions/ai-tools/MarketingBudgetPlanner";

// New Free Resources
import ROICalculator from "@/pages/solutions/free-resources/ROICalculator";

const SolutionRoutes = () => {
  return (
    <Routes>
      <Route index element={<Solutions />} />
      <Route path="ai-tools" element={<AITools />} />
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="marketing-tools" element={<MarketingToolsHub />} />
      
      {/* Keep only 2 AI Tools */}
      <Route path="ai-tools/marketing-budget-planner" element={<MarketingBudgetPlanner />} />
      <Route path="free-resources/roi-calculator" element={<ROICalculator />} />
      
      {/* 410 Gone responses for removed Free Resources */}
      <Route path="free-resources/on-page-seo-checklist" element={
        <GonePage 
          title="On-Page SEO Checklist No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/seo-optimization-checklist" element={
        <GonePage 
          title="SEO Optimization Checklist No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/social-media-growth-tools" element={
        <GonePage 
          title="Social Media Growth Tools No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/marketing-with-canva" element={
        <GonePage 
          title="Marketing with Canva Guide No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      
      {/* 410 Gone responses for removed AI Tools */}
      <Route path="ai-tools/content-generator" element={
        <GonePage 
          title="Content Generator No Longer Available"
          description="This AI tool has been discontinued. Explore our other available tools."
          redirectUrl="/solutions/ai-tools"
          redirectDelay={5}
        />
      } />
      <Route path="ai-tools/seo-assistant" element={
        <GonePage 
          title="SEO Assistant No Longer Available"
          description="This AI tool has been discontinued. Check out our SEO resources instead."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="ai-tools/seo-article-generator" element={
        <GonePage 
          title="SEO Article Generator No Longer Available"
          description="This AI tool has been discontinued. Explore our other available tools."
          redirectUrl="/solutions/ai-tools"
          redirectDelay={5}
        />
      } />
      <Route path="ai-tools/market-trend-analyzer" element={
        <GonePage 
          title="Market Trend Analyzer No Longer Available"
          description="This AI tool has been discontinued. Explore our other available tools."
          redirectUrl="/solutions/ai-tools"
          redirectDelay={5}
        />
      } />
      <Route path="ai-tools/multilingual-content-generator" element={
        <GonePage 
          title="Multilingual Content Generator No Longer Available"
          description="This AI tool has been discontinued. Explore our other available tools."
          redirectUrl="/solutions/ai-tools"
          redirectDelay={5}
        />
      } />
      <Route path="ai-tools/content-calendar-generator" element={
        <GonePage 
          title="Content Calendar Generator No Longer Available"
          description="This AI tool has been discontinued. Explore our other available tools."
          redirectUrl="/solutions/ai-tools"
          redirectDelay={5}
        />
      } />
      
      {/* 410 Gone responses for other removed Free Resources */}
      <Route path="free-resources/seo-guide" element={
        <GonePage 
          title="SEO Guide No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/content-calendar" element={
        <GonePage 
          title="Content Calendar No Longer Available"
          description="This resource has been discontinued. Explore our other free resources."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/local-seo-checklist" element={
        <GonePage 
          title="Local SEO Checklist No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/content-templates" element={
        <GonePage 
          title="Content Templates No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/social-toolkit" element={
        <GonePage 
          title="Social Toolkit No Longer Available"
          description="This resource has been discontinued. Please visit our main free resources page to explore other valuable marketing materials."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/email-guide" element={
        <GonePage 
          title="Email Guide No Longer Available"
          description="This resource has been discontinued. Explore our other free resources."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/cro-guide" element={
        <GonePage 
          title="CRO Guide No Longer Available"
          description="This resource has been discontinued. Explore our other free resources."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/ai-playbook" element={
        <GonePage 
          title="AI Playbook No Longer Available"
          description="This resource has been discontinued. Explore our other free resources."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
    </Routes>
  );
};

export default SolutionRoutes;
