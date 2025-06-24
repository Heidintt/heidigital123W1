
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import PortfolioCard from "@/components/PortfolioCard";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Settings, Brain, FileText, Download, Lightbulb,
  Mail, Phone, ArrowRight, Zap, Shield, Target,
  Globe, TrendingUp, Award
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced with modern glassmorphism */}
      <section aria-label="Hero banner" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 font-medium">AI-Powered Digital Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
                Cutting-edge digital marketing strategies powered by artificial intelligence, 
                designed to accelerate Australian businesses into tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New addition for credibility */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">3.2x</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned with modern cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30" aria-label="Our digital marketing services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <Settings className="w-4 h-4" />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions engineered for Australian businesses ready to dominate the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Social Media Mastery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-driven social media strategies that build authentic connections and drive measurable engagement across all platforms.
              </p>
              <a href="/services/social-media" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PenSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Content Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.
              </p>
              <a href="/services/content-creation" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">SEO Domination</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.
              </p>
              <a href="/services/seo" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Brand Evolution</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic brand development that positions your business as a leader in the Australian market.
              </p>
              <a href="/services/branding" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Precision Advertising</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.
              </p>
              <a href="/services/digital-ads" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Innovation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.
              </p>
              <a href="/services/ai-marketing" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section className="py-24 px-4 bg-white" aria-label="About Heidigital Australia">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern digital workspace with AI-powered analytics"
                className="rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium mb-6">
                <Award className="w-4 h-4" />
                Innovation Leaders
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Pioneering the Future of 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Marketing
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Heidigital Australia, we merge cutting-edge artificial intelligence with proven marketing methodologies to deliver unprecedented results for forward-thinking businesses.
                </p>
                <p>
                  Our data-driven approach combines deep market insights with innovative technology, ensuring every campaign is optimized for maximum impact in the Australian digital landscape.
                </p>
                <p>
                  As pioneers in AI-powered marketing solutions, we're not just keeping up with digital transformation—we're leading it.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  Trusted by 200+ Brands
                </div>
                <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                  <Target className="w-4 h-4" />
                  98% Success Rate
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  3.2x Average ROI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" aria-label="AI-powered marketing solutions">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full font-medium mb-6 border border-white/20">
              <Brain className="w-4 h-4" />
              AI-Powered Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Artificial Intelligence
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meets Marketing Excellence
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Harness the power of machine learning and predictive analytics to revolutionize your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Content Generation</h3>
              <p className="text-white/70 leading-relaxed">
                Advanced AI algorithms create high-converting, SEO-optimized content that adapts to your brand voice and audience preferences in real-time.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Market Analytics</h3>
              <p className="text-white/70 leading-relaxed">
                Machine learning models predict market trends, consumer behavior, and campaign performance to keep you ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Automated Optimization</h3>
              <p className="text-white/70 leading-relaxed">
                Self-learning systems continuously optimize campaigns, budgets, and targeting to maximize ROI while minimizing manual intervention.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/solutions/ai-tools"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI Tools <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Streamlined */}
      <section className="py-24 px-4 bg-gray-50" aria-label="Our portfolio showcase">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <Globe className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Proven Results for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Forward-Thinking Brands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with innovative digital strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <PortfolioCard
              title="FMCG DAO Marketing Revolution"
              description="Pioneering research into Web3-based community governance models that transformed brand loyalty and consumer engagement by 350%."
              image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Web3 Strategy", "Consumer Research"]}
              link="/portfolio/fmcg-dao-strategy"
            />
            <PortfolioCard
              title="Microlino EV Launch Strategy"
              description="Comprehensive market entry campaign for revolutionary electric vehicle, generating 75M+ impressions and driving pre-orders."
              image="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Campaign Strategy", "EV Marketing"]}
              link="/portfolio/microlino-strategy"
            />
            <PortfolioCard
              title="Sun Life Viral Campaign"
              description="'I Choose The Sun' influencer campaign achieved 75.6M views and 8,000+ user-generated videos during challenging times."
              image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              categories={["Viral Marketing", "Influencer Strategy"]}
              link="/portfolio/i-choose-the-sun"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              View All Case Studies 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Enhanced */}
      <CallToAction
        title="Ready to Transform Your Digital Presence?"
        description="Join 200+ Australian businesses that have revolutionized their marketing with our AI-powered solutions. Let's build your digital future together."
        primaryButtonText="Start Your Transformation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Solutions"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Contact Section - Redesigned */}
      <section className="py-24 px-4 bg-white" aria-label="Contact form and information">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
                <Mail className="w-4 h-4" />
                Get in Touch
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Let's Start Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to revolutionize your marketing? Our AI-powered experts are standing by to craft your personalized digital transformation strategy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <a href="mailto:info@heidigital.com.au" className="text-blue-600 hover:text-blue-700">
                      info@heidigital.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <a href="tel:+61390000000" className="text-purple-600 hover:text-purple-700">
                      +61 3 9000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 rounded-3xl shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
