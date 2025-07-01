
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NotFound from "./NotFound";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostCallToAction from "@/components/blog/BlogPostCallToAction";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Set page title
      document.title = post.seo_title || post.title;
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seo_description || post.description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = post.seo_description || post.description;
        document.head.appendChild(newMetaDescription);
      }

      // Set Open Graph meta tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', post.seo_title || post.title);
      } else {
        const newOgTitle = document.createElement('meta');
        newOgTitle.setAttribute('property', 'og:title');
        newOgTitle.content = post.seo_title || post.title;
        document.head.appendChild(newOgTitle);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.seo_description || post.description);
      } else {
        const newOgDescription = document.createElement('meta');
        newOgDescription.setAttribute('property', 'og:description');
        newOgDescription.content = post.seo_description || post.description;
        document.head.appendChild(newOgDescription);
      }
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Heidi Digital - Expert Marketing Solutions";
    };
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
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
