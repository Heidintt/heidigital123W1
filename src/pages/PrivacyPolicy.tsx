import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | Data Protection & Security | Heidi Digital",
    description: "Learn how Heidi Digital protects your privacy and personal data. Transparent privacy policy covering data collection, usage, and your rights. Updated 2024.",
    keywords: "privacy policy, data protection, personal data security, GDPR compliance, data privacy rights, information security",
    url: "https://heidigital.info/privacy-policy",
    canonicalUrl: "https://heidigital.info/privacy-policy",
    type: "website"
  });

  return (
    <Layout>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            title="Our Privacy Policy"
            subtitle="Last updated: April 9, 2025"
            centered
          />

          <div className="prose prose-base max-w-none mt-10">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4 text-base">
              At Heidigital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="mb-6 text-base">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>

            <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-3">Personal Data</h3>
            <p className="mb-3 text-base">
              When you use our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include:
            </p>
            <ul className="mb-6 text-base">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Mailing address</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Usage Data</h3>
            <p className="mb-3 text-base">
              We may also collect information about how you access and use our website and services. This may include:
            </p>
            <ul className="mb-6 text-base">
              <li>Your computer's IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit on our site</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Other statistics</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3 text-base">We may use the information we collect for various purposes, including to:</p>
            <ul className="mb-6 text-base">
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our services</li>
              <li>Provide customer support</li>
              <li>Monitor the usage of our services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Provide you with news, special offers, and general information about other goods, services, and events</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">4. Data Security</h2>
            <p className="mb-6 text-base">
              The security of your data is important to us. We strive to use commercially acceptable means to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2 className="text-xl font-bold mb-4">5. Your Rights</h2>
            <p className="mb-3 text-base">
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="mb-6 text-base">
              <li>The right to access the personal information we have about you</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
            <p className="mb-6 text-base">
              If you have any questions about this Privacy Policy, please contact us at info@heidigital.com.au.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
