
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, MapPin } from "lucide-react";

const LocalSEOChecklist = () => {
  return (
    <Layout>
      <Hero
        title="Local SEO Checklist"
        subtitle="Step-by-step checklist to optimize your business for local search"
        backgroundImage="https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Dominate Local Search Results"
                subtitle="A comprehensive checklist to improve your local search visibility"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  For businesses that serve specific geographic areas, local SEO is essential for attracting nearby customers. Our comprehensive Local SEO Checklist provides a step-by-step approach to optimizing your online presence for local search, helping you attract more customers from your target locations.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What's Included in the Checklist</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Google Business Profile Optimization</strong> - Complete steps to optimize your GBP listing
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Local Keyword Research</strong> - How to identify and target location-specific keywords
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Citation Building Strategy</strong> - Creating consistent business listings across the web
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Local Content Optimization</strong> - Creating location-specific content that ranks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Review Management</strong> - Strategies for getting and responding to customer reviews
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Local Link Building</strong> - Tactics for acquiring location-relevant backlinks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Technical SEO for Local</strong> - Schema markup and technical optimizations
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">How to Use This Checklist</h3>
                
                <p className="text-gray-700 mb-6">
                  Our checklist is designed to be practical and actionable. Here's how to make the most of it:
                </p>
                
                <ol className="list-decimal pl-5 space-y-4 text-gray-700 mb-8">
                  <li>
                    <strong>Assess Your Current Local SEO Status</strong> - Use the provided assessment section to identify areas of strength and weakness
                  </li>
                  <li>
                    <strong>Follow the Step-by-Step Approach</strong> - Work through each section of the checklist systematically
                  </li>
                  <li>
                    <strong>Track Your Progress</strong> - Check off items as you complete them and note any tasks for later follow-up
                  </li>
                  <li>
                    <strong>Implement the Quarterly Maintenance Plan</strong> - Follow the ongoing maintenance checklist to ensure your local SEO stays strong
                  </li>
                  <li>
                    <strong>Measure Results</strong> - Use the provided tracking template to monitor improvements in your local search visibility
                  </li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Bonus Resources</h3>
                
                <p className="text-gray-700 mb-6">
                  In addition to the comprehensive checklist, you'll also receive these valuable bonus resources:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li><strong>Local Citation Directory</strong> - List of 100+ local business directories categorized by industry</li>
                  <li><strong>Local SEO Audit Template</strong> - Spreadsheet to audit your current local SEO performance</li>
                  <li><strong>Local Schema Generator</strong> - Tool to create location-specific schema markup for your website</li>
                  <li><strong>Review Response Templates</strong> - Ready-to-use templates for responding to positive and negative reviews</li>
                  <li><strong>Local Content Calendar</strong> - 12-month content planning template with local content ideas</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Checklist Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This Local SEO Checklist is perfect for small business owners, marketers, and agencies who want to improve local search visibility. It's especially valuable for:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>Retail stores and restaurants looking to attract more foot traffic</li>
                  <li>Service-based businesses targeting specific geographic areas</li>
                  <li>Multi-location businesses needing to optimize each location</li>
                  <li>Marketing agencies working with local business clients</li>
                  <li>Entrepreneurs launching new businesses in competitive local markets</li>
                </ul>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Checklist (PDF, 3.2MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> PDF Checklist + Excel Tools</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Pages:</strong> 25</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> March 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 3.2MB</span>
                  </div>
                </div>
                
                <Button className="w-full mb-4 bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" /> Download Now
                </Button>
                
                <p className="text-sm text-gray-500 mb-6">
                  No email required. Free for personal and commercial use.
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-4">Related Resources</h4>
                  
                  <ul className="space-y-3">
                    <li>
                      <a href="/solutions/free-resources/seo-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Ultimate SEO Guide
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/cro-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Website Conversion Rate Optimization Guide
                      </a>
                    </li>
                    <li>
                      <a href="/services/seo" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> SEO Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Need Help With Your Local SEO?"
        description="Our SEO specialists can help you implement this checklist and develop a customized local search strategy for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore SEO Services"
        secondaryButtonLink="/services/seo"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default LocalSEOChecklist;
