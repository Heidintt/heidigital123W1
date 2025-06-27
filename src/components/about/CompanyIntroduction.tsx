
import React from "react";
import { Brain, Users, Globe, BarChart } from "lucide-react";

const CompanyIntroduction = () => {
  const services = [
    {
      title: "Brand Development",
      description: "Building strong brands from concept to practical implementation.",
      icon: Users,
    },
    {
      title: "Digital Presence",
      description: "Creating powerful digital presence across all platforms.",
      icon: Globe,
    },
    {
      title: "Data Analytics",
      description: "Analyzing data to make smart marketing decisions.",
      icon: BarChart,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-4 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl mb-6">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to <span className="gradient-text">Heidigital</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are a professional marketing agency focused on transforming ideas into reality through creative and effective marketing strategies. 
                With a combination of modern technology and deep market understanding, we help businesses achieve sustainable growth goals.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-heidigital-blue to-heidigital-purple text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">Digital</div>
                <div className="text-sm opacity-90">First</div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-heidigital-purple">Creative</div>
                <div className="text-gray-600 text-sm">Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
