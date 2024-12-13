import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import type { PostFormData } from '../../types/market';

interface MarketPostFormProps {
  type: 'sell' | 'buy';
  onSubmit: (data: PostFormData) => void;
  onClose: () => void;
}

const vegetables = ['Carrot', 'Tomato', 'Potato', 'Beans', 'Cabbage', 'Leeks'];

const MarketPostForm: React.FC<MarketPostFormProps> = ({ type, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<PostFormData>({
    vegetableType: '',
    quantity: 0,
    price: 0,
    location: '',
    description: '',
    contactNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md">
        <Dialog.Title className="text-2xl font-bold text-primary mb-6">
          {type === 'sell' ? 'Create Sell Post' : 'Create Buy Request'}
        </Dialog.Title>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vegetable Type
            </label>
            <select
              value={formData.vegetableType}
              onChange={(e) => setFormData({ ...formData, vegetableType: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select vegetable...</option>
              {vegetables.map((veg) => (
                <option key={veg} value={veg}>{veg}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity (kg)
            </label>
            <input
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per kg (Rs)
            </label>
            <input
              type="number"
              min="1"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter your contact number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Add any additional details..."
            />
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </Dialog.Close>
            <button
              type="submit"
              className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors"
            >
              {type === 'sell' ? 'Create Post' : 'Submit Request'}
            </button>
          </div>
        </form>

        <Dialog.Close asChild>
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default MarketPostForm;