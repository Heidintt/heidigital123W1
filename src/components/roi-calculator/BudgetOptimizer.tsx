
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

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

interface BudgetOptimizerProps {
  data: CalculatedMetrics[];
}

const BudgetOptimizer = ({ data }: BudgetOptimizerProps) => {
  const totalSpend = data.reduce((sum, item) => sum + item.spend, 0);
  
  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case "Strongly Increase":
      case "Increase":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "Decrease / Re-evaluate":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Strongly Increase": return "bg-green-600 text-white";
      case "Increase": return "bg-green-500 text-white";
      case "Maintain": return "bg-yellow-500 text-white";
      case "Decrease / Re-evaluate": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getSuggestedBudgetChange = (current: number, recommendation: string) => {
    switch (recommendation) {
      case "Strongly Increase": return current * 1.5;
      case "Increase": return current * 1.25;
      case "Decrease / Re-evaluate": return current * 0.7;
      default: return current;
    }
  };

  const getEfficiencyScore = (roas: number) => {
    if (roas >= 3) return 100;
    if (roas >= 2) return 80;
    if (roas >= 1.5) return 60;
    if (roas >= 1) return 40;
    return 20;
  };

  // Sort by ROAS for better optimization display
  const sortedData = [...data].sort((a, b) => b.roas - a.roas);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Budget Optimization Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedData.map((item) => {
              const suggestedBudget = getSuggestedBudgetChange(item.spend, item.budgetRecommendation);
              const budgetChange = suggestedBudget - item.spend;
              const budgetChangePercent = item.spend > 0 ? (budgetChange / item.spend) * 100 : 0;
              const efficiencyScore = getEfficiencyScore(item.roas);
              
              return (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getRecommendationIcon(item.budgetRecommendation)}
                      <div>
                        <h3 className="font-semibold">{item.channel}</h3>
                        <p className="text-sm text-gray-600">{item.campaignName}</p>
                      </div>
                    </div>
                    <Badge className={getRecommendationColor(item.budgetRecommendation)}>
                      {item.budgetRecommendation}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Budget</p>
                      <p className="font-semibold">${item.spend.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Suggested Budget</p>
                      <p className="font-semibold">${suggestedBudget.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Change</p>
                      <p className={`font-semibold ${budgetChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {budgetChange >= 0 ? '+' : ''}${budgetChange.toFixed(2)} ({budgetChangePercent.toFixed(1)}%)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Current ROAS</p>
                      <p className="font-semibold">{item.roas.toFixed(2)}x</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Efficiency Score</span>
                      <span>{efficiencyScore}%</span>
                    </div>
                    <Progress value={efficiencyScore} className="h-2" />
                  </div>

                  <div className="text-sm text-gray-600">
                    {item.budgetRecommendation === "Strongly Increase" && 
                      "🚀 This channel is performing exceptionally well. Consider increasing budget significantly to maximize returns."}
                    {item.budgetRecommendation === "Increase" && 
                      "📈 This channel shows good performance. A moderate budget increase could yield better results."}
                    {item.budgetRecommendation === "Maintain" && 
                      "✅ This channel is performing adequately. Maintain current budget while monitoring performance."}
                    {item.budgetRecommendation === "Decrease / Re-evaluate" && 
                      "⚠️ This channel is underperforming. Consider reducing budget or optimizing the campaign strategy."}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {data.filter(item => item.budgetRecommendation.includes("Increase")).length}
              </p>
              <p className="text-sm text-gray-600">Channels to Scale Up</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {data.filter(item => item.budgetRecommendation === "Maintain").length}
              </p>
              <p className="text-sm text-gray-600">Channels to Maintain</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">
                {data.filter(item => item.budgetRecommendation.includes("Decrease")).length}
              </p>
              <p className="text-sm text-gray-600">Channels to Optimize</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetOptimizer;
