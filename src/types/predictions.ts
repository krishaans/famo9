export interface VegetablePrediction {
  id: string;
  name: string;
  currentPrice: number;
  predictedPrice: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
  recommendation: string;
  marketDemand: 'high' | 'medium' | 'low';
  bestPlantingMonth: string;
  harvestDuration: number;
  weatherSuitability: number;
}

export interface PredictionFactors {
  weather: {
    temperature: number;
    rainfall: number;
    humidity: number;
  };
  market: {
    supply: 'high' | 'medium' | 'low';
    demand: 'high' | 'medium' | 'low';
    priceStability: number;
  };
  seasonal: {
    isIdealSeason: boolean;
    monthsUntilIdealSeason: number;
  };
}