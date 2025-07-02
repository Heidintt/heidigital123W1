
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, HelpCircle } from "lucide-react";

interface AudiencePersonaAnalysisProps {
  persona: string;
  problems: string;
  desires: string;
}

const AudiencePersonaAnalysis: React.FC<AudiencePersonaAnalysisProps> = ({
  persona,
  problems,
  desires
}) => {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="h-5 w-5 text-purple-600" />
          Target Audience Persona
        </CardTitle>
        <CardDescription>
          Analysis of your target audience for this keyword
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-white/70 rounded-lg p-4 border border-purple-100">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-800 mb-1">Profile:</p>
                  <p className="text-gray-700 text-sm">{persona}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <HelpCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-700 mb-1">Problems:</p>
                  <p className="text-gray-700 text-sm">{problems}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✨</span>
                <div>
                  <p className="font-medium text-green-700 mb-1">Desires:</p>
                  <p className="text-gray-700 text-sm">{desires}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudiencePersonaAnalysis;
