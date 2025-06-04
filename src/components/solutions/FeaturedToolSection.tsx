
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedToolSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">AI Content Generator</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Our flagship AI tool helps you create high-quality, engaging content in seconds. Whether you need blog posts, social media updates, or marketing copy, our advanced AI can generate content that resonates with your audience while maintaining your brand voice.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="h-5 w-5 text-heisocial-purple" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Create SEO-optimized blog posts tailored to your target keywords
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="h-5 w-5 text-heisocial-purple" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Generate engaging social media content for multiple platforms
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="h-5 w-5 text-heisocial-purple" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Craft compelling email subject lines and body content with high open rates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                  <BookOpen className="h-5 w-5 text-heisocial-purple" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Develop product descriptions that convert browsers into customers
                  </p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-heisocial-purple hover:bg-heisocial-purple/90">
              <Link to="/solutions/ai-tools/content-generator" className="flex items-center">
                Try It Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="AI Content Generator"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedToolSection;
