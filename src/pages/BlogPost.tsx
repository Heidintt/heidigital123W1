
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NotFound from "./NotFound";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostCallToAction from "@/components/blog/BlogPostCallToAction";
import BlogPostSEO from "@/components/blog/BlogPostSEO";
import BlogPostStructuredData from "@/components/blog/BlogPostStructuredData";
import BlogPostDebugInfo from "@/components/blog/BlogPostDebugInfo";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  const post = posts.find(p => p.slug === slug);

  // Calculate image URL for structured data and debug components
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  const currentUrl = `https://heidigital.info/blog/${slug}`;
  const imageUrl = typeof featuredImage === 'string' && featuredImage.startsWith('http') 
    ? `${featuredImage}?v=${Date.now()}`
    : `https://heidigital.info${featuredImage}?v=${Date.now()}`;

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
      {/* Handle SEO */}
      <BlogPostSEO post={post} slug={slug!} />
      
      {/* Handle structured data */}
      <BlogPostStructuredData 
        post={post} 
        imageUrl={imageUrl} 
        currentUrl={currentUrl} 
      />
      
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" role="main">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.content} />
          <BlogPostCallToAction />
          
          {/* Debug info component */}
          <BlogPostDebugInfo 
            post={post} 
            imageUrl={imageUrl} 
            currentUrl={currentUrl} 
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
