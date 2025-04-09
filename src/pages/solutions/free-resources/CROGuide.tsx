
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, BarChart3 } from "lucide-react";

const CROGuide = () => {
  return (
    <Layout>
      <Hero
        title="Website Conversion Rate Optimization Guide"
        subtitle="Strategies and tactics to improve your website's conversion rate"
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Turn Visitors Into Customers"
                subtitle="Proven strategies to optimize your website for higher conversions"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Driving traffic to your website is only half the battle. The real challenge is converting those visitors into leads, subscribers, or paying customers. Our Conversion Rate Optimization (CRO) Guide provides a systematic approach to identifying conversion bottlenecks and implementing proven strategies to increase your website's effectiveness.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>CRO Fundamentals</strong> - Understanding the key principles and metrics of conversion optimization
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>User Experience Optimization</strong> - Creating frictionless paths to conversion
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Landing Page Optimization</strong> - Designing high-converting landing pages
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>A/B Testing Methodology</strong> - Setting up and running effective split tests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Conversion-Focused Copywriting</strong> - Creating persuasive content that drives action
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Form Optimization</strong> - Reducing form abandonment and increasing completion rates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <BarChart3 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Checkout Optimization</strong> - Minimizing cart abandonment and maximizing sales
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Guide Content Overview</h3>
                
                <p className="text-gray-700 mb-6">
                  Our comprehensive 65-page guide combines theoretical knowledge with practical implementation steps. Each section includes real-world examples, case studies, and actionable tactics.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h4 className="font-semibold text-lg mb-4">Table of Contents:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Introduction to Conversion Rate Optimization</li>
                    <li>Establishing Your CRO Framework</li>
                    <li>Understanding User Behavior and Psychology</li>
                    <li>Conversion Funnel Analysis and Optimization</li>
                    <li>User Experience and Website Design for Conversions</li>
                    <li>Landing Page Optimization Strategies</li>
                    <li>Persuasive Copywriting Techniques</li>
                    <li>Call-to-Action Optimization</li>
                    <li>Form and Checkout Optimization</li>
                    <li>A/B Testing Methodology and Implementation</li>
                    <li>Mobile Conversion Optimization</li>
                    <li>Analytics and Tracking for CRO</li>
                    <li>Building a Culture of Continuous Optimization</li>
                    <li>Advanced CRO Tactics and Trends</li>
                  </ol>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Practical Tools Included</h3>
                
                <p className="text-gray-700 mb-6">
                  The guide comes with several practical tools to help you implement CRO strategies:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li><strong>CRO Audit Template</strong> - Comprehensive checklist to assess your current conversion performance</li>
                  <li><strong>User Journey Mapping Tool</strong> - Excel template for mapping and analyzing user paths</li>
                  <li><strong>A/B Test Planning Worksheet</strong> - Framework for designing and documenting tests</li>
                  <li><strong>Heatmap Analysis Guide</strong> - Instructions for interpreting user behavior visualizations</li>
                  <li><strong>ROI Calculator</strong> - Tool to quantify the impact of conversion rate improvements</li>
                  <li><strong>CRO Tools Comparison</strong> - Breakdown of popular CRO tools and their features</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Case Studies</h3>
                
                <p className="text-gray-700 mb-6">
                  Learn from businesses that have successfully implemented CRO strategies:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>How an e-commerce store increased conversions by 35% by redesigning their product pages</li>
                  <li>A B2B company that doubled lead generation by optimizing their form design</li>
                  <li>How a SaaS business reduced churn by improving their onboarding process</li>
                  <li>A local service business that increased appointment bookings by 45% through landing page optimization</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Guide Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This CRO guide is designed for marketers, business owners, and web professionals who want to improve their website's performance. Whether you're looking to increase e-commerce sales, generate more leads, or improve user engagement, the strategies in this guide will help you achieve your goals through systematic optimization.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Guide (PDF, 7.5MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> PDF Guide + Excel Tools</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Pages:</strong> 65</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> February 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 7.5MB</span>
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
                      <a href="/solutions/free-resources/roi-calculator" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Digital Marketing ROI Calculator
                      </a>
                    </li>
                    <li>
                      <a href="/services/digital-ads" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Digital Advertising Services
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
        title="Need Help Optimizing Your Website Conversions?"
        description="Our conversion specialists can help you implement the strategies from this guide and develop a customized CRO plan for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default CROGuide;
