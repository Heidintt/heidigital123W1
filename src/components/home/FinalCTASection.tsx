
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s grow together
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          At Heidigital, we don’t do cookie-cutter. We craft strategies built around your brand, your goals, and your market - because your growth matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent text-blue-600 hover:bg-white hover:text-blue-600">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
