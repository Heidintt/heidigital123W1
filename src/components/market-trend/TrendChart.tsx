
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { TrendData } from "./MarketTrendAnalyzerTool";

interface TrendChartProps {
  data: TrendData[];
  keywords: string[];
}

const TrendChart = ({ data, keywords }: TrendChartProps) => {
  const colors = [
    "#3B82F6", // Blue
    "#EF4444", // Red  
    "#10B981", // Green
    "#F59E0B", // Yellow
    "#8B5CF6"  // Purple
  ];

  const chartConfig = keywords.reduce((config, keyword, index) => {
    config[keyword] = {
      label: keyword,
      color: colors[index % colors.length]
    };
    return config;
  }, {} as any);

  return (
    <Card>
      <CardHeader>
        <CardTitle>📈 Trend Analysis Chart</CardTitle>
        <CardDescription>
          Interest over time for selected keywords (0-100 scale)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              {keywords.map((keyword, index) => (
                <Line
                  key={keyword}
                  type="monotone"
                  dataKey={keyword}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TrendChart;
