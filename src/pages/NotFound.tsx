
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <div className="text-8xl font-bold text-heisocial-blue mb-6">404</div>
          <SectionHeading
            title="Page Not Found"
            subtitle={`Sorry, we couldn't find the page you're looking for: ${location.pathname}`}
            centered
          />
          <p className="mt-6 mb-8 text-gray-600">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Button asChild className="bg-heisocial-blue hover:bg-heisocial-blue/90">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
