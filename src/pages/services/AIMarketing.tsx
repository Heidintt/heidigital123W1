
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Bot, Brain, Zap, BarChart3, Target, MessageSquare } from "lucide-react";

const AIMarketing = () => {
  return (
    <Layout>
      <Hero
        title="AI Marketing Solutions"
        subtitle="Harness the power of artificial intelligence to automate, optimize, and scale your marketing efforts"
        backgroundImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="The Future of Marketing is Here"
            subtitle="AI-powered solutions that transform your marketing performance"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Artificial Intelligence is revolutionizing the marketing landscape. At Heidigital, we leverage cutting-edge AI technologies to help businesses automate repetitive tasks, gain deeper customer insights, and deliver personalized experiences at scale.
              </p>
              <p className="text-gray-600 mb-6">
                Our AI marketing solutions are designed to enhance human creativity and strategic thinking, not replace it. We combine the power of machine learning with human expertise to create marketing campaigns that are both data-driven and emotionally resonant.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Intelligent Automation</h3>
                    <p className="text-gray-600">
                      Automate repetitive marketing tasks while maintaining quality and personalization
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Predictive Analytics</h3>
                    <p className="text-gray-600">
                      Forecast customer behavior and market trends to stay ahead of the competition
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Personalization at Scale</h3>
                    <p className="text-gray-600">
                      Deliver highly personalized experiences to thousands of customers simultaneously
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Real-time Optimization</h3>
                    <p className="text-gray-600">
                      Continuously optimize campaigns based on real-time performance data
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AI Marketing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our AI Marketing Services"
            subtitle="Advanced AI solutions for modern marketing challenges"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Marketing Automation</h3>
              <p className="text-gray-600">
                Intelligent automation workflows that nurture leads and engage customers at the perfect moment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Advanced analytics that predict customer behavior, lifetime value, and optimal campaign timing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Dynamic Personalization</h3>
              <p className="text-gray-600">
                AI-powered content personalization that adapts to individual user preferences and behavior.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Chatbot Development</h3>
              <p className="text-gray-600">
                Intelligent chatbots that provide 24/7 customer support and lead qualification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Generation</h3>
              <p className="text-gray-600">
                AI-assisted content creation for emails, social media, and marketing campaigns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-gray-600">
                Real-time campaign optimization using machine learning algorithms for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Embrace AI Marketing?"
        description="Contact us today to discover how AI can transform your marketing strategy and drive unprecedented growth for your business."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default AIMarketing;
