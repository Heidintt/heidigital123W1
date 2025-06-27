
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SitemapXML from "./pages/SitemapXML";

// Lazy load pages for better performance
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

// Service pages
const SocialMedia = lazy(() => import("./pages/services/SocialMedia"));
const ContentCreation = lazy(() => import("./pages/services/ContentCreation"));
const SEO = lazy(() => import("./pages/services/SEO"));
const Branding = lazy(() => import("./pages/services/Branding"));
const DigitalAds = lazy(() => import("./pages/services/DigitalAds"));
const AIMarketing = lazy(() => import("./pages/services/AIMarketing"));

// Solution pages
const FreeResources = lazy(() => import("./pages/solutions/FreeResources"));
const AITools = lazy(() => import("./pages/solutions/AITools"));

// AI Tools
const ContentGenerator = lazy(() => import("./pages/solutions/ai-tools/ContentGenerator"));
const SEOArticleGenerator = lazy(() => import("./pages/solutions/ai-tools/SEOArticleGenerator"));
const MultilingualContentGenerator = lazy(() => import("./pages/solutions/ai-tools/MultilingualContentGenerator"));

// Free Resources
const SEOGuide = lazy(() => import("./pages/solutions/free-resources/SEOGuide"));
const ContentTemplates = lazy(() => import("./pages/solutions/free-resources/ContentTemplates"));
const SocialToolkit = lazy(() => import("./pages/solutions/free-resources/SocialToolkit"));
const EmailGuide = lazy(() => import("./pages/solutions/free-resources/EmailGuide"));
const ROICalculator = lazy(() => import("./pages/solutions/free-resources/ROICalculator"));
const ContentCalendar = lazy(() => import("./pages/solutions/free-resources/ContentCalendar"));
const LocalSEOChecklist = lazy(() => import("./pages/solutions/free-resources/LocalSEOChecklist"));
const AIPlaybook = lazy(() => import("./pages/solutions/free-resources/AIPlaybook"));
const CROGuide = lazy(() => import("./pages/solutions/free-resources/CROGuide"));

// Portfolio pages
const FMCGDAOStrategy = lazy(() => import("./pages/portfolio/FMCGDAOStrategy"));
const MicrolinoStrategy = lazy(() => import("./pages/portfolio/MicrolinoStrategy"));
const IChooseTheSun = lazy(() => import("./pages/portfolio/IChooseTheSun"));
const MicrolinoCampaign = lazy(() => import("./pages/portfolio/MicrolinoCampaign"));
const NhaCaCafe = lazy(() => import("./pages/portfolio/NhaCaCafe"));
const KotoClub = lazy(() => import("./pages/portfolio/KotoClub"));
const LuaHongBuffet = lazy(() => import("./pages/portfolio/LuaHongBuffet"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sitemap.xml" element={<SitemapXML />} />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/services/social-media"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SocialMedia />
                </Suspense>
              }
            />
            <Route
              path="/services/content-creation"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContentCreation />
                </Suspense>
              }
            />
            <Route
              path="/services/seo"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SEO />
                </Suspense>
              }
            />
            <Route
              path="/services/branding"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Branding />
                </Suspense>
              }
            />
            <Route
              path="/services/digital-ads"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DigitalAds />
                </Suspense>
              }
            />
            <Route
              path="/services/ai-marketing"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AIMarketing />
                </Suspense>
              }
            />
            <Route
              path="/solutions"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Solutions />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FreeResources />
                </Suspense>
              }
            />
            <Route
              path="/solutions/ai-tools"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AITools />
                </Suspense>
              }
            />
            <Route
              path="/solutions/ai-tools/content-generator"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContentGenerator />
                </Suspense>
              }
            />
            <Route
              path="/solutions/ai-tools/seo-article-generator"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SEOArticleGenerator />
                </Suspense>
              }
            />
            <Route
              path="/solutions/ai-tools/multilingual-content-generator"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MultilingualContentGenerator />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/seo-guide"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SEOGuide />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/content-templates"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContentTemplates />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/social-toolkit"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SocialToolkit />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/email-guide"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <EmailGuide />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/roi-calculator"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ROICalculator />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/content-calendar"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ContentCalendar />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/local-seo-checklist"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LocalSEOChecklist />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/ai-playbook"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AIPlaybook />
                </Suspense>
              }
            />
            <Route
              path="/solutions/free-resources/cro-guide"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CROGuide />
                </Suspense>
              }
            />
            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/fmcg-dao-strategy"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FMCGDAOStrategy />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/microlino-strategy"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MicrolinoStrategy />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/i-choose-the-sun"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <IChooseTheSun />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/microlino-campaign"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MicrolinoCampaign />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/nha-ca-cafe"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <NhaCaCafe />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/koto-club"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <KotoClub />
                </Suspense>
              }
            />
            <Route
              path="/portfolio/lua-hong-buffet"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LuaHongBuffet />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <BlogPost />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/sitemap"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Sitemap />
                </Suspense>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TermsOfService />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
