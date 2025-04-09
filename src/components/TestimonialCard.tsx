
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating,
  image,
}) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-gray-700 italic mb-4">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="flex items-center">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
