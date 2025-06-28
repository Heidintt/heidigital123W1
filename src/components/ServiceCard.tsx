
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features, price }) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        {features && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        {price && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-lg font-semibold text-blue-600">{price}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 hover:bg-transparent text-blue-600 hover:text-purple-600 w-full justify-start">
          Learn More →
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
