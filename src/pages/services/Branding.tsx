
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Users, PaintBucket, Palette, MessageSquare, Lightbulb } from "lucide-react";

const Branding = () => {
  return (
    <Layout>
      <Hero
        title="Branding & Identity Services"
        subtitle="Establish a strong, recognizable brand identity that resonates with your target audience"
        backgroundImage="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Branding Philosophy"
            subtitle="Creating authentic brand experiences that connect and convert"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Your brand is more than just a logo or a color palette—it's the essence of who you are and what you stand for. At Heisocial, we help you develop a strong, authentic brand identity that resonates with your target audience and sets you apart from the competition.
              </p>
              <p className="text-gray-600 mb-6">
                Our branding specialists combine strategic thinking with creative design to create compelling brand experiences that build recognition, trust, and loyalty.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategy-First Approach</h3>
                    <p className="text-gray-600">
                      Developing brands that align with your business goals and resonate with your audience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Authentic Storytelling</h3>
                    <p className="text-gray-600">
                      Crafting brand narratives that communicate your values and connect emotionally
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visual Excellence</h3>
                    <p className="text-gray-600">
                      Creating distinctive visual identities that stand out in crowded markets
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Consistent Application</h3>
                    <p className="text-gray-600">
                      Ensuring your brand is consistently applied across all touchpoints
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Brand Identity"
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
            subtitle="Comprehensive solutions to establish and strengthen your brand identity"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Lightbulb className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Strategy</h3>
              <p className="text-gray-600">
                Develop a clear brand strategy that defines your positioning, values, and unique selling proposition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <PaintBucket className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Visual Identity</h3>
              <p className="text-gray-600">
                Create a distinctive visual identity including logo design, color palette, typography, and imagery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <MessageSquare className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Voice & Messaging</h3>
              <p className="text-gray-600">
                Develop a consistent brand voice and key messaging that communicates your value proposition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Palette className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Guidelines</h3>
              <p className="text-gray-600">
                Create comprehensive brand guidelines to ensure consistent application across all touchpoints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Users className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Brand Experience</h3>
              <p className="text-gray-600">
                Design cohesive brand experiences across digital and physical touchpoints to build brand loyalty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <PaintBucket className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Rebranding</h3>
              <p className="text-gray-600">
                Refresh or completely overhaul your existing brand to better align with your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Build a Powerful Brand?"
        description="Contact us today to discuss how our branding services can help you establish a strong brand identity and achieve your business goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default Branding;
