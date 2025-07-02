
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Search, BarChart3, Target, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SearchIntentAnalysis from "@/components/seo-assistant/SearchIntentAnalysis";
import RelatedEntitiesSection from "@/components/seo-assistant/RelatedEntitiesSection";
import AudiencePersonaAnalysis from "@/components/seo-assistant/AudiencePersonaAnalysis";
import CatchyTitleSuggestions from "@/components/seo-assistant/CatchyTitleSuggestions";

const SEOAssistant = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [targetKeyword, setTargetKeyword] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!websiteUrl || !targetKeyword) {
      toast({
        title: "Missing Information",
        description: "Please enter both website URL and target keyword",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockAnalysis = {
        overallScore: 78,
        titleTag: {
          score: 85,
          current: "Digital Marketing Agency - HeiSocial",
          recommendation: `Include "${targetKeyword}" in your title tag for better relevance`
        },
        metaDescription: {
          score: 72,
          current: "Professional digital marketing services to grow your business online",
          recommendation: `Add "${targetKeyword}" and make it more compelling with a call-to-action`
        },
        headings: {
          score: 80,
          h1Count: 1,
          h2Count: 3,
          recommendation: "Good heading structure, consider adding more H2 tags with keyword variations"
        },
        keywordDensity: {
          score: 65,
          density: "1.2%",
          recommendation: `Increase "${targetKeyword}" density to 2-3% for better optimization`
        },
        improvements: [
          "Add target keyword to title tag",
          "Optimize meta description with keyword and CTA",
          "Include keyword in first paragraph",
          "Add more internal links",
          "Optimize images with alt text containing keywords"
        ],
        // New advanced features data
        searchIntent: {
          type: "Informational",
          explanation: "Người dùng tìm kiếm từ khóa này chủ yếu để tìm hiểu kiến thức, định nghĩa, và cách làm, chứ chưa sẵn sàng mua hàng. Nội dung nên tập trung vào việc cung cấp hướng dẫn và giải đáp thắc mắc."
        },
        relatedEntities: [
          "SEO Copywriting",
          "Social Media Strategy", 
          "Customer Journey",
          "Brand Awareness",
          "Marketing Funnel",
          "Email Marketing",
          "Content Strategy"
        ],
        audiencePersona: {
          persona: "Marketer hoặc Chủ doanh nghiệp nhỏ",
          problems: "Đang gặp khó khăn trong việc thu hút khách hàng tiềm năng và chưa biết cách tạo ra nội dung có giá trị.",
          desires: "Tìm kiếm một hướng dẫn thực tế, có thể áp dụng ngay để cải thiện chiến lược nội dung của mình."
        },
        titleSuggestions: [
          { type: "List", title: "10 Sai Lầm Chết Người Khi Làm Content Marketing (Và Cách Sửa)" },
          { type: "How-to", title: "Hướng Dẫn Content Marketing Từ A-Z Cho Người Mới Bắt Đầu" },
          { type: "Question", title: "Content Marketing Có Thực Sự Hiệu Quả Trong Năm 2024?" },
          { type: "Secret", title: "Bí Mật Ít Ai Biết Để Tạo Ra Content Thu Hút Hàng Ngàn Click" },
          { type: "Benefit", title: "Tăng Gấp Đôi Lượng Khách Hàng Tiềm Năng Với Chiến Lược Content Này" }
        ]
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "SEO analysis generated successfully"
      });
    }, 3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800";
    if (score >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Layout>
      <Hero
        title="SEO Assistant"
        subtitle="Analyze your website and get actionable SEO recommendations to improve your search rankings"
        backgroundImage="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">On-Page Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive analysis of your page's SEO elements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Performance Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Get detailed scores for each SEO factor
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Actionable Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Specific suggestions to improve your rankings
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Website SEO Analysis</CardTitle>
              <CardDescription>
                Enter your website URL and target keyword to get a comprehensive SEO analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL *
                </label>
                <Input
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Keyword *
                </label>
                <Input
                  placeholder="e.g., digital marketing agency"
                  value={targetKeyword}
                  onChange={(e) => setTargetKeyword(e.target.value)}
                />
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Website...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Analyze SEO
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              {/* Overall Score */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Overall SEO Score</CardTitle>
                    <Badge className={getScoreBadgeColor(analysis.overallScore)}>
                      {analysis.overallScore}/100
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${analysis.overallScore}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Analysis Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SearchIntentAnalysis 
                  intentType={analysis.searchIntent.type}
                  explanation={analysis.searchIntent.explanation}
                />
                <AudiencePersonaAnalysis 
                  persona={analysis.audiencePersona.persona}
                  problems={analysis.audiencePersona.problems}
                  desires={analysis.audiencePersona.desires}
                />
              </div>

              <RelatedEntitiesSection entities={analysis.relatedEntities} />
              
              <CatchyTitleSuggestions suggestions={analysis.titleSuggestions} />

              {/* Detailed Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Title Tag</CardTitle>
                      <span className={`font-bold ${getScoreColor(analysis.titleTag.score)}`}>
                        {analysis.titleTag.score}/100
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">Current:</p>
                    <p className="bg-gray-100 p-2 rounded text-sm mb-3">
                      {analysis.titleTag.current}
                    </p>
                    <p className="text-sm">
                      <strong>Recommendation:</strong> {analysis.titleTag.recommendation}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Meta Description</CardTitle>
                      <span className={`font-bold ${getScoreColor(analysis.metaDescription.score)}`}>
                        {analysis.metaDescription.score}/100
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">Current:</p>
                    <p className="bg-gray-100 p-2 rounded text-sm mb-3">
                      {analysis.metaDescription.current}
                    </p>
                    <p className="text-sm">
                      <strong>Recommendation:</strong> {analysis.metaDescription.recommendation}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Heading Structure</CardTitle>
                      <span className={`font-bold ${getScoreColor(analysis.headings.score)}`}>
                        {analysis.headings.score}/100
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-3">
                      <p className="text-sm">H1 tags: {analysis.headings.h1Count}</p>
                      <p className="text-sm">H2 tags: {analysis.headings.h2Count}</p>
                    </div>
                    <p className="text-sm">
                      <strong>Recommendation:</strong> {analysis.headings.recommendation}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Keyword Density</CardTitle>
                      <span className={`font-bold ${getScoreColor(analysis.keywordDensity.score)}`}>
                        {analysis.keywordDensity.score}/100
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      Current density: <strong>{analysis.keywordDensity.density}</strong>
                    </p>
                    <p className="text-sm">
                      <strong>Recommendation:</strong> {analysis.keywordDensity.recommendation}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Improvement Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Priority Improvements</CardTitle>
                  <CardDescription>
                    Focus on these areas to improve your SEO performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysis.improvements.map((improvement: string, index: number) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SEOAssistant;
