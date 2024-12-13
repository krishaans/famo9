import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Crown } from 'lucide-react';

interface ProFeatureModalProps {
  onStartTrial: () => void;
  onClose: () => void;
}

const ProFeatureModal: React.FC<ProFeatureModalProps> = ({ onStartTrial, onClose }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
          <Dialog.Title className="text-2xl font-bold text-primary">
            Upgrade to Pro
          </Dialog.Title>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-lg">Pro Features Include:</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              Advanced market predictions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              Weather impact analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              Profit optimization suggestions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span>
              Detailed farming calendars
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onStartTrial}
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
          >
            Start Free Trial
          </button>
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Buy Pro - $9.99/mo
          </button>
        </div>

        <Dialog.Close asChild>
          <button
            onClick={onClose}
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

export default ProFeatureModal;