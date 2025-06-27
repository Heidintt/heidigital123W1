
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import SitemapXML from "@/pages/SitemapXML";
import RobotsTXT from "@/pages/RobotsTXT";
import { MainRoutes } from "./MainRoutes";
import { ServiceRoutes } from "./ServiceRoutes";
import { SolutionRoutes } from "./SolutionRoutes";
import { PortfolioRoutes } from "./PortfolioRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sitemap.xml" element={<SitemapXML />} />
        <Route path="/robots.txt" element={<RobotsTXT />} />
        
        {/* Main page routes */}
        <Route path="/*" element={<MainRoutes />} />
        
        {/* Service routes */}
        <Route path="/services/*" element={<ServiceRoutes />} />
        
        {/* Solution routes */}
        <Route path="/solutions/*" element={<SolutionRoutes />} />
        
        {/* Portfolio routes */}
        <Route path="/portfolio/*" element={<PortfolioRoutes />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
