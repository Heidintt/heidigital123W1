
import React from "react";
import { Target, Rocket } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-heidigital-lightpurple/30 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Driving digital transformation with clear vision and focused mission</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-heidigital-blue rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering businesses with innovative digital marketing solutions that drive sustainable growth 
              and create lasting competitive advantages in the modern marketplace.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-heidigital-purple rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading digital marketing partner that transforms how businesses connect with their audiences 
              through innovative technology and creative excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
