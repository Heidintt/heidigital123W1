
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BudgetAllocationChart from "./BudgetAllocationChart";
import PerformanceComparisonChart from "./PerformanceComparisonChart";
import { BudgetPlannerState, ChannelCalculations, OverallCalculations } from "@/types/budgetPlanner";
import { calculateChannelMetrics, calculateOverallMetrics } from "@/utils/budgetPlannerUtils";

interface BudgetPlannerResultsProps {
  plannerState: BudgetPlannerState;
}

const BudgetPlannerResults: React.FC<BudgetPlannerResultsProps> = ({ plannerState }) => {
  const channelCalculations = calculateChannelMetrics(plannerState);
  const overallCalculations = calculateOverallMetrics(plannerState, channelCalculations);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number, decimals: number = 0) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: decimals
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Campaign Results & Analysis</h3>
        
        {/* Overall Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Campaign Summary
              {plannerState.planningMode === 'goal-first' && (
                <Badge variant="secondary">Goal-Based Planning</Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(overallCalculations.totalBudget)}
                </div>
                <div className="text-sm text-gray-600">Total Budget</div>
              </div>
              
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {formatNumber(overallCalculations.totalEstimatedLeads)}
                </div>
                <div className="text-sm text-gray-600">Est. Leads</div>
              </div>
              
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {formatNumber(overallCalculations.totalEstimatedCustomers)}
                </div>
                <div className="text-sm text-gray-600">Est. Customers</div>
              </div>
              
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {formatCurrency(overallCalculations.totalEstimatedRevenue)}
                </div>
                <div className="text-sm text-gray-600">Est. Revenue</div>
              </div>
              
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {formatPercentage(overallCalculations.overallROI)}
                </div>
                <div className="text-sm text-gray-600">Overall ROI</div>
              </div>
              
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">
                  {formatCurrency(overallCalculations.averageCAC)}
                </div>
                <div className="text-sm text-gray-600">Avg. CAC</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Channel Performance Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Channel Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Channel</th>
                    <th className="text-right py-2">Budget</th>
                    <th className="text-right py-2">Est. Clicks</th>
                    <th className="text-right py-2">Est. Leads</th>
                    <th className="text-right py-2">CPL</th>
                    <th className="text-right py-2">Est. Revenue</th>
                    <th className="text-right py-2">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {channelCalculations.map((channel) => (
                    <tr key={channel.id} className="border-b">
                      <td className="py-2 font-medium">{channel.name}</td>
                      <td className="text-right py-2">{formatCurrency(channel.allocatedBudget)}</td>
                      <td className="text-right py-2">{formatNumber(channel.estimatedClicks)}</td>
                      <td className="text-right py-2">{formatNumber(channel.estimatedLeads, 1)}</td>
                      <td className="text-right py-2">{formatCurrency(channel.cpl)}</td>
                      <td className="text-right py-2">{formatCurrency(channel.estimatedRevenue)}</td>
                      <td className="text-right py-2">
                        <span className={`font-medium ${channel.roas >= 2 ? 'text-green-600' : channel.roas >= 1 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {channel.roas.toFixed(2)}x
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <BudgetAllocationChart channelCalculations={channelCalculations} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceComparisonChart channelCalculations={channelCalculations} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlannerResults;
