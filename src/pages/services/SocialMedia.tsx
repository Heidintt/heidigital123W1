
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Users, MessageSquare, BarChart3, Target, Camera, Calendar } from "lucide-react";

const SocialMedia = () => {
  return (
    <Layout>
      <Hero
        title="Social Media Marketing Services"
        subtitle="Build meaningful connections with your audience and grow your brand presence across all social platforms"
        backgroundImage="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Social Media Approach"
            subtitle="Strategic, data-driven social media marketing that delivers results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, social media is where your customers spend their time. At Heidigital, we create compelling social media strategies that not only increase your brand awareness but also drive meaningful engagement and conversions.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of social media experts understands the unique dynamics of each platform and creates tailored content that resonates with your audience while staying true to your brand voice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategic Content Planning</h3>
                    <p className="text-gray-600">
                      Comprehensive content calendars aligned with your business goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Community Management</h3>
                    <p className="text-gray-600">
                      Active engagement with your audience to build lasting relationships
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Performance Analytics</h3>
                    <p className="text-gray-600">
                      Detailed insights and reporting to track ROI and optimize performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Paid Social Campaigns</h3>
                    <p className="text-gray-600">
                      Targeted advertising campaigns that maximize your social media ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Social Media Marketing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Social Media Services"
            subtitle="Comprehensive solutions for all your social media needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              <p className="text-gray-600">
                Comprehensive social media strategies tailored to your business objectives and target audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Camera className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Creation</h3>
              <p className="text-gray-600">
                High-quality visual and written content that engages your audience and reflects your brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Scheduling</h3>
              <p className="text-gray-600">
                Strategic content scheduling to maximize reach and engagement across all platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Management</h3>
              <p className="text-gray-600">
                Active community engagement, responding to comments, and building relationships with followers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Paid Social Advertising</h3>
              <p className="text-gray-600">
                Targeted advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Detailed performance analytics and monthly reports to track your social media success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Boost Your Social Media Presence?"
        description="Contact us today to discuss how our social media marketing services can help you connect with your audience and grow your business."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default SocialMedia;
