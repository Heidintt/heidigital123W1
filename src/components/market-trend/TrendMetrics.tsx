
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { TrendData } from "./MarketTrendAnalyzerTool";

interface TrendMetricsProps {
  data: TrendData[];
  keywords: string[];
}

const TrendMetrics = ({ data, keywords }: TrendMetricsProps) => {
  const calculateMetrics = (keyword: string) => {
    const values = data.map(d => Number(d[keyword]) || 0);
    const recentValues = values.slice(-7); // Last 7 days
    const previousValues = values.slice(-14, -7); // Previous 7 days
    
    const current = values[values.length - 1] || 0;
    const average = values.reduce((a, b) => a + b, 0) / values.length;
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    const recentAvg = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
    const previousAvg = previousValues.reduce((a, b) => a + b, 0) / previousValues.length;
    const weeklyChange = ((recentAvg - previousAvg) / previousAvg) * 100;
    
    // Calculate volatility (standard deviation)
    const variance = values.reduce((acc, val) => acc + Math.pow(val - average, 2), 0) / values.length;
    const volatility = Math.sqrt(variance);
    
    return {
      current: current.toFixed(1),
      average: average.toFixed(1),
      max: max.toFixed(1),
      min: min.toFixed(1),
      weeklyChange: weeklyChange.toFixed(1),
      volatility: volatility.toFixed(1)
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-500" />
          Trend Metrics
        </CardTitle>
        <CardDescription>
          Key statistics and performance indicators for each keyword
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {keywords.map((keyword) => {
            const metrics = calculateMetrics(keyword);
            const isPositiveTrend = parseFloat(metrics.weeklyChange) > 0;
            
            return (
              <div key={keyword} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">{keyword}</h4>
                  <div className="flex items-center gap-2">
                    {isPositiveTrend ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm font-semibold ${
                      isPositiveTrend ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metrics.weeklyChange}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{metrics.current}</p>
                    <p className="text-xs text-gray-500">Current</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">{metrics.average}</p>
                    <p className="text-xs text-gray-500">Average</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{metrics.max}</p>
                    <p className="text-xs text-gray-500">Peak</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{metrics.min}</p>
                    <p className="text-xs text-gray-500">Low</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">{metrics.volatility}</p>
                    <p className="text-xs text-gray-500">Volatility</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Activity className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">7d trend</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendMetrics;
