
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface AIToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  link: string;
  badge?: {
    text: string;
    variant: "new" | "beta" | "coming-soon";
  };
  highlighted?: boolean;
}

const AIToolCard: React.FC<AIToolCardProps> = ({
  icon,
  title,
  description,
  content,
  link,
  badge,
  highlighted = false
}) => {
  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case "new":
        return "bg-green-100 text-green-700";
      case "beta":
        return "bg-blue-100 text-blue-700";
      case "coming-soon":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const getBorderClasses = () => {
    if (highlighted) {
      return "border-2 border-blue-600";
    }
    return "";
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${getBorderClasses()}`}>
      <CardHeader>
        {badge ? (
          <div className="flex items-center gap-2 mb-2">
            <div className="h-12 w-12 text-blue-600">
              {icon}
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeClasses(badge.variant)}`}>
              {badge.text}
            </span>
          </div>
        ) : (
          <div className="h-12 w-12 text-blue-600 mb-4">
            {icon}
          </div>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <Link to={link}>
            {link.includes("/contact") ? "Coming Soon" : "Try Now"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AIToolCard;
