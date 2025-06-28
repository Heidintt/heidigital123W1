
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Target, Zap, BarChart3, DollarSign, Users } from "lucide-react";

const DigitalAds = () => {
  return (
    <Layout>
      <Hero
        title="Digital Advertising Services"
        subtitle="Maximize your ROI with targeted advertising campaigns across multiple platforms"
        backgroundImage="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Digital Advertising Approach"
            subtitle="Data-driven strategies that deliver measurable results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                At Heidigital, we believe that effective digital advertising requires a perfect blend of targeting, creativity, and optimization. Our approach focuses on creating campaigns that reach your ideal customers at the right time with the right message.
              </p>
              <p className="text-gray-600 mb-6">
                We leverage advanced targeting capabilities, compelling creative assets, and continuous optimization to maximize your ROI and achieve your business objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Developing advertising strategies aligned with your business goals and target audience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Precision Targeting</h3>
                    <p className="text-gray-600">
                      Reaching your ideal customers with advanced targeting capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Creative Excellence</h3>
                    <p className="text-gray-600">
                      Developing compelling ad creative that drives engagement and conversions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing testing and optimization to maximize performance and ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Advertising"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Digital Advertising Services"
            subtitle="Comprehensive advertising solutions across multiple platforms"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">PPC Advertising</h3>
              <p className="text-gray-600">
                Strategic pay-per-click campaigns on Google, Bing, and other search engines to drive targeted traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Advertising</h3>
              <p className="text-gray-600">
                Targeted advertising campaigns on Facebook, Instagram, LinkedIn, Twitter, and other social platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Display Advertising</h3>
              <p className="text-gray-600">
                Visually engaging display ads across the Google Display Network and other premium websites.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Remarketing Campaigns</h3>
              <p className="text-gray-600">
                Strategic remarketing campaigns to re-engage visitors and drive conversions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Shopping Ads</h3>
              <p className="text-gray-600">
                Product-focused shopping ads to showcase your products and drive sales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Reporting</h3>
              <p className="text-gray-600">
                Comprehensive reporting and insights to track performance and optimize your campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Maximize Your Advertising ROI?"
        description="Contact us today to discuss how our digital advertising services can help you reach your target audience and achieve your business goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default DigitalAds;
