
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Users, BarChart3, Calendar, MessageSquare } from "lucide-react";

const SocialMedia = () => {
  return (
    <Layout>
      <Hero
        title="Social Media Strategy & Management"
        subtitle="Build a strong social media presence that drives engagement and conversions"
        backgroundImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Social Media Approach"
            subtitle="Data-driven strategies that deliver measurable results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                At Heidigital, we believe that effective social media marketing is both an art and a science. Our approach combines creative content creation with data analytics to develop strategies that resonate with your audience and achieve your business goals.
              </p>
              <p className="text-gray-600 mb-6">
                We work closely with you to understand your brand voice, target audience, and objectives, creating customized social media strategies that drive engagement, build brand awareness, and generate leads.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Comprehensive social media strategy aligned with your business goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Content Creation</h3>
                    <p className="text-gray-600">
                      Engaging, on-brand content that resonates with your target audience
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
                      Active engagement with your audience to build a loyal community
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
                      Detailed reporting and insights to optimize your social media strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Social Media Strategy"
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
            subtitle="Comprehensive solutions tailored to your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Platform Strategy</h3>
              <p className="text-gray-600">
                Customized strategies for each social media platform to maximize reach and engagement based on your target audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Calendar</h3>
              <p className="text-gray-600">
                Strategic content planning and scheduling to maintain a consistent and engaging social media presence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Management</h3>
              <p className="text-gray-600">
                Active engagement with your audience, responding to comments and messages to build strong relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive reporting and insights to track performance and optimize your social media strategy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Paid Social Campaigns</h3>
              <p className="text-gray-600">
                Strategic planning and management of paid social media campaigns to reach your target audience effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Influencer Marketing</h3>
              <p className="text-gray-600">
                Identify and partner with influencers who align with your brand to expand your reach and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Social Media Presence?"
        description="Contact us today to discuss how our social media strategies can help you connect with your audience and achieve your business goals."
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
