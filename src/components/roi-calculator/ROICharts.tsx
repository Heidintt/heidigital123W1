
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface CalculatedMetrics {
  id: string;
  channel: string;
  campaignName: string;
  spend: number;
  clicks: number;
  conversions: number;
  revenue: number;
  customers: number;
  roas: number;
  cpl: number;
  arpc: number;
  leadConversionRate: number;
  customerConversionRate: number;
  cpc: number;
  cac: number;
  roi: number;
  budgetRecommendation: string;
}

interface ROIChartsProps {
  data: CalculatedMetrics[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const chartConfig = {
  roi: {
    label: "ROI %",
    color: "#2563eb",
  },
  spend: {
    label: "Spend",
    color: "#dc2626",
  },
  revenue: {
    label: "Revenue",
    color: "#16a34a",
  },
};

const ROICharts = ({ data }: ROIChartsProps) => {
  // Prepare data for charts
  const performanceData = data.map(item => ({
    channel: item.channel,
    roi: item.roi * 100, // Convert to percentage
    roas: item.roas
  }));

  const budgetData = data.map(item => ({
    channel: item.channel,
    spend: item.spend
  }));

  // Grouped bar chart data for Revenue vs Spend comparison
  const revenueVsSpendData = data.map(item => ({
    channel: item.channel,
    spend: item.spend,
    revenue: item.revenue
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ROI Performance Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>ROI Performance by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="roi" fill="var(--color-roi)" name="ROI %" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Budget Allocation Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="min-h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.channel}: $${entry.spend}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="spend"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue vs Spend Grouped Bar Chart (Replaced Pie Chart) */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Spend Comparison by Channel</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[400px]">
            <BarChart data={revenueVsSpendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="channel" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="spend" fill="var(--color-spend)" name="Spend ($)" />
              <Bar dataKey="revenue" fill="var(--color-revenue)" name="Revenue ($)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Performance Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Channel Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Channel</th>
                  <th className="text-right p-3">Spend</th>
                  <th className="text-right p-3">Revenue</th>
                  <th className="text-right p-3">Profit</th>
                  <th className="text-right p-3">ROI %</th>
                  <th className="text-center p-3">Performance</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  const profit = item.revenue - item.spend;
                  const roi = item.roi * 100;
                  const performanceColor = roi > 50 ? 'text-green-600' : roi > 0 ? 'text-yellow-600' : 'text-red-600';
                  const performanceIcon = roi > 50 ? '🚀' : roi > 0 ? '📈' : '📉';
                  
                  return (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{item.channel}</td>
                      <td className="p-3 text-right">${item.spend.toFixed(2)}</td>
                      <td className="p-3 text-right">${item.revenue.toFixed(2)}</td>
                      <td className={`p-3 text-right ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${profit.toFixed(2)}
                      </td>
                      <td className={`p-3 text-right ${performanceColor}`}>
                        {roi.toFixed(1)}%
                      </td>
                      <td className="p-3 text-center">
                        <span className="text-lg">{performanceIcon}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICharts;
