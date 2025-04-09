
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, FileText } from "lucide-react";

const ContentTemplates = () => {
  return (
    <Layout>
      <Hero
        title="Content Marketing Templates"
        subtitle="Ready-to-use templates for content planning, creation, and distribution"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Streamline Your Content Marketing"
                subtitle="Professional templates to save time and improve content quality"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Content marketing requires consistent planning, creation, and distribution to be effective. Our collection of professionally designed templates helps streamline your content marketing workflow, ensuring you create high-quality content that resonates with your audience and achieves your business goals.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What's Included</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Strategy Template</strong> - Define your content goals, audience, and key messages
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Editorial Calendar</strong> - Plan and organize your content publishing schedule
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Blog Post Templates</strong> - 5 different structures for various blog post types
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Social Media Templates</strong> - Formats for each major platform with character counts
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Email Newsletter Templates</strong> - 3 layouts for different email marketing objectives
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Distribution Checklist</strong> - Ensure maximum reach for all your content
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <FileText className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Performance Tracker</strong> - Measure and analyze the impact of your content
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">How to Use These Templates</h3>
                
                <p className="text-gray-700 mb-6">
                  Each template comes with detailed instructions and examples to help you get started quickly. Here's a recommended workflow:
                </p>
                
                <ol className="list-decimal pl-5 space-y-4 text-gray-700 mb-8">
                  <li>
                    <strong>Begin with the Content Strategy Template</strong> - Define your overall content marketing objectives and audience profiles.
                  </li>
                  <li>
                    <strong>Plan Your Content with the Editorial Calendar</strong> - Map out your content topics and publishing schedule for the next 3-6 months.
                  </li>
                  <li>
                    <strong>Create Content Using the Format Templates</strong> - Select the appropriate template for each piece of content you're creating.
                  </li>
                  <li>
                    <strong>Use the Distribution Checklist</strong> - Ensure you're promoting your content across all relevant channels.
                  </li>
                  <li>
                    <strong>Track Performance</strong> - Measure the impact of your content and refine your strategy accordingly.
                  </li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Template Formats</h3>
                
                <p className="text-gray-700 mb-6">
                  All templates are available in multiple formats to suit your preferred tools:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>Microsoft Word (.docx) and Google Docs versions for text-based templates</li>
                  <li>Microsoft Excel (.xlsx) and Google Sheets versions for trackers and calendars</li>
                  <li>Adobe Photoshop (.psd) and Canva templates for visual content</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who These Templates Are For</h3>
                
                <p className="text-gray-700 mb-6">
                  These templates are designed for marketing professionals, content creators, small business owners, and anyone responsible for producing and managing content marketing. Whether you're a one-person team or managing multiple content creators, these templates will help you stay organized and produce consistent, high-quality content.
                </p>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Templates (ZIP, 15MB)
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
                    <span className="text-gray-700"><strong>Templates:</strong> 15+</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> February 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 15MB</span>
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
                      <a href="/solutions/free-resources/seo-guide" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Ultimate SEO Guide
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
        title="Need Help With Content Marketing?"
        description="Our team of content strategists can help you develop and implement a content marketing plan that drives results."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Content Services"
        secondaryButtonLink="/services/content-creation"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default ContentTemplates;
