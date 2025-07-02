
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TrendInputForm from "./TrendInputForm";
import TrendChart from "./TrendChart";
import SpikeDetection from "./SpikeDetection";
import TrendMetrics from "./TrendMetrics";
import TrendExport from "./TrendExport";
import { fetchTrendAnalysis, TrendApiResponse } from "@/services/trendApi";
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
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async (params: AnalysisParams) => {
    setIsAnalyzing(true);
    setError(null);
    setAnalysisParams(params);
    
    try {
      // For now, we'll analyze the first keyword (single keyword analysis)
      // You can extend this later to handle multiple keywords
      const keyword = params.keywords[0];
      
      if (!keyword) {
        throw new Error("Please select at least one keyword to analyze");
      }

      console.log(`Analyzing keyword: ${keyword} with timeframe: ${params.timeframe}`);
      
      // Fetch real data from your live API
      const apiResponse: TrendApiResponse = await fetchTrendAnalysis(keyword, params.timeframe);
      
      // Transform the API response to match the frontend data structure
      const transformedData: TrendData[] = apiResponse.historical.map(item => ({
        date: item.date,
        [keyword]: item.value
      }));
      
      setTrendData(transformedData);
      
      // Create spike data structure from API response
      const spikes = {
        [keyword]: apiResponse.historical.map(item => ({
          date: item.date,
          value: item.value,
          zScore: item.is_spike ? 2.5 : 1.0, // Approximate z-score based on spike detection
          isSpike: item.is_spike
        }))
      };
      
      setSpikeData(spikes);
      
    } catch (error) {
      console.error("Analysis error:", error);
      setError(error instanceof Error ? error.message : "An unexpected error occurred");
      setTrendData([]);
      setSpikeData({});
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
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
              LIVE API
            </span>
          </CardTitle>
          <CardDescription>
            Analyze market trends using real Google Trends data with AI-powered spike detection and forecasting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TrendInputForm 
            onAnalyze={handleAnalysis} 
            isAnalyzing={isAnalyzing}
            initialParams={analysisParams}
          />
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">Analysis Error:</p>
              <p className="text-red-600">{error}</p>
            </div>
          )}
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
