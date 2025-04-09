
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink } from "lucide-react";

const SEOGuide = () => {
  return (
    <Layout>
      <Hero
        title="Ultimate SEO Guide 2023"
        subtitle="Comprehensive guide to boosting your website rankings and driving organic traffic"
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Boost Your Website Rankings"
                subtitle="A comprehensive guide to SEO strategies that actually work"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  In today's digital landscape, having a strong SEO strategy is essential for any business looking to grow its online presence. This comprehensive guide provides you with actionable insights and proven techniques to improve your website's visibility in search engine results.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>On-Page SEO Techniques</strong> - Optimize your content, meta tags, and internal linking structure
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Technical SEO Mastery</strong> - Improve site speed, mobile-friendliness, and crawlability
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Off-Page SEO Strategies</strong> - Build quality backlinks and improve domain authority
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Local SEO Optimization</strong> - Improve visibility for location-based searches
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>SEO Performance Tracking</strong> - Measure and analyze your SEO efforts effectively
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Guide Content Overview</h3>
                
                <p className="text-gray-700 mb-6">
                  Our comprehensive 50-page guide is divided into easy-to-follow sections that take you from SEO basics to advanced strategies. Each chapter includes practical examples, case studies, and actionable checklists.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h4 className="font-semibold text-lg mb-4">Table of Contents:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Introduction to SEO in 2023</li>
                    <li>Keyword Research Mastery</li>
                    <li>On-Page SEO Techniques</li>
                    <li>Technical SEO Implementation</li>
                    <li>Content Strategy for SEO</li>
                    <li>Link Building in the Modern Era</li>
                    <li>Local SEO Optimization</li>
                    <li>Mobile SEO Best Practices</li>
                    <li>Voice Search Optimization</li>
                    <li>Measuring SEO Success</li>
                    <li>Advanced SEO Tactics</li>
                    <li>Future-Proofing Your SEO Strategy</li>
                  </ol>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Guide Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This guide is perfect for marketing professionals, business owners, content creators, and anyone looking to improve their website's search engine visibility. Whether you're just starting with SEO or looking to enhance your existing strategy, you'll find valuable insights in this comprehensive resource.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Guide (PDF, 5.2MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> PDF Guide</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Pages:</strong> 50</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> October 2023</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 5.2MB</span>
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
                      <a href="/solutions/free-resources/local-seo-checklist" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Local SEO Checklist
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/cro-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Website Conversion Rate Optimization Guide
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/content-templates" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Marketing Templates
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
        title="Need Personalized SEO Help?"
        description="Our team of SEO experts can help you implement the strategies from this guide and develop a customized plan for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore SEO Services"
        secondaryButtonLink="/services/seo"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default SEOGuide;
