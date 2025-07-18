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
}

// Helper function to find blog post by slug
export const findBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter(post => 
    post.category === "AI Marketing" || 
    post.category === "Design & Content" || 
    post.category === "LinkedIn Marketing"
  );
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Helper function to search blog posts by tags
export const searchBlogPostsByTags = (searchTags: string[]): BlogPost[] => {
  return blogPosts.filter(post => 
    searchTags.some(tag => 
      post.tags.some(postTag => 
        postTag.toLowerCase().includes(tag.toLowerCase())
      )
    )
  );
};

// Import and export the blog posts array
import { blogPosts } from '@/data/blog-posts';
export { blogPosts };