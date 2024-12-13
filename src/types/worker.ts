export interface WorkSession {
  id: string;
  startTime: string;
  endTime?: string;
  pausedDuration: number;
  totalEarnings: number;
  tip?: number;
}

export interface Worker {
  id: string;
  username: string;
  gender: 'male' | 'female';
  startDate: string;
  hourlyRate: number;
  isWorking: boolean;
  isPaused: boolean;
  currentSessionStart?: string;
  pauseStart?: string;
  sessions: WorkSession[];
}