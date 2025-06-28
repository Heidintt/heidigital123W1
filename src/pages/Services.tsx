
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { Zap, Users, BarChart3, Palette, Target, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Marketing Strategy",
      description: "Leverage artificial intelligence to create data-driven marketing strategies that deliver measurable results and optimize your marketing ROI.",
      features: ["AI-powered market analysis", "Predictive customer behavior modeling", "Automated campaign optimization", "Real-time performance monitoring"],
      price: "From $2,500/month"
    },
    {
      icon: Zap,
      title: "Content Creation & SEO",
      description: "AI-generated content that ranks high on search engines and engages your target audience with compelling storytelling.",
      features: ["SEO-optimized blog articles", "Social media content", "Email marketing campaigns", "Website copy and landing pages"],
      price: "From $1,200/month"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management powered by AI insights to build and grow your online community.",
      features: ["Content planning and scheduling", "Community management", "Influencer partnerships", "Social media advertising"],
      price: "From $800/month"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the competitive marketplace.",
      features: ["Logo and brand identity design", "Brand guidelines development", "Marketing materials design", "Website design and development"],
      price: "From $3,000 project"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "Maximize your ROI with AI-optimized advertising campaigns across Google, Facebook, and other major platforms.",
      features: ["Google Ads management", "Facebook & Instagram advertising", "LinkedIn advertising", "Retargeting campaigns"],
      price: "20% of ad spend"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Boost your search engine rankings with our comprehensive SEO strategies and technical optimization techniques.",
      features: ["Technical SEO audits", "Keyword research and optimization", "Link building strategies", "Local SEO optimization"],
      price: "From $1,500/month"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and target audience to develop a comprehensive marketing strategy."
    },
    {
      step: "02",
      title: "Implementation",
      description: "Our team executes the strategy using cutting-edge AI tools and proven methodologies."
    },
    {
      step: "03",
      title: "Optimization",
      description: "Continuous monitoring and optimization to ensure maximum ROI and performance improvement."
    },
    {
      step: "04",
      title: "Scaling",
      description: "Scale successful campaigns and strategies to drive exponential business growth."
    }
  ];

  const benefits = [
    "Increase brand awareness by up to 300%",
    "Generate 5x more qualified leads",
    "Improve conversion rates by 150%",
    "Reduce customer acquisition costs by 40%",
    "Boost social media engagement by 200%",
    "Achieve 10x ROI on marketing investments"
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
                features={service.features}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Our Services?"
            subtitle="We deliver results that matter to your bottom line"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804151e596?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing Results"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Measurable Results You Can Count On</h3>
              <p className="text-gray-600 mb-6">
                Our data-driven approach ensures every marketing dollar is invested wisely. We use advanced analytics 
                and AI-powered insights to optimize campaigns in real-time, delivering consistent growth and ROI.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Proven Process"
            subtitle="A systematic approach to marketing success"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of businesses that have accelerated their growth with our proven marketing strategies. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="/contact">
                  Start Your Growth Journey <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/portfolio">
                  See Success Stories
                </a>
              </Button>
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
