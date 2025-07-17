
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useSEO } from "@/hooks/useSEO";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";
import ContactSchemas from "@/components/contact/ContactSchemas";

const Contact = () => {
  // Enhanced SEO for contact page with corrected canonical URL
  useSEO({
    title: "Contact Us | Marketing Consultation",
    description: "Ready to grow your Australian business? Contact our digital marketing experts for a free consultation. Get custom strategies, competitive quotes & proven results. Call today - response within 24hrs!",
    keywords: "contact digital marketing agency australia, free marketing consultation, get marketing quote, marketing experts contact, digital marketing help sydney, marketing consultation australia, business growth consultation",
    url: "https://heidigital.info/contact",
    canonicalUrl: "https://heidigital.info/contact",
    type: "website",
    image: "https://heidigital.info/og-contact.jpg",
    schemaType: "ContactPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Contact", url: "https://heidigital.info/contact" }
    ]
  });

  return (
    <Layout>
      <ContactSchemas />
      <main role="main">
        <Hero
          title="Contact Us"
          subtitle="Get in touch with our team to discuss how we can help your business grow"
        />

        <section className="py-12 px-4" aria-label="Contact Information and Form">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ContactInfo />
              <ContactFormSection />
            </div>
          </div>
        </section>

        <MapSection />
      </main>
    </Layout>
  );
};

export default Contact;
