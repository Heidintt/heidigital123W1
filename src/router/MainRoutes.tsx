
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load main pages with better chunk splitting
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

// Optimized loading component
const RouteLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="about"
        element={
          <Suspense fallback={<RouteLoader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<RouteLoader />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="solutions"
        element={
          <Suspense fallback={<RouteLoader />}>
            <Solutions />
          </Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <Suspense fallback={<RouteLoader />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="blog/:slug"
        element={
          <Suspense fallback={<RouteLoader />}>
            <BlogPost />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<RouteLoader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="sitemap"
        element={
          <Suspense fallback={<RouteLoader />}>
            <Sitemap />
          </Suspense>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <Suspense fallback={<RouteLoader />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="terms-of-service"
        element={
          <Suspense fallback={<RouteLoader />}>
            <TermsOfService />
          </Suspense>
        }
      />
    </Routes>
  );
};
