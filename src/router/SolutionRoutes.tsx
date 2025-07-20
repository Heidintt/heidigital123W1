import { Routes, Route } from "react-router-dom";
import Solutions from "@/pages/Solutions";
import AITools from "@/pages/solutions/AITools";
import FreeResources from "@/pages/solutions/FreeResources";
import MarketingToolsHub from "@/pages/solutions/MarketingToolsHub";
import GonePage from "@/components/GonePage";

// Keep only ROI Calculator and Marketing Budget Planner for AI Tools
import MarketingBudgetPlanner from "@/pages/solutions/ai-tools/MarketingBudgetPlanner";

// New Free Resources
import OnPageSEOChecklist from "@/pages/solutions/free-resources/OnPageSEOChecklist";
import SocialMediaGrowthTools from "@/pages/solutions/free-resources/SocialMediaGrowthTools";
import MarketingWithCanva from "@/pages/solutions/free-resources/MarketingWithCanva";

const SolutionRoutes = () => {
  return (
    <Routes>
      <Route index element={<Solutions />} />
      <Route path="ai-tools" element={<AITools />} />
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="marketing-tools" element={<MarketingToolsHub />} />
      
      {/* Keep only 2 AI Tools */}
      <Route path="ai-tools/marketing-budget-planner" element={<MarketingBudgetPlanner />} />
      
      {/* New Free Resources Routes */}
      <Route path="free-resources/on-page-seo-checklist" element={<OnPageSEOChecklist />} />
      <Route path="free-resources/social-media-growth-tools" element={<SocialMediaGrowthTools />} />
      <Route path="free-resources/marketing-with-canva" element={<MarketingWithCanva />} />
      
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
      
      {/* 410 Gone responses for removed Free Resources */}
      <Route path="free-resources/seo-guide" element={
        <GonePage 
          title="SEO Guide No Longer Available"
          description="This resource has been replaced with updated SEO checklists."
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
          description="This resource has been consolidated into our main SEO checklist."
          redirectUrl="/solutions/free-resources"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/content-templates" element={
        <GonePage 
          title="Content Templates No Longer Available"
          description="This resource has been discontinued. Check out our Canva marketing guide."
          redirectUrl="/solutions/free-resources/marketing-with-canva"
          redirectDelay={5}
        />
      } />
      <Route path="free-resources/social-toolkit" element={
        <GonePage 
          title="Social Toolkit No Longer Available"
          description="This resource has been replaced with our social media growth tools."
          redirectUrl="/solutions/free-resources/social-media-growth-tools"
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
