
import { TrendData } from './MarketTrendAnalyzerTool';
import { analysisTemplates } from './textAnalysisTemplates';

interface AnalysisMetrics {
  trend: 'increasing' | 'decreasing' | 'stable';
  spikeLevel: 'noSpikes' | 'fewSpikes' | 'manySpikes';
  volatility: 'low' | 'medium' | 'high';
  prediction: 'bullish' | 'bearish' | 'neutral';
  recommendation: 'buy' | 'sell' | 'hold';
}

export function generateInsightSummary(
  keyword: string,
  data: TrendData[],
  spikeData: any
): string {
  if (!data.length) {
    return "Insufficient data available for analysis.";
  }

  const metrics = analyzeDataMetrics(keyword, data, spikeData);
  return constructSummary(keyword, metrics);
}

function analyzeDataMetrics(keyword: string, data: TrendData[], spikeData: any): AnalysisMetrics {
  const values = data.map(d => Number(d[keyword]) || 0);
  
  // Analyze trend direction
  const firstHalf = values.slice(0, Math.floor(values.length / 2));
  const secondHalf = values.slice(Math.floor(values.length / 2));
  const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  
  let trend: 'increasing' | 'decreasing' | 'stable';
  if (secondAvg > firstAvg * 1.15) {
    trend = 'increasing';
  } else if (secondAvg < firstAvg * 0.85) {
    trend = 'decreasing';
  } else {
    trend = 'stable';
  }

  // Analyze spikes
  const keywordSpikes = spikeData[keyword] || [];
  const spikeCount = keywordSpikes.filter((spike: any) => spike.isSpike).length;
  
  let spikeLevel: 'noSpikes' | 'fewSpikes' | 'manySpikes';
  if (spikeCount === 0) {
    spikeLevel = 'noSpikes';
  } else if (spikeCount <= 3) {
    spikeLevel = 'fewSpikes';
  } else {
    spikeLevel = 'manySpikes';
  }

  // Analyze volatility
  const average = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((acc, val) => acc + Math.pow(val - average, 2), 0) / values.length;
  const standardDeviation = Math.sqrt(variance);
  const coefficientOfVariation = standardDeviation / average;

  let volatility: 'low' | 'medium' | 'high';
  if (coefficientOfVariation < 0.2) {
    volatility = 'low';
  } else if (coefficientOfVariation < 0.5) {
    volatility = 'medium';
  } else {
    volatility = 'high';
  }

  // Simple prediction based on recent trend
  const recentValues = values.slice(-7);
  const previousValues = values.slice(-14, -7);
  const recentAvg = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
  const previousAvg = previousValues.reduce((a, b) => a + b, 0) / previousValues.length;

  let prediction: 'bullish' | 'bearish' | 'neutral';
  if (recentAvg > previousAvg * 1.1) {
    prediction = 'bullish';
  } else if (recentAvg < previousAvg * 0.9) {
    prediction = 'bearish';
  } else {
    prediction = 'neutral';
  }

  // Generate recommendation based on combined factors
  let recommendation: 'buy' | 'sell' | 'hold';
  if (trend === 'increasing' && prediction === 'bullish') {
    recommendation = 'buy';
  } else if (trend === 'decreasing' && prediction === 'bearish') {
    recommendation = 'sell';
  } else {
    recommendation = 'hold';
  }

  return { trend, spikeLevel, volatility, prediction, recommendation };
}

function constructSummary(keyword: string, metrics: AnalysisMetrics): string {
  const templates = analysisTemplates;
  
  // Randomly select templates for variety
  const getTrendTemplate = () => templates.trendDirection[metrics.trend][
    Math.floor(Math.random() * templates.trendDirection[metrics.trend].length)
  ];
  
  const getSpikeTemplate = () => templates.spikeAnalysis[metrics.spikeLevel][
    Math.floor(Math.random() * templates.spikeAnalysis[metrics.spikeLevel].length)
  ];
  
  const getVolatilityTemplate = () => templates.volatility[metrics.volatility][
    Math.floor(Math.random() * templates.volatility[metrics.volatility].length)
  ];
  
  const getPredictionTemplate = () => templates.prediction[metrics.prediction][
    Math.floor(Math.random() * templates.prediction[metrics.prediction].length)
  ];
  
  const getRecommendationTemplate = () => templates.recommendations[metrics.recommendation][
    Math.floor(Math.random() * templates.recommendations[metrics.recommendation].length)
  ];

  // Construct the summary
  const summary = `
**Analysis for "${keyword.toUpperCase()}"**

${getTrendTemplate()} ${getVolatilityTemplate()}. ${getSpikeTemplate()}.

${getPredictionTemplate()}. ${getRecommendationTemplate()}.

*This analysis is generated based on statistical patterns in the trend data and should be used alongside other market research.*
  `.trim();

  return summary;
}
