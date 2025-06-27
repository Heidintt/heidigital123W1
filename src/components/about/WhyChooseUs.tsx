
import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Results",
      description: "Track record of delivering measurable growth and ROI for businesses across industries."
    },
    {
      title: "Integrated Approach",
      description: "Seamless blend of creativity, technology, and strategy for comprehensive solutions."
    },
    {
      title: "Data-Driven Decisions",
      description: "Every strategy backed by insights and analytics for optimal performance."
    },
    {
      title: "Future-Ready Solutions",
      description: "Staying ahead of trends to keep your business competitive in evolving markets."
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">Heidigital</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the difference of working with a team that combines strategic thinking, 
              creative excellence, and technological innovation.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-5 w-5 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing workspace"
                className="w-full h-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/10 to-heidigital-purple/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
