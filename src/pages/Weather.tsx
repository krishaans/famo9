import React from 'react';
import Header from '../components/Header';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

const weatherData = {
  current: {
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
  },
  forecast: [
    { day: 'Tomorrow', temp: 29, condition: 'Sunny' },
    { day: 'Wednesday', temp: 27, condition: 'Rain' },
    { day: 'Thursday', temp: 28, condition: 'Cloudy' },
    { day: 'Friday', temp: 30, condition: 'Sunny' },
  ],
  farmingTips: [
    'Consider early morning irrigation to minimize water loss',
    'Watch for potential pest activity in humid conditions',
    'Good day for outdoor farming activities',
    'Plan indoor tasks for afternoon showers',
  ],
};

const Weather: React.FC = () => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-yellow-500" />;
      case 'rain':
        return <CloudRain className="w-12 h-12 text-blue-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-12 h-12 text-gray-500" />;
      default:
        return <Sun className="w-12 h-12 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Weather Forecast</h1>

        {/* Current Weather */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Current Weather</h2>
              <p className="text-4xl font-bold text-primary">{weatherData.current.temp}°C</p>
              <p className="text-gray-600">{weatherData.current.condition}</p>
            </div>
            {getWeatherIcon(weatherData.current.condition)}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Wind className="text-blue-500" />
              <span>Wind: {weatherData.current.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudRain className="text-blue-500" />
              <span>Humidity: {weatherData.current.humidity}%</span>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <h3 className="font-semibold mb-2">{day.day}</h3>
              {getWeatherIcon(day.condition)}
              <p className="text-xl font-bold mt-2">{day.temp}°C</p>
              <p className="text-gray-600">{day.condition}</p>
            </div>
          ))}
        </div>

        {/* Farming Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Today's Farming Tips</h2>
          <ul className="space-y-2">
            {weatherData.farmingTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;