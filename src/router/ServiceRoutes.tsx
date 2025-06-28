
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load service pages
const SocialMedia = lazy(() => import("@/pages/services/SocialMedia"));
const ContentCreation = lazy(() => import("@/pages/services/ContentCreation"));
const SEO = lazy(() => import("@/pages/services/SEO"));
const Branding = lazy(() => import("@/pages/services/Branding"));
const DigitalAds = lazy(() => import("@/pages/services/DigitalAds"));
const AIMarketing = lazy(() => import("@/pages/services/AIMarketing"));

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route
        path="social-media"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SocialMedia />
          </Suspense>
        }
      />
      <Route
        path="content-creation"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ContentCreation />
          </Suspense>
        }
      />
      <Route
        path="seo"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SEO />
          </Suspense>
        }
      />
      <Route
        path="branding"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Branding />
          </Suspense>
        }
      />
      <Route
        path="digital-ads"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <DigitalAds />
          </Suspense>
        }
      />
      <Route
        path="ai-marketing"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <AIMarketing />
          </Suspense>
        }
      />
    </Routes>
  );
};
