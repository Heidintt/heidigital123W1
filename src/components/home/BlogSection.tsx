
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI Marketing Tools That Are Changing the Game in 2024",
      excerpt: "Discover the latest AI-powered marketing tools that are revolutionizing how businesses connect with their audience and drive results.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 28, 2024",
      author: "Heidi Digital Team",
      category: "AI Marketing",
      slug: "ai-tools-marketing"
    },
    {
      id: 2,
      title: "Building Your Personal Brand on LinkedIn: A Complete Guide",
      excerpt: "Learn proven strategies to establish a strong personal brand on LinkedIn that attracts opportunities and builds meaningful connections.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 25, 2024",
      author: "Heidi Digital Team",
      category: "Social Media",
      slug: "linkedin-personal-branding"
    },
    {
      id: 3,
      title: "Creating Stunning Infographics with Canva: Tips & Tricks",
      excerpt: "Master the art of visual storytelling with our comprehensive guide to creating professional infographics using Canva.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 22, 2024",
      author: "Heidi Digital Team",
      category: "Design",
      slug: "canva-infographics"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block">
            Latest Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest marketing insights, strategies, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-3 w-3 mr-1" />
                    <span>By {post.author}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-purple-600 font-semibold text-sm flex items-center transition-colors"
                  >
                    Read More <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white">
            <Link to="/blog">View All Articles →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
