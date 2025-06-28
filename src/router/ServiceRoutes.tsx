
import { Routes, Route } from "react-router-dom";
import SocialMedia from "@/pages/services/SocialMedia";
import ContentCreation from "@/pages/services/ContentCreation";
import SEO from "@/pages/services/SEO";
import Branding from "@/pages/services/Branding";
import DigitalAds from "@/pages/services/DigitalAds";
import AIMarketing from "@/pages/services/AIMarketing";

export const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path="social-media" element={<SocialMedia />} />
      <Route path="content-creation" element={<ContentCreation />} />
      <Route path="seo" element={<SEO />} />
      <Route path="branding" element={<Branding />} />
      <Route path="digital-ads" element={<DigitalAds />} />
      <Route path="ai-marketing" element={<AIMarketing />} />
    </Routes>
  );
};
