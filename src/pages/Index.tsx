
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Settings, Brain, FileText, Download, Lightbulb,
  Mail, Phone
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Elevate Your Digital Presence with AI-Powered Marketing"
        subtitle="Innovative digital marketing strategies and AI solutions designed to help your business grow and adapt in the digital age."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive marketing solutions tailored to your business needs"
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

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Businesses with <span className="gradient-text">Data-Driven Marketing</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Heisocial, we combine the art of creative marketing with the science of data analytics to deliver results that exceed expectations. Our team of experts is dedicated to helping businesses of all sizes navigate the complex digital landscape.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in transparent communication, data-driven decisions, and continuous innovation. Our approach is collaborative, working closely with you to understand your business goals and develop strategies that align with your vision.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">250+</h3>
                  <p className="text-gray-700">Clients Worldwide</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">500+</h3>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">15+</h3>
                  <p className="text-gray-700">Years Experience</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">98%</h3>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Digital marketing dashboard"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10">
        <div className="container mx-auto">
          <SectionHeading
            title="AI-Powered Solutions"
            subtitle="Unlock the potential of artificial intelligence for your marketing strategy"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Brain className="h-12 w-12 text-heisocial-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
              <p className="text-gray-600">
                Create high-quality, SEO-optimized content at scale using advanced AI technology that adapts to your brand voice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Lightbulb className="h-12 w-12 text-heisocial-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Anticipate market trends and customer behavior with AI-powered predictive analytics to stay ahead of the competition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Settings className="h-12 w-12 text-heisocial-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">Automation Tools</h3>
              <p className="text-gray-600">
                Streamline your marketing workflows with intelligent automation that saves time and increases efficiency.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/solutions/ai-tools"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
            >
              Explore all our AI tools <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Portfolio"
            subtitle="See how we've helped businesses achieve their marketing goals"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="Global Tech Rebrand"
              description="Complete brand overhaul for a multinational tech company, resulting in 45% increase in brand recognition."
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Branding", "Digital Strategy"]}
              link="/portfolio/global-tech-rebrand"
            />
            <PortfolioCard
              title="E-commerce SEO Campaign"
              description="Comprehensive SEO strategy that increased organic traffic by 78% in just 6 months for an e-commerce platform."
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["SEO", "Content Marketing"]}
              link="/portfolio/ecommerce-seo"
            />
            <PortfolioCard
              title="Social Media Growth"
              description="Strategic social media campaign that doubled engagement and grew the follower base by 150% for a lifestyle brand."
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Social Media", "Content Creation"]}
              link="/portfolio/social-media-growth"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
            >
              View all case studies <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our clients have to say about working with us"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Heisocial transformed our digital marketing strategy. Their AI-driven approach helped us connect with our audience on a deeper level and significantly improved our conversion rates."
              author="Sarah Johnson"
              company="Tech Innovations Inc."
              rating={5}
            />
            <TestimonialCard
              quote="The team at Heisocial understands our business needs and consistently delivers results that exceed our expectations. Their approach to SEO has dramatically improved our online visibility."
              author="Michael Chen"
              company="Global Retail Solutions"
              rating={5}
            />
            <TestimonialCard
              quote="Working with Heisocial has been a game-changer for our brand. Their strategic insights and creative approach to content marketing has helped us stand out in a crowded market."
              author="Emma Rodriguez"
              company="Lifestyle Brands Co."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Resources & Insights"
            subtitle="Valuable content to help you master digital marketing"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Ultimate SEO Guide 2023</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to boosting your website rankings and driving organic traffic in today's competitive digital landscape.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
              >
                Download Guide <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Complete toolkit with templates, content calendars, and strategy frameworks to elevate your social media presence.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
              >
                Download Toolkit <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Marketing Playbook</h3>
              <p className="text-gray-600 mb-4">
                Learn how to implement AI into your marketing strategy with practical examples and actionable insights.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
              >
                Download Playbook <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Latest Insights"
            subtitle="Expert perspectives on marketing trends and strategies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              id="1"
              title="How AI is Revolutionizing Content Marketing in 2023"
              excerpt="Explore the transformative impact of artificial intelligence on content creation, distribution, and optimization strategies."
              coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Apr 12, 2023"
              author="David Mitchell"
              category="AI Marketing"
              slug="ai-revolutionizing-content-marketing"
            />
            <BlogCard
              id="2"
              title="SEO Strategies That Actually Drove Results in Q1 2023"
              excerpt="An in-depth analysis of the most effective SEO tactics that delivered measurable improvements in organic traffic and conversions."
              coverImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Mar 28, 2023"
              author="Sophia Wang"
              category="SEO"
              slug="seo-strategies-q1-2023"
            />
            <BlogCard
              id="3"
              title="Building a Cohesive Brand Across Digital Channels"
              excerpt="Learn how to maintain consistent brand messaging and visual identity across multiple digital platforms to strengthen brand recognition."
              coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Feb 15, 2023"
              author="James Wilson"
              category="Branding"
              slug="cohesive-brand-digital-channels"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
            >
              Read more articles <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your Digital Marketing Strategy?"
        description="Get in touch with our team to discuss how we can help you achieve your business goals with our innovative marketing solutions."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or ready to get started? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">info@heisocial.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
