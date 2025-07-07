
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your
              <br />
              <span className="text-blue-600">Digital Journey</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to revolutionize your marketing? Our experts are standing by to craft your personalized digital transformation strategy.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-blue-600">contact@heidigital.info</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" placeholder="How can we help you?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} placeholder="Your message here..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
