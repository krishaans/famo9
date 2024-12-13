import React from 'react';
import type { FarmingStep } from '../../data/farmingGuides';

interface FarmingStepsProps {
  steps: FarmingStep[];
}

const FarmingSteps: React.FC<FarmingStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
          </div>
          
          <p className="text-gray-600 mb-4">{step.description}</p>
          
          {step.duration && (
            <div className="text-sm text-gray-500 mb-4">
              Duration: {step.duration}
            </div>
          )}
          
          {step.tips && step.tips.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2">Tips:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {step.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FarmingSteps;