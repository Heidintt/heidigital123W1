
import React from "react";
import SectionHeading from "@/components/SectionHeading";

const AIToolsFeatures = () => {
  const features = [
    {
      number: "1",
      title: "User-Friendly",
      description: "Intuitive interfaces designed for marketers, not technical experts"
    },
    {
      number: "2",
      title: "Time-Saving",
      description: "Automate repetitive tasks and focus on strategic initiatives"
    },
    {
      number: "3",
      title: "Data-Driven",
      description: "Make decisions based on insights, not guesswork"
    },
    {
      number: "4",
      title: "Constantly Evolving",
      description: "Regular updates with new features and improved AI capabilities"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Why Choose Our AI Tools"
          subtitle="Powerful features to boost your marketing effectiveness"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">{feature.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsFeatures;
