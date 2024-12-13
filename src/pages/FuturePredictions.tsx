import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Lock } from 'lucide-react';
import Header from '../components/Header';
import PredictionCard from '../components/predictions/PredictionCard';
import ProFeatureModal from '../components/predictions/ProFeatureModal';
import { PredictionCharts } from '../components/predictions/PredictionCharts';
import { usePredictions } from '../hooks/usePredictions';

const FuturePredictions: React.FC = () => {
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const { predictions, isTrialActive, startTrial, getTrialTimeLeft } = usePredictions();
  const [selectedVegetable, setSelectedVegetable] = useState<string | null>(null);

  const handleStartTrial = () => {
    startTrial();
    setIsProModalOpen(false);
  };

  const trialTimeLeft = getTrialTimeLeft();
  const daysLeft = Math.ceil(trialTimeLeft / (1000 * 60 * 60 * 24));

  if (!isTrialActive) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-light">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">
              Unlock Future Predictions
            </h1>
            <p className="text-gray-600 mb-8">
              Get access to advanced market predictions and optimize your farming decisions
            </p>
            <button
              onClick={() => setIsProModalOpen(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Try Pro Features
            </button>
          </div>
        </div>

        <Dialog.Root open={isProModalOpen} onOpenChange={setIsProModalOpen}>
          <ProFeatureModal
            onStartTrial={handleStartTrial}
            onClose={() => setIsProModalOpen(false)}
          />
        </Dialog.Root>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">
              Future Predictions
            </h1>
            <p className="text-gray-600">
              Trial Period: {daysLeft} days remaining
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {predictions.map((prediction) => (
            <button
              key={prediction.id}
              onClick={() => setSelectedVegetable(prediction.id)}
              className="text-left transition-transform hover:-translate-y-1"
            >
              <PredictionCard prediction={prediction} />
            </button>
          ))}
        </div>

        {selectedVegetable && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Detailed Market Analysis
            </h2>
            <PredictionCharts />
          </div>
        )}
      </div>
    </div>
  );
};

export default FuturePredictions;