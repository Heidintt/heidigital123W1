
import { Routes, Route } from "react-router-dom";
import Solutions from "@/pages/Solutions";
import AITools from "@/pages/solutions/AITools";
import FreeResources from "@/pages/solutions/FreeResources";
import MarketingToolsHub from "@/pages/solutions/MarketingToolsHub";

// AI Tools
import SEOAssistant from "@/pages/solutions/ai-tools/SEOAssistant";
import ContentGenerator from "@/pages/solutions/ai-tools/ContentGenerator";
import SEOArticleGenerator from "@/pages/solutions/ai-tools/SEOArticleGenerator";
import MarketTrendAnalyzer from "@/pages/solutions/ai-tools/MarketTrendAnalyzer";
import MultilingualContentGenerator from "@/pages/solutions/ai-tools/MultilingualContentGenerator";
import ContentCalendarGenerator from "@/pages/solutions/ai-tools/ContentCalendarGenerator";

// Free Resources
import SEOGuide from "@/pages/solutions/free-resources/SEOGuide";
import ContentCalendar from "@/pages/solutions/free-resources/ContentCalendar";
import ROICalculator from "@/pages/solutions/free-resources/ROICalculator";
import LocalSEOChecklist from "@/pages/solutions/free-resources/LocalSEOChecklist";
import ContentTemplates from "@/pages/solutions/free-resources/ContentTemplates";
import SocialToolkit from "@/pages/solutions/free-resources/SocialToolkit";
import EmailGuide from "@/pages/solutions/free-resources/EmailGuide";
import CROGuide from "@/pages/solutions/free-resources/CROGuide";
import AIPlaybook from "@/pages/solutions/free-resources/AIPlaybook";

const SolutionRoutes = () => {
  return (
    <Routes>
      <Route index element={<Solutions />} />
      <Route path="ai-tools" element={<AITools />} />
      <Route path="free-resources" element={<FreeResources />} />
      <Route path="marketing-tools-hub" element={<MarketingToolsHub />} />
      
      {/* AI Tools Routes */}
      <Route path="ai-tools/seo-assistant" element={<SEOAssistant />} />
      <Route path="ai-tools/content-generator" element={<ContentGenerator />} />
      <Route path="ai-tools/seo-article-generator" element={<SEOArticleGenerator />} />
      <Route path="ai-tools/market-trend-analyzer" element={<MarketTrendAnalyzer />} />
      <Route path="ai-tools/multilingual-content-generator" element={<MultilingualContentGenerator />} />
      <Route path="ai-tools/content-calendar-generator" element={<ContentCalendarGenerator />} />
      
      {/* Free Resources Routes */}
      <Route path="free-resources/seo-guide" element={<SEOGuide />} />
      <Route path="free-resources/content-calendar" element={<ContentCalendar />} />
      <Route path="free-resources/roi-calculator" element={<ROICalculator />} />
      <Route path="free-resources/local-seo-checklist" element={<LocalSEOChecklist />} />
      <Route path="free-resources/content-templates" element={<ContentTemplates />} />
      <Route path="free-resources/social-toolkit" element={<SocialToolkit />} />
      <Route path="free-resources/email-guide" element={<EmailGuide />} />
      <Route path="free-resources/cro-guide" element={<CROGuide />} />
      <Route path="free-resources/ai-playbook" element={<AIPlaybook />} />
    </Routes>
  );
};

export default SolutionRoutes;
