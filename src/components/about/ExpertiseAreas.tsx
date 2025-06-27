
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Brain, Rocket, TrendingUp } from "lucide-react";

const ExpertiseAreas = () => {
  const expertise = [
    {
      title: "Digital Marketing Strategy",
      description: "Building comprehensive marketing strategies that combine modern technology with deep market insights.",
      icon: Brain,
    },
    {
      title: "Creative Solutions",
      description: "Creating unique creative solutions that help your brand stand out in the competitive market.",
      icon: Rocket,
    },
    {
      title: "Performance Optimization",
      description: "Optimizing performance and ROI through data analysis and continuous strategy adjustment.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Areas of Expertise"
          subtitle="Deep knowledge delivering superior results"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((area, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
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
