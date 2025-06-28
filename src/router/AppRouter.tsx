
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/NotFound";
import RobotsTXT from "@/pages/RobotsTXT";
import LoadingSpinner from "@/components/LoadingSpinner";
import { MainRoutes } from "./MainRoutes";
import { SolutionRoutes } from "./SolutionRoutes";
import { PortfolioRoutes } from "./PortfolioRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Direct Portfolio route */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Static files with exact paths */}
          <Route path="/robots.txt" element={<RobotsTXT />} />
          
          {/* Solution routes */}
          <Route path="/solutions/*" element={<SolutionRoutes />} />
          
          {/* Portfolio detail routes */}
          <Route path="/portfolio/*" element={<PortfolioRoutes />} />
          
          {/* Main page routes - must come after specific routes */}
          <Route path="/*" element={<MainRoutes />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
