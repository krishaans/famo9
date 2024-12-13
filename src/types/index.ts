export interface VegetablePrice {
  name: string;
  price: number;
  unit: string;
}

export interface EconomicCenter {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  vegetables: VegetablePrice[];
}