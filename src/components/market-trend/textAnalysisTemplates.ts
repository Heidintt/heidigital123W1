
export interface AnalysisTemplates {
  trendDirection: {
    increasing: string[];
    decreasing: string[];
    stable: string[];
  };
  spikeAnalysis: {
    noSpikes: string[];
    fewSpikes: string[];
    manySpikes: string[];
  };
  volatility: {
    low: string[];
    medium: string[];
    high: string[];
  };
  prediction: {
    bullish: string[];
    bearish: string[];
    neutral: string[];
  };
  recommendations: {
    buy: string[];
    sell: string[];
    hold: string[];
  };
}

export const analysisTemplates: AnalysisTemplates = {
  trendDirection: {
    increasing: [
      "The keyword shows a strong upward trend with consistent growth",
      "Interest in this keyword has been steadily climbing",
      "We observe a positive trajectory with sustained momentum",
      "The trend data reveals an encouraging upward movement"
    ],
    decreasing: [
      "The keyword demonstrates a declining trend pattern",
      "Interest appears to be waning with a downward trajectory",
      "We see a notable decrease in search volume over time",
      "The trend shows weakening momentum"
    ],
    stable: [
      "The keyword maintains relatively stable interest levels",
      "Search volume has remained consistent without major fluctuations",
      "The trend shows stability with minor variations",
      "Interest levels have plateaued at current levels"
    ]
  },
  spikeAnalysis: {
    noSpikes: [
      "No significant spikes were detected during this period",
      "The trend remained smooth without notable anomalies",
      "Search interest showed consistent patterns without sudden surges"
    ],
    fewSpikes: [
      "A few notable spikes indicate moments of heightened interest",
      "Several peaks suggest periodic bursts of attention",
      "Occasional spikes reveal intermittent viral moments"
    ],
    manySpikes: [
      "Multiple significant spikes indicate high volatility and viral potential",
      "Frequent surges suggest strong market responsiveness",
      "The keyword shows explosive growth patterns with regular peaks"
    ]
  },
  volatility: {
    low: [
      "with low volatility indicating predictable behavior",
      "showing stable and predictable patterns",
      "with minimal fluctuations suggesting steady interest"
    ],
    medium: [
      "with moderate volatility reflecting normal market dynamics",
      "showing balanced fluctuations within expected ranges",
      "displaying typical market variations"
    ],
    high: [
      "with high volatility indicating unpredictable swings",
      "showing dramatic fluctuations requiring careful monitoring",
      "displaying extreme variations that suggest market uncertainty"
    ]
  },
  prediction: {
    bullish: [
      "The forecast suggests continued growth in the coming period",
      "Predictions indicate an optimistic outlook with potential for expansion",
      "Future projections show promising upward momentum"
    ],
    bearish: [
      "The forecast indicates potential decline in interest",
      "Predictions suggest a cooling period ahead",
      "Future projections show weakening momentum"
    ],
    neutral: [
      "The forecast suggests stable continuation of current trends",
      "Predictions indicate steady state maintenance",
      "Future projections show balanced outlook"
    ]
  },
  recommendations: {
    buy: [
      "This presents a potential opportunity for investment or focus",
      "Consider increasing attention and resources for this keyword",
      "The data suggests favorable conditions for strategic investment"
    ],
    sell: [
      "Consider reducing focus or reallocating resources",
      "The trend suggests it may be time to pivot strategy",
      "Current data indicates potential for strategic exit"
    ],
    hold: [
      "Maintain current strategy while monitoring developments",
      "Continue steady approach with regular reassessment",
      "The situation warrants patience and careful observation"
    ]
  }
};
