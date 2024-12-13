import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import PriceChart from '../components/PriceChart';

const generateRandomPriceData = () => {
  const data = [];
  const today = new Date();
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString(),
      price: Math.floor(Math.random() * 300) + 100
    });
  }
  return data;
};

const vegetables = [
  { name: 'Carrot', price: 120, unit: 'Rs/Kg', trend: 'up' },
  { name: 'Tomato', price: 180, unit: 'Rs/Kg', trend: 'down' },
  { name: 'Potato', price: 250, unit: 'Rs/Kg', trend: 'stable' },
  { name: 'Beans', price: 300, unit: 'Rs/Kg', trend: 'up' },
  { name: 'Cabbage', price: 160, unit: 'Rs/Kg', trend: 'down' },
  { name: 'Leeks', price: 200, unit: 'Rs/Kg', trend: 'stable' },
];

const EconomicCenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVegetable, setSelectedVegetable] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => window.history.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="text-primary" size={24} />
          </button>
          <h2 className="text-4xl font-bold text-primary capitalize">
            {id?.replace('-', ' ')} Economic Center
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Current Prices</h3>
            <div className="grid gap-4">
              {vegetables.map((veg) => (
                <button
                  key={veg.name}
                  onClick={() => setSelectedVegetable(veg.name)}
                  className="w-full text-left p-6 rounded-lg border-2 border-gray-100 hover:border-secondary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-semibold text-gray-800">{veg.name}</span>
                      <div className="text-sm text-gray-500 mt-1">
                        Trend: {veg.trend}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {veg.price} {veg.unit}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            {selectedVegetable ? (
              <PriceChart
                data={generateRandomPriceData()}
                vegetableName={selectedVegetable}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a vegetable to view price trends
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicCenter;