
import React from "react";
import AIToolCard from "./AIToolCard";
import { Bot, Edit, BarChart3, Users, Globe, Search, FileText, Calendar, Calculator, TrendingUp } from "lucide-react";

const AIToolsGrid = () => {
  const aiTools = [
    {
      icon: <Edit className="h-12 w-12" />,
      title: "Content Generator",
      description: "Create high-quality content in seconds with our AI-powered content generator",
      content: "Generate blog posts, social media content, email copy, and more based on your prompts and specifications.",
      link: "/solutions/ai-tools/content-generator"
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "SEO Article Generator",
      description: "Tạo bài viết SEO chuẩn Google với template chuyên nghiệp",
      content: "Viết bài SEO 1200+ từ với cấu trúc H1-H6, meta tags, và từ khóa tối ưu. Template dựa trên best practices SEO mới nhất.",
      link: "/solutions/ai-tools/seo-article-generator",
      badge: { text: "NEW", variant: "new" as const },
      highlighted: true
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Multilingual SEO Content Generator",
      description: "Create SEO-optimized content in 6 languages with cultural awareness",
      content: "Generate content in English, French, Chinese, Japanese, Korean, and Vietnamese with proper SEO optimization for each market.",
      link: "/solutions/ai-tools/multilingual-content-generator",
      badge: { text: "BETA", variant: "beta" as const }
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Assistant",
      description: "AI-powered SEO analysis and optimization recommendations",
      content: "Analyze your website's SEO performance and get actionable recommendations to improve your search engine rankings.",
      link: "/solutions/ai-tools/seo-assistant",
      badge: { text: "NEW", variant: "new" as const }
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Content Calendar Generator",
      description: "Generate a month's worth of creative content ideas based on any topic",
      content: "AI-powered tool that creates 12 diverse content ideas organized into a 4-week calendar format for your marketing campaigns.",
      link: "/solutions/ai-tools/content-calendar-generator",
      badge: { text: "NEW", variant: "new" as const }
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Market Trend Analyzer",
      description: "Analyze market trends, detect spikes, and predict future patterns with advanced analytics",
      content: "Advanced market trend analysis with spike detection and predictions using real Google Trends data.",
      link: "/solutions/ai-tools/market-trend-analyzer",
      badge: { text: "NEW", variant: "new" as const }
    },
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "ROI Calculator",
      description: "Calculate and optimize your digital marketing ROI with real-time insights",
      content: "Comprehensive ROI calculator with budget recommendations, performance metrics, and visual dashboards.",
      link: "/solutions/free-resources/roi-calculator",
      badge: { text: "FREE TOOL", variant: "new" as const }
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Chatbot Builder",
      description: "Build custom conversational chatbots for your website and social media",
      content: "Create intelligent chatbots that can answer customer questions, qualify leads, and provide support 24/7.",
      link: "/contact"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "AI Analytics",
      description: "Advanced analytics powered by machine learning algorithms",
      content: "Get deeper insights into your marketing performance with predictive analytics and automated reporting.",
      link: "/contact"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Audience Segmentation",
      description: "Powerful AI-driven audience segmentation and targeting",
      content: "Identify and target your most valuable customer segments with precision using advanced AI algorithms.",
      link: "/contact"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {aiTools.map((tool, index) => (
        <AIToolCard
          key={index}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
          content={tool.content}
          link={tool.link}
          badge={tool.badge}
          highlighted={tool.highlighted}
        />
      ))}
    </div>
  );
};

export default AIToolsGrid;
