
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Brain, FileText, Code, BarChart3, BookOpen, Layers } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";

const Solutions = () => {
  const aiTools = [
    {
      title: "Content Generator",
      description: "AI-powered content creation tool for social media posts, blog articles, and marketing copy.",
      icon: <Brain className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/content-generator",
    },
    {
      title: "SEO Analyzer",
      description: "Advanced AI tool that analyzes your website and provides actionable SEO recommendations.",
      icon: <BarChart3 className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/seo-analyzer",
    },
    {
      title: "Audience Insights",
      description: "Leverage AI to gain deeper understanding of your target audience and their behaviors.",
      icon: <Layers className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/audience-insights",
    },
    {
      title: "Campaign Optimizer",
      description: "AI-driven tool that analyzes and optimizes your marketing campaigns for maximum ROI.",
      icon: <Code className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/campaign-optimizer",
    },
  ];

  const resources = [
    {
      title: "Ultimate SEO Guide 2023",
      description: "Comprehensive guide to boosting your website rankings and driving organic traffic.",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/seo-guide",
    },
    {
      title: "Social Media Toolkit",
      description: "Complete toolkit with templates, content calendars, and strategy frameworks for social media.",
      type: "Toolkit",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/social-toolkit",
    },
    {
      title: "AI Marketing Playbook",
      description: "Learn how to implement AI into your marketing strategy with practical examples.",
      type: "Playbook",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/ai-playbook",
    },
    {
      title: "Content Marketing Templates",
      description: "Ready-to-use templates for content planning, creation, and distribution.",
      type: "Templates",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/content-templates",
    },
    {
      title: "Digital Marketing ROI Calculator",
      description: "Interactive tool to measure and forecast the return on your marketing investments.",
      type: "Tool",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/roi-calculator",
    },
    {
      title: "Email Marketing Best Practices",
      description: "Comprehensive guide to creating effective email campaigns that convert.",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/email-guide",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Solution Hub"
        subtitle="Explore our AI tools and free resources to enhance your marketing strategy"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* AI Tools Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="AI Marketing Tools"
            subtitle="Powerful AI-driven tools to optimize your marketing efforts"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTools.map((tool, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="bg-heisocial-lightpurple p-4 rounded-lg w-fit mb-4">
                    {tool.icon}
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tool.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-heisocial-purple hover:bg-heisocial-purple/90">
                    <Link to={tool.link} className="flex items-center">
                      Try Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-heisocial-purple text-heisocial-purple hover:bg-heisocial-purple/10">
              <Link to="/solutions/ai-tools">Explore All AI Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">AI Content Generator</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our flagship AI tool helps you create high-quality, engaging content in seconds. Whether you need blog posts, social media updates, or marketing copy, our advanced AI can generate content that resonates with your audience while maintaining your brand voice.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Create SEO-optimized blog posts tailored to your target keywords
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Generate engaging social media content for multiple platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Craft compelling email subject lines and body content with high open rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Develop product descriptions that convert browsers into customers
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-heisocial-purple hover:bg-heisocial-purple/90">
                <Link to="/solutions/ai-tools/content-generator" className="flex items-center">
                  Try It Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AI Content Generator"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Free Resources & Materials"
            subtitle="Valuable content to help you master digital marketing"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-medium text-white bg-heisocial-blue px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle className="hover:text-heisocial-blue transition-colors">
                    <Link to={resource.link}>{resource.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{resource.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full flex items-center justify-center border-heisocial-blue text-heisocial-blue hover:bg-heisocial-blue/10">
                    <Link to={resource.link}>
                      <Download className="mr-2 h-4 w-4" /> Download Resource
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-heisocial-blue text-heisocial-blue hover:bg-heisocial-blue/10">
              <Link to="/solutions/free-resources">Browse All Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest marketing insights, AI tools updates, and exclusive resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-900"
              />
              <Button className="bg-white text-heisocial-blue hover:bg-white/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm mt-4 text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        title="Need a Custom Solution?"
        description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default Solutions;
