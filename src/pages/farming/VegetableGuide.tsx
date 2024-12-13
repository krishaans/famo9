import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FarmingSteps from '../../components/farming/FarmingSteps';
import { farmingGuides } from '../../data/farmingGuides';

const VegetableGuide: React.FC = () => {
  const { vegetableId } = useParams<{ vegetableId: string }>();
  const vegetable = farmingGuides.find(v => v.id === vegetableId);

  if (!vegetable) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Vegetable not found</h2>
          <Link to="/how-to-farm" className="text-primary hover:text-secondary">
            Return to vegetable list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/how-to-farm"
        className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8"
      >
        <ArrowLeft size={20} />
        <span>Back to vegetables</span>
      </Link>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
        <div className="relative h-[400px]">
          <img
            src={vegetable.image}
            alt={vegetable.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{vegetable.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{vegetable.description}</p>
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <strong>Climate:</strong> {vegetable.climate}
            </div>
            <div>
              <strong>Season:</strong> {vegetable.season}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Farming Instructions</h2>
        <FarmingSteps steps={vegetable.steps} />
      </div>
    </div>
  );
};

export default VegetableGuide;