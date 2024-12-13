import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mainFeatures } from '../../constants/features';

const MainFeatures: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {mainFeatures.map((feature) => (
        <button
          key={feature.name}
          onClick={() => navigate(feature.path)}
          className="p-6 bg-primary text-white rounded-xl hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1"
        >
          <feature.icon className="w-8 h-8 mx-auto mb-4" />
          <span className="font-codec text-lg">{feature.name}</span>
        </button>
      ))}
    </div>
  );
};