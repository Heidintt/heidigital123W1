
import React from "react";
import { Target, Rocket } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-heidigital-lightpurple to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Mission & <span className="gradient-text">Vision</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-heidigital-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help businesses access and successfully apply modern marketing solutions, 
                creating sustainable value and strong growth in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-heidigital-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading trusted marketing partner, pioneering the application of technology 
                to create innovative and effective marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
