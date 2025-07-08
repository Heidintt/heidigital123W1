
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./NotFound";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostCallToAction from "@/components/blog/BlogPostCallToAction";
import defaultOgImage from "@/assets/blog/default-og-image.jpg";
import type { BlogPost as BlogPostType } from "@/types/blogPost";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = useBlogPosts();

  const post = posts.find(p => p.slug === slug);

  // Enhanced SEO with post-specific data
  const featuredImage = post?.featured_image ? 
    (typeof post.featured_image === 'string' ? post.featured_image : defaultOgImage) : 
    defaultOgImage;
    
  // Force Facebook to recrawl by adding timestamp to URLs
  const currentUrl = `https://heidigital.info/blog/${slug}`;
  // Use proper absolute URL for images
  const imageUrl = typeof featuredImage === 'string' && featuredImage.startsWith('http') 
    ? `${featuredImage}?v=${Date.now()}`
    : `https://heidigital.info${featuredImage}?v=${Date.now()}`;
  
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

  // Enhanced meta tags specifically for Facebook
  React.useEffect(() => {
    if (post) {
      // Remove existing meta tags to prevent conflicts
      const existingTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[property^="fb:"]');
      existingTags.forEach(tag => tag.remove());
      
      // Add Facebook-specific meta tags
      const metaTags = [
        { property: 'og:title', content: post.seo_title || post.title },
        { property: 'og:description', content: post.seo_description || post.description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: post.title },
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
        { name: 'twitter:title', content: post.seo_title || post.title },
        { name: 'twitter:description', content: post.seo_description || post.description },
        { name: 'twitter:image', content: imageUrl },
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

  // Add Article structured data
  React.useEffect(() => {
    if (post) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": imageUrl,
        "url": currentUrl,
        "datePublished": post.date,
        "dateModified": post.updated_at || post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": "https://heidigital.info/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital",
          "logo": {
            "@type": "ImageObject",
            "url": "https://heidigital.info/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "articleSection": post.category,
        "keywords": post.tags?.join(", "),
        "wordCount": post.content?.length || 0,
        "inLanguage": "en-AU",
        "about": [
          {
            "@type": "Thing",
            "name": "Digital Marketing"
          },
          {
            "@type": "Thing",
            "name": post.category
          }
        ]
      };

      const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": imageUrl,
        "url": currentUrl,
        "datePublished": post.date,
        "dateModified": post.updated_at || post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Heidi Digital"
        },
        "isPartOf": {
          "@type": "Blog",
          "name": "Heidi Digital Marketing Blog",
          "url": "https://heidigital.info/blog"
        }
      };

      const schemas = [articleSchema, blogPostingSchema];
      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `blogpost-schema-${index}`;
        script.textContent = JSON.stringify(schema);
        
        const existing = document.getElementById(`blogpost-schema-${index}`);
        if (existing) {
          existing.remove();
        }
        
        document.head.appendChild(script);
      });

      return () => {
        schemas.forEach((_, index) => {
          const script = document.getElementById(`blogpost-schema-${index}`);
          if (script) {
            script.remove();
          }
        });
      };
    }
  }, [post, imageUrl, currentUrl]);

  // Add debugging info in development
  React.useEffect(() => {
    if (post && process.env.NODE_ENV === 'development') {
      console.log('Blog Post Meta Tags Debug:', {
        title: post.seo_title || post.title,
        description: post.seo_description || post.description,
        image: imageUrl,
        url: currentUrl,
        fbDebugger: `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`
      });
    }
  }, [post, imageUrl, currentUrl]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-heisocial-blue mx-auto mb-4"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-500">Error loading article: {error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" role="main">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.content} />
          <BlogPostCallToAction />
          
          {/* Debug info for Facebook sharing - only in development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold mb-2">Facebook Sharing Debug:</h3>
              <p className="text-sm mb-2">
                Use Facebook Sharing Debugger to refresh cache:
              </p>
              <a 
                href={`https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Debug this URL on Facebook →
              </a>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
