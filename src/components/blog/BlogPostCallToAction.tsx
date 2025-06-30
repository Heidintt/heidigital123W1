
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogPostCallToAction: React.FC = () => {
  return (
    <div className="mt-16 overflow-hidden rounded-2xl shadow-2xl">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">Need Help With Your Marketing?</h3>
        <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
          Get expert guidance from our team at Heidi Digital
        </p>
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
          <Link to="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogPostCallToAction;
