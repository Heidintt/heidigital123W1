
import React from "react";
import { Rocket, Target, CheckCircle } from "lucide-react";

const ValuePropsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Launch Fast</h3>
            <p className="text-gray-600">Get your digital presence up and running quickly with our streamlined processes</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
            <p className="text-gray-600">Every project receives our full attention to detail and commitment to excellence</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-600">Data-driven strategies that deliver measurable outcomes for your business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
