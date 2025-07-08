
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./NotFound";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostCallToAction from "@/components/blog/BlogPostCallToAction";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";
import type { BlogPost as BlogPostType } from "@/types/blogPost";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  const post = posts.find(p => p.slug === slug);

  // Enhanced SEO with post-specific data
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  useSEO({
    title: post ? (post.seo_title || `${post.title} | Digital Marketing Blog | Heidi Digital`) : "Blog Post - Heidi Digital",
    description: post ? (post.seo_description || post.description) : "Read our latest marketing insights and expert tips for business growth.",
    keywords: post ? post.tags?.join(", ") : "marketing, digital marketing, blog, business tips",
    image: `https://heidigital.info${featuredImage}`,
    url: `https://heidigital.info/blog/${slug}`,
    type: "article",
    articleAuthor: post?.author,
    articleSection: post?.category,
    articleTags: post?.tags,
    publishedTime: post?.date,
    modifiedTime: post?.updated_at || post?.date,
    twitterCreator: "@heidigital",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Blog", url: "https://heidigital.info/blog" },
      { name: post?.title || "Article", url: `https://heidigital.info/blog/${slug}` }
    ]
  });

  // Add Article structured data
  React.useEffect(() => {
    if (post) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": `https://heidigital.info${featuredImage}`,
        "url": `https://heidigital.info/blog/${post.slug}`,
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
          "@id": `https://heidigital.info/blog/${post.slug}`
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
        "image": `https://heidigital.info${featuredImage}`,
        "url": `https://heidigital.info/blog/${post.slug}`,
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
  }, [post]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heisocial-blue mx-auto mb-4"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500">Error loading article: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" role="main">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.content} />
          <BlogPostCallToAction />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
