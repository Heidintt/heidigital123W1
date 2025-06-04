
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest marketing insights, AI tools updates, and exclusive resources delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-gray-900"
            />
            <Button className="bg-white text-heisocial-blue hover:bg-white/90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm mt-4 text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
