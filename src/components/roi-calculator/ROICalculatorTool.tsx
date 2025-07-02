
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Download, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ROICharts from "./ROICharts";
import ROIMetrics from "./ROIMetrics";
import BudgetOptimizer from "./BudgetOptimizer";

interface MarketingChannel {
  id: string;
  channel: string;
  campaignName: string;
  spend: number;
  clicks: number;
  conversions: number;
  revenue: number;
  customers: number;
}

interface CalculatedMetrics extends MarketingChannel {
  roas: number;
  cpa: number;
  arpc: number;
  conversionRate: number;
  cpc: number;
  cac: number;
  budgetRecommendation: string;
}

const defaultChannels: MarketingChannel[] = [
  {
    id: "1",
    channel: "SEO",
    campaignName: "Blog 2024",
    spend: 1000,
    clicks: 5000,
    conversions: 200,
    revenue: 5000,
    customers: 180
  },
  {
    id: "2",
    channel: "PPC",
    campaignName: "Google Ads",
    spend: 2000,
    clicks: 4000,
    conversions: 150,
    revenue: 7000,
    customers: 140
  },
  {
    id: "3",
    channel: "Social Media",
    campaignName: "FB Spring",
    spend: 1500,
    clicks: 6000,
    conversions: 250,
    revenue: 6000,
    customers: 230
  },
  {
    id: "4",
    channel: "Email",
    campaignName: "Newsletter Q1",
    spend: 800,
    clicks: 2000,
    conversions: 80,
    revenue: 2500,
    customers: 70
  },
  {
    id: "5",
    channel: "Display",
    campaignName: "Brand Awareness",
    spend: 500,
    clicks: 1000,
    conversions: 0,
    revenue: 0,
    customers: 0
  }
];

// Safe divide function to prevent division by zero
const safeDivide = (numerator: number, denominator: number): number => {
  if (!denominator || denominator === 0) return 0;
  return numerator / denominator;
};

// Budget optimizer function
const getBudgetRecommendation = (roas: number): string => {
  if (roas > 2.5) return "Strongly Increase";
  if (roas > 1.5) return "Increase";
  if (roas < 1) return "Decrease / Re-evaluate";
  return "Maintain";
};

