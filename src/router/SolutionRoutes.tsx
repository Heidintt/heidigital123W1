
import { Routes, Route } from "react-router-dom";
import FreeResources from "@/pages/solutions/FreeResources";
import MarketingToolsHub from "@/pages/solutions/MarketingToolsHub";
import ContentGenerator from "@/pages/solutions/ai-tools/ContentGenerator";
import SEOArticleGenerator from "@/pages/solutions/ai-tools/SEOArticleGenerator";
import MultilingualContentGenerator from "@/pages/solutions/ai-tools/MultilingualContentGenerator";
import SEOAssistant from "@/pages/solutions/ai-tools/SEOAssistant";
import MarketTrendAnalyzer from "@/pages/solutions/ai-tools/MarketTrendAnalyzer";
import SEOGuide from "@/pages/solutions/free-resources/SEOGuide";
import ContentTemplates from "@/pages/solutions/free-resources/ContentTemplates";
import SocialToolkit from "@/pages/solutions/free-resources/SocialToolkit";
import EmailGuide from "@/pages/solutions/free-resources/EmailGuide";
import ROICalculator from "@/pages/solutions/free-resources/ROICalculator";
import ContentCalendar from "@/pages/solutions/free-resources/ContentCalendar";
import LocalSEOChecklist from "@/pages/solutions/free-resources/LocalSEOChecklist";
import AIPlaybook from "@/pages/solutions/free-resources/AIPlaybook";
import CROGuide from "@/pages/solutions/free-resources/CROGuide";

export const SolutionRoutes = () => {
  return (
    <Routes>
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="tools" element={<MarketingToolsHub />} />
      
      {/* Marketing Tools sub-routes */}
      <Route path="tools/content-generator" element={<ContentGenerator />} />
      <Route path="tools/seo-article-generator" element={<SEOArticleGenerator />} />
      <Route path="tools/multilingual-content-generator" element={<MultilingualContentGenerator />} />
      <Route path="tools/seo-assistant" element={<SEOAssistant />} />
      <Route path="tools/market-trend-analyzer" element={<MarketTrendAnalyzer />} />
      <Route path="tools/roi-calculator" element={<ROICalculator />} />
      
      {/* Keep old AI Tools routes for backward compatibility */}
      <Route path="ai-tools" element={<MarketingToolsHub />} />
      <Route path="ai-tools/content-generator" element={<ContentGenerator />} />
      <Route path="ai-tools/seo-article-generator" element={<SEOArticleGenerator />} />
      <Route path="ai-tools/multilingual-content-generator" element={<MultilingualContentGenerator />} />
      <Route path="ai-tools/seo-assistant" element={<SEOAssistant />} />
      <Route path="ai-tools/market-trend-analyzer" element={<MarketTrendAnalyzer />} />
      
      {/* Free Resources sub-routes */}
      <Route path="free-resources/seo-guide" element={<SEOGuide />} />
      <Route path="free-resources/content-templates" element={<ContentTemplates />} />
      <Route path="free-resources/social-toolkit" element={<SocialToolkit />} />
      <Route path="free-resources/email-guide" element={<EmailGuide />} />
      <Route path="free-resources/roi-calculator" element={<ROICalculator />} />
      <Route path="free-resources/content-calendar" element={<ContentCalendar />} />
      <Route path="free-resources/local-seo-checklist" element={<LocalSEOChecklist />} />
      <Route path="free-resources/ai-playbook" element={<AIPlaybook />} />
      <Route path="free-resources/cro-guide" element={<CROGuide />} />
    </Routes>
  );
};
