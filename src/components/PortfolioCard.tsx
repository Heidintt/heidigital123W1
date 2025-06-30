
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  image, 
  categories, 
  link 
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-56 overflow-hidden">
        <Link to={link}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
          />
        </Link>
      </div>
      <CardHeader>
        <div className="space-x-2 mb-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-heisocial-lightpurple text-heisocial-purple">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle className="hover:text-heisocial-blue transition-colors">
          <Link to={link}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="bg-heisocial-purple hover:bg-heisocial-purple/90 text-white">
          <Link to={link} className="flex items-center">
            View Case Study <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
