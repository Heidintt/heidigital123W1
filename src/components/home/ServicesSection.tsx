
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Marketing Strategy",
      description: "Data-driven marketing strategies that deliver measurable results and optimize your marketing ROI.",
      features: [
        "AI-powered market analysis",
        "Predictive customer behavior modeling",
        "Automated campaign optimization",
        "Real-time performance monitoring"
      ],
      image: "/lovable-uploads/4712d239-b2f3-444d-92fa-6b80b6eb52a0.png",
      link: "/services/ai-marketing"
    },
    {
      title: "Content Creation & SEO",
      description: "Content that ranks high on search engines and engages your target audience with compelling storytelling.",
      features: [
        "SEO-optimized blog articles",
        "Social media content creation",
        "Email marketing campaigns",
        "Website copy and landing pages"
      ],
      image: "/lovable-uploads/16860d8e-50cd-470b-a2f5-cf778cef6db0.png",
      link: "/services/content-creation"
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management to build and grow your online community.",
      features: [
        "Content planning and scheduling",
        "Community management",
        "Influencer partnerships",
        "Social media advertising"
      ],
      image: "/lovable-uploads/895ec4fd-4907-4454-822d-b5a1f565408c.png",
      link: "/services/social-media"
    },
    {
      title: "Branding & Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive marketplace.",
      features: [
        "Logo and brand identity design",
        "Brand guidelines development",
        "Marketing materials design",
        "Website design and development"
      ],
      image: "/lovable-uploads/c6af334c-a6a1-49b8-86fc-472db8ef4f91.png",
      link: "/services/branding"
    },
    {
      title: "Digital Advertising",
      description: "Maximize your ROI with advertising campaigns across Google, Facebook, and other major platforms.",
      features: [
        "Google Ads management",
        "Facebook & Instagram advertising",
        "LinkedIn advertising",
        "Retargeting campaigns"
      ],
      image: "/lovable-uploads/64a3f787-87c4-4873-8e73-be1bffa80a3b.png",
      link: "/services/digital-ads"
    },
    {
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies and technical optimization techniques.",
      features: [
        "Technical SEO audits",
        "Keyword research and optimization",
        "Link building strategies",
        "Local SEO optimization"
      ],
      image: "/lovable-uploads/80bc8d79-1215-4949-b652-f1e56d9536f5.png",
      link: "/services/seo"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive digital marketing services designed to drive growth and maximize ROI
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <div className="max-w-xl">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white group"
                  >
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our digital marketing services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
