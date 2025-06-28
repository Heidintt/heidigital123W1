
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Brain, CheckCircle2, ArrowRight, Target, Zap, 
  Image, Film, Lightbulb, Settings, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Marketing Strategy",
      description: "Leverage artificial intelligence to create data-driven marketing strategies that deliver measurable results and optimize your marketing ROI.",
      price: "Competitive & Flexible"
    },
    {
      icon: Zap,
      title: "Content Creation & SEO",
      description: "AI-generated content that ranks high on search engines and engages your target audience with compelling storytelling.",
      price: "Competitive & Flexible"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management powered by AI insights to build and grow your online community.",
      price: "Competitive & Flexible"
    },
    {
      icon: Image,
      title: "Branding & Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive marketplace.",
      price: "Competitive & Flexible"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Maximize your ROI with AI-optimized advertising campaigns across Google, Facebook, and other major platforms.",
      price: "Competitive & Flexible"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies and technical optimization techniques.",
      price: "Competitive & Flexible"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Comprehensive Digital Marketing Services"
        subtitle="AI-powered marketing solutions that drive real results and accelerate your business growth in the digital landscape"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Get Started Today"
        ctaLink="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/portfolio"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Digital Marketing Services"
            subtitle="End-to-end marketing solutions designed to transform your business and drive sustainable growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
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
      <section className="py-12 px-4 bg-gray-50">
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

      <CallToAction
        title="Let's Grow Your Business Together"
        description="Schedule a free consultation to discover how our AI-powered marketing services can drive significant growth for your business in today's competitive landscape."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Case Studies"
        secondaryButtonLink="/portfolio"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Services;
