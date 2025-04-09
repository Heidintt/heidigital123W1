
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service pages
import SocialMedia from "./pages/services/SocialMedia";
import ContentCreation from "./pages/services/ContentCreation";
import SEO from "./pages/services/SEO";
import Branding from "./pages/services/Branding";
import DigitalAds from "./pages/services/DigitalAds";
import AIMarketing from "./pages/services/AIMarketing";

// Solution pages
import FreeResources from "./pages/solutions/FreeResources";
import AITools from "./pages/solutions/AITools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/digital-ads" element={<DigitalAds />} />
          <Route path="/services/ai-marketing" element={<AIMarketing />} />
          
          {/* Solution Pages */}
          <Route path="/solutions/free-resources" element={<FreeResources />} />
          <Route path="/solutions/ai-tools" element={<AITools />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
