
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Palette, Eye, MessageSquare, Target, Users, Lightbulb } from "lucide-react";

const Branding = () => {
  return (
    <Layout>
      <Hero
        title="Brand Development Services"
        subtitle="Create a powerful brand identity that resonates with your audience and stands out in the marketplace"
        backgroundImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Building Brands That Matter"
            subtitle="Strategic brand development that creates lasting connections"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Your brand is more than just a logo or color scheme – it's the emotional connection between your business and your customers. At Heidigital, we create comprehensive brand strategies that capture your essence and communicate your value proposition effectively.
              </p>
              <p className="text-gray-600 mb-6">
                Our branding process combines strategic thinking with creative execution to develop brands that not only look great but also perform exceptionally in the marketplace.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategic Foundation</h3>
                    <p className="text-gray-600">
                      Deep brand strategy that defines your positioning, personality, and purpose
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visual Identity</h3>
                    <p className="text-gray-600">
                      Compelling visual elements that bring your brand to life across all touchpoints
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Brand Guidelines</h3>
                    <p className="text-gray-600">
                      Comprehensive guidelines ensuring consistent brand application
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Implementation Support</h3>
                    <p className="text-gray-600">
                      Ongoing support to ensure your brand is consistently applied across all channels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558655146-364adaf25c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Brand Development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Branding Services"
            subtitle="Comprehensive brand development solutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Strategy</h3>
              <p className="text-gray-600">
                Comprehensive brand positioning, personality development, and strategic planning for market success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Palette className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Logo & Identity Design</h3>
              <p className="text-gray-600">
                Distinctive logo design and visual identity systems that capture your brand essence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Eye className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Guidelines</h3>
              <p className="text-gray-600">
                Detailed brand standards and guidelines to ensure consistent application across all touchpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Voice & Messaging</h3>
              <p className="text-gray-600">
                Development of distinctive brand voice, tone, and key messaging that resonates with your audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Experience Design</h3>
              <p className="text-gray-600">
                Creating cohesive brand experiences across all customer touchpoints and interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Positioning</h3>
              <p className="text-gray-600">
                Strategic positioning that differentiates your brand and creates competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Build a Powerful Brand?"
        description="Contact us today to discuss how our brand development services can help you create a memorable and impactful brand identity."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Branding;
