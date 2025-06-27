
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Lightbulb, Eye, Target, Handshake, Brain, Rocket, TrendingUp, Users, Globe, BarChart } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Always seeking and applying the latest technologies to deliver optimal effectiveness.",
      icon: Lightbulb,
    },
    {
      title: "Transparency",
      description: "Transparent in all reports and communication with clients.",
      icon: Eye,
    },
    {
      title: "Results",
      description: "Focus on practical and measurable results.",
      icon: Target,
    },
    {
      title: "Partnership",
      description: "Working as a long-term partner, committed to your success.",
      icon: Handshake,
    },
  ];

  const expertise = [
    {
      title: "Digital Marketing Strategy",
      description: "Building comprehensive marketing strategies that combine modern technology with deep market insights.",
      icon: Brain,
    },
    {
      title: "Creative Solutions",
      description: "Creating unique creative solutions that help your brand stand out in the competitive market.",
      icon: Rocket,
    },
    {
      title: "Performance Optimization",
      description: "Optimizing performance and ROI through data analysis and continuous strategy adjustment.",
      icon: TrendingUp,
    },
  ];

  const services = [
    {
      title: "Brand Development",
      description: "Building strong brands from concept to practical implementation.",
      icon: Users,
    },
    {
      title: "Digital Presence",
      description: "Creating powerful digital presence across all platforms.",
      icon: Globe,
    },
    {
      title: "Data Analytics",
      description: "Analyzing data to make smart marketing decisions.",
      icon: BarChart,
    },
  ];

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Your trusted partner in digital brand development journey"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Company Introduction */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-4 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl mb-6">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Welcome to <span className="gradient-text">Heidigital</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We are a professional marketing agency focused on transforming ideas into reality through creative and effective marketing strategies. 
                  With a combination of modern technology and deep market understanding, we help businesses achieve sustainable growth goals.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-heidigital-blue to-heidigital-purple rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Marketing Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-8 -left-8 bg-gradient-to-r from-heidigital-blue to-heidigital-purple text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-90">First</div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-heidigital-purple">Creative</div>
                  <div className="text-gray-600 text-sm">Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-heidigital-lightpurple to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Mission & <span className="gradient-text">Vision</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-heidigital-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To help businesses access and successfully apply modern marketing solutions, 
                  creating sustainable value and strong growth in the digital age.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-heidigital-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a leading trusted marketing partner, pioneering the application of technology 
                  to create innovative and effective marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Deep knowledge delivering superior results"
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Core Values"
            subtitle="The principles that guide all our activities"
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
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">Heidigital</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We're not just another marketing agency. Our unique approach 
                combines creative expertise with data-driven strategy and cutting-edge technology.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-heidigital-lightpurple p-3 rounded-full mr-6 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-heidigital-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Integrating modern technology into every aspect of marketing strategy, ensuring 
                      data-driven decisions and optimal performance across all channels.
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
                      Technology serves people, not the other way around. Every solution is designed 
                      with customer needs and experience at the center.
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
                      Every campaign is designed with clear KPIs and measurable outcomes 
                      to ensure tangible ROI for your business investment.
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
                      Always staying updated with the latest marketing technologies and emerging trends 
                      to keep your business ahead of the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing workspace"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-heidigital-blue/20 to-heidigital-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how modern marketing strategies can help your business achieve exceptional growth and competitive advantage."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heidigital-blue to-heidigital-purple"
      />
    </Layout>
  );
};

export default About;
