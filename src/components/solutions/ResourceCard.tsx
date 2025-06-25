
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  labels: string[];
  image: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  labels,
  image,
  link,
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="text-xs font-medium text-white bg-heisocial-blue px-2 py-1 rounded-full">
            {type}
          </span>
          {labels.slice(0, 2).map((label, labelIndex) => (
            <Badge key={labelIndex} variant="outline" className="text-xs border-heisocial-blue text-heisocial-blue">
              {label}
            </Badge>
          ))}
        </div>
        <CardTitle className="hover:text-heisocial-blue transition-colors text-sm">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className="w-full flex items-center justify-center border-heisocial-blue text-heisocial-blue hover:bg-heisocial-blue/10"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Access Resource
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
