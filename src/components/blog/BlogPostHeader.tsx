
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Clock, Eye } from "lucide-react";
import { BlogPost } from "@/types/blogPost";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  // Add NewsArticle structured data
  React.useEffect(() => {
    const newsArticleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": post.title,
      "description": post.description,
      "image": {
        "@type": "ImageObject",
        "url": post.featured_image || "https://heidigital.info/og-blog.jpg",
        "width": 1200,
        "height": 630,
        "caption": post.title
      },
      "datePublished": post.date,
      "dateModified": post.date,
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
        "@id": `https://heidigital.info/blog/${post.slug}`
      },
      "articleSection": post.category,
      "keywords": post.tags?.join(", ") || post.category,
      "wordCount": post.content ? post.content.length / 5 : 1000,
      "articleBody": post.content || post.description,
      "url": `https://heidigital.info/blog/${post.slug}`,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Heidi Digital",
        "url": "https://heidigital.info"
      },
      "about": {
        "@type": "Thing",
        "name": post.category,
        "description": `Articles about ${post.category.toLowerCase()}`
      },
      "mentions": post.tags?.map(tag => ({
        "@type": "Thing",
        "name": tag
      })) || [],
      "inLanguage": "en-AU",
      "copyrightYear": new Date(post.date).getFullYear(),
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Heidi Digital"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-schema';
    script.textContent = JSON.stringify(newsArticleSchema);
    
    const existing = document.getElementById('article-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('article-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [post]);

  // Calculate estimated reading time
  const estimatedReadTime = Math.ceil((post.content?.length || 1000) / 1000);

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
            <span className="font-medium">{new Date(post.date).toLocaleDateString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
            <Clock size={18} className="text-blue-600" />
            <span className="font-medium">{estimatedReadTime} min read</span>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-3">
              <Tag size={18} className="text-blue-600" />
              <span className="font-medium">{post.tags.slice(0, 3).join(", ")}</span>
            </div>
          )}
        </div>

        {/* Featured image with enhanced SEO attributes */}
        {post.featured_image && (
          <div className="mb-16 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={post.featured_image}
              alt={`${post.title} - ${post.description}`}
              title={post.title}
              className="w-full h-64 md:h-96 object-cover"
              loading="eager"
              width="1200"
              height="630"
              itemProp="image"
            />
          </div>
        )}
      </header>
    </>
  );
};

export default BlogPostHeader;
