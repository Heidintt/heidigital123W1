
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FreeResources = () => {
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
    {
      title: "Local SEO Checklist",
      description: "Step-by-step checklist to optimize your business for local search.",
      type: "Checklist",
      image: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/local-seo-checklist",
    },
    {
      title: "Social Media Content Calendar",
      description: "12-month content calendar template with key dates and content ideas.",
      type: "Template",
      image: "https://images.unsplash.com/photo-1557568192-225f7c9d0f16?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/content-calendar",
    },
    {
      title: "Website Conversion Rate Optimization Guide",
      description: "Strategies and tactics to improve your website's conversion rate.",
      type: "Guide",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/solutions/free-resources/cro-guide",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Free Marketing Resources"
        subtitle="Valuable content to help you master digital marketing and grow your business"
        backgroundImage="https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Downloadable Resources"
            subtitle="Comprehensive guides, templates, and tools to enhance your marketing strategy"
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
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Use Our Resources"
            subtitle="How our free resources can help your business grow"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                At Heisocial, we believe in sharing knowledge and empowering businesses to succeed in the digital landscape. Our free resources are designed to provide actionable insights and practical tools that you can implement immediately.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're looking to improve your SEO, enhance your social media strategy, or implement AI in your marketing efforts, our comprehensive resources can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Expert Insights</h3>
                    <p className="text-gray-600">
                      Resources created by marketing professionals with years of industry experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Practical Tools</h3>
                    <p className="text-gray-600">
                      Ready-to-use templates and tools that you can implement immediately
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Actionable Strategies</h3>
                    <p className="text-gray-600">
                      Step-by-step guidance to help you implement effective marketing strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-heisocial-lightpurple p-2 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-heisocial-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Regularly Updated</h3>
                    <p className="text-gray-600">
                      Resources are regularly updated to reflect the latest industry trends and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Marketing Resources"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-heisocial-blue to-heisocial-purple text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Get Future Resources
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be the first to know when we release new resources, tools, and guides. Subscribe to our newsletter for exclusive content.
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
        title="Need Custom Marketing Solutions?"
        description="Our team of experts is ready to help you develop tailored marketing strategies for your unique business needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-white"
      />
    </Layout>
  );
};

export default FreeResources;
