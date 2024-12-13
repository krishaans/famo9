import React from 'react';
import Header from '../components/Header';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Organic Tomato Seeds',
    price: 250,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=300',
    category: 'Seeds',
  },
  {
    id: 2,
    name: 'Natural Fertilizer',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1615920292118-dadf3b5ef141?w=300',
    category: 'Fertilizers',
  },
  {
    id: 3,
    name: 'Garden Tools Set',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=300',
    category: 'Tools',
  },
  {
    id: 4,
    name: 'Pest Control Spray',
    price: 850,
    image: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=300',
    category: 'Protection',
  },
];

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Farm Shop</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
            <ShoppingCart size={20} />
            <span>Cart (0)</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-primary font-semibold">{product.category}</span>
                <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl font-bold text-primary">
                    Rs. {product.price}
                  </span>
                  <button className="bg-primary text-white px-3 py-1 rounded hover:bg-secondary transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Coming Soon</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• More seed varieties</li>
            <li>• Specialized farming equipment</li>
            <li>• Organic pesticides</li>
            <li>• Bulk ordering options</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;