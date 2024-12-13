import { useState, useEffect } from 'react';
import type { VegetablePrediction, PredictionFactors } from '../types/predictions';

const STORAGE_KEY = 'famo-predictions-trial';

// Simulated prediction data
const predictions: VegetablePrediction[] = [
  {
    id: '1',
    name: 'Carrot',
    currentPrice: 120,
    predictedPrice: 150,
    confidence: 85,
    trend: 'up',
    recommendation: 'Highly recommended for planting now',
    marketDemand: 'high',
    bestPlantingMonth: 'March',
    harvestDuration: 75,
    weatherSuitability: 90
  },
  {
    id: '2',
    name: 'Tomato',
    currentPrice: 180,
    predictedPrice: 160,
    confidence: 75,
    trend: 'down',
    recommendation: 'Wait for 2 weeks before planting',
    marketDemand: 'medium',
    bestPlantingMonth: 'April',
    harvestDuration: 60,
    weatherSuitability: 85
  },
  // Add more vegetables...
];

export const usePredictions = () => {
  const [isTrialActive, setIsTrialActive] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;
    const { expiryDate } = JSON.parse(saved);
    return new Date(expiryDate) > new Date();
  });

  const startTrial = () => {
    const trialData = {
      startDate: new Date().toISOString(),
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trialData));
    setIsTrialActive(true);
  };

  const getTrialTimeLeft = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return 0;
    const { expiryDate } = JSON.parse(saved);
    return Math.max(0, new Date(expiryDate).getTime() - Date.now());
  };

  return {
    predictions,
    isTrialActive,
    startTrial,
    getTrialTimeLeft,
  };
};