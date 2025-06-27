
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

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
    return <NotFound />;
  }

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>

          {/* Article header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-heisocial-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <span>{post.tags.join(", ")}</span>
                </div>
              )}
            </div>

            {/* Featured image */}
            {post.featured_image && (
              <div className="mb-8">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Need Help With Your Marketing?</h3>
            <p className="text-gray-600 mb-4">
              Get expert guidance from our team at Heidi Digital
            </p>
            <Button asChild className="bg-heisocial-blue hover:bg-heisocial-blue/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
