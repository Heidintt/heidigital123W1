
import React from "react";
import { Calculator, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const AIToolsFeatures = () => {
  const features = [
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "ROI Calculator",
      description: "Calculate and track your marketing return on investment with precision",
      points: [
        "Real-time ROI calculations across all channels",
        "Budget optimization recommendations",
        "Performance tracking and analytics",
        "Export detailed reports for stakeholders"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Budget Planning Tools",
      description: "Strategic budget allocation and campaign planning made simple",
      points: [
        "Multi-channel budget distribution",
        "Campaign forecasting and projections",
        "Resource allocation optimization",
        "Performance-based budget adjustments"
      ]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading 
          title="Powerful Marketing Tools" 
          subtitle="Advanced tools designed to optimize your marketing performance and ROI" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-heidigital-lightblue p-6 rounded-full w-fit mx-auto mb-6">
                <div className="text-heidigital-blue">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="text-left space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-heidigital-blue mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsFeatures;
