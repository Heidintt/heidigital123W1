
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, PenTool, Search, Image, BarChart3, Brain
} from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive marketing solutions engineered for Australian businesses ready to dominate the digital landscape
          </p>
          
          {/* Quick Access Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 text-white">
              <Link to="/solutions/free-resources">🎁 Free Resources</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white">
              <Link to="/solutions">🚀 Marketing Tools</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Mastery</h3>
            <p className="text-gray-600">Strategic social media campaigns that build authentic connections and drive measurable engagement across all platforms.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Content Excellence</h3>
            <p className="text-gray-600">Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">SEO Domination</h3>
            <p className="text-gray-600">Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-pink-400 to-rose-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Image className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Brand Evolution</h3>
            <p className="text-gray-600">Strategic brand development that positions your business as a leader in the Australian market.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Precision Advertising</h3>
            <p className="text-gray-600">Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-gradient-to-br from-orange-400 to-red-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">AI Innovation</h3>
            <p className="text-gray-600">Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.</p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white">
            <Link to="/services">Explore All Services →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
