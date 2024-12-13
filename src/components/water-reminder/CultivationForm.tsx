import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { X } from 'lucide-react';
import { format } from 'date-fns';

interface CultivationFormProps {
  onSubmit: (cultivation: any) => void;
  onClose: () => void;
}

const vegetables = ['Pumpkin', 'Tomato', 'Carrot', 'Beans'];
const genres = ['Organic', 'Traditional', 'Hybrid'];

const CultivationForm: React.FC<CultivationFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    vegetableType: '',
    genre: '',
    startDate: format(new Date(), 'yyyy-MM-dd'),
    lastWateredDate: format(new Date(), 'yyyy-MM-dd'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: crypto.randomUUID(),
      wateringInterval: 3,
      fertilizerInterval: 21,
      medicineInterval: 14,
      events: [],
    });
    onClose();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md">
        <Dialog.Title className="text-2xl font-bold text-primary mb-6">
          Add New Cultivation
        </Dialog.Title>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vegetable Type
            </label>
            <Select.Root
              onValueChange={(value) => setFormData({ ...formData, vegetableType: value })}
            >
              <Select.Trigger className="w-full p-2 border rounded-md">
                {formData.vegetableType || 'Select vegetable...'}
              </Select.Trigger>
              <Select.Content className="bg-white p-2 rounded-md shadow-lg">
                {vegetables.map((veg) => (
                  <Select.Item
                    key={veg}
                    value={veg}
                    className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                  >
                    {veg}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Genre
            </label>
            <Select.Root
              onValueChange={(value) => setFormData({ ...formData, genre: value })}
            >
              <Select.Trigger className="w-full p-2 border rounded-md">
                {formData.genre || 'Select genre...'}
              </Select.Trigger>
              <Select.Content className="bg-white p-2 rounded-md shadow-lg">
                {genres.map((genre) => (
                  <Select.Item
                    key={genre}
                    value={genre}
                    className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                  >
                    {genre}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Watered Date
            </label>
            <input
              type="date"
              value={formData.lastWateredDate}
              onChange={(e) => setFormData({ ...formData, lastWateredDate: e.target.value })}
              className="w-full p-2 border rounded-md"
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
              Add Cultivation
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

export default CultivationForm;