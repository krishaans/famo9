import React from 'react';
import { useNavigate } from 'react-router-dom';
import { coreFeatures } from '../../constants/features';

const CoreFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-6 font-codec">Core Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {coreFeatures.map((feature) => (
          <button
            key={feature.name}
            onClick={() => navigate(feature.path)}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <span className="font-codec text-lg text-gray-800">{feature.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};