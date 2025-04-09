
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, PenSquare, Image, FileText, Film, Mic } from "lucide-react";

const ContentCreation = () => {
  return (
    <Layout>
      <Hero
        title="Content Creation Services"
        subtitle="Captivate your audience with high-quality, engaging content that tells your brand story"
        backgroundImage="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Content Creation Philosophy"
            subtitle="Creating content that connects and converts"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, content is the cornerstone of effective marketing. At Heisocial, we create content that not only captures attention but also drives meaningful engagement and conversions.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of creative professionals combines industry expertise with data-driven insights to develop content strategies that align with your business goals and resonate with your target audience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Strategic Approach</h3>
                    <p className="text-gray-600">
                      Content strategies aligned with your marketing goals and target audience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Diverse Formats</h3>
                    <p className="text-gray-600">
                      Content creation across multiple formats to engage your audience wherever they are
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Brand Consistency</h3>
                    <p className="text-gray-600">
                      Ensuring your content maintains a consistent voice and visual identity
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Data-Driven Optimization</h3>
                    <p className="text-gray-600">
                      Continuous improvement based on performance analytics and audience feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Content Creation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Content Creation Services"
            subtitle="Comprehensive content solutions for all your marketing needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Blog & Article Writing</h3>
              <p className="text-gray-600">
                SEO-optimized blog posts and articles that establish your authority and drive organic traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Image className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Visual Content</h3>
              <p className="text-gray-600">
                Eye-catching graphics, infographics, and images that enhance your brand message and increase engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Film className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Production</h3>
              <p className="text-gray-600">
                Compelling video content from concept to production that tells your brand story and drives engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <PenSquare className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Content</h3>
              <p className="text-gray-600">
                Platform-specific content that resonates with your audience and drives engagement across social channels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
              <p className="text-gray-600">
                Persuasive email campaigns that nurture leads, drive conversions, and build customer loyalty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Mic className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Podcast Production</h3>
              <p className="text-gray-600">
                Professional podcast production from scripting to publishing that establishes your thought leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Create Content That Converts?"
        description="Contact us today to discuss how our content creation services can help you tell your brand story and achieve your marketing goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default ContentCreation;
