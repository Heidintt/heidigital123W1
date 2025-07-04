
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const AIToolsSection = () => {
  const tools = [
    {
      title: "ROI Calculator",
      description: "Calculate and optimize your digital marketing ROI with real-time insights and budget recommendations.",
      icon: <Calculator className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/free-resources/roi-calculator",
    },
    {
      title: "Marketing Budget Planner",
      description: "Plan and optimize your marketing budget allocation across channels with interactive forecasting.",
      icon: <TrendingUp className="h-10 w-10 text-heisocial-purple" />,
      link: "/solutions/ai-tools/marketing-budget-planner",
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Marketing Tools"
          subtitle="Powerful tools to optimize your marketing efforts and campaigns"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
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
            <Link to="/solutions/ai-tools">Explore All Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
