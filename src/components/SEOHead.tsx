
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  isArticle?: boolean;
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Heidi Digital - AI-Powered Marketing Solutions",
  description = "Professional AI-powered marketing solutions, digital marketing services, SEO, social media marketing and content creation to transform your business.",
  image = "https://heidigital.info/og-image.jpg",
  url,
  type = "website",
  siteName = "Heidi Digital",
  locale = "en_AU",
  twitterCard = "summary_large_image",
  twitterSite = "@heidigital",
  twitterCreator = "@heidigital",
  articleAuthor,
  articleSection,
  articleTags = [],
  publishedTime,
  modifiedTime,
  noIndex = false,
  isArticle = false,
  keywords = "digital marketing agency australia, AI marketing solutions, SEO services, social media marketing"
}) => {
  const location = useLocation();
  
  // Tự động tạo canonical URL nếu không được cung cấp
  const canonicalUrl = url || `https://heidigital.info${location.pathname}`;
  
  // Đảm bảo image là absolute URL
  const absoluteImageUrl = image.startsWith('http') ? image : `https://heidigital.info${image}`;
  
  // Xác định type dựa trên isArticle
  const contentType = isArticle ? "article" : type;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"} />
      <meta name="author" content="Heidi Digital" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={contentType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Article specific tags */}
      {isArticle && (
        <>
          {articleAuthor && <meta property="article:author" content={articleAuthor} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {articleTags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:url" content={canonicalUrl} />
      
      {/* LinkedIn specific tags */}
      <meta property="linkedin:owner" content="heidi-digital" />
      
      {/* Additional meta tags for better indexing */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Heidi Digital" />
      
      {/* Geo tags for Australian business */}
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />
      <meta name="geo.position" content="-33.8688;151.2093" />
      <meta name="ICBM" content="-33.8688, 151.2093" />
      
      {/* Language and locale */}
      <meta name="language" content="en-AU" />
      <meta httpEquiv="content-language" content="en-AU" />
      
      {/* Copyright */}
      <meta name="copyright" content={`© ${new Date().getFullYear()} Heidi Digital. All rights reserved.`} />
    </Helmet>
  );
};

export default SEOHead;
