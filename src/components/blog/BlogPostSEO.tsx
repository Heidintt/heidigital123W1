
import React from "react";
import { useSEO } from "@/hooks/useSEO";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";
import type { BlogPost } from "@/types/blogPost";

interface BlogPostSEOProps {
  post: BlogPost;
  slug: string;
}

const BlogPostSEO: React.FC<BlogPostSEOProps> = ({ post, slug }) => {
  // Enhanced SEO with post-specific data
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  // Force Facebook to recrawl by adding timestamp to URLs
  const currentUrl = `https://heidigital.info/blog/${slug}`;
  // Use proper absolute URL for images - no timestamp needed since we're using static images now
  const imageUrl = typeof featuredImage === 'string' && featuredImage.startsWith('http') 
    ? featuredImage
    : `https://heidigital.info${featuredImage}`;
  
  useSEO({
    title: post ? (post.seo_title || `${post.title} | Digital Marketing Blog | Heidi Digital`) : "Blog Post - Heidi Digital",
    description: post ? (post.seo_description || post.description) : "Read our latest marketing insights and expert tips for business growth.",
    keywords: post ? post.tags?.join(", ") : "marketing, digital marketing, blog, business tips",
    image: imageUrl,
    url: currentUrl,
    type: "article",
    articleAuthor: post?.author,
    articleSection: post?.category,
    articleTags: post?.tags,
    publishedTime: post?.date,
    modifiedTime: post?.updated_at || post?.date,
    twitterCreator: "@heidigital",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Blog", url: "https://heidigital.info/blog" },
      { name: post?.title || "Article", url: currentUrl }
    ]
  });

  // Enhanced meta tags specifically for social platforms - remove timestamp conflicts
  React.useEffect(() => {
    if (post) {
      // Remove existing meta tags to prevent conflicts
      const existingTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[property^="fb:"]');
      existingTags.forEach(tag => tag.remove());
      
      // Add platform-specific meta tags with clean URLs
      const metaTags = [
        { property: 'og:title', content: post.seo_title || post.title },
        { property: 'og:description', content: post.seo_description || post.description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:secure_url', content: imageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: post.title },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:url', content: currentUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Heidi Digital' },
        { property: 'og:locale', content: 'en_AU' },
        { property: 'article:author', content: post.author },
        { property: 'article:section', content: post.category },
        { property: 'article:published_time', content: post.date },
        { property: 'article:modified_time', content: post.updated_at || post.date },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@heidigital' },
        { name: 'twitter:creator', content: '@heidigital' },
        { name: 'twitter:title', content: post.seo_title || post.title },
        { name: 'twitter:description', content: post.seo_description || post.description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:image:alt', content: post.title },
        { property: 'fb:app_id', content: '' }, // Add your Facebook App ID here if you have one
      ];

      metaTags.forEach(({ property, name, content }) => {
        const meta = document.createElement('meta');
        if (property) meta.setAttribute('property', property);
        if (name) meta.setAttribute('name', name);
        meta.content = content;
        document.head.appendChild(meta);
      });

      // Add tags for each article tag
      if (post.tags) {
        post.tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.content = tag;
          document.head.appendChild(tagMeta);
        });
      }
    }
  }, [post, imageUrl, currentUrl]);

  return null; // This component only handles SEO, no visual output
};

export default BlogPostSEO;
