
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, PenTool, Search, Image, BarChart3, Brain
} from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <br />
            <span className="text-blue-600">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions engineered for Australian businesses ready to dominate the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Social Media Mastery</h3>
            <p className="text-gray-600">Strategic social media campaigns that build authentic connections and drive measurable engagement across all platforms.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-purple-100 p-4 rounded-xl w-fit mb-6">
              <PenTool className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Content Excellence</h3>
            <p className="text-gray-600">Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
              <Search className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">SEO Domination</h3>
            <p className="text-gray-600">Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-pink-100 p-4 rounded-xl w-fit mb-6">
              <Image className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Brand Evolution</h3>
            <p className="text-gray-600">Strategic brand development that positions your business as a leader in the Australian market.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-cyan-100 p-4 rounded-xl w-fit mb-6">
              <BarChart3 className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Precision Advertising</h3>
            <p className="text-gray-600">Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Innovation</h3>
            <p className="text-gray-600">Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.</p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
            <Link to="/services">Explore All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
