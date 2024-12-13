import { useState, useEffect } from 'react';
import type { Worker, WorkSession } from '../types/worker';

const STORAGE_KEY = 'famo-workers';

export const useWorkers = () => {
  const [workers, setWorkers] = useState<Worker[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workers));
  }, [workers]);

  const addWorker = (worker: Omit<Worker, 'id' | 'isWorking' | 'isPaused' | 'sessions'>) => {
    const newWorker: Worker = {
      ...worker,
      id: crypto.randomUUID(),
      isWorking: false,
      isPaused: false,
      sessions: [],
    };
    setWorkers((prev) => [...prev, newWorker]);
  };

  const startWork = (workerId: string) => {
    setWorkers((prev) =>
      prev.map((worker) =>
        worker.id === workerId
          ? {
              ...worker,
              isWorking: true,
              currentSessionStart: new Date().toISOString(),
            }
          : worker
      )
    );
  };

  const pauseWork = (workerId: string) => {
    setWorkers((prev) =>
      prev.map((worker) =>
        worker.id === workerId
          ? {
              ...worker,
              isPaused: true,
              pauseStart: new Date().toISOString(),
            }
          : worker
      )
    );
  };

  const resumeWork = (workerId: string) => {
    setWorkers((prev) =>
      prev.map((worker) => {
        if (worker.id === workerId && worker.pauseStart) {
          const pauseDuration =
            new Date().getTime() - new Date(worker.pauseStart).getTime();
          return {
            ...worker,
            isPaused: false,
            pauseStart: undefined,
            sessions: worker.sessions.map((session, index) =>
              index === worker.sessions.length - 1
                ? {
                    ...session,
                    pausedDuration: (session.pausedDuration || 0) + pauseDuration,
                  }
                : session
            ),
          };
        }
        return worker;
      })
    );
  };

  const stopWork = (workerId: string) => {
    setWorkers((prev) =>
      prev.map((worker) => {
        if (worker.id === workerId && worker.currentSessionStart) {
          const endTime = new Date().toISOString();
          const startTime = new Date(worker.currentSessionStart);
          const totalDuration =
            new Date(endTime).getTime() - startTime.getTime();
          const lastSession = worker.sessions[worker.sessions.length - 1];
          const actualDuration =
            totalDuration - (lastSession?.pausedDuration || 0);
          const hours = actualDuration / (1000 * 60 * 60);
          const totalEarnings = hours * worker.hourlyRate;

          const newSession: WorkSession = {
            id: crypto.randomUUID(),
            startTime: worker.currentSessionStart,
            endTime,
            pausedDuration: lastSession?.pausedDuration || 0,
            totalEarnings,
          };

          return {
            ...worker,
            isWorking: false,
            isPaused: false,
            currentSessionStart: undefined,
            pauseStart: undefined,
            sessions: [...worker.sessions, newSession],
          };
        }
        return worker;
      })
    );
  };

  const addTip = (workerId: string, sessionId: string, amount: number) => {
    setWorkers((prev) =>
      prev.map((worker) =>
        worker.id === workerId
          ? {
              ...worker,
              sessions: worker.sessions.map((session) =>
                session.id === sessionId
                  ? { ...session, tip: amount, totalEarnings: session.totalEarnings + amount }
                  : session
              ),
            }
          : worker
      )
    );
  };

  return {
    workers,
    addWorker,
    startWork,
    pauseWork,
    resumeWork,
    stopWork,
    addTip,
  };
};