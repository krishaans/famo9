import { Coins, Sprout, ShoppingCart, Store, Droplets, Users, Cloud, ShoppingBag, Stethoscope, TrendingUp, Bot, Bell, UserCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  name: string;
  icon: LucideIcon;
  path: string;
  description?: string;
}

export const mainFeatures: Feature[] = [
  { name: 'Today Prices', icon: Coins, path: '/today-prices' },
  { name: 'How to Farm', icon: Sprout, path: '/how-to-farm' },
  { name: 'Buy Products', icon: ShoppingCart, path: '/buy' },
  { name: 'Sell Products', icon: Store, path: '/sell' },
];

export const coreFeatures: Feature[] = [
  { name: 'Water Reminder', icon: Droplets, path: '/water-reminder' },
  { name: 'Worker Marker', icon: Users, path: '/worker-marker' },
  { name: 'Weather', icon: Cloud, path: '/weather' },
  { name: 'Shop', icon: ShoppingBag, path: '/shop' },
  { name: 'Doctor', icon: Stethoscope, path: '/doctor' },
];

export const proFeatures: Feature[] = [
  { name: 'Future Predictions', icon: TrendingUp, path: '/future-predictions' },
  { name: 'AI Doctor', icon: Bot, path: '/doctor' },
];

export const comingFeatures: Feature[] = [
  { name: 'Animal Alarm', icon: Bell, path: '#', description: 'Get alerts for animal intrusions' },
  { name: 'Account Manager', icon: UserCog, path: '#', description: 'Manage your farm accounts' },
  { name: 'AI Doctor', icon: Bot, path: '#', description: 'Advanced crop disease detection' },
];