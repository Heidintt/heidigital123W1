
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load solution pages
const FreeResources = lazy(() => import("@/pages/solutions/FreeResources"));
const AITools = lazy(() => import("@/pages/solutions/AITools"));

// AI Tools
const ContentGenerator = lazy(() => import("@/pages/solutions/ai-tools/ContentGenerator"));
const SEOArticleGenerator = lazy(() => import("@/pages/solutions/ai-tools/SEOArticleGenerator"));
const MultilingualContentGenerator = lazy(() => import("@/pages/solutions/ai-tools/MultilingualContentGenerator"));

// Free Resources
const SEOGuide = lazy(() => import("@/pages/solutions/free-resources/SEOGuide"));
const ContentTemplates = lazy(() => import("@/pages/solutions/free-resources/ContentTemplates"));
const SocialToolkit = lazy(() => import("@/pages/solutions/free-resources/SocialToolkit"));
const EmailGuide = lazy(() => import("@/pages/solutions/free-resources/EmailGuide"));
const ROICalculator = lazy(() => import("@/pages/solutions/free-resources/ROICalculator"));
const ContentCalendar = lazy(() => import("@/pages/solutions/free-resources/ContentCalendar"));
const LocalSEOChecklist = lazy(() => import("@/pages/solutions/free-resources/LocalSEOChecklist"));
const AIPlaybook = lazy(() => import("@/pages/solutions/free-resources/AIPlaybook"));
const CROGuide = lazy(() => import("@/pages/solutions/free-resources/CROGuide"));

export const SolutionRoutes = () => {
  return (
    <Routes>
      <Route
        path="free-resources"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <FreeResources />
          </Suspense>
        }
      />
      <Route
        path="ai-tools"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <AITools />
          </Suspense>
        }
      />
      
      {/* AI Tools sub-routes */}
      <Route
        path="ai-tools/content-generator"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ContentGenerator />
          </Suspense>
        }
      />
      <Route
        path="ai-tools/seo-article-generator"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SEOArticleGenerator />
          </Suspense>
        }
      />
      <Route
        path="ai-tools/multilingual-content-generator"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <MultilingualContentGenerator />
          </Suspense>
        }
      />
      
      {/* Free Resources sub-routes */}
      <Route
        path="free-resources/seo-guide"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SEOGuide />
          </Suspense>
        }
      />
      <Route
        path="free-resources/content-templates"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ContentTemplates />
          </Suspense>
        }
      />
      <Route
        path="free-resources/social-toolkit"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SocialToolkit />
          </Suspense>
        }
      />
      <Route
        path="free-resources/email-guide"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <EmailGuide />
          </Suspense>
        }
      />
      <Route
        path="free-resources/roi-calculator"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ROICalculator />
          </Suspense>
        }
      />
      <Route
        path="free-resources/content-calendar"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ContentCalendar />
          </Suspense>
        }
      />
      <Route
        path="free-resources/local-seo-checklist"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <LocalSEOChecklist />
          </Suspense>
        }
      />
      <Route
        path="free-resources/ai-playbook"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <AIPlaybook />
          </Suspense>
        }
      />
      <Route
        path="free-resources/cro-guide"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <CROGuide />
          </Suspense>
        }
      />
    </Routes>
  );
};
