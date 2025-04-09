
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Brain, CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions tailored to your business needs"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="What We Offer"
            subtitle="Innovative marketing solutions to help your business grow"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Social Media Strategy"
              description="Build a strong social media presence with data-driven strategies and engaging content that resonates with your audience."
              icon={<Megaphone className="h-6 w-6 text-heisocial-blue" />}
              link="/services/social-media"
            />
            <ServiceCard
              title="Content Creation"
              description="Captivate your audience with high-quality, engaging content that tells your brand story and drives conversions."
              icon={<PenSquare className="h-6 w-6 text-heisocial-blue" />}
              link="/services/content-creation"
            />
            <ServiceCard
              title="SEO Optimization"
              description="Improve your visibility in search engines with our comprehensive SEO services designed to drive organic traffic."
              icon={<Search className="h-6 w-6 text-heisocial-blue" />}
              link="/services/seo"
            />
            <ServiceCard
              title="Branding & Identity"
              description="Establish a strong, recognizable brand identity that communicates your values and resonates with your target audience."
              icon={<Users className="h-6 w-6 text-heisocial-blue" />}
              link="/services/branding"
            />
            <ServiceCard
              title="Digital Advertising"
              description="Maximize your ROI with targeted digital advertising campaigns across multiple platforms to reach your ideal customers."
              icon={<BarChart3 className="h-6 w-6 text-heisocial-blue" />}
              link="/services/digital-ads"
            />
            <ServiceCard
              title="AI Marketing Solutions"
              description="Leverage the power of artificial intelligence to personalize your marketing efforts and gain valuable customer insights."
              icon={<Brain className="h-6 w-6 text-heisocial-blue" />}
              link="/services/ai-marketing"
            />
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">AI-Powered Marketing</span>: The Future is Here
              </h2>
              <p className="text-gray-600 mb-6">
                Harness the power of artificial intelligence to revolutionize your marketing strategy. Our AI-driven approaches help you understand your customers better, create personalized experiences, and make data-backed decisions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">AI Content Generation</h3>
                    <p className="text-gray-600">
                      Create high-quality content at scale while maintaining your brand voice.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Predictive Analytics</h3>
                    <p className="text-gray-600">
                      Anticipate market trends and customer behavior with advanced AI models.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Smart Automation</h3>
                    <p className="text-gray-600">
                      Streamline your marketing processes with intelligent automation tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Personalization at Scale</h3>
                    <p className="text-gray-600">
                      Deliver tailored experiences to each customer without sacrificing efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-heisocial-blue hover:bg-heisocial-blue/90">
                <a href="/services/ai-marketing" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AI Marketing Visualization"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Process"
            subtitle="How we work with you to achieve exceptional results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <div className="absolute -top-5 -left-5 bg-heisocial-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your business, goals, target audience, and current marketing efforts to establish a baseline.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <div className="absolute -top-5 -left-5 bg-heisocial-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Strategy</h3>
              <p className="text-gray-600">
                Based on our findings, we develop a tailored strategy that aligns with your business objectives and addresses your challenges.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <div className="absolute -top-5 -left-5 bg-heisocial-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Implementation</h3>
              <p className="text-gray-600">
                We execute the strategy with precision, leveraging our expertise and advanced tools to deliver effective marketing solutions.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <div className="absolute -top-5 -left-5 bg-heisocial-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor, analyze, and refine our approach based on performance data to maximize results and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Success stories from businesses we've helped"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Heisocial transformed our social media strategy, increasing our engagement by 200% in just three months. Their data-driven approach and creative content have been game-changers for our brand."
              author="James Wilson"
              company="TechStart Inc."
              rating={5}
            />
            <TestimonialCard
              quote="The SEO optimization services provided by Heisocial helped us achieve a 78% increase in organic traffic and significantly improved our conversion rates. Highly recommend their expertise!"
              author="Linda Chen"
              company="Global Retail Solutions"
              rating={5}
            />
            <TestimonialCard
              quote="Working with Heisocial on our AI marketing initiatives has given us a competitive edge. Their innovative approach and strategic insights have revolutionized how we connect with our customers."
              author="Robert Taylor"
              company="Innovate Financial"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Flexible Pricing"
            subtitle="Tailored solutions to fit your business needs and budget"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for small businesses getting started with digital marketing</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Social media management (2 platforms)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Basic SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Monthly content creation (4 pieces)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Bi-weekly performance reports</span>
                </li>
              </ul>
              <Button className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                Get Started
              </Button>
            </div>
            <div className="bg-gradient-to-r from-heisocial-purple to-heisocial-blue text-white p-8 rounded-lg shadow-md relative card-hover flex flex-col transform scale-105">
              <div className="absolute top-0 right-0 bg-white text-heisocial-blue px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-white/90">Comprehensive solution for growing businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$2,499</span>
                <span className="text-white/90">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>Social media management (4 platforms)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>Weekly content creation (8 pieces)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>PPC campaign management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>Basic AI marketing solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                  <span>Weekly performance reports</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-heisocial-blue hover:bg-white/90">
                Get Started
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600">Custom solutions for large organizations with complex needs</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Comprehensive digital strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Full-service social media management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Enterprise SEO & content strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Advanced AI marketing implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-heisocial-blue mr-2" />
                  <span>Custom reporting dashboard</span>
                </li>
              </ul>
              <Button className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Elevate Your Digital Marketing?"
        description="Contact us today to discuss how our services can help your business grow and thrive in the digital landscape."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default Services;
