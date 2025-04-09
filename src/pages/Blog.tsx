
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  // In a real app, you would fetch blog posts from an API
  const blogPosts = [
    {
      id: "1",
      title: "How AI is Revolutionizing Content Marketing in 2023",
      excerpt: "Explore the transformative impact of artificial intelligence on content creation, distribution, and optimization strategies.",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Apr 12, 2023",
      author: "David Mitchell",
      category: "AI Marketing",
      slug: "ai-revolutionizing-content-marketing",
    },
    {
      id: "2",
      title: "SEO Strategies That Actually Drove Results in Q1 2023",
      excerpt: "An in-depth analysis of the most effective SEO tactics that delivered measurable improvements in organic traffic and conversions.",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Mar 28, 2023",
      author: "Sophia Wang",
      category: "SEO",
      slug: "seo-strategies-q1-2023",
    },
    {
      id: "3",
      title: "Building a Cohesive Brand Across Digital Channels",
      excerpt: "Learn how to maintain consistent brand messaging and visual identity across multiple digital platforms to strengthen brand recognition.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Feb 15, 2023",
      author: "James Wilson",
      category: "Branding",
      slug: "cohesive-brand-digital-channels",
    },
    {
      id: "4",
      title: "The Future of Social Media Marketing: Trends to Watch",
      excerpt: "Stay ahead of the curve with insights into emerging social media trends and how they will impact your marketing strategy.",
      coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Jan 30, 2023",
      author: "Emma Rodriguez",
      category: "Social Media",
      slug: "future-social-media-marketing-trends",
    },
    {
      id: "5",
      title: "Measuring ROI: Key Metrics for Digital Marketing Success",
      excerpt: "Learn which metrics truly matter when evaluating the effectiveness of your digital marketing campaigns.",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Jan 18, 2023",
      author: "Michael Chen",
      category: "Analytics",
      slug: "measuring-roi-digital-marketing",
    },
    {
      id: "6",
      title: "How to Create a Content Strategy That Drives Conversions",
      excerpt: "A step-by-step guide to developing content that not only engages your audience but also drives them to take action.",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 15, 2022",
      author: "Sarah Johnson",
      category: "Content Marketing",
      slug: "content-strategy-drives-conversions",
    },
  ];

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
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
                alt="Featured post"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-sm font-medium text-white bg-heisocial-blue px-3 py-1 rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Complete Guide to AI in Marketing for 2023
                </h2>
                <p className="text-white/90 mb-4 max-w-3xl">
                  A comprehensive look at how artificial intelligence is transforming marketing strategies and how businesses can leverage AI to gain a competitive edge.
                </p>
                <div className="flex items-center text-white/80">
                  <span>By Alex Thompson</span>
                  <span className="mx-2">•</span>
                  <span>May 5, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Pagination */}
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
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm" className="bg-heisocial-blue text-white">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
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
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
