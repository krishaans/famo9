import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface WorkerFormProps {
  onSubmit: (worker: any) => void;
  onClose: () => void;
}

const WorkerForm: React.FC<WorkerFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    startDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      hourlyRate: formData.gender === 'male' ? 350 : 250,
    });
    onClose();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md">
        <Dialog.Title className="text-2xl font-bold text-primary mb-6">
          Add New Worker
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
              required
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
              Add Worker
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

export default WorkerForm;