import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  // Set SEO for contact page
  useSEO({
    title: "Contact Us | Get Free Marketing Consultation | Heidi Digital",
    description: "Ready to grow your business? Contact our digital marketing experts for a free consultation. Get custom strategies, competitive quotes & proven results. Call today!",
    keywords: "contact digital marketing agency, free marketing consultation, get marketing quote, marketing experts contact, digital marketing help, marketing consultation australia",
    url: "https://heidigital.info/contact",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help your business grow"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                    <MapPin className="h-4 w-4 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-base">Our Location</h3>
                    <p className="text-gray-600 text-sm">
                      123 Marketing Street, Digital City, 10010
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-4">
                    <Mail className="h-4 w-4 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-base">Email Address</h3>
                    <p className="text-gray-600 text-sm">info@heidigital.com.au</p>
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
                      Check out our <a href="/faq" className="text-heidigital-blue hover:underline">FAQ page</a> for answers to common questions, or visit our <a href="/blog" className="text-heidigital-blue hover:underline">blog</a> for insights and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-5">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Map Placeholder - In a real implementation, an interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
