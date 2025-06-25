
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Target, FileText, CheckCircle } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Professional SEO Content Creation"
          subtitle="Generate complete, publication-ready articles with professional English writing"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Ready to Publish</h3>
            <p className="text-gray-600">Complete articles with no markdown formatting, ready to copy and use</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Professional Writing</h3>
            <p className="text-gray-600">High-quality English content, 800-1500 words, detailed and engaging</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">SEO Optimized</h3>
            <p className="text-gray-600">Complete with meta titles, descriptions, and keyword optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
