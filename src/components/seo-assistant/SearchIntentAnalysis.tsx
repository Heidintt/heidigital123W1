
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Info } from "lucide-react";

interface SearchIntentAnalysisProps {
  intentType: string;
  explanation: string;
}

const SearchIntentAnalysis: React.FC<SearchIntentAnalysisProps> = ({
  intentType,
  explanation
}) => {
  const getIntentBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'informational': return 'bg-blue-100 text-blue-800';
      case 'navigational': return 'bg-green-100 text-green-800';
      case 'transactional': return 'bg-red-100 text-red-800';
      case 'commercial investigation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Search className="h-5 w-5 text-blue-600" />
          Search Intent Analysis
        </CardTitle>
        <CardDescription>
          Analysis of user search intent and purpose
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Type:</span>
            <Badge className={getIntentBadgeColor(intentType)}>
              {intentType}
            </Badge>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-blue-100">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800 mb-2">Explanation:</p>
                <p className="text-gray-700 text-sm leading-relaxed">{explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchIntentAnalysis;
