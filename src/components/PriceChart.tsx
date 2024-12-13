import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface PriceChartProps {
  data: Array<{ date: string; price: number }>;
  vegetableName: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, vegetableName }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Price Trend: {vegetableName}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
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
  );
};

export default PriceChart;