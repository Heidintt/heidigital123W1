import React from 'react';
import { Mail, Clock, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-5">
        <span className="gradient-text">Get in Touch</span>
      </h2>
      <p className="text-gray-600 mb-6 text-base">
        Whether you have a question about our services, want to discuss a project, or simply want to say hello, we'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
      </p>

      <div className="space-y-5 mb-8">
        <div className="flex items-start">
          <div className="bg-heidigital-lightpurple p-3 rounded-full mr-4">
            <Mail className="h-4 w-4 text-heidigital-purple" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-base">Email Address</h3>
            <p className="text-gray-600 text-sm">contact@heidigital.info</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-heidigital-lightpurple p-3 rounded-full mr-4">
            <Clock className="h-4 w-4 text-heidigital-purple" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-base">Business Hours</h3>
            <p className="text-gray-600 text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
        <div className="flex items-start">
          <div className="bg-heidigital-blue p-3 rounded-full mr-4">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-medium mb-1 text-base">Looking for quick answers?</h3>
            <p className="text-gray-600 mb-3 text-sm">
              Visit our <a href="/blog" className="text-heidigital-blue hover:underline">blog</a> for insights and resources, or contact us directly for personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
