
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NotFound from "./NotFound";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostCallToAction from "@/components/blog/BlogPostCallToAction";
import BlogPostStructuredData from "@/components/blog/BlogPostStructuredData";
import BlogPostDebugInfo from "@/components/blog/BlogPostDebugInfo";
import SEO from "@/components/SEO/SEO";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  const post = posts.find(p => p.slug === slug);

  // Loading state with basic SEO
  if (loading) {
    return (
      <Layout>
        <SEO
          title="Loading Article... | Heidi Digital"
          description="Loading the latest digital marketing insights and expert tips."
          noIndex={true}
        />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heisocial-blue mx-auto mb-4"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Error state with basic SEO
  if (error) {
    return (
      <Layout>
        <SEO
          title="Article Error | Heidi Digital"
          description="We're experiencing technical difficulties loading this article. Please try again later."
          noIndex={true}
        />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500">Error loading article: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Not found case
  if (!post) {
    return <NotFound />;
  }

  // Calculate image URL for structured data and debug components
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  const currentUrl = `https://heidigital.info/blog/${slug}`;
  const imageUrl = typeof featuredImage === 'string' && featuredImage.startsWith('http') 
    ? featuredImage
    : `https://heidigital.info${featuredImage}`;

  return (
    <Layout>
      {/* SEO Head for article - only render when post data is available */}
      <SEO
        title={post.seo_title || `${post.title} | Digital Marketing Blog | Heidi Digital`}
        description={post.seo_description || post.description}
        imageUrl={imageUrl}
        isArticle={true}
        keywords={post.tags?.join(', ') || 'digital marketing, AI marketing, SEO, social media marketing'}
        articleAuthor={post.author}
        articleSection={post.category}
        articleTags={post.tags}
        publishedTime={post.date}
        modifiedTime={post.updated_at || post.date}
      />
      
      {/* Structured data */}
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
