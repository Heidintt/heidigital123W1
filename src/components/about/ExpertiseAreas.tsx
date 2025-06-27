
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Brain, Rocket, TrendingUp } from "lucide-react";

const ExpertiseAreas = () => {
  const expertise = [
    {
      title: "Strategic Marketing",
      description: "Comprehensive digital strategies that align with your business goals and market dynamics.",
      icon: Brain,
    },
    {
      title: "Creative Innovation",
      description: "Breakthrough creative solutions that capture attention and drive meaningful engagement.",
      icon: Rocket,
    },
    {
      title: "Performance Analytics",
      description: "Advanced data analysis and optimization for maximum ROI and sustainable growth.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Expertise Areas</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Specialized knowledge delivering exceptional results across digital marketing disciplines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((area, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              <div className="mt-4 w-full h-0.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
