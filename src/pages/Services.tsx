import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Brain, CheckCircle2, ArrowRight, Target, Zap, 
  Image, Film, Lightbulb, Settings, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  // Enhanced SEO for services page
  useSEO({
    title: "Digital Marketing Services Australia | SEO, Social Media & PPC | Heidi Digital",
    description: "Expert digital marketing services in Australia: SEO, social media management, content creation, PPC advertising & brand development. Get measurable results with free consultation!",
    keywords: "digital marketing services australia, SEO services, social media management, AI marketing strategy, content creation, PPC advertising, branding services, marketing automation, conversion optimization",
    url: "https://heidigital.info/services",
    type: "website",
    canonicalUrl: "https://heidigital.info/services",
    image: "https://heidigital.info/og-services.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Services", url: "https://heidigital.info/services" }
    ]
  });

  // Add Service and LocalBusiness structured data
  React.useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Comprehensive Digital Marketing Services",
      "provider": {
        "@type": "Organization",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "serviceType": "Digital Marketing",
      "description": "Complete digital marketing solutions including AI strategy, SEO, social media management, content creation, and brand development for Australian businesses",
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Marketing Strategy",
              "description": "Data-driven marketing strategies for businesses"
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
              "name": "Search Engine Optimization (SEO)",
              "description": "Advanced SEO services to improve search rankings and organic traffic"
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
              "name": "Social Media Management",
              "description": "Strategic social media management and advertising campaigns"
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
              "name": "Content Creation & Marketing",
              "description": "High-quality content creation for all marketing channels"
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
              "name": "Brand Development & Design",
              "description": "Complete brand identity development and positioning strategies"
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
              "name": "Digital Advertising & PPC",
              "description": "ROI-optimized advertising campaigns across all major platforms"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AUD"
            }
          }
        ]
      }
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Heidi Digital",
      "description": "Australia's leading digital marketing agency specializing in AI-powered marketing solutions",
      "url": "https://heidigital.info",
      "telephone": "+61-XXX-XXX-XXX",
      "email": "info@heidigital.info",
      "priceRange": "$$-$$$",
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "-33.8688",
          "longitude": "151.2093"
        },
        "geoRadius": "1000000"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What digital marketing services does Heidi Digital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive AI-powered digital marketing services including SEO optimization, social media management, content creation, brand development, digital advertising, and marketing automation specifically designed for Australian businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How much do your digital marketing services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pricing is flexible and competitive, tailored to your specific project needs, timeline, and budget. We offer project-based pricing with no hidden fees and transparent cost breakdown. Contact us for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with small businesses or only large enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with businesses of all sizes across Australia, from startups and small businesses to large enterprises. Our scalable solutions are designed to grow with your business and deliver results regardless of company size."
          }
        }
      ]
    };

    const schemas = [serviceSchema, localBusinessSchema, faqSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `services-schema-${index}`;
      script.textContent = JSON.stringify(schema);
      
      const existing = document.getElementById(`services-schema-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`services-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  const services = [
    {
      icon: Brain,
      title: "Marketing Strategy",
      description: "Create data-driven marketing strategies that deliver measurable results and optimize your marketing ROI."
    },
    {
      icon: Zap,
      title: "Content Creation & SEO",
      description: "Create content that ranks high on search engines and engages your target audience with compelling storytelling."
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management to build and grow your online community."
    },
    {
      icon: Image,
      title: "Branding & Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive marketplace."
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Maximize your ROI with advertising campaigns across Google, Facebook, and other major platforms."
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies and technical optimization techniques."
    }
  ];

  return (
    <Layout>
      <main role="main">
        <Hero
          title="Comprehensive Digital Marketing Services"
          subtitle="AI-powered marketing solutions that drive real results and accelerate your business growth in the digital landscape"
          ctaText="Get Started Today"
          ctaLink="/contact"
          secondaryCtaText="View Our Work"
          secondaryCtaLink="/portfolio"
        />

        <section className="py-16 px-4" aria-label="Our Services">
          <div className="container mx-auto">
            <SectionHeading
              title="Our Digital Marketing Services"
              subtitle="End-to-end marketing solutions designed to transform your business and drive sustainable growth"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 px-4" aria-label="Client Testimonials">
          <div className="container mx-auto">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Success stories from businesses we've helped transform"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Heidigital transformed our social media strategy, increasing our engagement by 200% in just three months. Their data-driven approach has been a game-changer."
                author="James Wilson"
                company="TechStart Inc."
                rating={5}
              />
              <TestimonialCard
                quote="The SEO optimization services helped us achieve a 78% increase in organic traffic and significantly improved our conversion rates. Highly recommend!"
                author="Linda Chen"
                company="Global Retail Solutions"
                rating={5}
              />
              <TestimonialCard
                quote="Working with Heidigital on our AI marketing initiatives has given us a competitive edge. Their innovative approach has revolutionized how we connect with customers."
                author="Robert Taylor"
                company="Innovate Financial"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Flexible Pricing */}
        <section className="py-12 px-4 bg-gray-50" aria-label="Pricing Information">
          <div className="container mx-auto">
            <SectionHeading
              title="Flexible Pricing"
              subtitle="Competitive and adaptable pricing tailored to your project needs"
              centered
            />

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Project Pricing</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We believe every business is unique, and so are their digital marketing needs. That's why we offer flexible, competitive pricing that adapts to your project scope, timeline, and specific requirements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-blue-900">Project-Based Pricing</h4>
                    <p className="text-blue-700 text-sm">
                      Pricing adjusted based on project complexity, scope, and deliverables. Perfect for businesses with specific goals and timelines.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-purple-900">Timeline Flexibility</h4>
                    <p className="text-purple-700 text-sm">
                      Whether you need quick turnaround or extended project timelines, we adjust our pricing to match your schedule and budget requirements.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What Makes Our Pricing Competitive</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>No hidden fees or surprise charges</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Transparent pricing breakdown</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Flexible payment options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Value-driven service packages</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Scalable solutions for growth</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Performance-based pricing options</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                    <Link to="/contact">Get Your Custom Quote</Link>
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    Free consultation to discuss your project and provide a detailed pricing proposal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Call to Action">
          <CallToAction
            title="Let's Grow Your Business Together"
            description="Schedule a free consultation to discover how our AI-powered marketing services can drive significant growth for your business in today's competitive landscape."
            primaryButtonText="Get Free Consultation"
            primaryButtonLink="/contact"
            secondaryButtonText="Download Case Studies"
            secondaryButtonLink="/portfolio"
            backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
          />
        </section>
      </main>
    </Layout>
  );
};

export default Services;
