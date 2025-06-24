
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <Layout>
      <Hero
        title="Sitemap"
        subtitle="Find your way around our website"
        backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            title="Website Navigation"
            subtitle="A comprehensive list of all pages on our website"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-lg font-bold mb-3 text-heidigital-blue">Main Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-heidigital-blue">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/social-media" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Social Media Strategy
                  </Link>
                </li>
                <li>
                  <Link to="/services/content-creation" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Branding & Identity
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-ads" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Digital Advertising
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-marketing" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    AI Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-heidigital-blue">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/solutions/free-resources" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Free Resources
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    AI Tools
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools/content-generator" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Content Generator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-heidigital-blue">Legal Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-600 hover:text-heidigital-blue transition-colors text-sm">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
