
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TechnologySection from "@/components/home/TechnologySection";
import PortfolioSection from "@/components/home/PortfolioSection";
import BlogSection from "@/components/home/BlogSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ContactSection from "@/components/home/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // Enhanced SEO optimization for homepage with comprehensive meta tags
  useSEO({
    title: "Digital Marketing Agency Australia | AI-Powered Solutions | Heidi Digital",
    description: "Transform your business with Australia's leading AI-powered digital marketing agency. Expert SEO, social media marketing, content creation & branding services. Get your FREE consultation today and boost ROI by 300%!",
    keywords: "digital marketing agency australia, AI marketing solutions, SEO services australia, social media marketing, content creation, branding agency, digital advertising, marketing automation, ROI optimization, australian marketing agency",
    url: "https://heidigital.info/",
    type: "website",
    image: "https://heidigital.info/og-homepage.jpg"
  });

  // Add JSON-LD structured data for enhanced SEO
  React.useEffect(() => {
    // FAQ Schema for homepage
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital marketing services does Heidi Digital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Heidi Digital offers comprehensive AI-powered digital marketing services including SEO, social media marketing, content creation, branding, digital advertising, and marketing automation solutions specifically designed for Australian businesses."
          }
        },
        {
          "@type": "Question", 
          "name": "How can AI-powered marketing help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-powered marketing helps businesses optimize campaigns, improve targeting, automate processes, and increase ROI by up to 300%. Our AI tools analyze data patterns to create more effective marketing strategies and personalized customer experiences."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Heidi Digital over other marketing agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Heidi Digital combines cutting-edge AI technology with proven marketing expertise, offering personalized strategies, transparent reporting, and measurable results. We specialize in helping Australian businesses achieve sustainable growth in the digital landscape."
          }
        }
      ]
    };

    // LocalBusiness Schema for Australian presence
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://heidigital.info",
      "name": "Heidi Digital",
      "alternateName": "Heidi Digital Marketing Agency",
      "description": "Leading AI-powered digital marketing agency in Australia specializing in SEO, social media marketing, and brand development",
      "url": "https://heidigital.info",
      "telephone": "+61-XXX-XXX-XXX",
      "email": "info@heidigital.info",
      "logo": "https://heidigital.info/logo.png",
      "image": "https://heidigital.info/og-homepage.jpg",
      "priceRange": "$$-$$$",
      "openingHours": ["Mo-Fr 09:00-18:00"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-33.8688",
        "longitude": "151.2093"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressRegion": "NSW",
        "addressLocality": "Sydney"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "State",
          "name": "New South Wales"
        },
        {
          "@type": "City",
          "name": "Sydney"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-33.8688",
          "longitude": "151.2093"
        },
        "geoRadius": "1000000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI-Powered Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Marketing Strategy",
              "description": "Comprehensive AI-powered marketing strategy development and implementation"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AUD"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Optimization",
              "description": "Advanced SEO services to improve search engine rankings and organic traffic"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AUD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Social Media Marketing",
              "description": "Strategic social media management and advertising campaigns"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AUD"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Heidi Digital transformed our online presence completely. Their AI-powered approach increased our leads by 250% in just 3 months!"
        }
      ]
    };

    // Service Schema for digital marketing services
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI-Powered Digital Marketing Services",
      "provider": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "serviceType": "Digital Marketing",
      "description": "Comprehensive AI-powered digital marketing services including SEO, social media marketing, content creation, and brand development for Australian businesses",
      "areaServed": "Australia",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization (SEO)",
              "description": "Advanced SEO strategies to improve search rankings and drive organic traffic"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Social Media Marketing",
              "description": "Strategic social media management and paid advertising campaigns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing",
              "description": "High-quality content creation and distribution strategies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Development", 
              "description": "Complete brand identity development and positioning strategies"
            }
          }
        ]
      }
    };

    // HowTo Schema for marketing process
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Transform Your Digital Marketing with AI",
      "description": "Step-by-step guide to implementing AI-powered digital marketing strategies for business growth",
      "totalTime": "P30D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "AUD",
        "value": "2000"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Strategy Development",
          "text": "Analyze your current digital presence and develop a comprehensive AI-powered marketing strategy",
          "position": 1
        },
        {
          "@type": "HowToStep", 
          "name": "Implementation",
          "text": "Deploy AI tools and automation systems to optimize your marketing campaigns",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Optimization",
          "text": "Continuously monitor and optimize performance using AI-driven insights and analytics",
          "position": 3
        },
        {
          "@type": "HowToStep",
          "name": "Scaling",
          "text": "Scale successful campaigns and expand to new channels for maximum growth",
          "position": 4
        }
      ]
    };

    // Insert schemas into head
    const schemas = [faqSchema, localBusinessSchema, serviceSchema, howToSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      // Remove existing schema if present
      const existing = document.getElementById(`schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
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
          title="Transform Your Digital Future"
          subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
          ctaText="Start Your Journey"
          ctaLink="/contact"
          secondaryCtaText="Explore Solutions"
          secondaryCtaLink="/solutions"
        />

        <section aria-label="Our Services">
          <ServicesSection />
        </section>

        <section aria-label="Technology & Tools">
          <TechnologySection />
        </section>

        <section aria-label="Portfolio Showcase">
          <PortfolioSection />
        </section>

        <section aria-label="Latest Blog Posts">
          <BlogSection />
        </section>

        <section aria-label="Final Call to Action">
          <FinalCTASection />
        </section>

        <section aria-label="Contact Information">
          <ContactSection />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
