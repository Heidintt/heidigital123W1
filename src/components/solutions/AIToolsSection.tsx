
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BarChart3, Calendar, TrendingUp, Calculator, FileText, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const AIToolsSection = () => {
  const aiTools = [
    {
      title: "Content Calendar Generator",
      description: "Generate a month's worth of creative content ideas based on any topic with 12 diverse suggestions.",
      icon: <Calendar className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/content-calendar-generator",
    },
    {
      title: "Market Trend Analyzer",
      description: "Analyze market trends, detect spikes, and predict future patterns with advanced analytics.",
      icon: <TrendingUp className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/market-trend-analyzer",
    },
    {
      title: "Content Generator",
      description: "AI-powered content creation tool for social media posts, blog articles, and marketing copy.",
      icon: <Brain className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/content-generator",
    },
    {
      title: "SEO Assistant",
      description: "Advanced AI tool that analyzes your website and provides actionable SEO recommendations.",
      icon: <BarChart3 className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/seo-assistant",
    },
    {
      title: "SEO Article Generator",
      description: "Generate comprehensive, SEO-optimized articles with proper structure and keyword integration.",
      icon: <FileText className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/seo-article-generator",
    },
    {
      title: "Multilingual Content Generator",
      description: "Create content in multiple languages to reach global audiences with AI translation.",
      icon: <Globe className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/multilingual-content-generator",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="AI Marketing Tools"
          subtitle="Powerful AI-driven tools to optimize your marketing efforts"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default AIToolsSection;
