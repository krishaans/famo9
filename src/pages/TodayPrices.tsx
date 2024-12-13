import React from 'react';
import Header from '../components/Header';
import SriLankaMap from '../components/SriLankaMap';

const TodayPrices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Today's Market Prices</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select an economic center from the map below to view current vegetable prices and market information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-2xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Economic Centers of Sri Lanka
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our network of economic centers provides up-to-date pricing information and connects farmers directly with buyers.
            </p>
          </div>
          <SriLankaMap />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Latest Updates</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Dambulla prices updated 5 minutes ago
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Meegoda prices updated 10 minutes ago
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                Narahenpita prices updated 1 hour ago
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Market Trends</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">🔼 Carrot prices rising</li>
              <li className="text-gray-700">🔽 Tomato prices falling</li>
              <li className="text-gray-700">➡️ Potato prices stable</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Trading Hours</h3>
            <div className="space-y-2 text-gray-700">
              <p>Monday - Friday: 5:00 AM - 6:00 PM</p>
              <p>Saturday: 5:00 AM - 2:00 PM</p>
              <p>Sunday: 5:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPrices;