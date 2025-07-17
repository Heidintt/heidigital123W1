
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Calendar } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Sitemap = () => {
  useSEO({
    title: "Website Sitemap | Heidi Digital",
    description: "Browse our complete website sitemap with all pages, services, tools and resources. Find everything on Heidi Digital easily. XML sitemap available for search engines.",
    keywords: "sitemap, website structure, site navigation, xml sitemap, website pages, site map",
    url: "https://heidigital.info/sitemap",
    canonicalUrl: "https://heidigital.info/sitemap",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="XML Sitemap - Heidi Digital"
        subtitle="Complete website structure and navigation for search engines and users"
        backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="Website Sitemap"
            subtitle="Complete directory of all pages on Heidi Digital website"
            centered
          />

          {/* SEO Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">XML Sitemap</h3>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  View XML Sitemap <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Last Updated</h3>
                <p className="text-gray-600 text-sm">June 27, 2025</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Total Pages</h3>
                <p className="text-gray-600 text-sm">45+ Indexed Pages</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">Main Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Home</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 1.0</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>About Us</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Services</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.9</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Solutions</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.9</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Portfolio</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Blog</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Contact</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.7</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">Digital Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/social-media" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Social Media Strategy</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/content-creation" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Content Creation</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>SEO Optimization</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Branding & Identity</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-ads" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Digital Advertising</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-marketing" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>AI Marketing</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.8</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">AI Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/ai-tools" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>AI Tools</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.7</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools/content-generator" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Content Generator</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools/seo-article-generator" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>SEO Article Generator</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/ai-tools/multilingual-content-generator" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Multilingual Generator</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">Free Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/free-resources" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Free Resources Hub</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.7</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/free-resources/seo-guide" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>SEO Guide</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/free-resources/content-templates" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Content Templates</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/free-resources/roi-calculator" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>ROI Calculator</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/free-resources/ai-playbook" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>AI Marketing Playbook</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">Portfolio Cases</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/portfolio/fmcg-dao-strategy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>FMCG DAO Strategy</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/microlino-strategy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Microlino EV Campaign</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/i-choose-the-sun" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Sun Life Viral Campaign</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/nha-ca-cafe" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Nha Ca Cafe</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio/koto-club" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Koto Club</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.6</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-blue-600 border-b border-blue-100 pb-2">Legal & Info</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Privacy Policy</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.3</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Terms of Service</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.3</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-between group">
                    <span>Sitemap</span>
                    <span className="text-xs text-gray-400 group-hover:text-blue-400">Priority: 0.3</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Information */}
          <div className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">SEO Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Sitemap URLs:</h4>
                <ul className="space-y-1">
                  <li>• XML Sitemap: <code className="bg-white px-2 py-1 rounded text-xs">https://heidigital.info/sitemap.xml</code></li>
                  <li>• HTML Sitemap: <code className="bg-white px-2 py-1 rounded text-xs">https://heidigital.info/sitemap</code></li>
                  <li>• Robots.txt: <code className="bg-white px-2 py-1 rounded text-xs">https://heidigital.info/robots.txt</code></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Update Frequency:</h4>
                <ul className="space-y-1">
                  <li>• Homepage: Weekly updates</li>
                  <li>• Services: Monthly updates</li>
                  <li>• Blog: Daily updates</li>
                  <li>• Legal pages: Yearly updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
