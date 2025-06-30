
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Edit, BarChart3, Users, Globe, Search, FileText } from "lucide-react";

const AITools = () => {
  return (
    <Layout>
      <Hero
        title="AI Marketing Tools"
        subtitle="Supercharge your marketing with our powerful AI-powered tools"
        backgroundImage="https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our AI Tools Collection"
            subtitle="Cutting-edge AI tools to streamline your marketing workflow"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Edit className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>Content Generator</CardTitle>
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
                  <Link to="/solutions/ai-tools/content-generator">Try Now</Link>
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
                  <Link to="/solutions/ai-tools/seo-article-generator">Try Now</Link>
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
                  <Link to="/solutions/ai-tools/multilingual-content-generator">Try Now</Link>
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
                  <Link to="/solutions/ai-tools/seo-assistant">Try Now</Link>
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

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-heisocial-blue mb-4" />
                <CardTitle>Social Media Manager</CardTitle>
                <CardDescription>
                  AI-powered social media management and optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimize your social media strategy with AI recommendations, automated posting, and performance tracking.
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
            title="Why Choose Our AI Tools"
            subtitle="Powerful features to boost your marketing effectiveness"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
              <p className="text-gray-600">
                Intuitive interfaces designed for marketers, not technical experts
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and focus on strategic initiatives
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
              <p className="text-gray-600">
                Make decisions based on insights, not guesswork
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-heisocial-lightblue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-heisocial-blue">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Constantly Evolving</h3>
              <p className="text-gray-600">
                Regular updates with new features and improved AI capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Supercharge Your Marketing?"
        description="Get started with our AI tools today and see the difference they can make for your business"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default AITools;
