import React from "react";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm"; // Đúng đường dẫn

const ContactSection = () => {
  return (
    <section className="py-8 px-4 bg-white">
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
            {/* Sử dụng ContactForm component */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;