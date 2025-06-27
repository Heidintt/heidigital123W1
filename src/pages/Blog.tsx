
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();

  const categories = [
    "All Categories",
    "AI Marketing",
    "SEO",
    "Content Marketing",
    "Social Media",
    "Branding",
    "Analytics",
    "Digital Advertising",
  ];

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heisocial-blue mx-auto mb-4"></div>
            <p>Loading blog posts...</p>
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
            <p className="text-red-500">Error loading blog posts: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero
        title="Marketing Insights & Resources"
        subtitle="Expert perspectives, actionable tips, and the latest trends in digital marketing and AI"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 ? "bg-heisocial-blue" : ""}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-16">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={posts[0].featured_image}
                  alt={posts[0].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-sm font-medium text-white bg-heisocial-blue px-3 py-1 rounded-full mb-4 w-fit">
                    Featured
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {posts[0].title}
                  </h2>
                  <p className="text-white/90 mb-4 max-w-3xl">
                    {posts[0].description}
                  </p>
                  <div className="flex items-center text-white/80">
                    <span>By {posts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                id={post.slug}
                title={post.title}
                excerpt={post.description}
                coverImage={post.featured_image}
                date={new Date(post.date).toLocaleDateString()}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts found.</p>
            </div>
          )}

          {/* Pagination */}
          {posts.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-1">
                <Button variant="outline" size="icon">
                  <span className="sr-only">Previous page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="sm" className="bg-heisocial-blue text-white">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  <span className="sr-only">Next page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
