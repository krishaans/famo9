import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920",
    text: "Vision: To empower farmers and revolutionize agriculture for a sustainable and profitable future."
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920",
    text: "Mission: To create an app that addresses farming challenges, ensures fair pricing, and improves the agricultural ecosystem."
  }
];

const HomeCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <p className="text-2xl font-semibold text-center max-w-3xl">
              {slide.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;