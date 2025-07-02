
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import BudgetAllocationChart from "./BudgetAllocationChart";
import PerformanceComparisonChart from "./PerformanceComparisonChart";
import { BudgetPlannerState, ChannelCalculations, OverallCalculations } from "@/types/budgetPlanner";
import { calculateChannelMetrics, calculateOverallMetrics, exportToCSV } from "@/utils/budgetPlannerUtils";
import { toast } from "sonner";

interface BudgetPlannerResultsProps {
  plannerState: BudgetPlannerState;
}

const BudgetPlannerResults: React.FC<BudgetPlannerResultsProps> = ({ plannerState }) => {
  const channelCalculations = calculateChannelMetrics(plannerState);
  const overallCalculations = calculateOverallMetrics(plannerState, channelCalculations);

  const totalAllocation = plannerState.channels.reduce((sum, channel) => sum + channel.budgetAllocation, 0);
  const isValidAllocation = plannerState.planningMode === 'goal-first' || Math.abs(totalAllocation - 100) <= 0.1;

  const handleExportCSV = () => {
    try {
      exportToCSV(channelCalculations);
      toast.success("Data exported successfully!");
    } catch (error) {
      toast.error("Failed to export data");
    }
  };

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

  if (!isValidAllocation && plannerState.planningMode === 'budget-first') {
    return (
      <div className="space-y-6">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-semibold mb-2 text-red-600">Invalid Budget Allocation</h3>
          <p className="text-gray-600 mb-4">
            Your total budget allocation is {totalAllocation.toFixed(1)}%. 
            Please adjust your channel allocations to equal exactly 100% to see results.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left max-w-md mx-auto">
            <h4 className="font-medium text-red-800 mb-2">Quick Fix:</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Use the sliders to adjust budget percentages</li>
              <li>• Each slider automatically adjusts others</li>
              <li>• Total must equal 100%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Campaign Results & Analysis</h3>
          <Button onClick={handleExportCSV} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
        
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
                <div className="text-sm text-gray-600">
                  {plannerState.planningMode === 'goal-first' ? 'Required Budget' : 'Total Budget'}
                </div>
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
