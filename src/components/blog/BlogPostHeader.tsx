
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { BlogPost } from "@/types/blogPost";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <>
      {/* Back button */}
      <Button variant="ghost" asChild className="mb-8 hover:bg-blue-50 transition-colors">
        <Link to="/blog" className="flex items-center gap-2 text-blue-600 font-medium">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
      </Button>

      {/* Article header */}
      <header className="mb-16 text-center">
        <div className="mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight gradient-text">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
            <User size={18} className="text-blue-600" />
            <span className="font-medium">By {post.author}</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
            <Calendar size={18} className="text-blue-600" />
            <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
              <Tag size={18} className="text-blue-600" />
              <span className="font-medium">{post.tags.slice(0, 3).join(", ")}</span>
            </div>
          )}
        </div>

        {/* Featured image */}
        {post.featured_image && (
          <div className="mb-16 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}
      </header>
    </>
  );
};

export default BlogPostHeader;
