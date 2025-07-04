
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedToolSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <BookOpen className="h-16 w-16 text-heidigital-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Featured Resource</h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our comprehensive collection of free marketing resources and templates
          </p>
          <Button asChild size="lg" className="bg-heidigital-blue hover:bg-heidigital-blue/90">
            <Link to="/solutions/free-resources" className="flex items-center">
              Browse Free Resources <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedToolSection;
