import React from 'react';
import { comingFeatures } from '../../constants/features';

const ComingFeatures: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6 font-codec">Coming Soon</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {comingFeatures.map((feature) => (
          <div
            key={feature.name}
            className="p-6 bg-white rounded-xl shadow-lg border-2 border-dashed border-primary/30"
          >
            <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-codec text-lg text-gray-800 text-center mb-2">{feature.name}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};