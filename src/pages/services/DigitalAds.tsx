
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Target, BarChart3, Zap, DollarSign, Users, MousePointer } from "lucide-react";

const DigitalAds = () => {
  return (
    <Layout>
      <Hero
        title="Digital Advertising Services"
        subtitle="Maximize your ROI with targeted, data-driven advertising campaigns across all major platforms"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Performance-Driven Advertising"
            subtitle="Strategic campaigns that deliver measurable results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                In the competitive digital landscape, effective advertising requires more than just creative content – it demands strategic targeting, continuous optimization, and data-driven decision making. At Heidigital, we create advertising campaigns that not only capture attention but drive real business results.
              </p>
              <p className="text-gray-600 mb-6">
                Our approach combines creative excellence with analytical rigor, ensuring every advertising dollar is invested wisely to maximize your return on investment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Precision Targeting</h3>
                    <p className="text-gray-600">
                      Advanced audience targeting to reach the right people at the right time
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Multi-Platform Campaigns</h3>
                    <p className="text-gray-600">
                      Coordinated advertising across Google, Facebook, LinkedIn, and other platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Real-Time Optimization</h3>
                    <p className="text-gray-600">
                      Continuous campaign optimization based on performance data
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">ROI-Focused Approach</h3>
                    <p className="text-gray-600">
                      Every campaign designed to deliver measurable return on investment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
            subtitle="Comprehensive advertising solutions across all major platforms"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MousePointer className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Google Ads (PPC)</h3>
              <p className="text-gray-600">
                Strategic Google Ads campaigns including search, display, and shopping ads for maximum visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Advertising</h3>
              <p className="text-gray-600">
                Targeted campaigns across Facebook, Instagram, LinkedIn, Twitter, and other social platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Display Advertising</h3>
              <p className="text-gray-600">
                Visually compelling banner ads and rich media campaigns across premium ad networks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Retargeting Campaigns</h3>
              <p className="text-gray-600">
                Strategic retargeting to re-engage visitors and convert them into customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Budget Optimization</h3>
              <p className="text-gray-600">
                Smart budget allocation and bid management to maximize your advertising ROI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive tracking and reporting to measure campaign success and optimize performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Accelerate Your Growth?"
        description="Contact us today to discuss how our digital advertising services can help you reach more customers and drive business growth."
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
