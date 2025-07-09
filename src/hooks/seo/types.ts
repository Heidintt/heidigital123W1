
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
  // New props for enhanced SEO
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  twitterCreator?: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'ProfilePage' | 'NewsArticle' | 'CreativeWork';
  breadcrumbs?: Array<{ name: string; url: string }>;
  // Enhanced SEO props
  alternateUrls?: Array<{ hreflang: string; href: string }>;
  canonicalUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  audioUrl?: string;
  rating?: { ratingValue: number; reviewCount: number; bestRating?: number };
  priceRange?: string;
  availability?: string;
  category?: string;
}
