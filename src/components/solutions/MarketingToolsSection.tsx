
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, FileSearch, Calendar, BookOpen, Mail, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const MarketingToolsSection = () => {
  const marketingTools = [
    {
      title: "ROI Calculator",
      description: "Calculate and optimize your digital marketing ROI with real-time insights and budget recommendations.",
      icon: <Calculator className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/free-resources/roi-calculator",
      category: "Free Tool"
    },
    {
      title: "Content Calendar Generator",
      description: "Generate a month's worth of creative content ideas based on any topic with AI-powered suggestions.",
      icon: <Calendar className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/ai-tools/content-calendar-generator",
      category: "AI Tool"
    },
    {
      title: "Market Trend Analyzer",
      description: "Analyze market trends, detect spikes, and predict future patterns with real Google Trends data.",
      icon: <TrendingUp className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/ai-tools/market-trend-analyzer",
      category: "AI Tool"
    },
    {
      title: "SEO Guide",
      description: "Comprehensive SEO guide with actionable strategies to improve your search engine rankings.",
      icon: <FileSearch className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/free-resources/seo-guide",
      category: "Free Resource"
    },
    {
      title: "Local SEO Checklist",
      description: "Complete checklist to optimize your local business for better local search visibility.",
      icon: <Target className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/free-resources/local-seo-checklist",
      category: "Free Resource"
    },
    {
      title: "Email Marketing Guide",
      description: "Master email marketing with proven strategies, templates, and best practices.",
      icon: <Mail className="h-10 w-10 text-heidigital-blue" />,
      link: "/solutions/free-resources/email-guide",
      category: "Free Resource"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Marketing Tools & Resources"
          subtitle="Comprehensive collection of tools and resources to boost your marketing success"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingTools.map((tool, index) => (
            <Card key={index} className="card-hover bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg w-fit">
                    {tool.icon}
                  </div>
                  <span className="text-xs bg-heidigital-blue/10 text-heidigital-blue px-2 py-1 rounded-full font-medium">
                    {tool.category}
                  </span>
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{tool.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-heidigital-blue hover:bg-heidigital-blue/90 w-full">
                  <Link to={tool.link} className="flex items-center justify-center">
                    {tool.category === "AI Tool" ? "Try Tool" : "Access Resource"} 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-heidigital-blue text-heidigital-blue hover:bg-heidigital-blue/10">
              <Link to="/solutions/ai-tools">View All AI Tools</Link>
            </Button>
            <Button asChild variant="outline" className="border-heidigital-blue text-heidigital-blue hover:bg-heidigital-blue/10">
              <Link to="/solutions/free-resources">View All Free Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingToolsSection;
