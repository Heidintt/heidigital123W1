import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, PenTool, Search, Image, BarChart3, Brain, 
  ArrowRight, CheckCircle, Megaphone, Target
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Marketing Strategy",
      description: "Data-driven strategies powered by artificial intelligence for maximum ROI"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Media Management", 
      description: "Complete social media presence management across all major platforms"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Creation",
      description: "Compelling content that engages your audience and drives conversions"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Boost your search rankings with proven SEO techniques and strategies"
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Digital Advertising",
      description: "Targeted ad campaigns on Google, Facebook, and other key platforms"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and performance tracking for your campaigns"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our full-stack digital marketing services designed to drive growth and maximize your online presence
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Services List */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed Online
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From strategy to execution, we provide end-to-end digital marketing solutions that deliver measurable results for Australian businesses.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                  <p className="text-blue-100">Get a free consultation and see how we can help grow your business</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Team Working"
                className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">300%</div>
                    <div className="text-sm text-gray-500">ROI Increase</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">75M+</div>
                    <div className="text-sm text-gray-500">Impressions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6 scale-105 -z-10"></div>
          </div>
        </div>

        {/* Bottom Quick Access */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 text-white">
              <Link to="/solutions/free-resources">🎁 Free Marketing Resources</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white">
              <Link to="/solutions/ai-tools">🚀 AI Marketing Tools</Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
              <Link to="/portfolio">📊 View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;