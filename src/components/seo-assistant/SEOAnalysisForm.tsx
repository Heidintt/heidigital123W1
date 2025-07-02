
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Loader2 } from "lucide-react";

interface SEOAnalysisFormProps {
  websiteUrl: string;
  targetKeyword: string;
  isAnalyzing: boolean;
  onWebsiteUrlChange: (value: string) => void;
  onTargetKeywordChange: (value: string) => void;
  onAnalyze: () => void;
}

const SEOAnalysisForm: React.FC<SEOAnalysisFormProps> = ({
  websiteUrl,
  targetKeyword,
  isAnalyzing,
  onWebsiteUrlChange,
  onTargetKeywordChange,
  onAnalyze
}) => {
  return (
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
            onChange={(e) => onWebsiteUrlChange(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Keyword *
          </label>
          <Input
            placeholder="e.g., digital marketing agency"
            value={targetKeyword}
            onChange={(e) => onTargetKeywordChange(e.target.value)}
          />
        </div>

        <Button 
          onClick={onAnalyze}
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
  );
};

export default SEOAnalysisForm;
