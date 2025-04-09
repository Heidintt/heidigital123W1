
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, BookOpen, ExternalLink, Calendar } from "lucide-react";

const ContentCalendar = () => {
  return (
    <Layout>
      <Hero
        title="Social Media Content Calendar"
        subtitle="12-month content calendar template with key dates and content ideas"
        backgroundImage="https://images.unsplash.com/photo-1557568192-225f7c9d0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Plan Your Social Media Content"
                subtitle="A comprehensive calendar to organize and streamline your social content"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Consistent social media posting is essential for building audience engagement, but planning content can be time-consuming. Our 12-month Social Media Content Calendar helps you plan ahead, maintain consistency, and capitalize on key dates and trends throughout the year.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What's Included in the Calendar</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>12-Month Planning Template</strong> - Comprehensive calendar covering the entire year
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Key Dates and Holidays</strong> - Pre-populated with major holidays and observances
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Industry-Specific Events</strong> - Important dates for various industries
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Theme Suggestions</strong> - Monthly and weekly content themes for inspiration
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Platform-Specific Planning</strong> - Sections for each major social media platform
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                      <Calendar className="h-5 w-5 text-heisocial-purple" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Content Mix Templates</strong> - Balanced content type suggestions for each platform
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Key Features of the Calendar</h3>
                
                <p className="text-gray-700 mb-6">
                  Our content calendar template offers several features designed to make your social media planning more efficient:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li><strong>Customizable Layout</strong> - Easily adapt the calendar to your specific needs</li>
                  <li><strong>Content Type Categories</strong> - Color-coded sections for different content types (educational, promotional, engagement, etc.)</li>
                  <li><strong>Platform-Specific Plans</strong> - Dedicated sections for each platform with optimal posting frequencies</li>
                  <li><strong>Performance Tracking</strong> - Built-in metrics tracking to monitor content performance</li>
                  <li><strong>Campaign Integration</strong> - Special sections for aligning content with marketing campaigns</li>
                  <li><strong>Hashtag Planning</strong> - Dedicated space for planning and organizing hashtags</li>
                  <li><strong>Team Collaboration</strong> - Designed for multiple team members to work together</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">How to Use the Calendar</h3>
                
                <p className="text-gray-700 mb-6">
                  Making the most of your content calendar is easy with these steps:
                </p>
                
                <ol className="list-decimal pl-5 space-y-4 text-gray-700 mb-8">
                  <li>
                    <strong>Customize to Your Business</strong> - Add your industry-specific dates and events
                  </li>
                  <li>
                    <strong>Plan Monthly Themes</strong> - Start with broad monthly themes aligned with your goals
                  </li>
                  <li>
                    <strong>Break Down to Weekly Plans</strong> - Develop more specific content ideas for each week
                  </li>
                  <li>
                    <strong>Schedule Daily Posts</strong> - Plan individual posts with specific details and assets needed
                  </li>
                  <li>
                    <strong>Track and Adjust</strong> - Record performance metrics and refine your strategy based on results
                  </li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Available Formats</h3>
                
                <p className="text-gray-700 mb-6">
                  The content calendar is available in multiple formats to suit your workflow:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>Microsoft Excel (.xlsx) - Fully customizable spreadsheet</li>
                  <li>Google Sheets - Collaborative online version</li>
                  <li>PDF - Printable version with key dates and themes</li>
                  <li>Trello Board Template - For teams using Trello for project management</li>
                  <li>Notion Template - For teams using Notion for organization</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Who This Calendar Is For</h3>
                
                <p className="text-gray-700 mb-6">
                  This social media content calendar is perfect for:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                  <li>Social media managers handling multiple accounts</li>
                  <li>Marketing teams planning coordinated content strategies</li>
                  <li>Small business owners managing their own social media</li>
                  <li>Content creators planning their posting schedule</li>
                  <li>Agencies managing social media for multiple clients</li>
                </ul>
              </div>
              
              <div className="mt-10">
                <Button className="bg-heisocial-blue hover:bg-heisocial-blue/90 flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Calendar (ZIP, 5.8MB)
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Resource Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Format:</strong> Multiple (Excel, Google Sheets, PDF, etc.)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Last Updated:</strong> January 2025</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>File Size:</strong> 5.8MB (ZIP)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-heisocial-blue mr-3" />
                    <span className="text-gray-700"><strong>Platforms Covered:</strong> Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest</span>
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
                      <a href="/solutions/free-resources/social-toolkit" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Social Media Toolkit
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/free-resources/content-templates" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Content Marketing Templates
                      </a>
                    </li>
                    <li>
                      <a href="/services/social-media" className="text-heisocial-blue hover:underline flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" /> Social Media Services
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
        description="Our social media specialists can help you develop a customized content strategy and calendar for your business."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Social Media Services"
        secondaryButtonLink="/services/social-media"
        backgroundClass="bg-gray-50"
      />
    </Layout>
  );
};

export default ContentCalendar;
