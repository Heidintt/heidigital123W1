import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Marketing Strategy",
      description: "Data-driven strategies powered by artificial intelligence for maximum ROI and performance optimization"
    },
    {
      title: "Social Media Management", 
      description: "Complete social media presence management across all major platforms with content creation"
    },
    {
      title: "Content Creation & Copywriting",
      description: "Compelling content that engages your audience, tells your story and drives conversions"
    },
    {
      title: "SEO & Search Optimization",
      description: "Boost your search rankings with proven SEO techniques and technical optimization"
    },
    {
      title: "Digital Advertising (PPC)",
      description: "Targeted ad campaigns on Google, Facebook, Instagram and other key advertising platforms"
    },
    {
      title: "Brand Development & Design",
      description: "Complete brand identity creation including logo design, brand guidelines and visual assets"
    },
    {
      title: "Website Development",
      description: "Professional website design and development optimized for conversions and user experience"
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Comprehensive data analysis and performance reporting for all your marketing campaigns"
    },
    {
      title: "Marketing Automation",
      description: "Streamline your marketing processes with automated workflows and lead nurturing systems"
    },
    {
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to amplify your brand message and reach"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Digital Marketing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital marketing services designed to drive growth and maximize your online presence
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Services List */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed Online
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From strategy to execution, we provide end-to-end digital marketing solutions that deliver measurable results for Australian businesses.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    {/* Number Badge */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">
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
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                    <Link to="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative lg:sticky lg:top-8">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Team Collaboration"
                className="w-full h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">300%</div>
                    <div className="text-sm text-gray-500">Average ROI Increase</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-pulse animation-delay-1000">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">75M+</div>
                    <div className="text-sm text-gray-500">Total Impressions</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">150+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-pink-400/10 to-yellow-400/10 rounded-3xl transform -rotate-3 scale-110 -z-20"></div>
          </div>
        </div>

        {/* Bottom Quick Access */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More Resources
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-teal-500 hover:to-emerald-500 text-white font-semibold">
                <Link to="/solutions/free-resources">🎁 Free Marketing Resources</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-semibold">
                <Link to="/solutions/ai-tools">🚀 AI Marketing Tools</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold">
                <Link to="/portfolio">📊 View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;