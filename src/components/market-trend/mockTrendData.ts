
import { TrendData } from "./MarketTrendAnalyzerTool";

const getDateRange = (timeframe: string) => {
  const today = new Date();
  let startDate = new Date();
  
  switch (timeframe) {
    case '7d':
      startDate.setDate(today.getDate() - 7);
      break;
    case '30d':
      startDate.setDate(today.getDate() - 30);
      break;
    case '90d':
      startDate.setDate(today.getDate() - 90);
      break;
    case '12m':
      startDate.setFullYear(today.getFullYear() - 1);
      break;
    default:
      startDate.setDate(today.getDate() - 90);
  }
  
  return { startDate, endDate: today };
};

const generateRealisticTrend = (keyword: string, days: number): number[] => {
  // Base patterns for different keywords
  const patterns: { [key: string]: { base: number; volatility: number; trend: number } } = {
    'AI': { base: 65, volatility: 15, trend: 0.1 },
    'ChatGPT': { base: 85, volatility: 20, trend: -0.05 },
    'Marketing Automation': { base: 45, volatility: 10, trend: 0.08 },
    'Machine Learning': { base: 55, volatility: 12, trend: 0.06 },
    'Digital Marketing': { base: 70, volatility: 8, trend: 0.02 },
    'SEO': { base: 60, volatility: 15, trend: 0.03 },
    'Social Media': { base: 75, volatility: 18, trend: -0.02 },
    'E-commerce': { base: 68, volatility: 14, trend: 0.04 }
  };
  
  const pattern = patterns[keyword] || { base: 50, volatility: 15, trend: 0 };
  const values: number[] = [];
  
  for (let i = 0; i < days; i++) {
    // Base trend
    const trendValue = pattern.base + (pattern.trend * i);
    
    // Add some randomness and seasonality
    const randomFactor = (Math.random() - 0.5) * pattern.volatility;
    const seasonalFactor = Math.sin((i / days) * 2 * Math.PI) * 5;
    
    // Occasional spikes (5% chance)
    const spikeChance = Math.random();
    const spikeFactor = spikeChance < 0.05 ? Math.random() * 30 : 0;
    
    let value = trendValue + randomFactor + seasonalFactor + spikeFactor;
    
    // Ensure values stay within 0-100 range
    value = Math.max(0, Math.min(100, value));
    values.push(Math.round(value));
  }
  
  return values;
};

export const generateMockTrendData = (keywords: string[], timeframe: string): TrendData[] => {
  const { startDate, endDate } = getDateRange(timeframe);
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  const data: TrendData[] = [];
  
  // Generate trend data for each keyword
  const keywordData: { [key: string]: number[] } = {};
  keywords.forEach(keyword => {
    keywordData[keyword] = generateRealisticTrend(keyword, days);
  });
  
  // Create data points for each day
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    
    const dataPoint: TrendData = {
      date: date.toISOString().split('T')[0]
    };
    
    keywords.forEach(keyword => {
      dataPoint[keyword] = keywordData[keyword][i];
    });
    
    data.push(dataPoint);
  }
  
  return data;
};
