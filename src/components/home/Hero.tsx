import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920"
          alt="Farm"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold font-codec mb-8">
            Vision
          </h1>
          <p className="text-2xl max-w-3xl mx-auto mb-12">
            To empower farmers and revolutionize agriculture for a sustainable and profitable future.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-6xl font-bold font-codec mb-8">
            Mission
          </h2>
          <p className="text-2xl max-w-3xl mx-auto">
            To create an app that addresses farming challenges, ensures fair pricing, and improves the agricultural ecosystem.
          </p>
        </motion.div>
      </div>
    </div>
  );
};