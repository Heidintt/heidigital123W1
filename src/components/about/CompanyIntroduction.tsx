
import React from "react";
import { Brain, Users, Globe, BarChart } from "lucide-react";

const CompanyIntroduction = () => {
  const services = [
    {
      title: "Brand Development",
      description: "Strategic brand building from concept to market presence.",
      icon: Users,
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions for modern businesses.",
      icon: Globe,
    },
    {
      title: "Growth Analytics",
      description: "Data-driven insights for accelerated business growth.",
      icon: BarChart,
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-white via-gray-50/30 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Welcome to <span className="gradient-text">Heidigital</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We transform ambitious ideas into digital reality through innovative marketing strategies. 
              Our blend of creative expertise and advanced technology delivers measurable results for forward-thinking businesses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-snug">{service.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Dashboard"
                className="w-full h-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/10 to-heidigital-purple/10"></div>
            </div>
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-heidigital-blue to-heidigital-purple text-white p-4 rounded-xl shadow-lg">
              <div className="text-lg font-bold">Digital</div>
              <div className="text-xs opacity-90">First</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="text-lg font-bold text-heidigital-purple">Results</div>
              <div className="text-gray-600 text-xs">Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
