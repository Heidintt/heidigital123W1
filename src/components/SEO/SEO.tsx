
import React from 'react';
import SEOHead from '@/components/SEOHead';

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  isArticle?: boolean;
  keywords?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  imageUrl,
  isArticle = false,
  keywords,
  articleAuthor,
  articleSection,
  articleTags,
  publishedTime,
  modifiedTime,
  noIndex = false
}) => {
  // Default values cho trang chủ
  const defaultTitle = "Heidi Digital - AI-Powered Marketing Solutions | Digital Marketing Agency Australia";
  const defaultDescription = "Transform your business with Australia's leading AI-powered digital marketing agency. Expert SEO, social media marketing, content creation & branding services. Get your FREE consultation today!";
  const defaultImage = "https://heidigital.info/og-homepage.jpg";
  const defaultKeywords = "digital marketing agency australia, AI marketing solutions, SEO services australia, social media marketing, content creation, branding agency";

  return (
    <SEOHead
      title={title || defaultTitle}
      description={description || defaultDescription}
      image={imageUrl || defaultImage}
      keywords={keywords || defaultKeywords}
      isArticle={isArticle}
      articleAuthor={articleAuthor}
      articleSection={articleSection}
      articleTags={articleTags}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime}
      noIndex={noIndex}
    />
  );
};

export default SEO;
