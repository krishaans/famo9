import React from 'react';
import Header from '../components/Header';
import { MessageSquare } from 'lucide-react';

const diseases = [
  {
    name: 'Early Blight',
    crops: ['Tomato', 'Potato'],
    symptoms: [
      'Dark brown spots on leaves',
      'Yellowing around spots',
      'Concentric rings in spots'
    ],
    prevention: [
      'Rotate crops every 2-3 years',
      'Remove infected plants',
      'Maintain good air circulation'
    ]
  },
  {
    name: 'Powdery Mildew',
    crops: ['Cucumber', 'Squash', 'Pumpkin'],
    symptoms: [
      'White powdery spots on leaves',
      'Yellowing leaves',
      'Stunted growth'
    ],
    prevention: [
      'Space plants properly',
      'Water at base of plants',
      'Use resistant varieties'
    ]
  },
  {
    name: 'Root Rot',
    crops: ['Most vegetables'],
    symptoms: [
      'Wilting despite moist soil',
      'Yellow leaves',
      'Brown, mushy roots'
    ],
    prevention: [
      'Improve soil drainage',
      'Avoid overwatering',
      'Use raised beds'
    ]
  }
];

const Doctor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Plant Doctor</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
            <MessageSquare size={20} />
            <span>AI Doctor (Coming Soon)</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {diseases.map((disease, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{disease.name}</h2>
              <p className="text-sm text-gray-500 mb-4">
                Affects: {disease.crops.join(', ')}
              </p>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Symptoms:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {disease.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Prevention:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {disease.prevention.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">AI Doctor - Coming Soon!</h2>
          <p className="text-gray-600 mb-4">
            Our AI-powered plant doctor is currently under training to help you diagnose and treat plant diseases more effectively. Simply describe your plant's symptoms, and our AI will:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Identify potential diseases</li>
            <li>Provide treatment recommendations</li>
            <li>Suggest preventive measures</li>
            <li>Offer real-time guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doctor;