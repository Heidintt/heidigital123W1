import React from "react";
import type { BlogPost } from "@/types/blogPost";

interface BlogPostStructuredDataProps {
  post: BlogPost;
  imageUrl: string;
  currentUrl: string;
}

const BlogPostStructuredData: React.FC<BlogPostStructuredDataProps> = ({ 
  post, 
  imageUrl, 
  currentUrl 
}) => {
  // Add Article structured data
  React.useEffect(() => {
    if (post) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": imageUrl,
        "url": currentUrl,
        "datePublished": post.date,
        "dateModified": post.updated_at || post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": "https://heidigital.info/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://heidigital.info/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "articleSection": post.category,
        "keywords": post.tags?.join(", "),
        "wordCount": post.content?.length || 0,
        "inLanguage": "en-AU",
        "about": [
          {
            "@type": "Thing",
            "name": "Digital Marketing"
          },
          {
            "@type": "Thing",
            "name": post.category
          }
        ]
      };

      const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": imageUrl,
        "url": currentUrl,
        "datePublished": post.date,
        "dateModified": post.updated_at || post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital"
        },
        "isPartOf": {
          "@type": "Blog",
          "name": "Heidi Digital Marketing Blog",
          "url": "https://heidigital.info/blog"
        }
      };

      const schemas = [articleSchema, blogPostingSchema];
      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `blogpost-schema-${index}`;
        script.textContent = JSON.stringify(schema);
        
        const existing = document.getElementById(`blogpost-schema-${index}`);
        if (existing) {
          existing.remove();
        }
        
        document.head.appendChild(script);
      });

      return () => {
        schemas.forEach((_, index) => {
          const script = document.getElementById(`blogpost-schema-${index}`);
          if (script) {
            script.remove();
          }
        });
      };
    }
  }, [post, imageUrl, currentUrl]);

  return null; // This component only handles structured data, no visual output
};

export default BlogPostStructuredData;