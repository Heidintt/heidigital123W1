
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts";

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
  cpa: number;
  arpc: number;
  conversionRate: number;
  cpc: number;
  cac: number;
  budgetRecommendation: string;
}

interface ROIChartsProps {
  data: CalculatedMetrics[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const chartConfig = {
  roas: {
    label: "ROAS",
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
  const roasData = data.map(item => ({
    channel: item.channel,
    roas: item.roas
  }));

  const budgetData = data.map(item => ({
    channel: item.channel,
    spend: item.spend
  }));

  const revenueVsSpendData = data.map(item => ({
    channel: item.channel,
    spend: item.spend,
    revenue: item.revenue
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ROAS Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>ROAS by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px]">
              <BarChart data={roasData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="roas" fill="var(--color-roas)" />
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

      {/* Revenue vs Spend Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue vs Spend by Channel</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[400px]">
            <LineChart data={revenueVsSpendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="channel" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="spend" stroke="var(--color-spend)" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
            </LineChart>
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
                  const roi = item.spend > 0 ? ((profit / item.spend) * 100) : 0;
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
