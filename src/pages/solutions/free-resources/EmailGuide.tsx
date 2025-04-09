
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, Mail } from "lucide-react";

const EmailGuide = () => {
  return (
    <Layout>
      <Hero
        title="Email Marketing Best Practices"
        subtitle="Comprehensive guide to creating effective email campaigns that convert"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Master Email Marketing"
                subtitle="Learn how to create email campaigns that engage subscribers and drive conversions"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Despite the rise of new marketing channels, email remains one of the most effective ways to nurture leads and drive conversions. Our comprehensive guide covers everything you need to know to create and optimize email campaigns that deliver results.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Email List Building</strong> - Ethical and effective strategies to grow your subscriber base
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Subject Line Optimization</strong> - Techniques to improve open rates and avoid spam filters
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Email Design Best Practices</strong> - Creating responsive, visually appealing emails
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Personalization and Segmentation</strong> - Delivering relevant content to the right subscribers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Automation Workflows</strong> - Setting up effective drip campaigns and triggered emails
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>A/B Testing Methodology</strong> - Systematically improving your email performance
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Analytics and Measurement</strong> - Tracking and interpreting key performance metrics
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Guide Content Overview</h3>
                
                <p className="text-gray-700 mb-6">
                  Our 45-page guide combines strategic insights with practical examples and step-by-step instructions. Each section includes actionable tips, case studies, and template examples.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h4 className="font-semibold text-lg mb-4">Table of Contents:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Introduction: The Power of Email Marketing</li>
                    <li>Building and Managing Your Email List</li>
                    <li>Email Design Fundamentals</li>
                    <li>Crafting Compelling Subject Lines</li>
                    <li>Writing Engaging Email Copy</li>
                    <li>Segmentation and Personalization Strategies</li>
                    <li>Email Automation Best Practices</li>
                    <li>Testing and Optimization Techniques</li>
                    <li>Deliverability and Compliance (GDPR, CAN-SPAM)</li>
                    <li>Mobile Optimization</li>
                    <li>Analyzing Email Performance</li>
                    <li>Integrating Email with Other Marketing Channels</li>
                  </ol>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Bonus Resources</h3>
                
                <p className="text-gray-700 mb-6">
                  In addition to the comprehensive guide, you'll also receive these valuable bonus resources:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li><strong>Subject Line Swipe File</strong> - 100+ proven email subject line templates</li>
                  <li><strong>Email Template Library</strong> - 10 responsive HTML email templates for different purposes</li>
                  <li><strong>Email Automation Flowchart Templates</strong> - Visual maps for common automation workflows</li>
                  <li><strong>Email Metrics Calculator</strong> - Excel spreadsheet to track and analyze your email performance</li>
                  <li><strong>Compliance Checklist</strong> - Ensure your emails meet legal requirements across different regions</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Guide Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This guide is designed for marketing professionals, business owners, and anyone responsible for email marketing campaigns. Whether you're just getting started with email marketing or looking to improve your existing email strategy, you'll find valuable insights and actionable tips to enhance your results.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Guide (PDF, 6.8MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> PDF Guide + Resources</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Pages:</strong> 45</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> December 2024</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 6.8MB</span>
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
                      <a href="/solutions/free-resources/content-templates" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Marketing Templates
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/cro-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Website Conversion Rate Optimization Guide
                      </a>
                    </li>
                    <li>
                      <a href="/services/content-creation" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Creation Services
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
        title="Need Help With Your Email Marketing?"
        description="Our email marketing specialists can help you implement the strategies from this guide and develop campaigns that drive results."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Content Services"
        secondaryButtonLink="/services/content-creation"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default EmailGuide;
