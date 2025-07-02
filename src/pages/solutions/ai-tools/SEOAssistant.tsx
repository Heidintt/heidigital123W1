
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { useToast } from "@/hooks/use-toast";
import SearchIntentAnalysis from "@/components/seo-assistant/SearchIntentAnalysis";
import RelatedEntitiesSection from "@/components/seo-assistant/RelatedEntitiesSection";
import AudiencePersonaAnalysis from "@/components/seo-assistant/AudiencePersonaAnalysis";
import CatchyTitleSuggestions from "@/components/seo-assistant/CatchyTitleSuggestions";
import SEOFeaturesOverview from "@/components/seo-assistant/SEOFeaturesOverview";
import SEOAnalysisForm from "@/components/seo-assistant/SEOAnalysisForm";
import SEOScoreCard from "@/components/seo-assistant/SEOScoreCard";
import SEODetailedAnalysis from "@/components/seo-assistant/SEODetailedAnalysis";
import SEOImprovementSuggestions from "@/components/seo-assistant/SEOImprovementSuggestions";

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
        searchIntent: {
          type: "Informational",
          explanation: "Users searching for this keyword are primarily seeking knowledge, definitions, and how-to guides, rather than ready to make a purchase. Content should focus on providing guidance and answering questions."
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
          persona: "Marketer or Small Business Owner",
          problems: "Struggling with attracting potential customers and don't know how to create valuable content.",
          desires: "Looking for practical guidance that can be applied immediately to improve their content strategy."
        },
        titleSuggestions: [
          { type: "List", title: "10 Deadly Content Marketing Mistakes (And How to Fix Them)" },
          { type: "How-to", title: "Complete Content Marketing Guide for Beginners A-Z" },
          { type: "Question", title: "Is Content Marketing Really Effective in 2024?" },
          { type: "Secret", title: "Little-Known Secret to Create Content That Gets Thousands of Clicks" },
          { type: "Benefit", title: "Double Your Lead Generation with This Content Strategy" }
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

  return (
    <Layout>
      <Hero
        title="SEO Assistant"
        subtitle="Analyze your website and get actionable SEO recommendations to improve your search rankings"
        backgroundImage="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <SEOFeaturesOverview />

          <SEOAnalysisForm
            websiteUrl={websiteUrl}
            targetKeyword={targetKeyword}
            isAnalyzing={isAnalyzing}
            onWebsiteUrlChange={setWebsiteUrl}
            onTargetKeywordChange={setTargetKeyword}
            onAnalyze={handleAnalyze}
          />

          {analysis && (
            <div className="space-y-6">
              <SEOScoreCard score={analysis.overallScore} />

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

              <SEODetailedAnalysis analysis={analysis} />

              <SEOImprovementSuggestions improvements={analysis.improvements} />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SEOAssistant;
