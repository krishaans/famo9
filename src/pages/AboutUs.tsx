import React from 'react';
import Header from '../components/Header';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Famo is dedicated to revolutionizing agriculture in Sri Lanka by connecting farmers, buyers, and consumers through innovative technology solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower farmers with the tools and knowledge they need to succeed while ensuring fair prices and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;