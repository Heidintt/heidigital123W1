
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  type?: string;
  image?: string;
}

export const useSEO = (props?: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Safe DOM manipulation with error handling
      const setMetaTag = (name: string, content: string) => {
        try {
          let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
          }
          element.setAttribute('content', content);
        } catch (error) {
          console.warn(`Failed to set meta tag ${name}:`, error);
        }
      };

      const setPropertyTag = (property: string, content: string) => {
        try {
          let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
          }
          element.setAttribute('content', content);
        } catch (error) {
          console.warn(`Failed to set property tag ${property}:`, error);
        }
      };

      // Default values
      const defaultTitle = "Heidigital - Digital Marketing Agency | Expert Marketing Solutions";
      const defaultDescription = "Transform your business with Heidigital's expert digital marketing services. We deliver innovative strategies, creative campaigns, and measurable results for sustainable growth.";
      const defaultKeywords = "digital marketing, marketing agency, social media marketing, SEO, content marketing, branding, digital advertising";
      const defaultImage = "https://heidigital.info/og-homepage.jpg";
      const baseUrl = "https://heidigital.info";

      // Set title
      const title = props?.title || defaultTitle;
      if (document.title !== title) {
        document.title = title;
      }

      // Set meta tags
      setMetaTag("description", props?.description || defaultDescription);
      setMetaTag("keywords", props?.keywords || defaultKeywords);

      // Set Open Graph tags
      setPropertyTag("og:title", title);
      setPropertyTag("og:description", props?.description || defaultDescription);
      setPropertyTag("og:type", props?.type || "website");
      setPropertyTag("og:url", props?.url || `${baseUrl}${location.pathname}`);
      setPropertyTag("og:image", props?.image || defaultImage);
      setPropertyTag("og:site_name", "Heidigital");

      // Set Twitter tags
      setMetaTag("twitter:card", "summary_large_image");
      setMetaTag("twitter:title", title);
      setMetaTag("twitter:description", props?.description || defaultDescription);
      setMetaTag("twitter:image", props?.image || defaultImage);

      // Set canonical URL
      try {
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', props?.url || `${baseUrl}${location.pathname}`);
      } catch (error) {
        console.warn("Failed to set canonical URL:", error);
      }

    } catch (error) {
      console.error("SEO setup failed:", error);
    }
  }, [props, location.pathname]);
};
