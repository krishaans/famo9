import React from 'react';
import { Cultivation } from '../../types/cultivation';
import { Calendar, Droplets, Leaf, TestTube } from 'lucide-react';

interface CultivationListProps {
  cultivations: Cultivation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CultivationList: React.FC<CultivationListProps> = ({
  cultivations,
  selectedId,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Your Cultivations</h2>
      <div className="space-y-4">
        {cultivations.map((cultivation) => (
          <button
            key={cultivation.id}
            onClick={() => onSelect(cultivation.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedId === cultivation.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-100 hover:border-secondary hover:shadow-md'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {cultivation.vegetableType} by {cultivation.username}
                </h3>
                <p className="text-sm text-gray-500">{cultivation.genre}</p>
                <p className="text-sm text-gray-500">Started: {cultivation.startDate}</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-blue-500" title="Watering">
                  <Droplets size={16} />
                  <span className="text-xs">{cultivation.wateringInterval}d</span>
                </div>
                <div className="flex items-center gap-1 text-green-500" title="Fertilizer">
                  <Leaf size={16} />
                  <span className="text-xs">{cultivation.fertilizerInterval}d</span>
                </div>
                <div className="flex items-center gap-1 text-red-500" title="Medicine">
                  <TestTube size={16} />
                  <span className="text-xs">{cultivation.medicineInterval}d</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CultivationList;