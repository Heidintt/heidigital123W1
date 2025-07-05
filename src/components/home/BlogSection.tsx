
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "AI Marketing Complete Guide 2024",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and learn practical tips to implement AI in your campaigns.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 27, 2024",
      category: "AI Marketing",
      link: "/blog/ai-marketing-complete-guide-2024"
    },
    {
      title: "LinkedIn Personal Branding Strategies",
      excerpt: "Build a powerful personal brand on LinkedIn that attracts opportunities and establishes you as an industry thought leader.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 20, 2024",
      category: "Social Media",
      link: "/blog/linkedin-personal-branding"
    },
    {
      title: "Creating Stunning Infographics with Canva",
      excerpt: "Master the art of visual storytelling with Canva's powerful design tools and create infographics that engage and convert.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 15, 2024",
      category: "Design",
      link: "/blog/canva-infographics"
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
