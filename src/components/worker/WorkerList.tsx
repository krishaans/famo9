import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, DollarSign } from 'lucide-react';
import type { Worker } from '../../types/worker';

interface WorkerListProps {
  workers: Worker[];
  onStart: (id: string) => void;
  onPause: (id: string) => void;
  onResume: (id: string) => void;
  onStop: (id: string) => void;
  onAddTip: (workerId: string, sessionId: string, amount: number) => void;
}

const WorkerList: React.FC<WorkerListProps> = ({
  workers,
  onStart,
  onPause,
  onResume,
  onStop,
  onAddTip,
}) => {
  const [time, setTime] = useState<Record<string, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime: Record<string, number> = {};
        workers.forEach((worker) => {
          if (worker.isWorking && !worker.isPaused && worker.currentSessionStart) {
            const start = new Date(worker.currentSessionStart).getTime();
            const pausedDuration = worker.sessions[worker.sessions.length - 1]?.pausedDuration || 0;
            newTime[worker.id] = Date.now() - start - pausedDuration;
          } else {
            newTime[worker.id] = prev[worker.id] || 0;
          }
        });
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [workers]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const calculateEarnings = (worker: Worker, duration: number) => {
    const hours = duration / (1000 * 60 * 60);
    return hours * worker.hourlyRate;
  };

  return (
    <div className="space-y-4">
      {workers.map((worker) => (
        <div
          key={worker.id}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">{worker.username}</h3>
              <p className="text-sm text-gray-500">
                {worker.gender} - {worker.hourlyRate} Rs/hour
              </p>
            </div>
            <div className="text-2xl font-mono">
              {formatTime(time[worker.id] || 0)}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-x-2">
              {!worker.isWorking ? (
                <button
                  onClick={() => onStart(worker.id)}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                >
                  <Play size={20} />
                </button>
              ) : (
                <>
                  {worker.isPaused ? (
                    <button
                      onClick={() => onResume(worker.id)}
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                    >
                      <Play size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={() => onPause(worker.id)}
                      className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600"
                    >
                      <Pause size={20} />
                    </button>
                  )}
                  <button
                    onClick={() => onStop(worker.id)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <Square size={20} />
                  </button>
                </>
              )}
            </div>
            <div className="text-xl font-semibold text-primary">
              Rs. {calculateEarnings(worker, time[worker.id] || 0).toFixed(2)}
            </div>
          </div>

          {worker.sessions.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <h4 className="font-semibold mb-2">Previous Sessions</h4>
              <div className="space-y-2">
                {worker.sessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded"
                  >
                    <div className="text-sm">
                      <div>
                        {new Date(session.startTime).toLocaleDateString()} -{' '}
                        {session.endTime && new Date(session.endTime).toLocaleTimeString()}
                      </div>
                      <div className="text-gray-500">
                        Earnings: Rs. {session.totalEarnings.toFixed(2)}
                        {session.tip && ` (+ Rs. ${session.tip} tip)`}
                      </div>
                    </div>
                    {!session.tip && (
                      <button
                        onClick={() => {
                          const amount = parseFloat(prompt('Enter tip amount:') || '0');
                          if (amount > 0) {
                            onAddTip(worker.id, session.id, amount);
                          }
                        }}
                        className="text-primary hover:text-secondary"
                      >
                        <DollarSign size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkerList;