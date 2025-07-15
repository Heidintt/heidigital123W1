
import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Heidigital</h3>
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative digital marketing solutions and cutting-edge strategies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/social-media" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/content-creation" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link to="/services/digital-ads" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Digital Advertising
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/solutions/free-resources" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link to="/solutions/ai-tools" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                  AI Tools
                </Link>
              </li>
            </ul>

            <div className="flex items-center">
              <Mail className="mr-2 text-heidigital-blue" size={18} />
              <a href="mailto:contact@heidigital.info" className="text-gray-300 hover:text-heidigital-blue transition-colors">
                contact@heidigital.info
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Heidigital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-heidigital-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-heidigital-blue transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-heidigital-blue transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
