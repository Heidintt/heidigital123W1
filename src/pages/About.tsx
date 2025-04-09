
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TeamMemberCard from "@/components/TeamMemberCard";
import CallToAction from "@/components/CallToAction";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Alex founded Heisocial to help businesses leverage emerging technologies for growth.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "alex@heisocial.com",
      },
    },
    {
      name: "Sophia Wang",
      role: "Chief Marketing Officer",
      bio: "Sophia brings 10+ years of marketing expertise from global brands. She leads our strategic initiatives with data-driven approaches.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@heisocial.com",
      },
    },
    {
      name: "David Mitchell",
      role: "Head of AI Solutions",
      bio: "With a background in computer science and marketing, David specializes in leveraging AI to solve complex marketing challenges.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "david@heisocial.com",
      },
    },
    {
      name: "Emma Rodriguez",
      role: "Creative Director",
      bio: "Emma's award-winning design background drives our visual storytelling, ensuring brands communicate effectively across all channels.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "emma@heisocial.com",
      },
    },
    {
      name: "Michael Chen",
      role: "SEO & Analytics Lead",
      bio: "Michael combines technical SEO expertise with analytics to deliver measurable improvements in search visibility and traffic.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "michael@heisocial.com",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Content Strategy Manager",
      bio: "Sarah's journalistic background and marketing expertise help clients develop content that engages audiences and drives conversions.",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@heisocial.com",
      },
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace emerging technologies and approaches to keep our clients ahead of the curve.",
    },
    {
      title: "Integrity",
      description: "We believe in transparent communication and delivering on our promises with honesty and accountability.",
    },
    {
      title: "Data-Driven",
      description: "Our strategies are built on a foundation of comprehensive data analysis and measurable results.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, considering them partners in achieving shared goals.",
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every aspect of our work.",
    },
    {
      title: "Adaptability",
      description: "We continuously evolve our approaches to navigate the changing digital landscape.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="About Heisocial"
        subtitle="Meet the team behind innovative digital marketing strategies and AI solutions"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Heisocial began with a simple mission: to help businesses navigate the rapidly evolving digital landscape with innovative, results-driven marketing strategies.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small team of passionate marketers has grown into a full-service digital marketing agency with expertise spanning social media, content creation, SEO, branding, and advanced AI solutions.
              </p>
              <p className="text-gray-600">
                Throughout our journey, we've remained committed to our core values of innovation, integrity, and client success. We've helped hundreds of businesses, from startups to global enterprises, achieve remarkable growth by leveraging the power of strategic digital marketing.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-heisocial-blue">12+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital marketing strategies and AI-driven solutions that drive measurable growth and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in digital marketing innovation, setting new standards for how businesses connect with their audiences through the perfect blend of creativity, strategy, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="Principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover">
                <div className="flex items-start mb-4">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4">
                    <CheckCircle2 className="h-6 w-6 text-heisocial-purple" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Dedicated experts behind our successful strategies"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Heisocial</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We're not just another marketing agency. Our unique approach combines creative expertise with data-driven strategies and cutting-edge AI technology to deliver exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Our team brings specialized knowledge across various industries, ensuring strategies that work for your specific market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Innovative AI Solutions</h3>
                    <p className="text-gray-600">
                      We leverage cutting-edge AI technologies to provide insights, automate processes, and create personalized experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Results-Driven Approach</h3>
                    <p className="text-gray-600">
                      Our strategies are designed with clear KPIs and measurable outcomes to ensure tangible ROI for your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Transparent Communication</h3>
                    <p className="text-gray-600">
                      We maintain open and honest communication throughout our partnership, ensuring you're always informed and involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital marketing dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Work with Us?"
        description="Let's discuss how our expertise can help your business achieve its marketing goals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default About;
