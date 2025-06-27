
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Lightbulb, Eye, Target, Handshake } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "Always seeking and applying the latest technologies to deliver optimal effectiveness.",
      icon: Lightbulb,
    },
    {
      title: "Transparency",
      description: "Transparent in all reports and communication with clients.",
      icon: Eye,
    },
    {
      title: "Results",
      description: "Focus on practical and measurable results.",
      icon: Target,
    },
    {
      title: "Partnership",
      description: "Working as a long-term partner, committed to your success.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Core Values"
          subtitle="The principles that guide all our activities"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
