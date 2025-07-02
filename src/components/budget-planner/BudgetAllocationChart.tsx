
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ChannelCalculations } from "@/types/budgetPlanner";

interface BudgetAllocationChartProps {
  channelCalculations: ChannelCalculations[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

const BudgetAllocationChart: React.FC<BudgetAllocationChartProps> = ({ channelCalculations }) => {
  const data = channelCalculations.map((channel, index) => ({
    name: channel.name,
    value: channel.allocatedBudget,
    color: COLORS[index % COLORS.length]
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{data.payload.name}</p>
          <p className="text-sm text-gray-600">
            Budget: ${data.value.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">
            Share: {((data.value / channelCalculations.reduce((sum, c) => sum + c.allocatedBudget, 0)) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
            formatter={(value) => value}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetAllocationChart;
