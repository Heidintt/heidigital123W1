
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load service pages
const SocialMedia = lazy(() => import("@/pages/services/SocialMedia"));
const ContentCreation = lazy(() => import("@/pages/services/ContentCreation"));
const SEO = lazy(() => import("@/pages/services/SEO"));
const Branding = lazy(() => import("@/pages/services/Branding"));
const DigitalAds = lazy(() => import("@/pages/services/DigitalAds"));
const AIMarketing = lazy(() => import("@/pages/services/AIMarketing"));

const LoadingFallback = () => <div>Loading...</div>;

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route
        path="social-media"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SocialMedia />
          </Suspense>
        }
      />
      <Route
        path="content-creation"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ContentCreation />
          </Suspense>
        }
      />
      <Route
        path="seo"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <SEO />
          </Suspense>
        }
      />
      <Route
        path="branding"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Branding />
          </Suspense>
        }
      />
      <Route
        path="digital-ads"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <DigitalAds />
          </Suspense>
        }
      />
      <Route
        path="ai-marketing"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <AIMarketing />
          </Suspense>
        }
      />
    </Routes>
  );
};
