
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "@/pages/NotFound";

const ServiceRoutes = () => {
  return (
    <Routes>
      {/* Redirect old service routes to main services page */}
      <Route path="social-media" element={<Navigate to="/services" replace />} />
      <Route path="content-creation" element={<Navigate to="/services" replace />} />
      <Route path="seo" element={<Navigate to="/services" replace />} />
      <Route path="branding" element={<Navigate to="/services" replace />} />
      <Route path="digital-ads" element={<Navigate to="/services" replace />} />
      <Route path="ai-marketing" element={<Navigate to="/services" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ServiceRoutes;
