
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

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

interface ROIMetricsProps {
  data: CalculatedMetrics[];
}

const ROIMetrics = ({ data }: ROIMetricsProps) => {
  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const formatPercentage = (value: number) => `${(value * 100).toFixed(2)}%`;

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Strongly Increase": return "bg-green-600 text-white";
      case "Increase": return "bg-green-500 text-white";
      case "Maintain": return "bg-yellow-500 text-white";
      case "Decrease / Re-evaluate": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const totalSpend = data.reduce((sum, item) => sum + item.spend, 0);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalLeads = data.reduce((sum, item) => sum + item.conversions, 0);
  const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0);
  const totalCustomers = data.reduce((sum, item) => sum + item.customers, 0);
  
  // Calculate totals using proper formulas
  const overallROI = totalSpend > 0 ? ((totalRevenue - totalSpend) / totalSpend) : 0;
  const overallROAS = totalSpend > 0 ? totalRevenue / totalSpend : 0;
  const overallLeadConversionRate = totalClicks > 0 ? totalLeads / totalClicks : 0;
  const overallCustomerConversionRate = totalClicks > 0 ? totalCustomers / totalClicks : 0;

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalSpend)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall ROI</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Return on Investment: (Revenue - Spend) ÷ Spend</p>
                </TooltipContent>
              </Tooltip>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatPercentage(overallROI)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall ROAS</CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Return on Ad Spend: Revenue ÷ Spend</p>
                </TooltipContent>
              </Tooltip>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallROAS.toFixed(2)}x</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Metrics Table */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Channel Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Channel</th>
                    <th className="text-left p-2">Campaign</th>
                    <th className="text-right p-2">ROI</th>
                    <th className="text-right p-2">ROAS</th>
                    <th className="text-right p-2">CPL</th>
                    <th className="text-right p-2">ARPC</th>
                    <th className="text-right p-2">Lead Conv %</th>
                    <th className="text-right p-2">Customer Conv %</th>
                    <th className="text-right p-2">CPC</th>
                    <th className="text-right p-2">CAC</th>
                    <th className="text-center p-2">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{item.channel}</td>
                      <td className="p-2">{item.campaignName}</td>
                      <td className="p-2 text-right">{formatPercentage(item.roi)}</td>
                      <td className="p-2 text-right">{item.roas.toFixed(2)}x</td>
                      <td className="p-2 text-right">{formatCurrency(item.cpl)}</td>
                      <td className="p-2 text-right">{formatCurrency(item.arpc)}</td>
                      <td className="p-2 text-right">{formatPercentage(item.leadConversionRate)}</td>
                      <td className="p-2 text-right">{formatPercentage(item.customerConversionRate)}</td>
                      <td className="p-2 text-right">{formatCurrency(item.cpc)}</td>
                      <td className="p-2 text-right">{formatCurrency(item.cac)}</td>
                      <td className="p-2 text-center">
                        <Badge className={getRecommendationColor(item.budgetRecommendation)}>
                          {item.budgetRecommendation}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 font-bold bg-gray-50">
                    <td className="p-2" colSpan={2}>TOTALS</td>
                    <td className="p-2 text-right">{formatPercentage(overallROI)}</td>
                    <td className="p-2 text-right">{overallROAS.toFixed(2)}x</td>
                    <td className="p-2 text-right">-</td>
                    <td className="p-2 text-right">-</td>
                    <td className="p-2 text-right">{formatPercentage(overallLeadConversionRate)}</td>
                    <td className="p-2 text-right">{formatPercentage(overallCustomerConversionRate)}</td>
                    <td className="p-2 text-right">-</td>
                    <td className="p-2 text-right">-</td>
                    <td className="p-2 text-center">-</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ROIMetrics;
