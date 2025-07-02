
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp } from "lucide-react";

interface SpikeDetectionProps {
  spikeData: any;
  keywords: string[];
  threshold: number;
}

const SpikeDetection = ({ spikeData, keywords, threshold }: SpikeDetectionProps) => {
  const renderSpikeInfo = () => {
    if (!spikeData || Object.keys(spikeData).length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No spike data available</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {keywords.map((keyword) => {
          const keywordSpikes = spikeData[keyword] || [];
          const spikeCount = keywordSpikes.filter((spike: any) => spike.isSpike).length;
          
          return (
            <div key={keyword} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">{keyword}</h4>
                <Badge variant={spikeCount > 0 ? "destructive" : "secondary"}>
                  {spikeCount} spikes detected
                </Badge>
              </div>
              
              {spikeCount > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 mb-2">Recent spike dates:</p>
                  {keywordSpikes
                    .filter((spike: any) => spike.isSpike)
                    .slice(-5)
                    .map((spike: any, index: number) => (
                      <div key={index} className="flex items-center justify-between bg-red-50 p-2 rounded">
                        <span className="text-sm font-medium">
                          {new Date(spike.date).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-red-600 font-semibold">
                            Z-Score: {spike.zScore?.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  No significant spikes detected with threshold {threshold}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Spike Detection Results
        </CardTitle>
        <CardDescription>
          Significant increases in search interest detected using Z-score analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderSpikeInfo()}
      </CardContent>
    </Card>
  );
};

export default SpikeDetection;
