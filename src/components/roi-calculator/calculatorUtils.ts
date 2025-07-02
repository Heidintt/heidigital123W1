
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
  cpl: number;
  arpc: number;
  leadConversionRate: number;
  customerConversionRate: number;
  cpc: number;
  cac: number;
  roi: number;
  budgetRecommendation: string;
}

// Enhanced safe divide function to handle edge cases properly
export const safeDivide = (numerator: number, denominator: number): number => {
  if (!denominator || denominator === 0) return 0;
  const result = numerator / denominator;
  if (!isFinite(result) || isNaN(result)) return 0;
  return result;
};

// Budget optimizer function
export const getBudgetRecommendation = (roi: number): string => {
  if (roi > 1.5) return "Strongly Increase";
  if (roi > 0.5) return "Increase";
  if (roi < 0) return "Decrease / Re-evaluate";
  return "Maintain";
};

export const calculateMetrics = (channels: MarketingChannel[]): CalculatedMetrics[] => {
  return channels.map(channel => ({
    ...channel,
    roas: safeDivide(channel.revenue, channel.spend),
    cpl: safeDivide(channel.spend, channel.conversions), // Cost Per Lead
    arpc: safeDivide(channel.revenue, channel.customers),
    leadConversionRate: safeDivide(channel.conversions, channel.clicks),
    customerConversionRate: safeDivide(channel.customers, channel.clicks),
    cpc: safeDivide(channel.spend, channel.clicks),
    cac: safeDivide(channel.spend, channel.customers),
    roi: safeDivide((channel.revenue - channel.spend), channel.spend), // ROI = (Revenue - Cost) / Cost
    budgetRecommendation: getBudgetRecommendation(safeDivide((channel.revenue - channel.spend), channel.spend))
  }));
};

export const defaultChannels: MarketingChannel[] = [
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

export const exportToCSV = (calculatedData: CalculatedMetrics[]) => {
  const csvContent = [
    // Headers
    ["Channel", "Campaign", "Spend", "Clicks", "Leads", "Revenue", "Customers", "ROI", "ROAS", "CPL", "ARPC", "Lead Conv Rate", "Customer Conv Rate", "CPC", "CAC", "Budget Recommendation"].join(","),
    // Data rows
    ...calculatedData.map(row => [
      row.channel,
      row.campaignName,
      row.spend,
      row.clicks,
      row.conversions,
      row.revenue,
      row.customers,
      (row.roi * 100).toFixed(2) + "%",
      row.roas.toFixed(2),
      row.cpl.toFixed(2),
      row.arpc.toFixed(2),
      (row.leadConversionRate * 100).toFixed(2) + "%",
      (row.customerConversionRate * 100).toFixed(2) + "%",
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
