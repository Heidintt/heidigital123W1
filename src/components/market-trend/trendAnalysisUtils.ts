
import { TrendData } from "./MarketTrendAnalyzerTool";

interface SpikePoint {
  date: string;
  value: number;
  zScore: number;
  isSpike: boolean;
}

export const detectSpikes = (
  data: TrendData[], 
  keywords: string[], 
  window: number = 7, 
  threshold: number = 2.0
): { [keyword: string]: SpikePoint[] } => {
  const results: { [keyword: string]: SpikePoint[] } = {};
  
  keywords.forEach(keyword => {
    const values = data.map(d => Number(d[keyword]) || 0);
    const spikes: SpikePoint[] = [];
    
    for (let i = 0; i < values.length; i++) {
      const windowStart = Math.max(0, i - window + 1);
      const windowValues = values.slice(windowStart, i + 1);
      
      if (windowValues.length < 2) {
        spikes.push({
          date: data[i].date,
          value: values[i],
          zScore: 0,
          isSpike: false
        });
        continue;
      }
      
      // Calculate rolling mean and standard deviation
      const mean = windowValues.reduce((a, b) => a + b, 0) / windowValues.length;
      const variance = windowValues.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / windowValues.length;
      const stdDev = Math.sqrt(variance);
      
      // Calculate Z-score
      const zScore = stdDev > 0 ? (values[i] - mean) / stdDev : 0;
      const isSpike = Math.abs(zScore) > threshold;
      
      spikes.push({
        date: data[i].date,
        value: values[i],
        zScore,
        isSpike
      });
    }
    
    results[keyword] = spikes;
  });
  
  return results;
};

export const calculateTrendDirection = (values: number[]): 'up' | 'down' | 'stable' => {
  if (values.length < 2) return 'stable';
  
  const recentValues = values.slice(-7); // Last 7 days
  const previousValues = values.slice(-14, -7); // Previous 7 days
  
  if (recentValues.length === 0 || previousValues.length === 0) return 'stable';
  
  const recentAvg = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
  const previousAvg = previousValues.reduce((a, b) => a + b, 0) / previousValues.length;
  
  const change = ((recentAvg - previousAvg) / previousAvg) * 100;
  
  if (change > 5) return 'up';
  if (change < -5) return 'down';
  return 'stable';
};

export const calculateVolatility = (values: number[]): number => {
  if (values.length < 2) return 0;
  
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
  return Math.sqrt(variance);
};

export const findPeaksAndValleys = (values: number[]): { peaks: number[]; valleys: number[] } => {
  const peaks: number[] = [];
  const valleys: number[] = [];
  
  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] > values[i - 1] && values[i] > values[i + 1]) {
      peaks.push(i);
    } else if (values[i] < values[i - 1] && values[i] < values[i + 1]) {
      valleys.push(i);
    }
  }
  
  return { peaks, valleys };
};
