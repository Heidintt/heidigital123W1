
import React, { memo } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = memo(({ children }) => {
  usePerformanceMonitor();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
