
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load main pages
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

const LoadingFallback = () => <div>Loading...</div>;

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="about"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="solutions"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Solutions />
          </Suspense>
        }
      />
      <Route
        path="portfolio"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="blog/:slug"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <BlogPost />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="sitemap"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Sitemap />
          </Suspense>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="terms-of-service"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <TermsOfService />
          </Suspense>
        }
      />
    </Routes>
  );
};
