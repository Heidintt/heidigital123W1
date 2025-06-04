
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const FreeResourcesSection = () => {
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
  );
};

export default FreeResourcesSection;
