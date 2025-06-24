
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import { 
  BarChart3, PenSquare, Search, Megaphone, Users, 
  Brain, CheckCircle2, ArrowRight, Target, Zap, 
  Image, Film, Lightbulb, Settings, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions tailored for Australian businesses"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Digital Marketing Excellence"
            subtitle="Comprehensive solutions to accelerate your business growth"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Social Media Strategy */}
            <div className="group bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Social Media Mastery</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Strategic social media campaigns that build authentic connections and drive measurable engagement across all platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />Content Strategy & Creation</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />Community Management</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />Performance Analytics</li>
              </ul>
            </div>

            {/* Content Creation */}
            <div className="group bg-gradient-to-br from-white to-purple-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <PenSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Content Excellence</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Compelling, data-driven content that resonates with Australian audiences and converts visitors into loyal customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-purple-600 mr-2" />Blog & Article Writing</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-purple-600 mr-2" />Visual Content Design</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-purple-600 mr-2" />Video Production</li>
              </ul>
            </div>

            {/* SEO Optimization */}
            <div className="group bg-gradient-to-br from-white to-green-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">SEO Domination</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Advanced SEO strategies that put your business at the top of Australian search results and drive organic growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />Technical SEO Audits</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />Keyword Strategy</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />Link Building</li>
              </ul>
            </div>

            {/* Branding */}
            <div className="group bg-gradient-to-br from-white to-pink-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Brand Evolution</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Strategic brand development that positions your business as a leader in the Australian market.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-pink-600 mr-2" />Brand Strategy & Identity</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-pink-600 mr-2" />Visual Design & Guidelines</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-pink-600 mr-2" />Brand Experience Design</li>
              </ul>
            </div>

            {/* Digital Advertising */}
            <div className="group bg-gradient-to-br from-white to-cyan-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-cyan-200">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Precision Advertising</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Data-driven advertising campaigns that maximize ROI and reach your ideal Australian customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-600 mr-2" />PPC & Google Ads</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-600 mr-2" />Social Media Advertising</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-cyan-600 mr-2" />Remarketing Campaigns</li>
              </ul>
            </div>

            {/* AI Marketing */}
            <div className="group bg-gradient-to-br from-white to-orange-50/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">AI Innovation</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Cutting-edge AI solutions that automate, optimize, and revolutionize your marketing approach.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2" />AI Content Generation</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2" />Predictive Analytics</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2" />Automated Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Process"
            subtitle="How we work with you to achieve exceptional results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-3 mt-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                Understanding your business, goals, and challenges to establish a baseline for success.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-3 mt-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Developing a tailored strategy that aligns with your objectives and market opportunities.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-3 mt-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Executing the strategy with precision using advanced tools and proven methodologies.
              </p>
            </div>
            <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-3 mt-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuously monitoring and refining our approach based on performance data.
              </p>
            </div>
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

      {/* Pricing */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Flexible Pricing"
            subtitle="Tailored solutions to fit your business needs and budget"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 text-sm">Perfect for small businesses getting started</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$999</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Social media management (2 platforms)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Basic SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Monthly content creation (4 pieces)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Bi-weekly performance reports</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg shadow-md relative hover:shadow-lg transition-shadow flex flex-col transform scale-105">
              <div className="absolute top-0 right-0 bg-white text-blue-600 px-3 py-1 rounded-bl-lg rounded-tr-lg font-bold text-xs">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-white/90 text-sm">Comprehensive solution for growing businesses</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">$2,499</span>
                <span className="text-white/90">/month</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-white mr-2" />
                  <span>Social media management (4 platforms)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-white mr-2" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-white mr-2" />
                  <span>Weekly content creation (8 pieces)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-white mr-2" />
                  <span>PPC campaign management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-white mr-2" />
                  <span>AI marketing solutions</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
                Get Started
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">Custom solutions for large organizations</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Comprehensive digital strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Full-service social media management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Enterprise SEO & content strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Advanced AI marketing implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Elevate Your Digital Marketing?"
        description="Contact us today to discuss how our comprehensive services can help your business grow and thrive in the digital landscape."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        backgroundClass="bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </Layout>
  );
};

export default Services;
