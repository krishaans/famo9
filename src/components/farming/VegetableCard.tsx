import React from 'react';
import { Link } from 'react-router-dom';
import type { VegetableGuide } from '../../data/farmingGuides';

interface VegetableCardProps {
  vegetable: VegetableGuide;
}

const VegetableCard: React.FC<VegetableCardProps> = ({ vegetable }) => {
  return (
    <Link
      to={`/how-to-farm/${vegetable.id}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={vegetable.image}
          alt={vegetable.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{vegetable.name}</h3>
        <p className="text-gray-600">{vegetable.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Climate: {vegetable.climate}</p>
          <p>Season: {vegetable.season}</p>
        </div>
      </div>
    </Link>
  );
};

export default VegetableCard;