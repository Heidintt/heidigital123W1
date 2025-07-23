
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | Security | Heidigital",
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
            title="Heidigital Privacy Policy"
            subtitle="Last updated: April 9, 2025"
            centered
          />

          <div className="prose prose-base max-w-none mt-10">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4 text-base">
              At Heidigital, we respect and are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website https://www.heidigital.com.au or use our services.
            </p>
            <p className="mb-6 text-base">
              By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please discontinue use of our site and services.
            </p>

            <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mb-3">Personal Data:</h3>
            <p className="mb-3 text-base">
              We may collect personally identifiable information ("Personal Data") that you voluntarily provide, which may include:
            </p>
            <ul className="mb-6 text-base">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Mailing address</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Usage Data:</h3>
            <p className="mb-3 text-base">
              When you interact with our website, we may automatically collect certain information ("Usage Data"), such as:
            </p>
            <ul className="mb-6 text-base">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited</li>
              <li>Time and date of visit</li>
              <li>Time spent on pages</li>
              <li>Referring site</li>
              <li>Other diagnostic information</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Cookies & Tracking Technologies:</h3>
            <p className="mb-6 text-base">
              We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-3 text-base">We use the information we collect for various purposes, including to:</p>
            <ul className="mb-6 text-base">
              <li>Provide, operate, and maintain our services</li>
              <li>Notify you about changes or updates</li>
              <li>Respond to your requests and provide customer support</li>
              <li>Monitor and analyze usage and trends to improve our website</li>
              <li>Detect, prevent, and address technical or security issues</li>
              <li>Send you communications, such as newsletters, updates, special offers, and event information (if you opt-in)</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-3 text-base">We do not sell or rent your personal information. We may share your information:</p>
            <ul className="mb-6 text-base">
              <li>With service providers who assist us in operating our website and services</li>
              <li>If required by law or to respond to legal requests</li>
              <li>To protect the rights, property, or safety of Heidigital, our users, or others</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">5. Data Security</h2>
            <p className="mb-6 text-base">
              We implement appropriate technical and organizational measures to safeguard your personal data. However, no method of transmission over the Internet or storage is completely secure; we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-bold mb-4">6. Data Retention</h2>
            <p className="mb-6 text-base">
              We will retain your personal information only as long as necessary to fulfill the purposes outlined in this policy and to comply with legal obligations.
            </p>

            <h2 className="text-xl font-bold mb-4">7. Your Rights</h2>
            <p className="mb-3 text-base">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="mb-4 text-base">
              <li>Accessing the information we hold about you</li>
              <li>Requesting correction of inaccurate data</li>
              <li>Requesting deletion of your data</li>
              <li>Objecting to our processing</li>
              <li>Receiving your data in a portable format</li>
              <li>Withdrawing your consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="mb-6 text-base">
              To exercise these rights, please contact us using the details below. We may require verification of your identity.
            </p>

            <h2 className="text-xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6 text-base">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date. Your continued use of our site following any changes means you accept the updated policy.
            </p>

            <h2 className="text-xl font-bold mb-4">9. Contact Us</h2>
            <p className="mb-6 text-base">
              If you have any questions about this Privacy Policy, please contact us at contact@heidigital.info
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