const ROICalculatorTool = () => {
  const [channels, setChannels] = useState<MarketingChannel[]>(defaultChannels);
  const [calculatedData, setCalculatedData] = useState<CalculatedMetrics[]>([]);

  // Calculate metrics whenever channels change
  useEffect(() => {
    const calculated = channels.map(channel => ({
      ...channel,
      roas: safeDivide(channel.revenue, channel.spend),
      cpa: safeDivide(channel.spend, channel.conversions),
      arpc: safeDivide(channel.revenue, channel.customers),
      conversionRate: safeDivide(channel.conversions, channel.clicks),
      cpc: safeDivide(channel.spend, channel.clicks),
      cac: safeDivide(channel.spend, channel.customers),
      budgetRecommendation: getBudgetRecommendation(safeDivide(channel.revenue, channel.spend))
    }));
    setCalculatedData(calculated);
  }, [channels]);

  const addChannel = () => {
    const newChannel: MarketingChannel = {
      id: Date.now().toString(),
      channel: "New Channel",
      campaignName: "New Campaign",
      spend: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      customers: 0
    };
    setChannels([...channels, newChannel]);
  };

  const removeChannel = (id: string) => {
    setChannels(channels.filter(channel => channel.id !== id));
  };

  const updateChannel = (id: string, field: keyof MarketingChannel, value: string | number) => {
    setChannels(channels.map(channel => 
      channel.id === id ? { ...channel, [field]: value } : channel
    ));
  };

  const exportData = () => {
    const csvContent = [
      // Headers
      ["Channel", "Campaign", "Spend", "Clicks", "Conversions", "Revenue", "Customers", "ROAS", "CPA", "ARPC", "Conversion Rate", "CPC", "CAC", "Budget Recommendation"].join(","),
      // Data rows
      ...calculatedData.map(row => [
        row.channel,
        row.campaignName,
        row.spend,
        row.clicks,
        row.conversions,
        row.revenue,
        row.customers,
        row.roas.toFixed(2),
        row.cpa.toFixed(2),
        row.arpc.toFixed(2),
        (row.conversionRate * 100).toFixed(2) + "%",
        row.cpc.toFixed(2),
        row.cac.toFixed(2),
        row.budgetRecommendation
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roi-calculator-results.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Tabs defaultValue="input" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="input">Data Input</TabsTrigger>
          <TabsTrigger value="results">Results & Metrics</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="instructions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How to Use the Digital Marketing ROI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2">
                <li>Go to the <strong>Data Input</strong> tab and enter your marketing data</li>
                <li>Review calculated metrics in the <strong>Results & Metrics</strong> tab</li>
                <li>Analyze charts and graphs in the <strong>Dashboard</strong> tab</li>
                <li>Use the Budget Optimizer recommendations for future planning</li>
              </ol>
              
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Key Metrics Calculated:</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>ROAS (Return on Ad Spend)</strong> = Revenue ÷ Spend</li>
                  <li><strong>CPA (Cost Per Acquisition)</strong> = Spend ÷ Conversions</li>
                  <li><strong>ARPC (Average Revenue Per Customer)</strong> = Revenue ÷ Customers</li>
                  <li><strong>Conversion Rate</strong> = Conversions ÷ Clicks</li>
                  <li><strong>CPC (Cost Per Click)</strong> = Spend ÷ Clicks</li>
                  <li><strong>CAC (Customer Acquisition Cost)</strong> = Spend ÷ Customers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="input" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Marketing Channel Data</h2>
            <div className="space-x-2">
              <Button onClick={addChannel} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Channel
              </Button>
              <Button onClick={exportData} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {channels.map((channel, index) => (
              <Card key={channel.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">Channel {index + 1}</CardTitle>
                  {channels.length > 1 && (
                    <Button
                      onClick={() => removeChannel(channel.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor={`channel-${channel.id}`}>Channel Name</Label>
                      <Input
                        id={`channel-${channel.id}`}
                        value={channel.channel}
                        onChange={(e) => updateChannel(channel.id, 'channel', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`campaign-${channel.id}`}>Campaign Name</Label>
                      <Input
                        id={`campaign-${channel.id}`}
                        value={channel.campaignName}
                        onChange={(e) => updateChannel(channel.id, 'campaignName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`spend-${channel.id}`}>Spend ($)</Label>
                      <Input
                        id={`spend-${channel.id}`}
                        type="number"
                        value={channel.spend}
                        onChange={(e) => updateChannel(channel.id, 'spend', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`clicks-${channel.id}`}>Clicks</Label>
                      <Input
                        id={`clicks-${channel.id}`}
                        type="number"
                        value={channel.clicks}
                        onChange={(e) => updateChannel(channel.id, 'clicks', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`conversions-${channel.id}`}>Conversions</Label>
                      <Input
                        id={`conversions-${channel.id}`}
                        type="number"
                        value={channel.conversions}
                        onChange={(e) => updateChannel(channel.id, 'conversions', parseInt(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`revenue-${channel.id}`}>Revenue ($)</Label>
                      <Input
                        id={`revenue-${channel.id}`}
                        type="number"
                        value={channel.revenue}
                        onChange={(e) => updateChannel(channel.id, 'revenue', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`customers-${channel.id}`}>Customers</Label>
                      <Input
                        id={`customers-${channel.id}`}
                        type="number"
                        value={channel.customers}
                        onChange={(e) => updateChannel(channel.id, 'customers', parseInt(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results">
          <ROIMetrics data={calculatedData} />
          <div className="mt-6">
            <BudgetOptimizer data={calculatedData} />
          </div>
        </TabsContent>

        <TabsContent value="dashboard">
          <ROICharts data={calculatedData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ROICalculatorTool;
