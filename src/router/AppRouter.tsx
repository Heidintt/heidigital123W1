
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import RobotsTXT from "@/pages/RobotsTXT";
import { MainRoutes } from "./MainRoutes";
import { SolutionRoutes } from "./SolutionRoutes";
import { PortfolioRoutes } from "./PortfolioRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Static files with exact paths */}
        <Route path="/robots.txt" element={<RobotsTXT />} />
        {/* Remove sitemap.xml route - it will be served as static file */}
        
        {/* Solution routes */}
        <Route path="/solutions/*" element={<SolutionRoutes />} />
        
        {/* Portfolio routes */}
        <Route path="/portfolio/*" element={<PortfolioRoutes />} />
        
        {/* Main page routes - must come after specific routes */}
        <Route path="/*" element={<MainRoutes />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
