
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Cat, Users, Calendar, TrendingUp } from "lucide-react";

const NhaCaCafe = () => {
  const objectives = [
    {
      icon: <Users className="w-6 h-6 text-heisocial-blue" />,
      title: "Brand Awareness",
      description: "20,000+ social media followers by Q4 2025",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-heisocial-purple" />,
      title: "Foot Traffic",
      description: "Increase daily customers from 100 to 130",
    },
    {
      icon: <Calendar className="w-6 h-6 text-heisocial-blue" />,
      title: "Workshops",
      description: "12 creative workshops per year with 80%+ attendance",
    },
    {
      icon: <Cat className="w-6 h-6 text-heisocial-purple" />,
      title: "Community",
      description: "5+ partnerships with local organizations",
    },
  ];

  const workshops = [
    { month: "January", theme: "Festive Creativity", description: "Cat-themed Tet greeting cards" },
    { month: "February", theme: "Valentine's Love", description: "Feline-themed cards and gifts" },
    { month: "March", theme: "Art & Design", description: "DIY home décor techniques" },
    // ... More workshops can be added
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-heisocial-blue to-heisocial-purple">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketing Plan for Nhà Cá Cafe (2025)
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Where Coffee Meows & Creativity Grow!
          </p>
          <p className="text-lg italic text-white/80">
            Nơi Cà Phê Kêu Meo & Ý Tưởng Đâm Chồi!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Introduction"
            subtitle="A Unique Cat-themed Café Experience in Thai Nguyen"
          />
          <p className="text-gray-600 leading-relaxed">
            Nhà Cá Cafe is a cat-themed café located in downtown Thai Nguyen near universities and high schools. 
            Combining coffee culture, artistic interior design, and feline charm with four resident "boss" cats, 
            the café is set to become a creative hub for students, young professionals, and cat lovers.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {objectives.map((objective, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{objective.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>

        {/* Workshop Calendar */}
        <SectionHeading
          title="Workshop Calendar"
          subtitle="Monthly Creative Sessions Throughout 2025"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workshops.map((workshop, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="text-heisocial-blue font-semibold mb-2">{workshop.month}</div>
              <h3 className="text-lg font-semibold mb-2">{workshop.theme}</h3>
              <p className="text-gray-600">{workshop.description}</p>
            </div>
          ))}
        </div>

        {/* Budget Overview */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <SectionHeading
            title="Budget Overview"
            subtitle="Annual Marketing Investment: 100-120 million VND"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Workshop Materials</h4>
              <p className="text-2xl font-bold text-heisocial-blue">30M VND</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Social Media Advertising</h4>
              <p className="text-2xl font-bold text-heisocial-purple">30M VND</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Seasonal Décor & Setup</h4>
              <p className="text-2xl font-bold text-heisocial-blue">20M VND</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-heisocial-blue hover:bg-heisocial-blue/90"
          >
            <a href="/contact" className="px-8 py-6 text-lg">
              Start Your Project With Us
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NhaCaCafe;
