import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const economicCenters = [
  { id: 'dambulla', name: 'Dambulla', lat: 7.8674, lng: 80.6509 },
  { id: 'thabuththegama', name: 'Thabuththegama', lat: 8.0376, lng: 80.3003 },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', lat: 6.9497, lng: 80.7891 },
  { id: 'kappetipola', name: 'Kappetipola', lat: 6.8667, lng: 80.9667 },
  { id: 'kurunduwaththa', name: 'Kurunduwaththa', lat: 7.2854, lng: 80.6334 },
  { id: 'welisara', name: 'Welisara', lat: 7.0281, lng: 79.9011 },
  { id: 'veyangoda', name: 'Veyangoda', lat: 7.1567, lng: 80.0623 },
  { id: 'narahenpita', name: 'Narahenpita', lat: 6.9108, lng: 79.8778 },
  { id: 'embilipitiya', name: 'Embilipitiya', lat: 6.3433, lng: 80.8571 },
  { id: 'meegoda', name: 'Meegoda', lat: 6.8527, lng: 80.0352 },
  { id: 'piliyandala', name: 'Piliyandala', lat: 6.7987, lng: 79.9207 },
  { id: 'rathmalana', name: 'Rathmalana', lat: 6.8193, lng: 79.8821 }
];

const SriLankaMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[700px] bg-gradient-to-b from-light to-white rounded-xl shadow-xl overflow-hidden">
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url(/src/assets/lk.svg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.2
      }} />
      <div className="relative z-10 h-full">
        {economicCenters.map((center) => (
          <button
            key={center.id}
            onClick={() => navigate(`/center/${center.id}`)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `${((center.lng - 79.5) / 2.5) * 100}%`,
              top: `${((7.9 - center.lat) / 2) * 100}%`
            }}
          >
            <div className="relative">
              <MapPin
                className="text-primary hover:text-secondary transition-colors"
                size={32}
              />
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-white px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
                <span className="text-primary font-semibold">{center.name}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SriLankaMap;