
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help your business grow"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Get in Touch</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our services, want to discuss a project, or simply want to say hello, we'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Marketing Street, Digital City, 10010
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Address</h3>
                    <p className="text-gray-600">info@heisocial.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-heisocial-blue p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Looking for quick answers?</h3>
                    <p className="text-gray-600 mb-4">
                      Check out our <a href="/faq" className="text-heisocial-blue hover:underline">FAQ page</a> for answers to common questions, or visit our <a href="/blog" className="text-heisocial-blue hover:underline">blog</a> for insights and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            {/* In a real implementation, you would embed a Google Map or similar here */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder - In a real implementation, an interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
