
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { useSEO } from "@/hooks/useSEO";
import { Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  // Enhanced SEO for contact page
  useSEO({
    title: "Contact Us | Free Marketing Consultation & Custom Quotes | Heidi Digital",
    description: "Ready to grow your Australian business? Contact our digital marketing experts for a free consultation. Get custom strategies, competitive quotes & proven results. Call today - response within 24hrs!",
    keywords: "contact digital marketing agency australia, free marketing consultation, get marketing quote, marketing experts contact, digital marketing help sydney, marketing consultation australia, business growth consultation",
    url: "https://heidigital.info/contact",
    type: "website",
    image: "https://heidigital.info/og-contact.jpg",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Contact", url: "https://heidigital.info/contact" }
    ]
  });

  // Add LocalBusiness and ContactPoint structured data
  React.useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heidi Digital",
      "description": "Leading digital marketing agency in Australia providing comprehensive marketing solutions",
      "url": "https://heidigital.info",
      "email": "contact@heidigital.info",
      "openingHours": [
        "Mo-Fr 09:00-18:00"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@heidigital.info",
          "availableLanguage": ["English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "contact@heidigital.info",
          "availableLanguage": ["English"]
        }
      ],
      "priceRange": "$$-$$$",
      "serviceArea": {
        "@type": "Country",
        "name": "Australia"
      }
    };

    const contactPageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Heidi Digital - Get Free Marketing Consultation",
      "description": "Contact Australia's leading digital marketing agency for expert consultation and custom marketing solutions",
      "url": "https://heidigital.info/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Heidi Digital"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly do you respond to contact inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We respond to all contact inquiries within 24 hours during business days. For urgent matters, we typically respond within 2-4 hours during business hours (9 AM - 6 PM AEST)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer free initial consultations to discuss your marketing needs and provide recommendations. This helps us understand your business goals and how we can best assist you."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I include when contacting you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please include your business name, industry, current marketing challenges, goals, and preferred contact method. The more details you provide, the better we can tailor our initial recommendations."
          }
        }
      ]
    };

    const schemas = [localBusinessSchema, contactPageSchema, faqSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `contact-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`contact-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`contact-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <Layout>
      <main role="main">
        <Hero
          title="Contact Us"
          subtitle="Get in touch with our team to discuss how we can help your business grow"
        />

        <section className="py-12 px-4" aria-label="Contact Information and Form">
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
        <section className="py-6 px-4" aria-label="Location Map">
          <div className="container mx-auto">
            <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Map Placeholder - In a real implementation, an interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
