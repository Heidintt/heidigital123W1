
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BarChart3, Target } from "lucide-react";

const SEOFeaturesOverview: React.FC = () => {
  return (
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
  );
};

export default SEOFeaturesOverview;
