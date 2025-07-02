
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface SEOImprovementSuggestionsProps {
  improvements: string[];
}

const SEOImprovementSuggestions: React.FC<SEOImprovementSuggestionsProps> = ({ improvements }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Priority Improvements</CardTitle>
        <CardDescription>
          Focus on these areas to improve your SEO performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {improvements.map((improvement: string, index: number) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{improvement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOImprovementSuggestions;
