
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TrendInputForm from "./TrendInputForm";
import TrendChart from "./TrendChart";
import SpikeDetection from "./SpikeDetection";
import TrendMetrics from "./TrendMetrics";
import TrendExport from "./TrendExport";
import { generateMockTrendData } from "./mockTrendData";
import { detectSpikes } from "./trendAnalysisUtils";

export interface TrendData {
  date: string;
  [key: string]: number | string;
}

export interface AnalysisParams {
  keywords: string[];
  timeframe: string;
  geo: string;
  spikeThreshold: number;
  spikeWindow: number;
}

const MarketTrendAnalyzerTool = () => {
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [analysisParams, setAnalysisParams] = useState<AnalysisParams>({
    keywords: [],
    timeframe: "90d",
    geo: "US",
    spikeThreshold: 2.0,
    spikeWindow: 7
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [spikeData, setSpikeData] = useState<any>({});

  const handleAnalysis = async (params: AnalysisParams) => {
    setIsAnalyzing(true);
    setAnalysisParams(params);
    
    try {
      // Generate mock data based on parameters
      const mockData = generateMockTrendData(params.keywords, params.timeframe);
      setTrendData(mockData);
      
      // Perform spike detection
      const spikes = detectSpikes(mockData, params.keywords, params.spikeWindow, params.spikeThreshold);
      setSpikeData(spikes);
      
    } catch (error) {
      console.error("Analysis error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📈 Market Trend Analysis
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
              BETA
            </span>
          </CardTitle>
          <CardDescription>
            Analyze market trends for multiple keywords and detect significant spikes in interest
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TrendInputForm 
            onAnalyze={handleAnalysis} 
            isAnalyzing={isAnalyzing}
            initialParams={analysisParams}
          />
        </CardContent>
      </Card>

      {trendData.length > 0 && (
        <>
          <TrendChart data={trendData} keywords={analysisParams.keywords} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SpikeDetection 
              spikeData={spikeData} 
              keywords={analysisParams.keywords}
              threshold={analysisParams.spikeThreshold}
            />
            <TrendMetrics 
              data={trendData} 
              keywords={analysisParams.keywords} 
            />
          </div>
          <TrendExport 
            data={trendData} 
            spikeData={spikeData}
            params={analysisParams}
          />
        </>
      )}
    </div>
  );
};

export default MarketTrendAnalyzerTool;
