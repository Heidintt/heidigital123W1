
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

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="Website Navigation"
            subtitle="A comprehensive list of all pages on our website"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Main Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/social-media" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Social Media Strategy
                  </Link>
                </li>
                <li>
                  <Link to="/services/content-creation" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Branding & Identity
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-ads" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Digital Advertising
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-marketing" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    AI Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/solutions/free-resources" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Free Resources
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    AI Tools
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools/content-generator" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Content Generator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-heisocial-blue">Legal Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-600 hover:text-heisocial-blue transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-600 hover:text-heisocial-blue transition-colors">
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
