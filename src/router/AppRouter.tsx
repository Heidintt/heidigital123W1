
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load all pages for better code splitting
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

// Lazy load route components
const SolutionRoutes = lazy(() => import("./SolutionRoutes"));
const PortfolioRoutes = lazy(() => import("./PortfolioRoutes"));
const ServiceRoutes = lazy(() => import("./ServiceRoutes"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
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
          
          {/* Service sub-routes */}
          <Route path="/services/*" element={<ServiceRoutes />} />
          
          {/* Solution sub-routes */}
          <Route path="/solutions/*" element={<SolutionRoutes />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
