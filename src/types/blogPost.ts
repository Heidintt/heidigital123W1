
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  featured_image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
  seo_title?: string;
  seo_description?: string;
  updated_at?: string;
}
