
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load portfolio pages
const FMCGDAOStrategy = lazy(() => import("@/pages/portfolio/FMCGDAOStrategy"));
const MicrolinoStrategy = lazy(() => import("@/pages/portfolio/MicrolinoStrategy"));
const IChooseTheSun = lazy(() => import("@/pages/portfolio/IChooseTheSun"));
const MicrolinoCampaign = lazy(() => import("@/pages/portfolio/MicrolinoCampaign"));
const NhaCaCafe = lazy(() => import("@/pages/portfolio/NhaCaCafe"));
const KotoClub = lazy(() => import("@/pages/portfolio/KotoClub"));
const LuaHongBuffet = lazy(() => import("@/pages/portfolio/LuaHongBuffet"));

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route
        path="fmcg-dao-strategy"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <FMCGDAOStrategy />
          </Suspense>
        }
      />
      <Route
        path="microlino-strategy"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <MicrolinoStrategy />
          </Suspense>
        }
      />
      <Route
        path="i-choose-the-sun"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <IChooseTheSun />
          </Suspense>
        }
      />
      <Route
        path="microlino-campaign"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <MicrolinoCampaign />
          </Suspense>
        }
      />
      <Route
        path="nha-ca-cafe"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NhaCaCafe />
          </Suspense>
        }
      />
      <Route
        path="koto-club"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <KotoClub />
          </Suspense>
        }
      />
      <Route
        path="lua-hong-buffet"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LuaHongBuffet />
          </Suspense>
        }
      />
    </Routes>
  );
};
