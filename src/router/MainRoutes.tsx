
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

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

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="about"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="services"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        }
      />
      <Route
        path="solutions"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Solutions />
          </Suspense>
        }
      />
      <Route
        path="portfolio"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="blog/:slug"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <BlogPost />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="sitemap"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Sitemap />
          </Suspense>
        }
      />
      <Route
        path="privacy-policy"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="terms-of-service"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <TermsOfService />
          </Suspense>
        }
      />
    </Routes>
  );
};
