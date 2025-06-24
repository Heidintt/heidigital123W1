
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import PortfolioCard from "@/components/PortfolioCard";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Settings, Brain, FileText, Download, Lightbulb,
  Mail, Phone, ArrowRight, Zap, Shield, Target,
  Globe, TrendingUp, Award, Rocket, Star, CheckCircle
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced with glassmorphism and functional buttons */}
      <section aria-label="Hero banner" className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-16 md:p-20 border border-white/20 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 mb-12">
                <Zap className="w-6 h-6 text-blue-300" />
                <span className="text-white/90 font-medium text-xl">Next-Generation Digital Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 text-white leading-[0.9] tracking-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mt-4">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-2xl md:text-4xl text-white/85 mb-16 leading-relaxed max-w-5xl mx-auto font-light">
                Cutting-edge digital marketing strategies designed to accelerate 
                Australian businesses into tomorrow's competitive landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 min-w-[260px]"
                >
                  Start Your Journey
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/solutions"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 min-w-[260px]"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Rocket className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Launch Fast</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get your digital presence up and running quickly with our streamlined processes
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Star className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every project receives our full attention to detail and commitment to excellence
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Proven Results</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Data-driven strategies that deliver measurable outcomes for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced typography and spacing */}
      <section className="py-32 px-8 bg-white" aria-label="Our digital marketing services">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-8 py-4 rounded-full font-medium mb-10 text-xl">
              <Settings className="w-6 h-6" />
              Our Expertise
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 text-gray-900 leading-[0.9] tracking-tight">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
                Digital Solutions
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Comprehensive marketing solutions engineered for Australian businesses 
              ready to dominate the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" role="list">
            {/* Service Cards - Enhanced spacing and typography */}
            <div className="group bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Megaphone className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Social Media Mastery</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Strategic social media campaigns that build authentic connections and drive measurable engagement across all platforms.
              </p>
              <Link to="/services/social-media" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <PenSquare className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Content Excellence</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.
              </p>
              <Link to="/services/content-creation" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-white to-green-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">SEO Domination</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.
              </p>
              <Link to="/services/seo" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-white to-pink-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Brand Evolution</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Strategic brand development that positions your business as a leader in the Australian market.
              </p>
              <Link to="/services/branding" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-white to-cyan-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">Precision Advertising</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.
              </p>
              <Link to="/services/digital-ads" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 leading-tight">AI Innovation</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.
              </p>
              <Link to="/services/ai-marketing" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group-hover:gap-4 gap-2 transition-all text-xl">
                Learn More <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced typography */}
      <section className="py-32 px-8 bg-gradient-to-br from-gray-50 to-blue-50/30" aria-label="About Heidigital Australia">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern digital workspace with advanced analytics"
                className="rounded-3xl shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-medium mb-10 text-xl">
                <Award className="w-6 h-6" />
                Innovation Leaders
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                Pioneering the Future of 
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
                  Digital Marketing
                </span>
              </h2>
              
              <div className="space-y-10 text-2xl text-gray-600 leading-relaxed">
                <p>
                  At Heidigital Australia, we merge cutting-edge technology with proven marketing methodologies to deliver unprecedented results for forward-thinking businesses.
                </p>
                <p>
                  Our data-driven approach combines deep market insights with innovative strategies, ensuring every campaign is optimized for maximum impact in the Australian digital landscape.
                </p>
                <p>
                  As pioneers in next-generation marketing solutions, we're not just keeping up with digital transformation—we're leading it.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 mt-12">
                <div className="flex items-center gap-4 bg-blue-50 text-blue-700 px-8 py-4 rounded-full">
                  <Shield className="w-6 h-6" />
                  <span className="font-medium text-lg">Fresh Perspective</span>
                </div>
                <div className="flex items-center gap-4 bg-purple-50 text-purple-700 px-8 py-4 rounded-full">
                  <Target className="w-6 h-6" />
                  <span className="font-medium text-lg">Focused Approach</span>
                </div>
                <div className="flex items-center gap-4 bg-green-50 text-green-700 px-8 py-4 rounded-full">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-medium text-lg">Growth Mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Section - Updated messaging */}
      <section className="py-32 px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white" aria-label="Technology-powered marketing solutions">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-8 py-4 rounded-full font-medium mb-10 border border-white/20 text-xl">
              <Brain className="w-6 h-6" />
              Technology-Powered Solutions
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-[0.9] tracking-tight">
              Advanced Technology
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-4">
                Meets Marketing Excellence
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Harness the power of cutting-edge technology and data analytics to revolutionize your marketing strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" role="list">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Intelligent Content Systems</h3>
              <p className="text-white/70 leading-relaxed text-xl">
                Advanced algorithms create high-converting, SEO-optimized content that adapts to your brand voice and audience preferences in real-time.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Predictive Market Analytics</h3>
              <p className="text-white/70 leading-relaxed text-xl">
                Machine learning models predict market trends, consumer behavior, and campaign performance to keep you ahead of the competition.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Settings className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Automated Optimization</h3>
              <p className="text-white/70 leading-relaxed text-xl">
                Self-learning systems continuously optimize campaigns, budgets, and targeting to maximize ROI while minimizing manual intervention.
              </p>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link
              to="/solutions/ai-tools"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Technology Tools <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section - Enhanced typography */}
      <section className="py-32 px-8 bg-gray-50" aria-label="Our portfolio showcase">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-8 py-4 rounded-full font-medium mb-10 text-xl">
              <Globe className="w-6 h-6" />
              Success Stories
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-12 text-gray-900 leading-[0.9] tracking-tight">
              Proven Results for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
                Forward-Thinking Brands
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with innovative digital strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" role="list">
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

          <div className="text-center mt-20">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold text-2xl group"
            >
              View All Case Studies 
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your Digital Presence?"
        description="Join forward-thinking Australian businesses that are revolutionizing their marketing with our cutting-edge solutions. Let's build your digital future together."
        primaryButtonText="Start Your Transformation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Solutions"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      />

      {/* Contact Section - Enhanced typography */}
      <section className="py-32 px-8 bg-white" aria-label="Contact form and information">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-8 py-4 rounded-full font-medium mb-10 text-xl">
                <Mail className="w-6 h-6" />
                Get in Touch
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                Let's Start Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-4">
                  Digital Journey
                </span>
              </h2>
              
              <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
                Ready to revolutionize your marketing? Our experts are standing by to craft your personalized digital transformation strategy.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-2xl">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Mail className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-2xl mb-2">Email Us</h3>
                    <a href="mailto:info@heidigital.com.au" className="text-blue-600 hover:text-blue-700 text-xl">
                      info@heidigital.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-2xl">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Phone className="h-10 w-10 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-2xl mb-2">Call Us</h3>
                    <a href="tel:+61390000000" className="text-purple-600 hover:text-purple-700 text-xl">
                      +61 3 9000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-12 rounded-3xl shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
