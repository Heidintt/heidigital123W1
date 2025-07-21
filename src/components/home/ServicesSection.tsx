import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Marketing Strategy",
      description: "Data-driven strategies powered by AI for maximum ROI and growth"
    },
    {
      title: "Social Media Management", 
      description: "Complete social presence management across all major platforms"
    },
    {
      title: "Content Creation",
      description: "Compelling content that engages audiences and drives conversions"
    },
    {
      title: "SEO Optimization",
      description: "Boost search rankings with proven SEO techniques and strategies"
    },
    {
      title: "Digital Advertising",
      description: "Targeted ad campaigns on Google, Facebook, and key platforms"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and performance tracking"
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
          <div className="space-y-8">
            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white mt-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-3">Ready to Get Started?</h4>
                <p className="text-blue-100 mb-6 text-lg">Get a free consultation and see how we can help grow your business</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                    <Link to="/services">
                      View All Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Strategy Illustration"
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">300%</div>
                  <div className="text-sm opacity-90">Growth Average</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-6 bg-green-500 text-white p-3 rounded-xl shadow-lg transform -translate-y-1/2">
                <div className="text-center">
                  <div className="text-lg font-bold">AI</div>
                  <div className="text-xs opacity-90">Powered</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform rotate-6 -z-10 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl transform -rotate-3 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;