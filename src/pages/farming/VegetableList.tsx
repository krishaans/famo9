import React from 'react';
import VegetableCard from '../../components/farming/VegetableCard';
import { farmingGuides } from '../../data/farmingGuides';

const VegetableList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">How to Farm</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select a vegetable to learn detailed farming instructions from land preparation to harvesting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {farmingGuides.map((vegetable) => (
          <VegetableCard key={vegetable.id} vegetable={vegetable} />
        ))}
      </div>
    </div>
  );
};

export default VegetableList;