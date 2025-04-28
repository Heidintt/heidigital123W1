
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface SocialMediaPostProps {
  month: string;
  title: string;
  caption: string;
  visualConcept: string;
  specials: string[];
  image: string;
}

const SocialMediaPost: React.FC<SocialMediaPostProps> = ({
  month,
  title,
  caption,
  visualConcept,
  specials,
  image
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="flex flex-row items-center gap-2 text-heisocial-purple">
        <Calendar className="h-5 w-5" />
        <span className="font-semibold">{month}</span>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-xl font-bold text-heisocial-purple">{title}</h3>
        <div className="space-y-2">
          <p className="text-gray-700 whitespace-pre-line">{caption}</p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Visual Concept:</h4>
            <p className="text-gray-600 italic">{visualConcept}</p>
          </div>
          {specials.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Specials:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {specials.map((special, index) => (
                  <li key={index}>{special}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaPost;
