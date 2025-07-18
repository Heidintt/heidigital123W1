import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts } from '@/data/blog-posts';
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find blog post by slug
  const post = blogPosts.find(p => p.slug === slug);

  useSEO({
    title: post ? (post.seo_title || `${post.title} | Heidi Digital Blog`) : "Blog Post | Heidi Digital",
    description: post ? (post.seo_description || post.description) : "Read our latest insights on digital marketing, AI strategies, and business growth tips.",
    keywords: post ? post.tags.join(', ') : "digital marketing blog, AI marketing, business growth, marketing tips",
    url: `https://heidigital.info/blog/${slug}`,
    canonicalUrl: `https://heidigital.info/blog/${slug}`,
    type: "article",
    image: post ? post.featured_image : "https://heidigital.info/og-blog.jpg",
    publishedTime: post ? post.date : undefined,
    modifiedTime: post ? (post.updated_at || post.date) : undefined, // Fix: use updated_at or fallback to date
    author: post ? post.author : "Heidi Digital Team",
    schemaType: "NewsArticle" as const, // Fix: use NewsArticle instead of Article
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Blog", url: "https://heidigital.info/blog" },
      { name: post ? post.title : "Blog Post", url: `https://heidigital.info/blog/${slug}` }
    ]
  });

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main role="main">
        <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <BlogPostHeader post={post} />
            <BlogPostContent content={post.content} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogPost;