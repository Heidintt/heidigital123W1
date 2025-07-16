
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  const location = useLocation();

  // Set SEO for 404 page
  useSEO({
    title: "Page Not Found (404) | Heidi Digital",
    description: "The page you're looking for could not be found. Return to Heidi Digital's homepage to explore our marketing solutions and services.",
    keywords: "404, page not found, heidi digital",
    url: `https://heidigital.info${location.pathname}`,
    canonicalUrl: `https://heidigital.info${location.pathname}`,
    type: "website"
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center max-w-lg px-4">
          <div className="text-6xl font-bold text-heisocial-blue mb-5">404</div>
          <SectionHeading
            title="Page Not Found"
            subtitle={`Sorry, we couldn't find the page you're looking for: ${location.pathname}`}
            centered
          />
          <p className="mt-5 mb-6 text-gray-600 text-base">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-heisocial-blue hover:bg-heisocial-blue/90">
            <Link to="/" className="flex items-center gap-2">
              <Home size={16} /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
