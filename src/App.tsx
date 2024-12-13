import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EconomicCenter from './pages/EconomicCenter';
import TodayPrices from './pages/TodayPrices';
import HowToFarm from './pages/HowToFarm';
import WaterReminder from './pages/WaterReminder';
import AnimalAlarm from './pages/AnimalAlarm';
import WorkerMarker from './pages/WorkerMarker';
import Weather from './pages/Weather';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import FuturePredictions from './pages/FuturePredictions';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Doctor from './pages/Doctor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/center/:id" element={<EconomicCenter />} />
        <Route path="/today-prices" element={<TodayPrices />} />
        <Route path="/how-to-farm/*" element={<HowToFarm />} />
        <Route path="/water-reminder" element={<WaterReminder />} />
        <Route path="/animal-alarm" element={<AnimalAlarm />} />
        <Route path="/worker-marker" element={<WorkerMarker />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/future-predictions" element={<FuturePredictions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;