
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SEOScoreCardProps {
  score: number;
}

const SEOScoreCard: React.FC<SEOScoreCardProps> = ({ score }) => {
  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800";
    if (score >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Overall SEO Score</CardTitle>
          <Badge className={getScoreBadgeColor(score)}>
            {score}/100
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOScoreCard;
