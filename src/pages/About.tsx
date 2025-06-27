
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2, Lightbulb, Eye, Target, Handshake, Brain, Rocket, TrendingUp } from "lucide-react";

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

  return (
    <Layout>
      <Hero
        title="About Heidigital"
        subtitle="Pioneering the future of AI-powered marketing for Australian businesses"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Founder Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/lovable-uploads/ca187ee0-4c02-419d-9075-fd4eb38aab32.png"
                alt="Heidi Nguyen - Founder of Heidigital"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">AI Expert</div>
                <div className="text-sm opacity-90">Marketing Strategist</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="gradient-text">Heidi Nguyen</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founder & Creative Director of Heidigital
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm an AI marketing strategist with over 10 years of experience helping businesses scale through innovative digital solutions. My passion lies in democratizing access to cutting-edge marketing technology, ensuring every business can leverage the same AI-powered tools that drive success for Fortune 500 companies.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Heidigital, I believe that technology should serve people, not the other way around. Every strategy I design is human-centered, with clear KPIs and measurable outcomes that deliver real value to your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/heidintt"
                  className="bg-heisocial-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:heidi@heidigital.com.au"
                  className="border-2 border-heisocial-blue text-heisocial-blue px-6 py-3 rounded-lg hover:bg-heisocial-blue hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To transform how businesses connect with their customers through intelligent, data-driven marketing strategies that deliver real results. We democratize access to cutting-edge AI marketing technology for businesses of all sizes.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-heisocial-purple to-heisocial-blue rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Australia's leading AI-powered marketing agency, pioneering innovative solutions that help businesses thrive in the digital age through the perfect blend of artificial intelligence and human creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Specialized knowledge that drives exceptional results"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-heisocial-lightpurple to-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Core Values"
            subtitle="Principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-heisocial-blue to-heisocial-purple rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
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
                We're not just another marketing agency. Our unique approach combines creative expertise with data-driven strategies and cutting-edge AI technology to deliver exceptional results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-6 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI-First Methodology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We integrate artificial intelligence into every aspect of our marketing strategies, ensuring data-driven decisions and optimized performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-6 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Human-Centered Design</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Technology serves people, not the other way around. Every solution is designed with your customers' needs and experiences at the forefront.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-6 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every campaign is designed with clear KPIs and measurable outcomes to ensure tangible ROI for your business investment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-3 rounded-full mr-6 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We stay ahead of the curve with the latest marketing technologies and emerging trends to keep your business competitive.
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
              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-heisocial-blue">AI</div>
                <div className="text-gray-600">Powered</div>
              </div>
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
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default About;
