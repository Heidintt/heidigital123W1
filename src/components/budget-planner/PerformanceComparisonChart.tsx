
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChannelCalculations } from "@/types/budgetPlanner";

interface PerformanceComparisonChartProps {
  channelCalculations: ChannelCalculations[];
}

type MetricType = 'leads' | 'revenue' | 'roas' | 'cpl';

const PerformanceComparisonChart: React.FC<PerformanceComparisonChartProps> = ({ channelCalculations }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('leads');

  const getChartData = () => {
    return channelCalculations.map(channel => ({
      name: channel.name.length > 10 ? channel.name.substring(0, 10) + '...' : channel.name,
      fullName: channel.name,
      value: (() => {
        switch (selectedMetric) {
          case 'leads':
            return Math.round(channel.estimatedLeads);
          case 'revenue':
            return Math.round(channel.estimatedRevenue);
          case 'roas':
            return Math.round(channel.roas * 100) / 100;
          case 'cpl':
            return Math.round(channel.cpl);
          default:
            return 0;
        }
      })()
    }));
  };

  const getMetricLabel = () => {
    switch (selectedMetric) {
      case 'leads':
        return 'Estimated Leads';
      case 'revenue':
        return 'Estimated Revenue ($)';
      case 'roas':
        return 'Return on Ad Spend';
      case 'cpl':
        return 'Cost Per Lead ($)';
      default:
        return '';
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const channel = channelCalculations.find(c => c.name.startsWith(label.replace('...', '')));
      
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{channel?.name || label}</p>
          <p className="text-sm text-gray-600">
            {getMetricLabel()}: {
              selectedMetric === 'revenue' || selectedMetric === 'cpl' 
                ? `$${data.value.toLocaleString()}` 
                : selectedMetric === 'roas'
                ? `${data.value}x`
                : data.value.toLocaleString()
            }
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select value={selectedMetric} onValueChange={(value: MetricType) => setSelectedMetric(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="leads">Compare by Leads</SelectItem>
            <SelectItem value="revenue">Compare by Revenue</SelectItem>
            <SelectItem value="roas">Compare by ROAS</SelectItem>
            <SelectItem value="cpl">Compare by CPL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="#8884d8"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceComparisonChart;
