
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
  Calculator, PenTool, Globe, Calendar, Mail, Search,
  Rocket, CheckCircle, TrendingUp
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

  return (
    <Layout>
      <Hero
        title="Transform Your Digital Future"
        subtitle="Cutting-edge digital marketing strategies designed to accelerate Australian businesses into tomorrow's competitive landscape."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        ctaText="Start Your Journey"
        ctaLink="/contact"
        secondaryCtaText="Explore Solutions"
        secondaryCtaLink="/solutions"
      />

      {/* Value Props Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Launch Fast</h3>
              <p className="text-gray-600">Get your digital presence up and running quickly with our streamlined processes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">Every project receives our full attention to detail and commitment to excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">Data-driven strategies that deliver measurable outcomes for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Next-Generation
              <br />
              <span className="text-blue-600">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions engineered for Australian businesses ready to dominate the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Mastery</h3>
              <p className="text-gray-600">Strategic social media campaigns that build authentic connections and drive measurable engagement across all platforms.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 p-4 rounded-xl w-fit mb-6">
                <PenTool className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content Excellence</h3>
              <p className="text-gray-600">Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 p-4 rounded-xl w-fit mb-6">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Domination</h3>
              <p className="text-gray-600">Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-pink-100 p-4 rounded-xl w-fit mb-6">
                <Image className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Evolution</h3>
              <p className="text-gray-600">Strategic brand development that positions your business as a leader in the Australian market.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-100 p-4 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Advertising</h3>
              <p className="text-gray-600">Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                <Brain className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Innovation</h3>
              <p className="text-gray-600">Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
              <Link to="/services">Explore All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Technology-Powered Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Technology
              <br />
              <span className="text-blue-300">Meets Marketing Excellence</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Harness the power of cutting-edge technology and data analytics to revolutionize your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-blue-500 p-4 rounded-xl w-fit mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Intelligent Content Systems</h3>
              <p className="text-white/80">Advanced algorithms create high-converting, SEO-optimized content that adapts to your brand voice and audience preferences in real-time.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-pink-500 p-4 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Market Analytics</h3>
              <p className="text-white/80">Machine learning models predict market trends, consumer behavior, and campaign performance to keep you ahead of the competition.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-green-500 p-4 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Optimization</h3>
              <p className="text-white/80">Self-learning systems continuously optimize campaigns, budgets, and targeting to maximize ROI while minimizing manual intervention.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500">
              <Link to="/solutions/ai-tools">Explore Technology Tools →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results for
              <br />
              <span className="text-blue-600">Forward-Thinking Brands</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with innovative digital strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="FMCG DAO Marketing Revolution"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">Web3 Strategy</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">Consumer Research</span>
                </div>
                <h3 className="text-xl font-bold mb-3">FMCG DAO Marketing Revolution</h3>
                <p className="text-gray-600 mb-4">Pioneering research into Web3-based community governance models that transformed brand loyalty and consumer engagement by 350%.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/portfolio/fmcg-dao-strategy">View Case Study</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Microlino EV Launch Strategy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Campaign Strategy</span>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">EV Marketing</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Microlino EV Launch Strategy</h3>
                <p className="text-gray-600 mb-4">Comprehensive market entry campaign for revolutionary electric vehicle, generating 75M+ impressions and driving pre-orders.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/portfolio/microlino-strategy">View Case Study</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sun Life Viral Campaign"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">Viral Marketing</span>
                  <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-medium">Influencer Strategy</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Sun Life Viral Campaign</h3>
                <p className="text-gray-600 mb-4">'I Choose The Sun' influencer campaign achieved 75.6M views and 8,000+ user-generated videos during challenging times.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/portfolio/i-choose-the-sun">View Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join forward-thinking Australian businesses that are revolutionizing their marketing with our cutting-edge solutions. Let's build your digital future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Start Your
                <br />
                <span className="text-blue-600">Digital Journey</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to revolutionize your marketing? Our experts are standing by to craft your personalized digital transformation strategy.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-blue-600">info@heidigital.com.au</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
