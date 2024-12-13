import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const historicalData = [
  { month: 'Jan', price: 120, demand: 80, supply: 70 },
  { month: 'Feb', price: 135, demand: 85, supply: 75 },
  { month: 'Mar', price: 150, demand: 90, supply: 80 },
  { month: 'Apr', price: 140, demand: 88, supply: 85 },
  { month: 'May', price: 160, demand: 92, supply: 78 },
  { month: 'Jun', price: 175, demand: 95, supply: 82 },
];

const weatherData = [
  { month: 'Jan', rainfall: 120, temperature: 25, humidity: 75 },
  { month: 'Feb', rainfall: 100, temperature: 26, humidity: 70 },
  { month: 'Mar', rainfall: 140, temperature: 24, humidity: 80 },
  { month: 'Apr', rainfall: 80, temperature: 27, humidity: 65 },
  { month: 'May', rainfall: 60, temperature: 28, humidity: 60 },
  { month: 'Jun', rainfall: 90, temperature: 26, humidity: 70 },
];

const marketTrends = [
  { month: 'Jan', organic: 180, conventional: 120 },
  { month: 'Feb', organic: 200, conventional: 130 },
  { month: 'Mar', organic: 220, conventional: 140 },
  { month: 'Apr', organic: 240, conventional: 150 },
  { month: 'May', organic: 260, conventional: 160 },
  { month: 'Jun', organic: 280, conventional: 170 },
];

export const PredictionCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Price Trends */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Price Trends</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#0b4d25"
                strokeWidth={2}
                dot={{ fill: '#19872c' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Supply and Demand */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Supply & Demand Analysis</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="demand"
                stackId="1"
                stroke="#0b4d25"
                fill="#0b4d25"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="supply"
                stackId="1"
                stroke="#19872c"
                fill="#19872c"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weather Impact */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Weather Impact</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rainfall" fill="#0b4d25" />
              <Bar dataKey="humidity" fill="#19872c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Organic vs Conventional Prices</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="organic"
                stroke="#0b4d25"
                strokeWidth={2}
                dot={{ fill: '#0b4d25' }}
              />
              <Line
                type="monotone"
                dataKey="conventional"
                stroke="#19872c"
                strokeWidth={2}
                dot={{ fill: '#19872c' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};