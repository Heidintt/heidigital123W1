
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

const TermsOfService = () => {
  return (
    <Layout>
      <Hero
        title="Terms of Service"
        subtitle="The rules, guidelines, and agreements for using our services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            title="Our Terms of Service"
            subtitle="Last updated: April 9, 2025"
            centered
          />

          <div className="prose prose-lg max-w-none mt-12">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website at www.heisocial.com or using our services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must not access or use our services.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              Our services are intended for businesses and professionals looking to improve their digital marketing strategies. You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use our services in any way that violates any applicable law or regulation</li>
              <li>Use our services for the purpose of exploiting, harming, or attempting to exploit or harm minors</li>
              <li>Attempt to gain unauthorized access to any portion of the services or any other systems connected to the services</li>
              <li>Use our services to engage in any form of automated data collection</li>
              <li>Use our services to transmit or upload any viruses, malware, or other malicious code</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              The services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Heisocial, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2>4. User Content</h2>
            <p>
              Any content you submit, post, display, or otherwise make available on or through our services, including all intellectual property rights in such content, is referred to as "User Content." You retain ownership of your User Content.
            </p>
            <p>
              By providing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in connection with providing our services.
            </p>

            <h2>5. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall Heisocial, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@heisocial.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
