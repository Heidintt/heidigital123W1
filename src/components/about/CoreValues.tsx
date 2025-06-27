
import React from "react";
import { Lightbulb, Eye, Target, Handshake } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that push the boundaries of digital marketing.",
      icon: Lightbulb,
    },
    {
      title: "Transparency",
      description: "Open communication and clear reporting in every client relationship.",
      icon: Eye,
    },
    {
      title: "Excellence",
      description: "Delivering exceptional results through meticulous attention to detail.",
      icon: Target,
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust and mutual success.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50/50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The fundamental principles that guide our approach to every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
