
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Lightbulb, Eye, Target, Handshake, Brain, Rocket, TrendingUp, Zap, Shield, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Embracing cutting-edge AI technologies to keep your business ahead of the curve.",
      icon: Lightbulb,
    },
    {
      title: "Transparency",
      description: "Clear communication and honest reporting in everything we do.",
      icon: Eye,
    },
    {
      title: "Results",
      description: "Measuring success by the tangible results we deliver for your business.",
      icon: Target,
    },
    {
      title: "Partnership",
      description: "Working as an extension of your team, committed to your long-term success.",
      icon: Handshake,
    },
  ];

  const expertise = [
    {
      title: "AI Marketing Strategy",
      description: "Leveraging artificial intelligence to create data-driven marketing campaigns that deliver exceptional ROI.",
      icon: Brain,
    },
    {
      title: "Digital Innovation",
      description: "Implementing cutting-edge digital solutions that transform how businesses connect with their customers.",
      icon: Rocket,
    },
    {
      title: "Growth Optimization",
      description: "Using advanced analytics and AI tools to identify and capitalize on growth opportunities.",
      icon: TrendingUp,
    },
  ];

  const achievements = [
    {
      number: "100+",
      label: "AI-Powered Campaigns",
      icon: Zap,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Award,
    },
    {
      number: "300%",
      label: "Average ROI Increase",
      icon: TrendingUp,
    },
    {
      number: "24/7",
      label: "AI Monitoring",
      icon: Shield,
    },
  ];

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Pioneering the future of AI-powered marketing for Australian businesses"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl mb-6">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to <span className="gradient-text">Heidigital</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're a cutting-edge AI marketing agency that transforms how businesses connect with their customers. 
                Through intelligent automation, data-driven strategies, and innovative digital solutions, we help 
                companies achieve unprecedented growth in the digital landscape.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-heidigital-blue mb-2">{achievement.number}</div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AI Marketing Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-heidigital-blue to-heidigital-purple text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">AI</div>
                <div className="text-sm opacity-90">Powered</div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-heidigital-purple">24/7</div>
                <div className="text-gray-600 text-sm">Optimization</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="gradient-text">Purpose</span>
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-heidigital-blue rounded-xl flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to cutting-edge AI marketing technology, enabling businesses of all sizes 
                    to compete effectively in the digital marketplace through intelligent, data-driven strategies.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-heidigital-purple rounded-xl flex items-center justify-center mr-4">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To be Australia's leading AI-powered marketing agency, pioneering innovative solutions that 
                    help businesses thrive through the perfect blend of artificial intelligence and creative strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-gradient-to-br from-heidigital-lightpurple to-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Specialized knowledge that drives exceptional results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Core Values"
            subtitle="Principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Heidigital */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">Heidigital</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We're not just another marketing agency. Our unique approach combines creative expertise with 
                data-driven strategies and cutting-edge AI technology to deliver exceptional results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-First Methodology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We integrate artificial intelligence into every aspect of our marketing strategies, ensuring 
                      data-driven decisions and optimized performance across all channels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Human-Centered Design</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Technology serves people, not the other way around. Every solution is designed with your 
                      customers' needs and experiences at the forefront.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every campaign is designed with clear KPIs and measurable outcomes to ensure tangible ROI 
                      for your business investment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We stay ahead of the curve with the latest marketing technologies and emerging trends to 
                      keep your business competitive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/20 to-heidigital-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how AI-powered marketing strategies can help your business achieve exceptional growth and competitive advantage."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default About;
