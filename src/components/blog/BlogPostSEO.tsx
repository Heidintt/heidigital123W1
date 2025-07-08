
import React from "react";
import SEOHead from "@/components/SEOHead";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";
import type { BlogPost } from "@/types/blogPost";

interface BlogPostSEOProps {
  post: BlogPost;
  slug: string;
}

const BlogPostSEO: React.FC<BlogPostSEOProps> = ({ post, slug }) => {
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  const currentUrl = `https://heidigital.info/blog/${slug}`;
  const imageUrl = typeof featuredImage === 'string' && featuredImage.startsWith('http') 
    ? featuredImage
    : `https://heidigital.info${featuredImage}`;

  // Preload images for faster social sharing
  usePreloadImages([imageUrl]);

  // Debug logging in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && post) {
      console.log('BlogPost SEO Meta Tags:', {
        title: post.seo_title || post.title,
        description: post.seo_description || post.description,
        image: imageUrl,
        url: currentUrl,
        facebookDebugger: `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`,
        linkedinInspector: `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(currentUrl)}`
      });
    }
  }, [post, imageUrl, currentUrl]);

  if (!post) {
    return (
      <SEOHead
        title="Blog Post - Heidi Digital"
        description="Read our latest marketing insights and expert tips for business growth."
        url={currentUrl}
        type="article"
      />
    );
  }

  return (
    <SEOHead
      title={post.seo_title || `${post.title} | Digital Marketing Blog | Heidi Digital`}
      description={post.seo_description || post.description}
      image={imageUrl}
      url={currentUrl}
      type="article"
      articleAuthor={post.author}
      articleSection={post.category}
      articleTags={post.tags}
      publishedTime={post.date}
      modifiedTime={post.updated_at || post.date}
    />
  );
};

export default BlogPostSEO;
