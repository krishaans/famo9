export interface MarketPost {
  id: string;
  type: 'sell' | 'buy';
  userId: string;
  vegetableType: string;
  quantity: number;
  price: number;
  location: string;
  description: string;
  createdAt: string;
  status: 'active' | 'completed';
  contactNumber: string;
}

export interface PostFormData {
  vegetableType: string;
  quantity: number;
  price: number;
  location: string;
  description: string;
  contactNumber: string;
}