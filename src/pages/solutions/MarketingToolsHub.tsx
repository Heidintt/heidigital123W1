
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Edit, BarChart3, Users, Globe, Search, FileText, Calculator, TrendingUp } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const MarketingToolsHub = () => {
  // Enhanced SEO for Marketing Tools Hub
  useSEO({
    title: "Marketing Tools Hub | Free Digital Marketing Tools & Resources | Heidi Digital",
    description: "Access our comprehensive marketing tools hub with free calculators, planners, and resources to optimize your digital marketing campaigns and boost ROI.",
    keywords: "marketing tools hub, digital marketing tools, marketing calculators, free marketing resources, marketing planning tools, AI marketing tools",
    url: "https://heidigital.info/solutions/marketing-tools",
    type: "website",
    image: "https://heidigital.info/og-marketing-tools.jpg",
    schemaType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", url: "https://heidigital.info/" },
      { name: "Solutions", url: "https://heidigital.info/solutions" },
      { name: "Marketing Tools", url: "https://heidigital.info/solutions/marketing-tools" }
    ]
  });

  return (
    <Layout>
      <Hero
        title="Marketing Tools Hub"
        subtitle="Powerful AI-driven tools and custom solutions to supercharge your marketing efforts"
        backgroundImage="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Marketing Tools Collection"
            subtitle="Cutting-edge AI tools and custom solutions designed by the Heidi Digital team"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* AI-Powered Tools */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Edit className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>AI Content Generator</CardTitle>
                <CardDescription>
                  Create high-quality content in seconds with our AI-powered content generator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate blog posts, social media content, email copy, and more based on your prompts and specifications.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/content-generator">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-heisocial-blue">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-12 w-12 text-heisocial-blue" />
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                </div>
                <CardTitle>SEO Article Generator</CardTitle>
                <CardDescription>
                  Tạo bài viết SEO chuẩn Google với template chuyên nghiệp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Viết bài SEO 1200+ từ với cấu trúc H1-H6, meta tags, và từ khóa tối ưu. Template dựa trên best practices SEO mới nhất.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/seo-article-generator">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-12 w-12 text-heisocial-blue" />
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">BETA</span>
                </div>
                <CardTitle>Multilingual SEO Content Generator</CardTitle>
                <CardDescription>
                  Create SEO-optimized content in 6 languages with cultural awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate content in English, French, Chinese, Japanese, Korean, and Vietnamese with proper SEO optimization for each market.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/multilingual-content-generator">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-500">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Search className="h-12 w-12 text-heisocial-blue" />
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                </div>
                <CardTitle>SEO Assistant</CardTitle>
                <CardDescription>
                  AI-powered SEO analysis and optimization recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analyze your website's SEO performance and get actionable recommendations to improve your search engine rankings.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/seo-assistant">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* New Market Trend Analyzer */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-orange-500">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-12 w-12 text-heisocial-blue" />
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                </div>
                <CardTitle>Market Trend Analyzer</CardTitle>
                <CardDescription>
                  Advanced market trend analysis with spike detection and predictions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analyze keyword trends, detect market spikes, and get insights into consumer behavior patterns. Built by Heidi Digital team.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/market-trend-analyzer">Try Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Tools by Heidi Digital */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-500">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="h-12 w-12 text-heisocial-blue" />
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">HEIDI DIGITAL</span>
                </div>
                <CardTitle>Interactive ROI Calculator</CardTitle>
                <CardDescription>
                  Calculate and optimize your digital marketing ROI with real-time insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive ROI calculator with budget recommendations, performance metrics, and visual dashboards. Designed by Heidi Digital team.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/solutions/tools/roi-calculator">Use Calculator</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bot className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>Chatbot Builder</CardTitle>
                <CardDescription>
                  Build custom conversational chatbots for your website and social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create intelligent chatbots that can answer customer questions, qualify leads, and provide support 24/7.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/contact">Coming Soon</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>AI Analytics</CardTitle>
                <CardDescription>
                  Advanced analytics powered by machine learning algorithms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get deeper insights into your marketing performance with predictive analytics and automated reporting.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/contact">Coming Soon</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>Audience Segmentation</CardTitle>
                <CardDescription>
                  Powerful AI-driven audience segmentation and targeting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identify and target your most valuable customer segments with precision using advanced AI algorithms.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90">
                  <Link to="/contact">Coming Soon</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Our Marketing Tools"
            subtitle="Powerful features to boost your marketing effectiveness"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">AI</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-600">
                Cutting-edge artificial intelligence technology for superior results
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and focus on strategic initiatives
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Make decisions based on insights, not guesswork
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Built</h3>
              <p className="text-gray-600">
                Tools designed by Heidi Digital team for real marketing needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Supercharge Your Marketing?"
        description="Get started with our marketing tools today and see the difference they can make for your business"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default MarketingToolsHub;
