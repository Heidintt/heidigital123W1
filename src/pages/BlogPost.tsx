import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Layout from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts } from '@/data/blog-posts';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Tìm blog post theo slug
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
    modifiedTime: post ? post.updated_at : undefined,
    author: post ? post.author : "Heidi Digital Team",
    schemaType: "Article",
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
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.updated_at && (
                <>
                  <span className="mx-2">•</span>
                  <span>Updated: {new Date(post.updated_at).toLocaleDateString()}</span>
                </>
              )}
            </div>
            {post.featured_image && (
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">{post.description}</p>
            {/* THAY ĐỔI: Dùng ReactMarkdown thay vì dangerouslySetInnerHTML */}
            <ReactMarkdown className="prose prose-lg max-w-none">
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default BlogPost;
