
export interface MarketingChannel {
  id: string;
  channel: string;
  campaignName: string;
  spend: number;
  clicks: number;
  conversions: number;
  revenue: number;
  customers: number;
}

export interface CalculatedMetrics extends MarketingChannel {
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

// Safe division helper function
const safeDivide = (numerator: number, denominator: number): number => {
  return denominator > 0 ? numerator / denominator : 0;
};

export const calculateMetrics = (channels: MarketingChannel[]): CalculatedMetrics[] => {
  return channels.map(channel => {
    // Safe calculations with fallbacks
    const roas = safeDivide(channel.revenue, channel.spend);
    const cpl = safeDivide(channel.spend, channel.conversions);
    const arpc = safeDivide(channel.revenue, channel.customers);
    const leadConversionRate = safeDivide(channel.conversions, channel.clicks);
    const customerConversionRate = safeDivide(channel.customers, channel.clicks);
    const cpc = safeDivide(channel.spend, channel.clicks);
    const cac = safeDivide(channel.spend, channel.customers);
    const roi = channel.spend > 0 ? (channel.revenue - channel.spend) / channel.spend : 0;

    // Budget recommendation logic
    let budgetRecommendation = "Maintain";
    if (roi > 1) budgetRecommendation = "Strongly Increase";
    else if (roi > 0.5) budgetRecommendation = "Increase";
    else if (roi < 0) budgetRecommendation = "Decrease / Re-evaluate";

    return {
      ...channel,
      roas,
      cpl,
      arpc,
      leadConversionRate,
      customerConversionRate,
      cpc,
      cac,
      roi,
      budgetRecommendation
    };
  });
};

export const defaultChannels: MarketingChannel[] = [
  {
    id: "1",
    channel: "Google Ads",
    campaignName: "Search Campaign",
    spend: 1000,
    clicks: 500,
    conversions: 50,
    revenue: 2000,
    customers: 25
  },
  {
    id: "2",
    channel: "Facebook Ads",
    campaignName: "Brand Awareness",
    spend: 800,
    clicks: 400,
    conversions: 30,
    revenue: 1200,
    customers: 15
  }
];

export const exportToCSV = (data: CalculatedMetrics[]) => {
  const headers = [
    "Channel",
    "Campaign Name",
    "Spend",
    "Clicks",
    "Conversions",
    "Revenue",
    "Customers",
    "ROI (%)",
    "ROAS",
    "CPL",
    "ARPC",
    "Lead Conversion Rate (%)",
    "Customer Conversion Rate (%)",
    "CPC",
    "CAC",
    "Budget Recommendation"
  ];

  const csvContent = [
    headers.join(","),
    ...data.map(item => [
      item.channel,
      item.campaignName,
      item.spend,
      item.clicks,
      item.conversions,
      item.revenue,
      item.customers,
      (item.roi * 100).toFixed(2),
      item.roas.toFixed(2),
      item.cpl.toFixed(2),
      item.arpc.toFixed(2),
      (item.leadConversionRate * 100).toFixed(2),
      (item.customerConversionRate * 100).toFixed(2),
      item.cpc.toFixed(2),
      item.cac.toFixed(2),
      item.budgetRecommendation
    ].join(","))
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "roi-calculator-data.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
