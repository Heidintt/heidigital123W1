
import { useState, useEffect } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  featured_image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  seo_title?: string;
  seo_description?: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // This would typically fetch from your markdown files
        // For now, we'll use the sample data from Blog.tsx
        const samplePosts: BlogPost[] = [
          {
            slug: "ai-revolutionizing-content-marketing",
            title: "How AI is Revolutionizing Content Marketing in 2023",
            description: "Explore the transformative impact of artificial intelligence on content creation, distribution, and optimization strategies.",
            featured_image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2023-04-12",
            author: "David Mitchell",
            category: "AI Marketing",
            tags: ["AI", "Content Marketing", "Digital Strategy"],
            content: "Full article content would go here..."
          },
          {
            slug: "ai-marketing-complete-guide",
            title: "AI Marketing Complete Guide 2024",
            description: "A comprehensive guide to AI marketing strategies and tools for businesses in 2024",
            featured_image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
            date: "2024-12-27",
            author: "Heidi Digital Team",
            category: "AI Marketing",
            tags: ["AI", "Marketing", "Digital Strategy", "2024 Trends"],
            content: "Full article content from markdown file..."
          }
        ];
        
        setPosts(samplePosts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog posts");
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  return { posts, loading, error };
};
