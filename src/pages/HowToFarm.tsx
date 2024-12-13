import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import VegetableList from './farming/VegetableList';
import VegetableGuide from './farming/VegetableGuide';

const HowToFarm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <Routes>
        <Route index element={<VegetableList />} />
        <Route path=":vegetableId" element={<VegetableGuide />} />
      </Routes>
    </div>
  );
};

export default HowToFarm;