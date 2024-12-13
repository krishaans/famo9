import React from 'react';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import MainFeatures from '../components/home/MainFeatures';
import CoreFeatures from '../components/home/CoreFeatures';
import ProFeatures from '../components/home/ProFeatures';
import ComingFeatures from '../components/home/ComingFeatures';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <Hero />
      <div className="container mx-auto px-4">
        <div className="py-16 space-y-16">
          <MainFeatures />
          <CoreFeatures />
          <ProFeatures />
          <ComingFeatures />
        </div>
      </div>
    </div>
  );
};

export default Home;