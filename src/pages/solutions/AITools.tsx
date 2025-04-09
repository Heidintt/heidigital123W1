
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { ArrowRight, Brain, BarChart3, Layers, Code, Settings, PenSquare, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AITools = () => {
  const tools = [
    {
      title: "Content Generator",
      description: "AI-powered content creation tool for social media posts, blog articles, and marketing copy.",
      icon: <Brain className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/content-generator",
      popular: true,
    },
    {
      title: "SEO Analyzer",
      description: "Advanced AI tool that analyzes your website and provides actionable SEO recommendations.",
      icon: <BarChart3 className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/seo-analyzer",
      popular: false,
    },
    {
      title: "Audience Insights",
      description: "Leverage AI to gain deeper understanding of your target audience and their behaviors.",
      icon: <Layers className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/audience-insights",
      popular: false,
    },
    {
      title: "Campaign Optimizer",
      description: "AI-driven tool that analyzes and optimizes your marketing campaigns for maximum ROI.",
      icon: <Code className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/campaign-optimizer",
      popular: false,
    },
    {
      title: "Social Media Assistant",
      description: "AI assistant that helps you manage your social media accounts and engage with your audience.",
      icon: <Settings className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/social-media-assistant",
      popular: false,
    },
    {
      title: "Email Marketing AI",
      description: "AI tool that optimizes your email campaigns for better open rates and conversions.",
      icon: <PenSquare className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/email-marketing-ai",
      popular: false,
    },
    {
      title: "Competitor Analysis",
      description: "AI-powered tool that analyzes your competitors' strategies and identifies opportunities.",
      icon: <BarChart3 className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/competitor-analysis",
      popular: false,
    },
    {
      title: "Conversion Optimizer",
      description: "AI tool that analyzes your website and provides recommendations to improve conversion rates.",
      icon: <Zap className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/conversion-optimizer",
      popular: true,
    },
  ];

  return (
    <Layout>
      <Hero
        title="AI Marketing Tools"
        subtitle="Powerful AI-driven tools to optimize your marketing efforts and drive results"
        backgroundImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our AI-Powered Tools"
            subtitle="Cutting-edge solutions to transform your marketing strategy"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="card-hover relative">
                {tool.popular && (
                  <div className="absolute top-0 right-0 bg-heisocial-purple text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                    Popular
                  </div>
                )}
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
        </div>
      </section>

      {/* Featured Tool */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Highlighted Tool: AI Content Generator"
            subtitle="Create high-quality content in seconds with our advanced AI technology"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Our flagship AI Content Generator helps you create high-quality, engaging content in seconds. Whether you need blog posts, social media updates, or marketing copy, our advanced AI can generate content that resonates with your audience while maintaining your brand voice.
              </p>
              <p className="text-gray-600 mb-6">
                By analyzing millions of data points and learning from the best performing content across various industries, our AI tool can help you create content that drives engagement, improves SEO, and converts your audience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <Brain className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Create SEO-optimized blog posts tailored to your target keywords
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <Brain className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Generate engaging social media content for multiple platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <Brain className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Craft compelling email subject lines and body content with high open rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <Brain className="h-5 w-5 text-heisocial-purple" />
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

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="How Our AI Tools Work"
            subtitle="Leveraging advanced technology to deliver powerful marketing solutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="bg-heisocial-lightpurple h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-purple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Collection</h3>
              <p className="text-gray-600">
                Our AI tools collect and analyze data from various sources to understand your business needs and industry trends.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="bg-heisocial-lightpurple h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-purple">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Processing</h3>
              <p className="text-gray-600">
                Advanced algorithms process the data to generate insights, recommendations, and content tailored to your specific goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center">
              <div className="bg-heisocial-lightpurple h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Actionable Results</h3>
              <p className="text-gray-600">
                Receive actionable insights, optimized content, and strategy recommendations that you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="AI Tools Pricing"
            subtitle="Flexible plans to suit your business needs"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600">Perfect for small businesses and individuals</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Access to basic AI tools</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>50 AI content generations per month</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Basic SEO analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full bg-heisocial-purple hover:bg-heisocial-purple/90">
                Get Started
              </Button>
            </div>
            <div className="bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white p-8 rounded-lg shadow-md relative card-hover flex flex-col transform scale-105">
              <div className="absolute top-0 right-0 bg-white text-heisocial-blue px-4 py-1 rounded-bl-lg rounded-tr-lg font-bold">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-white/90">Ideal for growing businesses</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-white/90">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>Access to all AI tools</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>200 AI content generations per month</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>Advanced SEO analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>Competitor analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-white mr-2" />
                  <span>Monthly performance reports</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-heisocial-blue hover:bg-white/90">
                Get Started
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 card-hover flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600">For large businesses with advanced needs</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Access to all AI tools with premium features</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Unlimited AI content generations</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Comprehensive SEO analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Advanced competitor analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>Weekly performance reports</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-heisocial-purple mr-2" />
                  <span>API access for custom integrations</span>
                </li>
              </ul>
              <Button className="w-full bg-heisocial-purple hover:bg-heisocial-purple/90">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Transform Your Marketing with AI?"
        description="Contact us today to discuss how our AI tools can help you optimize your marketing strategy and achieve your business goals."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonLink="/contact"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default AITools;
