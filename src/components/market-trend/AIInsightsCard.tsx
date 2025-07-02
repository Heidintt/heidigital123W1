
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";

interface AIInsightsCardProps {
  summary: string;
  keyword: string;
  isGenerating?: boolean;
}

const AIInsightsCard = ({ summary, keyword, isGenerating = false }: AIInsightsCardProps) => {
  if (isGenerating) {
    return (
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600 animate-pulse" />
            AI Insights
          </CardTitle>
          <CardDescription>
            Generating intelligent analysis...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="h-4 bg-purple-200 rounded animate-pulse"></div>
            <div className="h-4 bg-purple-200 rounded animate-pulse w-4/5"></div>
            <div className="h-4 bg-purple-200 rounded animate-pulse w-3/5"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="relative">
            <Brain className="h-5 w-5 text-purple-600" />
            <Sparkles className="h-3 w-3 text-yellow-500 absolute -top-1 -right-1" />
          </div>
          AI-Powered Market Insights
        </CardTitle>
        <CardDescription>
          Intelligent analysis generated from trend patterns and market indicators
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white/70 rounded-lg p-4 border border-purple-100">
          <div className="prose prose-sm max-w-none">
            {summary.split('\n').map((line, index) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h4 key={index} className="font-bold text-purple-800 mb-2 text-lg">
                    {line.replace(/\*\*/g, '')}
                  </h4>
                );
              } else if (line.startsWith('*') && line.endsWith('*')) {
                return (
                  <p key={index} className="text-xs text-gray-500 italic mt-4 border-t pt-2">
                    {line.replace(/\*/g, '')}
                  </p>
                );
              } else if (line.trim()) {
                return (
                  <p key={index} className="text-gray-700 mb-3 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-xs text-purple-600">
          <Sparkles className="h-3 w-3" />
          <span>Powered by Heidi Digital AI Analysis Engine</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsCard;
