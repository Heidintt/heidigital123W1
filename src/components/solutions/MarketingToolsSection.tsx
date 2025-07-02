
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Calculator, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const MarketingToolsSection = () => {
  const marketingTools = [
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool for social media posts, blog articles, and marketing copy.",
      icon: <Brain className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/tools/content-generator",
      badge: "AI"
    },
    {
      title: "SEO Article Generator",
      description: "Create SEO-optimized articles that rank high on Google search results with professional templates.",
      icon: <FileText className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/tools/seo-article-generator",
      badge: "AI"
    },
    {
      title: "ROI Calculator",
      description: "Interactive calculator to measure and optimize your digital marketing ROI with real-time insights.",
      icon: <Calculator className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/tools/roi-calculator",
      badge: "HEIDI DIGITAL"
    },
    {
      title: "SEO Assistant",
      description: "AI-powered SEO analysis tool that provides actionable recommendations for better rankings.",
      icon: <Search className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/tools/seo-assistant",
      badge: "AI"
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Marketing Tools Hub"
          subtitle="Powerful AI-driven tools and custom solutions designed by our team"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingTools.map((tool, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-heisocial-lightpurple p-4 rounded-lg w-fit">
                    {tool.icon}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    tool.badge === 'HEIDI DIGITAL' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {tool.badge}
                  </span>
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
            <Link to="/solutions/tools">Explore All Marketing Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketingToolsSection;
