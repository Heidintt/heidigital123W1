import React from "react";
import type { BlogPost } from "@/types/blogPost";

interface BlogPostDebugInfoProps {
  post: BlogPost;
  imageUrl: string;
  currentUrl: string;
}

const BlogPostDebugInfo: React.FC<BlogPostDebugInfoProps> = ({ 
  post, 
  imageUrl, 
  currentUrl 
}) => {
  // Add debugging info in development
  React.useEffect(() => {
    if (post && process.env.NODE_ENV === 'development') {
      console.log('Blog Post Meta Tags Debug:', {
        title: post.seo_title || post.title,
        description: post.seo_description || post.description,
        image: imageUrl,
        url: currentUrl,
        fbDebugger: `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`
      });
    }
  }, [post, imageUrl, currentUrl]);

  // Only show debug info in development
  if (process.env.NODE_ENV !== 'development' || !post) {
    return null;
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold mb-2">Facebook Sharing Debug:</h3>
      <p className="text-sm mb-2">
        Use Facebook Sharing Debugger to refresh cache:
      </p>
      <a 
        href={`https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        Debug this URL on Facebook →
      </a>
    </div>
  );
};

export default BlogPostDebugInfo;