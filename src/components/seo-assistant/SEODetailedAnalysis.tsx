
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalysisData {
  titleTag: {
    score: number;
    current: string;
    recommendation: string;
  };
  metaDescription: {
    score: number;
    current: string;
    recommendation: string;
  };
  headings: {
    score: number;
    h1Count: number;
    h2Count: number;
    recommendation: string;
  };
  keywordDensity: {
    score: number;
    density: string;
    recommendation: string;
  };
}

interface SEODetailedAnalysisProps {
  analysis: AnalysisData;
}

const SEODetailedAnalysis: React.FC<SEODetailedAnalysisProps> = ({ analysis }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
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
  );
};

export default SEODetailedAnalysis;
