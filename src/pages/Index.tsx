
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BlogCard from "@/components/BlogCard";
import CallToAction from "@/components/CallToAction";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { resources } from "@/data/resourcesData";
import { 
  Brain, Zap, Users, Image, Target, BarChart3,
  Calculator, PenTool, Globe, Calendar, Mail, Search
} from "lucide-react";

const Index = () => {
  // SEO optimization for homepage
  useSEO({
    title: "Digital Marketing Agency | AI-Powered Solutions | Heidi Digital",
    description: "Transform your business with AI-powered digital marketing strategies. Expert SEO, social media, content creation & branding services. Get your free consultation today!",
    keywords: "digital marketing agency, AI marketing solutions, SEO services, social media marketing, content creation, branding, digital advertising",
    url: "https://heidigital.info/",
    type: "website"
  });

  const { posts } = useBlogPosts();

  // Simplified services data
  const services = [
    {
      icon: Brain,
      title: "AI Marketing Strategy",
      description: "Data-driven marketing strategies powered by AI insights"
    },
    {
      icon: Zap,
      title: "Content Creation & SEO",
      description: "High-quality content that ranks and converts visitors"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build and grow your online community effectively"
    },
    {
      icon: Image,
      title: "Branding & Design",
      description: "Compelling brand identities that resonate with audiences"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      description: "ROI-optimized campaigns across all major platforms"
    },
    {
      icon: BarChart3,
      title: "SEO Optimization",
      description: "Boost search rankings with proven SEO strategies"
    }
  ];

  const portfolioItems = [
    {
      id: "fmcg-dao-strategy",
      title: "Web3 DAO Models in FMCG Marketing Strategy",
      description: "Academic research exploring how Web3-based community-owned DAO models can transform brand loyalty, consumer engagement, and marketing strategies in the FMCG industry by 2035.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Marketing Strategy", "Academic Research", "Web3 & Blockchain", "Consumer Engagement"],
      link: "/portfolio/fmcg-dao-strategy"
    },
    {
      id: "microlino-strategy",
      title: "Microlino 2026 Australian Launch Campaign",
      description: "Comprehensive strategic marketing communications campaign for Microlino's Australian market entry, featuring the 'Half the Space, Twice the Life' concept.",
      image: "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Campaign Strategy", "Digital Marketing", "Integrated Communications", "EV Marketing"],
      link: "/portfolio/microlino-strategy"
    },
    {
      id: "i-choose-the-sun",
      title: "Sun Life Vietnam - 'I Choose The Sun' Campaign",
      description: "A viral influencer-led social media campaign promoting positivity during COVID-19 pandemic, generating 75.6M views and 8,000+ user videos.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      categories: ["Social Media", "Influencer Marketing", "Campaign Strategy"],
      link: "/portfolio/i-choose-the-sun"
    }
  ];

  // Marketing tools data
  const marketingTools = [
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Calculate marketing ROI and optimize budget allocation"
    },
    {
      icon: PenTool,
      title: "SEO Article Generator",
      description: "Generate SEO-optimized articles that rank higher"
    },
    {
      icon: Globe,
      title: "Content Calendar Planner",
      description: "Plan and schedule your content strategy effectively"
    },
    {
      icon: Calendar,
      title: "Marketing Budget Planner",
      description: "Allocate marketing budget across channels optimally"
    },
    {
      icon: Mail,
      title: "Email Campaign Generator",
      description: "Create personalized email campaigns that convert"
    },
    {
      icon: Search,
      title: "Market Trend Analyzer",
      description: "Analyze market trends and competitor insights"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Transform Your Digital Future"
        subtitle="AI-powered marketing solutions that drive real results and accelerate your business growth in the digital landscape"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Get Started Today"
        ctaLink="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaLink="/portfolio"
      />

      {/* Services Section - Simplified */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Digital Marketing Services"
            subtitle="Comprehensive solutions designed to transform your business and drive sustainable growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-xl w-fit mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
              <Link to="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Featured Portfolio"
            subtitle="Discover our success stories and see how we've helped businesses achieve remarkable growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                categories={item.categories}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Latest Insights & Tips"
            subtitle="Stay updated with the latest marketing trends, strategies, and industry insights"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">View All Blog Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Marketing Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Marketing Tools"
            subtitle="Powerful AI-driven tools to supercharge your marketing efforts and boost your ROI"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {marketingTools.map((tool, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                <div className="bg-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/solutions/ai-tools">Explore All Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Marketing Resources"
            subtitle="Download valuable resources, templates, and guides to accelerate your marketing success"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.slice(0, 6).map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                    {resource.labels.slice(0, 2).map((label, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {label}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600">
              <Link to="/solutions/free-resources">Access All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Business?"
        description="Let's discuss how our AI-powered marketing solutions can drive significant growth for your business in today's competitive landscape."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Index;
