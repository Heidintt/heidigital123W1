
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

interface RelatedEntitiesSectionProps {
  entities: string[];
}

const RelatedEntitiesSection: React.FC<RelatedEntitiesSectionProps> = ({
  entities
}) => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Network className="h-5 w-5 text-green-600" />
          Related Entities & Topics
        </CardTitle>
        <CardDescription>
          Related entities and topics to include in your content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white/70 rounded-lg p-4 border border-green-100">
          <div className="flex flex-wrap gap-2">
            {entities.map((entity, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-green-100 text-green-800 border-green-300 hover:bg-green-200 transition-colors"
              >
                {entity}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-3 text-xs text-green-600 flex items-center gap-1">
          <span>💡</span>
          <span>Include these topics to increase content depth and authority</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedEntitiesSection;
