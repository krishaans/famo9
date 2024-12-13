import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Header from '../components/Header';
import CultivationForm from '../components/water-reminder/CultivationForm';
import CultivationCalendar from '../components/water-reminder/CultivationCalendar';
import CultivationList from '../components/water-reminder/CultivationList';
import { useCultivations } from '../hooks/useCultivations';

const WaterReminder: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const {
    cultivations,
    selectedId,
    selectedCultivation,
    addCultivation,
    selectCultivation,
  } = useCultivations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Water Reminder</h1>
          <Dialog.Root open={isFormOpen} onOpenChange={setIsFormOpen}>
            <Dialog.Trigger asChild>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                <Plus size={20} />
                Add Cultivation
              </button>
            </Dialog.Trigger>
            <CultivationForm
              onSubmit={addCultivation}
              onClose={() => setIsFormOpen(false)}
            />
          </Dialog.Root>
        </div>

        {cultivations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No cultivations added yet. Add your first cultivation to get started!
            </p>
          </div>
        ) : (
          <div>
            <CultivationList
              cultivations={cultivations}
              selectedId={selectedId}
              onSelect={selectCultivation}
            />
            {selectedCultivation && (
              <CultivationCalendar cultivation={selectedCultivation} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterReminder;