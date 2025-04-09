
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, Brain } from "lucide-react";

const AIPlaybook = () => {
  return (
    <Layout>
      <Hero
        title="AI Marketing Playbook"
        subtitle="Learn how to implement AI into your marketing strategy with practical examples"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Harness the Power of AI in Your Marketing"
                subtitle="A practical playbook for implementing AI tools and strategies"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Artificial Intelligence is transforming the marketing landscape, but many businesses struggle to implement it effectively. Our AI Marketing Playbook provides practical guidance on how to leverage AI tools and technologies to enhance your marketing efforts, increase efficiency, and drive better results.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Brain className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>AI Content Creation</strong> - How to use AI tools to generate high-quality content while maintaining your brand voice
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Brain className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Personalization at Scale</strong> - Implement AI-driven personalization across customer touchpoints
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Brain className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Predictive Analytics</strong> - Use AI to forecast trends and customer behavior
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Brain className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Automation Strategies</strong> - Identify and implement marketing tasks that can be automated with AI
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Brain className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>AI Tool Selection</strong> - A framework for evaluating and selecting the right AI tools for your needs
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Playbook Content Overview</h3>
                
                <p className="text-gray-700 mb-6">
                  Our comprehensive 60-page playbook combines strategic insights with tactical implementation guides. Each section includes real-world examples, step-by-step instructions, and tool recommendations.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                  <h4 className="font-semibold text-lg mb-4">Table of Contents:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Introduction to AI in Marketing</li>
                    <li>Assessing Your AI Readiness</li>
                    <li>Content Creation with AI</li>
                    <li>Customer Segmentation and Personalization</li>
                    <li>Predictive Analytics and Customer Insights</li>
                    <li>Chatbots and Conversational Marketing</li>
                    <li>AI for Social Media Optimization</li>
                    <li>Email Marketing Automation with AI</li>
                    <li>AI-Powered SEO Strategies</li>
                    <li>Performance Analysis and Optimization</li>
                    <li>Ethical Considerations and Best Practices</li>
                    <li>Future Trends in AI Marketing</li>
                  </ol>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Case Studies</h3>
                
                <p className="text-gray-700 mb-6">
                  The playbook includes detailed case studies of businesses that have successfully implemented AI in their marketing strategy, including:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>How a B2B software company increased lead quality by 35% using AI-powered lead scoring</li>
                  <li>A retail brand that improved email open rates by 28% with AI-driven subject line optimization</li>
                  <li>How a small marketing agency scaled content production by 400% using AI writing tools</li>
                  <li>A D2C brand that reduced customer acquisition costs by 22% with predictive analytics</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Playbook Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This playbook is designed for marketing professionals, business owners, and entrepreneurs who want to stay ahead of the curve by effectively implementing AI in their marketing strategy. Whether you're just starting to explore AI or looking to optimize your existing AI initiatives, this resource provides valuable insights and actionable strategies.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Playbook (PDF, 8.5MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> PDF Playbook</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Pages:</strong> 60</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> March 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 8.5MB</span>
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
                      <a href="/solutions/ai-tools/content-generator" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> AI Content Generator Tool
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/content-templates" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Marketing Templates
                      </a>
                    </li>
                    <li>
                      <a href="/services/ai-marketing" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> AI Marketing Services
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
        title="Ready to Implement AI in Your Marketing?"
        description="Our AI marketing specialists can help you implement the strategies from this playbook and develop a customized AI roadmap for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore AI Marketing Services"
        secondaryButtonLink="/services/ai-marketing"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default AIPlaybook;
