
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Brain, Zap, Users, BarChart3, Settings } from "lucide-react";

const AIMarketing = () => {
  return (
    <Layout>
      <Hero
        title="AI Marketing Solutions"
        subtitle="Leverage the power of artificial intelligence to optimize your marketing strategy"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="The Future of Marketing is Here"
            subtitle="How AI is transforming digital marketing strategies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Artificial Intelligence is revolutionizing the marketing landscape, enabling businesses to gain deeper insights, automate processes, and deliver personalized experiences at scale. At Heisocial, we help you harness the power of AI to transform your marketing strategy.
              </p>
              <p className="text-gray-600 mb-6">
                Our AI marketing solutions combine cutting-edge technology with strategic expertise to help you make data-backed decisions, optimize campaigns, and stay ahead of the competition.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Data-Driven Decisions</h3>
                    <p className="text-gray-600">
                      Leverage AI to analyze vast amounts of data and make informed marketing decisions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Personalization at Scale</h3>
                    <p className="text-gray-600">
                      Deliver personalized experiences to each customer without sacrificing efficiency
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Automation & Efficiency</h3>
                    <p className="text-gray-600">
                      Streamline your marketing processes with intelligent automation tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Predictive Analytics</h3>
                    <p className="text-gray-600">
                      Anticipate market trends and customer behavior with advanced AI models
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
            subtitle="Cutting-edge solutions to transform your marketing strategy"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Brain className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
              <p className="text-gray-600">
                Create high-quality, SEO-optimized content at scale using advanced AI technology that adapts to your brand voice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Users className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Audience Segmentation</h3>
              <p className="text-gray-600">
                Leverage AI to analyze customer data and create highly targeted audience segments for more effective marketing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Zap className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Automated Campaigns</h3>
              <p className="text-gray-600">
                Implement AI-driven automation to streamline campaign management and optimize performance in real-time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <BarChart3 className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Use AI to predict market trends, customer behavior, and campaign performance to make proactive decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Settings className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversion Optimization</h3>
              <p className="text-gray-600">
                Implement AI-powered tools to analyze user behavior and optimize conversion paths on your website.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Brain className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Strategy Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance on integrating AI into your marketing strategy to achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Marketing with AI?"
        description="Contact us today to discuss how our AI marketing solutions can help you optimize your strategy and achieve your business goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default AIMarketing;
