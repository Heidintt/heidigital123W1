
import { Routes, Route } from "react-router-dom";
import FreeResources from "@/pages/solutions/FreeResources";
import AITools from "@/pages/solutions/AITools";
import ContentGenerator from "@/pages/solutions/ai-tools/ContentGenerator";
import SEOArticleGenerator from "@/pages/solutions/ai-tools/SEOArticleGenerator";
import MultilingualContentGenerator from "@/pages/solutions/ai-tools/MultilingualContentGenerator";
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
      <Route path="ai-tools" element={<AITools />} />
      
      {/* AI Tools sub-routes */}
      <Route path="ai-tools/content-generator" element={<ContentGenerator />} />
      <Route path="ai-tools/seo-article-generator" element={<SEOArticleGenerator />} />
      <Route path="ai-tools/multilingual-content-generator" element={<MultilingualContentGenerator />} />
      
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
