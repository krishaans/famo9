import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { VegetablePrediction } from '../../types/predictions';

interface PredictionCardProps {
  prediction: VegetablePrediction;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const getTrendIcon = () => {
    switch (prediction.trend) {
      case 'up':
        return <TrendingUp className="text-green-500" />;
      case 'down':
        return <TrendingDown className="text-red-500" />;
      default:
        return <Minus className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-primary">{prediction.name}</h3>
        {getTrendIcon()}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Current Price</p>
            <p className="text-lg font-semibold">Rs. {prediction.currentPrice}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Predicted Price</p>
            <p className="text-lg font-semibold">Rs. {prediction.predictedPrice}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-500">Confidence</span>
            <span className="text-sm font-semibold">{prediction.confidence}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2"
              style={{ width: `${prediction.confidence}%` }}
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Recommendation</p>
          <p className="text-gray-700">{prediction.recommendation}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Market Demand</p>
            <p className="font-semibold capitalize">{prediction.marketDemand}</p>
          </div>
          <div>
            <p className="text-gray-500">Best Planting</p>
            <p className="font-semibold">{prediction.bestPlantingMonth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;