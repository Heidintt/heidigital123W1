
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Edit } from "lucide-react";

interface ArticleGeneratorFormProps {
  primaryKeyword: string;
  setPrimaryKeyword: (value: string) => void;
  secondaryKeywords: string;
  setSecondaryKeywords: (value: string) => void;
  targetAudience: string;
  setTargetAudience: (value: string) => void;
  articleTopic: string;
  setArticleTopic: (value: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

const ArticleGeneratorForm: React.FC<ArticleGeneratorFormProps> = ({
  primaryKeyword,
  setPrimaryKeyword,
  secondaryKeywords,
  setSecondaryKeywords,
  targetAudience,
  setTargetAudience,
  articleTopic,
  setArticleTopic,
  isGenerating,
  onGenerate,
}) => {
  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Article Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Keyword *
        </label>
        <Input
          placeholder="e.g., content marketing strategy"
          value={primaryKeyword}
          onChange={(e) => setPrimaryKeyword(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Secondary Keywords
        </label>
        <Input
          placeholder="e.g., digital marketing, SEO optimization, brand awareness"
          value={secondaryKeywords}
          onChange={(e) => setSecondaryKeywords(e.target.value)}
        />
        <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Article Topic *
        </label>
        <Input
          placeholder="e.g., The Ultimate Guide to Content Marketing Strategy in 2024"
          value={articleTopic}
          onChange={(e) => setArticleTopic(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Target Audience
        </label>
        <Input
          placeholder="e.g., marketing professionals, small business owners, entrepreneurs"
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
        />
      </div>

      <div className="pt-4">
        <Button 
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full bg-heisocial-blue hover:bg-heisocial-blue/90 text-white"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating Article...
            </>
          ) : (
            <>
              <Edit className="mr-2 h-5 w-5" />
              Generate SEO Article
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ArticleGeneratorForm;
