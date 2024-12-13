import React from 'react';
import Header from '../components/Header';
import { AlertTriangle } from 'lucide-react';

const AnimalAlarm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Animal Alarm</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <AlertTriangle size={48} className="text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-primary mb-4">Coming Soon with IoT Devices!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're working on integrating IoT devices to help protect your crops from animal intrusions. 
            This feature will provide real-time alerts and monitoring capabilities to keep your farm safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalAlarm;