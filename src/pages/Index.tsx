
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
      <section aria-label="Hero banner">
        <Hero
          title="Elevate Your Digital Presence with AI-Powered Marketing"
          subtitle="Innovative digital marketing strategies and AI solutions designed to help Australian businesses grow and adapt in the digital age."
          ctaText="Get Started"
          ctaLink="/contact"
          secondaryCtaText="Explore Our Services"
          secondaryCtaLink="/services"
          backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50" aria-label="Our marketing services">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive marketing solutions tailored to Australian businesses"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <ServiceCard
              title="Social Media Strategy"
              description="Build a strong social media presence with data-driven strategies and engaging content that resonates with Australian audiences."
              icon={<Megaphone className="h-6 w-6 text-heisocial-blue" />}
              link="/services/social-media"
            />
            <ServiceCard
              title="Content Creation"
              description="Captivate your Australian audience with high-quality, culturally relevant content that tells your brand story and drives conversions."
              icon={<PenSquare className="h-6 w-6 text-heisocial-blue" />}
              link="/services/content-creation"
            />
            <ServiceCard
              title="SEO Optimisation"
              description="Improve your visibility in Australian search engines with our comprehensive SEO services designed to drive local organic traffic."
              icon={<Search className="h-6 w-6 text-heisocial-blue" />}
              link="/services/seo"
            />
            <ServiceCard
              title="Branding & Identity"
              description="Establish a strong, recognisable brand identity that communicates your values and resonates with your Australian target audience."
              icon={<Users className="h-6 w-6 text-heisocial-blue" />}
              link="/services/branding"
            />
            <ServiceCard
              title="Digital Advertising"
              description="Maximise your ROI with targeted digital advertising campaigns across multiple platforms to reach your ideal Australian customers."
              icon={<BarChart3 className="h-6 w-6 text-heisocial-blue" />}
              link="/services/digital-ads"
            />
            <ServiceCard
              title="AI Marketing Solutions"
              description="Leverage the power of artificial intelligence to personalise your marketing efforts and gain valuable insights about Australian consumers."
              icon={<Brain className="h-6 w-6 text-heisocial-blue" />}
              link="/services/ai-marketing"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4" aria-label="About Heisocial Australia">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <article>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Australian Businesses with <span className="gradient-text">Data-Driven Marketing</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Heisocial Australia, we combine the art of creative marketing with the science of data analytics to deliver results that exceed expectations. Our team of local experts understands the Australian market and is dedicated to helping businesses of all sizes navigate the complex digital landscape.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in transparent communication, data-driven decisions, and continuous innovation. Our approach is collaborative, working closely with you to understand your business goals and develop strategies that align with your vision and the Australian market.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8" role="list" aria-label="Company statistics">
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">150+</h3>
                  <p className="text-gray-700">Australian Clients</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">300+</h3>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">8+</h3>
                  <p className="text-gray-700">Years in Australia</p>
                </div>
                <div className="bg-heisocial-lightpurple p-4 rounded-lg">
                  <h3 className="text-2xl font-bold text-heisocial-purple mb-2">98%</h3>
                  <p className="text-gray-700">Client Satisfaction</p>
                </div>
              </div>
            </article>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team working together on digital marketing strategies"
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Digital marketing dashboard showing analytics and metrics"
                  className="rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-heisocial-blue/10 to-heisocial-purple/10" aria-label="AI-powered marketing solutions">
        <div className="container mx-auto">
          <SectionHeading
            title="AI-Powered Solutions"
            subtitle="Unlock the potential of artificial intelligence for your Australian marketing strategy"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <article className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Brain className="h-12 w-12 text-heisocial-purple mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">AI Content Generation</h3>
              <p className="text-gray-600">
                Create high-quality, SEO-optimised content at scale using advanced AI technology that adapts to your brand voice and Australian market preferences.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Lightbulb className="h-12 w-12 text-heisocial-purple mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Anticipate Australian market trends and customer behaviour with AI-powered predictive analytics to stay ahead of the competition.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md card-hover">
              <Settings className="h-12 w-12 text-heisocial-purple mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">Automation Tools</h3>
              <p className="text-gray-600">
                Streamline your marketing workflows with intelligent automation that saves time and increases efficiency for Australian businesses.
              </p>
            </article>
          </div>

          <div className="text-center mt-12">
            <a
              href="/solutions/ai-tools"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
              aria-label="Explore all AI marketing tools"
            >
              Explore all our AI tools <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4" aria-label="Our portfolio showcase">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Portfolio"
            subtitle="See how we've helped Australian businesses achieve their marketing goals"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <PortfolioCard
              title="Melbourne Tech Startup Rebrand"
              description="Complete brand overhaul for a Melbourne tech startup, resulting in 60% increase in local brand recognition and market penetration."
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Branding", "Digital Strategy"]}
              link="/portfolio/global-tech-rebrand"
            />
            <PortfolioCard
              title="Australian E-commerce SEO Success"
              description="Comprehensive SEO strategy that increased organic traffic by 85% in just 4 months for an Australian e-commerce platform."
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["SEO", "Content Marketing"]}
              link="/portfolio/ecommerce-seo"
            />
            <PortfolioCard
              title="Sydney Lifestyle Brand Growth"
              description="Strategic social media campaign that tripled engagement and grew the follower base by 200% for a Sydney-based lifestyle brand."
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Social Media", "Content Creation"]}
              link="/portfolio/social-media-growth"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
              aria-label="View all case studies and portfolio projects"
            >
              View all case studies <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50" aria-label="Client testimonials">
        <div className="container mx-auto">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear what our Australian clients have to say about working with us"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <TestimonialCard
              quote="Heisocial Australia transformed our digital marketing strategy. Their AI-driven approach helped us connect with the Australian market on a deeper level and significantly improved our conversion rates."
              author="Sarah Thompson"
              company="Melbourne Tech Solutions"
              rating={5}
            />
            <TestimonialCard
              quote="The team at Heisocial understands the Australian business landscape and consistently delivers results that exceed our expectations. Their approach to local SEO has dramatically improved our online visibility."
              author="Michael O'Brien"
              company="Sydney Retail Group"
              rating={5}
            />
            <TestimonialCard
              quote="Working with Heisocial Australia has been a game-changer for our Brisbane-based brand. Their strategic insights and creative approach to content marketing has helped us stand out in the competitive Australian market."
              author="Emma Wilson"
              company="Queensland Lifestyle Co."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 px-4" aria-label="Free marketing resources">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Resources & Insights"
            subtitle="Valuable content to help you master digital marketing in Australia"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <article className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">Australian SEO Guide 2024</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to boosting your website rankings and driving organic traffic in Australia's competitive digital landscape.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
                aria-label="Download Australian SEO Guide 2024"
              >
                Download Guide <Download className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">Australian Social Media Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Complete toolkit with templates, content calendars, and strategy frameworks specifically designed for Australian social media audiences.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
                aria-label="Download Australian Social Media Toolkit"
              >
                Download Toolkit <Download className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100">
              <FileText className="h-12 w-12 text-heisocial-blue mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">AI Marketing Playbook for Australia</h3>
              <p className="text-gray-600 mb-4">
                Learn how to implement AI into your Australian marketing strategy with practical examples and actionable insights tailored for the local market.
              </p>
              <a
                href="/solutions/free-resources"
                className="text-heisocial-blue hover:text-heisocial-purple transition-colors inline-flex items-center"
                aria-label="Download AI Marketing Playbook for Australia"
              >
                Download Playbook <Download className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-gray-50" aria-label="Latest marketing insights and blog posts">
        <div className="container mx-auto">
          <SectionHeading
            title="Latest Insights"
            subtitle="Expert perspectives on Australian marketing trends and strategies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <BlogCard
              id="1"
              title="How AI is Revolutionising Content Marketing in Australia 2024"
              excerpt="Explore the transformative impact of artificial intelligence on content creation, distribution, and optimisation strategies for Australian businesses."
              coverImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Mar 15, 2024"
              author="David Mitchell"
              category="AI Marketing"
              slug="ai-revolutionising-content-marketing-australia"
            />
            <BlogCard
              id="2"
              title="Local SEO Strategies That Drove Results for Australian Businesses"
              excerpt="An in-depth analysis of the most effective local SEO tactics that delivered measurable improvements in organic traffic and conversions for Australian companies."
              coverImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Feb 28, 2024"
              author="Sophia Wang"
              category="SEO"
              slug="local-seo-strategies-australia-2024"
            />
            <BlogCard
              id="3"
              title="Building a Cohesive Brand Across Australian Digital Channels"
              excerpt="Learn how to maintain consistent brand messaging and visual identity across multiple digital platforms to strengthen brand recognition in the Australian market."
              coverImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="Jan 20, 2024"
              author="James Wilson"
              category="Branding"
              slug="cohesive-brand-australian-digital-channels"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center text-heisocial-blue hover:text-heisocial-purple transition-colors"
              aria-label="Read more marketing articles and insights"
            >
              Read more articles <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your Australian Digital Marketing Strategy?"
        description="Get in touch with our local team to discuss how we can help you achieve your business goals with our innovative marketing solutions tailored for the Australian market."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />

      {/* Contact Form Section */}
      <section className="py-20 px-4" aria-label="Contact form and information">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <article>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or ready to get started? Fill out the form and our Australian team will get back to you within 24 hours.
              </p>
              <div className="space-y-6" role="list" aria-label="Contact information">
                <div className="flex items-start" role="listitem">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-heisocial-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href="mailto:info@heisocial.com.au" className="text-gray-600 hover:text-heisocial-blue">
                      info@heisocial.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start" role="listitem">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-heisocial-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+61390000000" className="text-gray-600 hover:text-heisocial-blue">
                      +61 3 9000 0000
                    </a>
                  </div>
                </div>
              </div>
            </article>
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
