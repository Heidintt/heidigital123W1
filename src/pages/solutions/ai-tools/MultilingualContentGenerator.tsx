import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Globe, CheckCircle, Brain, Edit, BarChart3, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MultilingualContentGenerator = () => {
  // Add no-index meta tag
  useEffect(() => {
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex, nofollow';
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  const [productName, setProductName] = useState("");
  const [industry, setIndustry] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [features, setFeatures] = useState("");
  const [language, setLanguage] = useState("en");
  const [contentType, setContentType] = useState("blog");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  ];

  const contentTypes = [
    { value: "blog", label: "Blog Post (Short)" },
    { value: "blog-long", label: "Blog Post (Long-form)" },
    { value: "meta", label: "Meta Title + Description" },
    { value: "social-tiktok", label: "TikTok Caption" },
    { value: "social-instagram", label: "Instagram Caption" },
    { value: "social-facebook", label: "Facebook Post" },
    { value: "email", label: "Email Marketing Copy" },
    { value: "youtube", label: "YouTube SEO (Title + Description)" },
    { value: "alt-text", label: "Image ALT Text" },
  ];

  const tones = [
    { value: "professional", label: "Professional" },
    { value: "friendly", label: "Friendly" },
    { value: "enthusiastic", label: "Enthusiastic" },
    { value: "educational", label: "Educational" },
    { value: "persuasive", label: "Persuasive" },
    { value: "inspiring", label: "Inspiring" },
  ];

  const handleGenerate = () => {
    if (!productName || !industry || !targetAudience) {
      toast({
        title: "Missing Information",
        description: "Please fill in product name, industry, and target audience",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate content generation based on inputs
    setTimeout(() => {
      const selectedLang = languages.find(l => l.code === language);
      const selectedType = contentTypes.find(c => c.value === contentType);
      
      let content = "";
      
      if (contentType === "blog") {
        content = `# ${productName}: The Future of ${industry}\n\nIn today's competitive ${industry} market, ${productName} stands out as the perfect solution for ${targetAudience}. ${features ? `With features like ${features}, ` : ""}this innovative product addresses the core needs of modern consumers.\n\n## Why Choose ${productName}?\n\n${productName} revolutionizes the way ${targetAudience} interact with ${industry} solutions. Our comprehensive approach ensures maximum satisfaction and optimal results.\n\n*Generated in ${selectedLang?.name} with ${tone} tone*`;
      } else if (contentType === "meta") {
        content = `**Meta Title:**\n${productName} - Premium ${industry} Solution for ${targetAudience} | Brand Name\n\n**Meta Description:**\nDiscover ${productName}, the leading ${industry} solution designed specifically for ${targetAudience}. ${features ? `Featuring ${features}. ` : ""}Get started today and transform your experience.`;
      } else if (contentType === "social-tiktok") {
        content = `🔥 Just discovered ${productName} and I'm OBSESSED! \n\nIf you're ${targetAudience} looking for the best in ${industry}, this is IT! ${features ? `The ${features} are absolutely game-changing 💯` : ""}\n\n#${productName.replace(/\s+/g, '')} #${industry.replace(/\s+/g, '')} #MustHave #Trending`;
      } else {
        content = `This is a sample ${selectedType?.label} content for ${productName} in ${selectedLang?.name} with a ${tone} tone.\n\nProduct: ${productName}\nIndustry: ${industry}\nTarget Audience: ${targetAudience}\n${features ? `Key Features: ${features}` : ""}\n\nIn a real implementation, this would be generated by advanced AI algorithms tailored for international SEO and cultural relevance in ${selectedLang?.name}.`;
      }
      
      setGeneratedContent(content);
      setIsGenerating(false);
      toast({
        title: "Content Generated!",
        description: `Successfully created ${selectedType?.label} in ${selectedLang?.name}`,
      });
    }, 3000);
  };

  return (
    <Layout>
      <Hero
        title="Multilingual SEO Content Generator"
        subtitle="Create SEO-optimized content in 6 languages instantly. AI-powered tool for global marketers, brands, and creators."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Language Support Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Built for Multilingual Content Creation"
            subtitle="Create culturally-aware, SEO-optimized content in multiple languages"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {languages.map((lang) => (
              <div key={lang.code} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{lang.flag}</div>
                <div className="font-semibold text-sm">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Generator Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Generate Your Content"
            subtitle="Fill in the details below to create professional, SEO-optimized content"
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Content Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product/Service Name *
                  </label>
                  <Input
                    placeholder="e.g., EcoClean Pro"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <Input
                    placeholder="e.g., Cleaning Products, Technology, Fashion"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience *
                  </label>
                  <Input
                    placeholder="e.g., Busy professionals, Gen Z consumers"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Features (Optional)
                  </label>
                  <Textarea
                    placeholder="Describe the main features or benefits"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Content Settings</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.flag} {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type
                  </label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tone of Voice
                  </label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* GENERATE BUTTON - Make sure it's visible and functional */}
                <div className="pt-4">
                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90 text-white"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Generating Content...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-2 h-5 w-5" />
                        Generate Content
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Generated Content Display */}
            {generatedContent && (
              <div className="mt-8 bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Generated Content</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Ready to Use
                  </Badge>
                </div>
                <div className="bg-gray-50 p-4 rounded border whitespace-pre-wrap font-mono text-sm">
                  {generatedContent}
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedContent);
                      toast({
                        title: "Copied!",
                        description: "Content copied to clipboard"
                      });
                    }}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setGeneratedContent("")}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps to create professional, SEO-optimized content"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-heisocial-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Input Your Idea</h3>
              <p className="text-gray-600">
                Describe your product, brand, or target customer in simple words. Add key features and benefits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-heisocial-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Select Language & Style</h3>
              <p className="text-gray-600">
                Choose from 6 supported languages and match your tone of voice to your brand personality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Generate & Optimize</h3>
              <p className="text-gray-600">
                Instantly receive ready-to-publish, SEO-friendly content tailored for your target market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Marketers Love This Tool"
            subtitle="Powerful features designed for global content creation"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">SEO-Ready Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Every piece of content is optimized for search engines and designed to rank higher.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Culturally-Aware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Content is adapted for local culture and search behavior, not just translated.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Consistent Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Maintain the same tone and quality across all languages and content types.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Built for Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Perfect for marketers, agencies, and content creators working globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Perfect For..."
            subtitle="Designed for professionals who need quality content at scale"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketers & Freelancers</h3>
              <p className="text-gray-600">
                Save time and ensure SEO consistency across all your client campaigns and content marketing efforts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brands & E-commerce</h3>
              <p className="text-gray-600">
                Localize product descriptions, blog posts, and marketing materials for international markets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Edit className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creators & Agencies</h3>
              <p className="text-gray-600">
                Generate scripts, captions, campaign copy, and social media content for diverse audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Create Smarter Content?"
        description="Join thousands of marketers who are already creating SEO-optimized, multilingual content with our AI-powered tool"
        primaryButtonText="Get Started Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Other AI Tools"
        secondaryButtonLink="/solutions/ai-tools"
        backgroundClass="bg-gradient-to-r from-heisocial-blue to-heisocial-purple"
      />
    </Layout>
  );
};

export default MultilingualContentGenerator;
