
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";

interface GonePageProps {
  title?: string;
  description?: string;
  redirectUrl?: string;
  redirectDelay?: number;
}

const GonePage: React.FC<GonePageProps> = ({ 
  title = "Page No Longer Available", 
  description = "This page has been removed and is no longer available.",
  redirectUrl,
  redirectDelay = 5
}) => {
  // Set noindex and proper SEO
  useSEO({
    title,
    description,
    robots: "noindex, nofollow",
    type: "website"
  });

  // Set HTTP 410 status if possible
  useEffect(() => {
    // Set document title to indicate gone status
    document.title = `410 - ${title}`;
    
    // Redirect after delay if redirect URL provided
    if (redirectUrl && redirectDelay > 0) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, redirectDelay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [title, redirectUrl, redirectDelay]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">410 - Content Gone</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">{title}</h2>
          <p className="text-gray-600 mb-8 text-lg">{description}</p>
          
          {redirectUrl && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-blue-800 mb-4">
                You will be automatically redirected in {redirectDelay} seconds...
              </p>
              <a 
                href={redirectUrl} 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go Now
              </a>
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-gray-600">
              This content has been permanently removed. You might find what you're looking for here:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="text-blue-600 hover:text-blue-800 underline">Homepage</a>
              <a href="/services" className="text-blue-600 hover:text-blue-800 underline">Services</a>
              <a href="/solutions" className="text-blue-600 hover:text-blue-800 underline">Solutions</a>
              <a href="/portfolio" className="text-blue-600 hover:text-blue-800 underline">Portfolio</a>
              <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GonePage;
