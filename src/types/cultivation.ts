export interface CultivationEvent {
  id: string;
  title: string;
  date: string;
  type: 'water' | 'fertilizer' | 'medicine';
  backgroundColor: string;
}

export interface Cultivation {
  id: string;
  username: string;
  vegetableType: string;
  genre: string;
  startDate: string;
  lastWateredDate: string;
  wateringInterval: number;
  fertilizerInterval: number;
  medicineInterval: number;
  events: CultivationEvent[];
}