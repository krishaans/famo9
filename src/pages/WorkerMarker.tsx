import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Header from '../components/Header';
import WorkerForm from '../components/worker/WorkerForm';
import WorkerList from '../components/worker/WorkerList';
import { useWorkers } from '../hooks/useWorkers';

const WorkerMarker: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const {
    workers,
    addWorker,
    startWork,
    pauseWork,
    resumeWork,
    stopWork,
    addTip,
  } = useWorkers();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Worker Marker</h1>
          <Dialog.Root open={isFormOpen} onOpenChange={setIsFormOpen}>
            <Dialog.Trigger asChild>
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                <Plus size={20} />
                Add Worker
              </button>
            </Dialog.Trigger>
            <WorkerForm
              onSubmit={addWorker}
              onClose={() => setIsFormOpen(false)}
            />
          </Dialog.Root>
        </div>

        {workers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No workers added yet. Add your first worker to get started!
            </p>
          </div>
        ) : (
          <WorkerList
            workers={workers}
            onStart={startWork}
            onPause={pauseWork}
            onResume={resumeWork}
            onStop={stopWork}
            onAddTip={addTip}
          />
        )}
      </div>
    </div>
  );
};

export default WorkerMarker;