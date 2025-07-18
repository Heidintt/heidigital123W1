export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  featured_image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
  content: string;
  updated_at?: string; // Add this field
}

// Import and export the blog posts array
import { blogPosts } from '@/data/blog-posts';
export { blogPosts };

// Helper functions
export const findBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => 
    post.category === "AI Marketing" || 
    post.category === "Design & Content" || 
    post.category === "LinkedIn Marketing"
  );
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const searchBlogPostsByTags = (searchTags: string[]): BlogPost[] => {
  return blogPosts.filter(post => 
    searchTags.some(tag => 
      post.tags.some(postTag => 
        postTag.toLowerCase().includes(tag.toLowerCase())
      )
    )
  );
};