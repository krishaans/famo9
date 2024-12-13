import React from 'react';
import { useNavigate } from 'react-router-dom';
import { proFeatures } from '../../constants/features';

const ProFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-codec mb-4">Pro Features</h2>
        <p className="text-xl">Unlock advanced features for 2000 LKR per month</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {proFeatures.map((feature) => (
          <button
            key={feature.name}
            onClick={() => navigate(feature.path)}
            className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <feature.icon className="w-8 h-8 mx-auto mb-4" />
            <span className="font-codec text-lg">{feature.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};