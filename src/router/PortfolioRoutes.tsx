
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load portfolio pages
const FMCGDAOStrategy = lazy(() => import("@/pages/portfolio/FMCGDAOStrategy"));
const MicrolinoStrategy = lazy(() => import("@/pages/portfolio/MicrolinoStrategy"));
const IChooseTheSun = lazy(() => import("@/pages/portfolio/IChooseTheSun"));
const MicrolinoCampaign = lazy(() => import("@/pages/portfolio/MicrolinoCampaign"));
const NhaCaCafe = lazy(() => import("@/pages/portfolio/NhaCaCafe"));
const KotoClub = lazy(() => import("@/pages/portfolio/KotoClub"));
const LuaHongBuffet = lazy(() => import("@/pages/portfolio/LuaHongBuffet"));

const LoadingFallback = () => <div>Loading...</div>;

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route
        path="fmcg-dao-strategy"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <FMCGDAOStrategy />
          </Suspense>
        }
      />
      <Route
        path="microlino-strategy"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <MicrolinoStrategy />
          </Suspense>
        }
      />
      <Route
        path="i-choose-the-sun"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <IChooseTheSun />
          </Suspense>
        }
      />
      <Route
        path="microlino-campaign"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <MicrolinoCampaign />
          </Suspense>
        }
      />
      <Route
        path="nha-ca-cafe"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NhaCaCafe />
          </Suspense>
        }
      />
      <Route
        path="koto-club"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <KotoClub />
          </Suspense>
        }
      />
      <Route
        path="lua-hong-buffet"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <LuaHongBuffet />
          </Suspense>
        }
      />
    </Routes>
  );
};
