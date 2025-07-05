
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join forward-thinking Australian businesses that are revolutionizing their marketing with our cutting-edge solutions. Let's build your digital future together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700">
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
