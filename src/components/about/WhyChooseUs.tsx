
import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Comprehensive Approach",
      description: "Integrating modern technology into every aspect of marketing strategy, ensuring data-driven decisions and optimal performance across all channels."
    },
    {
      title: "Human-Centered Design",
      description: "Technology serves people, not the other way around. Every solution is designed with customer needs and experience at the center."
    },
    {
      title: "Measurable Results",
      description: "Every campaign is designed with clear KPIs and measurable outcomes to ensure tangible ROI for your business investment."
    },
    {
      title: "Continuous Innovation",
      description: "Always staying updated with the latest marketing technologies and emerging trends to keep your business ahead of the competition."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Choose <span className="gradient-text">Heidigital</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We're not just another marketing agency. Our unique approach 
              combines creative expertise with data-driven strategy and cutting-edge technology.
            </p>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Digital marketing workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/20 to-heidigital-purple/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
