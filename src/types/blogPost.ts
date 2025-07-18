export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  seo_title: string;
  seo_description: string;
  author: string;
  date: string;
  updated_at: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
}

// Export the blog posts array with proper typing
export const blogPosts: BlogPost[] = [
  {
    slug: "free-ai-tools-marketing-2025",
    title: "Free AI Tools for Marketing 2025: Complete Guide",
    description: "Discover the best free AI tools for marketing in 2025. Boost your campaigns with cutting-edge AI technology without breaking the budget.",
    seo_title: "Free AI Tools for Marketing 2025: Complete Guide | Heidi Digital Blog",
    seo_description: "Discover the best free AI tools for marketing in 2025. Boost your campaigns with cutting-edge AI technology without breaking the budget. Expert recommendations and tutorials.",
    author: "Heidi Digital Team",
    date: "2025-01-15",
    updated_at: "2025-01-20",
    content: "Your blog content here...",
    featured_image: "https://images.unsplash.com/photo-...",
    category: "AI Marketing",
    tags: ["AI tools", "free marketing tools", "AI marketing", "2025", "digital marketing"]
  },
  {
    slug: "create-infographics-with-canva-free",
    title: "How to Create Stunning Infographics with Canva (Free Guide)",
    description: "Learn how to create professional infographics using Canva's free tools. Step-by-step guide with templates and design tips.",
    seo_title: "How to Create Stunning Infographics with Canva (Free Guide) | Heidi Digital Blog",
    seo_description: "Learn how to create professional infographics using Canva's free tools. Step-by-step guide with templates and design tips for marketers and content creators.",
    author: "Heidi Digital Team",
    date: "2025-01-10",
    updated_at: "2025-01-15",
    content: "Your blog content here...",
    featured_image: "https://images.unsplash.com/photo-...",
    category: "Content Creation",
    tags: ["Canva", "infographics", "design", "content creation", "free tools"]
  },
  {
    slug: "linkedin-personal-branding-mistakes-marketing-services",
    title: "LinkedIn Personal Branding Mistakes: What Marketing Services Can Fix",
    description: "Avoid common LinkedIn personal branding mistakes and learn how professional marketing services can transform your professional presence.",
    seo_title: "LinkedIn Personal Branding Mistakes: What Marketing Services Can Fix | Heidi Digital Blog",
    seo_description: "Avoid common LinkedIn personal branding mistakes and learn how professional marketing services can transform your professional presence. Expert insights and solutions.",
    author: "Heidi Digital Team",
    date: "2025-01-05",
    updated_at: "2025-01-12",
    content: "Your blog content here...",
    featured_image: "https://images.unsplash.com/photo-...",
    category: "Personal Branding",
    tags: ["LinkedIn", "personal branding", "marketing services", "professional growth", "social media"]
  }
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
  return blogPosts.filter(post => post.category === "AI Marketing" || post.category === "Content Creation");
};