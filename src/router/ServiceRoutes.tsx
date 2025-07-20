
import { Routes, Route } from "react-router-dom";
import GonePage from "@/components/GonePage";

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route 
        path="social-media" 
        element={
          <GonePage 
            title="Social Media Marketing Service No Longer Available"
            description="This service page has been consolidated. Please visit our main services page."
            redirectUrl="/services"
            redirectDelay={5}
          />
        } 
      />
      <Route 
        path="content-creation" 
        element={
          <GonePage 
            title="Content Creation Service No Longer Available"
            description="This service page has been consolidated. Please visit our homepage."
            redirectUrl="/"
            redirectDelay={5}
          />
        } 
      />
      <Route 
        path="seo" 
        element={
          <GonePage 
            title="SEO Service No Longer Available"
            description="This service page has been consolidated. Please visit our main services page."
            redirectUrl="/services"
            redirectDelay={5}
          />
        } 
      />
      <Route 
        path="branding" 
        element={
          <GonePage 
            title="Branding Service No Longer Available"
            description="This service page has been consolidated. Please visit our main services page."
            redirectUrl="/services"
            redirectDelay={5}
          />
        } 
      />
      <Route 
        path="digital-ads" 
        element={
          <GonePage 
            title="Digital Ads Service No Longer Available"
            description="This service page has been consolidated. Please visit our main services page."
            redirectUrl="/services"
            redirectDelay={5}
          />
        } 
      />
      <Route 
        path="ai-marketing" 
        element={
          <GonePage 
            title="AI Marketing Service No Longer Available"
            description="This service page has been consolidated. Please visit our main services page."
            redirectUrl="/services"
            redirectDelay={5}
          />
        } 
      />
    </Routes>
  );
};
