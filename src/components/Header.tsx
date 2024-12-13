import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../constants/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-4 text-3xl font-bold hover:opacity-90 transition-opacity">
            <img src="/src/assets/logo.svg" alt="Famo Logo" className="w-12 h-12" />
            <span className="font-codec tracking-wide">Famo.</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 px-3 rounded-lg transition-colors font-codec ${
                  location.pathname === item.path
                    ? 'bg-white/10'
                    : 'hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors font-codec ${
                    location.pathname === item.path
                      ? 'bg-white/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};