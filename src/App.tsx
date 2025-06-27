import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import FreeResources from "./pages/solutions/FreeResources";
import AITools from "./pages/solutions/AITools";
import ContentGenerator from "./pages/solutions/ai-tools/ContentGenerator";
import SEOArticleGenerator from "./pages/solutions/ai-tools/SEOArticleGenerator";
import MultilingualContentGenerator from "./pages/solutions/ai-tools/MultilingualContentGenerator";
import SEOGuide from "./pages/solutions/free-resources/SEOGuide";
import SocialToolkit from "./pages/solutions/free-resources/SocialToolkit";
import AIPlaybook from "./pages/solutions/free-resources/AIPlaybook";
import ContentTemplates from "./pages/solutions/free-resources/ContentTemplates";
import ROICalculator from "./pages/solutions/free-resources/ROICalculator";
import EmailGuide from "./pages/solutions/free-resources/EmailGuide";
import LocalSEOChecklist from "./pages/solutions/free-resources/LocalSEOChecklist";
import ContentCalendar from "./pages/solutions/free-resources/ContentCalendar";
import CROGuide from "./pages/solutions/free-resources/CROGuide";
import NhaCaCafe from "./pages/portfolio/NhaCaCafe";
import KotoClub from "./pages/portfolio/KotoClub";
import LuaHongBuffet from "./pages/portfolio/LuaHongBuffet";
import IChooseTheSun from "./pages/portfolio/IChooseTheSun";
import MicrolinoCampaign from "./pages/portfolio/MicrolinoCampaign";
import MicrolinoStrategy from "./pages/portfolio/MicrolinoStrategy";
import FMCGDAOStrategy from "./pages/portfolio/FMCGDAOStrategy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/nha-ca-cafe" element={<NhaCaCafe />} />
            <Route path="/portfolio/koto-club" element={<KotoClub />} />
            <Route path="/portfolio/lua-hong-buffet" element={<LuaHongBuffet />} />
            <Route path="/portfolio/i-choose-the-sun" element={<IChooseTheSun />} />
            <Route path="/portfolio/microlino-campaign" element={<MicrolinoCampaign />} />
            <Route path="/portfolio/microlino-strategy" element={<MicrolinoStrategy />} />
            <Route path="/portfolio/fmcg-dao-strategy" element={<FMCGDAOStrategy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/free-resources" element={<FreeResources />} />
            <Route path="/solutions/ai-tools" element={<AITools />} />
            <Route path="/solutions/ai-tools/content-generator" element={<ContentGenerator />} />
            <Route path="/solutions/ai-tools/seo-article-generator" element={<SEOArticleGenerator />} />
            <Route path="/solutions/ai-tools/multilingual-content-generator" element={<MultilingualContentGenerator />} />
            
            <Route path="/solutions/free-resources/seo-guide" element={<SEOGuide />} />
            <Route path="/solutions/free-resources/social-toolkit" element={<SocialToolkit />} />
            <Route path="/solutions/free-resources/ai-playbook" element={<AIPlaybook />} />
            <Route path="/solutions/free-resources/content-templates" element={<ContentTemplates />} />
            <Route path="/solutions/free-resources/roi-calculator" element={<ROICalculator />} />
            <Route path="/solutions/free-resources/email-guide" element={<EmailGuide />} />
            <Route path="/solutions/free-resources/local-seo-checklist" element={<LocalSEOChecklist />} />
            <Route path="/solutions/free-resources/content-calendar" element={<ContentCalendar />} />
            <Route path="/solutions/free-resources/cro-guide" element={<CROGuide />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
