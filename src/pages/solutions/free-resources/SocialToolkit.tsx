
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, Calendar, FileText } from "lucide-react";

const SocialToolkit = () => {
  return (
    <Layout>
      <Hero
        title="Social Media Toolkit"
        subtitle="Complete toolkit with templates, content calendars, and strategy frameworks for social media"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Elevate Your Social Media Strategy"
                subtitle="A comprehensive toolkit to transform your social media presence"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Managing social media can be overwhelming, especially when you're trying to maintain consistency across multiple platforms. Our Social Media Toolkit provides everything you need to organize, plan, and execute an effective social media strategy that drives engagement and conversions.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What's Included in the Toolkit</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>12-Month Content Calendar</strong> - A customizable calendar with key dates, holidays, and content themes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Platform-Specific Templates</strong> - Ready-to-use design templates for Instagram, Facebook, Twitter, LinkedIn, and TikTok
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Strategy Framework</strong> - Step-by-step guide to developing a cohesive content strategy
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Caption Swipe File</strong> - 100+ proven caption templates for various content types
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Hashtag Research Tool</strong> - Excel spreadsheet for organizing and tracking hashtag performance
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">How to Use This Toolkit</h3>
                
                <p className="text-gray-700 mb-6">
                  Our toolkit is designed to be practical and immediately applicable to your social media efforts. Here's how to make the most of it:
                </p>
                
                <ol className="list-decimal pl-5 space-y-4 text-gray-700 mb-8">
                  <li>
                    <strong>Start with the Content Strategy Framework</strong> - Define your goals, audience, and unique value proposition before diving into tactical execution.
                  </li>
                  <li>
                    <strong>Customize the 12-Month Calendar</strong> - Adapt the calendar to your industry and business specifics, adding your own key dates and campaigns.
                  </li>
                  <li>
                    <strong>Utilize the Design Templates</strong> - Maintain visual consistency across platforms while adapting to each platform's requirements.
                  </li>
                  <li>
                    <strong>Leverage the Caption Swipe File</strong> - Save time on content creation by adapting our proven caption templates.
                  </li>
                  <li>
                    <strong>Implement Hashtag Strategy</strong> - Use our research tool to identify and track the most effective hashtags for your niche.
                  </li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Toolkit Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This toolkit is perfect for social media managers, marketing teams, small business owners, and content creators who want to streamline their social media efforts and achieve better results. Whether you're managing social media for a brand or building your personal presence, these tools will help you save time and improve engagement.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Toolkit (ZIP, 25MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> ZIP Archive</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Contents:</strong> Excel Files, PDFs, Canva Templates</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> January 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 25MB</span>
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
                      <a href="/solutions/free-resources/content-calendar" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Social Media Content Calendar
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/content-templates" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Marketing Templates
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/ai-playbook" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> AI Marketing Playbook
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
        title="Need Help With Your Social Media Strategy?"
        description="Our team of social media experts can help you implement these tools and develop a customized strategy for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Social Media Services"
        secondaryButtonLink="/services/social-media"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default SocialToolkit;
