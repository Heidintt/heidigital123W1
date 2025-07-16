
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Secret to Creating Simple Yet Effective Infographics with Canva (Free)",
      excerpt: "Learn how to create infographics with Canva for free. This guide covers practical tips, design principles, and real examples to boost content marketing.",
      image: "https://ba9e6e30-76db-4489-adf7-b9400d58a196.lovableproject.com/images/blog/canva-infographics-hero.jpg",
      date: "Dec 27, 2024",
      category: "AI Marketing",
      link: "/blog/create-infographics-with-canva-free"
    },
    {
      title: "LinkedIn Personal Branding Strategies",
      excerpt: "Build a powerful personal brand on LinkedIn that attracts opportunities and establishes you as an industry thought leader.",
      image: "https://images.unsplash.com/photo-1685586784805-8d96eaeaa5ff?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 20, 2024",
      category: "Social Media",
      link: "/blog/linkedin-personal-branding-mistakes-marketing-services"
    },
    {
      title: "10 Free AI Tools to Revolutionize Your 2025 Marketing Campaigns",
      excerpt: "Discover 10 powerful free AI tools for marketing in 2025 to automate, create, and analyze your campaigns smarter. No credit card required!",
      image: "https://images.ctfassets.net/lzny33ho1g45/6VcDGWbQfWElVwAiMWLk9c/54a88cca295511333240c2919fc3f084/best-ai-productivity.jpg?w=1520&fm=jpg&q=31&fit=thumb&h=760",
      date: "Jan 1, 2025",
      category: "AI Tools",
      link: "/blog/free-ai-tools-marketing-2025"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
            Latest Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with expert insights, proven strategies, and the latest trends in digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={post.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  Read More <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white">
            <Link to="/blog">View All Articles →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
