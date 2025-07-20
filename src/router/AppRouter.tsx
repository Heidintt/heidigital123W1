import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Sitemap from "@/pages/Sitemap";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import LoadingSpinner from "@/components/LoadingSpinner";
import GonePage from "@/components/GonePage";
import SolutionRoutes from "./SolutionRoutes";
import { PortfolioRoutes } from "./PortfolioRoutes";
import { ServiceRoutes } from "./ServiceRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        
        {/* Portfolio sub-routes TRƯỚC portfolio chính */}
        <Route path="/portfolio/*" element={<PortfolioRoutes />} />
        
        {/* Portfolio page chính SAU sub-routes */}
        <Route path="/portfolio" element={<Portfolio />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* FAQ redirect to homepage */}
        <Route path="/faq" element={
          <Suspense fallback={<LoadingSpinner />}>
            <GonePage 
              title="FAQ Page No Longer Available"
              description="This page has been discontinued. Please visit our homepage."
              redirectUrl="/"
              redirectDelay={5}
            />
          </Suspense>
        } />
        
        {/* Service sub-routes */}
        <Route path="/services/*" element={<ServiceRoutes />} />
        
        {/* Solution sub-routes */}
        <Route path="/solutions/*" element={<SolutionRoutes />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
