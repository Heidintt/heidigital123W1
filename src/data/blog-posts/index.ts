
import { BlogPost } from '@/types/blogPost';
import { linkedinPersonalBrandingPost } from './linkedin-personal-branding';
import { canvaInfographicsPost } from './canva-infographics';
import { aiToolsMarketingPost } from './ai-tools-marketing';
import { masteringDigitalMarketingSEOPost } from './mastering-digital-marketing-seo';
import { aiDidntKillCreativityPost } from './ai-didnt-kill-creativity-marketing';
import { goodInsightDigitalMarketingStrategyPost } from './good-insight-digital-marketing-strategy';

export const blogPosts: BlogPost[] = [
  goodInsightDigitalMarketingStrategyPost,
  aiDidntKillCreativityPost,
  masteringDigitalMarketingSEOPost,
  linkedinPersonalBrandingPost,
  canvaInfographicsPost,
  aiToolsMarketingPost
];

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

// Export individual posts for direct access
export { linkedinPersonalBrandingPost, canvaInfographicsPost, aiToolsMarketingPost, masteringDigitalMarketingSEOPost, aiDidntKillCreativityPost, goodInsightDigitalMarketingStrategyPost };
