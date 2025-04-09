
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  coverImage,
  date,
  author,
  category,
  slug,
}) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-white bg-heisocial-blue px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <CardTitle className="hover:text-heisocial-blue transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center text-sm text-gray-500">
        <User className="h-3 w-3 mr-1" />
        <span>By {author}</span>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
