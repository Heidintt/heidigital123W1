
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import CompanyIntroduction from "@/components/about/CompanyIntroduction";
import MissionVision from "@/components/about/MissionVision";
import ExpertiseAreas from "@/components/about/ExpertiseAreas";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const About = () => {
  // Enhanced SEO for about page with corrected canonical URL
  useSEO({
    title: "About Us | Leading AI Digital Marketing Experts Australia | Heidi Digital",
    description: "Meet Heidi Digital's expert team of AI-powered marketing specialists. Discover our proven track record, innovative approach & why Australian businesses trust us for digital transformation.",
    keywords: "about heidi digital, digital marketing agency australia, AI marketing experts, marketing specialists australia, brand development team, marketing consultants, digital transformation experts",
    url: "https://heidigital.info/about",
    canonicalUrl: "https://heidigital.info/about",
    type: "website",
    image: "https://heidigital.info/og-about.jpg",
    schemaType: "AboutPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "About Us", url: "https://heidigital.info/about" }
    ]
  });

  // Add Organization and Team structured data
  React.useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Heidi Digital",
      "alternateName": "Heidi Digital Marketing Agency",
      "url": "https://heidigital.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heidigital.info/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Leading AI-powered digital marketing agency in Australia specializing in innovative marketing solutions, brand development, and digital transformation.",
      "foundingDate": "2020",
      "founders": [{
        "@type": "Person",
        "name": "Heidi Digital Founders"
      }],
      "numberOfEmployees": "10-50",
      "slogan": "Transform Your Digital Future",
      "knowsAbout": [
        "AI-Powered Marketing",
        "Digital Marketing Strategy",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Creation",
        "Brand Development",
        "Digital Advertising",
        "Marketing Automation",
        "Conversion Optimization",
        "Data Analytics"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW",
        "addressLocality": "Sydney"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@heidigital.info",
        "availableLanguage": ["English"],
        "areaServed": "AU"
      }],
      "sameAs": [
        "https://facebook.com/heidigital",
        "https://instagram.com/heidigital",
        "https://linkedin.com/company/heidigital",
        "https://twitter.com/heidigital"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Digital Marketing",
            "serviceType": "Digital Marketing"
          }
        }]
      }
    };

    const aboutPageSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Heidi Digital - AI Marketing Experts",
      "description": "Learn about Heidi Digital's mission, values, and expert team driving digital marketing innovation across Australia.",
      "url": "https://heidigital.info/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Heidi Digital"
      },
      "about": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "description": "Australia's leading AI-powered digital marketing agency"
      }
    };

    const schemas = [organizationSchema, aboutPageSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `about-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`about-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`about-schema-${index}`);
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
          title="About Heidigital"
          subtitle="Your trusted partner in digital brand development journey"
        />

        <section aria-label="Company Introduction">
          <CompanyIntroduction />
        </section>

        <section aria-label="Mission and Vision">
          <MissionVision />
        </section>

        <section aria-label="Areas of Expertise">
          <ExpertiseAreas />
        </section>

        <section aria-label="Core Values">
          <CoreValues />
        </section>

        <section aria-label="Why Choose Us">
          <WhyChooseUs />
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Ready to Transform Your Marketing?"
            description="Let's discuss how modern marketing strategies can help your business achieve exceptional growth and competitive advantage."
            primaryButtonText="Start Your Journey"
            primaryButtonLink="/contact"
            secondaryButtonText="Explore Services"
            secondaryButtonLink="/services"
            backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
