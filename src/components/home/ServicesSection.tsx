
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Zap, Search, Megaphone, PenTool, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Social Media Mastery",
      description: "Strategic social media campaigns that amplify your brand voice and engage your target audience",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: PenTool,
      title: "Content Excellence",
      description: "Compelling, data-driven content that converts visitors into loyal customers",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Search,
      title: "SEO Domination",
      description: "Advanced SEO strategies that put your business at the top of search results",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Targeted advertising campaigns that maximize ROI and drive qualified traffic",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Zap,
      title: "Brand Strategy",
      description: "Comprehensive brand positioning that differentiates you from competitors",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven insights that guide strategic decisions and optimize performance",
      gradient: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block shadow-lg">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive marketing solutions engineered for Australian businesses ready to dominate the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`${service.bgColor} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg">
              <Link to="/solutions/free-resources">Free Resources →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg">
              <Link to="/solutions/ai-tools">Marketing Tools →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
