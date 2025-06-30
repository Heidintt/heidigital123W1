
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Search, BarChart3, Globe, FileText, Settings } from "lucide-react";

const SEO = () => {
  return (
    <Layout>
      <Hero
        title="SEO Optimization Services"
        subtitle="Improve your visibility in search engines and drive organic traffic to your website"
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our SEO Approach"
            subtitle="Data-driven strategies that deliver sustainable results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                At Heidigital, we believe that effective SEO goes beyond keywords and backlinks. Our comprehensive approach focuses on creating value for your users while optimizing for search engines, resulting in sustainable growth in organic traffic and conversions.
              </p>
              <p className="text-gray-600 mb-6">
                We combine technical expertise with creative content strategies to develop customized SEO solutions that address your specific business goals and challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Technical SEO</h3>
                    <p className="text-gray-600">
                      Ensuring your website's technical foundation is optimized for search engines
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">On-Page Optimization</h3>
                    <p className="text-gray-600">
                      Optimizing content and meta elements to improve relevance and rankings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Content Strategy</h3>
                    <p className="text-gray-600">
                      Creating valuable, SEO-optimized content that addresses user intent
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Off-Page Optimization</h3>
                    <p className="text-gray-600">
                      Building authority through high-quality backlinks and digital PR
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="SEO Optimization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our SEO Services"
            subtitle="Comprehensive solutions to improve your search visibility"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">SEO Audit</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your website's current SEO performance to identify opportunities and challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Technical SEO</h3>
              <p className="text-gray-600">
                Optimization of technical elements like site structure, speed, mobile-friendliness, and indexability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">On-Page SEO</h3>
              <p className="text-gray-600">
                Optimization of content, meta tags, headings, and internal linking for improved search visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Off-Page SEO</h3>
              <p className="text-gray-600">
                Building authority through high-quality backlinks, digital PR, and online reputation management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
              <p className="text-gray-600">
                Development of SEO-optimized content strategies that address user intent and drive organic traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">SEO Reporting</h3>
              <p className="text-gray-600">
                Detailed performance reporting and insights to track progress and optimize your SEO strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Improve Your Search Visibility?"
        description="Contact us today to discuss how our SEO services can help you drive more organic traffic and achieve your business goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default SEO;
